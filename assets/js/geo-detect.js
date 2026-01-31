/**
 * Geo-Detection Module for CalcKit
 * Automatically detects user location and displays local market insights
 */

(function () {
    'use strict';

    // Debug mode - set to false in production
    const DEBUG = window.CALCKIT_DEBUG || false;
    const log = (...args) => { if (DEBUG) console.log(...args); };

    // Feature flags to prevent unverified local stats from being shown
    const ENABLE_LOCAL_INSIGHTS = true;
    const ENABLE_LOCAL_STATS = false;
    const ENABLE_CRYPTO_TAX_INSIGHTS = false;
    const APPLY_LOCATION_DEFAULTS = false;
    const USE_GENERIC_TIPS_ONLY = true;

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
        'ar': { name: 'Argentina', nameLocalized: 'Argentina', currency: '$', currencyCode: 'ARS', locale: 'es-AR', tips: ['La mayoría de créditos hipotecarios en Argentina se cotizan en dólares estadounidenses.', 'Los créditos UVA ajustan las cuotas según inflación.', 'Considerá costos de escrituración: 3-5% del valor de la propiedad.'], mortgage: { medianPrice: 85000, typicalRate: 9.5, typicalTerm: 20, downPayment: 25 } },
        'es': { name: 'Spain', nameLocalized: 'España', currency: '€', currencyCode: 'EUR', locale: 'es-ES', tips: ['Los bancos españoles financian hasta el 80% del valor de tasación.', 'Gastos de compra rondan el 10-12% adicional.', 'El Euríbor es el índice de referencia para hipotecas variables.'], mortgage: { medianPrice: 250000, typicalRate: 3.5, typicalTerm: 25, downPayment: 20 } },
        'mx': { name: 'Mexico', nameLocalized: 'México', currency: '$', currencyCode: 'MXN', locale: 'es-MX', tips: ['Infonavit y Fovissste ofrecen créditos para trabajadores con prestaciones.', 'Considerá el CAT (Costo Anual Total) que incluye todos los gastos.', 'Los gastos de escrituración varían del 5-8% según el estado.'], mortgage: { medianPrice: 2500000, typicalRate: 11, typicalTerm: 20, downPayment: 20 } },
        'de': { name: 'Germany', nameLocalized: 'Deutschland', currency: '€', currencyCode: 'EUR', locale: 'de-DE', tips: ['Deutsche Banken verlangen typischerweise 20-30% Eigenkapital.', 'Nebenkosten betragen ca. 10-15%.', 'KfW-Förderprogramme bieten günstige Kredite für energieeffiziente Häuser.'], mortgage: { medianPrice: 400000, typicalRate: 3.8, typicalTerm: 30, downPayment: 20 } },
        'fr': { name: 'France', nameLocalized: 'France', currency: '€', currencyCode: 'EUR', locale: 'fr-FR', tips: ['Le Prêt à Taux Zéro (PTZ) finance jusqu\'à 40% pour les primo-accédants.', 'Les frais de notaire représentent 7-8% pour l\'ancien.', 'Le taux d\'endettement maximum est de 35% des revenus.'], mortgage: { medianPrice: 250000, typicalRate: 4.0, typicalTerm: 25, downPayment: 10 } },
        'br': { name: 'Brazil', nameLocalized: 'Brasil', currency: 'R$', currencyCode: 'BRL', locale: 'pt-BR', tips: ['O programa Minha Casa Minha Vida oferece subsídios para famílias de baixa renda.', 'Use o FGTS para abatir entrada ou parcelas.', 'Compare SAC vs PRICE para tipo de amortização.'], mortgage: { medianPrice: 400000, typicalRate: 10, typicalTerm: 30, downPayment: 20 } },
        'pt': { name: 'Portugal', nameLocalized: 'Portugal', currency: '€', currencyCode: 'EUR', locale: 'pt-PT', tips: ['Os bancos portugueses financiam até 90% do valor de avaliação.', 'Isenção de IMT para jovens até 35 anos em primeiras habitações.', 'O spread é a margem do banco sobre a Euribor — negocie bem.'], mortgage: { medianPrice: 200000, typicalRate: 4.0, typicalTerm: 30, downPayment: 10 } },
        'it': { name: 'Italy', nameLocalized: 'Italia', currency: '€', currencyCode: 'EUR', locale: 'it-IT', tips: ['Le banche italiane finanziano tipicamente fino all\'80% del valore.', 'L\'imposta di registro per la prima casa è del 2%.', 'Il Fondo Garanzia Prima Casa copre fino al 50% per under 36.'], mortgage: { medianPrice: 250000, typicalRate: 4.0, typicalTerm: 25, downPayment: 20 } },
        'nl': { name: 'Netherlands', nameLocalized: 'Nederland', currency: '€', currencyCode: 'EUR', locale: 'nl-NL', tips: ['Nederland is een van de weinige landen waar je 100% kunt financieren.', 'Hypotheekrenteaftrek maakt de effectieve rente lager.', 'NHG geeft lagere rente bij woningen tot €435.000.'], mortgage: { medianPrice: 450000, typicalRate: 4.0, typicalTerm: 30, downPayment: 0 } },
        'pl': { name: 'Poland', nameLocalized: 'Polska', currency: 'zł', currencyCode: 'PLN', locale: 'pl-PL', tips: ['Program "Bezpieczny Kredyt 2%" oferuje dopłaty do rat.', 'Wkład własny wynosi minimum 10-20%.', 'WIBOR jest stopą referencyjną dla kredytów o zmiennym oprocentowaniu.'], mortgage: { medianPrice: 500000, typicalRate: 7.5, typicalTerm: 25, downPayment: 20 } },
        'gb': { name: 'United Kingdom', nameLocalized: 'United Kingdom', currency: '£', currencyCode: 'GBP', locale: 'en-GB', tips: ['First-time buyers pay no Stamp Duty on properties up to £425,000.', 'Lifetime ISA provides 25% government bonus for deposits.', 'Fixed rates for 2-5 years are most common.'], mortgage: { medianPrice: 285000, typicalRate: 5.0, typicalTerm: 25, downPayment: 10 } },
        'au': { name: 'Australia', nameLocalized: 'Australia', currency: '$', currencyCode: 'AUD', locale: 'en-AU', tips: ['Lenders Mortgage Insurance (LMI) required if deposit under 20%.', 'First Home Owner Grant varies by state — $10,000-$30,000 for new homes.', 'Offset accounts are popular to reduce interest.'], mortgage: { medianPrice: 800000, typicalRate: 6.0, typicalTerm: 30, downPayment: 20 } },
        'ie': { name: 'Ireland', nameLocalized: 'Ireland', currency: '€', currencyCode: 'EUR', locale: 'en-IE', tips: ['First-time buyers need only 10% deposit.', 'Help to Buy scheme provides up to €30,000 tax refund for new builds.', 'Central Bank rules limit mortgages to 4x income.'], mortgage: { medianPrice: 350000, typicalRate: 4.0, typicalTerm: 30, downPayment: 10 } },
        'at': { name: 'Austria', nameLocalized: 'Österreich', currency: '€', currencyCode: 'EUR', locale: 'de-AT', tips: { de: ['Österreichische Banken verlangen normalerweise 20% Eigenkapital.', 'Nebenkosten circa 10%.', 'Wohnbauförderung je nach Bundesland verfügbar.'], en: ['Austrian banks typically require 20% down payment.', 'Additional costs are around 10%.', 'State housing subsidies available depending on region.'] }, mortgage: { medianPrice: 350000, typicalRate: 4.0, typicalTerm: 30, downPayment: 20 } },
        'ch': { name: 'Switzerland', nameLocalized: 'Suisse', currency: 'CHF', currencyCode: 'CHF', locale: 'de-CH', tips: { de: ['Die Schweiz hat sehr hohe Immobilienpreise — CHF 900.000+ ist normal.', 'Mindestens 20% Eigenkapital erforderlich.', 'Die Tragbarkeit (Kosten/Einkommen unter 33%) ist entscheidend.'], fr: ['La Suisse a des prix immobiliers très élevés — CHF 900.000+ est normal.', 'Minimum 20% d\'apport personnel requis.', 'L\'accessibilité financière (coûts/revenus sous 33%) est déterminante.'], en: ['Switzerland has very high property prices — CHF 900,000+ is normal.', 'Minimum 20% down payment required.', 'Affordability (costs/income under 33%) is key.'], it: ['La Svizzera ha prezzi immobiliari molto elevati — CHF 900.000+ è normale.', 'Minimo 20% di capitale proprio richiesto.', 'L\'accessibilità (costi/reddito sotto 33%) è fondamentale.'] }, mortgage: { medianPrice: 900000, typicalRate: 2.5, typicalTerm: 25, downPayment: 20 } },
        'be': { name: 'Belgium', nameLocalized: 'Belgique', currency: '€', currencyCode: 'EUR', locale: 'nl-BE', tips: { fr: ['Les frais de notaire et droits d\'enregistrement totalisent 12-15%.', 'Droits d\'enregistrement: 12,5% en Wallonie/Bruxelles, 6% en Flandre.'], nl: ['Notariskosten en registratierechten bedragen 12-15%.', 'Registratierechten: 12,5% in Wallonië/Brussel, 6% in Vlaanderen.'], en: ['Notary fees and registration taxes total 12-15%.', 'Registration tax: 12.5% in Wallonia/Brussels, 6% in Flanders.'] }, mortgage: { medianPrice: 300000, typicalRate: 3.8, typicalTerm: 25, downPayment: 20 } },
        'se': { name: 'Sweden', nameLocalized: 'Sverige', currency: 'kr', currencyCode: 'SEK', locale: 'sv-SE', tips: ['Sverige kräver minst 15% kontantinsats.', 'Amorteringskrav: 2% per år om belåningsgrad över 70%.', 'Ränteavdrag på 30% av räntekostnader.'], mortgage: { medianPrice: 4000000, typicalRate: 4.5, typicalTerm: 50, downPayment: 15 } },
        'no': { name: 'Norway', nameLocalized: 'Norge', currency: 'kr', currencyCode: 'NOK', locale: 'no-NO', tips: ['Norge krever minimum 15% egenkapital.', 'Boliglånsforskriften begrenser gjeld til 5 ganger bruttoinntekt.', 'Rentefradrag: 22% av rentekostnader.'], mortgage: { medianPrice: 5000000, typicalRate: 5.0, typicalTerm: 25, downPayment: 15 } },
        'dk': { name: 'Denmark', nameLocalized: 'Danmark', currency: 'kr', currencyCode: 'DKK', locale: 'da-DK', tips: ['Danmark har et unikt realkreditsystem med meget lave renter.', 'Udbetaling på minimum 5% kræves.', 'Afdragsfrihed op til 10 år er muligt.'], mortgage: { medianPrice: 3500000, typicalRate: 4.0, typicalTerm: 30, downPayment: 5 } },
        'fi': { name: 'Finland', nameLocalized: 'Suomi', currency: '€', currencyCode: 'EUR', locale: 'fi-FI', tips: ['Suomessa vaaditaan yleensä 15% omarahoitusosuus.', 'ASP-tili tarjoaa korkoetua ensiasunnon ostajille.', 'Ensiasunnon ostajat vapautetaan varainsiirtoverosta.'], mortgage: { medianPrice: 300000, typicalRate: 4.5, typicalTerm: 25, downPayment: 15 } },
        'co': { name: 'Colombia', nameLocalized: 'Colombia', currency: '$', currencyCode: 'COP', locale: 'es-CO', tips: ['Los créditos VIS tienen tasas preferenciales.', 'El subsidio "Mi Casa Ya" cubre parte de la cuota inicial.', 'Los gastos notariales suman aproximadamente 2% del valor.'], mortgage: { medianPrice: 300000000, typicalRate: 12, typicalTerm: 15, downPayment: 20 } },
        'cl': { name: 'Chile', nameLocalized: 'Chile', currency: 'UF', currencyCode: 'CLF', locale: 'es-CL', tips: ['Los créditos hipotecarios en Chile se expresan en UF.', 'Las tasas son bajas (4-5%) comparado con otros países latinoamericanos.', 'El subsidio DS1 ayuda a familias de clase media.'], mortgage: { medianPrice: 4500, typicalRate: 4.5, typicalTerm: 25, downPayment: 20 } },
        'ca': { name: 'Canada', nameLocalized: 'Canada', currency: '$', currencyCode: 'CAD', locale: 'en-CA', tips: { en: ['Minimum 5% down payment for properties under $500,000.', 'CMHC insurance required if down payment is less than 20%.', 'Stress test requires qualifying at rate + 2%.'], fr: ['Mise de fonds minimale de 5% pour les propriétés sous 500 000$.', 'Assurance SCHL obligatoire si mise de fonds inférieure à 20%.', 'Le test de résistance exige de qualifier au taux + 2%.'] }, mortgage: { medianPrice: 500000, typicalRate: 5.5, typicalTerm: 25, downPayment: 5 } }
    };

    // Cryptocurrency Tax Data by Country (2025-2026)
    const CRYPTO_TAX_DATA = {
        // US - Federal rates, varies by state
        'us': {
            name: { en: 'United States', es: 'Estados Unidos', de: 'USA', fr: 'États-Unis', pt: 'Estados Unidos', it: 'Stati Uniti', nl: 'Verenigde Staten', pl: 'Stany Zjednoczone', sv: 'USA', no: 'USA', da: 'USA', fi: 'Yhdysvallat' },
            flag: '🇺🇸',
            shortTermRate: '10-37%',
            longTermRate: '0-20%',
            holdingPeriod: 12,
            holdingBenefit: true,
            exemption: null,
            tips: {
                en: ['Short-term gains (<1 year) taxed as ordinary income (10-37%).', 'Long-term gains (>1 year) taxed at 0%, 15%, or 20%.', 'Every crypto trade is a taxable event — even crypto-to-crypto swaps.', 'IRS Form 8949 required for all cryptocurrency transactions.'],
                es: ['Ganancias a corto plazo (<1 año) gravadas como ingreso ordinario (10-37%).', 'Ganancias a largo plazo (>1 año) tienen tasas de 0%, 15%, o 20%.', 'Cada operación cripto es un evento imponible — incluso swaps.', 'El formulario IRS 8949 es obligatorio para todas las transacciones.']
            }
        },
        // Germany - Tax-free after 1 year!
        'de': {
            name: { en: 'Germany', es: 'Alemania', de: 'Deutschland', fr: 'Allemagne', pt: 'Alemanha', it: 'Germania', nl: 'Duitsland', pl: 'Niemcy', sv: 'Tyskland', no: 'Tyskland', da: 'Tyskland', fi: 'Saksa' },
            flag: '🇩🇪',
            shortTermRate: '0-45%',
            longTermRate: '0%',
            holdingPeriod: 12,
            holdingBenefit: true,
            exemption: '€600',
            tips: {
                en: ['Crypto is TAX-FREE if held >1 year — major advantage for HODLers!', 'Short-term gains under €600/year are also tax-free (Freigrenze).', 'Exceeding €600 makes the ENTIRE gain taxable, not just the excess.', 'Keep purchase date records to prove your holding period.'],
                de: ['Krypto ist STEUERFREI wenn länger als 1 Jahr gehalten!', 'Kurzfristige Gewinne unter 600€/Jahr sind auch steuerfrei (Freigrenze).', 'Bei Überschreitung von 600€ wird der GESAMTE Gewinn steuerpflichtig.', 'Führen Sie Aufzeichnungen über Kaufdaten als Nachweis.']
            }
        },
        // UK
        'gb': {
            name: { en: 'United Kingdom', es: 'Reino Unido', de: 'Großbritannien', fr: 'Royaume-Uni', pt: 'Reino Unido', it: 'Regno Unito', nl: 'Verenigd Koninkrijk', pl: 'Wielka Brytania', sv: 'Storbritannien', no: 'Storbritannia', da: 'Storbritannien', fi: 'Iso-Britannia' },
            flag: '🇬🇧',
            shortTermRate: '10-20%',
            longTermRate: '10-20%',
            holdingPeriod: null,
            holdingBenefit: false,
            exemption: '£3,000',
            tips: {
                en: ['Capital Gains Tax: 10% (basic rate) or 20% (higher rate).', '£3,000 annual CGT-free allowance (2025-2026).', 'Crypto-to-crypto trades are taxable — not just fiat conversions.', 'Frequent trading may be classified as income (up to 45%).']
            }
        },
        // France - Flat tax
        'fr': {
            name: { en: 'France', es: 'Francia', de: 'Frankreich', fr: 'France', pt: 'França', it: 'Francia', nl: 'Frankrijk', pl: 'Francja', sv: 'Frankrike', no: 'Frankrike', da: 'Frankrig', fi: 'Ranska' },
            flag: '🇫🇷',
            shortTermRate: '30%',
            longTermRate: '30%',
            holdingPeriod: null,
            holdingBenefit: false,
            exemption: '€305',
            tips: {
                en: ['France applies a 30% flat tax (PFU) on all crypto gains.', 'Annual gains under €305 are tax-exempt.', 'Professional traders pay up to 45% + social charges.', 'Strict reporting requirements for all transactions.'],
                fr: ['La France applique un prélèvement forfaitaire unique (PFU) de 30%.', 'Les gains annuels inférieurs à 305€ sont exonérés.', 'Les traders professionnels paient jusqu\'à 45% + charges sociales.', 'Déclaration obligatoire de toutes les transactions.']
            }
        },
        // Spain
        'es': {
            name: { en: 'Spain', es: 'España', de: 'Spanien', fr: 'Espagne', pt: 'Espanha', it: 'Spagna', nl: 'Spanje', pl: 'Hiszpania', sv: 'Spanien', no: 'Spania', da: 'Spanien', fi: 'Espanja' },
            flag: '🇪🇸',
            shortTermRate: '19-28%',
            longTermRate: '19-28%',
            holdingPeriod: null,
            holdingBenefit: false,
            exemption: null,
            tips: {
                en: ['Capital gains taxed at 19-28% depending on amount.', 'Modelo 720: mandatory for foreign exchange accounts.', 'All crypto swaps and trades are taxable events.', 'Increasing enforcement on crypto tax compliance.'],
                es: ['Ganancias de capital gravadas al 19-28% según el monto.', 'Modelo 720: obligatorio para cuentas en exchanges extranjeros.', 'Todos los intercambios y swaps cripto son hechos imponibles.', 'Mayor fiscalización sobre cumplimiento fiscal cripto.']
            }
        },
        // Portugal - Great for holders
        'pt': {
            name: { en: 'Portugal', es: 'Portugal', de: 'Portugal', fr: 'Portugal', pt: 'Portugal', it: 'Portogallo', nl: 'Portugal', pl: 'Portugalia', sv: 'Portugal', no: 'Portugal', da: 'Portugal', fi: 'Portugali' },
            flag: '🇵🇹',
            shortTermRate: '28%',
            longTermRate: '0%',
            holdingPeriod: 12,
            holdingBenefit: true,
            exemption: null,
            tips: {
                en: ['Crypto is TAX-FREE if held >365 days!', 'Short-term gains (<1 year) taxed at 28%.', 'Professional/frequent traders classified as business income.', 'Since 2023, only long-term holders benefit from exemption.'],
                pt: ['Cripto é ISENTO se mantido por mais de 365 dias!', 'Ganhos de curto prazo (<1 ano) tributados a 28%.', 'Traders frequentes classificados como renda empresarial.', 'Desde 2023, só holders de longo prazo têm isenção.']
            }
        },
        // Italy
        'it': {
            name: { en: 'Italy', es: 'Italia', de: 'Italien', fr: 'Italie', pt: 'Itália', it: 'Italia', nl: 'Italië', pl: 'Włochy', sv: 'Italien', no: 'Italia', da: 'Italien', fi: 'Italia' },
            flag: '🇮🇹',
            shortTermRate: '26%',
            longTermRate: '26%',
            holdingPeriod: null,
            holdingBenefit: false,
            exemption: '€2,000',
            tips: {
                en: ['Flat 26% tax on all crypto capital gains.', 'First €2,000 in annual gains is tax-exempt.', '2023 amnesty program available for past gains.', 'Mandatory declaration of crypto holdings.'],
                it: ['Imposta fissa del 26% su tutte le plusvalenze crypto.', 'I primi 2.000€ di guadagni annuali sono esenti.', 'Sanatoria 2023 disponibile per guadagni passati.', 'Dichiarazione obbligatoria delle cripto possedute.']
            }
        },
        // Netherlands - Wealth tax
        'nl': {
            name: { en: 'Netherlands', es: 'Países Bajos', de: 'Niederlande', fr: 'Pays-Bas', pt: 'Países Baixos', it: 'Paesi Bassi', nl: 'Nederland', pl: 'Holandia', sv: 'Nederländerna', no: 'Nederland', da: 'Holland', fi: 'Alankomaat' },
            flag: '🇳🇱',
            shortTermRate: '~32%',
            longTermRate: '~32%',
            holdingPeriod: null,
            holdingBenefit: false,
            exemption: '€57,000',
            tips: {
                en: ['Wealth tax system — not capital gains.', 'Tax on assumed 4% return at ~32% = ~1.3% of assets.', '€57K (single) or €114K (couple) exempt.', 'Tax based on Jan 1 holdings, regardless of sales.'],
                nl: ['Vermogensbelasting — geen vermogenswinstbelasting.', 'Belasting op fictief rendement ~4% tegen ~32%.', '€57K (single) of €114K (paar) vrijgesteld.', 'Belasting op basis van 1 januari bezit.']
            }
        },
        // Poland
        'pl': {
            name: { en: 'Poland', es: 'Polonia', de: 'Polen', fr: 'Pologne', pt: 'Polônia', it: 'Polonia', nl: 'Polen', pl: 'Polska', sv: 'Polen', no: 'Polen', da: 'Polen', fi: 'Puola' },
            flag: '🇵🇱',
            shortTermRate: '19%',
            longTermRate: '19%',
            holdingPeriod: null,
            holdingBenefit: false,
            exemption: null,
            tips: {
                en: ['Flat 19% tax on crypto capital gains.', 'Losses can be carried forward for 5 years.', 'Each sale or exchange is a taxable event.', 'Clear, simple crypto tax rules.'],
                pl: ['Zryczałtowany 19% podatek od zysków krypto.', 'Straty można odliczać przez 5 lat.', 'Każda sprzedaż lub wymiana to zdarzenie podatkowe.', 'Przejrzyste zasady opodatkowania krypto.']
            }
        },
        // Sweden
        'se': {
            name: { en: 'Sweden', es: 'Suecia', de: 'Schweden', fr: 'Suède', pt: 'Suécia', it: 'Svezia', nl: 'Zweden', pl: 'Szwecja', sv: 'Sverige', no: 'Sverige', da: 'Sverige', fi: 'Ruotsi' },
            flag: '🇸🇪',
            shortTermRate: '30%',
            longTermRate: '30%',
            holdingPeriod: null,
            holdingBenefit: false,
            exemption: null,
            tips: {
                en: ['30% flat tax on crypto capital gains.', 'Must report all trades on annual tax return.', 'Strict reporting requirements.', 'Crypto-to-crypto trades are taxable events.'],
                sv: ['30% platt skatt på kryptovinster.', 'Alla affärer måste redovisas i årsdeklarationen.', 'Strikta rapporteringskrav.', 'Krypto-till-krypto byten är skattepliktiga.']
            }
        },
        // Norway
        'no': {
            name: { en: 'Norway', es: 'Noruega', de: 'Norwegen', fr: 'Norvège', pt: 'Noruega', it: 'Norvegia', nl: 'Noorwegen', pl: 'Norwegia', sv: 'Norge', no: 'Norge', da: 'Norge', fi: 'Norja' },
            flag: '🇳🇴',
            shortTermRate: '22%',
            longTermRate: '22%',
            holdingPeriod: null,
            holdingBenefit: false,
            exemption: null,
            tips: {
                en: ['22% flat tax on crypto gains.', 'All crypto must be reported as wealth.', 'Tightening enforcement on undeclared crypto.', 'Track all trades for accurate reporting.'],
                no: ['22% flat skatt på kryptogevinster.', 'All krypto må rapporteres som formue.', 'Strammer inn på urapportert krypto.', 'Spor alle handler for nøyaktig rapportering.']
            }
        },
        // Denmark
        'dk': {
            name: { en: 'Denmark', es: 'Dinamarca', de: 'Dänemark', fr: 'Danemark', pt: 'Dinamarca', it: 'Danimarca', nl: 'Denemarken', pl: 'Dania', sv: 'Danmark', no: 'Danmark', da: 'Danmark', fi: 'Tanska' },
            flag: '🇩🇰',
            shortTermRate: '37-52%',
            longTermRate: '37-52%',
            holdingPeriod: null,
            holdingBenefit: false,
            exemption: null,
            tips: {
                en: ['Crypto taxed as personal income (up to 52%).', 'Classification as speculation vs business affects rate.', 'One of the highest crypto tax rates in Europe.', 'Hobby trading may qualify for lower treatment.'],
                da: ['Kryptogevinster beskattes som personlig indkomst (op til 52%).', 'Klassificering som spekulation vs erhverv påvirker sats.', 'En af de højeste kryptoskattesatser i Europa.', 'Hobbyhandel kan kvalificere til lavere skat.']
            }
        },
        // Finland
        'fi': {
            name: { en: 'Finland', es: 'Finlandia', de: 'Finnland', fr: 'Finlande', pt: 'Finlândia', it: 'Finlandia', nl: 'Finland', pl: 'Finlandia', sv: 'Finland', no: 'Finland', da: 'Finland', fi: 'Suomi' },
            flag: '🇫🇮',
            shortTermRate: '30-34%',
            longTermRate: '30-34%',
            holdingPeriod: null,
            holdingBenefit: false,
            exemption: null,
            tips: {
                en: ['Capital gains: 30% (≤30K) or 34% (above).', 'All crypto sales and swaps are taxable.', 'Detailed transaction reporting required.', 'Mining income taxed as earned income.'],
                fi: ['Myyntivoitot: 30% (≤30.000€) tai 34% (yli).', 'Kaikki kryptomyynnit ja -vaihdot ovat verotettavia.', 'Yksityiskohtainen tapahtumaraportointi vaadittu.', 'Louhintatulo verotetaan ansiotulona.']
            }
        },
        // Switzerland - No capital gains tax!
        'ch': {
            name: { en: 'Switzerland', es: 'Suiza', de: 'Schweiz', fr: 'Suisse', pt: 'Suíça', it: 'Svizzera', nl: 'Zwitserland', pl: 'Szwajcaria', sv: 'Schweiz', no: 'Sveits', da: 'Schweiz', fi: 'Sveitsi' },
            flag: '🇨🇭',
            shortTermRate: '0%',
            longTermRate: '0%',
            holdingPeriod: null,
            holdingBenefit: false,
            exemption: 'Unlimited',
            tips: {
                en: ['NO capital gains tax for private investors!', 'Crypto treated as personal movable assets.', 'Professional traders ARE taxed — consult advisor.', 'Wealth tax applies based on Dec 31 market value.'],
                de: ['KEINE Kapitalertragssteuer für Privatanleger!', 'Krypto wird als bewegliches Privatvermögen behandelt.', 'Professionelle Trader werden besteuert.', 'Vermögenssteuer basiert auf 31.12. Marktwert.'],
                fr: ['PAS d\'impôt sur les gains en capital pour les privés!', 'Cryptos traitées comme biens mobiliers privés.', 'Les traders pro SONT imposés — consultez un conseiller.', 'L\'impôt fortune s\'applique sur la valeur au 31 déc.'],
                pt: ['NÃO há imposto sobre mais-valias para investidores privados!', 'Cripto é tratado como bens móveis pessoais.', 'Traders profissionais SÃO tributados — consulte um consultor.', 'Imposto sobre riqueza aplica-se baseado no valor em 31 de dez.'],
                it: ['NESSUNA imposta sulle plusvalenze per investitori privati!', 'Le cripto sono trattate come beni mobili personali.', 'I trader professionisti SONO tassati — consulta un consulente.', 'L\'imposta patrimoniale si applica sul valore di mercato al 31 dicembre.']
            }
        },
        // Austria
        'at': {
            name: { en: 'Austria', es: 'Austria', de: 'Österreich', fr: 'Autriche', pt: 'Áustria', it: 'Austria', nl: 'Oostenrijk', pl: 'Austria', sv: 'Österrike', no: 'Østerrike', da: 'Østrig', fi: 'Itävalta' },
            flag: '🇦🇹',
            shortTermRate: '27.5%',
            longTermRate: '27.5%',
            holdingPeriod: null,
            holdingBenefit: false,
            exemption: null,
            tips: {
                en: ['Flat 27.5% tax on realized crypto gains.', 'Crypto before March 2021 may have grandfathered rules.', 'Staking and lending rewards are taxable.', 'Clear, consistent crypto taxation.'],
                de: ['Pauschal 27,5% Steuer auf realisierte Krypto-Gewinne.', 'Vor März 2021 erworbene Krypto kann Altregeln haben.', 'Staking- und Lending-Erträge sind steuerpflichtig.', 'Klare, konsistente Kryptobesteuerung.']
            }
        },
        // Belgium
        'be': {
            name: { en: 'Belgium', es: 'Bélgica', de: 'Belgien', fr: 'Belgique', pt: 'Bélgica', it: 'Belgio', nl: 'België', pl: 'Belgia', sv: 'Belgien', no: 'Belgia', da: 'Belgien', fi: 'Belgia' },
            flag: '🇧🇪',
            shortTermRate: '0-33%',
            longTermRate: '0%',
            holdingPeriod: null,
            holdingBenefit: true,
            exemption: 'Case-by-case',
            tips: {
                en: ['Private investors may be TAX-FREE ("good housekeeping").', 'Speculative gains can be taxed at 33%.', 'Classification depends on trading frequency.', 'Keep records to prove passive investment.'],
                fr: ['Les investisseurs privés peuvent être EXONÉRÉS.', 'Les gains spéculatifs taxés à 33%.', 'Classification dépend de la fréquence de trading.', 'Gardez des preuves d\'investissement passif.'],
                nl: ['Particuliere beleggers kunnen VRIJGESTELD zijn.', 'Speculatieve winsten belast tegen 33%.', 'Classificatie hangt af van handelsfrequentie.', 'Bewaar bewijzen van passief beleggen.']
            }
        },
        // Canada
        'ca_country': {
            name: { en: 'Canada', es: 'Canadá', de: 'Kanada', fr: 'Canada', pt: 'Canadá', it: 'Canada', nl: 'Canada', pl: 'Kanada', sv: 'Kanada', no: 'Canada', da: 'Canada', fi: 'Kanada' },
            flag: '🇨🇦',
            shortTermRate: '~25%',
            longTermRate: '~25%',
            holdingPeriod: null,
            holdingBenefit: false,
            exemption: null,
            tips: {
                en: ['Only 50% of capital gains are taxable!', 'Effective rate is half your marginal rate.', 'Crypto-to-crypto trades are taxable events.', 'CRA actively auditing crypto investors.'],
                fr: ['Seulement 50% des gains en capital imposables!', 'Le taux effectif = moitié de votre taux marginal.', 'Les échanges crypto-crypto sont imposables.', 'L\'ARC audite activement les investisseurs crypto.']
            }
        },
        // Australia
        'au': {
            name: { en: 'Australia', es: 'Australia', de: 'Australien', fr: 'Australie', pt: 'Austrália', it: 'Australia', nl: 'Australië', pl: 'Australia', sv: 'Australien', no: 'Australia', da: 'Australien', fi: 'Australia' },
            flag: '🇦🇺',
            shortTermRate: 'Marginal rate',
            longTermRate: '50% discount',
            holdingPeriod: 12,
            holdingBenefit: true,
            exemption: null,
            tips: {
                en: ['Hold 12+ months for 50% CGT discount!', 'Short-term gains at marginal rate (up to 45%).', '$10,000 personal use exemption available.', 'ATO tracks crypto via exchange data.']
            }
        },
        // Ireland
        'ie': {
            name: { en: 'Ireland', es: 'Irlanda', de: 'Irland', fr: 'Irlande', pt: 'Irlanda', it: 'Irlanda', nl: 'Ierland', pl: 'Irlandia', sv: 'Irland', no: 'Irland', da: 'Irland', fi: 'Irlanti' },
            flag: '🇮🇪',
            shortTermRate: '33%',
            longTermRate: '33%',
            holdingPeriod: null,
            holdingBenefit: false,
            exemption: '€1,270',
            tips: {
                en: ['Flat 33% Capital Gains Tax on crypto.', '€1,270 annual CGT-free allowance.', 'Self-assessment required; file by Oct 31.', 'All disposals including swaps are taxable.']
            }
        },
        // Brazil
        'br': {
            name: { en: 'Brazil', es: 'Brasil', de: 'Brasilien', fr: 'Brésil', pt: 'Brasil', it: 'Brasile', nl: 'Brazilië', pl: 'Brazylia', sv: 'Brasilien', no: 'Brasil', da: 'Brasilien', fi: 'Brasilia' },
            flag: '🇧🇷',
            shortTermRate: '15-22.5%',
            longTermRate: '15-22.5%',
            holdingPeriod: null,
            holdingBenefit: false,
            exemption: 'R$35,000/month',
            tips: {
                en: ['Monthly sales under R$35,000 are TAX-FREE!', 'Gains above taxed at 15-22.5%.', 'Report crypto monthly to tax authority.', 'Strict reporting requirements.'],
                pt: ['Vendas mensais abaixo de R$35.000 são ISENTAS!', 'Ganhos acima tributados em 15-22,5%.', 'Declare cripto mensalmente à Receita.', 'Regras estritas de declaração.']
            }
        },
        // Mexico
        'mx': {
            name: { en: 'Mexico', es: 'México', de: 'Mexiko', fr: 'Mexique', pt: 'México', it: 'Messico', nl: 'Mexico', pl: 'Meksyk', sv: 'Mexiko', no: 'Mexico', da: 'Mexico', fi: 'Meksiko' },
            flag: '🇲🇽',
            shortTermRate: '~35%',
            longTermRate: '~35%',
            holdingPeriod: null,
            holdingBenefit: false,
            exemption: null,
            tips: {
                en: ['Crypto gains generally taxed as income (up to 35%).', 'Tax treatment varies by circumstances.', 'No specific crypto tax law yet.', 'Consult a local tax advisor.'],
                es: ['Ganancias cripto gravadas como ingreso (hasta 35%).', 'Tratamiento fiscal varía según circunstancias.', 'Aún no hay ley fiscal específica para cripto.', 'Consulta con un asesor fiscal local.']
            }
        },
        // Argentina
        'ar': {
            name: { en: 'Argentina', es: 'Argentina', de: 'Argentinien', fr: 'Argentine', pt: 'Argentina', it: 'Argentina', nl: 'Argentinië', pl: 'Argentyna', sv: 'Argentina', no: 'Argentina', da: 'Argentina', fi: 'Argentiina' },
            flag: '🇦🇷',
            shortTermRate: '15%',
            longTermRate: '15%',
            holdingPeriod: null,
            holdingBenefit: false,
            exemption: null,
            tips: {
                en: ['15% tax on crypto capital gains.', 'High inflation makes crypto popular.', 'FX controls affect conversions.', 'Keep detailed records.'],
                es: ['15% de impuesto sobre ganancias cripto.', 'La alta inflación hace cripto popular.', 'Controles cambiarios afectan conversiones.', 'Mantén registros detallados.']
            }
        },
        // Colombia
        'co_country': {
            name: { en: 'Colombia', es: 'Colombia', de: 'Kolumbien', fr: 'Colombie', pt: 'Colômbia', it: 'Colombia', nl: 'Colombia', pl: 'Kolumbia', sv: 'Colombia', no: 'Colombia', da: 'Colombia', fi: 'Kolumbia' },
            flag: '🇨🇴',
            shortTermRate: '0-10%',
            longTermRate: '0-10%',
            holdingPeriod: null,
            holdingBenefit: false,
            exemption: 'Foreign gains',
            tips: {
                en: ['Foreign source gains may be tax-exempt.', 'Domestic crypto gains: 0-10%.', 'Crypto treated as intangible property.', 'Regulations evolving — consult expert.'],
                es: ['Ganancias de fuentes extranjeras pueden estar exentas.', 'Ganancias cripto domésticas: 0-10%.', 'Cripto tratado como propiedad intangible.', 'Regulaciones evolucionando — consulta experto.']
            }
        },
        // Chile
        'cl': {
            name: { en: 'Chile', es: 'Chile', de: 'Chile', fr: 'Chili', pt: 'Chile', it: 'Cile', nl: 'Chili', pl: 'Chile', sv: 'Chile', no: 'Chile', da: 'Chile', fi: 'Chile' },
            flag: '🇨🇱',
            shortTermRate: '25-40%',
            longTermRate: '25-40%',
            holdingPeriod: null,
            holdingBenefit: false,
            exemption: null,
            tips: {
                en: ['Crypto may be taxed as business income (25-40%).', 'Classification depends on trading frequency.', 'Clearer regulations in development.', 'Keep detailed trade records.'],
                es: ['Cripto puede tributar como renta empresarial (25-40%).', 'Clasificación depende de frecuencia de operaciones.', 'Regulaciones más claras en desarrollo.', 'Mantén registros detallados de operaciones.']
            }
        }
    };

    // US State-specific crypto tax notes (state taxes on top of federal)
    const US_STATE_CRYPTO = {
        // No state income tax states
        'tx': { stateTax: false, notes: { en: 'Texas: No state income tax on crypto gains!', es: 'Texas: ¡Sin impuesto estatal sobre ganancias cripto!' } },
        'fl': { stateTax: false, notes: { en: 'Florida: No state income tax on crypto gains!', es: 'Florida: ¡Sin impuesto estatal sobre ganancias cripto!' } },
        'nv': { stateTax: false, notes: { en: 'Nevada: No state income tax on crypto gains!', es: 'Nevada: ¡Sin impuesto estatal sobre ganancias cripto!' } },
        'wy': { stateTax: false, notes: { en: 'Wyoming: No state income tax + crypto-friendly regulations!', es: 'Wyoming: ¡Sin impuesto estatal + regulaciones cripto-friendly!' } },
        'sd': { stateTax: false, notes: { en: 'South Dakota: No state income tax on crypto gains!', es: 'Dakota del Sur: ¡Sin impuesto estatal!' } },
        'tn': { stateTax: false, notes: { en: 'Tennessee: No state income tax on crypto gains!', es: 'Tennessee: ¡Sin impuesto estatal sobre ganancias cripto!' } },
        'nh': { stateTax: false, notes: { en: 'New Hampshire: No state income tax on crypto gains!', es: 'New Hampshire: ¡Sin impuesto estatal!' } },
        'ak': { stateTax: false, notes: { en: 'Alaska: No state income tax on crypto gains!', es: 'Alaska: ¡Sin impuesto estatal!' } },
        'wa': { stateTax: false, notes: { en: 'Washington: No income tax (7% on cap gains >$270K).', es: 'Washington: Sin impuesto (7% en ganancias >$270K).' } },
        // High tax states
        'ca': { stateTax: true, taxRate: '13.3%', notes: { en: 'California: Up to 13.3% state tax — highest in USA.', es: 'California: Hasta 13.3% estatal — el más alto de EE.UU.' } },
        'ny': { stateTax: true, taxRate: '10.9%', notes: { en: 'New York: Up to 10.9% (+3.88% NYC tax).', es: 'Nueva York: Hasta 10.9% (+3.88% NYC).' } },
        'nj': { stateTax: true, taxRate: '10.75%', notes: { en: 'New Jersey: Up to 10.75% state tax.', es: 'Nueva Jersey: Hasta 10.75% estatal.' } },
        'or': { stateTax: true, taxRate: '9.9%', notes: { en: 'Oregon: Up to 9.9% state tax on crypto.', es: 'Oregon: Hasta 9.9% estatal.' } },
        'mn': { stateTax: true, taxRate: '9.85%', notes: { en: 'Minnesota: Up to 9.85% state tax.', es: 'Minnesota: Hasta 9.85% estatal.' } },
        // Medium tax states
        'il': { stateTax: true, taxRate: '4.95%', notes: { en: 'Illinois: Flat 4.95% state tax.', es: 'Illinois: 4.95% fijo estatal.' } },
        'ma': { stateTax: true, taxRate: '5%', notes: { en: 'Massachusetts: 5% flat tax (+4% surtax on >$1M).', es: 'Massachusetts: 5% fijo (+4% en >$1M).' } },
        'co': { stateTax: true, taxRate: '4.4%', notes: { en: 'Colorado: Flat 4.4% state tax.', es: 'Colorado: 4.4% fijo estatal.' } },
        'az': { stateTax: true, taxRate: '2.5%', notes: { en: 'Arizona: Flat 2.5% state tax.', es: 'Arizona: 2.5% fijo estatal.' } },
        'ga': { stateTax: true, taxRate: '5.49%', notes: { en: 'Georgia: Flat 5.49% state tax.', es: 'Georgia: 5.49% fijo estatal.' } },
        'nc': { stateTax: true, taxRate: '4.5%', notes: { en: 'North Carolina: Flat 4.5% state tax.', es: 'Carolina del Norte: 4.5% fijo estatal.' } },
        'pa': { stateTax: true, taxRate: '3.07%', notes: { en: 'Pennsylvania: Flat 3.07% state tax.', es: 'Pennsylvania: 3.07% fijo estatal.' } },
        'oh': { stateTax: true, taxRate: '3.75%', notes: { en: 'Ohio: Up to 3.75% state tax.', es: 'Ohio: Hasta 3.75% estatal.' } },
        'mi': { stateTax: true, taxRate: '4.25%', notes: { en: 'Michigan: Flat 4.25% state tax.', es: 'Michigan: 4.25% fijo estatal.' } },
        'va': { stateTax: true, taxRate: '5.75%', notes: { en: 'Virginia: Up to 5.75% state tax.', es: 'Virginia: Hasta 5.75% estatal.' } }
    };
    const STATE_NAME_TO_CODE = {
        'texas': 'tx', 'california': 'ca', 'florida': 'fl', 'new york': 'ny',
        'pennsylvania': 'pa', 'illinois': 'il', 'ohio': 'oh', 'georgia': 'ga',
        'north carolina': 'nc', 'michigan': 'mi', 'new jersey': 'nj', 'virginia': 'va',
        'washington': 'wa', 'arizona': 'az', 'massachusetts': 'ma', 'tennessee': 'tn',
        'indiana': 'in', 'missouri': 'mo', 'maryland': 'md', 'colorado': 'co',
        'nevada': 'nv', 'wyoming': 'wy', 'south dakota': 'sd', 'new hampshire': 'nh',
        'alaska': 'ak', 'oregon': 'or', 'minnesota': 'mn'
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

    function getRegionDisplayName(regionCode, pageLang, fallback) {
        try {
            if (typeof Intl !== 'undefined' && Intl.DisplayNames) {
                const displayNames = new Intl.DisplayNames([pageLang], { type: 'region' });
                const name = displayNames.of(regionCode);
                if (name) return name;
            }
        } catch (e) {
            // ignore and fallback
        }
        return fallback;
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
            log('CalcKit Geo: Could not detect location', error);
            return null;
        }
    }

    /**
     * Get location data based on detected location and page language
     */
    function getLocationData(location, pageLang = 'en') {
        if (!location) return null;

        // If user is in the US, use state label only (avoid unverified stats)
        if (location.countryCode === 'us') {
            const stateCode = location.region?.toLowerCase();
            if (stateCode) {
                const fallbackName = location.regionName || stateCode.toUpperCase();
                return {
                    type: 'state',
                    data: { name: fallbackName },
                    displayName: getRegionDisplayName(`US-${stateCode.toUpperCase()}`, pageLang, fallbackName)
                };
            }
        }

        // Otherwise use country label only (avoid unverified stats)
        if (location.countryCode) {
            const fallbackName = location.country || location.countryCode.toUpperCase();
            return {
                type: 'country',
                data: { name: fallbackName },
                displayName: getRegionDisplayName(location.countryCode.toUpperCase(), pageLang, fallbackName)
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
        en: { insights: "Market Insights", personalized: "Local context", medianPrice: "Median Price", typicalRate: "Typical Rate", loanTerm: "Loan Term", downPayment: "Down Payment", sunHours: "Sun Hours", electricRate: "Electric Rate", potential: "Potential", high: "High", moderate: "Moderate", laborRate: "Labor Rate", season: "Season", active: "Active", propertyTax: "Property Tax", homeInsurance: "Home Insurance", stateTax: "State Income Tax", yes: "Yes", none: "None", unitHrs: "hrs/day", unitSqFt: "/sq.ft", unitKwh: "/kWh", unitYr: "/yr", years: "years", show: "Show", hide: "Hide", localFactors: "Local Factors", cryptoInsights: "Crypto Tax Insights", capitalGains: "Capital Gains Tax", shortTerm: "Short-term", longTerm: "Long-term", holdBenefit: "Holding Benefit", months: "months", taxFree: "Tax-Free", afterHold: "after holding", year: "year", exemption: "Exemption", disclaimer: "Tax laws change frequently. Consult a qualified tax professional.", cryptoFactors: "Key Tax Considerations", taxYear: "Tax Year" },
        es: { insights: "Datos de Mercado", personalized: "Contexto local", medianPrice: "Precio Medio", typicalRate: "Tasa Típica", loanTerm: "Plazo", downPayment: "Enganche", sunHours: "Horas de Sol", electricRate: "Tarifa Eléc.", potential: "Potencial", high: "Alto", moderate: "Moderado", laborRate: "Mano de Obra", season: "Temporada", active: "Activa", propertyTax: "Impuesto Predial", homeInsurance: "Seguro", stateTax: "Impuesto Estatal", yes: "Sí", none: "No", unitHrs: "hr/día", unitSqFt: "/pie²", unitKwh: "/kWh", unitYr: "/año", years: "años", show: "Mostrar", hide: "Ocultar", localFactors: "Factores Locales", cryptoInsights: "Impuestos Cripto", capitalGains: "Impuesto Ganancias", shortTerm: "Corto plazo", longTerm: "Largo plazo", holdBenefit: "Beneficio Holding", months: "meses", taxFree: "Libre de Impuestos", afterHold: "después de mantener", year: "año", exemption: "Exención", disclaimer: "Las leyes fiscales cambian. Consulta a un profesional.", cryptoFactors: "Consideraciones Fiscales", taxYear: "Año Fiscal" },
        de: { insights: "Markteinblicke", personalized: "Lokaler Kontext", medianPrice: "Medianpreis", typicalRate: "Typischer Zins", loanTerm: "Laufzeit", downPayment: "Anzahlung", sunHours: "Sonnenstunden", electricRate: "Strompreis", potential: "Potenzial", high: "Hoch", moderate: "Mittel", laborRate: "Arbeitskosten", season: "Saison", active: "Aktiv", propertyTax: "Grundsteuer", homeInsurance: "Versicherung", stateTax: "Einkommenssteuer", yes: "Ja", none: "Keine", unitHrs: "Std/Tag", unitSqFt: "/qf", unitKwh: "/kWh", unitYr: "/Jahr", years: "Jahre", show: "Anzeigen", hide: "Verbergen", localFactors: "Lokale Faktoren", cryptoInsights: "Krypto-Steuer Info", capitalGains: "Kapitalertragssteuer", shortTerm: "Kurzfristig", longTerm: "Langfristig", holdBenefit: "Haltefrist-Vorteil", months: "Monate", taxFree: "Steuerfrei", afterHold: "nach Halten von", year: "Jahr", exemption: "Freibetrag", disclaimer: "Steuergesetze ändern sich. Konsultieren Sie einen Steuerberater.", cryptoFactors: "Steuer-Hinweise", taxYear: "Steuerjahr" },
        fr: { insights: "Aperçu du Marché", personalized: "Contexte local", medianPrice: "Prix Médian", typicalRate: "Taux Moyen", loanTerm: "Durée", downPayment: "Apport", sunHours: "Ensoleillement", electricRate: "Tarif Élec.", potential: "Potentiel", high: "Élevé", moderate: "Modéré", laborRate: "Main d'Œuvre", season: "Saison", active: "Active", propertyTax: "Taxe Foncière", homeInsurance: "Assurance", stateTax: "Impôt État", yes: "Oui", none: "Aucun", unitHrs: "h/jour", unitSqFt: "/pi²", unitKwh: "/kWh", unitYr: "/an", years: "ans", show: "Afficher", hide: "Masquer", localFactors: "Facteurs Locaux", cryptoInsights: "Fiscalité Crypto", capitalGains: "Impôt Plus-Values", shortTerm: "Court terme", longTerm: "Long terme", holdBenefit: "Avantage Détention", months: "mois", taxFree: "Exonéré", afterHold: "après détention de", year: "an", exemption: "Exonération", disclaimer: "Les lois fiscales changent fréquemment. Consultez un professionnel.", cryptoFactors: "Points Clés Fiscaux", taxYear: "Année Fiscale" },
        pt: { insights: "Dados de Mercado", personalized: "Contexto local", medianPrice: "Preço Médio", typicalRate: "Taxa Típica", loanTerm: "Prazo", downPayment: "Entrada", sunHours: "Horas de Sol", electricRate: "Tarifa", potential: "Potencial", high: "Alto", moderate: "Moderado", laborRate: "Mão de Obra", season: "Temporada", active: "Ativa", propertyTax: "IPTU", homeInsurance: "Seguro", stateTax: "Imposto Est.", yes: "Sim", none: "Não", unitHrs: "h/dia", unitSqFt: "/pé²", unitKwh: "/kWh", unitYr: "/ano", years: "anos", show: "Mostrar", hide: "Ocultar", localFactors: "Fatores Locais", cryptoInsights: "Impostos Cripto", capitalGains: "Imposto Ganhos", shortTerm: "Curto prazo", longTerm: "Longo prazo", holdBenefit: "Benefício de Hold", months: "meses", taxFree: "Isento", afterHold: "após manter por", year: "ano", exemption: "Isenção", disclaimer: "Leis fiscais mudam frequentemente. Consulte um profissional.", cryptoFactors: "Pontos Fiscais", taxYear: "Ano Fiscal" },
        it: { insights: "Dati di Mercato", personalized: "Contesto locale", medianPrice: "Prezzo Medio", typicalRate: "Tasso Tipico", loanTerm: "Durata", downPayment: "Anticipo", sunHours: "Ore di Sole", electricRate: "Tariffa Elettr.", potential: "Potenziale", high: "Alto", moderate: "Moderato", laborRate: "Manodopera", season: "Stagione", active: "Attiva", propertyTax: "Tasse Proprietà", homeInsurance: "Assicurazione", stateTax: "Tasse Statali", yes: "Sì", none: "No", unitHrs: "ore/giorno", unitSqFt: "/mq", unitKwh: "/kWh", unitYr: "/anno", years: "anni", show: "Mostra", hide: "Nascondi", localFactors: "Fattori Locali", cryptoInsights: "Tasse Crypto", capitalGains: "Imposta Plusvalenze", shortTerm: "Breve termine", longTerm: "Lungo termine", holdBenefit: "Vantaggio Detenzione", months: "mesi", taxFree: "Esente", afterHold: "dopo detenzione", year: "anno", exemption: "Esenzione", disclaimer: "Le leggi fiscali cambiano. Consulta un professionista.", cryptoFactors: "Punti Fiscali Chiave", taxYear: "Anno Fiscale" },
        nl: { insights: "Marktinformatie", personalized: "Lokale context", medianPrice: "Middenprijs", typicalRate: "Typisch Tarief", loanTerm: "Looptijd", downPayment: "Aanbetaling", sunHours: "Zonuren", electricRate: "Stroomtarief", potential: "Potentieel", high: "Hoog", moderate: "Gemiddeld", laborRate: "Arbeidskosten", season: "Seizoen", active: "Actief", propertyTax: "OZB", homeInsurance: "Verzekering", stateTax: "Inkomstenbel.", yes: "Ja", none: "Geen", unitHrs: "u/dag", unitSqFt: "/vkt", unitKwh: "/kWh", unitYr: "/jr", years: "jaar", show: "Tonen", hide: "Verbergen", localFactors: "Lokale Factoren", cryptoInsights: "Crypto Belasting", capitalGains: "Vermogenswinstbelasting", shortTerm: "Kort termijn", longTerm: "Lang termijn", holdBenefit: "Houdperiode Voordeel", months: "maanden", taxFree: "Belastingvrij", afterHold: "na houding van", year: "jaar", exemption: "Vrijstelling", disclaimer: "Belastingwetten veranderen. Raadpleeg een professional.", cryptoFactors: "Fiscale Overwegingen", taxYear: "Belastingjaar" },
        pl: { insights: "Dane Rynkowe", personalized: "Kontekst lokalny", medianPrice: "Średnia Cena", typicalRate: "Typowa Stawka", loanTerm: "Okres", downPayment: "Wkład Własny", sunHours: "Godziny Słoneczne", electricRate: "Stawka za Prąd", potential: "Potencjał", high: "Wysoki", moderate: "Średni", laborRate: "Robocizna", season: "Sezon", active: "Aktywny", propertyTax: "Podatek", homeInsurance: "Ubezpieczenie", stateTax: "Podatek Stanowy", yes: "Tak", none: "Brak", unitHrs: "h/dzień", unitSqFt: "/st.kw", unitKwh: "/kWh", unitYr: "/rok", years: "lat", show: "Pokaż", hide: "Ukryj", localFactors: "Czynniki Lokalne", cryptoInsights: "Podatki Crypto", capitalGains: "Podatek od zysków", shortTerm: "Krótkoterminowe", longTerm: "Długoterminowe", holdBenefit: "Korzyść z trzymania", months: "miesięcy", taxFree: "Bez podatku", afterHold: "po trzymaniu", year: "rok", exemption: "Zwolnienie", disclaimer: "Przepisy podatkowe się zmieniają. Skonsultuj się z ekspertem.", cryptoFactors: "Kwestie Podatkowe", taxYear: "Rok Podatkowy" },
        sv: { insights: "Marknadsinsikter", personalized: "Lokal kontext", medianPrice: "Medianpris", typicalRate: "Typisk Ränta", loanTerm: "Löptid", downPayment: "Kontantinsats", sunHours: "Soltimmar", electricRate: "Elpris", potential: "Potential", high: "Hög", moderate: "Måttlig", laborRate: "Arbetskostnad", season: "Säsong", active: "Aktiv", propertyTax: "Fastighetsskatt", homeInsurance: "Försäkring", stateTax: "Inkomstskatt", yes: "Ja", none: "Ingen", unitHrs: "tim/dag", unitSqFt: "/kvfot", unitKwh: "/kWh", unitYr: "/år", years: "år", show: "Visa", hide: "Dölj", localFactors: "Lokala Faktorer", cryptoInsights: "Kryptoskatt Info", capitalGains: "Kapitalvinstskatt", shortTerm: "Kort sikt", longTerm: "Lång sikt", holdBenefit: "Innehavsfördel", months: "månader", taxFree: "Skattefritt", afterHold: "efter innehav", year: "år", exemption: "Undantag", disclaimer: "Skattelagar ändras. Konsultera en expert.", cryptoFactors: "Skatteöverväganden", taxYear: "Skatteår" },
        no: { insights: "Markedsinnsikt", personalized: "Lokal kontekst", medianPrice: "Medianpris", typicalRate: "Typisk Rente", loanTerm: "Løpetid", downPayment: "Egenkapital", sunHours: "Soltimer", electricRate: "Strømpris", potential: "Potensial", high: "Høyt", moderate: "Moderat", laborRate: "Arbeidskostnad", season: "Sesong", active: "Aktiv", propertyTax: "Eiendomsskatt", homeInsurance: "Forsikring", stateTax: "Inntektsskatt", yes: "Ja", none: "Ingen", unitHrs: "t/dag", unitSqFt: "/kvfot", unitKwh: "/kWh", unitYr: "/år", years: "år", show: "Vis", hide: "Skjul", localFactors: "Lokale Faktorer", cryptoInsights: "Krypto Skatt", capitalGains: "Gevinstskatt", shortTerm: "Kortsiktig", longTerm: "Langsiktig", holdBenefit: "Holdingsfordel", months: "måneder", taxFree: "Skattefritt", afterHold: "etter holding", year: "år", exemption: "Unntak", disclaimer: "Skattelover endres. Konsulter en ekspert.", cryptoFactors: "Skattem essige forhold", taxYear: "Skatteår" },
        da: { insights: "Markedsindsigt", personalized: "Lokal kontekst", medianPrice: "Medianpris", typicalRate: "Typisk Rente", loanTerm: "Løbetid", downPayment: "Udbetaling", sunHours: "Soltimer", electricRate: "Elpris", potential: "Potentiale", high: "Højt", moderate: "Moderat", laborRate: "Arbejdsløn", season: "Sæson", active: "Aktiv", propertyTax: "Ejendomsskat", homeInsurance: "Forsikring", stateTax: "Indkomstskat", yes: "Ja", none: "Ingen", unitHrs: "b/dag", unitSqFt: "/kvfod", unitKwh: "/kWh", unitYr: "/år", years: "år", show: "Vis", hide: "Skjul", localFactors: "Lokale Faktorer", cryptoInsights: "Krypto Skat", capitalGains: "Kapitalgevinstskat", shortTerm: "Kort sigt", longTerm: "Lang sigt", holdBenefit: "Holdingsfordel", months: "måneder", taxFree: "Skattefri", afterHold: "efter holding", year: "år", exemption: "Fritagelse", disclaimer: "Skattelove ændrer sig. Konsulter en ekspert.", cryptoFactors: "Skatteovervejelser", taxYear: "Skatteår" },
        fi: { insights: "Markkinatiedot", personalized: "Paikallinen konteksti", medianPrice: "Mediaanihinta", typicalRate: "Tyypillinen Korko", loanTerm: "Laina-aika", downPayment: "Käsiraha", sunHours: "Aurinkotunnit", electricRate: "Sähkönhinta", potential: "Potentiaali", high: "Korkea", moderate: "Kohtalainen", laborRate: "Työkustannus", season: "Sesonki", active: "Aktiivinen", propertyTax: "Kiinteistövero", homeInsurance: "Vakuutus", stateTax: "Tulovero", yes: "Kyllä", none: "Ei", unitHrs: "h/pv", unitSqFt: "/neliöjalka", unitKwh: "/kWh", unitYr: "/vuosi", years: "vuotta", show: "Näytä", hide: "Piilota", localFactors: "Paikalliset Tekijät", cryptoInsights: "Krypto Verotus", capitalGains: "Luovutusvoittovero", shortTerm: "Lyhyt aika", longTerm: "Pitkä aika", holdBenefit: "Pitoajan etu", months: "kuukautta", taxFree: "Verovapaa", afterHold: "pitoajan jälkeen", year: "vuosi", exemption: "Vapautus", disclaimer: "Verolait muuttuvat. Konsultoi asiantuntijaa.", cryptoFactors: "Veronäkökohdat", taxYear: "Verovuosi" }
    };

    const GENERIC_TIPS = {
        mortgage: {
            en: [
                "Adjust down payment and term to see the impact on monthly cost and total interest.",
                "Include taxes, insurance, and HOA for a realistic payment estimate.",
                "Compare a few rates — small changes can move the monthly payment a lot."
            ],
            es: [
                "Ajusta el enganche y el plazo para ver el impacto en la cuota y los intereses totales.",
                "Incluye impuestos, seguros y HOA para una estimación realista.",
                "Compara varias tasas; pequeños cambios pueden mover mucho la cuota mensual."
            ],
            de: [
                "Passe Anzahlung und Laufzeit an, um den Effekt auf Rate und Gesamtzinsen zu sehen.",
                "Berücksichtige Steuern, Versicherungen und HOA für eine realistische Schätzung.",
                "Vergleiche mehrere Zinssätze — kleine Änderungen wirken stark auf die Monatsrate."
            ],
            fr: [
                "Ajustez l’apport et la durée pour voir l’impact sur la mensualité et les intérêts totaux.",
                "Incluez taxes, assurances et HOA pour une estimation réaliste.",
                "Comparez plusieurs taux — de petits écarts changent fortement la mensualité."
            ],
            pt: [
                "Ajuste a entrada e o prazo para ver o impacto na parcela e nos juros totais.",
                "Inclua impostos, seguros e HOA para uma estimativa realista.",
                "Compare taxas — pequenas diferenças mudam bastante a parcela mensal."
            ],
            it: [
                "Regola anticipo e durata per vedere l’impatto su rata e interessi totali.",
                "Includi tasse, assicurazioni e HOA per una stima realistica.",
                "Confronta più tassi — piccole differenze cambiano molto la rata."
            ],
            nl: [
                "Pas aanbetaling en looptijd aan om het effect op maandlasten en totale rente te zien.",
                "Neem belastingen, verzekeringen en HOA mee voor een realistische schatting.",
                "Vergelijk meerdere rentes — kleine verschillen veranderen de maandlast sterk."
            ],
            pl: [
                "Zmień wkład własny i okres, by zobaczyć wpływ na ratę i odsetki całkowite.",
                "Uwzględnij podatki, ubezpieczenie i HOA dla realistycznej wyceny.",
                "Porównaj kilka stóp — małe różnice mogą mocno zmienić ratę."
            ],
            sv: [
                "Justera kontantinsats och löptid för att se effekt på månadskostnad och total ränta.",
                "Räkna in skatter, försäkring och HOA för en realistisk uppskattning.",
                "Jämför flera räntor — små skillnader påverkar månadskostnaden mycket."
            ],
            no: [
                "Juster egenkapital og løpetid for å se effekt på månedsbetaling og totale renter.",
                "Ta med skatt, forsikring og HOA for et realistisk estimat.",
                "Sammenlign flere renter — små endringer påvirker månedsbetalingen mye."
            ],
            da: [
                "Juster udbetaling og løbetid for at se effekt på ydelse og samlede renter.",
                "Medregn skatter, forsikring og HOA for et realistisk estimat.",
                "Sammenlign flere renter — små forskelle ændrer ydelsen markant."
            ],
            fi: [
                "Muuta käsirahaa ja laina-aikaa nähdäksesi vaikutus erään ja kokonaiskorkoihin.",
                "Sisällytä verot, vakuutukset ja HOA realistiseen arvioon.",
                "Vertaa korkoja — pienet erot vaikuttavat kuukausierään paljon."
            ]
        },
        crypto: {
            en: [
                "Crypto gains are often taxed — check short-term vs long-term rules.",
                "Each trade can be a taxable event; track dates, cost basis, and fees.",
                "Rules vary by country — confirm with a local professional."
            ],
            es: [
                "Las ganancias cripto suelen pagar impuestos — revisa corto vs largo plazo.",
                "Cada operación puede ser imponible; registra fechas, costo base y comisiones.",
                "Las reglas varían por país — confirma con un profesional local."
            ],
            de: [
                "Krypto-Gewinne werden oft besteuert — prüfe kurz- vs langfristig.",
                "Jeder Trade kann steuerpflichtig sein; erfasse Datum, Anschaffungskosten und Gebühren.",
                "Regeln unterscheiden sich je Land — mit einem lokalen Profi abstimmen."
            ],
            fr: [
                "Les gains crypto sont souvent imposés — vérifiez court vs long terme.",
                "Chaque trade peut être imposable; suivez dates, prix de revient et frais.",
                "Les règles varient selon le pays — vérifiez avec un pro local."
            ],
            pt: [
                "Ganhos em cripto normalmente são tributados — veja curto vs longo prazo.",
                "Cada trade pode ser fato gerador; registre datas, custo base e taxas.",
                "As regras variam por país — confirme com um profissional local."
            ],
            it: [
                "I guadagni crypto sono spesso tassati — verifica breve vs lungo termine.",
                "Ogni trade può essere imponibile; annota date, costo base e commissioni.",
                "Le regole cambiano per paese — verifica con un professionista locale."
            ],
            nl: [
                "Crypto‑winsten worden vaak belast — check kort vs lang termijn.",
                "Elke trade kan belastbaar zijn; noteer data, kostprijs en fees.",
                "Regels verschillen per land — controleer bij een lokale professional."
            ],
            pl: [
                "Zyski z krypto często są opodatkowane — sprawdź krótko vs długoterminowo.",
                "Każda transakcja może być opodatkowana; zapisuj daty, koszt bazowy i opłaty.",
                "Przepisy różnią się między krajami — potwierdź u lokalnego eksperta."
            ],
            sv: [
                "Kryptovinster beskattas ofta — kontrollera kort vs lång sikt.",
                "Varje trade kan vara skattepliktig; notera datum, anskaffningsvärde och avgifter.",
                "Reglerna varierar per land — kolla med lokal expert."
            ],
            no: [
                "Kryptogevinster beskattes ofte — sjekk kort vs lang sikt.",
                "Hver handel kan være skattepliktig; noter datoer, kostbasis og gebyrer.",
                "Regler varierer per land — bekreft med en lokal ekspert."
            ],
            da: [
                "Kryptogevinster beskattes ofte — tjek kort vs lang sigt.",
                "Hver handel kan være skattepligtig; noter datoer, kostpris og gebyrer.",
                "Regler varierer per land — bekræft hos en lokal ekspert."
            ],
            fi: [
                "Kryptovoitot verotetaan usein — tarkista lyhyt vs pitkä pito.",
                "Jokainen kauppa voi olla verotapahtuma; kirjaa päivämäärät, hankintahinta ja kulut.",
                "Säännöt vaihtelevat maittain — varmista paikalliselta asiantuntijalta."
            ]
        }
    };

    function getLocalizedTips(tipsList, pageLang, dataLocale, category) {
        const fallbackGroup = GENERIC_TIPS[category] || {};
        const fallback = fallbackGroup[pageLang] || fallbackGroup.en || [];

        if (!tipsList) return fallback;

        if (Array.isArray(tipsList)) {
            if (pageLang === 'en') return tipsList;
            if (dataLocale && dataLocale.toLowerCase().startsWith(pageLang)) return tipsList;
            return fallback;
        }

        if (typeof tipsList === 'object') {
            if (Array.isArray(tipsList[pageLang])) return tipsList[pageLang];
            if (pageLang === 'en' && Array.isArray(tipsList.en)) return tipsList.en;
            return fallback;
        }

        return fallback;
    }

    /**
     * Sanitize HTML to prevent XSS
     */
    function escapeHtml(unsafe) {
        if (typeof unsafe !== 'string') return unsafe;
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    /**
     * Render the local insights section as a prominent banner
     */
    function renderInsightsSection(locationInfo, calcType) {
        if (!ENABLE_LOCAL_INSIGHTS) return '';

        const { type, data, displayName } = locationInfo;
        const pageLang = detectPageLanguage();
        const t = TRANSLATIONS[pageLang] || TRANSLATIONS['en'];

        let statsHTML = '';
        if (ENABLE_LOCAL_STATS) {
            // Keep legacy stats rendering available, but disabled by default to avoid unverified data.
            // (Intentionally left blank unless ENABLE_LOCAL_STATS is toggled on.)
        }

        const tipsList = USE_GENERIC_TIPS_ONLY ? null : (data && (data.tips || data.mortgage?.tips));
        const tips = getLocalizedTips(tipsList, pageLang, data && data.locale, 'mortgage');

        const tipsHTML = tips.map(tip => `
            <div class="geo-tip-item">
                <span class="geo-tip-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </span>
                <span class="geo-tip-text">${escapeHtml(tip)}</span>
            </div>
        `).join('');

        if (!tipsHTML) return '';

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
                @media (max-width: 480px) {
                    .geo-stats-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
                    .geo-stat-card { padding: 12px; }
                    .geo-stat-value { font-size: 16px; }
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
     * Render crypto tax insights section
     */
    function renderCryptoInsightsSection(location, pageLang) {
        if (!ENABLE_CRYPTO_TAX_INSIGHTS) return '';

        const t = TRANSLATIONS[pageLang] || TRANSLATIONS['en'];

        // Get country code, handling CA for Canada vs CA for California
        let countryCode = location.countryCode;
        let stateCode = location.region?.toLowerCase();

        // Handle Canada (country code 'ca' conflicts with California state)
        let cryptoData = null;
        let displayName = '';
        let flag = '🌍';
        let stateNote = null;

        // Helper to get localized country name from object or string
        const getLocalizedName = (nameObj, lang) => {
            if (typeof nameObj === 'string') return nameObj;
            return nameObj[lang] || nameObj['en'] || Object.values(nameObj)[0] || '';
        };

        if (countryCode === 'us') {
            cryptoData = CRYPTO_TAX_DATA['us'];
            displayName = getLocalizedName(cryptoData.name, pageLang);
            flag = '🇺🇸';
            // Add state-specific note if available
            if (stateCode && US_STATE_CRYPTO[stateCode]) {
                const stateInfo = US_STATE_CRYPTO[stateCode];
                stateNote = stateInfo.notes[pageLang] || (pageLang === 'en' ? stateInfo.notes['en'] : null);
            }
        } else if (countryCode === 'ca') {
            // Canada the country
            cryptoData = CRYPTO_TAX_DATA['ca_country'];
            displayName = getLocalizedName(cryptoData.name, pageLang);
            flag = '🇨🇦';
        } else if (countryCode === 'co') {
            // Colombia the country (not Colorado)
            cryptoData = CRYPTO_TAX_DATA['co_country'];
            displayName = getLocalizedName(cryptoData.name, pageLang);
            flag = '🇨🇴';
        } else if (CRYPTO_TAX_DATA[countryCode]) {
            cryptoData = CRYPTO_TAX_DATA[countryCode];
            displayName = getLocalizedName(cryptoData.name, pageLang);
            flag = cryptoData.flag;
        }

        if (!cryptoData) {
            log('CalcKit Geo: No crypto tax data for', countryCode);
            return '';
        }

        // Get tips in user's language, fallback to English
        const tips = getLocalizedTips(cryptoData.tips, pageLang, null, 'crypto');

        // Build hold benefit text
        let holdBenefitHTML = '';
        if (cryptoData.holdingBenefit && cryptoData.holdingPeriod) {
            holdBenefitHTML = `
                <div class="geo-stat-card geo-stat-highlight">
                    <div class="geo-stat-label">${t.holdBenefit}</div>
                    <div class="geo-stat-value">${escapeHtml(String(cryptoData.holdingPeriod))} ${t.months}</div>
                </div>`;
        }

        // Build exemption text
        let exemptionHTML = '';
        if (cryptoData.exemption) {
            exemptionHTML = `
                <div class="geo-stat-card">
                    <div class="geo-stat-label">${t.exemption}</div>
                    <div class="geo-stat-value">${escapeHtml(cryptoData.exemption)}</div>
                </div>`;
        }

        // If long term rate is 0%, show TAX-FREE highlight
        const longTermIsFree = cryptoData.longTermRate === '0%';

        const tipsHTML = tips.map(tip => `
            <div class="geo-tip-item">
                <span class="geo-tip-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </span>
                <span class="geo-tip-text">${escapeHtml(tip)}</span>
            </div>
        `).join('');

        // Add state-specific tip if available
        const stateTipHTML = stateNote ? `
            <div class="geo-tip-item">
                <span class="geo-tip-icon" style="color: #f59e0b;">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
                </span>
                <span class="geo-tip-text"><strong>📍 ${escapeHtml(getRegionDisplayName(`US-${stateCode.toUpperCase()}`, pageLang, US_STATES[stateCode]?.name || stateCode.toUpperCase()))}:</strong> ${escapeHtml(stateNote)}</span>
            </div>
        ` : '';

        const html = `
            <style>
                .geo-insights-banner {
                    background: var(--surface, #111729);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 24px;
                    padding: 32px;
                    margin: -40px auto 40px;
                    max-width: 900px;
                    box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.5);
                    position: relative;
                    overflow: hidden;
                    backdrop-filter: blur(20px);
                    -webkit-backdrop-filter: blur(20px);
                }
                .geo-insights-banner::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: radial-gradient(circle at top right, rgba(245, 158, 11, 0.15), transparent 40%);
                    pointer-events: none;
                }
                .geo-insights-banner::after {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; right: 0;
                    height: 1px;
                    background: linear-gradient(90deg, transparent, rgba(245, 158, 11, 0.5), transparent);
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
                    filter: drop-shadow(0 0 15px rgba(245, 158, 11, 0.3));
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
                    display: block;
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
                .geo-stat-card:hover { border-color: rgba(245, 158, 11, 0.4); transform: translateY(-2px); }
                .geo-stat-card.geo-stat-highlight {
                    background: rgba(16, 185, 129, 0.08);
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
                    background: rgba(245, 158, 11, 0.03);
                    border: 1px solid rgba(245, 158, 11, 0.1);
                    border-radius: 16px;
                    padding: 20px;
                }
                .geo-tips-header {
                    font-size: 12px;
                    font-weight: 700;
                    color: #fbbf24;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    margin-bottom: 14px;
                    display: flex; align-items: center; gap: 8px;
                }
                .geo-tips-list { display: grid; gap: 10px; }
                .geo-tip-item { display: flex; align-items: flex-start; gap: 10px; }
                .geo-tip-icon { color: #10b981; margin-top: 2px; }
                .geo-tip-text { color: rgba(255,255,255,0.9); font-size: 13px; line-height: 1.5; }
                .geo-disclaimer {
                    margin-top: 16px;
                    padding: 12px;
                    background: rgba(255,255,255,0.03);
                    border-radius: 8px;
                    font-size: 11px;
                    color: rgba(255,255,255,0.5);
                    text-align: center;
                }
                @media (max-width: 768px) {
                    .geo-insights-banner { padding: 20px; margin: -20px 16px 32px; border-radius: 20px; }
                    .geo-banner-header { margin-bottom: 20px; }
                    .geo-banner-flag { font-size: 26px; }
                }
                @media (max-width: 480px) {
                    .geo-stats-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
                    .geo-stat-card { padding: 12px; }
                    .geo-stat-value { font-size: 16px; }
                }
            </style>
            <div class="geo-insights-banner">
                <div class="geo-banner-header">
                    <div class="geo-banner-title">
                        <span class="geo-banner-flag">${flag}</span>
                        <div class="geo-banner-text">
                            <h2>${displayName} ${t.cryptoInsights}</h2>
                            <p>
                                <span style="display:inline-block; width:6px; height:6px; background:#f59e0b; border-radius:50%;"></span>
                                ${t.taxYear || 'Tax Year'}
                            </p>
                        </div>
                    </div>
                    <button class="geo-toggle-btn" onclick="this.parentElement.nextElementSibling.classList.toggle('collapsed'); this.textContent = this.textContent === '${t.show}' ? '${t.hide}' : '${t.show}';">${t.hide}</button>
                </div>
                <div class="geo-content">
                    <div class="geo-stats-grid">
                        <div class="geo-stat-card">
                            <div class="geo-stat-label">${t.shortTerm}</div>
                            <div class="geo-stat-value">${escapeHtml(cryptoData.shortTermRate)}</div>
                        </div>
                        <div class="geo-stat-card ${longTermIsFree ? 'geo-stat-highlight' : ''}">
                            <div class="geo-stat-label">${t.longTerm}</div>
                            <div class="geo-stat-value">${longTermIsFree ? `${t.taxFree} ✓` : escapeHtml(cryptoData.longTermRate)}</div>
                        </div>
                        ${holdBenefitHTML}
                        ${exemptionHTML}
                    </div>
                    <div class="geo-tips-section">
                        <div class="geo-tips-header">
                            ₿ ${t.cryptoFactors}
                        </div>
                        <div class="geo-tips-list">
                            ${tipsHTML}
                            ${stateTipHTML}
                        </div>
                    </div>
                    <div class="geo-disclaimer">
                        ⚠️ ${t.disclaimer}
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
        if (!APPLY_LOCATION_DEFAULTS) return;

        const { data, type } = locationInfo;
        const mortgage = data.mortgage;

        const calculatorEl = document.querySelector('calckit-calculator');
        if (calculatorEl && calculatorEl.updateConfig && data.currencyCode) {
            calculatorEl.updateConfig({
                currency: data.currencyCode,
                locale: data.locale || 'en-US',
                currencySymbol: data.currency // Explicit symbol override
            });
        }

        // Only update if relevant to calculator type
        if (calcType === 'mortgage') {
            // Wait for calculator to be initialized
            setTimeout(() => {
                const root = calculatorEl ? calculatorEl.shadowRoot : document;

                // Try to find and update price field
                const priceInput = root.querySelector('input[id*="principal"], input[id*="price"], input[data-field="price"]');
                if (priceInput && mortgage.medianPrice) {
                    const currentValue = parseInt(priceInput.value.replace(/[^0-9]/g, ''));
                    // Only update if placeholder or generic defaults
                    if (!currentValue || currentValue === 300000 || currentValue === 200000 || currentValue === 350000) {
                        priceInput.value = mortgage.medianPrice;
                        priceInput.dispatchEvent(new Event('input', { bubbles: true }));
                    }
                }

                // For country pages, also update rate
                if (type === 'country' && mortgage.typicalRate) {
                    const rateInput = root.querySelector('input[id*="rate"], input[data-field="rate"]');
                    if (rateInput) {
                        const currentRate = parseFloat(rateInput.value);
                        if (currentRate === 6.5 || currentRate === 7 || currentRate === 9.5) {
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
            log('CalcKit Geo: Page has static insights, skipping dynamic injection');
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
        const allowedTypes = ['mortgage'];
        if (!allowedTypes.includes(calcType)) {
            // Silently exit for other calculator types
            return;
        }

        log('CalcKit Geo: Starting detection...');

        const location = await detectLocation();
        if (!location) return;

        const pageLang = detectPageLanguage();
        log('CalcKit Geo: Page language detected as', pageLang);

        // Crypto insights disabled by default to avoid unverified tax guidance.
        if (calcType === 'crypto') {
            return;
        }

        const locationInfo = getLocationData(location, pageLang);
        if (!locationInfo) {
            log('CalcKit Geo: No data for location', location);
            return;
        }

        // Skip if insights are disabled
        if (!ENABLE_LOCAL_INSIGHTS) return;

        log('CalcKit Geo: Detected', locationInfo.displayName);

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
