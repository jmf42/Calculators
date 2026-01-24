// All calculator configurations with multi-language support
module.exports = {
    mortgage: {
        baseType: "mortgage",
        titles: {
            en: "Mortgage Calculator 2026 • Free & Accurate (Live Rates)",
            fi: "Asuntolaina Laskuri 2026 • Ilmainen & Tarkka",
            de: "Baufinanzierungsrechner 2026 • Kostenlos & Präzise",
            es: "Calculadora de Hipoteca 2026 • Gratis y Precisa (Tasas Reales)",
            fr: "Calculatrice Prêt Immobilier 2026 • Gratuit & Précis",
            pt: "Calculadora de Hipoteca 2026 • Grátis e Precisa",
            it: "Calcolo Rata Mutuo 2026 • Gratuito e Preciso",
            nl: "Hypotheek Calculator 2026 • Gratis & Nauwkeurig",
            pl: "Kalkulator Kredytu Hipotecznego 2026 • Darmowy i Dokładny",
            sv: "Bolånekalkylator 2026 • Gratis & Exakt",
            no: "Boliglånskalkulator 2026 • Gratis & Nøyaktig",
            da: "Realkreditlåneberegner 2026 • Gratis & Præcis"
        },
        subtitles: {
            en: "Calculate your monthly mortgage payment and amortization",
            fi: "Laske asuntolainan kuukausierä ja lyhennyssuunnitelma",
            de: "Berechnen Sie Ihre monatliche Hypothekenrate und Tilgung",
            es: "Calcula tu cuota mensual hipotecaria y amortización",
            fr: "Calculez votre mensualité hypothécaire et l'amortissement",
            pt: "Calcule sua parcela mensal e amortização",
            it: "Calcola la tua rata mensile e l'ammortamento",
            nl: "Bereken uw maandelijkse hypotheeklasten en aflossing",
            pl: "Oblicz miesięczną ratę kredytu hipotecznego",
            sv: "Beräkna din månadskostnad och amortering",
            no: "Beregn månedlige boliglånskostnader",
            da: "Beregn din månedlige ydelse og afdrag"
        },
        slugs: {
            en: "mortgage-calculator",
            fi: "asuntolaina-laskuri",
            de: "baufinanzierungsrechner",
            es: "calculadora-hipoteca",
            fr: "calculatrice-pret-immobilier",
            pt: "calculadora-hipoteca",
            it: "calcolo-rata-mutuo",
            nl: "hypotheek-berekenen",
            pl: "kalkulator-kredytu-hipotecznego",
            sv: "bolanekalkylator",
            no: "boliglanskalkulator",
            da: "realkreditlaneberegner"
        },
        metaDescriptions: {
            en: "Calculate updated 2026 mortgage rates. Estimate monthly payments with taxes, insurance, and HOA fees included.",
            de: "Berechnen Sie aktuelle Hypothekenzinsen 2026. Schätzen Sie monatliche Raten inklusive Steuern und Nebenkosten.",
            es: "Calcula cuotas hipotecarias 2026 con impuestos y seguros incluidos.",
            fr: "Calculez les mensualités de prêt immobilier 2026 avec taxes et assurances.",
            pt: "Calculadora de hipoteca 2026 com taxas e seguros inclusos.",
            it: "Calcola le rate del mutuo 2026 con tasse e assicurazioni incluse.",
            nl: "Bereken hypotheeklasten 2026 inclusief belastingen en verzekeringen.",
            pl: "Oblicz raty hipoteczne 2026 z uwzględnieniem podatków i ubezpieczenia.",
            sv: "Beräkna bolånekostnad 2026 inklusive skatter och försäkring.",
            no: "Anslå boliglånskostnader 2026 inkludert skatt og forsikring.",
            da: "Beregn realkreditbetalinger 2026 inklusiv skatter og forsikring.",
            fi: "Laske asuntolainan kuukausierät 2026 veroineen ja vakuutuksineen."
        },
        content: `
            <div class="prose">
                <h3>Why use this 2026 Mortgage Calculator?</h3>
                <p>Unlike simple calculators, this tool provides a <strong>complete financial picture</strong>. It doesn't just calculate principal and interest; it factors in critical costs that determine your <em>actual</em> monthly payment:</p>
                <ul>
                    <li><strong>Property Taxes:</strong> Based on your local tax rate.</li>
                    <li><strong>Homeowners Insurance:</strong> Essential for protecting your asset.</li>
                    <li><strong>HOA Fees:</strong> Common in condos and planned communities.</li>
                </ul>
                <p>Use the <strong>interactive charts</strong> to visualize how your equity grows over time versus the interest paid to the bank. Perfect for comparing 15-year vs. 30-year loan terms.</p>
            </div>
        `,
        seo: {
            en: {
                synonyms: ["home loan calculator", "house payment calculator", "mortgage payment estimator", "home affordability calculator"],
                useCases: ["First-time homebuyers estimating monthly costs", "Refinancing to get a lower interest rate", "Comparing 15-year vs 30-year mortgages"],
                relatedTerms: ["PITI", "Amortization", "Escrow", "LTV", "DTI"],
                relatedCalculators: ["loan", "roi", "solar"]
            },
            fi: {
                synonyms: ["asuntolainan kuukausierälaskuri", "lainalaskuri lyhennystaulukko"],
                useCases: ["Ensiasunnon ostajan budjetointi", "Lainan uudelleenrahoitus"],
                relatedTerms: ["Todellinen vuosikorko", "Annuiteettilaina"]
            },
            de: {
                synonyms: ["Baufinanzierungsrechner", "Hauskredit Rechner"],
                useCases: ["Monatliche Rate berechnen", "Zinsbindungsdauer vergleichen"],
                relatedTerms: ["Tilgungssatz", "Sollzins vs Effektivzins"]
            }
        },
        faqs: {
            en: [
                { q: "How much house can I afford?", a: "A general rule is that your monthly mortgage payment should not exceed 28% of your gross monthly income. Our calculator helps you test different scenarios." },
                { q: "What is included in a mortgage payment?", a: "Your monthly payment typically includes P&I (Principal and Interest), property taxes, homeowners insurance, and sometimes HOA fees and PMI." },
                { q: "How does the down payment affect my loan?", a: "A larger down payment reduces your loan amount, which lowers your monthly payment and total interest cost. Put down 20% to avoid PMI." }
            ],
            es: [
                { q: "¿Qué casa me puedo permitir?", a: "Una regla general es que tu cuota no supere el 28% de tus ingresos brutos. Usa nuestra calculadora para ver escenarios." },
                { q: "¿Qué incluye la cuota hipotecaria?", a: "Incluye capital e intereses, impuestos sobre la propiedad y seguros. A veces también gastos de comunidad." },
                { q: "¿Cómo afecta la entrada al préstamo?", a: "Una entrada mayor reduce el préstamo y los intereses totales. Intenta aportar el 20% para mejores condiciones." }
            ]
        },
        config: {
            currency: { en: "USD", es: "EUR", de: "EUR", fr: "EUR", pt: "BRL", it: "EUR", nl: "EUR", pl: "PLN", sv: "SEK", no: "NOK", da: "DKK", fi: "EUR" },
            locale: { en: "en-US", es: "es-ES", de: "de-DE", fr: "fr-FR", pt: "pt-BR", it: "it-IT", nl: "nl-NL", pl: "pl-PL", sv: "sv-SE", no: "no-NO", da: "da-DK", fi: "fi-FI" },
            fields: [
                { id: "principal", type: "number", label: { en: "Home Price", fi: "Asunnon hinta", de: "Kaufpreis", es: "Precio de la Casa", fr: "Prix de la Maison", pt: "Preço do Imóvel", it: "Prezzo Immobile", nl: "Huisprijs", pl: "Cena Domu", sv: "Bostadspris", no: "Boligpris", da: "Boligpris" }, default: 350000, min: 1000, max: 10000000, step: 1000, format: "currency" },
                { id: "down", type: "number", label: { en: "Down Payment", fi: "Käsiraha", de: "Anzahlung", es: "Pago Inicial", fr: "Apport Personnel", pt: "Entrada", it: "Anticipo", nl: "Aanbetaling", pl: "Wkład Własny", sv: "Kontantinsats", no: "Egenkapital", da: "Udbetaling" }, default: 70000, min: 0, max: 10000000, step: 1000, format: "currency" },
                { id: "rate", type: "number", label: { en: "Interest Rate (%)", fi: "Korko (%)", de: "Zinssatz (%)", es: "Tasa de Interés (%)", fr: "Taux d'Intérêt (%)", pt: "Taxa de Juros (%)", it: "Tasso di Interesse (%)", nl: "Rentepercentage (%)", pl: "Oprocentowanie (%)", sv: "Räntesats (%)", no: "Rentesats (%)", da: "Rentesats (%)" }, default: 6.5, min: 0, max: 20, step: 0.1, format: "percent" },
                { id: "years", type: "number", label: { en: "Loan Term (Years)", fi: "Laina-aika (vuotta)", de: "Laufzeit (Jahre)", es: "Plazo (Años)", fr: "Durée (Années)", pt: "Prazo (Anos)", it: "Durata (Anni)", nl: "Looptijd (Jaren)", pl: "Okres (Lata)", sv: "Löptid (År)", no: "Løpetid (År)", da: "Løbetid (År)" }, default: 30, min: 5, max: 40, step: 1 },
                { id: "tax", type: "number", label: { en: "Property Tax / Year", fi: "Kiinteistövero / vuosi", de: "Grundsteuer / Jahr", es: "Impuestos / Año", fr: "Taxe Foncière / An", pt: "IPTU / Ano", it: "Tassa di Proprietà / Anno", nl: "Onroerendgoedbelasting / Jaar", pl: "Podatek od Nieruchomości / Rok", sv: "Fastighetsskatt / År", no: "Eiendomsskatt / År", da: "Ejendomsskat / År" }, default: 4200, min: 0, step: 100, format: "currency" },
                { id: "insurance", type: "number", label: { en: "Home Insurance / Year", fi: "Kotivakuutus / vuosi", de: "Wohngebäudevers. / Jahr", es: "Seguro / Año", fr: "Assurance Habitation / An", pt: "Seguro Residencial / Ano", it: "Assicurazione Casa / Anno", nl: "Opstalverzekering / Jaar", pl: "Ubezpieczenie Domu / Rok", sv: "Hemförsäkring / År", no: "Husforsikring / År", da: "Husforsikring / År" }, default: 1200, min: 0, step: 50, format: "currency" },
                { id: "hoa", type: "number", label: { en: "HOA Fees / Month", fi: "Yhtiövastike / kk", de: "Hausgeld / Monat", es: "Gastos Comunes / Mes", fr: "Charges de Copro / Mois", pt: "Condomínio / Mês", it: "Spese Condominiali / Mese", nl: "VvE Kosten / Maand", pl: "Czynsz / Miesiąc", sv: "Månadsavgift", no: "Felleskostnader / Mnd", da: "Ejerforeningsgebyr / Måned" }, default: 0, min: 0, step: 10, format: "currency" }
            ],
            formula: "(rate > 0 ? ((principal - down) * (rate/100/12) * Math.pow(1 + rate/100/12, years*12) / (Math.pow(1 + rate/100/12, years*12) - 1)) : ((principal - down) / (years * 12))) + (tax / 12) + (insurance / 12) + hoa",
            resultFormat: "currency",
            resultLabel: { en: "Monthly Payment", fi: "Kuukausierä", de: "Monatliche Rate", es: "Pago Mensual", fr: "Mensualité", pt: "Parcela Mensal", it: "Rata Mensile", nl: "Maandelijkse Lasten", pl: "Miesięczna Rata", sv: "Månadskostnad", no: "Månedlig Betaling", da: "Månedlig Ydelse" },
            breakdown: [
                { label: { en: "Principal & Interest", fi: "Lyhennys ja korko", de: "Kapital & Zinsen", es: "Capital e Interés", fr: "Capital et Intérêts", pt: "Capital e Juros", it: "Capitale e Interessi", nl: "Aflossing en Rente", pl: "Kapitał i Odsetki", sv: "Amortering och Ränta", no: "Avdrag og Renter", da: "Afdrag og Rente" }, formula: "rate > 0 ? (principal - down) * (rate/100/12) * Math.pow(1 + rate/100/12, years*12) / (Math.pow(1 + rate/100/12, years*12) - 1) : (principal - down) / (years * 12)", format: "currency" },
                { label: { en: "Property Tax", fi: "Kiinteistövero", de: "Grundsteuer", es: "Impuestos", fr: "Taxe Foncière", pt: "IPTU", it: "Tassa di Proprietà", nl: "OZB", pl: "Podatek", sv: "Fastighetsskatt", no: "Eiendomsskatt", da: "Ejendomsskat" }, formula: "tax / 12", format: "currency" },
                { label: { en: "Insurance", fi: "Vakuutus", de: "Versicherung", es: "Seguro", fr: "Assurance", pt: "Seguro", it: "Assicurazione", nl: "Verzekering", pl: "Ubezpieczenie", sv: "Försäkring", no: "Forsikring", da: "Forsikring" }, formula: "insurance / 12", format: "currency" },
                { label: { en: "HOA", fi: "Yhtiövastike", de: "Hausgeld", es: "Gastos Comunes", fr: "Charges", pt: "Condomínio", it: "Spese Condominiali", nl: "VvE", pl: "Czynsz", sv: "Månadsavgift", no: "Fellesutgifter", da: "Ejerforening" }, formula: "hoa", format: "currency" }
            ],
            metrics: [
                { label: { en: "Total Loan Amount", de: "Nettodarlehensbetrag", es: "Monto neto del préstamo" }, formula: "principal - down", format: "currency" },
                { label: { en: "Total Interest Paid", de: "Gesamte Zinskosten", es: "Total de intereses pagados" }, formula: "rate > 0 ? ((((principal - down) * (rate/100/12) * Math.pow(1 + rate/100/12, years*12) / (Math.pow(1 + rate/100/12, years*12) - 1)) * years * 12) - (principal - down)) : 0", format: "currency" }
            ]
        }
    },
    wedding: {
        baseType: "wedding",
        titles: {
            en: "Wedding Cost Calculator 2026 • Budget Planner",
            fi: "Hääbudjettilaskuri 2026 • Suunnittele Menot",
            de: "Hochzeitskosten Rechner 2026 • Budgetplaner",
            es: "Calculadora de Bodas 2026 • Planificador de Presupuesto",
            fr: "Calculateur Mariage 2026 • Budget & Coûts",
            pt: "Calculadora de Casamento 2026 • Planejador de Custos",
            it: "Calcolo Budget Matrimonio 2026 • Costi e Spese",
            nl: "Bruiloft Kosten Calculator 2026 • Budgetplanner",
            pl: "Kalkulator Kosztów Wesela 2026 • Planer Budżetu",
            sv: "Bröllopskostnad Kalkylator 2026 • Budgetplanering",
            no: "Bryllupsbudsjett Kalkulator 2026 • Kostnadsplanlegger",
            da: "Bryllupsbudget Beregner 2026 • Planlæg Omkostninger"
        },
        subtitles: {
            en: "Manage your wedding budget effortlessly",
            fi: "Hallitse hääbudjettiasi vaivattomasti",
            de: "Verwalten Sie Ihr Hochzeitsbudget mühelos",
            es: "Gestiona tu presupuesto de boda sin esfuerzo",
            fr: "Gérez votre budget de mariage sans effort",
            pt: "Gerencie seu orçamento de casamento sem esforço",
            it: "Gestisci il budget del tuo matrimonio senza fatica",
            nl: "Beheer je trouwbudget moeiteloos",
            pl: "Zarządzaj budżetem weselnym bez wysiłku",
            sv: "Hantera din bröllopsbudget enkelt",
            no: "Administrer bryllupsbudsjettet ditt enkelt",
            da: "Administrer dit bryllupsbudget uden besvær"
        },
        slugs: {
            en: "wedding-cost-calculator",
            fi: "haabudjettilaskuri",
            de: "hochzeitskostenrechner",
            es: "calculadora-bodas",
            fr: "calculateur-mariage",
            pt: "calculadora-casamento",
            it: "calcolo-budget-matrimonio",
            nl: "bruiloft-kosten-calculator",
            pl: "kalkulator-kosztow-wesela",
            sv: "brollopskostnad-kalkylator",
            no: "bryllupsbudsjett-kalkulator",
            da: "bryllupsbudget-beregner"
        },
        metaDescriptions: {
            en: "Estimate total wedding costs with our free 2026 planner. Budget for venue, catering, and attire.",
            de: "Schätzen Sie die Gesamtkosten Ihrer Hochzeit mit unserem kostenlosen Planer 2026.",
            es: "Estima los costos totales de tu boda con nuestro planificador gratuito 2026.",
            fr: "Estimez les coûts totaux de votre mariage avec notre planificateur gratuit 2026.",
            pt: "Estime os custos totais do seu casamento com nosso planejador gratuito de 2026.",
            it: "Stima i costi totali del tuo matrimonio con il nostro pianificatore gratuito per il 2026.",
            nl: "Schat de totale trouwkosten in met onze gratis planner voor 2026.",
            pl: "Oszacuj całkowite koszty wesela za pomocą naszego bezpłatnego planera na rok 2026.",
            sv: "Uppskatta de totala bröllopskostnaderna med vår kostnadsfria planerare för 2026.",
            no: "Anslå de totale bryllupskostnadene med vår gratis planlegger for 2026.",
            da: "Anslå de samlede bryllupsomkostninger med vores gratis planlægger for 2026.",
            fi: "Arvioi häiden kokonaiskustannukset ilmaisella vuoden 2026 suunnittelijallamme."
        },
        content: `
            <div class="prose">
                <h3>Plan Your Dream Wedding in 2026</h3>
                <p>The average wedding in 2026 costs between <strong>$30,000 and $50,000</strong>, but your budget depends entirely on your priorities. This calculator helps you see the <em>complete picture</em> before you commit to vendors.</p>
                <ul>
                    <li><strong>Venue & Reception:</strong> Usually 40-50% of total budget</li>
                    <li><strong>Catering:</strong> Expect $75-200 per guest for food and drinks</li>
                    <li><strong>Photography:</strong> Don't skimp here—these are your lasting memories</li>
                </ul>
                <p>Use the <strong>cost per guest</strong> metric to compare venues fairly and stay within budget.</p>
            </div>
        `,
        seo: {
            en: {
                synonyms: ["wedding budget calculator", "marriage cost estimator", "wedding planner tool", "bridal budget calculator"],
                useCases: ["Couples planning their first wedding", "Parents budgeting for a child's wedding", "Wedding planners giving clients estimates"],
                relatedTerms: ["wedding venue cost", "catering per head", "wedding photographer rates", "reception budget"],
                relatedCalculators: ["loan", "roi"]
            },
            de: {
                synonyms: ["Hochzeitsbudget Rechner", "Heiratskosten Kalkulator"],
                useCases: ["Brautpaare planen ihre Hochzeit", "Eltern budgetieren für die Hochzeit"],
                relatedTerms: ["Hochzeitslocation Kosten", "Catering Kosten pro Person"]
            }
        },
        config: {
            currency: { en: "USD", es: "EUR", de: "EUR" },
            locale: { en: "en-US", es: "es-ES", de: "de-DE" },
            fields: [
                { id: "venue", type: "number", label: { en: "Venue & Reception", fi: "Juhlapaikka ja vastaanotto", de: "Location & Empfang", es: "Lugar y Recepción", fr: "Lieu et Réception", pt: "Local e Recepção", it: "Location e Ricevimento", nl: "Locatie en Receptie", pl: "Miejsce i Przyjęcie", sv: "Lokal och Reception", no: "Lokale og Resepsjon", da: "Lokale og Reception" }, default: 15000, step: 100, format: "currency" },
                { id: "catering", type: "number", label: { en: "Catering & Drinks", fi: "Tarjoilu ja juomat", de: "Essen & Getränke", es: "Catering y Bebidas", fr: "Traiteur et Boissons", pt: "Buffet e Bebidas", it: "Catering e Bevande", nl: "Catering en Drankjes", pl: "Catering i Napoje", sv: "Catering och Dryck", no: "Servering og Drikke", da: "Catering og Drikkevarer" }, default: 10000, step: 100, format: "currency" },
                { id: "attire", type: "number", label: { en: "Attire & Rings", fi: "Pukeutuminen ja sormukset", de: "Kleidung & Ringe", es: "Atuendo y Anillos", fr: "Tenue et Alliances", pt: "Trajes e Alianças", it: "Abbigliamento e Anelli", nl: "Kleding en Ringen", pl: "Strój i Pierścionki", sv: "Kläder och Ringar", no: "Antrekk og Ringer", da: "Beklædning og Ringe" }, default: 5000, step: 100, format: "currency" },
                { id: "photography", type: "number", label: { en: "Photography/Video", fi: "Valokuvaus ja video", de: "Foto & Video", es: "Fotografía y Video", fr: "Photographie et Vidéo", pt: "Fotografia e Vídeo", it: "Fotografia e Video", nl: "Fotografie en Video", pl: "Fotografia i Wideo", sv: "Fotografering och Video", no: "Fotografering ja Video", da: "Fotografering og Video" }, default: 4000, step: 100, format: "currency" },
                { id: "decor", type: "number", label: { en: "Flowers & Decor", fi: "Kukat ja koristelu", de: "Blumen & Deko", es: "Flores y Decoración", fr: "Fleurs et Décoration", pt: "Flores e Decoração", it: "Fiori e Decorazioni", nl: "Bloemen en Decoratie", pl: "Kwiaty i Dekoracje", sv: "Blommor och Dekor", no: "Blomster og Dekor", da: "Blomster og Dekoration" }, default: 3000, step: 100, format: "currency" },
                { id: "other", type: "number", label: { en: "Music, Cake & Extras", fi: "Musiikki, kakku ja muut", de: "Musik, Torte & Sonstiges", es: "Música, Tarta y Extras", fr: "Musique, Gâteau et Extras", pt: "Música, Bolo e Extras", it: "Musica, Torta ed Extra", nl: "Muziek, Taart en Extra's", pl: "Muzyka, Tort i Dodatki", sv: "Musik, Tårta och Extra", no: "Musikk, Kake og Ekstra", da: "Musik, Kage og Ekstra" }, default: 3000, step: 100, format: "currency" }
            ],
            formula: "venue + catering + attire + photography + decor + other",
            resultFormat: "currency",
            resultLabel: { en: "Total Wedding Cost", fi: "Häiden kokonaiskustannukset", de: "Gesamtkosten", es: "Costo Total de la Boda", fr: "Coût Total du Mariage", pt: "Custo Total do Casamento", it: "Costo Totale del Matrimonio", nl: "Totale Trouwkosten", pl: "Całkowity Koszt Wesela", sv: "Total Bröllopskostnad", no: "Total Bryllupskostnad", da: "Samlede Bryllupsomkostninger" },
            breakdown: [
                { label: { en: "Venue", fi: "Juhlapaikka", de: "Location", es: "Lugar", fr: "Lieu", pt: "Local", it: "Location", nl: "Locatie", pl: "Miejsce", sv: "Lokal", no: "Lokale", da: "Lokale" }, formula: "venue", format: "currency" },
                { label: { en: "Catering", fi: "Tarjoilu", de: "Essen", es: "Catering", fr: "Traiteur", pt: "Buffet", it: "Catering", nl: "Catering", pl: "Catering", sv: "Catering", no: "Servering", da: "Catering" }, formula: "catering", format: "currency" },
                { label: { en: "Essentials", fi: "Välttämättömyydet", de: "Ausrüstung", es: "Esenciales", fr: "Essentiels", pt: "Essenciais", it: "Essenziali", nl: "Essentiële Zaken", pl: "Niezbędne", sv: "Viktigt", no: "Viktige Ting", da: "Det Vigtigste" }, formula: "attire + photography", format: "currency" },
                { label: { en: "Atmosphere", fi: "Tunnelma", de: "Atmosphäre", es: "Atmósfera", fr: "Atmosphère", pt: "Atmosfera", it: "Atmosfera", nl: "Sfeer", pl: "Atmosfera", sv: "Atmosfär", no: "Atmosfære", da: "Stemning" }, formula: "decor + other", format: "currency" }
            ],
            metrics: [
                { label: { en: "Cost per Guest (Est. 100)", de: "Kosten pro Gast (ca. 100)", es: "Costo por invitado (est. 100)" }, formula: "(venue + catering + attire + photography + decor + other) / 100", format: "currency" }
            ]
        }
    },
    solar: {
        baseType: "solar",
        titles: {
            en: "Solar Panel Calculator 2026 • Potential Savings & Payback",
            fi: "Aurinkopaneelilaskuri 2026 • Säästöt & Takaisinmaksu",
            de: "Solarrechner 2026 • Ertrag & Amortisation Berechnen",
            es: "Calculadora Solar 2026 • Ahorro y Retorno",
            fr: "Calculateur Solaire 2026 • Économies & Rentabilité",
            pt: "Calculadora de Painel Solar 2026 • Economia e Retorno",
            it: "Calcolatore Pannelli Solari 2026 • Risparmio e Rientro",
            nl: "Zonnepanelen Calculator 2026 • Besparing & Terugverdientijd",
            pl: "Kalkulator Fotowoltaiki 2026 • Oszczędności i Zwrot",
            sv: "Solcellskalkylator 2026 • Sparande & Återbetalning",
            no: "Solcellekalkulator 2026 • Sparing & Nedbetaling",
            da: "Solcelle Beregner 2026 • Besparelse & Tilbagebetaling"
        },
        subtitles: {
            en: "Estimate energy savings and payback for your home solar system",
            fi: "Arvioi aurinkopaneelien säästöt ja takaisinmaksuaika",
            de: "Schätzen Sie Energieersparnis und Amortisation für Solaranlagen",
            es: "Calcula el ahorro de energía y el retorno de inversión solar",
            fr: "Estimez les économies d'énergie et la rentabilité",
            pt: "Estimativa de economia de energia e retorno",
            it: "Stima il risparmio energetico e il rientro dell'investimento",
            nl: "Schat energiebesparing en terugverdientijd in",
            pl: "Szacuj oszczędności energii i czas zwrotu",
            sv: "Uppskatta energibesparing och återbetalningstid",
            no: "Anslå energisparing og nedbetalingstid",
            da: "Anslå energibesparelse og tilbagebetalingstid"
        },
        slugs: {
            en: "solar-panel-calculator",
            fi: "aurinkopaneelilaskuri",
            de: "solarrechner",
            es: "calculadora-solar",
            fr: "calculateur-solaire",
            pt: "calculadora-painel-solar",
            it: "calcolatore-pannelli-solari",
            nl: "zonnepanelen-calculator",
            pl: "kalkulator-fotowoltaiki",
            sv: "solcellskalkylator",
            no: "solcellekalkulator",
            da: "solcelle-beregner"
        },
        metaDescriptions: {
            en: "Calculate solar panel savings and payback period instantly. See how much you can save on electricity bills in 2026.",
            de: "Berechnen Sie Solarertrag und Amortisation sofort. Sehen Sie, wie viel Stromkosten Sie 2026 sparen können.",
            es: "Calcula el ahorro solar y el retorno de inversión al instante.",
            fr: "Calculez les économies solaires et la rentabilité instantanément.",
            pt: "Calcule o retorno e a economia de energia solar instantaneamente.",
            it: "Calcola il risparmio solare e il rientro dell'investimento istantaneamente.",
            nl: "Schat zonne-opbrengst en terugverdientijd direct in.",
            pl: "Oszacuj oszczędności z fotowoltaiki i czas zwrotu natychmiast.",
            sv: "Beräkna solcellsbesparing och återbetalningstid direkt.",
            no: "Anslå solcellesparying og nedbetalingstid umiddelbart.",
            da: "Beregn solcellebesparelse og tilbagebetalingstid med det samme.",
            fi: "Laske aurinkopaneelien säästöt ja takaisinmaksuaika välittömästi."
        },
        content: `
            <div class="prose">
                <h3>Is Solar Worth It in 2026?</h3>
                <p>With electricity prices rising and solar costs dropping, going solar has never been more attractive. This calculator helps you estimate your <strong>payback period</strong> and annual ROI based on your current electricity usage.</p>
                <ul>
                    <li><strong>Peak Sun Hours:</strong> Varies by region (4-6 hours average in most US states)</li>
                    <li><strong>Federal Tax Credit:</strong> The 30% ITC is still available through 2032</li>
                    <li><strong>Payback Period:</strong> Most systems pay for themselves in 6-10 years</li>
                </ul>
                <p>Remember to factor in <strong>local incentives</strong> and net metering policies for the most accurate estimate.</p>
            </div>
        `,
        seo: {
            en: {
                synonyms: ["solar savings calculator", "solar panel ROI calculator", "solar payback calculator", "photovoltaic cost estimator"],
                useCases: ["Homeowners considering solar installation", "Comparing solar quotes from installers", "Estimating long-term energy savings"],
                relatedTerms: ["solar panel cost", "solar ROI", "payback period", "net metering", "ITC tax credit"],
                relatedCalculators: ["mortgage", "roi", "crypto"]
            },
            de: {
                synonyms: ["Solaranlage Rechner", "Photovoltaik Kalkulator", "PV Amortisation"],
                useCases: ["Hausbesitzer überlegen Solaranlage", "Solarangebote vergleichen"],
                relatedTerms: ["Solaranlage Kosten", "Einspeisevergütung", "Amortisationszeit"]
            }
        },
        config: {
            currency: { en: "USD", de: "EUR", es: "EUR" },
            locale: { en: "en-US", de: "de-DE", es: "es-ES" },
            fields: [
                { id: "bill", type: "number", label: { en: "Monthly Electric Bill", fi: "Kuukausittainen sähkölasku", de: "Monatl. Stromrechnung", es: "Factura Eléctrica Mensual", fr: "Facture d'Électricité Mensuelle", pt: "Conta de Luz Mensal", it: "Bolletta Elettrica Mensile", nl: "Maandelijkse Elektriciteitsrekening", pl: "Miesięczny Rachunek za Prąd", sv: "Månatlig Elräkning", no: "Månedlig Strømregning", da: "Månedlig Elregning" }, default: 150, min: 0, step: 10, format: "currency" },
                { id: "electricityRate", type: "number", label: { en: "Electricity Cost ($/kWh)", fi: "Sähkön hinta (€/kWh)", de: "Strompreis (€/kWh)", es: "Precio Electricidad (€/kWh)", fr: "Prix de l'Électricité", pt: "Tarifa de Energia", it: "Costo Elettricità", nl: "Stroomprijs", pl: "Cena Prądu", sv: "Elpris", no: "Strømpris", da: "Elpris" }, default: 0.15, min: 0.01, step: 0.01, format: "currency" },
                { id: "sunHours", type: "number", label: { en: "Peak Sun Hours / Day", fi: "Aurinkotunnit / Päivä", de: "Sonnenstunden / Tag", es: "Horas de Sol al Día", fr: "Heures de Soleil par Jour", pt: "Horas de Sol por Dia", it: "Ore di Sole al Giorno", nl: "Zonne-uren per Dag", pl: "Godziny Słoneczne na Dobę", sv: "Soltimmar per Dag", no: "Soltimer per Dag", da: "Soltimer pr. Dag" }, default: 4, min: 1, max: 12, step: 0.1 },
                { id: "costPerWatt", type: "number", label: { en: "Cost per Watt Installed", fi: "Hinta per asennettu watti", de: "Kosten pro Watt", es: "Costo por Vatio Instalado", fr: "Coût par Watt Installé", pt: "Custo por Watt Instalado", it: "Costo per Watt Installato", nl: "Kosten per Geïnstalleerde Watt", pl: "Koszt za Wat Instalacji", sv: "Kostnad per Installerad Watt", no: "Kostnad per Installert Watt", da: "Omkostning pr. Installeret Watt" }, default: 3.00, min: 1, step: 0.1, format: "currency" }
            ],
            formula: "((bill * 12) / (((bill * 12) / electricityRate) / (sunHours * 365 * 0.75) * 1000 * costPerWatt)) * 100",
            resultFormat: "percent",
            resultLabel: { en: "Estimated Yearly ROI", fi: "Arvioitu vuotuinen ROI", de: "Geschätzter Jährlicher ROI", es: "ROI Anual Estimado", fr: "ROI Annuel Estimé", pt: "ROI Anual Estimado", it: "ROI Annuo Stimato", nl: "Geschatte Jaarlijkse ROI", pl: "Szacowany Roczny ROI", sv: "Uppskattad Årlig Avkastning", no: "Anslått Årlig Avkastning", da: "Anslået Årligt Afkast" },
            breakdown: [
                { label: { en: "System Cost (Est.)", fi: "Järjestelmän hinta (arvio)", de: "Anlagenkosten (Geschätzt)", es: "Costo del Sistema (Est.)", fr: "Coût du Système (Est.)", pt: "Custo do Sistema (Est.)", it: "Costo del Sistema (Stimato)", nl: "Systeemkosten (Schatting)", pl: "Koszt Systemu (Szac.)", sv: "Systemkostnad (Uppsk.)", no: "Systemkostnad (Anslått)", da: "Systemomkostninger (Anslået)" }, formula: "((bill * 12) / electricityRate) / (sunHours * 365 * 0.75) * 1000 * costPerWatt", format: "currency" },
                { label: { en: "Annual Savings", fi: "Vuotuiset säästöt", de: "Jährliche Ersparnis", es: "Ahorro Anual", fr: "Économies Annuelles", pt: "Economia Anual", it: "Risparmio Annuo", nl: "Jaarlijkse Besparing", pl: "Roczne Oszczędności", sv: "Årligt Sparande", no: "Årlig Sparing", da: "Årlig Besparelse" }, formula: "bill * 12", format: "currency" }
            ],
            metrics: [
                { label: { en: "Payback Period (Years)", fi: "Takaisinmaksuaika (vuotta)", de: "Amortisationszeit (Jahre)", es: "Periodo de Retorno (Años)", fr: "Délai de Récupération (Années)", pt: "Período de Retorno (Anos)", it: "Periodo di Ammortamento (Anni)", nl: "Terugverdientijd (Jaren)", pl: "Okres Zwrotu (Lata)", sv: "Återbetalningstid (År)", no: "Nedbetalingstid (År)", da: "Tilbagebetalingstid (År)" }, formula: "(((bill * 12) / electricityRate) / (sunHours * 365 * 0.75) * 1000 * costPerWatt) / (bill * 12)", format: "number" }
            ]
        }
    },
    flooring: {
        baseType: "flooring",
        titles: {
            en: "Flooring Cost Calculator 2026",
            fi: "Lattiakustannuslaskuri 2026",
            de: "Bodenrechner 2026",
            es: "Calculadora de Suelos 2026",
            fr: "Calculateur de Revêtement de Sol 2026",
            pt: "Calculadora de Pisos 2026",
            it: "Calcolo Costo Pavimento 2026",
            nl: "Vloeren Calculator 2026",
            pl: "Kalkulator Podłóg 2026",
            sv: "Golvkalkylator 2026",
            no: "Gulvkalkulator 2026",
            da: "Gulvberegner 2026"
        },
        subtitles: {
            en: "Estimate material and labor costs for new floors",
            fi: "Arvioi uuden lattian materiaali- ja asennuskustannukset",
            de: "Berechnen Sie Material- und Verlegekosten für neue Böden",
            es: "Calcula el costo de materiales y mano de obra para suelos",
            fr: "Estimez les coûts de matériaux et de main-d'œuvre",
            pt: "Estime custos de material e mão de obra para pisos",
            it: "Stima i costi di materiale e manodopera per pavimenti",
            nl: "Schat materiaal- en arbeidskosten voor nieuwe vloeren",
            pl: "Szacuj koszty materiałów i robocizny dla podłóg",
            sv: "Uppskatta material- och arbetskostnad för nya golv",
            no: "Anslå material- og arbeidskostnader for nytt gulv",
            da: "Anslå materiale- og arbejdskraftsomkostninger til nyt gulv"
        },
        slugs: {
            en: "flooring-calculator",
            fi: "lattiakustannuslaskuri",
            de: "bodenrechner",
            es: "calculadora-suelos",
            fr: "calculateur-revetement-sol",
            pt: "calculadora-pisos",
            it: "calcolo-costo-pavimento",
            nl: "vloeren-calculator",
            pl: "kalkulator-podlog",
            sv: "golvkalkylator",
            no: "gulvkalkulator",
            da: "gulvberegner"
        },
        metaDescriptions: {
            en: "Estimate the total cost of installing new flooring. Calculate material needs, waste (cuts), and labor costs accurately.",
            de: "Schätzen Sie die Gesamtkosten für neue Böden. Berechnen Sie Materialbedarf, Verschnitt und Verlegekosten präzise.",
            es: "Estima el costo total de instalación de suelos.",
            fr: "Estimez le coût total de l'installation de nouveaux sols.",
            pt: "Estime o custo total de instalação de novos pisos.",
            it: "Stima il costo totale per l'installazione di nuovi pavimenti.",
            nl: "Schat de totale kosten voor nieuwe vloeren in.",
            pl: "Oszacuj całkowity koszt instalacji nowych podłóg.",
            sv: "Uppskatta den totala kostnaden för ny golvläggning.",
            no: "Anslå den totale kostnaden for nytt gulv.",
            da: "Anslå de samlede omkostninger til nyt gulv.",
            fi: "Arvioi uuden lattian asennuksen kokonaiskustannukset."
        },
        content: `
            <div class="prose">
                <h3>How Much Does New Flooring Cost in 2026?</h3>
                <p>Flooring costs vary dramatically based on material and labor rates. This calculator accounts for <strong>material waste</strong> (typically 10% extra for cuts and mistakes) to give you a realistic budget.</p>
                <ul>
                    <li><strong>Hardwood:</strong> $6-12 per sq ft installed</li>
                    <li><strong>Laminate:</strong> $3-8 per sq ft installed</li>
                    <li><strong>Tile:</strong> $5-15 per sq ft installed</li>
                    <li><strong>Carpet:</strong> $2-6 per sq ft installed</li>
                </ul>
                <p>Always get quotes from <strong>3+ contractors</strong> and ask about warranty on both materials and labor.</p>
            </div>
        `,
        seo: {
            en: {
                synonyms: ["flooring cost estimator", "floor installation calculator", "hardwood floor calculator", "tile cost calculator"],
                useCases: ["Homeowners planning floor renovation", "Contractors estimating material needs", "Comparing flooring material costs"],
                relatedTerms: ["flooring installation cost", "hardwood flooring price", "laminate floor cost", "carpet installation"],
                relatedCalculators: ["roofing", "mortgage"]
            },
            de: {
                synonyms: ["Bodenbelag Kosten Rechner", "Parkett Kalkulator"],
                useCases: ["Renovierung planen", "Handwerker Angebote vergleichen"],
                relatedTerms: ["Parkett Kosten", "Laminat Preis", "Verlegekosten"]
            }
        },
        config: {
            currency: { en: "USD", de: "EUR" },
            locale: { en: "en-US", de: "de-DE" },
            fields: [
                { id: "area", type: "number", label: { en: "Room Area (sq ft)", fi: "Huoneen pinta-ala (ft²)", de: "Fläche (m²)", es: "Área de la Habitación (sq ft)", fr: "Surface de la Pièce (sq ft)", pt: "Área do Cômodo (sq ft)", it: "Superficie della Stanza (sq ft)", nl: "Kameroppervlakte (sq ft)", pl: "Powierzchnia Pomieszczenia (sq ft)", sv: "Rummets Area (sq ft)", no: "Romareal (sq ft)", da: "Rumareal (sq ft)" }, default: 500, min: 10, step: 10 },
                { id: "price", type: "number", label: { en: "Material Price / sq ft", fi: "Materiaalin hinta / ft²", de: "Preis pro m²", es: "Precio de Material / sq ft", fr: "Prix du Matériel / sq ft", pt: "Preço do Material / sq ft", it: "Prezzo del Materiale / sq ft", nl: "Materiaalprijs / sq ft", pl: "Cena Materiału / sq ft", sv: "Materialpris / sq ft", no: "Materialpris / sq ft", da: "Materialepris / sq ft" }, default: 4.50, min: 0.5, step: 0.1, format: "currency" },
                { id: "labor", type: "number", label: { en: "Labor Cost / sq ft", fi: "Työkustannus / ft²", de: "Verlegekosten pro m²", es: "Costo de Mano de Obra / sq ft", fr: "Coût de Main-d'œuvre / sq ft", pt: "Custo de Mão de Obra / sq ft", it: "Costo Manodopera / sq ft", nl: "Arbeidskosten / sq ft", pl: "Koszt Robocizny / sq ft", sv: "Arbetskostnad / sq ft", no: "Arbeidskostnad / sq ft", da: "Arbejdskraftsomkostninger / sq ft" }, default: 3.00, min: 0, step: 0.5, format: "currency" }
            ],
            formula: "area * (price + labor) * 1.1", // 10% waste
            resultFormat: "currency",
            resultLabel: { en: "Total Project Cost", fi: "Projektin kokonaiskustannukset", de: "Gesamtprojektkosten", es: "Costo Total del Proyecto", fr: "Coût Total du Projet", pt: "Custo Total do Projeto", it: "Costo Totale del Progetto", nl: "Totale Projectkosten", pl: "Całkowity Koszt Projektu", sv: "Total Projektkostnad", no: "Total Prosjektkostnad", da: "Samlede Projektomkostninger" },
            breakdown: [
                { label: { en: "Materials (inc. 10% waste)", fi: "Materiaalit (sis. 10% hukka)", de: "Material (inkl. Verschnitt)", es: "Materiales (inc. 10% desperdicio)", fr: "Matériaux (inc. 10% perte)", pt: "Materiais (inc. 10% desperdício)", it: "Materiali (inc. 10% scarto)", nl: "Materialen (incl. 10% afval)", pl: "Materiały (w tym 10% odpadów)", sv: "Material (inkl. 10% spill)", no: "Materialer (inkl. 10% svinn)", da: "Materialer (inkl. 10% spild)" }, formula: "area * price * 1.1", format: "currency" },
                { label: { en: "Labor", fi: "Työ", de: "Arbeit", es: "Mano de Obra", fr: "Main-d'œuvre", pt: "Mão de Obra", it: "Manodopera", nl: "Arbeid", pl: "Robocizna", sv: "Arbete", no: "Arbeid", da: "Arbejdskraft" }, formula: "area * labor", format: "currency" }
            ],
            metrics: [
                { label: { en: "Cost per Sq Ft", fi: "Kustannus per ft²", de: "Kosten pro m²", es: "Costo por Sq Ft", fr: "Coût par Sq Ft", pt: "Custo por Sq Ft", it: "Costo per Sq Ft", nl: "Kosten per Sq Ft", pl: "Koszt za Sq Ft", sv: "Kostnad per Sq Ft", no: "Kostnad per Sq Ft", da: "Omkostning pr. Sq Ft" }, formula: "(area * (price + labor) * 1.1) / area", format: "currency" }
            ]
        }
    },
    roofing: {
        baseType: "roofing",
        titles: {
            en: "Roofing Calculator 2026",
            fi: "Kattolaskuri 2026",
            de: "Dachrechner 2026",
            es: "Calculadora de Techos 2026",
            fr: "Calculateur de Toiture 2026",
            pt: "Calculadora de Telhado 2026",
            it: "Calcolo Costo Tetto 2026",
            nl: "Dak Calculator 2026",
            pl: "Kalkulator Dachu 2026",
            sv: "Takkalkylator 2026",
            no: "Takkalkulator 2026",
            da: "Tagberegner 2026"
        },
        subtitles: {
            en: "Estimate roof replacement costs based on area and pitch",
            fi: "Arvioi katon uusimisen kustannukset",
            de: "Schätzen Sie Kosten für Dachsanierung basierend auf Fläche und Neigung",
            es: "Calcula el costo de reemplazo de techo por área e inclinación",
            fr: "Estimez les coûts de réfection de toiture",
            pt: "Estime custos de substituição de telhado",
            it: "Stima i costi di rifacimento del tetto",
            nl: "Schat kosten voor dakvervanging in",
            pl: "Szacuj koszty wymiany dachu",
            sv: "Uppskatta kostnad för takbyte",
            no: "Anslå kostnader for takfornyelse",
            da: "Anslå omkostninger til tagudskiftning"
        },
        slugs: {
            en: "roofing-calculator",
            fi: "kattolaskuri",
            de: "dachrechner",
            es: "calculadora-techos",
            fr: "calculateur-toiture",
            pt: "calculadora-telhado",
            it: "calcolo-costo-tetto",
            nl: "dak-calculator",
            pl: "kalkulator-dachu",
            sv: "takkalkylator",
            no: "takkalkulator",
            da: "tagberegner"
        },
        metaDescriptions: {
            en: "Free roofing cost estimator. Calculate shingles/bundles needed and total replacement cost.",
            de: "Kostenloser Dachrechner. Berechnen Sie benötigte Ziegel und Gesamtkosten.",
            es: "Calcula el costo de reemplazo de techo y los materiales necesarios.",
            fr: "Calculez le coût de réfection de toiture et les matériaux nécessaires.",
            pt: "Estime o custo de substituição de telhado e materiais.",
            it: "Calcola il costo di rifacimento del tetto e i materiali necessari.",
            nl: "Schat kosten voor dakvervanging en benodigde materialen in.",
            pl: "Oszacuj koszt wymiany dachu i potrzebne materiały.",
            sv: "Uppskatta kostnad för takbyte och materialbehov.",
            no: "Anslå kostnad for takfornyelse og materialbehov.",
            da: "Anslå omkostninger til tagudskiftning og materialebehov.",
            fi: "Arvioi katon uusimiskustannukset ja materiaalin tarve."
        },
        content: `
            <div class="prose">
                <h3>Roof Replacement Cost in 2026</h3>
                <p>A new roof is one of the largest home improvement investments. This calculator factors in <strong>roof pitch</strong> and <strong>waste allowance</strong> to give you an accurate cost estimate.</p>
                <ul>
                    <li><strong>Asphalt Shingles:</strong> $350-500 per square (100 sq ft)</li>
                    <li><strong>Metal Roofing:</strong> $600-1,200 per square</li>
                    <li><strong>Tile/Slate:</strong> $1,000-2,500 per square</li>
                </ul>
                <p>Steeper roofs (higher pitch) require more material and labor. The <strong>pitch multiplier</strong> accounts for this.</p>
            </div>
        `,
        seo: {
            en: {
                synonyms: ["roof replacement calculator", "shingle calculator", "roofing cost estimator", "roof repair calculator"],
                useCases: ["Homeowners planning roof replacement", "Insurance adjusters estimating claims", "Roofing contractors bidding jobs"],
                relatedTerms: ["roof replacement cost", "shingles per square", "roof pitch", "asphalt shingle cost"],
                relatedCalculators: ["flooring", "solar"]
            },
            de: {
                synonyms: ["Dachsanierung Rechner", "Dachziegel Kalkulator"],
                useCases: ["Dachsanierung planen", "Dachdecker Angebote einholen"],
                relatedTerms: ["Dachziegel Kosten", "Dachneigung", "Dachsanierung Preis"]
            }
        },
        config: {
            currency: { en: "USD", de: "EUR" },
            locale: { en: "en-US", de: "de-DE" },
            fields: [
                { id: "groundArea", type: "number", label: { en: "Ground Floor Area", fi: "Pohjapinta-ala", de: "Grundfläche", es: "Área de Planta Baja", fr: "Surface au Sol", pt: "Área do Piso", it: "Superficie del Piano Terra", nl: "Grondoppervlakte", pl: "Powierzchnia Parteru", sv: "Bottenvåningens Area", no: "Grunnareal", da: "Grundareal" }, default: 1500, min: 100, step: 50 },
                { id: "pitch", type: "number", label: { en: "Roof Pitch Multiplier (1.05 - 1.4)", fi: "Katon kaltevuuskerroin", de: "Dachneigungsfaktor", es: "Multiplicador de Inclinación", fr: "Multiplicateur de Pente", pt: "Multiplicador de Inclinação", it: "Moltiplicatore Pendenza", nl: "Dakhelling Factor", pl: "Mnożnik Nachylenia Dachu", sv: "Taklutningsfaktor", no: "Takvinkelfaktor", da: "Taghældningsfaktor" }, default: 1.15, min: 1.0, max: 2.0, step: 0.05 },
                { id: "priceSq", type: "number", label: { en: "Price per Square (100 sq ft)", fi: "Hinta per yksikkö (100 ft²)", de: "Preis pro 10m²", es: "Precio por Square (100 sq ft)", fr: "Prix par Carré (100 sq ft)", pt: "Preço por Quadrado (100 sq ft)", it: "Prezzo per Quadrato (100 sq ft)", nl: "Prijs per Square (100 sq ft)", pl: "Cena za Jednostkę (100 sq ft)", sv: "Pris per Enhet (100 sq ft)", no: "Pris per Enhet (100 sq ft)", da: "Pris pr. Enhed (100 sq ft)" }, default: 450, step: 10, format: "currency" }
            ],
            formula: "(groundArea * pitch) / 100 * priceSq * 1.1", // 1.1 waste
            resultFormat: "currency",
            resultLabel: { en: "Estimated Roof Replacement Cost", fi: "Arvioidut katon uusimiskustannukset", de: "Geschätzte Dachkosten", es: "Costo Estimado de Reemplazo", fr: "Coût Estimé de Remplacement", pt: "Custo Estimado de Substituição", it: "Costo Stimato Rifacimento", nl: "Geschatte Kosten voor Dakvervanging", pl: "Szacowany Koszt Wymiany Dachu", sv: "Uppskattad Kostnad för Takbyte", no: "Anslått Kostnad for Takfornyelse", da: "Anslået Pris for Tagudskiftning" },
            breakdown: [
                { label: { en: "Materials & Labor", fi: "Materiaalit ja työ", de: "Material & Arbeit", es: "Materiales y Mano de Obra", fr: "Matériaux et Main-d'œuvre", pt: "Materiais e Mão de Obra", it: "Materiali e Manodopera", nl: "Materialen en Arbeid", pl: "Materiały i Robocizna", sv: "Material och Arbete", no: "Materialer og Arbeid", da: "Materialer og Arbejdskraft" }, formula: "(groundArea * pitch) / 100 * priceSq", format: "currency" },
                { label: { en: "Waste & Overheads (10%)", fi: "Hukka ja yleiskustannukset (10%)", de: "Verschnitt & Sonstiges", es: "Desperdicios y Gastos (10%)", fr: "Pertes et Frais (10%)", pt: "Desperdícios e Custos (10%)", it: "Scarti e Spese (10%)", nl: "Afval en Onkosten (10%)", pl: "Odpady i Koszty Ogólne (10%)", sv: "Spill och Omkostnader (10%)", no: "Svinn ja Omkostninger (10%)", da: "Spild og Omkostninger (10%)" }, formula: "(groundArea * pitch) / 100 * priceSq * 0.1", format: "currency" }
            ],
            metrics: [
                { label: { en: "Squares Needed", fi: "Tarvittavat yksiköt", de: "Benötigte Einheiten", es: "Squares Necesarios", fr: "Unités Nécessaires", pt: "Unidades Necessárias", it: "Unità Necessarie", nl: "Benodigde Eenheden", pl: "Potrzebne Jednostki", sv: "Enheter som Behövs", no: "Enheter som Trengs", da: "Enheder der Skal Bruges" }, formula: "Math.ceil((groundArea * pitch) / 100 * 1.1)", format: "number" }
            ]
        }
    },
    loan: {
        baseType: "loan",
        titles: {
            en: "Loan Calculator 2026 • Calculate Payments & Interest",
            fi: "Lainalaskuri 2026 • Laske Erät & Korot",
            de: "Kreditrechner 2026 • Rate & Zinsen Berechnen",
            es: "Calculadora de Préstamos 2026 • Cuotas e Intereses",
            fr: "Calculateur de Prêt 2026 • Mensualités et Intérêts",
            pt: "Calculadora de Empréstimo 2026 • Parcelas e Juros",
            it: "Calcolatore di Prestito 2026 • Rate e Interessi",
            nl: "Lening Calculator 2026 • Maandlasten en Rente",
            pl: "Kalkulator Kredytowy 2026 • Oblicz Raty i Odsetki",
            sv: "Lånekalkylator 2026 • Beräkna Månadskostnad",
            no: "Lånekalkulator 2026 • Beregn Rente og Avdrag",
            da: "Låneberegner 2026 • Beregn Ydelse og Rente"
        },
        subtitles: {
            en: "Personal, Business, and Auto Loan Payments",
            fi: "Henkilökohtaiset-, yritys- ja autolainat",
            de: "Ratenkredite, Autokredite und Privatdarlehen",
            es: "Préstamos personales, de coche y de negocios",
            fr: "Prêts personnels, auto et professionnels",
            pt: "Empréstimos pessoais, de carro e comerciais",
            it: "Prestiti personali, auto e aziendali",
            nl: "Persoonlijke, zakelijke en autoleningen",
            pl: "Pożyczki osobiste, firmowe i samochodowe",
            sv: "Privat-, företags- och billån",
            no: "Personlige lån, bedriftslån og billån",
            da: "Privatlån, erhvervslån og billån"
        },
        slugs: {
            en: "loan-calculator",
            fi: "lainalaskuri",
            de: "kreditrechner",
            es: "calculadora-prestamos",
            fr: "calculateur-pret",
            pt: "calculadora-emprestimo",
            it: "calcolatore-prestito",
            nl: "lening-calculator",
            pl: "kalkulator-kredytowy",
            sv: "lanekalkylator",
            no: "lanekalkulator",
            da: "laneberegner"
        },
        metaDescriptions: {
            en: "Quickly calculate monthly payments for any loan. See total interest costs and amortization schedule.",
            de: "Berechnen Sie blitzschnell Ihre monatliche Kreditrate. Sehen Sie Gesamtzinsen und Tilgungsplan.",
            es: "Calcula cuotas mensuales de préstamos e intereses totales.",
            fr: "Calculez les mensualités de prêt et le total des intérêts.",
            pt: "Calcule parcelas de empréstimo e juros totais rapidamente.",
            it: "Calcola le rate del prestito e il totale degli interessi.",
            nl: "Bereken leningbetalingen en totale rente direct.",
            pl: "Oblicz raty pożyczki i sumę odsetek natychmiast.",
            sv: "Beräkna lånebetalning och total ränta direkt.",
            no: "Anslå lånebetaling og total rente umiddelbart.",
            da: "Beregn låneydelser og samlede renter med det samme.",
            fi: "Laske lainaerät ja kokonaiskorot välittömästi."
        },
        content: `
            <div class="prose">
                <h3>Understand Your Loan Payments in 2026</h3>
                <p>Whether you're financing a car, consolidating debt, or taking out a personal loan, knowing your <strong>true monthly payment</strong> is essential for budgeting. This calculator shows you both the payment and <strong>total interest cost</strong>.</p>
                <ul>
                    <li><strong>Personal Loans:</strong> Typically 10-25% APR depending on credit</li>
                    <li><strong>Auto Loans:</strong> Often 5-12% APR with term from 36-72 months</li>
                    <li><strong>Debt Consolidation:</strong> Compare your current rates to potential savings</li>
                </ul>
                <p>A shorter term means higher payments but <strong>less total interest</strong>. Use the calculator to find your sweet spot.</p>
            </div>
        `,
        seo: {
            en: {
                synonyms: ["loan payment calculator", "personal loan calculator", "auto loan calculator", "loan amortization calculator"],
                useCases: ["Calculating monthly car payments", "Comparing loan offers", "Planning debt consolidation"],
                relatedTerms: ["loan APR", "monthly payment", "amortization schedule", "total interest", "loan term"],
                relatedCalculators: ["mortgage", "roi", "crypto"]
            },
            de: {
                synonyms: ["Ratenkredit Rechner", "Autokredit Kalkulator", "Darlehensrechner"],
                useCases: ["Autofinanzierung berechnen", "Kreditangebote vergleichen"],
                relatedTerms: ["effektiver Jahreszins", "Monatsrate", "Tilgungsplan"]
            }
        },
        faqs: {
            en: [
                { q: "How are loan payments calculated?", a: "We use the standard amortization formula: A = P * (r(1+r)^n) / ((1+r)^n - 1). This ensures precision for any fixed-rate loan." },
                { q: "Does the loan term affect the interest rate?", a: "Yes, typically shorter terms (like 36 months) have lower interest rates but higher monthly payments compared to longer terms (60+ months)." }
            ],
            es: [
                { q: "¿Cómo se calculan los pagos?", a: "Usamos la fórmula de amortización estándar para garantizar precisión en cualquier préstamo a tipo fijo." },
                { q: "¿El plazo afecta al interés?", a: "Sí, plazos cortos suelen tener menor interés pero cuotas más altas que los plazos largos." }
            ]
        },
        config: {
            currency: { en: "USD", es: "EUR", de: "EUR" },
            locale: { en: "en-US", es: "es-ES", de: "de-DE" },
            fields: [
                { id: "amount", type: "number", label: { en: "Loan Amount", fi: "Lainan määrä", de: "Kreditbetrag", es: "Monto del Préstamo", fr: "Montant du Prêt", pt: "Valor do Empréstimo", it: "Importo del Prestito", nl: "Leningbedrag", pl: "Kwota Pożyczki", sv: "Lånebelopp", no: "Lånebeløp", da: "Lånebeløb" }, default: 15000, step: 1000, format: "currency" },
                { id: "rate", type: "number", label: { en: "Interest Rate (%)", fi: "Korko (%)", de: "Zinssatz (%)", es: "Tasa de Interés (%)", fr: "Taux d'Intérêt (%)", pt: "Taxa de Juros (%)", it: "Tasso di Interesse (%)", nl: "Rentepercentage (%)", pl: "Oprocentowanie (%)", sv: "Räntesats (%)", no: "Rentesats (%)", da: "Rentesats (%)" }, default: 9.5, step: 0.1, format: "percent" },
                { id: "months", type: "number", label: { en: "Term (Months)", fi: "Laina-aika (kk)", de: "Laufzeit (Monate)", es: "Plazo (Meses)", fr: "Durée (Mois)", pt: "Prazo (Meses)", it: "Durata (Mesi)", nl: "Looptijd (Maanden)", pl: "Okres (Miesiące)", sv: "Löptid (Månader)", no: "Løpetid (Måneder)", da: "Løbetid (Måneder)" }, default: 36, step: 6 }
            ],
            formula: "rate > 0 ? amount * (rate/100/12) * Math.pow(1 + rate/100/12, months) / (Math.pow(1 + rate/100/12, months) - 1) : amount / months",
            resultFormat: "currency",
            resultLabel: { en: "Monthly Payment", fi: "Kuukausierä", de: "Monatliche Rate", es: "Pago Mensual", fr: "Mensualité", pt: "Parcela Mensal", it: "Rata Mensile", nl: "Maandelijkse Betaling", pl: "Miesięczna Rata", sv: "Månadsbetalning", no: "Månedlig Betaling", da: "Månedlig Ydelse" },
            breakdown: [
                { label: { en: "Principal", fi: "Pääoma", de: "Kreditsumme", es: "Capital", fr: "Principal", pt: "Capital", it: "Capitale", nl: "Hoofdsom", pl: "Kapitał", sv: "Kapital", no: "Hovedstol", da: "Hovedstol" }, formula: "amount", format: "currency" },
                { label: { en: "Total Interest", fi: "Kokonaiskorko", de: "Gesamtzinsen", es: "Total de Intereses", fr: "Total des Intérêts", pt: "Total de Juros", it: "Interessi Totali", nl: "Totale Rente", pl: "Suma Odsetek", sv: "Total Ränta", no: "Total Rente", da: "Samlede Renter" }, formula: "(result * months) - amount", format: "currency" }
            ],
            metrics: [
                { label: { en: "Total Repayment", fi: "Takaisinmaksu yhteensä", de: "Gesamtrückzahlung", es: "Total a Pagar", fr: "Total à Rembourser", pt: "Pagamento Total", it: "Rimborso Totale", nl: "Totale Terugbetaling", pl: "Całkowita Spłata", sv: "Total Återbetalning", no: "Total Tilbakebetaling", da: "Samlet Tilbagebetaling" }, formula: "result * months", format: "currency" }
            ]
        }
    },
    roi: {
        baseType: "roi",
        titles: {
            en: "ROI Calculator 2026 • Return on Investment",
            fi: "ROI-laskuri 2026 • Sijoitetun pääoman tuotto",
            de: "ROI Rechner 2026 • Kapitalrendite Berechnen",
            es: "Calculadora de ROI 2026 • Retorno de Inversión",
            fr: "Calculateur de ROI 2026 • Retour sur Investissement",
            pt: "Calculadora de ROI 2026 • Retorno sobre Investimento",
            it: "Calcolatore ROI 2026 • Ritorno sull'Investimento",
            nl: "ROI Calculator 2026 • Rendement op Investering",
            pl: "Kalkulator ROI 2026 • Zwrot z Inwestycji",
            sv: "ROI-kalkylator 2026 • Avkastning på Investering",
            no: "ROI-kalkulator 2026 • Avkastning på Investering",
            da: "ROI-beregner 2026 • Afkast af Investering"
        },
        subtitles: {
            en: "Calculate profitability of investments and campaigns",
            fi: "Laske investointien ja kampanjoiden kannattavuus",
            de: "Berechnen Sie die Rentabilität von Investitionen und Kampagnen",
            es: "Calcula la rentabilidad de inversiones y campañas",
            fr: "Calculez la rentabilité des investissements et des campagnes",
            pt: "Calcule a lucratividade de investimentos e campanhas",
            it: "Calcola la redditività di investimenti e campagne",
            nl: "Bereken de winstgevendheid van investeringen en campagnes",
            pl: "Oblicz rentowność inwestycji i kampanii",
            sv: "Beräkna lönsamhet för investeringar och kampanjer",
            no: "Beregn lønnsomhet for investeringer og kampanjer",
            da: "Beregn rentabilitet af investeringer og kampagner"
        },
        slugs: {
            en: "roi-calculator",
            fi: "roi-laskuri",
            de: "roi-rechner",
            es: "calculadora-roi",
            fr: "calculateur-roi",
            pt: "calculadora-roi",
            it: "calcolatore-roi",
            nl: "roi-calculator",
            pl: "kalkulator-roi",
            sv: "roi-kalkylator",
            no: "roi-kalkulator",
            da: "roi-beregner"
        },
        metaDescriptions: {
            en: "Calculate ROI (Return on Investment) instantly. Determine profit margins and annualized returns.",
            de: "Berechnen Sie den ROI (Return on Investment) sofort. Ermitteln Sie Gewinnmargen und jährliche Renditen.",
            es: "Calcula el retorno de inversión (ROI) y márgenes de beneficio.",
            fr: "Calculez le retour sur investissement (ROI) et les marges.",
            pt: "Calcule o retorno sobre investimento (ROI) e margens de lucro.",
            it: "Calcola il ritorno sull'investimento (ROI) e i margini di profitto.",
            nl: "Bereken het rendement op investering (ROI) direct.",
            pl: "Oblicz zwrot z inwestycji (ROI) i marże zysku.",
            sv: "Beräkna ROI och vinstmarginaler direkt.",
            no: "Anslå ROI og fortjenestemarginer umiddelbart.",
            da: "Beregn ROI og avance med det samme.",
            fi: "Laske sijoitetun pääoman tuotto (ROI) välittömästi."
        },
        content: `
            <div class="prose">
                <h3>What is a Good ROI in 2026?</h3>
                <p><strong>Return on Investment (ROI)</strong> is the universal metric for measuring profitability. Whether you're evaluating a stock, a marketing campaign, or a real estate deal, ROI tells you how much you gained relative to your cost.</p>
                <ul>
                    <li><strong>Stock Market:</strong> Historical average ~7-10% annually</li>
                    <li><strong>Real Estate:</strong> 8-12% ROI considered solid</li>
                    <li><strong>Marketing:</strong> 5:1 return (400% ROI) is a common benchmark</li>
                </ul>
                <p>Remember: ROI doesn't account for <strong>time</strong>. A 50% return over 5 years is very different from 50% in 1 year. For time-based analysis, consider <strong>annualized returns</strong>.</p>
            </div>
        `,
        seo: {
            en: {
                synonyms: ["return on investment calculator", "investment calculator", "profit calculator", "ROI percentage calculator"],
                useCases: ["Evaluating stock investments", "Measuring marketing campaign success", "Comparing real estate deals"],
                relatedTerms: ["return on investment", "profit margin", "investment multiple", "net profit", "annualized return"],
                relatedCalculators: ["loan", "solar", "crypto"]
            },
            de: {
                synonyms: ["Kapitalrendite Rechner", "Investitionsrechner", "Gewinnrechner"],
                useCases: ["Aktieninvestitionen bewerten", "Marketingkampagnen analysieren"],
                relatedTerms: ["Kapitalrendite", "Gewinnmarge", "Rendite"]
            }
        },
        config: {
            currency: { en: "USD", de: "EUR" },
            locale: { en: "en-US", de: "de-DE" },
            fields: [
                { id: "investment", type: "number", label: { en: "Amount Invested", fi: "Investoitu määrä", de: "Investiert", es: "Cantidad Invertida", fr: "Montant Investi", pt: "Valor Investido", it: "Importo Investito", nl: "Geïnvesteerd Bedrag", pl: "Zainwestowana Kwota", sv: "Investerat Belopp", no: "Investert Beløp", da: "Investeret Beløb" }, default: 1000, step: 100, format: "currency" },
                { id: "returned", type: "number", label: { en: "Amount Returned", fi: "Palautettu määrä", de: "Rückfluss", es: "Cantidad Devuelta", fr: "Montant Reçu", pt: "Valor Retornado", it: "Importo Restituito", nl: "Terugontvangen Bedrag", pl: "Zwrócona Kwota", sv: "Belopp som Återbetalats", no: "Beløp som er Tilbakeført", da: "Beløb der er Tilbageført" }, default: 1500, step: 100, format: "currency" }
            ],
            formula: "((returned - investment) / investment) * 100",
            resultFormat: "percent",
            resultLabel: { en: "ROI", fi: "ROI", de: "ROI", es: "ROI", fr: "ROI", pt: "ROI", it: "ROI", nl: "ROI", pl: "ROI", sv: "ROI", no: "ROI", da: "ROI" },
            breakdown: [
                { label: { en: "Net Profit", fi: "Nettovoitto", de: "Gewinn", es: "Beneficio Neto", fr: "Bénéfice Net", pt: "Lucro Líquido", it: "Utile Netto", nl: "Nettowinst", pl: "Zysk Netto", sv: "Nettovinst", no: "Nettofortjeneste", da: "Nettofortjeneste" }, formula: "returned - investment", format: "currency" },
                { label: { en: "Initial Investment", fi: "Alkuperäinen sijoitus", de: "Investition", es: "Inversión Inicial", fr: "Investissement Initial", pt: "Investimento Inicial", it: "Investimento Iniziale", nl: "Initiële Investering", pl: "Inwestycja Początkowa", sv: "Initial Investering", no: "Opprinnelig Investering", da: "Oprindelig Investering" }, formula: "investment", format: "currency" }
            ],
            metrics: [
                { label: { en: "Investment Multiple", fi: "Sijoituskerroin", de: "Multiplikator", es: "Múltiplo de Inversión", fr: "Multiple d'Investissement", pt: "Múltiplo de Investimento", it: "Multiplo di Investimento", nl: "Investeringsmultiple", pl: "Mnożnik Inwestycji", sv: "Investeringsmultipel", no: "Investeringsmultippel", da: "Investeringsmultipel" }, formula: "returned / investment", format: "number" }
            ]
        }
    },
    crypto: {
        baseType: "crypto",
        titles: {
            en: "Crypto Profit Calculator 2026 • ROI & Fees",
            fi: "Kryptolaskuri 2026 • ROI ja Kulut",
            de: "Krypto-Rechner 2026 • Gewinn & Gebühren",
            es: "Calculadora Cripto 2026 • Ganancias y Tarifas",
            fr: "Calculateur Crypto 2026 • Gains et Frais",
            pt: "Calculadora Cripto 2026 • Lucro e Taxas",
            it: "Calcolatore Crypto 2026 • Profitti e Commissioni",
            nl: "Crypto Calculator 2026 • Winst & Kosten",
            pl: "Kalkulator Krypto 2026 • Zyski i Opłaty",
            sv: "Kryptokalkylator 2026 • Vinst & Avgifter",
            no: "Kryptokalkulator 2026 • Gevinst og Gebyrer",
            da: "Krypto Beregner 2026 • Gevinst & Gebyrer"
        },
        subtitles: {
            en: "Calculate profit, fees, and ROI for your trades",
            fi: "Laske voitot, kulut ja ROI kaupoillesi",
            de: "Berechnen Sie Gewinn, Gebühren und ROI Ihrer Trades",
            es: "Calcula ganancias, tarifas y ROI de tus operaciones",
            fr: "Calculez les profits, frais et ROI de vos transactions",
            pt: "Calcule lucro, taxas e ROI de suas negociações",
            it: "Calcola profitti, commissioni e ROI delle tue operazioni",
            nl: "Bereken winst, kosten en ROI van uw trades",
            pl: "Oblicz zysk, opłaty i ROI swoich transakcji",
            sv: "Beräkna vinst, avgifter och ROI för dina affärer",
            no: "Beregn fortjeneste, gebyrer og ROI for handlene dine",
            da: "Beregn fortjeneste, gebyrer og ROI for dine handler"
        },
        slugs: {
            en: "crypto-profit-calculator",
            fi: "krypto-tuottolaskuri",
            de: "krypto-gewinnrechner",
            es: "calculadora-ganancias-cripto",
            fr: "calculateur-gains-crypto",
            pt: "calculadora-lucro-cripto",
            it: "calcolatore-profitti-crypto",
            nl: "crypto-winst-calculator",
            pl: "kalkulator-zyskow-krypto",
            sv: "krypto-vinstkalkylator",
            no: "krypto-gevinstkalkulator",
            da: "krypto-gevinstberegner"
        },
        metaDescriptions: {
            en: "Calculate crypto trading profits, fees, and ROI instantly. Support for Bitcoin, Ethereum, and Altcoins.",
            de: "Berechnen Sie Krypto-Gewinne, Gebühren und ROI sofort.",
            es: "Calcula ganancias de trading cripto, tarifas y ROI al instante.",
            fr: "Calculez les profits de trading crypto, frais et ROI instantanément.",
            pt: "Calcule lucros de trading cripto, taxas e ROI instantaneamente.",
            it: "Calcola profitti trading crypto, commissioni e ROI istantaneamente.",
            nl: "Bereken crypto trading winst, kosten en ROI direct.",
            pl: "Oblicz zyski z handlu krypto, opłaty i ROI natychmiast.",
            sv: "Beräkna kryptovinst, avgifter och ROI direkt.",
            no: "Beregn kryptogevinst, gebyrer og ROI umiddelbart.",
            da: "Beregn kryptogevinst, gebyrer og ROI med det samme.",
            fi: "Laske kryptokaupan voitot, kulut ja ROI välittömästi."
        },
        content: `
            <div class="prose">
                <h3>Crypto Trading Profit Calculation</h3>
                <p>Successful trading requires understanding your <strong>Entry</strong> and <strong>Exit</strong> points alongside trading fees. This calculator helps you define your potential profit margin before entering a trade.</p>
                <ul>
                    <li><strong>Investment:</strong> Total capital deployed</li>
                    <li><strong>Entry Price:</strong> Price at which you bought</li>
                    <li><strong>Exit Price:</strong> Price at which you sold (or plan to sell)</li>
                    <li><strong>Fees:</strong> Exchange fees (Maker/Taker) plus network gas fees</li>
                </ul>
            </div>
        `,
        seo: {
            en: {
                synonyms: ["bitcoin profit calculator", "crypto roi calculator", "trading fee calculator", "ethereum profit estimator"],
                useCases: ["Day traders planning entries/exits", "HODLers estimating portfolio value", "Calculating break-even prices"],
                relatedTerms: ["ROI", "maker fee", "taker fee", "gas fees", "profit margin"],
                relatedCalculators: ["roi", "loan"]
            },
            de: {
                synonyms: ["Bitcoin Rechner", "Krypto Gewinn Rechner"],
                useCases: ["Trading Strategien planen", "Portfolio Wert berechnen"],
                relatedTerms: ["Trading Gebühren", "Gewinnmarge"]
            }
        },
        config: {
            currency: { en: "USD", de: "EUR" },
            locale: { en: "en-US", de: "de-DE" },
            fields: [
                { id: "investment", type: "number", label: { en: "Invested Amount", fi: "Sijoitettu summa", de: "Investierter Betrag", es: "Monto Invertido", fr: "Montant Investi", pt: "Valor Investido", it: "Importo Investito", nl: "Geïnvesteerd Bedrag", pl: "Zainwestowana Kwota", sv: "Investerat Belopp", no: "Investert Beløp", da: "Investeret Beløb" }, default: 1000, step: 100, format: "currency" },
                { id: "entryPrice", type: "number", label: { en: "Entry Price ($)", fi: "Ostohinta ($)", de: "Einstiegspreis ($)", es: "Precio de Entrada ($)", fr: "Prix d'Entrée ($)", pt: "Preço de Entrada ($)", it: "Prezzo di Entrata ($)", nl: "Instapprijs ($)", pl: "Cena Wejścia ($)", sv: "Ingångspris ($)", no: "Inngangspris ($)", da: "Indgangspris ($)" }, default: 50000, step: 100 },
                { id: "exitPrice", type: "number", label: { en: "Exit Price ($)", fi: "Myyntihinta ($)", de: "Ausstiegspreis ($)", es: "Precio de Salida ($)", fr: "Prix de Sortie ($)", pt: "Preço de Saída ($)", it: "Prezzo di Uscita ($)", nl: "Uitstapprijs ($)", pl: "Cena Wyjścia ($)", sv: "Utgångspris ($)", no: "Utgangspris ($)", da: "Udgangspris ($)" }, default: 55000, step: 100 },
                { id: "fees", type: "number", label: { en: "Total Fees ($)", fi: "Kulut yhteensä ($)", de: "Gebühren Gesamt ($)", es: "Comisiones Totales ($)", fr: "Frais Totaux ($)", pt: "Taxas Totais ($)", it: "Commissioni Totali ($)", nl: "Totale Kosten ($)", pl: "Opłaty Razem ($)", sv: "Totala Avgifter ($)", no: "Totale Gebyrer ($)", da: "Samlede Gebyrer ($)" }, default: 10, step: 1, format: "currency" }
            ],
            formula: "((investment / entryPrice) * exitPrice) - investment - fees",
            resultFormat: "currency",
            resultLabel: { en: "Net Profit", fi: "Nettovoitto", de: "Nettogewinn", es: "Beneficio Neto", fr: "Bénéfice Net", pt: "Lucro Líquido", it: "Utile Netto", nl: "Nettowinst", pl: "Zysk Netto", sv: "Nettovinst", no: "Nettofortjeneste", da: "Nettofortjeneste" },
            breakdown: [
                { label: { en: "Gross Return", fi: "Bruttotuotto", de: "Bruttoertrag", es: "Retorno Bruto", fr: "Rendement Brut", pt: "Retorno Bruto", it: "Rendimento Lordo", nl: "Bruto Rendement", pl: "Zwrot Brutto", sv: "Bruttoavkastning", no: "Bruttoavkastning", da: "Bruttoafkast" }, formula: "(investment / entryPrice) * exitPrice", format: "currency" },
                { label: { en: "Total Fees", fi: "Kulut yhteensä", de: "Gesamtgebühren", es: "Comisiones Totales", fr: "Frais Totaux", pt: "Taxas Totais", it: "Commissioni Totali", nl: "Totale Kosten", pl: "Opłaty Razem", sv: "Totala Avgifter", no: "Totale Gebyrer", da: "Samlede Gebyrer" }, formula: "fees", format: "currency" },
                { label: { en: "Initial Investment", fi: "Alkuperäinen sijoitus", de: "Investition", es: "Inversión Inicial", fr: "Investissement Initial", pt: "Investimento Inicial", it: "Investimento Iniziale", nl: "Initiële Investering", pl: "Inwestycja Początkowa", sv: "Initial Investering", no: "Opprinnelig Investering", da: "Oprindelig Investering" }, formula: "investment", format: "currency" }
            ],
            metrics: [
                { label: { en: "ROI %", de: "ROI %", es: "ROI %" }, formula: "(((investment / entryPrice) * exitPrice) - investment - fees) / investment", format: "percent" },
                { label: { en: "Multiplier (x)", de: "Multiplikator (x)", es: "Multiplicador (x)" }, formula: "(((investment / entryPrice) * exitPrice) - fees) / investment", format: "number" }
            ]
        }
    }
};
