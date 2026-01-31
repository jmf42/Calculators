module.exports = function (eleventyConfig) {
    const site = require("./_data/site.js");
    const articles = require("./_data/articles.js");
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
            state: " Updated for {{state}}.",
            country: " Updated for {{country}}."
        },
        es: {
            cityMortgage: " Calcula para viviendas en {{city}}, {{region}}.",
            city: " Calcula para {{city}}, {{region}}.",
            state: " Actualizado para {{state}}.",
            country: " Actualizado para {{country}}."
        },
        de: {
            cityMortgage: " Für Häuser in {{city}}, {{region}} berechnen.",
            city: " Für {{city}}, {{region}} berechnen.",
            state: " Aktualisiert für {{state}}.",
            country: " Aktualisiert für {{country}}."
        },
        fr: {
            cityMortgage: " Calculez pour des maisons à {{city}}, {{region}}.",
            city: " Calculez pour {{city}}, {{region}}.",
            state: " Mis à jour pour {{state}}.",
            country: " Mis à jour pour {{country}}."
        },
        pt: {
            cityMortgage: " Calcule para imóveis em {{city}}, {{region}}.",
            city: " Calcule para {{city}}, {{region}}.",
            state: " Atualizado para {{state}}.",
            country: " Atualizado para {{country}}."
        },
        it: {
            cityMortgage: " Calcola per case a {{city}}, {{region}}.",
            city: " Calcola per {{city}}, {{region}}.",
            state: " Aggiornato per {{state}}.",
            country: " Aggiornato per {{country}}."
        },
        nl: {
            cityMortgage: " Bereken voor woningen in {{city}}, {{region}}.",
            city: " Bereken voor {{city}}, {{region}}.",
            state: " Bijgewerkt voor {{state}}.",
            country: " Bijgewerkt voor {{country}}."
        },
        pl: {
            cityMortgage: " Oblicz dla domów w {{city}}, {{region}}.",
            city: " Oblicz dla {{city}}, {{region}}.",
            state: " Zaktualizowane dla {{state}}.",
            country: " Zaktualizowane dla {{country}}."
        },
        sv: {
            cityMortgage: " Beräkna för bostäder i {{city}}, {{region}}.",
            city: " Beräkna för {{city}}, {{region}}.",
            state: " Uppdaterat för {{state}}.",
            country: " Uppdaterat för {{country}}."
        },
        no: {
            cityMortgage: " Beregn for boliger i {{city}}, {{region}}.",
            city: " Beregn for {{city}}, {{region}}.",
            state: " Oppdatert for {{state}}.",
            country: " Oppdatert for {{country}}."
        },
        da: {
            cityMortgage: " Beregn for boliger i {{city}}, {{region}}.",
            city: " Beregn for {{city}}, {{region}}.",
            state: " Opdateret for {{state}}.",
            country: " Opdateret for {{country}}."
        },
        fi: {
            cityMortgage: " Laske asunnoille paikassa {{city}}, {{region}}.",
            city: " Laske {{city}}, {{region}}.",
            state: " Päivitetty alueelle {{state}}.",
            country: " Päivitetty alueelle {{country}}."
        }
    };
    const locationMetaSuffixesGeneric = {
        en: " Updated for {{country}}.",
        es: " Actualizado para {{country}}.",
        de: " Aktualisiert für {{country}}.",
        fr: " Mis à jour pour {{country}}.",
        pt: " Atualizado para {{country}}.",
        it: " Aggiornato per {{country}}.",
        nl: " Bijgewerkt voor {{country}}.",
        pl: " Zaktualizowane dla {{country}}.",
        sv: " Uppdaterat för {{country}}.",
        no: " Oppdatert for {{country}}.",
        da: " Opdateret til {{country}}.",
        fi: " Päivitetty {{country}}."
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
            const region = location.stateFull || location.state || countryData?.nameLocalized || countryData?.name || "";
            return fillTemplate(template, {
                city: location.name,
                region: region
            });
        }

        if (stateData) {
            const template = suffixes.state || fallback.state || "";
            return fillTemplate(template, { state: stateData.name });
        }

        if (countryData) {
            const countryName = countryData.nameLocalized || countryData.name;
            const template = type === "mortgage"
                ? (suffixes.country || fallback.country || "")
                : (locationMetaSuffixesGeneric[lang] || locationMetaSuffixesGeneric.en);
            return fillTemplate(template, { country: countryName });
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
            // Handle content as an object (localized) or string (fallback to English)
            let content = '';
            if (typeof baseCalc.content === 'object') {
                content = baseCalc.content[lang] || baseCalc.content['en'] || '';
            } else {
                content = (lang === 'en') ? (baseCalc.content || '') : '';
            }

            const fallbackLocation = 'your area';
            const countryName = countryData ? (countryData.nameLocalized || countryData.name) : "";
            const locationRegion = location ? (location.stateFull || location.state || countryName) : "";
            const locName = location
                ? [location.name, locationRegion].filter(Boolean).join(", ")
                : (stateData ? stateData.name : (countryName || fallbackLocation));
            const city = location ? location.name : (stateData ? stateData.name : (countryName || fallbackLocation));
            const state = location
                ? (location.state || location.stateFull || countryName || fallbackLocation)
                : (stateData ? stateData.name : (countryName || fallbackLocation));

            // Enhance content with Content Mixins if available
            // Now supports ALL languages if mixins exist
            if (stateData || location || countryData) {
                const mixinType = baseCalc.baseType === 'mortgage' ? 'mortgage' :
                    (baseCalc.baseType === 'loan' ? 'loan' : 'generic');

                // key into contentMixins[type][lang]
                const mixins = contentMixins[mixinType]?.[lang] || contentMixins[mixinType]?.['en'] || contentMixins.generic['en'];

                if (mixins) {
                    const seed = locName.length; // Deterministic seed
                    const pickMixin = (arr, offset) => {
                        if (!arr || arr.length === 0) return "";
                        return arr[(seed + offset) % arr.length];
                    };

                    const intro = pickMixin(mixins.intros, 0);
                    const marketCtx = pickMixin(mixins.marketContext, 1);
                    const closer = pickMixin(mixins.closers, 2);

                    // Data derivation for placeholders
                    const taxRate = stateData?.mortgage?.propertyTaxRate || '1.2'; // Default avg
                    const insuranceCost = stateData?.mortgage?.homeInsurance || '1200'; // Default avg
                    const downPayment = (countryData?.mortgage?.downPayment || 20) + '%';
                    const currencyCode = countryData?.currency || baseCalc?.config?.currency?.[lang] || 'USD';
                    const currencySymbolMap = {
                        USD: "$",
                        EUR: "€",
                        GBP: "£",
                        SEK: "kr",
                        NOK: "kr",
                        DKK: "kr",
                        PLN: "zł",
                        BRL: "R$",
                        CHF: "CHF",
                        CAD: "$",
                        AUD: "$",
                        NZD: "$",
                        MXN: "$",
                        COP: "$",
                        CRC: "₡"
                    };
                    const currencySymbol = countryData?.currencySymbol || baseCalc?.config?.currencySymbol || currencySymbolMap[currencyCode] || "$";

                    const fillPlaceholders = (text) => {
                        return text
                            .replace(/\{\{location\}\}/g, locName)
                            .replace(/\{\{year\}\}/g, site.year)
                            .replace(/\{\{title\}\}/g, baseCalc.titles[lang] || baseCalc.titles['en'])
                            .replace(/\{\{tax_rate\}\}/g, taxRate)
                            .replace(/\{\{insurance_cost\}\}/g, formatNumber(insuranceCost)) // Helper needed? formatNumber is a filter not available here directly
                            .replace(/\{\{currency_symbol\}\}/g, currencySymbol)
                            .replace(/\{\{down_payment\}\}/g, downPayment);
                    };

                    // Simple number formatter helper for inside this function
                    const formatNumber = (val) => new Intl.NumberFormat(lang === 'en' ? 'en-US' : (lang === 'de' ? 'de-DE' : 'en-US')).format(val);

                    // Localized Headers Map
                    const headers = {
                        buying: {
                            en: "Buying in", es: "¿Comprando en", de: "Kaufen in", fr: "Acheter à", pt: "Comprando em",
                            it: "Comprare casa a", nl: "Kopen in", pl: "Kupno domu w", sv: "Köpa bostad i", no: "Kjøpe bolig i",
                            da: "Køb af bolig i", fi: "Asunnon ostaminen"
                        },
                        context: {
                            en: "Local Market Context", es: "Contexto de Mercado", de: "Marktkontext", fr: "Contexte du Marché",
                            pt: "Contexto de Mercado", it: "Contesto di Mercato", nl: "Marktcontext", pl: "Kontekst Rynkowy",
                            sv: "Marknadskontext", no: "Markedskontekst", da: "Markedskontekst", fi: "Markkinatilanne"
                        },
                        next: {
                            en: "Next Steps", es: "Próximos Pasos", de: "Nächste Schritte", fr: "Prochaines Étapes",
                            pt: "Próximos Passos", it: "Prossimi Passi", nl: "Volgende Stappen", pl: "Następne Kroki",
                            sv: "Nästa Steg", no: "Neste Steg", da: "Næste Skridt", fi: "Seuraavat Vaiheet"
                        }
                    };

                    const buyingHeader = `${headers.buying[lang] || headers.buying.en} ${locName}?`;
                    const contextHeader = headers.context[lang] || headers.context.en;
                    const nextHeader = headers.next[lang] || headers.next.en;

                    // Reassemble Content
                    content = `
                        <div class="generated-content">
                            <h2>${buyingHeader}</h2>
                            <p class="lead">${fillPlaceholders(intro)}</p>
                            ${content}
                            <h3>${contextHeader}</h3>
                            <p>${fillPlaceholders(marketCtx)}</p>
                            <h3>${nextHeader}</h3>
                            <p>${fillPlaceholders(closer)}</p>
                        </div>
                    `;
                }
            }

            // 2. Standard Replacements for inner content vars
            // Note: Avoid injecting location-specific numeric snapshots without verified sources.

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

            // Avoid overriding calculator defaults with unverified local stats.

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

            // Build related calculators based on baseType (for internal linking)
            const currentBaseType = baseCalc.baseType || type;
            const relatedCalculators = (!location && !stateData && !countryData)
                ? Object.keys(calculators)
                    .filter(calcType => {
                        const calc = calculators[calcType];
                        return (calc.baseType === currentBaseType || calcType === currentBaseType) && calcType !== type;
                    })
                    .slice(0, 4)
                    .map(calcType => {
                        const calc = calculators[calcType];
                        return {
                            title: replaceYearTokens(calc.titles[lang] || calc.titles['en']),
                            slug: calc.slugs[lang] || calc.slugs['en'],
                            subtitle: calc.subtitles?.[lang] || calc.subtitles?.['en'] || ''
                        };
                    })
                : null;

            // Build related articles for this calculator type (for content marketing SEO)
            const articleTypeMap = {
                'mortgage': ['mortgage-guide-2026', 'closing-costs-explained'],
                'crypto': ['crypto-profit-strategy']
            };
            const relatedArticleIds = articleTypeMap[currentBaseType] || articleTypeMap[type] || [];
            const relatedArticles = (!location && !stateData && !countryData && relatedArticleIds.length > 0)
                ? articles
                    .filter(article => relatedArticleIds.includes(article.id))
                    .map(article => ({
                        title: article.titles[lang] || article.titles['en'],
                        slug: article.slugs[lang] || article.slugs['en'],
                        description: article.metaDescription[lang] || article.metaDescription['en']
                    }))
                : null;

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
                localTips: (localTips && localTips.length) ? localTips : null,
                currencySymbol: resolvedCurrencySymbol,
                stateData: stateData,
                countryData: countryData,
                childNiches: childNiches,
                relatedCalculators: relatedCalculators,
                relatedArticles: relatedArticles,
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

                // 3. Generate Niche x Location Pages (Expanded for high-value Loan niches & International Cities)
                if (locations && locations.length > 0 && (niche.baseType === 'mortgage' || niche.id === 'pool-loan' || niche.id === 'business-loan' || niche.id === 'rv-loan' || niche.id === 'solar')) {
                    locations.forEach(loc => {
                        // Logic Branch: International vs US
                        let isIntl = !!loc.country;
                        let targetCountry = isIntl ? countries[loc.country] : null;

                        // Filter 1: Language Match
                        // If it's an International City (e.g. Berlin), ONLY generate for its native language (e.g. 'de')
                        if (isIntl) {
                            if (targetCountry.language !== lang) return;
                        } else {
                            // US Cities: Only generate for English
                            if (lang !== 'en') return;
                            // US Logic: Skip mortgage if no price
                            if (!loc.medianPrice && niche.baseType === 'mortgage') return;
                        }

                        // e.g. /en/pool-loan-calculator-san-francisco-ca/ OR /de/berlin/wohnmobil-kreditrechner/
                        let locSlug = "";
                        if (isIntl) {
                            // /de/berlin/wohnmobil-kreditrechner/
                            locSlug = `${loc.slug}/${slug}`;
                        } else {
                            // /en/pool-loan-calculator-san-francisco-ca/
                            locSlug = `${slug}-${loc.slug}`;
                        }

                        // [SEO TITLES] Dynamic generation for CTR
                        let locTitle = "";
                        let locSubtitle = "";
                        // Fallback title to English if current lang unavailable (shouldn't happen due to filter, but safe)
                        const baseTitle = niche.titles?.[lang] || niche.titles?.['en'] || calculators[niche.baseType].titles['en'];
                        const baseSubtitle = niche.subtitles?.[lang] || niche.subtitles?.['en'];

                        if (isIntl) {
                            // International Format: "Wohnmobil Kreditrechner Berlin 2026"
                            locTitle = `${baseTitle} ${loc.name} ${site.year}`;
                            locSubtitle = `${baseSubtitle} - ${loc.name}, ${targetCountry.nameLocalized}`;
                        } else {
                            // US Format (Existing)
                            if (niche.id === 'pool-loan') {
                                locTitle = `${loc.name}, ${loc.state} Pool Financing ${site.year} | Loan Calculator`;
                                locSubtitle = `Compare pool loan rates in ${loc.name}, ${loc.stateFull}`;
                            } else if (niche.id === 'business-loan') {
                                locTitle = `${loc.name}, ${loc.state} Business Loans ${site.year} | Calculator`;
                                locSubtitle = `Estimate payments for business expansion in ${loc.name}, ${loc.stateFull}`;
                            } else {
                                locTitle = `${loc.name}, ${loc.state} Mortgage Calculator ${site.year}`;
                                locSubtitle = `Calculate mortgage payments for homes in ${loc.name}, ${loc.stateFull}`;
                            }
                        }

                        pages.push(createPage({
                            type: niche.baseType,
                            lang: lang,
                            slug: locSlug,
                            title: locTitle,
                            subtitle: locSubtitle,
                            overrides: niche.overrides,
                            location: loc,
                            isNiche: true,
                            // Content Salt Injection
                            countryData: targetCountry, // Inject Country Data for Intl Cities
                            localTips: null, // Avoid unverified local tips
                            currencySymbol: targetCountry?.currencySymbol // Force currency
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
            const subtitle = `Calculate mortgage payments and compare scenarios for ${state.name}`;

            pages.push(createPage({
                type: 'mortgage',
                lang: 'en',
                slug: slug,
                title: title,
                subtitle: subtitle,
                stateData: state,
                localTips: null,
                localFaqs: null
            }));
        });

        // 5. Generate Country Pages (Expanded for all applicable niches)
        Object.keys(countries).forEach(countryKey => {
            const country = countries[countryKey];
            const lang = country.language;

            // Loop through ALL niches to find valid ones for this country
            niches.forEach(niche => {
                const baseSlug = niche.slugs[lang] || niche.slugs['en'];
                if (!baseSlug) return;

                // Allow specific niche types for country pages
                // Mortgage is always allowed. Loans/Business/Sun are allowed if they have translations or valid defaults.
                if (niche.baseType === 'mortgage' || niche.id === 'rv-loan' || niche.id === 'business-loan' || niche.id === 'solar') {

                    // URL: /de/deutschland/wohnmobil-kreditrechner/
                    const slug = `${country.slug}/${baseSlug}`;

                    // Titles: "Wohnmobil Kreditrechner Deutschland 2026"
                    const nicheTitle = niche.titles[lang] || niche.titles['en'];
                    const title = `${nicheTitle} ${country.nameLocalized} ${site.year}`;
                    const subtitle = `${niche.subtitles[lang] || niche.subtitles['en']} - ${country.nameLocalized}`;

                    pages.push(createPage({
                        type: niche.baseType,
                        lang: lang,
                        slug: slug,
                        title: title,
                        subtitle: subtitle,
                        countryData: country,
                        currencySymbol: country.currencySymbol,
                        localTips: null,
                        localFaqs: null,
                        overrides: niche.overrides, // Important for niche defaults
                        isNiche: true
                    }));
                }
            });

            // Also generate the base Mortgage Calculator for the country (Legacy support)
            // This might duplicate the loop above if 'mortgage' is in niches, but we need to ensure the BASE mortgage calc exists too.
            const mortgageCalc = calculators['mortgage'];
            if (mortgageCalc) {
                const baseSlug = mortgageCalc.slugs[lang] || mortgageCalc.slugs['en'];
                const slug = `${country.slug}/${baseSlug}`;

                // Check if we already added this via niches loop to avoid dupe
                if (!pages.find(p => p.slug === slug)) {
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
                        localTips: null,
                        localFaqs: null
                    }));
                }
            }
        });

        return pages;
    });

    eleventyConfig.addCollection("articlePages", collection => {
        const pages = [];
        const languages = site.languages.map(l => l.code);

        articles.forEach(article => {
            languages.forEach(lang => {
                const slug = article.slugs[lang];
                // Fallback to English content if current lang missing (optional, or just skip)
                const content = article.content[lang] || article.content['en'];

                if (slug && content) {
                    pages.push({
                        id: article.id,
                        lang: lang,
                        slug: slug,
                        title: article.titles[lang] || article.titles['en'],
                        metaDescription: article.metaDescription[lang] || article.metaDescription['en'],
                        content: content,
                        alternates: article.slugs, // For hreflang
                        canonicalUrl: buildCalcUrl(lang, slug)
                    });
                }
            });
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
