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
        'at': { name: 'Austria', nameLocalized: 'Österreich', currency: '€', tips: ['Österreichische Banken verlangen normalerweise 20% Eigenkapital.', 'Nebenkosten circa 10%.', 'Wohnbauförderung je nach Bundesland verfügbar.'], mortgage: { medianPrice: 350000, typicalRate: 4.0, typicalTerm: 30, downPayment: 20 } },
        'ch': { name: 'Switzerland', nameLocalized: 'Schweiz', currency: 'CHF', tips: ['Die Schweiz hat sehr hohe Immobilienpreise — CHF 900.000+ ist normal.', 'Mindestens 20% Eigenkapital erforderlich.', 'Die Tragbarkeit (Kosten/Einkommen unter 33%) ist entscheidend.'], mortgage: { medianPrice: 900000, typicalRate: 2.5, typicalTerm: 25, downPayment: 20 } },
        'be': { name: 'Belgium', nameLocalized: 'Belgique', currency: '€', tips: ['Les frais de notaire et droits d\'enregistrement totalisent 12-15%.', 'Droits d\'enregistrement: 12,5% en Wallonie/Bruxelles, 6% en Flandre.'], mortgage: { medianPrice: 300000, typicalRate: 3.8, typicalTerm: 25, downPayment: 20 } },
        'se': { name: 'Sweden', nameLocalized: 'Sverige', currency: 'kr', tips: ['Sverige kräver minst 15% kontantinsats.', 'Amorteringskrav: 2% per år om belåningsgrad över 70%.', 'Ränteavdrag på 30% av räntekostnader.'], mortgage: { medianPrice: 4000000, typicalRate: 4.5, typicalTerm: 50, downPayment: 15 } },
        'no': { name: 'Norway', nameLocalized: 'Norge', currency: 'kr', tips: ['Norge krever minimum 15% egenkapital.', 'Boliglånsforskriften begrenser gjeld til 5 ganger bruttoinntekt.', 'Rentefradrag: 22% av rentekostnader.'], mortgage: { medianPrice: 5000000, typicalRate: 5.0, typicalTerm: 25, downPayment: 15 } },
        'dk': { name: 'Denmark', nameLocalized: 'Danmark', currency: 'kr', tips: ['Danmark har et unikt realkreditsystem med meget lave renter.', 'Udbetaling på minimum 5% kræves.', 'Afdragsfrihed op til 10 år er muligt.'], mortgage: { medianPrice: 3500000, typicalRate: 4.0, typicalTerm: 30, downPayment: 5 } },
        'fi': { name: 'Finland', nameLocalized: 'Suomi', currency: '€', tips: ['Suomessa vaaditaan yleensä 15% omarahoitusosuus.', 'ASP-tili tarjoaa korkoetua ensiasunnon ostajille.', 'Ensiasunnon ostajat vapautetaan varainsiirtoverosta.'], mortgage: { medianPrice: 300000, typicalRate: 4.5, typicalTerm: 25, downPayment: 15 } },
        'co': { name: 'Colombia', nameLocalized: 'Colombia', currency: '$', tips: ['Los créditos VIS tienen tasas preferenciales.', 'El subsidio "Mi Casa Ya" cubre parte de la cuota inicial.', 'Los gastos notariales suman aproximadamente 2% del valor.'], mortgage: { medianPrice: 300000000, typicalRate: 12, typicalTerm: 15, downPayment: 20 } },
        'cl': { name: 'Chile', nameLocalized: 'Chile', currency: 'UF', tips: ['Los créditos hipotecarios en Chile se expresan en UF.', 'Las tasas son bajas (4-5%) comparado con otros países latinoamericanos.', 'El subsidio DS1 ayuda a familias de clase media.'], mortgage: { medianPrice: 4500, typicalRate: 4.5, typicalTerm: 25, downPayment: 20 } },
        'ca': { name: 'Canada', nameLocalized: 'Canada', currency: '$', tips: ['Mise de fonds minimale de 5% pour les propriétés sous 500 000$.', 'Assurance SCHL obligatoire si mise de fonds inférieure à 20%.', 'Le test de résistance exige de qualifier au taux + 2%.'], mortgage: { medianPrice: 500000, typicalRate: 5.5, typicalTerm: 25, downPayment: 5 } }
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
     * Get location data based on detected location
     */
    function getLocationData(location) {
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
            return {
                type: 'country',
                data: COUNTRIES[location.countryCode],
                displayName: COUNTRIES[location.countryCode].nameLocalized
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

    /**
     * Render the local insights section
     */
    function renderInsightsSection(locationInfo) {
        const { type, data, displayName } = locationInfo;
        const mortgage = data.mortgage;

        let statsHTML = '';

        if (type === 'state') {
            statsHTML = `
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 16px; margin-bottom: 24px;">
                    <div style="background: rgba(255, 255, 255, 0.05); padding: 16px; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.1);">
                        <div style="color: rgba(255,255,255,0.6); font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px;">Median Price</div>
                        <div style="font-size: 20px; font-weight: 700; color: #a78bfa;">$${formatNumber(mortgage.medianPrice)}</div>
                    </div>
                    <div style="background: rgba(255, 255, 255, 0.05); padding: 16px; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.1);">
                        <div style="color: rgba(255,255,255,0.6); font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px;">Property Tax</div>
                        <div style="font-size: 20px; font-weight: 700; color: #a78bfa;">${mortgage.propertyTaxRate}%</div>
                    </div>
                    <div style="background: rgba(255, 255, 255, 0.05); padding: 16px; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.1);">
                        <div style="color: rgba(255,255,255,0.6); font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px;">Home Insurance</div>
                        <div style="font-size: 20px; font-weight: 700; color: #a78bfa;">$${formatNumber(mortgage.homeInsurance)}/yr</div>
                    </div>
                    <div style="background: rgba(255, 255, 255, 0.05); padding: 16px; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.1);">
                        <div style="color: rgba(255,255,255,0.6); font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px;">Income Tax</div>
                        <div style="font-size: 20px; font-weight: 700; color: ${mortgage.hasStateIncomeTax ? 'rgba(255,255,255,0.6)' : '#10b981'};">
                            ${mortgage.hasStateIncomeTax ? 'Yes' : 'None ✓'}
                        </div>
                    </div>
                </div>`;
        } else {
            statsHTML = `
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 16px; margin-bottom: 24px;">
                    <div style="background: rgba(255, 255, 255, 0.05); padding: 16px; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.1);">
                        <div style="color: rgba(255,255,255,0.6); font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px;">Median Price</div>
                        <div style="font-size: 18px; font-weight: 700; color: #a78bfa;">${data.currency}${formatNumber(mortgage.medianPrice)}</div>
                    </div>
                    <div style="background: rgba(255, 255, 255, 0.05); padding: 16px; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.1);">
                        <div style="color: rgba(255,255,255,0.6); font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px;">Typical Rate</div>
                        <div style="font-size: 18px; font-weight: 700; color: #a78bfa;">${mortgage.typicalRate}%</div>
                    </div>
                    <div style="background: rgba(255, 255, 255, 0.05); padding: 16px; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.1);">
                        <div style="color: rgba(255,255,255,0.6); font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px;">Loan Term</div>
                        <div style="font-size: 18px; font-weight: 700; color: #a78bfa;">${mortgage.typicalTerm} years</div>
                    </div>
                    <div style="background: rgba(255, 255, 255, 0.05); padding: 16px; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.1);">
                        <div style="color: rgba(255,255,255,0.6); font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px;">Down Payment</div>
                        <div style="font-size: 18px; font-weight: 700; color: #a78bfa;">${mortgage.downPayment}%</div>
                    </div>
                </div>`;
        }

        const tipsHTML = data.tips.map(tip => `
            <li style="display: flex; align-items: flex-start; gap: 10px; padding: 10px 14px; background: rgba(255, 255, 255, 0.03); border-radius: 8px; border-left: 3px solid #6366f1;">
                <span style="color: #10b981; flex-shrink: 0;">✓</span>
                <span style="color: rgba(255,255,255,0.7); font-size: 13px; line-height: 1.5;">${tip}</span>
            </li>
        `).join('');

        const html = `
            <section class="geo-insights-section" style="padding: 32px 0;">
                <div class="container" style="max-width: 900px; margin: 0 auto; padding: 0 20px;">
                    <div style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%); border-radius: 16px; padding: 24px 28px; border: 1px solid rgba(99, 102, 241, 0.2);">
                        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px;">
                            <span style="font-size: 24px;">${type === 'state' ? '🇺🇸' : '🌍'}</span>
                            <h2 style="font-size: 20px; font-weight: 700; margin: 0; background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                                ${displayName} Market Insights
                            </h2>
                            <span style="font-size: 11px; background: rgba(99, 102, 241, 0.2); color: #a78bfa; padding: 3px 8px; border-radius: 12px; margin-left: auto;">
                                📍 Based on your location
                            </span>
                        </div>
                        ${statsHTML}
                        <div>
                            <h3 style="font-size: 14px; font-weight: 600; margin-bottom: 12px; color: rgba(255,255,255,0.9);">
                                💡 Local Tips
                            </h3>
                            <ul style="list-style: none; padding: 0; margin: 0; display: grid; gap: 10px;">
                                ${tipsHTML}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        `;

        return html;
    }

    /**
     * Update calculator defaults based on location
     */
    function updateCalculatorDefaults(locationInfo) {
        const { data, type } = locationInfo;
        const mortgage = data.mortgage;

        // Wait for calculator to be initialized
        setTimeout(() => {
            // Try to find and update price field
            const priceInput = document.querySelector('input[name="price"], input[id*="price"], input[data-field="price"]');
            if (priceInput && mortgage.medianPrice) {
                // Only update if it's showing a generic default (e.g., 300000)
                const currentValue = parseInt(priceInput.value.replace(/[^0-9]/g, ''));
                if (currentValue === 300000 || currentValue === 0) {
                    priceInput.value = mortgage.medianPrice;
                    priceInput.dispatchEvent(new Event('input', { bubbles: true }));
                }
            }

            // For country pages, also update rate
            if (type === 'country' && mortgage.typicalRate) {
                const rateInput = document.querySelector('input[name="rate"], input[id*="rate"], input[data-field="rate"]');
                if (rateInput) {
                    const currentRate = parseFloat(rateInput.value);
                    if (currentRate === 6.5 || currentRate === 7) { // Generic defaults
                        rateInput.value = mortgage.typicalRate;
                        rateInput.dispatchEvent(new Event('input', { bubbles: true }));
                    }
                }
            }
        }, 1000);
    }

    /**
     * Check if page already has static local insights
     */
    function hasStaticInsights() {
        return document.querySelector('.local-insights-section, .local-insights-card') !== null;
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
        if (!document.querySelector('#calculator-container, .calculator-wrapper')) {
            return;
        }

        const location = await detectLocation();
        if (!location) return;

        const locationInfo = getLocationData(location);
        if (!locationInfo) {
            console.log('CalcKit Geo: No data for location', location);
            return;
        }

        console.log('CalcKit Geo: Detected', locationInfo.displayName);

        // Inject insights section after calculator
        const calculatorSection = document.querySelector('.calculator-section');
        if (calculatorSection) {
            const insightsHTML = renderInsightsSection(locationInfo);
            calculatorSection.insertAdjacentHTML('afterend', insightsHTML);
        }

        // Update calculator defaults
        updateCalculatorDefaults(locationInfo);
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
