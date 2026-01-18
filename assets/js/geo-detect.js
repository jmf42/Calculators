/**
 * Geo-Detection Module for CalcKit
 * Automatically detects user location and displays local market insights
 */

(function () {
    'use strict';

    // US States data (key = state code lowercase)
    const US_STATES = {
        'tx': { name: 'Texas', abbr: 'TX', mortgage: { medianPrice: 340000, propertyTaxRate: 1.80, homeInsurance: 2400, hasStateIncomeTax: false, tips: ['Texas has no state income tax, but property taxes average 1.8% — among the highest in the US.', 'Home insurance is higher in coastal and northern areas due to hurricane and tornado risk.', 'Apply for the homestead exemption to reduce your taxable home value by up to $100,000.', 'Many Texas cities have additional local property taxes on top of county rates.'] } },
        'ca': { name: 'California', abbr: 'CA', mortgage: { medianPrice: 750000, propertyTaxRate: 0.76, homeInsurance: 1400, hasStateIncomeTax: true, tips: ['Prop 13 limits property tax increases to 2% annually — taxes are based on purchase price, not current value.', 'California has the highest state income tax (up to 13.3%), factor this into affordability.', 'Many areas require earthquake insurance (not included in standard policies).', 'Consider jumbo loan requirements — conforming limits are higher in high-cost areas.'] } },
        'fl': { name: 'Florida', abbr: 'FL', mortgage: { medianPrice: 400000, propertyTaxRate: 0.89, homeInsurance: 4200, hasStateIncomeTax: false, tips: ['Florida has NO state income tax — a major benefit for high earners.', 'Home insurance is the highest in the nation due to hurricane risk ($4,000-6,000/year).', 'Flood insurance is often required and adds $1,000-3,000+ annually.', 'Save Our Homes limits assessment increases to 3% per year for primary residences.'] } },
        'ny': { name: 'New York', abbr: 'NY', mortgage: { medianPrice: 550000, propertyTaxRate: 1.69, homeInsurance: 1600, hasStateIncomeTax: true, tips: ['New York has high property taxes (1.69% average) plus state income tax up to 10.9%.', 'NYC has additional city income tax (up to 3.88%).', 'STAR exemption reduces school property taxes for primary residences.', 'Upstate NY is significantly more affordable than NYC metro area.'] } },
        'pa': { name: 'Pennsylvania', abbr: 'PA', mortgage: { medianPrice: 280000, propertyTaxRate: 1.58, homeInsurance: 1100, hasStateIncomeTax: true, tips: ['Pennsylvania has a flat 3.07% state income tax — one of the lowest rates.', 'Property taxes vary significantly by county (0.9% to over 2%).', 'No sales tax on home purchases or building materials.'] } },
        'il': { name: 'Illinois', abbr: 'IL', mortgage: { medianPrice: 270000, propertyTaxRate: 2.27, homeInsurance: 1300, hasStateIncomeTax: true, tips: ['Illinois has the second-highest property taxes in the US (2.27% average).', 'Cook County (Chicago) has complex assessment and appeal systems.', 'Flat 4.95% state income tax applies to all income levels.'] } },
        'oh': { name: 'Ohio', abbr: 'OH', mortgage: { medianPrice: 220000, propertyTaxRate: 1.59, homeInsurance: 900, hasStateIncomeTax: true, tips: ['Ohio offers a homestead exemption reducing taxable value by $25,000 for those 65+.', 'Property values are reassessed every 3 years — expect fluctuations.', 'Very affordable compared to coastal states.'] } },
        'ga': { name: 'Georgia', abbr: 'GA', mortgage: { medianPrice: 350000, propertyTaxRate: 0.92, homeInsurance: 1500, hasStateIncomeTax: true, tips: ['Georgia is reducing income tax to a flat 5.49%.', 'Homestead exemption can reduce taxable value by $2,000-$10,000.', 'Property taxes are relatively low compared to northern states.'] } },
        'nc': { name: 'North Carolina', abbr: 'NC', mortgage: { medianPrice: 325000, propertyTaxRate: 0.84, homeInsurance: 1400, hasStateIncomeTax: true, tips: ['NC has dropped income tax to a flat 5.25% (declining to 3.99% by 2027).', 'Property taxes are among the lowest in the Southeast.', 'No tax on Social Security benefits.'] } },
        'mi': { name: 'Michigan', abbr: 'MI', mortgage: { medianPrice: 230000, propertyTaxRate: 1.54, homeInsurance: 1100, hasStateIncomeTax: true, tips: ['Michigan has a flat 4.25% state income tax.', 'Property taxes capped at 5% annual increase on existing homeowners.', 'Principal Residence Exemption (PRE) reduces school taxes by 18 mills.'] } },
        'nj': { name: 'New Jersey', abbr: 'NJ', mortgage: { medianPrice: 480000, propertyTaxRate: 2.49, homeInsurance: 1200, hasStateIncomeTax: true, tips: ['New Jersey has the HIGHEST property taxes in the nation (2.49% average).', 'State income tax ranges from 1.4% to 10.75%.', 'ANCHOR program provides $1,500 for homeowners earning under $150K.'] } },
        'va': { name: 'Virginia', abbr: 'VA', mortgage: { medianPrice: 400000, propertyTaxRate: 0.82, homeInsurance: 1300, hasStateIncomeTax: true, tips: ['Virginia has relatively low property taxes (0.82% average).', 'Northern Virginia (DC suburbs) is much more expensive than the rest of state.', 'Virginia offers first-time homebuyer programs through VHDA.'] } },
        'wa': { name: 'Washington', abbr: 'WA', mortgage: { medianPrice: 580000, propertyTaxRate: 1.03, homeInsurance: 1100, hasStateIncomeTax: false, tips: ['Washington has NO state income tax — only 9 states share this benefit.', 'High sales tax (6.5% state + local = up to 10.4%).', 'Seattle metro is very expensive; eastern WA is much more affordable.'] } },
        'az': { name: 'Arizona', abbr: 'AZ', mortgage: { medianPrice: 420000, propertyTaxRate: 0.66, homeInsurance: 1200, hasStateIncomeTax: true, tips: ['Arizona has a flat 2.5% income tax — among the lowest in the nation.', 'Property taxes are also very low (0.66% average).', 'No tax on Social Security benefits.'] } },
        'ma': { name: 'Massachusetts', abbr: 'MA', mortgage: { medianPrice: 550000, propertyTaxRate: 1.23, homeInsurance: 1500, hasStateIncomeTax: true, tips: ['Massachusetts has a flat 5% income tax.', 'Boston metro is very expensive; western MA is more affordable.', 'First-time buyer programs available through MassHousing.'] } },
        'tn': { name: 'Tennessee', abbr: 'TN', mortgage: { medianPrice: 340000, propertyTaxRate: 0.71, homeInsurance: 1400, hasStateIncomeTax: false, tips: ['Tennessee has NO state income tax — a major draw for residents.', 'Property taxes are very low (0.71% average).', 'High sales tax (9.55% combined) offsets no income tax.'] } },
        'in': { name: 'Indiana', abbr: 'IN', mortgage: { medianPrice: 230000, propertyTaxRate: 0.85, homeInsurance: 1000, hasStateIncomeTax: true, tips: ['Indiana has a low flat income tax of 3.15%.', 'Property taxes capped at 1% for homesteads.', 'Very affordable compared to neighboring states.'] } },
        'mo': { name: 'Missouri', abbr: 'MO', mortgage: { medianPrice: 250000, propertyTaxRate: 0.97, homeInsurance: 1400, hasStateIncomeTax: true, tips: ['Missouri income tax tops out at 4.95%.', 'Property taxes are moderate and vary by county.', 'Missouri First Place program offers down payment assistance.'] } },
        'md': { name: 'Maryland', abbr: 'MD', mortgage: { medianPrice: 400000, propertyTaxRate: 1.09, homeInsurance: 1400, hasStateIncomeTax: true, tips: ['Maryland has high income taxes (up to 5.75% state + local piggyback up to 3.2%).', 'DC suburbs are very expensive.', 'Homestead Tax Credit limits annual assessment increases to 10%.'] } },
        'co': { name: 'Colorado', abbr: 'CO', mortgage: { medianPrice: 550000, propertyTaxRate: 0.55, homeInsurance: 2000, hasStateIncomeTax: true, tips: ['Colorado has the third-lowest property tax rate in the US (0.55%).', 'State income tax is a flat 4.4%.', 'Home insurance can be high in fire-prone mountain areas.'] } }
    };

    // Countries data (key = country code lowercase)
    const COUNTRIES = {
        'ar': { name: 'Argentina', nameLocalized: 'Argentina', currency: '$', tips: ['La mayoría de créditos hipotecarios en Argentina se cotizan en dólares estadounidenses.', 'Los créditos UVA ajustan las cuotas según inflación.', 'Considerá costos de escrituración: 3-5% del valor de la propiedad.'], mortgage: { medianPrice: 85000, typicalRate: 9.5, typicalTerm: 20, downPayment: 25 } },
        'es': { name: 'Spain', nameLocalized: 'España', currency: '€', tips: ['Los bancos españoles financian hasta el 80% del valor de tasación.', 'Gastos de compra rondan el 10-12% adicional.', 'El Euríbor es el índice de referencia para hipotecas variables.'], mortgage: { medianPrice: 250000, typicalRate: 3.5, typicalTerm: 25, downPayment: 20 } },
        'mx': { name: 'Mexico', nameLocalized: 'México', currency: '$', tips: ['Infonavit y Fovissste ofrecen créditos para trabajadores con prestaciones.', 'Considerá el CAT (Costo Anual Total) que incluye todos los gastos.', 'Los gastos de escrituración varían del 5-8% según el estado.'], mortgage: { medianPrice: 2500000, typicalRate: 11, typicalTerm: 20, downPayment: 20 } },
        'de': { name: 'Germany', nameLocalized: 'Deutschland', currency: '€', tips: ['Deutsche Banken verlangen typischerweise 20-30% Eigenkapital.', 'Nebenkosten betragen ca. 10-15%.', 'KfW-Förderprogramme bieten günstige Kredite für energieeffiziente Häuser.'], mortgage: { medianPrice: 400000, typicalRate: 3.8, typicalTerm: 30, downPayment: 20 } },
        'fr': { name: 'France', nameLocalized: 'France', currency: '€', tips: ['Le Prêt à Taux Zéro (PTZ) finance jusqu\'à 40% pour les primo-accédants.', 'Les frais de notaire représentent 7-8% pour l\'ancien.', 'Le taux d\'endettement maximum est de 35% des revenus.'], mortgage: { medianPrice: 250000, typicalRate: 4.0, typicalTerm: 25, downPayment: 10 } },
        'br': { name: 'Brazil', nameLocalized: 'Brasil', currency: 'R$', tips: ['O programa Minha Casa Minha Vida oferece subsídios para famílias de baixa renda.', 'Use o FGTS para abatir entrada ou parcelas.', 'Compare SAC vs PRICE para tipo de amortização.'], mortgage: { medianPrice: 400000, typicalRate: 10, typicalTerm: 30, downPayment: 20 } },
        'pt': { name: 'Portugal', nameLocalized: 'Portugal', currency: '€', tips: ['Os bancos portugueses financiam até 90% do valor de avaliação.', 'Isenção de IMT para jovens até 35 anos em primeiras habitações.', 'O spread é a margem do banco sobre a Euribor — negocie bem.'], mortgage: { medianPrice: 200000, typicalRate: 4.0, typicalTerm: 30, downPayment: 10 } },
        'it': { name: 'Italy', nameLocalized: 'Italia', currency: '€', tips: ['Le banche italiane finanziano tipicamente fino all\'80% del valore.', 'L\'imposta di registro per la prima casa è del 2%.', 'Il Fondo Garanzia Prima Casa copre fino al 50% per under 36.'], mortgage: { medianPrice: 250000, typicalRate: 4.0, typicalTerm: 25, downPayment: 20 } },
        'nl': { name: 'Netherlands', nameLocalized: 'Nederland', currency: '€', tips: ['Nederland is een van de weinige landen waar je 100% kunt financieren.', 'Hypotheekrenteaftrek maakt de effectieve rente lager.', 'NHG geeft lagere rente bij woningen tot €435.000.'], mortgage: { medianPrice: 450000, typicalRate: 4.0, typicalTerm: 30, downPayment: 0 } },
        'pl': { name: 'Poland', nameLocalized: 'Polska', currency: 'zł', tips: ['Program "Bezpieczny Kredyt 2%" oferuje dopłaty do rat.', 'Wkład własny wynosi minimum 10-20%.', 'WIBOR jest stopą referencyjną dla kredytów o zmiennym oprocentowaniu.'], mortgage: { medianPrice: 500000, typicalRate: 7.5, typicalTerm: 25, downPayment: 20 } },
        'gb': { name: 'United Kingdom', nameLocalized: 'United Kingdom', currency: '£', tips: ['First-time buyers pay no Stamp Duty on properties up to £425,000.', 'Lifetime ISA provides 25% government bonus for deposits.', 'Fixed rates for 2-5 years are most common.'], mortgage: { medianPrice: 285000, typicalRate: 5.0, typicalTerm: 25, downPayment: 10 } },
        'au': { name: 'Australia', nameLocalized: 'Australia', currency: '$', tips: ['Lenders Mortgage Insurance (LMI) required if deposit under 20%.', 'First Home Owner Grant varies by state — $10,000-$30,000 for new homes.', 'Offset accounts are popular to reduce interest.'], mortgage: { medianPrice: 800000, typicalRate: 6.0, typicalTerm: 30, downPayment: 20 } },
        'ie': { name: 'Ireland', nameLocalized: 'Ireland', currency: '€', tips: ['First-time buyers need only 10% deposit.', 'Help to Buy scheme provides up to €30,000 tax refund for new builds.', 'Central Bank rules limit mortgages to 4x income.'], mortgage: { medianPrice: 350000, typicalRate: 4.0, typicalTerm: 30, downPayment: 10 } },
        'at': { name: 'Austria', nameLocalized: 'Österreich', currency: '€', tips: { de: ['Österreichische Banken verlangen normalerweise 20% Eigenkapital.', 'Nebenkosten circa 10%.', 'Wohnbauförderung je nach Bundesland verfügbar.'], en: ['Austrian banks typically require 20% down payment.', 'Additional costs are around 10%.', 'State housing subsidies available depending on region.'] }, mortgage: { medianPrice: 350000, typicalRate: 4.0, typicalTerm: 30, downPayment: 20 } },
        'ch': { name: 'Switzerland', nameLocalized: 'Suisse', currency: 'CHF', tips: { de: ['Die Schweiz hat sehr hohe Immobilienpreise — CHF 900.000+ ist normal.', 'Mindestens 20% Eigenkapital erforderlich.', 'Die Tragbarkeit (Kosten/Einkommen unter 33%) ist entscheidend.'], fr: ['La Suisse a des prix immobiliers très élevés — CHF 900.000+ est normal.', 'Minimum 20% d\'apport personnel requis.', 'L\'accessibilité financière (coûts/revenus sous 33%) est déterminante.'], en: ['Switzerland has very high property prices — CHF 900,000+ is normal.', 'Minimum 20% down payment required.', 'Affordability (costs/income under 33%) is key.'], it: ['La Svizzera ha prezzi immobiliari molto elevati — CHF 900.000+ è normale.', 'Minimo 20% di capitale proprio richiesto.', 'L\'accessibilità (costi/reddito sotto 33%) è fondamentale.'] }, mortgage: { medianPrice: 900000, typicalRate: 2.5, typicalTerm: 25, downPayment: 20 } },
        'be': { name: 'Belgium', nameLocalized: 'Belgique', currency: '€', tips: { fr: ['Les frais de notaire et droits d\'enregistrement totalisent 12-15%.', 'Droits d\'enregistrement: 12,5% en Wallonie/Bruxelles, 6% en Flandre.'], nl: ['Notariskosten en registratierechten bedragen 12-15%.', 'Registratierechten: 12,5% in Wallonië/Brussel, 6% in Vlaanderen.'], en: ['Notary fees and registration taxes total 12-15%.', 'Registration tax: 12.5% in Wallonia/Brussels, 6% in Flanders.'] }, mortgage: { medianPrice: 300000, typicalRate: 3.8, typicalTerm: 25, downPayment: 20 } },
        'se': { name: 'Sweden', nameLocalized: 'Sverige', currency: 'kr', tips: ['Sverige kräver minst 15% kontantinsats.', 'Amorteringskrav: 2% per år om belåningsgrad över 70%.', 'Ränteavdrag på 30% av räntekostnader.'], mortgage: { medianPrice: 4000000, typicalRate: 4.5, typicalTerm: 50, downPayment: 15 } },
        'no': { name: 'Norway', nameLocalized: 'Norge', currency: 'kr', tips: ['Norge krever minimum 15% egenkapital.', 'Boliglånsforskriften begrenser gjeld til 5 ganger bruttoinntekt.', 'Rentefradrag: 22% av rentekostnader.'], mortgage: { medianPrice: 5000000, typicalRate: 5.0, typicalTerm: 25, downPayment: 15 } },
        'dk': { name: 'Denmark', nameLocalized: 'Danmark', currency: 'kr', tips: ['Danmark har et unikt realkreditsystem med meget lave renter.', 'Udbetaling på minimum 5% kræves.', 'Afdragsfrihed op til 10 år er muligt.'], mortgage: { medianPrice: 3500000, typicalRate: 4.0, typicalTerm: 30, downPayment: 5 } },
        'fi': { name: 'Finland', nameLocalized: 'Suomi', currency: '€', tips: ['Suomessa vaaditaan yleensä 15% omarahoitusosuus.', 'ASP-tili tarjoaa korkoetua ensiasunnon ostajille.', 'Ensiasunnon ostajat vapautetaan varainsiirtoverosta.'], mortgage: { medianPrice: 300000, typicalRate: 4.5, typicalTerm: 25, downPayment: 15 } },
        'co': { name: 'Colombia', nameLocalized: 'Colombia', currency: '$', tips: ['Los créditos VIS tienen tasas preferenciales.', 'El subsidio "Mi Casa Ya" cubre parte de la cuota inicial.', 'Los gastos notariales suman aproximadamente 2% del valor.'], mortgage: { medianPrice: 300000000, typicalRate: 12, typicalTerm: 15, downPayment: 20 } },
        'cl': { name: 'Chile', nameLocalized: 'Chile', currency: 'UF', tips: ['Los créditos hipotecarios en Chile se expresan en UF.', 'Las tasas son bajas (4-5%) comparado con otros países latinoamericanos.', 'El subsidio DS1 ayuda a familias de clase media.'], mortgage: { medianPrice: 4500, typicalRate: 4.5, typicalTerm: 25, downPayment: 20 } },
        'ca': { name: 'Canada', nameLocalized: 'Canada', currency: '$', tips: { en: ['Minimum 5% down payment for properties under $500,000.', 'CMHC insurance required if down payment is less than 20%.', 'Stress test requires qualifying at rate + 2%.'], fr: ['Mise de fonds minimale de 5% pour les propriétés sous 500 000$.', 'Assurance SCHL obligatoire si mise de fonds inférieure à 20%.', 'Le test de résistance exige de qualifier au taux + 2%.'] }, mortgage: { medianPrice: 500000, typicalRate: 5.5, typicalTerm: 25, downPayment: 5 } }
    };

    // State name to code mapping for US
    const STATE_NAME_TO_CODE = {
        'texas': 'tx', 'california': 'ca', 'florida': 'fl', 'new york': 'ny',
        'pennsylvania': 'pa', 'illinois': 'il', 'ohio': 'oh', 'georgia': 'ga',
        'north carolina': 'nc', 'michigan': 'mi', 'new jersey': 'nj', 'virginia': 'va',
        'washington': 'wa', 'arizona': 'az', 'massachusetts': 'ma', 'tennessee': 'tn',
        'indiana': 'in', 'missouri': 'mo', 'maryland': 'md', 'colorado': 'co'
    };

    /**
     * Detect the page language from the URL
     */
    function detectPageLanguage() {
        // Extract language from URL path (e.g., /fr/calculator/ -> 'fr')
        const pathMatch = window.location.pathname.match(/^\/([a-z]{2})\//); if (pathMatch) return pathMatch[1];

        // Fallback to HTML lang attribute
        const htmlLang = document.documentElement.lang;
        if (htmlLang) return htmlLang.split('-')[0]; // 'en-US' -> 'en'

        // Default to English
        return 'en';
    }

    /**
     * Detect user location via IP geolocation API
     * using geojs.io (supports HTTPS and is free)
     */
    async function detectLocation() {
        try {
            // Use get.geojs.io (free, supports HTTPS, no rate limit issues typically)
            // Original ip-api.com fails on HTTPS sites due to mixed content
            const response = await fetch('https://get.geojs.io/v1/ip/geo.json');
            if (!response.ok) throw new Error('Geo API failed');

            const data = await response.json();

            return {
                country: data.country,
                countryCode: data.country_code ? data.country_code.toLowerCase() : null,
                region: data.region_code ? data.region_code.toLowerCase() : null, // CA, TX, etc.
                regionName: data.region
            };
        } catch (error) {
            console.log('CalcKit Geo: Could not detect location', error);
            return null;
        }
    }

    /**
     * Get location data based on detected location and page language
     */
    function getLocationData(location, pageLang = 'en') {
        if (!location) return null;

        // If user is in the US, try to get state data
        if (location.countryCode === 'us') {
            const stateCode = location.region?.toLowerCase();
            if (stateCode && US_STATES[stateCode]) {
                return {
                    type: 'state',
                    data: US_STATES[stateCode],
                    displayName: US_STATES[stateCode].name
                };
            }
        }

        // Otherwise try country data
        if (COUNTRIES[location.countryCode]) {
            const countryData = COUNTRIES[location.countryCode];

            // Get tips in the page language if available, fallback to English or first available
            let tips = countryData.tips;
            if (typeof tips === 'object' && !Array.isArray(tips)) {
                // Multilingual tips object
                tips = tips[pageLang] || tips['en'] || tips[Object.keys(tips)[0]];
            }

            return {
                type: 'country',
                data: { ...countryData, tips },
                displayName: countryData.nameLocalized
            };
        }

        return null;
    }

    /**
     * Format number with commas
     */
    function formatNumber(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    // Localization Dictionary for Dynamic JS Content
    const TRANSLATIONS = {
        en: { insights: "Market Insights", personalized: "Live Market Data", medianPrice: "Median Price", typicalRate: "Typical Rate", loanTerm: "Loan Term", downPayment: "Down Payment", sunHours: "Sun Hours", electricRate: "Electric Rate", potential: "Potential", high: "High", moderate: "Moderate", laborRate: "Labor Rate", season: "Season", active: "Active", propertyTax: "Property Tax", homeInsurance: "Home Insurance", stateTax: "State Income Tax", yes: "Yes", none: "None", unitHrs: "hrs/day", unitSqFt: "/sq.ft", show: "Show", hide: "Hide", localFactors: "Local Factors" },
        es: { insights: "Datos de Mercado", personalized: "Datos en Tiempo Real", medianPrice: "Precio Medio", typicalRate: "Tasa Típica", loanTerm: "Plazo", downPayment: "Enganche", sunHours: "Horas de Sol", electricRate: "Tarifa Eléc.", potential: "Potencial", high: "Alto", moderate: "Moderado", laborRate: "Mano de Obra", season: "Temporada", active: "Activa", propertyTax: "Impuesto Predial", homeInsurance: "Seguro", stateTax: "Impuesto Estatal", yes: "Sí", none: "No", unitHrs: "hr/día", unitSqFt: "/pie²", show: "Mostrar", hide: "Ocultar", localFactors: "Factores Locales" },
        de: { insights: "Markteinblicke", personalized: "Live-Marktdaten", medianPrice: "Medianpreis", typicalRate: "Typischer Zins", loanTerm: "Laufzeit", downPayment: "Anzahlung", sunHours: "Sonnenstunden", electricRate: "Strompreis", potential: "Potenzial", high: "Hoch", moderate: "Mittel", laborRate: "Arbeitskosten", season: "Saison", active: "Aktiv", propertyTax: "Grundsteuer", homeInsurance: "Versicherung", stateTax: "Einkommenssteuer", yes: "Ja", none: "Keine", unitHrs: "Std/Tag", unitSqFt: "/qf", show: "Anzeigen", hide: "Verbergen", localFactors: "Lokale Faktoren" },
        fr: { insights: "Aperçu du Marché", personalized: "Données en Direct", medianPrice: "Prix Médian", typicalRate: "Taux Moyen", loanTerm: "Durée", downPayment: "Apport", sunHours: "Ensoleillement", electricRate: "Tarif Élec.", potential: "Potentiel", high: "Élevé", moderate: "Modéré", laborRate: "Main d'Œuvre", season: "Saison", active: "Active", propertyTax: "Taxe Foncière", homeInsurance: "Assurance", stateTax: "Impôt État", yes: "Oui", none: "Aucun", unitHrs: "h/jour", unitSqFt: "/pi²", show: "Afficher", hide: "Masquer", localFactors: "Facteurs Locaux" },
        pt: { insights: "Dados de Mercado", personalized: "Dados ao Vivo", medianPrice: "Preço Médio", typicalRate: "Taxa Típica", loanTerm: "Prazo", downPayment: "Entrada", sunHours: "Horas de Sol", electricRate: "Tarifa", potential: "Potencial", high: "Alto", moderate: "Moderado", laborRate: "Mão de Obra", season: "Temporada", active: "Ativa", propertyTax: "IPTU", homeInsurance: "Seguro", stateTax: "Imposto Est.", yes: "Sim", none: "Não", unitHrs: "h/dia", unitSqFt: "/pé²", show: "Mostrar", hide: "Ocultar", localFactors: "Fatores Locais" },
        it: { insights: "Dati di Mercato", personalized: "Dati in Tempo Reale", medianPrice: "Prezzo Medio", typicalRate: "Tasso Tipico", loanTerm: "Durata", downPayment: "Anticipo", sunHours: "Ore di Sole", electricRate: "Tariffa Elettr.", potential: "Potenziale", high: "Alto", moderate: "Moderato", laborRate: "Manodopera", season: "Stagione", active: "Attiva", propertyTax: "Tasse Proprietà", homeInsurance: "Assicurazione", stateTax: "Tasse Statali", yes: "Sì", none: "No", unitHrs: "ore/giorno", unitSqFt: "/mq", show: "Mostra", hide: "Nascondi", localFactors: "Fattori Locali" },
        nl: { insights: "Marktinformatie", personalized: "Live Marktgegevens", medianPrice: "Middenprijs", typicalRate: "Typisch Tarief", loanTerm: "Looptijd", downPayment: "Aanbetaling", sunHours: "Zonuren", electricRate: "Stroomtarief", potential: "Potentieel", high: "Hoog", moderate: "Gemiddeld", laborRate: "Arbeidskosten", season: "Seizoen", active: "Actief", propertyTax: "OZB", homeInsurance: "Verzekering", stateTax: "Inkomstenbel.", yes: "Ja", none: "Geen", unitHrs: "u/dag", unitSqFt: "/vkt", show: "Tonen", hide: "Verbergen", localFactors: "Lokale Factoren" },
        pl: { insights: "Dane Rynkowe", personalized: "Dane na Żywo", medianPrice: "Średnia Cena", typicalRate: "Typowa Stawka", loanTerm: "Okres", downPayment: "Wkład Własny", sunHours: "Godziny Słoneczne", electricRate: "Stawka za Prąd", potential: "Potencjał", high: "Wysoki", moderate: "Średni", laborRate: "Robocizna", season: "Sezon", active: "Aktywny", propertyTax: "Podatek", homeInsurance: "Ubezpieczenie", stateTax: "Podatek Stanowy", yes: "Tak", none: "Brak", unitHrs: "h/dzień", unitSqFt: "/st.kw", show: "Pokaż", hide: "Ukryj", localFactors: "Czynniki Lokalne" },
        sv: { insights: "Marknadsinsikter", personalized: "Live Marknadsdata", medianPrice: "Medianpris", typicalRate: "Typisk Ränta", loanTerm: "Löptid", downPayment: "Kontantinsats", sunHours: "Soltimmar", electricRate: "Elpris", potential: "Potential", high: "Hög", moderate: "Måttlig", laborRate: "Arbetskostnad", season: "Säsong", active: "Aktiv", propertyTax: "Fastighetsskatt", homeInsurance: "Försäkring", stateTax: "Inkomstskatt", yes: "Ja", none: "Ingen", unitHrs: "tim/dag", unitSqFt: "/kvfot", show: "Visa", hide: "Dölj", localFactors: "Lokala Faktorer" },
        no: { insights: "Markedsinnsikt", personalized: "Live Markedsdata", medianPrice: "Medianpris", typicalRate: "Typisk Rente", loanTerm: "Løpetid", downPayment: "Egenkapital", sunHours: "Soltimer", electricRate: "Strømpris", potential: "Potensial", high: "Høyt", moderate: "Moderat", laborRate: "Arbeidskostnad", season: "Sesong", active: "Aktiv", propertyTax: "Eiendomsskatt", homeInsurance: "Forsikring", stateTax: "Inntektsskatt", yes: "Ja", none: "Ingen", unitHrs: "t/dag", unitSqFt: "/kvfot", show: "Vis", hide: "Skjul", localFactors: "Lokale Faktorer" },
        da: { insights: "Markedsindsigt", personalized: "Live Markedsdata", medianPrice: "Medianpris", typicalRate: "Typisk Rente", loanTerm: "Løbetid", downPayment: "Udbetaling", sunHours: "Soltimer", electricRate: "Elpris", potential: "Potentiale", high: "Højt", moderate: "Moderat", laborRate: "Arbejdsløn", season: "Sæson", active: "Aktiv", propertyTax: "Ejendomsskat", homeInsurance: "Forsikring", stateTax: "Indkomstskat", yes: "Ja", none: "Ingen", unitHrs: "b/dag", unitSqFt: "/kvfod", show: "Vis", hide: "Skjul", localFactors: "Lokale Faktorer" },
        fi: { insights: "Markkinatiedot", personalized: "Live Markkinadata", medianPrice: "Mediaanihinta", typicalRate: "Tyypillinen Korko", loanTerm: "Laina-aika", downPayment: "Käsiraha", sunHours: "Aurinkotunnit", electricRate: "Sähkönhinta", potential: "Potentiaali", high: "Korkea", moderate: "Kohtalainen", laborRate: "Työkustannus", season: "Sesonki", active: "Aktiivinen", propertyTax: "Kiinteistövero", homeInsurance: "Vakuutus", stateTax: "Tulovero", yes: "Kyllä", none: "Ei", unitHrs: "h/pv", unitSqFt: "/neliöjalka", show: "Näytä", hide: "Piilota", localFactors: "Paikalliset Tekijät" }
    };

    /**
     * Render the local insights section as a prominent banner
     */
    function renderInsightsSection(locationInfo, calcType) {
        const { type, data, displayName } = locationInfo;
        const pageLang = detectPageLanguage();
        const t = TRANSLATIONS[pageLang] || TRANSLATIONS['en'];

        // Select data source based on calculator type
        let sourceData, sourceKey;
        if (calcType === 'solar') { sourceData = data.solar; sourceKey = 'solar'; }
        else if (calcType === 'roofing') { sourceData = data.roofing; sourceKey = 'roofing'; }
        else { sourceData = data.mortgage; sourceKey = 'mortgage'; }

        if (!sourceData) return '';

        let statsHTML = '';
        const currency = data.currency || '$';
        const formatNumber = (num) => new Intl.NumberFormat(pageLang).format(num);

        // Generate stats grid
        if (calcType === 'solar') {
            statsHTML = `
                <div class="geo-stats-grid">
                    <div class="geo-stat-card">
                        <div class="geo-stat-label">${t.sunHours}</div>
                        <div class="geo-stat-value">${sourceData.sunHours} <span class="unit">${t.unitHrs}</span></div>
                    </div>
                    <div class="geo-stat-card">
                        <div class="geo-stat-label">${t.electricRate}</div>
                        <div class="geo-stat-value">${currency}${sourceData.electricRate}<span class="unit">/kWh</span></div>
                    </div>
                    <div class="geo-stat-card">
                        <div class="geo-stat-label">${t.potential}</div>
                        <div class="geo-stat-value">${sourceData.sunHours > 4 ? `${t.high} 🔥` : `${t.moderate} ⛅`}</div>
                    </div>
                </div>`;
        } else if (calcType === 'roofing') {
            statsHTML = `
                <div class="geo-stats-grid">
                    <div class="geo-stat-card">
                        <div class="geo-stat-label">${t.laborRate}</div>
                        <div class="geo-stat-value">${currency}${sourceData.laborRate}<span class="unit">${t.unitSqFt}</span></div>
                    </div>
                    <div class="geo-stat-card">
                        <div class="geo-stat-label">${t.season}</div>
                        <div class="geo-stat-value">${t.active}</div>
                    </div>
                </div>`;
        } else {
            // Mortgage
            if (type === 'state') {
                statsHTML = `
                    <div class="geo-stats-grid">
                        <div class="geo-stat-card">
                            <div class="geo-stat-label">${t.medianPrice}</div>
                            <div class="geo-stat-value">$${formatNumber(sourceData.medianPrice)}</div>
                        </div>
                        <div class="geo-stat-card">
                            <div class="geo-stat-label">${t.propertyTax}</div>
                            <div class="geo-stat-value">${sourceData.propertyTaxRate}%</div>
                        </div>
                        <div class="geo-stat-card">
                            <div class="geo-stat-label">${t.homeInsurance}</div>
                            <div class="geo-stat-value">$${formatNumber(sourceData.homeInsurance)}/yr</div>
                        </div>
                        <div class="geo-stat-card ${sourceData.hasStateIncomeTax ? '' : 'geo-stat-highlight'}">
                            <div class="geo-stat-label">${t.stateTax}</div>
                            <div class="geo-stat-value">${sourceData.hasStateIncomeTax ? t.yes : `${t.none} ✓`}</div>
                        </div>
                    </div>`;
            } else {
                statsHTML = `
                    <div class="geo-stats-grid">
                        <div class="geo-stat-card">
                            <div class="geo-stat-label">${t.medianPrice}</div>
                            <div class="geo-stat-value">${currency}${formatNumber(sourceData.medianPrice)}</div>
                        </div>
                        <div class="geo-stat-card">
                            <div class="geo-stat-label">${t.typicalRate}</div>
                            <div class="geo-stat-value">${sourceData.typicalRate}%</div>
                        </div>
                        <div class="geo-stat-card">
                            <div class="geo-stat-label">${t.loanTerm}</div>
                            <div class="geo-stat-value">${sourceData.typicalTerm} years</div>
                        </div>
                        <div class="geo-stat-card">
                            <div class="geo-stat-label">${t.downPayment}</div>
                            <div class="geo-stat-value">${sourceData.downPayment}%</div>
                        </div>
                    </div>`;
            }
        }

        const tipsList = sourceData.tips || data.tips;
        const tips = Array.isArray(tipsList) ? tipsList : (tipsList && typeof tipsList === 'object' ? (tipsList[pageLang] || tipsList['en'] || Object.values(tipsList)[0]) : []);

        const tipsHTML = tips.map(tip => `
            <div class="geo-tip-item">
                <span class="geo-tip-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </span>
                <span class="geo-tip-text">${tip}</span>
            </div>
        `).join('');

        const html = `
            <style>
                .geo-insights-banner {
                    background: var(--surface, #111729);
                    border: 1px solid rgba(255, 255, 255, 0.08); /* glass-border */
                    border-radius: 24px;
                    padding: 32px;
                    margin: -40px auto 40px;
                    max-width: 900px; /* Aligned with container */
                    box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.5); /* shadow-lg */
                    position: relative;
                    overflow: hidden;
                    backdrop-filter: blur(20px);
                    -webkit-backdrop-filter: blur(20px);
                }
                .geo-insights-banner::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: radial-gradient(circle at top right, rgba(99, 102, 241, 0.15), transparent 40%);
                    pointer-events: none;
                }
                .geo-insights-banner::after {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; right: 0;
                    height: 1px;
                    background: linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.5), transparent);
                }

                .geo-banner-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 24px;
                    gap: 16px;
                }
                .geo-banner-title {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    flex: 1;
                }
                .geo-banner-flag {
                    font-size: 32px;
                    line-height: 1;
                    filter: drop-shadow(0 0 15px rgba(99, 102, 241, 0.3));
                }
                .geo-banner-text h2 {
                    font-size: 20px;
                    font-weight: 700;
                    margin: 0 0 4px 0;
                    color: white;
                    letter-spacing: -0.01em;
                }
                .geo-banner-text p {
                    font-size: 13px;
                    margin: 0;
                    color: rgba(255,255,255,0.6);
                    font-weight: 500;
                    display: flex;
                    align-items: center;
                    gap: 6px;
                }
                
                .geo-toggle-btn {
                    background: rgba(255,255,255,0.05);
                    border: 1px solid rgba(255,255,255,0.1);
                    color: rgba(255,255,255,0.7);
                    padding: 6px 14px;
                    border-radius: 8px;
                    cursor: pointer;
                    font-size: 13px;
                    font-weight: 600;
                    transition: all 0.2s ease;
                    display: none;
                }
                .geo-toggle-btn:hover { background: rgba(255,255,255,0.1); color: white; }

                .geo-content { transition: max-height 0.3s ease, opacity 0.3s ease; }
                .geo-content.collapsed { max-height: 0; opacity: 0; overflow: hidden; }

                .geo-stats-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
                    gap: 12px;
                    margin-bottom: 24px;
                }
                .geo-stat-card {
                    background: rgba(0,0,0,0.2);
                    border: 1px solid rgba(255,255,255,0.05);
                    border-radius: 16px;
                    padding: 16px;
                    text-align: center;
                    transition: transform 0.2s ease;
                }
                .geo-stat-card:hover { border-color: rgba(99, 102, 241, 0.4); transform: translateY(-2px); }
                .geo-stat-card.geo-stat-highlight {
                    background: rgba(16, 185, 129, 0.05);
                    border-color: rgba(16, 185, 129, 0.3);
                }
                .geo-stat-label {
                    color: rgba(255,255,255,0.5);
                    font-size: 10px;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    margin-bottom: 6px;
                }
                .geo-stat-value {
                    color: white;
                    font-size: 20px;
                    font-weight: 700;
                    line-height: 1;
                }
                .geo-stat-value .unit { font-size: 11px; margin-left: 2px; color: rgba(255,255,255,0.5); }

                .geo-tips-section {
                    background: rgba(99, 102, 241, 0.03);
                    border: 1px solid rgba(99, 102, 241, 0.1);
                    border-radius: 16px;
                    padding: 20px;
                }
                .geo-tips-header {
                    font-size: 12px;
                    font-weight: 700;
                    color: #a5b4fc; /* primary-light */
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    margin-bottom: 14px;
                    display: flex; align-items: center; gap: 8px;
                }
                .geo-tips-list { display: grid; gap: 10px; }
                .geo-tip-item { display: flex; align-items: flex-start; gap: 10px; }
                .geo-tip-icon { color: #10b981; margin-top: 2px; }
                .geo-tip-text { color: rgba(255,255,255,0.9); font-size: 13px; line-height: 1.5; }
                
                @media (max-width: 768px) {
                    .geo-insights-banner { padding: 20px; margin: -20px 16px 32px; border-radius: 20px; }
                    .geo-toggle-btn { display: block; }
                    .geo-banner-header { margin-bottom: 20px; }
                    .geo-banner-flag { font-size: 26px; }
                }
            </style>
            <div class="geo-insights-banner">
                <div class="geo-banner-header">
                    <div class="geo-banner-title">
                        <span class="geo-banner-flag">${type === 'state' ? '🇺🇸' : '🌍'}</span>
                        <div class="geo-banner-text">
                            <h2>${displayName} ${t.insights}</h2>
                            <p>
                                <span style="display:inline-block; width:6px; height:6px; background:#10b981; border-radius:50%;"></span>
                                ${t.personalized}
                            </p>
                        </div>
                    </div>
                    <button class="geo-toggle-btn" onclick="this.parentElement.nextElementSibling.classList.toggle('collapsed'); this.textContent = this.textContent === '${t.show}' ? '${t.hide}' : '${t.show}';">${t.hide}</button>
                </div>
                <div class="geo-content">
                    ${statsHTML}
                    <div class="geo-tips-section">
                        <div class="geo-tips-header">
                            ${t.localFactors}
                        </div>
                        <div class="geo-tips-list">
                            ${tipsHTML}
                        </div>
                    </div>
                </div>
            </div>
        `;

        return html;
    }

    /**
 * Update calculator defaults based on location
 */
    function updateCalculatorDefaults(locationInfo, calcType) {
        const { data, type } = locationInfo;
        const mortgage = data.mortgage;

        // Only update if relevant to calculator type
        if (calcType === 'mortgage') {
            // Wait for calculator to be initialized
            setTimeout(() => {
                // Try to find and update price field
                const priceInput = document.querySelector('input[name="price"], input[id*="price"], input[data-field="price"]');
                if (priceInput && mortgage.medianPrice) {
                    const currentValue = parseInt(priceInput.value.replace(/[^0-9]/g, ''));
                    // Only update if placeholder or generic defaults
                    if (!currentValue || currentValue === 300000 || currentValue === 200000) {
                        priceInput.value = mortgage.medianPrice;
                        priceInput.dispatchEvent(new Event('input', { bubbles: true }));
                    }
                }

                // For country pages, also update rate
                if (type === 'country' && mortgage.typicalRate) {
                    const rateInput = document.querySelector('input[name="rate"], input[id*="rate"], input[data-field="rate"]');
                    if (rateInput) {
                        const currentRate = parseFloat(rateInput.value);
                        if (currentRate === 6.5 || currentRate === 7) {
                            rateInput.value = mortgage.typicalRate;
                            rateInput.dispatchEvent(new Event('input', { bubbles: true }));
                        }
                    }
                }
            }, 1000);
        }
    }

    /**
     * Check if page already has static local insights
     */
    function hasStaticInsights() {
        return document.querySelector('.local-insights-section, .local-insights-card, .geo-insights-banner') !== null;
    }

    /**
     * Initialize geo-detection
     */
    async function init() {
        // Don't run if page already has static local insights
        if (hasStaticInsights()) {
            console.log('CalcKit Geo: Page has static insights, skipping dynamic injection');
            return;
        }

        // Only run on calculator pages
        const calculatorContainer = document.querySelector('#calculator-container, .calculator-wrapper');
        const calculatorBody = document.querySelector('body[data-calculator-type]');

        if (!calculatorContainer || !calculatorBody) {
            return;
        }

        const calcType = calculatorBody.getAttribute('data-calculator-type');

        // Define allowed types for geo-features
        const allowedTypes = ['mortgage', 'solar', 'roofing'];
        if (!allowedTypes.includes(calcType)) {
            // Silently exit for other calculator types
            return;
        }

        console.log('CalcKit Geo: Starting detection...');

        const location = await detectLocation();
        if (!location) return;

        const pageLang = detectPageLanguage();
        console.log('CalcKit Geo: Page language detected as', pageLang);

        const locationInfo = getLocationData(location, pageLang);
        if (!locationInfo) {
            console.log('CalcKit Geo: No data for location', location);
            return;
        }

        // Check data availability for specific type
        if (calcType === 'solar' && !locationInfo.data.solar) return;
        if (calcType === 'roofing' && !locationInfo.data.roofing) return;
        if (calcType === 'mortgage' && !locationInfo.data.mortgage) return;

        console.log('CalcKit Geo: Detected', locationInfo.displayName);

        // Inject insights banner BEFORE calculator section
        const calculatorSection = document.querySelector('.calculator-section');
        if (calculatorSection) {
            const insightsHTML = renderInsightsSection(locationInfo, calcType);
            calculatorSection.insertAdjacentHTML('beforebegin', insightsHTML);
        }

        // Update calculator defaults
        updateCalculatorDefaults(locationInfo, calcType);
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
