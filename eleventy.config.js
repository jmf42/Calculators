module.exports = function (eleventyConfig) {
    const site = require("./_data/site.js");
    const defaultLang = site.defaultLang;

    const replaceYearTokens = (value) => {
        if (value === null || value === undefined) return value;
        return String(value).replace(/\b2026\b/g, String(site.year));
    };

    const buildCalcUrl = (lang, slug) => `${site.url}/${lang}/${slug}/`;

    const buildAlternates = ({ lang, slug, alternateSlugs, isLocalizedVariant }) => {
        const alternates = {};
        if (alternateSlugs && !isLocalizedVariant) {
            Object.entries(alternateSlugs).forEach(([code, altSlug]) => {
                if (altSlug) {
                    alternates[code] = buildCalcUrl(code, altSlug);
                }
            });
        }
        if (!alternates[lang]) {
            alternates[lang] = buildCalcUrl(lang, slug);
        }
        return alternates;
    };

    // Copy static assets
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("assets/images");
    eleventyConfig.addPassthroughCopy("robots.txt");

    // Watch for changes
    eleventyConfig.addWatchTarget("_data/");
    eleventyConfig.addWatchTarget("assets/");

    // Add filter for JSON stringify
    eleventyConfig.addFilter("jsonify", function (value) {
        return JSON.stringify(value);
    });

    // Add filter for mapping arrays
    eleventyConfig.addFilter("map", function (array, key) {
        return array.map(item => item[key]);
    });

    // Add filter for getting translation
    eleventyConfig.addFilter("t", function (key, lang, translations) {
        return translations[lang]?.[key] || translations['en']?.[key] || key;
    });

    // Generate homepages for all languages
    eleventyConfig.addCollection("homePages", function (collectionApi) {
        const languages = site.languages.map(l => l.code);
        return languages.map(lang => ({ lang }));
    });

    // Generate all calculator pages dynamically (Base + Niches + Locations + US States + Countries)
    eleventyConfig.addCollection("calculatorPages", function (collectionApi) {
        const calculators = require("./_data/calculators.js");
        const niches = require("./_data/niches.json");
        const locations = require("./_data/locations.json");
        const usStates = require("./_data/us-states.json");
        const countries = require("./_data/countries.json");
        const languages = site.languages.map(l => l.code);
        let pages = [];

        // [CONTENT PERMUTATOR] Engine to generate unique text
        const generateRichContent = (baseCalc, lang, location, stateData, countryData) => {
            let content = baseCalc.content?.[lang] || '';

            // 1. If we have State Data (e.g. Texas Page), inject specific data points
            if (stateData && lang === 'en') {
                const taxRate = stateData.mortgage?.propertyTaxRate || '1.1';
                const insurance = stateData.mortgage?.homeInsurance || '1200';

                // Templated Intro specific to State Pages
                const stateIntros = [
                    `<h2>Buying a Home in ${stateData.name}? Read This First.</h2><p>The real estate market in <strong>${stateData.name} (${stateData.abbr})</strong> has its own unique financial landscape. Unlike national averages, ${stateData.name} homeowners typically face a property tax rate of around <strong>${taxRate}%</strong>.</p>`,
                    `<h2>The True Cost of Homeownership in ${stateData.name}</h2><p>Planning to buy in the ${stateData.name} area? It's critical to calculate more than just principal and interest. In ${stateData.name}, you need to account for specific property tax rates (avg. ${taxRate}%) and insurance premiums (avg. $${insurance}/year).</p>`,
                    `<h2>${stateData.name} Mortgage Calculator: ${site.year} Edition</h2><p>Accurately estimating your monthly payments in ${stateData.name} requires local data. Our calculator renders a precise breakdown using ${stateData.name}'s specific average property tax of ${taxRate}%.</p>`
                ];

                // Randomly select an intro (deterministic based on name length to keep builds stable)
                const index = stateData.name.length % stateIntros.length;
                content = stateIntros[index] + content;
            }

            // 2. Standard Replacements
            if (location && lang === 'en' && location.medianPrice) {
                const median = new Intl.NumberFormat('en-US').format(location.medianPrice);
                content += `<p>Local snapshot: The median home price in ${location.name}, ${location.state} is around $${median}.</p>`;
            }

            const fallbackLocation = 'your area';
            const locName = location ? `${location.name}, ${location.state}` : (stateData ? stateData.name : (countryData ? countryData.nameLocalized : fallbackLocation));
            const city = location ? location.name : locName;
            const state = location ? location.state : (stateData ? stateData.name : (countryData ? countryData.nameLocalized : fallbackLocation));

            return replaceYearTokens(content)
                .replace(/{{location}}/g, locName)
                .replace(/{{city}}/g, city)
                .replace(/{{state}}/g, state);
        };

        // Helper to create page object
        const createPage = ({ type, lang, slug, title, subtitle, overrides, location = null, isNiche = false, localTips = null, localFaqs = null, currencySymbol = null, stateData = null, countryData = null, alternateSlugs = null }) => {
            const baseCalc = calculators[type];
            let config = JSON.parse(JSON.stringify(baseCalc.config));

            // Apply Overrides
            if (overrides) {
                Object.keys(overrides).forEach(fieldId => {
                    const field = config.fields.find(f => f.id === fieldId);
                    if (field) {
                        const override = overrides[fieldId];
                        if (override.default) field.default = override.default;
                        if (override.min) field.min = override.min;
                        if (override.max) field.max = override.max;
                        if (override.label && override.label[lang]) {
                            field.label[lang] = override.label[lang];
                        } else if (override.label && override.label['en']) {
                            field.label[lang] = override.label['en'];
                        }
                    }
                });
            }

            // Apply Location Specifics (e.g. median price)
            if (location) {
                const priceField = config.fields.find(f => f.id === 'price' || f.id === 'amount');
                if (priceField && location.medianPrice) {
                    priceField.default = location.medianPrice;
                }
            }

            // Apply State-specific defaults for mortgage
            if (stateData && stateData.mortgage && type === 'mortgage') {
                const priceField = config.fields.find(f => f.id === 'price');
                if (priceField && stateData.mortgage.medianPrice) {
                    priceField.default = stateData.mortgage.medianPrice;
                }
            }

            // Apply Country-specific defaults for mortgage
            if (countryData && countryData.mortgage && type === 'mortgage') {
                const priceField = config.fields.find(f => f.id === 'price');
                if (priceField && countryData.mortgage.medianPrice) {
                    priceField.default = countryData.mortgage.medianPrice;
                }
                const rateField = config.fields.find(f => f.id === 'rate');
                if (rateField && countryData.mortgage.typicalRate) {
                    rateField.default = countryData.mortgage.typicalRate;
                }
                const termField = config.fields.find(f => f.id === 'term' || f.id === 'years');
                if (termField && countryData.mortgage.typicalTerm) {
                    termField.default = countryData.mortgage.typicalTerm;
                }
                const downField = config.fields.find(f => f.id === 'downPayment' || f.id === 'down');
                if (downField && countryData.mortgage.downPayment) {
                    downField.default = countryData.mortgage.downPayment;
                }
            }

            // Inject Language for Frontend JS
            config.lang = lang;

            const isLocalizedVariant = Boolean(location || stateData || countryData);
            const canonicalUrl = buildCalcUrl(lang, slug);
            const alternates = buildAlternates({
                lang,
                slug,
                alternateSlugs,
                isLocalizedVariant
            });

            // [INTERNAL MESH LOGIC]
            const childNiches = (!location && !stateData && !countryData && !isNiche) ? niches.filter(n => n.baseType === type).map(n => ({
                title: replaceYearTokens(n.titles[lang] || n.titles['en']),
                slug: n.slugs[lang] || n.slugs['en']
            })) : null;

            const relatedLocations = (stateData) ? Object.values(usStates).filter(s => s.slug !== stateData.slug).slice(0, 12).map(s => ({
                name: s.name,
                slug: `mortgage-calculator-${s.slug}`
            })) : null;

            const baseMeta = baseCalc.metaDescriptions?.[lang] || baseCalc.metaDescriptions?.['en'] || '';
            const locationSuffix = location
                ? (type === 'mortgage'
                    ? ` Calculate for homes in ${location.name}, ${location.state}.`
                    : ` Calculate for ${location.name}, ${location.state}.`)
                : '';
            const metaDescription = replaceYearTokens(`${baseMeta}${locationSuffix}`.trim());

            return {
                type: type,
                lang: lang,
                slug: slug,
                title: replaceYearTokens(title),
                subtitle: replaceYearTokens(subtitle),
                metaDescription: metaDescription,
                config: config,
                content: generateRichContent(baseCalc, lang, location, stateData, countryData),
                faqs: localFaqs || baseCalc.faqs?.[lang] || [],
                location: location,
                isNiche: isNiche,
                localTips: localTips,
                currencySymbol: currencySymbol,
                stateData: stateData,
                countryData: countryData,
                childNiches: childNiches,
                relatedLocations: relatedLocations,
                canonicalUrl: canonicalUrl,
                alternates: alternates,
                lastmod: site.buildDate
            };
        };

        // 1. Generate Base Calculator Pages
        Object.keys(calculators).forEach(calcType => {
            const calc = calculators[calcType];
            languages.forEach(lang => {
                pages.push(createPage({
                    type: calcType,
                    lang: lang,
                    slug: calc.slugs[lang] || calc.slugs['en'],
                    title: calc.titles[lang] || calc.titles['en'],
                    subtitle: calc.subtitles[lang] || calc.subtitles['en'],
                    alternateSlugs: calc.slugs
                }));
            });
        });

        // 2. Generate Niche Pages
        niches.forEach(niche => {
            if (!calculators[niche.baseType]) return;

            languages.forEach(lang => {
                const slug = niche.slugs[lang];
                if (!slug) return;

                pages.push(createPage({
                    type: niche.baseType,
                    lang: lang,
                    slug: slug,
                    title: niche.titles?.[lang] || niche.titles?.['en'],
                    subtitle: niche.subtitles?.[lang] || niche.subtitles?.['en'],
                    overrides: niche.overrides,
                    isNiche: true,
                    alternateSlugs: niche.slugs
                }));

                // 3. Generate Niche x Location Pages (Only for English for now to save build time/space)
                if (lang === 'en' && locations && locations.length > 0 && niche.baseType === 'mortgage') {
                    locations.forEach(loc => {
                        // e.g. /en/mortgage-calculator-austin-tx/
                        const locSlug = `${slug}-${loc.slug}`;
                        // e.g. "Mortgage Calculator Austin, TX"
                        const baseTitle = niche.titles?.['en'] || calculators[niche.baseType].titles['en'];
                        const locTitle = `${baseTitle} ${loc.name}, ${loc.state}`;

                        pages.push(createPage({
                            type: niche.baseType,
                            lang: lang,
                            slug: locSlug,
                            title: locTitle,
                            subtitle: `Calculate ${niche.baseType} for homes in ${loc.name}, ${loc.stateFull}`,
                            overrides: niche.overrides,
                            location: loc,
                            isNiche: true
                        }));
                    });
                }
            });
        });

        // 4. Generate US State Pages (English only, for mortgage calculator)
        Object.keys(usStates).forEach(stateKey => {
            const state = usStates[stateKey];
            const mortgageCalc = calculators['mortgage'];
            if (!mortgageCalc) return;

            // Create state-specific mortgage page
            const slug = `mortgage-calculator-${state.slug}`;
            const title = `Mortgage Calculator ${state.name} (${state.abbr}) ${site.year}`;
            const subtitle = `Calculate mortgage payments with ${state.name} tax rates and insurance costs`;

            pages.push(createPage({
                type: 'mortgage',
                lang: 'en',
                slug: slug,
                title: title,
                subtitle: subtitle,
                stateData: state,
                localTips: state.mortgage?.tips || [],
                localFaqs: state.mortgage?.faqs || []
            }));
        });

        // 5. Generate Country Pages (in appropriate language)
        Object.keys(countries).forEach(countryKey => {
            const country = countries[countryKey];
            const mortgageCalc = calculators['mortgage'];
            if (!mortgageCalc) return;

            const lang = country.language;
            const baseSlug = mortgageCalc.slugs[lang] || mortgageCalc.slugs['en'];

            // Create country-specific mortgage page
            // URL format: /es/argentina/calculadora-hipoteca/
            const slug = `${country.slug}/${baseSlug}`;
            const title = `${mortgageCalc.titles[lang] || mortgageCalc.titles['en']} ${country.nameLocalized} ${site.year}`;
            const subtitle = `${mortgageCalc.subtitles[lang] || mortgageCalc.subtitles['en']} - ${country.nameLocalized}`;

            pages.push(createPage({
                type: 'mortgage',
                lang: lang,
                slug: slug,
                title: title,
                subtitle: subtitle,
                countryData: country,
                currencySymbol: country.currencySymbol,
                localTips: country.mortgage?.tips?.[lang] || country.mortgage?.tips || [],
                localFaqs: country.mortgage?.faqs?.[lang] || country.mortgage?.faqs || []
            }));
        });

        return pages;
    });


    // Minify HTML in production
    if (process.env.NODE_ENV === 'production') {
        eleventyConfig.addTransform("htmlmin", function (content) {
            if (this.page.outputPath && this.page.outputPath.endsWith(".html")) {
                let minified = require("html-minifier").minify(content, {
                    useShortDoctype: true,
                    removeComments: true,
                    collapseWhitespace: true
                });
                return minified;
            }
            return content;
        });
    }

    return {
        dir: {
            input: ".",
            includes: "_includes",
            data: "_data",
            output: "_site"
        },
        templateFormats: ["njk", "md", "html"],
        htmlTemplateEngine: "njk",
        markdownTemplateEngine: "njk"
    };
};
