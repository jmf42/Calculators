// Site-wide configuration with environment variable support
module.exports = {
    name: "CalcKit",
    url: process.env.SITE_URL || "https://calc-kit.com",
    languages: [
        { code: "en", name: "English", flag: "🇺🇸" },
        { code: "es", name: "Español", flag: "🇪🇸" },
        { code: "de", name: "Deutsch", flag: "🇩🇪" },
        { code: "fr", name: "Français", flag: "🇫🇷" },
        { code: "pt", name: "Português", flag: "🇧🇷" },
        { code: "it", name: "Italiano", flag: "🇮🇹" },
        { code: "nl", name: "Nederlands", flag: "🇳🇱" },
        { code: "pl", name: "Polski", flag: "🇵🇱" },
        { code: "sv", name: "Svenska", flag: "🇸🇪" },
        { code: "no", name: "Norsk", flag: "🇳🇴" },
        { code: "da", name: "Dansk", flag: "🇩🇰" },
        { code: "fi", name: "Suomi", flag: "🇫🇮" }
    ],
    defaultLang: "en",
    year: new Date().getFullYear(),
    buildDate: new Date().toISOString().split("T")[0],

    // Analytics configuration
    analytics: {
        gaId: process.env.GA_TRACKING_ID || "G-L98HCWCJH5",
        adSenseId: process.env.ADSENSE_ID || "ca-pub-4388136005778314",
        adConversionId: process.env.AD_CONVERSION_ID || "AW-CONVERSION_ID/CONVERSION_LABEL"
    },

    // Custom Integrations (keep reference for future)
    integrations: {
        url: process.env.INTEGRATION_URL || "#"
    },

    // Email service
    email: {
        apiEndpoint: process.env.EMAIL_API_ENDPOINT || "/api/subscribe"
    },

    // Environment flags
    production: process.env.NODE_ENV === "production",

    // E-E-A-T / Author Persona
    author: {
        name: "Juan Fontes",
        jobTitle: "Financial Tech Lead",
        sameAs: [
            "https://twitter.com/juanfontes",
            "https://linkedin.com/in/juanfontes"
        ]
    }
};
