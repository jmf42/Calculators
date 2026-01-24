module.exports = function (eleventyConfig) {
    const site = require("./_data/site.js");
    const defaultLang = site.defaultLang;

    const replaceYearTokens = (value) => {
        if (value === null || value === undefined) return value;
        return String(value).replace(/\b2026\b/g, String(site.year));
    };

    // Canonical URL format must match hosting behavior:
    // - Firebase `cleanUrls: true` => no `.html`
    // - Firebase `trailingSlash: false` => no trailing slash (except root)
    const buildCalcUrl = (lang, slug) => `${site.url}/${lang}/${slug}`;

    const canonicalizeUrl = (input) => {
        if (input === null || input === undefined) return input;
        const raw = String(input).trim();
        if (!raw) return raw;

        const absolute = raw.startsWith("http://") || raw.startsWith("https://")
            ? raw
            : site.url.replace(/\/$/, "") + (raw.startsWith("/") ? raw : `/${raw}`);

        try {
            const url = new URL(absolute);
            url.search = "";
            url.hash = "";

            if (url.pathname.endsWith("/index.html")) {
                url.pathname = url.pathname.slice(0, -"/index.html".length) || "/";
            }
            if (url.pathname.endsWith(".html")) {
                url.pathname = url.pathname.slice(0, -".html".length) || "/";
            }
            if (url.pathname.length > 1 && url.pathname.endsWith("/")) {
                url.pathname = url.pathname.slice(0, -1);
            }
            if (!url.pathname) {
                url.pathname = "/";
            }

            return url.toString();
        } catch {
            return absolute;
        }
    };

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

    const appCategoryMap = {
        mortgage: "FinanceApplication",
        loan: "FinanceApplication",
        roi: "BusinessApplication",
        wedding: "LifestyleApplication",
        solar: "BusinessApplication",
        flooring: "BusinessApplication",
        roofing: "BusinessApplication"
    };

    const locationMetaSuffixes = {
        en: {
            cityMortgage: " Calculate for homes in {{city}}, {{region}}.",
            city: " Calculate for {{city}}, {{region}}.",
            state: " Updated for {{state}} mortgage rates, taxes, and insurance.",
            country: " Updated for {{country}} with mortgage rates, taxes, and typical down payment."
        },
        es: {
            cityMortgage: " Calcula para viviendas en {{city}}, {{region}}.",
            city: " Calcula para {{city}}, {{region}}.",
            state: " Actualizado para tasas, impuestos y seguros hipotecarios de {{state}}.",
            country: " Actualizado para {{country}} con tasas hipotecarias, impuestos y pago inicial típicos."
        },
        de: {
            cityMortgage: " Für Häuser in {{city}}, {{region}} berechnen.",
            city: " Für {{city}}, {{region}} berechnen.",
            state: " Aktualisiert für {{state}}-Hypothekenzinsen, Steuern und Versicherungen.",
            country: " Aktualisiert für {{country}} mit Hypothekenzinsen, Steuern und typischer Anzahlung."
        },
        fr: {
            cityMortgage: " Calculez pour des maisons à {{city}}, {{region}}.",
            city: " Calculez pour {{city}}, {{region}}.",
            state: " Mis à jour pour les taux, taxes et assurances hypothécaires de {{state}}.",
            country: " Mis à jour pour {{country}} avec taux hypothécaires, taxes et apport typiques."
        },
        pt: {
            cityMortgage: " Calcule para imóveis em {{city}}, {{region}}.",
            city: " Calcule para {{city}}, {{region}}.",
            state: " Atualizado para taxas, impostos e seguros de hipoteca de {{state}}.",
            country: " Atualizado para {{country}} com taxas de hipoteca, impostos e entrada típica."
        },
        it: {
            cityMortgage: " Calcola per case a {{city}}, {{region}}.",
            city: " Calcola per {{city}}, {{region}}.",
            state: " Aggiornato per tassi, imposte e assicurazioni ipotecarie di {{state}}.",
            country: " Aggiornato per {{country}} con tassi ipotecari, imposte e anticipo tipici."
        },
        nl: {
            cityMortgage: " Bereken voor woningen in {{city}}, {{region}}.",
            city: " Bereken voor {{city}}, {{region}}.",
            state: " Bijgewerkt voor hypotheekrentes, belastingen en verzekeringen van {{state}}.",
            country: " Bijgewerkt voor {{country}} met hypotheekrentes, belastingen en typische aanbetaling."
        },
        pl: {
            cityMortgage: " Oblicz dla domów w {{city}}, {{region}}.",
            city: " Oblicz dla {{city}}, {{region}}.",
            state: " Zaktualizowane o stawki, podatki i ubezpieczenia hipoteczne w {{state}}.",
            country: " Zaktualizowane dla {{country}} z typowymi stopami hipotecznymi, podatkami i wkładem własnym."
        },
        sv: {
            cityMortgage: " Beräkna för bostäder i {{city}}, {{region}}.",
            city: " Beräkna för {{city}}, {{region}}.",
            state: " Uppdaterat för {{state}}-bolåneräntor, skatter och försäkringar.",
            country: " Uppdaterat för {{country}} med bolåneräntor, skatter och typisk kontantinsats."
        },
        no: {
            cityMortgage: " Beregn for boliger i {{city}}, {{region}}.",
            city: " Beregn for {{city}}, {{region}}.",
            state: " Oppdatert for {{state}}-boliglånsrenter, skatter og forsikring.",
            country: " Oppdatert for {{country}} med boliglånsrenter, skatter og typisk egenkapital."
        },
        da: {
            cityMortgage: " Beregn for boliger i {{city}}, {{region}}.",
            city: " Beregn for {{city}}, {{region}}.",
            state: " Opdateret til {{state}}-boliglånsrenter, skatter og forsikringer.",
            country: " Opdateret til {{country}} med boliglånsrenter, skatter og typisk udbetaling."
        },
        fi: {
            cityMortgage: " Laske asunnoille paikassa {{city}}, {{region}}.",
            city: " Laske {{city}}, {{region}}.",
            state: " Päivitetty {{state}}-asuntolainakoroille, veroille ja vakuutuksille.",
            country: " Päivitetty {{country}}-tyypillisille asuntolainakoroille, veroille ja käsirahalle."
        }
    };

    const fillTemplate = (template, values) => {
        if (!template) return "";
        return template.replace(/\{\{(\w+)\}\}/g, (match, key) => values[key] || "");
    };

    const buildLocationMetaSuffix = ({ lang, type, location, stateData, countryData }) => {
        const suffixes = locationMetaSuffixes[lang] || locationMetaSuffixes.en;
        const fallback = locationMetaSuffixes.en;

        if (location) {
            const template = (type === "mortgage" ? suffixes.cityMortgage : suffixes.city)
                || (type === "mortgage" ? fallback.cityMortgage : fallback.city)
                || "";
            return fillTemplate(template, {
                city: location.name,
                region: location.stateFull || location.state
            });
        }

        if (stateData) {
            const template = suffixes.state || fallback.state || "";
            return fillTemplate(template, { state: stateData.name });
        }

        if (countryData) {
            const template = suffixes.country || fallback.country || "";
            return fillTemplate(template, { country: countryData.nameLocalized || countryData.name });
        }

        return "";
    };

    // Copy static assets
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("assets/images");

    // Never publish internal agent workflows/configs
    eleventyConfig.ignores.add(".agent/**");

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

    // Canonicalize URLs across templates/sitemap (cleanUrls + no trailing slash)
    eleventyConfig.addFilter("canonicalUrl", function (value) {
        return canonicalizeUrl(value);
    });

    // Add filter for formatting numbers
    eleventyConfig.addFilter("formatNumber", function (value) {
        if (!value) return "0";
        return new Intl.NumberFormat('en-US').format(value);
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
        const usStates = require("./_data/usStates.json");
        const countries = require("./_data/countries.json");
        const contentMixins = require("./_data/contentMixins.js");
        const languages = site.languages.map(l => l.code);
        let pages = [];

        // [CONTENT PERMUTATOR] Engine to generate unique text
        const generateRichContent = (baseCalc, lang, location, stateData, countryData) => {
            let content = baseCalc.content?.[lang] || '';

            // Only enhance content for English programmatic pages (State/Location)
            if (lang === 'en' && (stateData || location)) {
                const mixinType = baseCalc.baseType === 'mortgage' ? 'mortgage' :
                    baseCalc.baseType === 'loan' ? 'loan' : 'generic';
                const mixins = contentMixins[mixinType] || contentMixins.generic;

                const locName = stateData ? stateData.name : location.name;
                const seed = locName.length; // Deterministic seed

                // Helper to pick mixin
                const pickMixin = (arr, offset) => {
                    const template = arr[(seed + offset) % arr.length];
                    return template.replace(/\{\{location\}\}/g, locName)
                        .replace(/\{\{year\}\}/g, site.year)
                        .replace(/\{\{title\}\}/g, baseCalc.titles['en']);
                };

                const intro = pickMixin(mixins.intros, 0);
                const marketCtx = pickMixin(mixins.marketContext, 1);
                const closer = pickMixin(mixins.closers, 2);

                // Specific Data Injection
                let dataGraph = "";
                if (baseCalc.baseType === 'mortgage' && stateData) {
                    const tax = stateData.mortgage.propertyTaxRate;
                    const insurance = stateData.mortgage.homeInsurance;
                    dataGraph = `<p>Specific to <strong>${locName}</strong>, this calculator factors in the average property tax rate of <strong>${tax}%</strong> and annual home insurance of <strong>$${insurance}</strong>, which significantly affects your monthly payment.</p>`;
                }

                // Reassemble Content: Intro -> Data -> Original Content (truncated) -> Market -> Closer
                // We keep some of the original content but wrap it
                content = `
                    <div class="generated-content">
                        <h2>Buying in ${locName}?</h2>
                        <p class="lead">${intro}</p>
                        ${dataGraph}
                        ${content}
                        <h3>Local Market Context</h3>
                        <p>${marketCtx}</p>
                        <h3>Next Steps</h3>
                        <p>${closer}</p>
                    </div>
                `;
            }

            // 2. Standard Replacements
            if (location && lang === 'en' && location.medianPrice) {
                const median = new Intl.NumberFormat('en-US').format(location.medianPrice);
                const downPayment = Math.round(location.medianPrice * 0.2);
                const downPaymentFormatted = new Intl.NumberFormat('en-US').format(downPayment);
                content += `<h2>${location.name} Home Price Snapshot</h2>`;
                content += `<ul><li>Median home price: <strong>$${median}</strong></li><li>20% down payment example: <strong>$${downPaymentFormatted}</strong></li></ul>`;
            }

            const fallbackLocation = 'your area';
            const locName = location ? `${location.name}, ${location.state}` : (stateData ? stateData.name : (countryData ? countryData.nameLocalized : fallbackLocation));
            const city = location ? location.name : locName;
            const state = location ? location.state : (stateData ? stateData.name : (countryData ? countryData.nameLocalized : fallbackLocation));

            // 3. Inject SEO Keywords for Reach - REMOVED (Handled in template now)
            // const seoData = baseCalc.seo?.[lang] || baseCalc.seo?.['en'];
            // if (seoData && (seoData.synonyms || seoData.relatedTerms)) {
            //     const terms = [...(seoData.synonyms || []), ...(seoData.relatedTerms || [])].slice(0, 8);
            //     if (terms.length > 0 && !content.includes('Common Searches')) {
            //         content += `<div class="seo-terms"><h3>Common Searches</h3><ul>${terms.map(t => `<li>${t}</li>`).join('')}</ul></div>`;
            //     }
            // }

            return replaceYearTokens(content)
                .replace(/{{location}}/g, locName)
                .replace(/{{city}}/g, city)
                .replace(/{{state}}/g, state);
        };

        // Helper to create page object
        const createPage = ({ type, lang, slug, title, subtitle, overrides, location = null, isNiche = false, localTips = null, localFaqs = null, metaDescription = null, faqs = null, currencySymbol = null, stateData = null, countryData = null, alternateSlugs = null }) => {
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

            const resolvedCurrencyCode = countryData?.currency || config.currency?.[lang] || 'USD';
            const resolvedLocaleCode = countryData?.locale || config.locale?.[lang] || 'en-US';
            const resolvedCurrencySymbol = currencySymbol || countryData?.currencySymbol || null;

            if (!config.currency) {
                config.currency = {};
            }
            if (!config.locale) {
                config.locale = {};
            }

            config.currency[lang] = resolvedCurrencyCode;
            config.locale[lang] = resolvedLocaleCode;
            if (resolvedCurrencySymbol) {
                config.currencySymbol = resolvedCurrencySymbol;
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

            // Only show featuredLocations for mortgage niches (since only mortgage has location pages)
            const baseCalcType = calculators[type]?.baseType || type;
            const featuredLocations = (lang === 'en' && isNiche && !location && !stateData && !countryData && baseCalcType === 'mortgage')
                ? locations.filter(loc => loc.medianPrice).slice(0, 12).map(loc => ({
                    name: loc.name,
                    state: loc.state,
                    slug: `${slug}-${loc.slug}`
                }))
                : null;

            const baseMeta = metaDescription || baseCalc.metaDescription?.[lang] || baseCalc.metaDescription?.['en'] || baseCalc.metaDescriptions?.[lang] || baseCalc.metaDescriptions?.['en'] || '';
            const locationSuffix = buildLocationMetaSuffix({
                lang,
                type,
                location,
                stateData,
                countryData
            });
            const computedMetaDescription = replaceYearTokens(`${baseMeta}${locationSuffix}`.trim());
            const seo = baseCalc.seo?.[lang] || baseCalc.seo?.en || null;
            const baseFaqs = faqs || baseCalc.faqs?.[lang] || [];
            const mergedFaqs = seo?.faqBoost ? baseFaqs.concat(seo.faqBoost) : baseFaqs;
            const appCategory = appCategoryMap[type] || "UtilitiesApplication";

            return {
                type: type,
                lang: lang,
                slug: slug,
                title: replaceYearTokens(title),
                subtitle: replaceYearTokens(subtitle),
                metaDescription: computedMetaDescription,
                config: config,
                content: generateRichContent(baseCalc, lang, location, stateData, countryData),
                faqs: mergedFaqs,
                seo: seo,
                location: location,
                isNiche: isNiche,
                localTips: localTips,
                currencySymbol: resolvedCurrencySymbol,
                stateData: stateData,
                countryData: countryData,
                childNiches: childNiches,
                relatedLocations: relatedLocations,
                featuredLocations: featuredLocations,
                canonicalUrl: canonicalUrl,
                alternates: alternates,
                lastmod: site.buildDate,
                appCategory: appCategory
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
                    metaDescription: niche.metaDescription?.[lang] || niche.metaDescription?.['en'],
                    faqs: niche.faqs?.[lang] || niche.faqs?.['en'],
                    overrides: niche.overrides,
                    isNiche: true,
                    alternateSlugs: niche.slugs
                }));

                // 3. Generate Niche x Location Pages (Only for English for now to save build time/space)
                if (lang === 'en' && locations && locations.length > 0 && niche.baseType === 'mortgage') {
                    locations.forEach(loc => {
                        if (!loc.medianPrice) {
                            return;
                        }
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
                let minified = require("html-minifier-terser").minify(content, {
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
