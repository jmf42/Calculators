const site = require('./_data/site.js');
const calculators = require('./_data/calculators.js');
const niches = require('./_data/niches.json');
const ui = require('./_data/i18n/ui.json');

const languages = site.languages.map(l => l.code);
console.log(`Verifying ${languages.length} languages: ${languages.join(', ')}`);

const errors = [];

function checkText(obj, path, requiredLangs) {
    if (!obj) {
        errors.push(`Missing object at ${path}`);
        return;
    }
    requiredLangs.forEach(lang => {
        if (!obj[lang]) {
            errors.push(`Missing [${lang}] translation for ${path}`);
        }
    });
}

// 1. Verify Calculators
console.log('\n--- Verifying Calculators ---');
for (const [key, calc] of Object.entries(calculators)) {
    checkText(calc.slugs, `calculators.${key}.slugs`, languages);
    checkText(calc.titles, `calculators.${key}.titles`, languages);
    checkText(calc.subtitles, `calculators.${key}.subtitles`, languages);
    checkText(calc.metaDescriptions, `calculators.${key}.metaDescriptions`, languages);

    // Check config fields
    if (calc.config && calc.config.fields) {
        calc.config.fields.forEach(field => {
            if (field.label) {
                checkText(field.label, `calculators.${key}.fields.${field.id}.label`, languages);
            }
        });
    }

    // Check config resultLabel
    if (calc.config && calc.config.resultLabel) {
        checkText(calc.config.resultLabel, `calculators.${key}.config.resultLabel`, languages);
    }

    // Check config breakdown labels
    if (calc.config && calc.config.breakdown) {
        calc.config.breakdown.forEach((item, index) => {
            checkText(item.label, `calculators.${key}.breakdown[${index}]`, languages);
        });
    }
}

// 2. Verify Niches
console.log('\n--- Verifying Niches ---');
niches.forEach(niche => {
    checkText(niche.slugs, `niches.${niche.id}.slugs`, languages);
    checkText(niche.titles, `niches.${niche.id}.titles`, languages);
    // Subtitles are optional but good to check if present
    if (niche.subtitles) {
        // Not enforcing strict missing check for subtitles on niches as some might fall back to english or be optional
        // But let's check widely used ones
    }

    // Check overrides
    if (niche.overrides) {
        Object.keys(niche.overrides).forEach(fieldId => {
            const override = niche.overrides[fieldId];
            if (override.label) {
                checkText(override.label, `niches.${niche.id}.overrides.${fieldId}.label`, ['en']); // Only EN is strictly required for overrides? No, usually we want them localized if they override the label.
                // Actually, if we override a label, we should provide it for all langs, OR it falls back to calculator default?
                // The logic in niche system often merges. If an override label is provided, it REPLACEs the base label.
                // So if I provide an override for 'en', I probably need it for others too.

                // Let's create a warning if only EN is present but others are missing
                languages.forEach(lang => {
                    if (!override.label[lang] && override.label['en']) {
                        // This is a likely bug: we overrode the English label but left the specific niche label empty for others, 
                        // implying they might revert to the GENERIC base label which might be wrong for the niche.
                        errors.push(`Warning: Niche [${niche.id}] overrides field [${fieldId}] label in EN but missing [${lang}].`);
                    }
                });
            }
        });
    }
});

// 3. Verify UI
console.log('\n--- Verifying UI ---');

// Nav
checkText(ui.nav, 'ui.nav', languages);

// Footer
checkText(ui.footer, 'ui.footer', languages);

// CTA
checkText(ui.cta, 'ui.cta', languages);

// FAQ Title
checkText(ui.faq, 'ui.faq', languages); // This is a different structure in UI json?
// ui.faq seems to be flattened? Let's check the file content again.
// ui.faq in the file viewed previously lines 178-189:
// "faq": { "en": "Freq...", "es": ... }
// So yes, verify ui.faq directly.

// Home Title
checkText(ui.homeTitle, 'ui.homeTitle', languages);

// Home Desc
checkText(ui.homeDesc, 'ui.homeDesc', languages);

// Home Hero
checkText(ui.homeHero, 'ui.homeHero', languages);

// Home Tagline
checkText(ui.homeTagline, 'ui.homeTagline', languages);

// Stats
Object.keys(ui.stats).forEach(statKey => {
    checkText(ui.stats[statKey], `ui.stats.${statKey}`, languages);
});


console.log('\n--- Verification Complete ---');
if (errors.length > 0) {
    console.error(`Found ${errors.length} errors:`);
    errors.forEach(e => console.error(`- ${e}`));
    process.exit(1);
} else {
    console.log('✅ All checks passed!');
}
