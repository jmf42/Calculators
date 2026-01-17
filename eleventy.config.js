module.exports = function (eleventyConfig) {
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

    // Add filter for getting translation
    eleventyConfig.addFilter("t", function (key, lang, translations) {
        return translations[lang]?.[key] || translations['en']?.[key] || key;
    });

    // Generate homepages for all languages
    eleventyConfig.addCollection("homePages", function (collectionApi) {
        const site = require("./_data/site.js");
        const languages = site.languages.map(l => l.code);
        return languages.map(lang => ({ lang }));
    });

    // Generate all calculator pages dynamically (Base + Niches)
    eleventyConfig.addCollection("calculatorPages", function (collectionApi) {
        const calculators = require("./_data/calculators.js");
        const niches = require("./_data/niches.json");
        const site = require("./_data/site.js");
        const languages = site.languages.map(l => l.code);
        let pages = [];

        // 1. Generate Base Calculator Pages
        Object.keys(calculators).forEach(calcType => {
            const calc = calculators[calcType];
            languages.forEach(lang => {
                // Skip if language not fully supported in base calculator yet (fallback to English title if missing)
                const title = calc.titles[lang] || calc.titles['en'];
                const slug = calc.slugs[lang] || calc.slugs['en'];

                pages.push({
                    type: calcType,
                    lang: lang,
                    slug: slug,
                    title: title,
                    subtitle: calc.subtitles[lang] || calc.subtitles['en'],
                    metaDescription: calc.metaDescriptions[lang] || calc.metaDescriptions['en'],
                    config: calc.config, // Use base config
                    content: calc.content?.[lang] || calc.content?.['en'] || '',
                    faqs: calc.faqs?.[lang] || calc.faqs?.['en'] || []
                });
            });
        });

        // 2. Generate Niche Pages (Overrides)
        niches.forEach(niche => {
            const baseCalc = calculators[niche.baseType];
            if (!baseCalc) return;

            languages.forEach(lang => {
                const slug = niche.slugs[lang];
                if (!slug) return; // Skip if no slug for this language

                // Create a Deep Copy of config to avoid mutating base
                let nicheConfig = JSON.parse(JSON.stringify(baseCalc.config));

                // Apply Overrides (e.g. Default Loan Amount, Label Changes)
                if (niche.overrides) {
                    Object.keys(niche.overrides).forEach(fieldId => {
                        const field = nicheConfig.fields.find(f => f.id === fieldId);
                        if (field) {
                            const override = niche.overrides[fieldId];
                            if (override.default) field.default = override.default;
                            if (override.min) field.min = override.min;
                            if (override.max) field.max = override.max;
                            if (override.label && override.label[lang]) {
                                field.label[lang] = override.label[lang];
                            } else if (override.label && override.label['en']) {
                                // Fallback to English label override if specific lang missing
                                field.label[lang] = override.label['en'];
                            }
                        }
                    });
                }

                pages.push({
                    type: niche.baseType, // Keep base type for template logic
                    isNiche: true,
                    nicheId: niche.id,
                    lang: lang,
                    slug: slug,
                    title: niche.titles?.[lang] || niche.titles?.['en'],
                    subtitle: niche.subtitles?.[lang] || niche.subtitles?.['en'] || '',
                    metaDescription: baseCalc.metaDescriptions[lang], // Reuse base meta for now, ideally override too
                    config: nicheConfig,
                    content: baseCalc.content?.[lang] || '', // Reuse base content
                    faqs: baseCalc.faqs?.[lang] || [] // Reuse base FAQs
                });
            });
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
