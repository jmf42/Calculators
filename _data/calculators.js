// All calculator configurations with multi-language support
module.exports = {
    mortgage: {
        slugs: {
            en: "mortgage-calculator",
            es: "calculadora-hipoteca",
            de: "hypothekenrechner",
            fr: "calculateur-hypotheque",
            pt: "calculadora-hipoteca",
            it: "calcolatore-mutuo",
            nl: "hypotheek-calculator",
            pl: "kalkulator-hipoteczny",
            sv: "bolanekalkylator",
            no: "boliglan-kalkulator",
            da: "boliglan-beregner",
            fi: "asuntolainalaskuri"
        },
        titles: {
            en: "Online Mortgage Calculator 2026 - Free & Accurate",
            es: "Calculadora de Hipoteca Online 2026 - Gratis y Precisa",
            de: "Online Hypothekenrechner 2026 - Kostenlos & Genau",
            fr: "Calculateur Hypothèque en Ligne 2026 - Gratuit & Précis",
            pt: "Calculadora de Hipoteca Online 2026 - Grátis e Precisa",
            it: "Calcolatore Mutuo Online 2026 - Gratuito e Preciso",
            nl: "Online Hypotheek Calculator 2026 - Gratis & Nauwkeurig",
            pl: "Kalkulator Hipoteczny Online 2026 - Darmowy i Dokładny",
            sv: "Bolånekalkylator Online 2026 - Gratis & Exakt",
            no: "Boliglånskalkulator Online 2026 - Gratis og Nøyaktig",
            da: "Boliglånsberegner Online 2026 - Gratis & Præcis",
            fi: "Asuntolainalaskuri 2026 - Ilmainen & Tarkka"
        },
        subtitles: {
            en: "Calculate your monthly mortgage payment with taxes, insurance & HOA",
            es: "Calcula tu pago mensual con impuestos, seguro y gastos comunes",
            de: "Berechnen Sie Ihre monatliche Rate mit Steuern, Versicherung & Hausgeld",
            fr: "Calculez votre mensualité avec taxes, assurance et charges",
            pt: "Calcule sua parcela com impostos, seguro e condomínio",
            it: "Calcola la rata mensile con tasse, assicurazione e spese condominiali",
            nl: "Bereken uw maandelijkse hypotheeklasten inclusief belastingen en verzekeringen",
            pl: "Oblicz miesięczną ratę kredytu z podatkami i ubezpieczeniem",
            sv: "Beräkna din månadskostnad med skatt, försäkring och avgifter",
            no: "Beregn månedlige betalinger med skatter, forsikring og fellesutgifter",
            da: "Beregn månedlige ydelser inkl. skat og forsikring",
            fi: "Laske kuukausierä sisältäen verot ja vakuutukset"
        },
        metaDescriptions: {
            en: "Best free mortgage calculator 2026. Calculate monthly payments including principal, interest, taxes, home insurance, and HOA fees. View amortization.",
            es: "Mejor calculadora de hipoteca gratis 2026. Calcula pagos mensuales con capital, interés, impuestos, seguro y gastos comunes (HOA).",
            de: "Bester kostenloser Hypothekenrechner 2026. Monatliche Rate berechnen inkl. Tilgung, Zinsen, Steuern, Versicherung und Hausgeld.",
            fr: "Meilleur calculateur hypothèque gratuit 2026. Calculez les mensualités avec capital, intérêts, taxes, assurance et charges de copropriété.",
            pt: "Melhor calculadora de hipoteca grátis 2026. Calcule parcelas mensais com capital, juros, impostos, seguro e condomínio.",
            it: "Calcolatore mutuo gratuito 2026. Calcola la rata mensile con tasse e assicurazione.",
            nl: "Gratis hypotheekcalculator 2026. Bereken maandlasten inclusief belastingen en verzekering.",
            pl: "Darmowy kalkulator hipoteczny 2026. Oblicz ratę z podatkami i ubezpieczeniem.",
            sv: "Gratis bolånekalkylator 2026. Beräkna månadskostnad med skatt och försäkring.",
            no: "Gratis boliglånskalkulator 2026. Beregn termingebyr med skatt og forsikring.",
            da: "Bedste gratis boliglånsberegner 2026. Beregn månedlige ydelser inkl. hovedstol, renter, skatter og forsikring.",
            fi: "Paras ilmainen asuntolainalaskuri 2026. Laske kuukausierät sisältäen pääoman, koron, verot ja vakuutukset."
        },
        config: {
            currency: { en: "USD", es: "EUR", de: "EUR", fr: "EUR", pt: "BRL", it: "EUR", nl: "EUR", pl: "PLN", sv: "SEK", no: "NOK", da: "DKK", fi: "EUR" },
            locale: { en: "en-US", es: "es-ES", de: "de-DE", fr: "fr-FR", pt: "pt-BR", it: "it-IT", nl: "nl-NL", pl: "pl-PL", sv: "sv-SE", no: "no-NO", da: "da-DK", fi: "fi-FI" },
            fields: [
                { id: "price", type: "number", label: { en: "Home Price", es: "Precio de la Casa", de: "Hauspreis", fr: "Prix du Bien", pt: "Preço do Imóvel", it: "Prezzo Casa", nl: "Huisprijs", pl: "Cena Nieruchomości", sv: "Bostadspris", no: "Boligpris", da: "Boligens Pris", fi: "Asunnon Hinta" }, default: 350000, min: 50000, max: 10000000, step: 5000, help: { en: "The total purchase price of the home", es: "El precio total de compra de la casa", de: "Der Gesamtkaufpreis des Hauses" } },
                { id: "down", type: "number", label: { en: "Down Payment", es: "Pago Inicial", de: "Anzahlung", fr: "Apport", pt: "Entrada", it: "Anticipo", nl: "Aanbetaling", pl: "Wpłata Własna", sv: "Kontantinsats", no: "Egenkapital", da: "Udbetaling", fi: "Käsiraha" }, default: 70000, min: 0, max: 1000000, step: 1000, help: { en: "Amount paid upfront. 20% or more avoids PMI.", es: "Monto pagado por adelantado. 20% o más evita PMI.", de: "Vorab gezahlter Betrag. 20% oder mehr vermeidet PMI." } },
                { id: "rate", type: "number", label: { en: "Interest Rate (%)", es: "Tasa de Interés (%)", de: "Zinssatz (%)", fr: "Taux d'Intérêt (%)", pt: "Taxa de Juros (%)", it: "Tasso Interesse (%)", nl: "Rente (%)", pl: "Oprocentowanie (%)", sv: "Ränta (%)", no: "Rente (%)", da: "Rente (%)", fi: "Korko (%)" }, default: 6.8, min: 0.1, max: 15, step: 0.1, help: { en: "Annual interest rate from your lender", es: "Tasa de interés anual de tu prestamista", de: "Jährlicher Zinssatz Ihres Kreditgebers" } },
                {
                    id: "years", type: "select", label: { en: "Loan Term", es: "Plazo", de: "Laufzeit", fr: "Durée", pt: "Prazo", it: "Durata", nl: "Looptijd", pl: "Okres", sv: "Löptid", no: "Løpetid", da: "Løbetid", fi: "Laina-aika" }, default: 30, options: [
                        { value: 15, label: { en: "15 Years", es: "15 Años", de: "15 Jahre", fr: "15 Ans", pt: "15 Anos", it: "15 Anni", nl: "15 Jaar", pl: "15 Lat", sv: "15 År", no: "15 År", da: "15 År", fi: "15 Vuotta" } },
                        { value: 20, label: { en: "20 Years", es: "20 Años", de: "20 Jahre", fr: "20 Ans", pt: "20 Anos", it: "20 Anni", nl: "20 Jaar", pl: "20 Lat", sv: "20 År", no: "20 År", da: "20 År", fi: "20 Vuotta" } },
                        { value: 30, label: { en: "30 Years", es: "30 Años", de: "30 Jahre", fr: "30 Ans", pt: "30 Anos", it: "30 Anni", nl: "30 Jaar", pl: "30 Lat", sv: "30 År", no: "30 År", da: "30 År", fi: "30 Vuotta" } }
                    ]
                },
                {
                    id: "taxRate",
                    type: "number",
                    label: { en: "Property Tax Rate (%)", es: "Impuestos Propiedad (%)", de: "Grundsteuersatz (%)", fr: "Taux Taxe Foncière (%)", pt: "Taxa IPTU (%)", it: "IMU (%)", nl: "OZB (%)", pl: "Podatek (%)", sv: "Fastighetsskatt (%)", no: "Eiendomsskatt (%)", da: "Ejendomsskat (%)", fi: "Kiinteistövero (%)" },
                    default: 1.2, min: 0, max: 5, step: 0.1,
                    toggle: { target: "taxAmount", label: { en: "Switch to $", es: "Cambiar a $", de: "Wechseln zu $", fr: "Passer à $", pt: "Mudar para $", it: "Passa a $", nl: "Wissel naar $", pl: "Zmień na $", sv: "Byt till $", no: "Bytt til $", da: "Skift til $", fi: "Vaihda $:iin" } }
                },
                {
                    id: "taxAmount",
                    type: "number",
                    label: { en: "Property Tax Amount ($)", es: "Impuestos Propiedad ($)", de: "Grundsteuer ($)", fr: "Taxe Foncière ($)", pt: "IPTU ($)", it: "IMU ($)", nl: "OZB ($)", pl: "Podatek ($)", sv: "Fastighetsskatt ($)", no: "Eiendomsskatt ($)", da: "Ejendomsskat ($)", fi: "Kiinteistövero ($)" },
                    default: 4200, min: 0, max: 50000, step: 100,
                    hidden: true,
                    toggle: { target: "taxRate", label: { en: "Switch to %", es: "Cambiar a %", de: "Wechseln zu %", fr: "Passer à %", pt: "Mudar para %", it: "Passa a %", nl: "Wissel naar %", pl: "Zmień na %", sv: "Byt till %", no: "Bytt til %", da: "Skift til %", fi: "Vaihda %:iin" } }
                },
                { id: "insurance", type: "number", label: { en: "Yearly Insurance", es: "Seguro Anual", de: "Jährliche Versicherung", fr: "Assurance Annuelle", pt: "Seguro Anual", it: "Assicurazione Annuale", nl: "Jaarlijkse Verzekering", pl: "Roczne Ubezpieczenie", sv: "Årlig Försäkring", no: "Årlig Forsikring", da: "Årlig Forsikring", fi: "Vuotuinen Vakuutus" }, default: 1200, min: 0, max: 10000, step: 100 },
                { id: "hoa", type: "number", label: { en: "Monthly HOA", es: "Gastos de Comunidad", de: "Hausgeld/Nebenkosten", fr: "Charges de Copropriété", pt: "Condomínio", it: "Spese Condominiali", nl: "VvE Bijdrage", pl: "Opłaty Wspólnoty", sv: "Månadsavgift", no: "Felleskostnader", da: "Ejerforeningsbidrag", fi: "Hoitovastike" }, default: 250, min: 0, max: 2000, step: 10 }
            ],
            formula: "((rate > 0) ? ((price - down) * (rate/100/12) * Math.pow(1 + rate/100/12, years*12) / (Math.pow(1 + rate/100/12, years*12) - 1)) : ((price - down) / (years * 12))) + (isActive('taxAmount') ? taxAmount/12 : (price * taxRate/100/12)) + (insurance/12) + hoa + ((down / price < 0.2) ? (price - down) * 0.0085 / 12 : 0)",
            resultLabel: { en: "Estimated Monthly Payment", es: "Pago Mensual Estimado", de: "Geschätzte Monatliche Rate", fr: "Mensualité Estimée", pt: "Pagamento Mensal Estimado", it: "Rata Mensile Stimata", nl: "Geschatte Maandelijkse Betaling", pl: "Szacowana Rata", sv: "Beräknad Månadskostnad", no: "Beregnet Månedsbeløp", da: "Estimeret Månedlig Ydelse", fi: "Arvioitu Kuukausierä" },
            breakdown: [
                { label: { en: "Principal & Interest", es: "Capital e Interés", de: "Kapital & Zinsen", fr: "Capital & Intérêts", pt: "Capital & Juros", it: "Capitale & Interessi", nl: "Aflossing & Rente", pl: "Kapitał i Odsetki", sv: "Amortering & Ränta", no: "Avdrag og Renter", da: "Afdrag & Renter", fi: "Lyhennys & Korot" }, formula: "(rate > 0) ? ((price - down) * (rate/100/12) * Math.pow(1 + rate/100/12, years*12) / (Math.pow(1 + rate/100/12, years*12) - 1)) : ((price - down) / (years * 12))" },
                { label: { en: "Property Tax", es: "Impuesto Predial", de: "Grundsteuer", fr: "Taxe Foncière", pt: "IPTU", it: "Tasso Proprietà", nl: "OZB", pl: "Podatek", sv: "Fastighetsskatt", no: "Eiendomsskatt", da: "Ejendomsskat", fi: "Kiinteistövero" }, formula: "isActive('taxAmount') ? taxAmount/12 : (price * taxRate/100/12)" },
                { label: { en: "Home Insurance", es: "Seguro de Vivienda", de: "Wohngebäudeversicherung", fr: "Assurance Habitation", pt: "Seguro Residencial", it: "Assicurazione Casa", nl: "Opstalverzekering", pl: "Ubezpieczenie Domu", sv: "Hemförsäkring", no: "Boligforsikring", da: "Husforsikring", fi: "Kotivakuutus" }, formula: "insurance/12" },
                { label: { en: "HOA Fees", es: "Gastos Comunes", de: "Hausgeld", fr: "Charges", pt: "Condomínio", it: "Spese Condominiali", nl: "VvE Kosten", pl: "Czynsz/Opłaty", sv: "Avgift (BRF)", no: "Fellesutgifter", da: "Ejerforening (HOA)", fi: "Hoitovastike" }, formula: "hoa" },
                { label: { en: "PMI (Est.)", es: "PMI (Est.)", de: "PMI (Gesch.)", fr: "PMI (Est.)", pt: "PMI (Est.)", it: "PMI (Stima)", nl: "Hypotheekgarantie", pl: "Ubezpieczenie", sv: "Bolåneförsäkring", no: "Boliglånsforsikring", da: "Boliglånsforsikring", fi: "Lainatakaus" }, formula: "(down / price < 0.2) ? (price - down) * 0.0085 / 12 : 0", tooltip: { en: "Private Mortgage Insurance (~0.85% annual) is required when down payment is less than 20%. It protects the lender if you default.", es: "El seguro hipotecario privado (~0.85% anual) se requiere cuando el pago inicial es menor al 20%.", de: "Private Hypothekenversicherung (~0.85% jährlich) ist erforderlich wenn Anzahlung unter 20% liegt.", fr: "L'assurance hypothécaire privée (~0.85% annuel) est requise si l'apport est inférieur à 20%.", pt: "O seguro hipotecário privado (~0.85% anual) é exigido quando a entrada é inferior a 20%." } }
            ],
            proFeatures: {
                pdf: true,
                pdfLabel: { en: "Get Your Pre-Qualification Report", es: "Obtener Tu Informe de Pre-Calificación", de: "Ihr Vorqualifizierungsbericht", fr: "Obtenez Votre Rapport de Pré-Qualification", pt: "Obter Seu Relatório de Pré-Qualificação", it: "Ottieni il Tuo Rapporto", nl: "Krijg uw Rapport", pl: "Pobierz Raport", sv: "Få din Rapport", no: "Få din Rapport" }
            },
            notices: [
                {
                    message: {
                        en: "⚠️ Down payment is less than 20%. Private Mortgage Insurance (PMI) likely applies.",
                        es: "⚠️ Pago inicial menor al 20%. Probablemente aplique seguro hipotecario (PMI).",
                        de: "⚠️ Anzahlung unter 20%. Private Hypothekenversicherung fällt wahrscheinlich an.",
                        fr: "⚠️ Apport inférieur à 20%. L'assurance hypothécaire privée s'appliquera probablement.",
                        pt: "⚠️ Entrada inferior a 20%. Seguro hipotecario privado provavelmente se aplica.",
                        it: "⚠️ Anticipo < 20%. Probabile assicurazione mutuo privata.",
                        nl: "⚠️ Aanbetaling < 20%. Hypotheekverzekering waarschijnlijk van toepassing.",
                        pl: "⚠️ Wkład własny < 20%. Prawdopodobne ubezpieczenie niskiego wkładu.",
                        sv: "⚠️ Kontantinsats < 20%. Bolåneförsäkring kan tillkomma.",
                        no: "⚠️ Egenkapital < 20%. Boliglånsforsikring gjelder sannsynligvis."
                    },
                    condition: "down / price < 0.2",
                    type: "warning"
                },
                {
                    message: {
                        en: "💡 This estimate includes property taxes and insurance based on national averages.",
                        es: "💡 Esta estimación incluye impuestos y seguro basados en promedios nacionales.",
                        de: "💡 Diese Schätzung enthält Steuern und Versicherung basierend auf Durchschnittswerten.",
                        fr: "💡 Cette estimation inclut les taxes et l'assurance basées sur des moyennes nationales.",
                        pt: "💡 Esta estimativa inclui impostos e seguros baseados em médias nacionais.",
                        it: "💡 Stima con tasse e assicurazione su medie nazionali.",
                        nl: "💡 Schatting incl. belastingen en verzekering op basis van gemiddelden.",
                        pl: "💡 Szacunek obejmuje podatki i ubezpieczenie wg średnich krajowych.",
                        sv: "💡 Uppskattning inkl. skatt och försäkring baserat på snitt.",
                        no: "💡 Estimat inkl. skatt og forsikring basert på snitt."
                    },
                    type: "info"
                }
            ],
            content: {
                en: "<h2>How to Use This Mortgage Calculator in {{location}}</h2><p>Planning your home purchase in {{location}} begins with understanding your monthly obligations. Our 2026 mortgage calculator helps you estimate principal and interest payments for homes in {{city}}, while also accounting for {{state}} property taxes, homeowners insurance, and HOA fees.</p><h3>Key Factors in Your {{city}} Payment</h3><ul><li><strong>Principal & Interest:</strong> The core cost of borrowing.</li><li><strong>{{state}} Property Tax:</strong> Local taxes often bundled into your monthly payment via escrow.</li><li><strong>Home Insurance:</strong> Protection for your investment in {{city}}, required by most lenders.</li><li><strong>HOA Fees:</strong> Monthly costs for maintained communities.</li></ul>",
                es: "<h2>Cómo Usar Esta Calculadora de Hipoteca</h2><p>Planear la compra de tu casa comienza con entender tus obligaciones mensuales. Nuestra calculadora de hipoteca 2026 te ayuda a estimar los pagos de capital e interés, teniendo en cuenta impuestos, seguros y gastos comunes.</p>",
                de: "<h2>So nutzen Sie diesen Hypothekenrechner</h2><p>Die Planung Ihres Hauskaufs beginnt mit dem Verständnis Ihrer monatlichen Verpflichtungen. Unser Hypothekenrechner hilft Ihnen bei der Einschätzung.</p>",
                fr: "<h2>Comment utiliser ce calculateur d'hypothèque</h2><p>La planification de l'achat de votre maison commence par la compréhension de vos obligations mensuelles.</p>",
                pt: "<h2>Como usar esta calculadora de hipoteca</h2><p>Planejar a compra da sua casa começa com a compreensão das suas obrigações mensais.</p>",
                it: "<h2>Come usare questo calcolatore del mutuo</h2><p>Pianificare l'acquisto della tua casa inizia con la comprensione dei tuoi impegni mensili. Il nostro calcolatore ti aiuta a stimare le rate di capitale e interessi.</p>",
                nl: "<h2>Hoe u deze hypotheekcalculator gebruikt</h2><p>Het plannen van de aankoop van uw huis begint met inzicht in uw maandelijkse verplichtingen. Onze calculator helpt u bij het inschatten van de betalingen.</p>",
                pl: "<h2>Jak korzystać z tego kalkulatora hipotecznego</h2><p>Planowanie zakupu domu zaczyna się od zrozumienia miesięcznych zobowiązań. Nasz kalkulator pomoże Ci oszacować raty kapitałowo-odsetkowe.</p>",
                sv: "<h2>Hur du använder denna bolånekalkylator</h2><p>Att planera ditt bostadsköp börjar med att förstå dina månatliga förpliktelser. Vår kalkylator hjälper dig att uppskatta betalningar för amortering och ränta.</p>",
                no: "<h2>Hvordan du bruker denne boliglånskalkulatoren</h2><p>Planlegging av boligkjøpet starter med å forstå dine månedlige forpliktelser. Vår kalkulator hjelper deg med å estimere avdrag og renter.</p>",
                da: "<h2>Sådan bruger du denne boliglånsberegner</h2><p>Planlægning af dit boligkøb starter med at forstå dine månedlige forpligtelser. Vores beregner hjælper dig med at estimere afdrag og renter.</p>",
                fi: "<h2>Miten käytät tätä asuntolainalaskuria</h2><p>Asunnon oston suunnittelu alkaa kuukausittaisten velvoitteiden ymmärtämisestä. Laskurimme auttaa sinua arvioimaan lyhennyksiä ja korkoja.</p>"
            }
        },
        faqs: {
            en: [
                { q: "How is the monthly mortgage payment calculated?", a: "The monthly payment is calculated using the standard amortization formula, considering loan amount, interest rate, and term. Our calculator also adds property tax (est. 1% annual), home insurance (est. 0.5% annual), and HOA fees." },
                { q: "What should my down payment be?", a: "A 20% down payment is standard to avoid Private Mortgage Insurance (PMI). However, many lenders accept as little as 3-3.5% for conventional or FHA loans." },
                { q: "What are HOA fees?", a: "Homeowners Association (HOA) fees are monthly payments for community amenities and maintenance in condos or planned communities. They are added on top of your mortgage payment." }
            ],
            de: [
                { q: "Wie berechnet sich die monatliche Rate?", a: "Die Rate wird mit der Annuitätenformel aus Kreditsumme, Zins und Laufzeit berechnet. Unser Rechner addiert Grundsteuer (ca. 1%), Versicherung (ca. 0,5%) und Hausgeld." },
                { q: "Wie hoch sollte die Anzahlung sein?", a: "Üblich sind mindestens 20% Eigenkapital, um bessere Zinskonditionen zu erhalten und eine Restschuldversicherung zu vermeiden." },
                { q: "Was ist das Hausgeld?", a: "Hausgeld sind monatliche Vorauszahlungen an die Eigentümergemeinschaft für Instandhaltung und Betriebskosten, die zusätzlich zur Kreditrate anfallen." }
            ],
            es: [
                { q: "¿Cómo se calcula el pago mensual?", a: "El pago se calcula con la fórmula de amortización estándar. Nuestra calculadora suma impuesto predial (est. 1%), seguro (est. 0.5%) y gastos comunes." },
                { q: "¿Cuál debería ser mi pago inicial?", a: "Se recomienda un 20% para evitar el seguro hipotecario privado (PMI) y obtener mejores tasas." },
                { q: "¿Qué son los gastos comunes (HOA)?", a: "Son pagos mensuales para el mantenimiento de áreas comunes en condominios, que se suman a tu dividendo." }
            ],
            fr: [
                { q: "Comment est calculée la mensualité?", a: "Elle est calculée selon la formule d'amortissement standard. Notre calculateur ajoute la taxe foncière (est. 1%), l'assurance (est. 0.5%) et les charges." },
                { q: "Quel apport personnel prévoir?", a: "Un apport de 20% est idéal pour obtenir un meilleur taux et éviter l'assurance prêt hypothécaire." },
                { q: "Que sont les charges de copropriété?", a: "Ce sont les frais mensuels pour l'entretien des parties communes, à payer en plus du remboursement du prêt." }
            ],
            pt: [
                { q: "Como a parcela é calculada?", a: "Usamos a fórmula de amortização padrão. Nossa calculadora adiciona IPTU (est. 1%), seguro (est. 0.5%) e condomínio." },
                { q: "Qual deve ser o valor da entrada?", a: "Recomenda-se 20% para evitar seguros adicionais e conseguir melhores taxas de juros." },
                { q: "O que é a taxa de condomínio?", a: "São pagamentos mensais para manutenção de áreas comuns, somados à prestação do financiamento." }
            ],
            it: [
                { q: "Come si calcola la rata mensile del mutuo?", a: "La rata mensile è calcolata usando la formula di ammortamento standard, considerando l'importo del prestito, il tasso di interesse e la durata. Il nostro calcolatore aggiunge anche l'imposta sulla proprietà (stima 1% annuo), l'assicurazione sulla casa (stima 0.5% annuo) e le spese condominiali." },
                { q: "Quale dovrebbe essere il mio anticipo?", a: "Un anticipo del 20% è standard per evitare l'Assicurazione Ipotecaria Privata (PMI). Tuttavia, molti prestatori accettano anche il 3-3.5% per prestiti convenzionali o FHA." },
                { q: "Cosa sono le spese condominiali (HOA)?", a: "Le spese condominiali (Homeowners Association - HOA) sono pagamenti mensili per i servizi e la manutenzione delle aree comuni in condomini o comunità pianificate. Vengono aggiunte al pagamento del mutuo." }
            ],
            nl: [
                { q: "Hoe wordt de maandelijkse hypotheekbetaling berekend?", a: "De maandelijkse betaling wordt berekend met de standaard aflossingsformule, rekening houdend met het geleende bedrag, de rentevoet en de looptijd. Onze calculator voegt ook onroerendgoedbelasting (geschat 1% jaarlijks), woonverzekering (geschat 0.5% jaarlijks) en VvE-kosten toe." },
                { q: "Wat moet mijn aanbetaling zijn?", a: "Een aanbetaling van 20% is standaard om Private Hypotheekverzekering (PMI) te vermijden. Veel kredietverstrekkers accepteren echter zo weinig als 3-3.5% voor conventionele of FHA-leningen." },
                { q: "Wat zijn VvE-kosten?", a: "Vereniging van Eigenaren (VvE) kosten zijn maandelijkse betalingen voor gemeenschappelijke voorzieningen en onderhoud in appartementencomplexen of geplande gemeenschappen. Ze worden bovenop uw hypotheekbetaling toegevoegd." }
            ],
            pl: [
                { q: "Jak obliczana jest miesięczna rata kredytu hipotecznego?", a: "Miesięczna rata jest obliczana przy użyciu standardowej formuły amortyzacji, uwzględniającej kwotę kredytu, oprocentowanie i okres kredytowania. Nasz kalkulator dodaje również podatek od nieruchomości (szac. 1% rocznie), ubezpieczenie domu (szac. 0.5% rocznie) i opłaty wspólnoty mieszkaniowej (HOA)." },
                { q: "Jaka powinna być moja wpłata własna?", a: "Wpłata własna w wysokości 20% jest standardem, aby uniknąć Prywatnego Ubezpieczenia Hipotecznego (PMI). Jednak wielu kredytodawców akceptuje już 3-3.5% dla kredytów konwencjonalnych lub FHA." },
                { q: "Czym są opłaty HOA?", a: "Opłaty wspólnoty mieszkaniowej (HOA) to miesięczne płatności za udogodnienia i utrzymanie wspólnych obszarów w kondominiach lub zaplanowanych osiedlach. Są one dodawane do raty kredytu hipotecznego." }
            ],
            sv: [
                { q: "Hur beräknas den månatliga bolånebetalningen?", a: "Den månatliga betalningen beräknas med standardamorteringsformeln, med hänsyn till lånebelopp, räntesats och löptid. Vår kalkylator lägger även till fastighetsskatt (uppskattningsvis 1% årligen), hemförsäkring (uppskattningsvis 0.5% årligen) och HOA-avgifter." },
                { q: "Hur stor bör min kontantinsats vara?", a: "En kontantinsats på 20% är standard för att undvika privat bolåneförsäkring (PMI). Många långivare accepterar dock så lite som 3-3.5% för konventionella lån eller FHA-lån." },
                { q: "Vad är HOA-avgifter?", a: "Homeowners Association (HOA) avgifter är månatliga betalningar för gemensamma bekvämligheter och underhåll i bostadsrätter eller planerade samhällen. De läggs ovanpå din bolånebetalning." }
            ],
            no: [
                { q: "Hvordan beregnes den månedlige boliglånsbetalingen?", a: "Den månedlige betalingen beregnes ved hjelp av standard amortiseringsformel, med tanke på lånebeløp, rentesats og løpetid. Kalkulatoren vår legger også til eiendomsskatt (anslått 1% årlig), boligforsikring (anslått 0.5% årlig) og fellesutgifter (HOA)." },
                { q: "Hva bør egenkapitalen min være?", a: "En egenkapital på 20% er standard for å unngå privat boliglånsforsikring (PMI). Imidlertid aksepterer mange långivere så lite som 3-3.5% for konvensjonelle lån eller FHA-lån." },
                { q: "Hva er fellesutgifter (HOA)?", a: "Fellesutgifter (Homeowners Association - HOA) er månedlige betalinger for felles fasiliteter og vedlikehold i borettslag eller planlagte samfunn. De legges til boliglånsbetalingen din." }
            ],
            da: [
                { q: "Hvordan beregnes den månedlige boliglånsbetaling?", a: "Den månedlige betaling beregnes ved hjælp af standard amortiseringsformlen, der tager højde for lånebeløb, rentesats og løbetid. Vores beregner inkluderer også ejendomsskat (anslået 1% årligt), husforsikring (anslået 0.5% årligt) og HOA-gebyrer." },
                { q: "Hvad skal min udbetaling være?", a: "En udbetaling på 20% er standard for at undgå privat panteforsikring (PMI). Mange långivere accepterer dog så lidt som 3-3.5% for konventionelle lån eller FHA-lån." },
                { q: "Hvad er HOA-gebyrer?", a: "Homeowners Association (HOA) gebyrer er månedlige betalinger for fælles faciliteter og vedligeholdelse i ejerlejligheder eller planlagte samfund. De lægges oven i din boliglånsbetaling." }
            ],
            fi: [
                { q: "Miten kuukausittainen asuntolainan maksu lasketaan?", a: "Kuukausimaksu lasketaan käyttäen standardia lyhennyskaavaa, ottaen huomioon lainasumman, koron ja laina-ajan. Laskurimme lisää myös kiinteistöveron (arvio 1% vuodessa), kotivakuutuksen (arvio 0.5% vuodessa) ja yhtiövastikkeet (HOA)." },
                { q: "Mikä pitäisi olla käsirahani?", a: "20% käsiraha on standardi yksityisen asuntolainavakuutuksen (PMI) välttämiseksi. Monet lainanantajat hyväksyvät kuitenkin niinkin pienen kuin 3-3.5% tavanomaisissa tai FHA-lainoissa." },
                { q: "Mitä ovat HOA-maksut?", a: "Asunto-osakeyhtiön (HOA) maksut ovat kuukausittaisia maksuja yhteisön mukavuuksista ja ylläpidosta asunnoissa tai suunnitelluissa yhteisöissä. Ne lisätään asuntolainan maksuun." }
            ]
        }
    },

    loan: {
        slugs: {
            en: "loan-calculator", es: "calculadora-prestamo", de: "kreditrechner", fr: "calculateur-pret", pt: "calculadora-emprestimo", it: "calcolatore-prestiti", nl: "lening-calculator", pl: "kalkulator-kredytowy",
            sv: "lånekalkylator",
            no: "lånekalkulator",
            da: "låneberegner",
            fi: "lainalaskuri"
        },
        titles: {
            en: "Personal Loan Calculator - Amortization Schedule",
            es: "Calculadora de Préstamos Personales - Amortización",
            de: "Privatkreditvergleich & Tilgungsplan",
            fr: "Calculateur de Prêt Personnel - Tableau d'Amortissement",
            pt: "Calculadora de Empréstimo Pessoal - Tabela Price/SAC",
            it: "Calcolatore Prestiti Personali - Piano Ammortamento",
            nl: "Persoonlijke Lening Calculator - Aflossingsschema",
            pl: "Kalkulator Kredytu Gotówkowego - Harmonogram",
            sv: "Privatlånekalkylator - Amorteringsplan",
            no: "Forbrukslånskalkulator - Nedbetalingsplan",
            da: "Privatlånsberegner - Amortiseringsplan",
            fi: "Kulutusluottolaskuri - Lyhennystaulukko"
        },
        subtitles: {
            en: "Calculate monthly payments for personal loans, car loans, or credit cards",
            es: "Calcula pagos mensuales para préstamos personales, autos o tarjetas",
            de: "Monatsrate für Privatkredite, Autokredite oder Umschuldung berechnen",
            fr: "Calculez les mensualités pour prêts personnels, auto ou crédit renouvelable",
            pt: "Calcule parcelas para empréstimo pessoal, veículos ou cartão",
            it: "Calcola rate mensili per prestiti personali, auto o carte",
            nl: "Bereken maandelijkse betalingen voor leningen en kredieten",
            pl: "Oblicz raty kredytów gotówkowych i samochodowych",
            sv: "Beräkna månadskostnad för privatlån och billån",
            no: "Beregn månedlige betalinger for forbrukslån og billån",
            da: "Beregn månedlige ydelser for privatlån og billån",
            fi: "Laske kuukausierät kulutusluotoille ja autolainoille"
        },
        metaDescriptions: {
            en: "Free personal loan calculator. Compute monthly payments and total interest for any loan type. Download PDF amortization schedule.",
            es: "Calculadora de préstamos gratis. Calcula pagos mensuales e interés total. Descarga tabla de amortización en PDF.",
            de: "Kostenloser Kreditrechner. Berechnen Sie Rate und Zinsen für alle Kreditarten. Tilgungsplan als PDF.",
            fr: "Calculateur de prêt gratuit. Calculez mensualités et intérêts totaux. Tableau d'amortissement PDF téléchargeable.",
            pt: "Calculadora de empréstimo grátis. Calcule parcelas e juros totais. Baixe tabela de amortização em PDF.",
            it: "Calcolatore gratuito di prestiti personali. Calcola rate mensili e interessi totali.",
            nl: "Gratis persoonlijke lening calculator. Bereken maandelijkse betalingen en totale rente.",
            pl: "Darmowy kalkulator kredytowy. Oblicz raty miesięczne i całkowite odsetki.",
            sv: "Gratis lånekalkylator. Beräkna månadskostnad och total ränta.",
            no: "Gratis lånekalkulator. Beregn månedsbeløp og totale renter.",
            da: "Gratis låneberegner. Beregn månedlige ydelser og samlede renter. Download amortiseringsplan som PDF.",
            fi: "Ilmainen lainalaskuri. Laske kuukausierät ja kokonaiskorko. Lataa lyhennystaulukko PDF-muodossa."
        },
        config: {
            currency: { en: "USD", es: "EUR", de: "EUR", fr: "EUR", pt: "BRL", it: "EUR", nl: "NLN", pl: "PLN", sv: "SEK", no: "NOK", da: "DKK", fi: "EUR" },
            locale: { en: "en-US", es: "es-ES", de: "de-DE", fr: "fr-FR", pt: "pt-BR", it: "it-IT", nl: "nl-NL", pl: "pl-PL", sv: "sv-SE", no: "no-NO", da: "da-DK", fi: "fi-FI" },
            fields: [
                { id: "amount", type: "number", label: { en: "Loan Amount", es: "Monto del Préstamo", de: "Kreditbetrag", fr: "Montant du Prêt", pt: "Valor do Empréstimo", it: "Importo Prestito", nl: "Leenbedrag", pl: "Kwota Kredytu", sv: "Lånebelopp", no: "Lånebeløp", da: "Lånebeløb", fi: "Lainasumma" }, default: 15000, min: 1000, max: 1000000, step: 1000, help: { en: "The total amount you want to borrow", es: "El monto total que deseas pedir prestado", de: "Der Gesamtbetrag, den Sie leihen möchten" } },
                { id: "rate", type: "number", label: { en: "Interest Rate (%)", es: "Tasa de Interés (%)", de: "Effektiver Jahreszins (%)", fr: "Taux Annuel (%)", pt: "Taxa de Juros (%)", it: "Tasso (%)", nl: "Rente (%)", pl: "Oprocentowanie (%)", sv: "Ränta (%)", no: "Rente (%)", da: "Rente (%)", fi: "Korko (%)" }, default: 9.5, min: 0.1, max: 30, step: 0.1, help: { en: "Annual Percentage Rate (APR) from your lender", es: "Tasa de Porcentaje Anual (APR) de tu prestamista", de: "Effektiver Jahreszins von Ihrem Kreditgeber" } },
                { id: "months", type: "number", label: { en: "Loan Term (Months)", es: "Plazo (Meses)", de: "Laufzeit (Monate)", fr: "Durée (Mois)", pt: "Prazo (Meses)", it: "Durata (Mesi)", nl: "Looptijd (Maanden)", pl: "Okres (Miesiące)", sv: "Löptid (Månader)", no: "Løpetid (Måneder)", da: "Løbetid (Måneder)", fi: "Laina-aika (kk)" }, default: 36, min: 6, max: 120, step: 6, help: { en: "How many months to repay the loan", es: "Cuántos meses para pagar el préstamo", de: "Wie viele Monate zur Rückzahlung" } }
            ],
            formula: "rate > 0 ? amount * (rate/100/12) * Math.pow(1 + rate/100/12, months) / (Math.pow(1 + rate/100/12, months) - 1) : amount / months",
            resultLabel: { en: "Monthly Payment", es: "Pago Mensual", de: "Monatliche Rate", fr: "Mensualité", pt: "Parcela Mensal", it: "Rata Mensile", nl: "Maandelijkse Betaling", pl: "Miesięczna Rata", sv: "Månadskostnad", no: "Månedsbeløp", da: "Månedlig Ydelse", fi: "Kuukausierä" },
            breakdown: [
                { label: { en: "Total Interest", es: "Interés Total", de: "Gesamtzinsen", fr: "Intérêts Totaux", pt: "Juros Totais", it: "Interessi Totali", nl: "Totale Rente", pl: "Całkowite Odsetki", sv: "Total Ränta", no: "Total Rente", da: "Samlede Renter", fi: "Kokonaiskorko" }, formula: "(result * months) - amount", tooltip: { en: "Total interest paid over the life of the loan", es: "Interés total pagado durante la vida del préstamo", de: "Gezahlte Gesamtzinsen" } },
                { label: { en: "Total Repayment", es: "Pago Total", de: "Gesamtrückzahlung", fr: "Remboursement Total", pt: "Valor Total", it: "Rimborso Totale", nl: "Totale Terugbetaling", pl: "Całkowita Spłata", sv: "Total Återbetalning", no: "Total Tilbakebetaling", da: "Samlet Tilbagebetaling", fi: "Takaisinmaksu Yhteensä" }, formula: "result * months" },
                { label: { en: "Interest Cost Ratio", es: "Ratio de Costo de Interés", de: "Zinskostenquote", fr: "Ratio du Coût des Intérêts", pt: "Ratio de Custo de Juros", it: "Rapporto Costo Interessi", nl: "Rentekostenratio", pl: "Wskaźnik Kosztu Odsetek", sv: "Räntekostnadskvot", no: "Rentekostnadsforhold", da: "Renteomkostningsforhold", fi: "Korkokustannussuhde" }, formula: "(((result * months) - amount) / amount) * 100", tooltip: { en: "Percentage of the loan amount paid as interest", es: "Porcentaje del monto del préstamo pagado como interés", de: "Prozentsatz des Darlehensbetrags als Zinsen" } }
            ]
        },
        faqs: {
            en: [{ q: "What types of loans can I calculate?", a: "This calculator works for personal loans, auto loans, and any fixed-rate installment loan." }],
            de: [{ q: "Für welche Kredite funktioniert der Rechner?", a: "Dieser Rechner funktioniert für Ratenkredite, Autokredite und Konsumentenkredite." }],
            es: [{ q: "¿Para qué tipos de préstamos sirve?", a: "Esta calculadora funciona para préstamos personales, de auto y cualquier préstamo a tasa fija." }],
            fr: [{ q: "Para qué tipos de préstamos?", a: "Ce calculateur fonctionne pour les prêts personnels, auto et tout prêt à taux fixe." }],
            pt: [{ q: "Para quais tipos de empréstimos?", a: "Esta calculadora funciona para empréstimos pessoais, de veículos e qualquer crédito com taxa fixa." }],
            it: [{ q: "Che tipi di prestito posso calcolare?", a: "Questo calcolatore funziona per prestiti personali, auto e qualsiasi prestito rateale a tasso fisso." }],
            nl: [{ q: "Welke soorten leningen kan ik berekenen?", a: "Deze calculator werkt voor persoonlijke leningen, autoleningen en elke lening met een vaste rente." }],
            pl: [{ q: "Jakie rodzaje kredytów mogę obliczyć?", a: "Ten kalkulator działa dla kredytów gotówkowych, samochodowych i wszelkich kredytów ratalnych o stałym oprocentowaniu." }],
            sv: [{ q: "Vilka typer av lån kan jag beräkna?", a: "Denna kalkylator fungerar för privatlån, billån och alla typer av avbetalningslån med fast ränta." }],
            no: [{ q: "Hvilke typer lån kan jeg beregne?", a: "Denne kalkulatoren fungerer for forbrukslån, billån og alle typer avbetalingslån med fast rente." }],
            da: [{ q: "Hvilke typer lån kan jeg beregne?", a: "Denne beregner fungerer til privatlån, billån og ethvert fastforrentet afbetalingslån." }],
            fi: [{ q: "Mitä lainoja voin laskea?", a: "Tämä laskuri sopii kulutusluotoille, autolainoille ja kaikille kiinteäkorkoisille osamaksuerille." }]
        }
    },

    roi: {
        slugs: {
            en: "roi-calculator", es: "calculadora-roi", de: "roi-rechner", fr: "calculateur-roi", pt: "calculadora-roi", it: "calcolatore-roi", nl: "roi-calculator", pl: "kalkulator-roi",
            sv: "roi-kalkylator",
            no: "roi-kalkulator",
            da: "roi-beregner",
            fi: "roi-laskuri"
        },
        titles: {
            en: "ROI Calculator - Marketing & Business Investment",
            es: "Calculadora de ROI - Marketing e Inversiones",
            de: "ROI Rechner - Marketing & Investitionen",
            fr: "Calculateur de ROI - Marketing & Investissement",
            pt: "Calculadora de ROI - Marketing e Investimentos",
            it: "Calcolatore ROI - Marketing & Investimenti",
            nl: "ROI Calculator - Marketing & Investeringen",
            pl: "Kalkulator ROI - Marketing i Inwestycje",
            sv: "ROI Kalkylator - Marknadsföring & Investering",
            no: "ROI Kalkulator - Markedsføring og Investering",
            da: "ROI Beregner - Marketing & Investering",
            fi: "ROI Laskuri - Markkinointi & Sijoitukset"
        },
        subtitles: {
            en: "Instant Return on Investment calculation for campaigns and projects",
            es: "Cálculo instantáneo de Retorno de Inversión para campañas",
            de: "Berechnen Sie den Return on Investment für Kampagnen",
            fr: "Calcul instantané du Retour sur Investissement",
            pt: "Cálculo instantâneo de Retorno sobre Investimento",
            it: "Calcolo istantaneo Ritorno sull'Investimento",
            nl: "Directe Return on Investment berekening",
            pl: "Natychmiastowe obliczenie zwrotu z inwestycji",
            sv: "Direkt beräkning av avkastning på investering",
            no: "Øyeblikkelig beregning av avkastning på investering",
            da: "Øjeblikkelig beregning af investeringsafkast",
            fi: "Välitön sijoitetun pääoman tuoton laskenta"
        },
        metaDescriptions: {
            en: "Free ROI calculator. Calculate ROI (Return on Investment) instantly. Simple tool for marketing campaigns, business projects, and real estate investments.",
            es: "Calculadora de préstamos gratis. Calcula el ROI (Retorno de Inversión) al instante. Herramienta simple para campañas de marketing y proyectos.",
            de: "Kostenloser Kreditrechner. ROI (Return on Investment) einfach berechnen. Tool für Marketingkampagnen und Business-Projekte.",
            fr: "Calculateur de prêt gratuit. Calculez le ROI instantanément. Outil simple pour campagnes marketing et projets d'entreprise.",
            pt: "Calculadora de empréstimo grátis. Calcule o ROI (Retorno sobre Investimento) instantaneamente. Ferramenta para marketing e negócios.",
            it: "Calcolatore ROI gratuito. Calcola il ritorno sull'investimento istantaneamente.",
            nl: "Gratis ROI calculator. Bereken direct uw Return on Investment.",
            pl: "Darmowy kalkulator ROI. Oblicz zwrot z inwestycji natychmiast.",
            sv: "Gratis ROI-kalkylator. Beräkna avkastning på investering direkt.",
            no: "Gratis ROI-kalkulator. Beregn avkastning på investering umiddelbart.",
            da: "Gratis låneberegner. Beregn ROI (Return on Investment) øjeblikkeligt. Simpelt værktøj til marketingkampagner og forretningsprojekter.",
            fi: "Ilmainen lainalaskuri. Laske ROI (sijoitetun pääoman tuotto) välittömästi. Yksinkertainen työkalu markkinointikampanjoihin ja yritysprojekteihin."
        },
        config: {
            currency: { en: "USD", es: "EUR", de: "EUR", fr: "EUR", pt: "BRL", it: "EUR", nl: "EUR", pl: "PLN", sv: "SEK", no: "NOK", da: "DKK", fi: "EUR" },
            locale: { en: "en-US", es: "es-ES", de: "de-DE", fr: "fr-FR", pt: "pt-BR", it: "it-IT", nl: "nl-NL", pl: "pl-PL", sv: "sv-SE", no: "no-NO", da: "da-DK", fi: "fi-FI" },
            fields: [
                { id: "invested", type: "number", label: { en: "Amount Invested", es: "Monto Invertido", de: "Investierter Betrag", fr: "Montant du Prêt", pt: "Valor do Empréstimo", it: "Importo Investito", nl: "Geïnvesteerd Bedrag", pl: "Zainwestowana Kwota", sv: "Investerat Belopp", no: "Investert Beløp", da: "Investeret Beløb", fi: "Sijoitettu Summa" }, default: 5000, min: 100, max: 10000000, step: 100 },
                { id: "returned", type: "number", label: { en: "Amount Returned", es: "Monto Retornado", de: "Rückfluss (Umsatz)", fr: "Montant Retourné", pt: "Valor Retornado", it: "Ritorno Totale", nl: "Opbrengst", pl: "Zwrot Ogółem", sv: "Återbetalt Belopp", no: "Beløp Returnert", da: "Returneret Beløb", fi: "Tuotto Yhteensä" }, default: 12000, min: 0, max: 100000000, step: 100 }
            ],
            formula: "((returned - invested) / invested) * 100",
            resultLabel: { en: "ROI (%)", es: "ROI (%)", de: "ROI (%)", fr: "ROI (%)", pt: "ROI (%)", it: "ROI (%)", nl: "ROI (%)", pl: "ROI (%)", sv: "ROI (%)", no: "ROI (%)", da: "ROI (%)", fi: "ROI (%)" },
            breakdown: [
                { label: { en: "Net Profit", es: "Ganancia Neta", de: "Gewinn", fr: "Bénéfice Net", pt: "Lucro Líquido", it: "Utile Netto", nl: "Nettowinst", pl: "Zysk Netto", sv: "Nettovinst", no: "Nettofortjeneste", da: "Netto Overskud", fi: "Nettovoitto" }, formula: "returned - invested" }
            ],
            content: {
                en: "<h2>Calculate Your Return on Investment (ROI)</h2><p>Understanding the profitability of your investments is crucial for business growth. Our ROI calculator helps you quickly determine the return on various projects, from marketing campaigns to real estate.</p><h3>What is a Good ROI?</h3><p>A good ROI varies by industry and risk. Generally, an ROI above 10-15% is considered good, but some high-growth investments might aim for much higher.</p>",
                es: "<h2>Calcula tu Retorno de Inversión (ROI)</h2><p>Comprender la rentabilidad de tus inversiones es crucial para el crecimiento empresarial. Nuestra calculadora de ROI te ayuda a determinar rápidamente el retorno de varios proyectos, desde campañas de marketing hasta bienes raíces.</p>",
                de: "<h2>Berechnen Sie Ihren Return on Investment (ROI)</h2><p>Das Verständnis der Rentabilität Ihrer Investitionen ist entscheidend für das Geschäftswachstum. Unser ROI-Rechner hilft Ihnen, den Return on Investment für verschiedene Projekte schnell zu bestimmen, von Marketingkampagnen bis hin zu Immobilien.</p>",
                fr: "<h2>Calculez votre Retour sur Investissement (ROI)</h2><p>Comprendre la rentabilité de vos investissements est crucial pour la croissance de l'entreprise. Notre calculateur de ROI vous aide à déterminer rapidement le retour sur divers projets, des campagnes marketing à l'immobilier.</p>",
                pt: "<h2>Calcule seu Retorno sobre Investimento (ROI)</h2><p>Compreender a rentabilidade de seus investimentos é crucial para o crescimento dos negócios. Nossa calculadora de ROI ajuda você a determinar rapidamente o retorno de vários projetos, desde campanhas de marketing até imóveis.</p>",
                it: "<h2>Calcola il tuo Ritorno sull'Investimento (ROI)</h2><p>Comprendere la redditività dei tuoi investimenti è fondamentale per la crescita aziendale. Il nostro calcolatore ROI ti aiuta a determinare rapidamente il ritorno su vari progetti, dalle campagne di marketing agli immobili.</p>",
                nl: "<h2>Bereken uw Return on Investment (ROI)</h2><p>Het begrijpen van de winstgevendheid van uw investeringen is cruciaal voor bedrijfsgroei. Onze ROI-calculator helpt u snel de opbrengst van verschillende projecten te bepalen, van marketingcampagnes tot vastgoed.</p>",
                pl: "<h2>Oblicz swój zwrot z inwestycji (ROI)</h2><p>Zrozumienie rentowności Twoich inwestycji jest kluczowe dla rozwoju biznesu. Nasz kalkulator ROI pomaga szybko określić zwrot z różnych projektów, od kampanii marketingowych po inwestycje w nieruchomości.</p>",
                sv: "<h2>Beräkna din avkastning på investering (ROI)</h2><p>Att förstå lönsamheten i dina investeringar är avgörande för företagets tillväxt. Vår ROI-kalkylator hjälper dig att snabbt fastställa avkastningen på olika projekt.</p>",
                no: "<h2>Beregn din avkastning på investering (ROI)</h2><p>Å forstå lønnsomheten i investeringene dine er avgjørende for vekst. Vår ROI-kalkulator hjelper deg med å raskt fastslå avkastningen på ulike prosjekter.</p>",
                da: "<h2>Beregn dit investeringsafkast (ROI)</h2><p>At forstå rentabiliteten af dine investeringer er afgørende for virksomhedens vækst. Vores ROI-beregner hjælper dig med hurtigt at bestemme afkastet.</p>",
                fi: "<h2>Laske sijoitetun pääoman tuotto (ROI)</h2><p>Sijoitustesi kannattavuuden ymmärtäminen on elintärkeää liiketoiminnan kasvulle. ROI-laskurimme auttaa sinua määrittämään tuoton nopeasti.</p>"
            }
        },
        faqs: {
            en: [{ q: "What is ROI?", a: "ROI (Return on Investment) measures the profitability of an investment as a percentage of the original cost." }],
            de: [{ q: "Was ist ROI?", a: "ROI (Return on Investment) misst die Rentabilität einer Investition als Prozentsatz des eingesetzten Kapitals." }],
            es: [{ q: "¿Qué es el ROI?", a: "ROI (Retorno de Inversión) mide la rentabilidad de una inversión como porcentaje del costo original." }],
            fr: [{ q: "Qu'est-ce que le ROI?", a: "Le ROI (Retour sur Investissement) mesure la rentabilité d'un investissement en pourcentage du coût initial." }],
            pt: [{ q: "O que é ROI?", a: "ROI (Retorno sobre Investimento) mede a rentabilidade de um investimento como percentual do custo original." }],
            it: [{ q: "Cos'è il ROI?", a: "Il ROI (Ritorno sull'Investimento) misura la redditività di un investimento come percentuale del costo originale." }],
            nl: [{ q: "Wat is ROI?", a: "ROI (Return on Investment) meet de winstgevendheid van een investering als percentage van de oorspronkelijke kosten." }],
            pl: [{ q: "Co to jest ROI?", a: "ROI (zwrot z inwestycji) mierzy rentowność inwestycji jako procent pierwotnego kosztu." }],
            sv: [{ q: "Vad är ROI?", a: "ROI (avkastning på investering) mäter lönsamheten av en investering som en procentsats av den ursprungliga kostnaden." }],
            no: [{ q: "Hva er ROI?", a: "ROI (avkastning på investering) måler lønnsomheten av en investering som en prosentandel av den opprinnelige kostnaden." }],
            da: [{ q: "Hvad er ROI?", a: "ROI (Return on Investment) måler rentabiliteten af en investering som en procentdel af den oprindelige pris." }],
            fi: [{ q: "Mitä on ROI?", a: "ROI (sijoitetun pääoman tuotto) mittaa investoinnin kannattavuutta prosenttiosuutena alkuperäisestä kustannuksesta." }]
        }
    },

    wedding: {
        slugs: {
            en: "wedding-calculator", es: "calculadora-boda", de: "hochzeitsrechner", fr: "calculateur-mariage", pt: "calculadora-casamento", it: "calcolatore-matrimonio", nl: "bruiloft-calculator", pl: "kalkulator-slubny",
            sv: "brollopsbudget",
            no: "bryllupsbudsjett",
            da: "bryllupsbudget",
            fi: "haabudjetti"
        },
        titles: {
            en: "Wedding Budget Planner 2026",
            es: "Planificador de Bodas 2026",
            de: "Hochzeitsbudget-Rechner 2026",
            fr: "Budget Mariage 2026",
            pt: "Calculadora de Casamento 2026",
            it: "Budget Matrimonio 2026",
            nl: "Bruiloft Budget Planner 2026",
            pl: "Kalkulator Ślubny 2026",
            sv: "Bröllopsbudget Kalkylator 2026",
            no: "Bryllupsbudsjett Kalkulator 2026",
            da: "Bryllupsbudget Beregner 2026",
            fi: "Hääbudjettilaskuri 2026"
        },
        subtitles: {
            en: "Break down your wedding costs by category based on your total budget",
            es: "Divide tus costos de boda por categoría basado en tu presupuesto total",
            de: "Verteilen Sie Ihr Budget automatisch auf alle Kategorien",
            fr: "Répartissez vos coûts de mariage par catégorie",
            pt: "Distribua os custos do casamento por categoria",
            it: "Ripartisci i costi del matrimonio per categoria",
            nl: "Verdeel uw bruiloftskosten per categorie",
            pl: "Podziel koszty wesela na kategorie",
            sv: "Fördela din bröllopsbudget per kategori",
            no: "Fordel bryllupskostnadene dine etter kategori",
            da: "Fordel dit bryllupsbudget efter kategori",
            fi: "Jaa hääbudjettisi kategorioittain"
        },
        metaDescriptions: {
            en: "Free wedding budget calculator. Automatically allocate your budget for venue, catering, dress, and more based on industry standards.",
            es: "Calculadora de presupuesto de bodas gratis. Asigna automáticamente tu presupuesto para lugar, comida y vestido.",
            de: "Kostenloser Hochzeitsbudget-Rechner. Automatische Verteilung für Location, Catering, Kleid und mehr.",
            fr: "Calculateur de budget mariage gratuit. Allouez automatiquement votre budget réception, traiteur, robe, etc.",
            pt: "Calculadora de orçamento de casamento grátis. Distribua seu budget para local, buffet, vestido e mais.",
            it: "Calcolatore gratuito di budget per matrimoni. Stima i costi per location, catering e altro.",
            nl: "Gratis bruiloft budget calculator. Schat kosten voor locatie, catering en meer.",
            pl: "Darmowy kalkulator budżetu ślubnego. Oszacuj koszty wesela i cateringu.",
            sv: "Gratis bröllopsbudgetkalkylator. Beräkna kostnader för lokal, catering och mer.",
            no: "Gratis bryllupsbudsjettkalkulator. Beregn kostnader for lokale, catering og mer.",
            da: "Gratis bryllupsbudgetberegner. Fordel automatisk dit budget til spillested, catering, kjole og mere.",
            fi: "Ilmainen hääbudjettilaskuri. Jaa budjettisi automaattisesti juhlapaikalle, tarjoilulle, puvulle ja muulle."
        },
        config: {
            currency: { en: "USD", es: "EUR", de: "EUR", fr: "EUR", pt: "BRL", it: "EUR", nl: "EUR", pl: "PLN", sv: "SEK", no: "NOK", da: "DKK", fi: "EUR" },
            locale: { en: "en-US", es: "es-ES", de: "de-DE", fr: "fr-FR", pt: "pt-BR", it: "it-IT", nl: "nl-NL", pl: "pl-PL", sv: "sv-SE", no: "no-NO", da: "da-DK", fi: "fi-FI" },
            fields: [
                { id: "budget", type: "number", label: { en: "Total Budget", es: "Presupuesto Total", de: "Gesamtbudget", fr: "Budget Total", pt: "Orçamento Total", it: "Budget Totale", nl: "Totaal Budget", pl: "Całkowity Budżet", sv: "Total Budget", no: "Totalt Budsjett", da: "Total Budget", fi: "Kokonaisbudjetti" }, default: 25000, min: 1000, max: 1000000, step: 1000 },
                { id: "guests", type: "slider", label: { en: "Guest Count", es: "Invitados", de: "Gäste", fr: "Invités", pt: "Convidados", it: "Numero Ospiti", nl: "Aantal Gasten", pl: "Liczba Gości", sv: "Antal Gäster", no: "Antall Gjester", da: "Antal Gæster", fi: "Vieraiden Määrä" }, default: 100, min: 10, max: 500, step: 10 }
            ],
            formula: "budget",
            resultLabel: { en: "Budget Allocation", es: "Asignación de Presupuesto", de: "Budgetverteilung", fr: "Allocation Budget", pt: "Alocação do Orçamento", it: "Allocazione Budget", nl: "Budgetverdeling", pl: "Alokacja Budżetu", sv: "Budgetfördelning", no: "Budsjettfordeling", da: "Budgetfordeling", fi: "Budjetin Jakautuminen" },
            breakdown: [
                { label: { en: "Cost Per Guest", es: "Costo por Invitado", de: "Kosten pro Gast", fr: "Coût par Invité", pt: "Custo por Convidado", it: "Costo per Ospite", nl: "Kosten per Gast", pl: "Koszt na Gościa", sv: "Kostnad per Gäst", no: "Kostnad per Gjest", da: "Pris pr. Gæst", fi: "Hinta per Vieras" }, formula: "budget / guests" },
                { label: { en: "Venue & Catering (50%)", es: "Lugar y Comida (50%)", de: "Ort & Catering (50%)", fr: "Lieu & Traiteur (50%)", pt: "Local & Buffet (50%)", it: "Location & Catering (50%)", nl: "Locatie & Catering (50%)", pl: "Miejsce i Catering (50%)", sv: "Plats & Catering (50%)", no: "Lokale & Catering (50%)", da: "Lokale & Catering (50%)", fi: "Juhlapaikka & Ruoka (50%)" }, formula: "budget * 0.50" },
                { label: { en: "Photography (12%)", es: "Fotografía (12%)", de: "Fotografie (12%)", fr: "Photographie (12%)", pt: "Fotografia (12%)", it: "Fotografia (12%)", nl: "Fotografie (12%)", pl: "Fotografia (12%)", sv: "Fotografi (12%)", no: "Fotografering (12%)", da: "Fotografering (12%)", fi: "Valokuvaus (12%)" }, formula: "budget * 0.12" },
                { label: { en: "Attire & Beauty (10%)", es: "Vestuario (10%)", de: "Kleidung (10%)", fr: "Tenue (10%)", pt: "Traje & Beleza (10%)", it: "Abbigliamento (10%)", nl: "Kleding & Schoonheid (10%)", pl: "Ubiór i Uroda (10%)", sv: "Kläder & Skönhet (10%)", no: "Klær og Skjønnhet (10%)", da: "Tøj & Skønhed (10%)", fi: "Pukeutuminen & Kauneus (10%)" }, formula: "budget * 0.10" },
                { label: { en: "Music/Ent (10%)", es: "Música (10%)", de: "Musik (10%)", fr: "Musique (10%)", pt: "Música (10%)", it: "Musica (10%)", nl: "Muziek (10%)", pl: "Muzyka (10%)", sv: "Musik (10%)", no: "Musikk (10%)", da: "Musik (10%)", fi: "Musiikki (10%)" }, formula: "budget * 0.10" },
                { label: { en: "Flowers/Decor (8%)", es: "Flores/Decor (8%)", de: "Blumen (8%)", fr: "Fleurs (8%)", pt: "Flores (8%)", it: "Fiori/Decor (8%)", nl: "Bloemen/Decor (8%)", pl: "Kwiaty/Dekoracje (8%)", sv: "Blommor/Dekor (8%)", no: "Blomster/Dekor (8%)", da: "Blomster (8%)", fi: "Kukkaset (8%)" }, formula: "budget * 0.08" },
                { label: { en: "Misc/Emergency (10%)", es: "Misc (10%)", de: "Sonstiges (10%)", fr: "Divers (10%)", pt: "Outros (10%)", it: "Varie (10%)", nl: "Diversen (10%)", pl: "Różne (10%)", sv: "Övrigt (10%)", no: "Diverse (10%)", da: "Diverse (10%)", fi: "Muut (10%)" }, formula: "budget * 0.10" }
            ],
            proFeatures: {
                pdf: true,
                pdfLabel: { en: "Find Venues in Budget", es: "Ver Lugares", de: "Orte Finden", fr: "Voir Lieux", pt: "Ver Locais", it: "Trova Location", nl: "Vind Locaties", pl: "Znajdź Miejsca", sv: "Hitta Platser", no: "Finn Lokaler" }
            },
            content: {
                pt: "<h2>Planejando seu orçamento de casamento</h2><p>Um casamento sem estresse começa com um orçamento realista.</p>",
                it: "<h2>Pianificare il budget del tuo matrimonio</h2><p>Un matrimonio senza stress inizia con un budget realistico. Il nostro pianificatore ti aiuta a distribuire i fondi tra location, catering e altro.</p>",
                nl: "<h2>Uw bruiloftsbudget plannen</h2><p>Een stressvrije bruiloft begint met een realistisch budget. Onze planner helpt u bij het verdelen van uw geld over locaties en catering.</p>",
                pl: "<h2>Planowanie budżetu weselnego</h2><p>Wesele bez stresu zaczyna się od realistycznego budżetu. Nasz planer pomoże Ci rozdzielić środki na salę, catering i inne wydatki.</p>",
                sv: "<h2>Planera din bröllopsbudget</h2><p>Ett stressfritt bröllop börjar med en realistisk budget. Vår kalkylator hjälper dig att fördela pengarna på lokal, catering och mer.</p>",
                no: "<h2>Planlegg bryllupsbudsjettet ditt</h2><p>Ett stressfritt bryllup starter med et realistisk budsjett. Kalkulatoren vår hjelper deg med å fordele midlene på lokale, catering og mer.</p>",
                da: "<h2>Planlægning af dit bryllupsbudget</h2><p>Et stressfrit bryllup starter med et realistisk budget. Vores beregner hjælper dig med at fordele midlerne til lokaler, catering og mere.</p>",
                fi: "<h2>Hääbudjetin suunnittelu</h2><p>Stressitön hääpäivä alkaa realistisesta budjetista. Suunnittelutyökalumme auttaa sinua jakamaan varat juhlapaikkaan, tarjoiluun ja muuhun.</p>"
            }
        },
        faqs: {
            it: [{ q: "Come dividere il budget?", a: "Location e catering di solito portano via il 50% del totale." }],
            nl: [{ q: "Hoe verdeel ik mijn budget?", a: "Locatie en catering nemen meestal 50% van het totaal in beslag." }],
            pl: [{ q: "Jak podzielić budżet?", a: "Miejsce i catering zazwyczaj pochłaniają 50% całości." }],
            sv: [{ q: "Hur ska jag dela upp min budget?", a: "Lokal och catering tar vanligtvis 50% av det totala beloppet." }],
            no: [{ q: "Hvordan bør jeg dele opp budsjettet?", a: "Lokale og catering tar vanligvis 50% av totalbeløpet." }],
            da: [{ q: "Hvordan skal jeg opdele mit budget?", a: "Lokale og catering tager normalt 50% af det samlede beløb." }],
            fi: [{ q: "Miten jaan budjettini?", a: "Juhlapaikka ja tarjoilu vievät yleensä 50 % kokonaissummasta." }]
        }
    },

    solar: {
        slugs: { en: "solar-calculator", es: "calculadora-solar", de: "solarrechner", fr: "calculateur-solaire", pt: "calculadora-solar", it: "calcolatore-solare", nl: "zonne-calculator", pl: "kalkulator-solarny", sv: "solcellskalkylator", no: "solcellekalkulator", da: "solcelleberegner", fi: "aurinkopaneelilaskuri" },
        titles: { en: "Solar Savings Calculator", es: "Calculadora de Ahorro Solar", de: "Solarrechner", fr: "Calculateur Solaire", pt: "Calculadora Solar", it: "Calcolatore Risparmio Solare", nl: "Zonne-energie Calculator", pl: "Kalkulator Oszczędności Solarnych", sv: "Solcellskalkylator", no: "Solcellekalkulator", da: "Solcelleberegner", fi: "Aurinkopaneelilaskuri" },
        subtitles: { en: "Estimate your solar potential and savings", es: "Estima tus ahorros con paneles solares", de: "Berechnen Sie Ihr Solarpotenzial", fr: "Estimez votre potentiel solar", pt: "Estime seu potencial solar", it: "Stima il tuo potenziale solare", nl: "Schat uw zonnepotentieel", pl: "Oszacuj potencjał solarny", sv: "Beräkna din solpotential", no: "Beregn solpotensialet ditt", da: "Beregn dit solpotentiale", fi: "Laske aurinkopotentiaalisi" },
        metaDescriptions: { en: "Free solar calculator. Estimate system size and savings based on your bill.", es: "Calculadora solar gratis.", de: "Kostenloser Solarrechner.", fr: "Calculateur solaire gratuit.", pt: "Calculadora solar grátis.", it: "Calcolatore solare gratuito.", nl: "Gratis zonne-calculator.", pl: "Darmowy kalkulator solarny.", sv: "Gratis solcellskalkylator.", no: "Gratis solcellekalkulator.", da: "Gratis solcelleberegner. Beregn systemstørrelse.", fi: "Ilmainen aurinkopaneelilaskuri. Arvioi järjestelmän koko." },
        config: {
            currency: { en: "USD", es: "EUR", de: "EUR", fr: "EUR", pt: "BRL", it: "EUR", nl: "EUR", pl: "PLN", sv: "SEK", no: "NOK", da: "DKK", fi: "EUR" },
            locale: { en: "en-US", es: "es-ES", de: "de-DE", fr: "fr-FR", pt: "pt-BR", it: "it-IT", nl: "nl-NL", pl: "pl-PL", sv: "sv-SE", no: "no-NO", da: "da-DK", fi: "fi-FI" },
            fields: [
                { id: "bill", type: "number", label: { en: "Monthly Energy Bill", es: "Factura Mensual", de: "Monatliche Stromrechnung", fr: "Facture Mensuelle", pt: "Conta de Luz Mensal", it: "Bolletta Mensile", nl: "Maandelijkse Energierekening", pl: "Miesięczny Rachunek", sv: "Månadsräkning", no: "Månedlig Strømregning", da: "Månedlig El-regning", fi: "Sähkölasku/kk" }, default: 150, min: 30, max: 1000, step: 10, help: { en: "Your average monthly electricity bill in dollars", es: "Tu factura mensual promedio de electricidad", de: "Ihre durchschnittliche monatliche Stromrechnung" } },
                { id: "sunHours", type: "slider", label: { en: "Daily Sun Hours", es: "Horas de Sol Diarias", de: "Tägliche Sonnenstunden", fr: "Heures d'Ensoleillement", pt: "Horas de Sol Diárias", it: "Ore di Sole Giornaliere", nl: "Dagelijkse Zonuren", pl: "Dzienne Godziny Słoneczne", sv: "Soltimmar per Dag", no: "Soltimer per Dag", da: "Daglige Soltimer", fi: "Aurinkotunnit/pv" }, default: 4.5, min: 2, max: 8, step: 0.5, help: { en: "Peak sun hours in your area. US averages 4-5 hours. Check pvwatts.nrel.gov for your location.", es: "Horas pico de sol en tu área. EE.UU. promedia 4-5 horas.", de: "Sonnenspitzenstunden in Ihrer Region. US-Durchschnitt: 4-5 Stunden." } }
            ],
            formula: "(bill * 12 * 25) - ((bill * 12 / 0.15 / 365 / sunHours) * 2500)",
            resultLabel: { en: "Est. 25-Year Savings", es: "Ahorro Estimado 25 Años", de: "Geschätzte Ersparnis (25 J.)", fr: "Économies Estimées (25 ans)", pt: "Economia Est. 25 Anos", it: "Risparmio Stimato (25 anni)", nl: "Geschatte Besparing (25 jr)", pl: "Szac. Oszczędności (25 lat)", sv: "Beräknad Besparing (25 år)", no: "Beregnet Besparelse (25 år)", da: "Est. Besparelse (25 år)", fi: "Arvioitu Säästö (25 v)" },
            breakdown: [
                { label: { en: "System Size (kW)", es: "Tamaño del Sistema (kW)", de: "Systemgröße (kW)", fr: "Taille du Système (kW)", pt: "Tamanho do Sistema (kW)", it: "Dimensione Sistema (kW)", nl: "Systeemgrootte (kW)", pl: "Wielkość Systemu (kW)", sv: "Systemstorlek (kW)", no: "Systemstørrelse (kW)", da: "Systemstørrelse (kW)", fi: "Järjestelmän Koko (kW)" }, formula: "(bill * 12 / 0.15) / (sunHours * 365)", tooltip: { en: "Estimated system size needed based on your energy usage and sun hours", es: "Tamaño del sistema estimado según tu consumo de energía", de: "Geschätzte Systemgröße basierend auf Ihrem Energieverbrauch" } },
                { label: { en: "System Cost (Before Tax Credit)", es: "Costo del Sistema (Bruto)", de: "Systemkosten (Brutto)", fr: "Coût Système (Brut)", pt: "Custo do Sistema (Bruto)", it: "Costo Sistema (Lordo)", nl: "Systeemkosten (Bruto)", pl: "Koszt Systemu (Brutto)", sv: "Systemkostnad (Brutto)", no: "Systemkostnad (Brutto)", da: "Systemomkostninger", fi: "Järjestelmän Hinta" }, formula: "(bill * 12 / 0.15 / 365 / sunHours) * 2500" },
                { label: { en: "Federal Tax Credit (30% ITC)", es: "Incentivos Fiscales (Est.)", de: "Steuerliche Anreize (gesch.)", fr: "Incitations Fiscales (Est.)", pt: "Incentivos Fiscais (Est.)", it: "Incentivi Fiscali (Stima)", nl: "Belastingvoordeel (Schatting)", pl: "Ulga Podatkowa (Szac.)", sv: "Skatteavdrag (Uppsk.)", no: "Skattefradrag (Est.)", da: "Skattefradrag (Est.)", fi: "Verovähennys (Arvio)" }, formula: "(bill * 12 / 0.15 / 365 / sunHours) * 2500 * 0.30" },
                { label: { en: "Net System Cost", es: "Costo Neto del Sistema", de: "Netto-Systemkosten", fr: "Coût Net du Système", pt: "Custo Líquido do Sistema", it: "Costo Netto Sistema", nl: "Netto Systeemkosten", pl: "Koszt Netto Systemu", sv: "Netto Systemkostnad", no: "Netto Systemkostnad", da: "Netto Systemomkostning", fi: "Nettohintalappu" }, formula: "(bill * 12 / 0.15 / 365 / sunHours) * 2500 * 0.70" },
                { label: { en: "Payback Period (Years)", es: "Tiempo de Amortización (Años)", de: "Amortisationszeit (Jahre)", fr: "Délai de Rentabilité (Années)", pt: "Tempo de Amortização (Anos)", it: "Tempo di Recupero (Anni)", nl: "Terugverdientijd (Jaren)", pl: "Okres Zwrotu (Lata)", sv: "Återbetalningstid (År)", no: "Nedbetalingstid (År)", da: "Tilbagebetalingstid", fi: "Takaisinmaksuaika" }, formula: "((bill * 12 / 0.15 / 365 / sunHours) * 2500 * 0.70) / (bill * 12)" },
                { label: { en: "Lifetime Cost (No Solar)", es: "Costo de Vida (Sin Solar)", de: "Gesamtkosten (Ohne Solar)", fr: "Coût à Vie (Sans Solaire)", pt: "Custo Vitalício (Sem Solar)", it: "Costo a Vita (No Solar)", nl: "Levenslange Kosten (Geen Zon)", pl: "Koszt Całkowity (Bez Solara)", sv: "Livstidskostnad (Ej Sol)", no: "Levetidskostnad (Ikke Sol)", da: "Livstidsomkostning", fi: "Elinkaarikustannus" }, formula: "bill * 12 * ((Math.pow(1.03, 25) - 1) / 0.03)", tooltip: { en: "Projected cost of staying with utility over 25 years, assuming 3% annual inflation.", es: "Costo proyectado de permanecer con la red por 25 años, asumiendo 3% de inflación anual.", de: "Projizierte Kosten beim Energieversorger über 25 Jahre, bei 3% jährlicher Inflation.", fr: "Coût projeté en restant au réseau sur 25 ans, supposant 3% d'inflation annuelle.", pt: "Custo projetado de permanecer na rede por 25 anos, assumindo 3% de inflação anual." } },
                { label: { en: "CO2 Offset (Tons)", es: "CO2 Compensado (Ton)", de: "CO2-Kompensation (Tonnen)", fr: "CO2 Compensé (Tonnes)", pt: "CO2 Compensado (Ton)", it: "CO2 Compensata (Tonn)", nl: "CO2 Compensatie (Ton)", pl: "Kompensacja CO2 (Tony)", sv: "CO2 Kompensation (Ton)", no: "CO2 Kompensasjon (Tonn)", da: "CO2-reduktion (Ton)", fi: "CO2-päästövähennys" }, formula: "(bill * 12 / 0.15) * 25 * 0.0007" }
            ],
            proFeatures: {
                pdf: true,
                pdfLabel: { en: "Get Free Estimates", es: "Obtener Estimaciones", de: "Angebote Einholen", fr: "Obtenir Devis", pt: "Obter Estimativas", it: "Preventivi Gratuiti", nl: "Gratis Offertes", pl: "Darmowe Wyceny", sv: "Få Gratis Offerter", no: "Få Gratis Tilbud", da: "Få Gratis Tilbud", fi: "Hanki Ilmaiset Tarjoukset" }
            },
            content: {
                pt: "<h2>Energia Solar vale a pena em 2026?</h2><p>Com o aumento dos custos de energia, a energia solar é um excelente investimento.</p><p><strong>🛡️ Sem Vendedores:</strong> Esta é uma ferramenta imparcial.</p>",
                it: "<h2>L'energia solare conviene nel 2026?</h2><p>Con l'aumento dei costi energetici, passare al solare è un investimento eccellente.</p><p><strong>🛡️ Nessun venditore:</strong> Questo è uno strumento imparziale.</p>",
                nl: "<h2>Is zonne-energie de moeite waard in 2026?</h2><p>Met stijgende energiekosten is de overstap naar zonne-energie een uitstekende investering.</p><p><strong>🛡️ Geen verkoopverhaal:</strong> Dit is een onafhankelijke tool.</p>",
                pl: "<h2>Czy energia słoneczna opłaca się w 2026 roku?</h2><p>Przy rosnących kosztach energii przejście na solary to doskonała inwestycja.</p><p><strong>🛡️ Bez sprzedawców:</strong> To jest bezstronne narzędzie.</p>",
                sv: "<h2>Är solenergi värt det 2026?</h2><p>Med stigande energikostnader är byte till solenergi en utmärkt investering.</p><p><strong>🛡️ Ingen säljare:</strong> Detta är ett objektivt verktyg.</p>",
                no: "<h2>Er solenergi verdt det i 2026?</h2><p>Med økende energikostnader er bytte til solenergi en utmerket investering.</p><p><strong>🛡️ Ingen selger:</strong> Dette er et nøytralt verktøy.</p>",
                da: "<h2>Er solenergi det værd i 2026?</h2><p>Med stigende energiomkostninger er skiftet til solenergi en fremragende investering.</p><p><strong>🛡️ Ingen sælger:</strong> Dette è un uvildigt værktøj.</p>",
                fi: "<h2>Kannattaako aurinkoenergia vuonna 2026?</h2><p>Energian hintojen noustessa aurinkoenergiaan siirtyminen on erinomainen investointi.</p><p><strong>🛡️ Ei myyntipuheita:</strong> Tämä on puolueeton työkalu.</p>"
            }
        },
        faqs: {
            en: [{ q: "How much can I save?", a: "Savings depend on your current bill and local sun hours." }],
            de: [{ q: "Wie viel kann ik sparen?", a: "Ersparnisse hängen von Ihrer Rechnung und Sonnenstunden ab." }],
            es: [{ q: "¿Cuánto puedo ahorrar?", a: "El ahorro depende de tu factura y horas de sol." }],
            fr: [{ q: "Combien puis-je économiser?", a: "Les économies dépendent de votre facture." }],
            pt: [{ q: "Quanto posso economizar?", a: "A economia depende da sua conta." }],
            it: [{ q: "Quanto posso risparmiare?", a: "Il risparmio dipende dalla tua bolletta attuale e dalle ore di sole locali." }],
            nl: [{ q: "Hoeveel kan ik besparen?", a: "Besparingen hangen af van uw huidige rekening en lokale zonuren." }],
            pl: [{ q: "Ile mogę zaoszczędzić?", a: "Oszczędności zależą od Twojego rachunku i nasłonecznienia okolicy." }],
            sv: [{ q: "Hur mycket kan jag spara?", a: "Besparingarna beror på din nuvarande räkning och lokala soltimmar." }],
            no: [{ q: "Hvor mye kan jeg spare?", a: "Besparelsene avhenger av din nåværende regning og lokale soltimer." }],
            da: [{ q: "Hvor meget kan jeg spare?", a: "Besparelser afhænger af din nåværende regning og lokale soltimer." }],
            fi: [{ q: "Kuinka paljon voin säästää?", a: "Säästöt riippuvat nykyisestä laskustasi ja paikallisista aurinkotunneista." }]
        }
    },

    flooring: {
        slugs: { en: "flooring-calculator", es: "calculadora-suelos", de: "bodenrechner", fr: "calculateur-sol", pt: "calculadora-pisos", it: "calcolatore-pavimenti", nl: "vloer-calculator", pl: "kalkulator-podlogowy", sv: "golvkalkylator", no: "gulvkalkulator", da: "gulvberegner", fi: "lattialaskuri" },
        titles: { en: "Flooring Cost Calculator", es: "Calculadora de Suelos", de: "Bodenrechner", fr: "Calculateur Sol", pt: "Calculadora de Pisos", it: "Calcolatore Pavimenti", nl: "Vloer Calculator", pl: "Kalkulator Podłogowy", sv: "Golvkalkylator", no: "Gulvkalkulator", da: "Gulvprisberegner", fi: "Lattiamateriaalilaskuri" },
        subtitles: { en: "Estimate flooring material and labor", es: "Estima materiales y mano de obra", de: "Berechnen Sie Bodenkosten", fr: "Estimez matériaux et main d'œuvre", pt: "Estime materiais e mão de obra", it: "Stima materiali e manodopera", nl: "Schatting vloerkosten", pl: "Szacowanie kosztów podłogi", sv: "Beräkna golvkostnader", no: "Beregn gulvkostnader", da: "Beregn materialer og arbejdsløn", fi: "Laske materiaalit ja asennus" },
        metaDescriptions: { en: "Free flooring calculator. Estimate tile, hardwood, or laminate costs.", es: "Calculadora de suelos gratis.", de: "Kostenloser Bodenrechner.", fr: "Calculateur sol gratuit.", pt: "Calculadora de pisos grátis.", it: "Calcolatore pavimenti gratuito.", nl: "Gratis vloer calculator.", pl: "Darmowy kalkulator podłogowy.", sv: "Gratis golvkalkylator.", no: "Gratis gulvkalkulator.", da: "Gratis gulvberegner.", fi: "Ilmainen lattialaskuri." },
        config: {
            currency: { en: "USD", es: "EUR", de: "EUR", fr: "EUR", pt: "BRL", it: "EUR", nl: "EUR", pl: "PLN", sv: "SEK", no: "NOK", da: "DKK", fi: "EUR" },
            locale: { en: "en-US", es: "es-ES", de: "de-DE", fr: "fr-FR", pt: "pt-BR", it: "it-IT", nl: "nl-NL", pl: "pl-PL", sv: "sv-SE", no: "no-NO", da: "da-DK", fi: "fi-FI" },
            fields: [
                { id: "area", type: "number", label: { en: "Area (sq ft)", es: "Área (m²)", de: "Fläche (m²)", fr: "Surface (m²)", pt: "Área (m²)", it: "Area (m²)", nl: "Oppervlakte (m²)", pl: "Powierzchnia (m²)", sv: "Yta (m²)", no: "Areal (m²)", da: "Areal (m²)", fi: "Pinta-ala (m²)" }, default: 500, min: 10, max: 5000, step: 10 },
                { id: "zip", type: "number", label: { en: "Zip Code", es: "Código Postal", de: "PLZ", fr: "Code Postal", pt: "CEP", it: "CAP", nl: "Postcode", pl: "Kod Pocztowy", sv: "Postnummer", no: "Postnummer", da: "Postnummer", fi: "Postinumero" }, default: 90210, min: 0, max: 99999, step: 1 },
                { id: "price", type: "number", label: { en: "Material Price / sq ft", es: "Precio Material / m²", de: "Materialpreis / m²", fr: "Prix Matériau / m²", pt: "Preço Material / m²", it: "Prezzo Materiale / m²", nl: "Materiaalprijs / m²", pl: "Cena Materiału / m²", sv: "Materialpris / m²", no: "Materialpris / m²", da: "Materialepris / m²", fi: "Materiaalin hinta / m²" }, default: 5, min: 1, max: 50, step: 0.5 },
                { id: "waste", type: "slider", label: { en: "Overage factor (%)", es: "Desperdicio (%)", de: "Verschnitt (%)", fr: "Marge (%)", pt: "Margem (%)", it: "Scarto (%)", nl: "Snijverlies (%)", pl: "Nadmiar (%)", sv: "Spill (%)", no: "Svinn (%)", da: "Spildfaktor (%)", fi: "Hukkaprosentti (%)" }, default: 10, min: 0, max: 20, step: 1 }
            ],
            formula: "area * price * (1 + waste/100) + (area * 3)",
            resultLabel: { en: "Estimated Project Cost", es: "Costo Estimado Proyecto", de: "Geschätzte Projektkosten", fr: "Coût Projet Estimé", pt: "Custo Estimado do Projeto", it: "Costo Stimato Progetto", nl: "Geschatte Projectkosten", pl: "Szacowany Koszt", sv: "Beräknad Projektkostnad", no: "Beregnet Prosjektkostnad", da: "Estimeret Projektpris", fi: "Arvioitu Projektikustannus" },
            breakdown: [
                { label: { en: "Materials", es: "Materiales", de: "Materialien", fr: "Matériaux", pt: "Materiais", it: "Materiali", nl: "Materialen", pl: "Materiały", sv: "Material", no: "Materialer", da: "Materialer", fi: "Materiaalit" }, formula: "area * price * (1 + waste/100)" },
                { label: { en: "Estimated Labor", es: "Mano de Obra Est.", de: "Geschätzte Arbeit", fr: "Main d'Œuvre Est.", pt: "Mão de Obra Est.", it: "Manodopera Stimata", nl: "Geschatte Arbeid", pl: "Szacowana Robocizna", sv: "Beräknat Arbete", no: "Beregnet Arbeid", da: "Estimeret Arbejdsløn", fi: "Arvioitu Työ" }, formula: "area * 3" }
            ],
            proFeatures: {
                pdf: true,
                pdfLabel: { en: "Get Official Quote", es: "Recibir Presupuesto", de: "Angebot Erhalten", fr: "Recevoir Devis", pt: "Receber Orçamento", it: "Ricevi Preventivo", nl: "Ontvang Offerte", pl: "Otrzymaj Wycenę", sv: "Få Offert", no: "Få Tilbud", da: "Få Officielt Tilbud", fi: "Pyydä Virallinen Tarjous" }
            },
            content: {
                pt: "<h2>Estimativa de custo de projeto de piso</h2><p>A medição precisa da área é fundamental.</p>",
                it: "<h2>Stima dei costi del progetto pavimento</h2><p>Una misurazione accurata dell\'area è fondamentale. Il nostro calcolatore include lo scarto (standard 10%) e stima sia i costi dei materiali che della manodopera.</p>",
                nl: "<h2>Schatting van vloerkosten</h2><p>Een nauwkeurige hoogtemeting is cruciaal. Onze calculator bevat een marge (standaard 10%) en schat zowel de materiaalkosten als de arbeidskosten in.</p>",
                pl: "<h2>Szacowanie kosztów podłogi</h2><p>Dokładny pomiar powierzchni jest kluczowy. Nasz kalkulator uwzględnia zapas (standardowo 10%) oraz szacuje zarówno koszty materiałów, jak i robocizny.</p>",
                sv: "<h2>Kostnadsuppskattning för golvläggning</h2><p>Noggrann mätning av ytan är avgörande. Vår kalkylator inkluderar spill (standard 10%) och uppskattar både material- och arbetskostnader.</p>",
                no: "<h2>Kostnadsestimering for gulvlegging</h2><p>Nøyaktig måling av arealet er avgjørende. Kalkulatoren vår inkluderer svinn (standard 10%) og estimerer både material- og arbeidskostnader.</p>",
                da: "<h2>Kostnadsberegning for gulvlægning</h2><p>Nøjagtig måling af arealet er afgørende. Vores beregner inkluderer spild (standard 10%) og estimerer både materiale- og arbejdsomkostninger.</p>",
                fi: "<h2>Lattiamateriaalien kustannusarvio</h2><p>Tarkka pinta-alan mittaus on välttämätöntä. Laskurimme sisältää hukkavaran (standardi 10 %) ja arvioi sekä materiaali- että työkustannukset.</p>"
            }
        },
        faqs: {
            it: [{ q: "Qual è il costo medio della manodopera?", a: "La manodopera costa in genere 20-50 € al m²." }],
            nl: [{ q: "Wat zijn de gemiddelde arbeidskosten?", a: "Arbeid kost doorgaans €20-€50 per m²." }],
            pl: [{ q: "Jaki jest średni koszt robocizny?", a: "Robocizna kosztuje zazwyczaj 80-200 zł za m²." }],
            sv: [{ q: "Vad är den genomsnittliga arbetskostnaden?", a: "Arbete kostar vanligtvis 200-500 kr per m²." }],
            no: [{ q: "Hva er gjennomsnittlig arbeidskostnad?", a: "Arbeid koster vanligvis 200-500 kr per m²." }],
            da: [{ q: "Hvad er den gennemsnitlige arbejdsløn?", a: "Arbejdsløn koster typisk 150-400 kr. pr. m²." }],
            fi: [{ q: "Mikä on keskimääräinen työkustannus?", a: "Työ maksaa yleensä 20-50 € per m²." }]
        }
    },

    roofing: {
        slugs: { en: "roofing-calculator", es: "calculadora-techos", de: "dachrechner", fr: "calculateur-toiture", pt: "calculadora-telhado", it: "calcolatore-tetto", nl: "dak-calculator", pl: "kalkulator-dachowy", sv: "takkalkylator", no: "takkalkulator", da: "tagberegner", fi: "kattolaskuri" },
        titles: { en: "Roofing Cost Calculator", es: "Calculadora de Techos", de: "Dachrechner", fr: "Calculateur Toiture", pt: "Calculadora de Telhado", it: "Calcolatore Tetto", nl: "Dak Calculator", pl: "Kalkulator Dachowy", sv: "Takkalkylator", no: "Takkalkulator", da: "Tagprisberegner", fi: "Kattoremonttilaskuri" },
        subtitles: { en: "Estimate roof replacement costs", es: "Estima costo de reemplazo de techo", de: "Berechnen Sie Dachkosten", fr: "Estimez le coût de la toiture", pt: "Estime custo de troca de telhado", it: "Stima costi rifacimento tetto", nl: "Bereken dakkosten", pl: "Oblicz koszty dachu", sv: "Beräkna takkostnader", no: "Beregn takkostnader", da: "Beregn materialer og arbejdsløn", fi: "Laske materiaalit ja työkustannukset" },
        metaDescriptions: { en: "Free roofing calculator. Estimate shingles, labor, and total roof replacement cost.", es: "Calculadora de techos gratis.", de: "Kostenloser Dachrechner.", fr: "Calculateur toiture gratuit.", pt: "Calculadora de telhados grátis.", it: "Calcolatore tetto gratuito.", nl: "Gratis dak calculator.", pl: "Darmowy kalkulator dachowy.", sv: "Gratis takkalkylator.", no: "Gratis takkalkulator.", da: "Gratis tagberegner.", fi: "Ilmainen kattolaskuri." },
        config: {
            currency: { en: "USD", es: "EUR", de: "EUR", fr: "EUR", pt: "BRL", it: "EUR", nl: "EUR", pl: "PLN", sv: "SEK", no: "NOK", da: "DKK", fi: "EUR" },
            locale: { en: "en-US", es: "es-ES", de: "de-DE", fr: "fr-FR", pt: "pt-BR", it: "it-IT", nl: "nl-NL", pl: "pl-PL", sv: "sv-SE", no: "no-NO", da: "da-DK", fi: "fi-FI" },
            fields: [
                { id: "area", type: "number", label: { en: "Roof Area (sq ft)", es: "Área Techo (m²)", de: "Dachfläche (m²)", fr: "Surface Toit (m²)", pt: "Área Telhado (m²)", it: "Area Tetto (m²)", nl: "Dakoppervlak (m²)", pl: "Powierzchnia Dachu (m²)", sv: "Takyta (m²)", no: "Takareal (m²)", da: "Tagareal (m²)", fi: "Katon Pinta-ala (m²)" }, default: 2000, min: 500, max: 10000, step: 100 },
                { id: "zip", type: "number", label: { en: "Zip Code", es: "Código Postal", de: "PLZ", fr: "Code Postal", pt: "CEP", it: "CAP", nl: "Postcode", pl: "Kod Pocztowy", sv: "Postnummer", no: "Postnummer", da: "Postnummer", fi: "Postinumero" }, default: 90210, min: 0, max: 99999, step: 1 },
                {
                    id: "material", type: "select", label: { en: "Material", es: "Material", de: "Material", fr: "Matériau", pt: "Material", it: "Materiale", nl: "Materiaal", pl: "Materiał", sv: "Material", no: "Materiale", da: "Materiale", fi: "Materiaali" }, default: 4, options: [
                        { value: 4, label: { en: "Asphalt Shingles", es: "Tejas Asfálticas", de: "Asphaltschindeln", fr: "Bardeaux Asphalte", pt: "Telhas Asfálticas", it: "Tegole Asfalto", nl: "Asfaltshingles", pl: "Gonty Asfaltowe", sv: "Asfaltshingel", no: "Asfaltshingel", da: "Tagpap", fi: "Huopakate" } },
                        { value: 9, label: { en: "Metal", es: "Metal", de: "Metall", fr: "Métal", pt: "Metal", it: "Metallo", nl: "Metaal", pl: "Metal", sv: "Metall", no: "Metall", da: "Metaltag", fi: "Peltikatto" } },
                        { value: 15, label: { en: "Tile/Slate", es: "Teja/Pizarra", de: "Ziegel/Schiefer", fr: "Tuile/Ardoise", pt: "Telha/Ardósia", it: "Tegola/Ardesia", nl: "Dakpan/Leisteen", pl: "Dachówka/Łupek", sv: "Tegel/Skiffer", no: "Takstein/Skifer", da: "Tegl/Skifer", fi: "Tiili/Liuskekivi" } }
                    ]
                },
                {
                    id: "pitch", type: "select", label: { en: "Roof Pitch", es: "Inclinación", de: "Dachneigung", fr: "Pente", pt: "Inclinação", it: "Pendenza", nl: "Hellingsgraad", pl: "Nachylenie", sv: "Lutning", no: "Takvinkel", da: "Taghældning", fi: "Katon Kaltevuus" }, default: 1, options: [
                        { value: 1, label: { en: "Low (0-4/12)", es: "Baja", de: "Flach", fr: "Faible", pt: "Baixa", it: "Bassa", nl: "Laag", pl: "Niskie", sv: "Låg", no: "Lav", da: "Lav (0-4/12)", fi: "Matala (0-4/12)" } },
                        { value: 1.2, label: { en: "Medium (5-8/12)", es: "Media", de: "Mittel", fr: "Moyenne", pt: "Média", it: "Media", nl: "Gemiddeld", pl: "Średnie", sv: "Medel", no: "Middels", da: "Mellem (5-8/12)", fi: "Keskikorkea (5-8/12)" } },
                        { value: 1.5, label: { en: "Steep (9+/12)", es: "Alta", de: "Steil", fr: "Forte", pt: "Íngreme", it: "Alta", nl: "Steil", pl: "Wysokie", sv: "Brant", no: "Bratt", da: "Stejl (9+/12)", fi: "Jyrkkä (9+/12)" } }
                    ]
                },
                {
                    id: "tearoff", type: "select", label: { en: "Tear-off", es: "Desmontaje", de: "Altzustand", fr: "Dépose", pt: "Remoção", it: "Rimozione Vecchio Tetto", nl: "Verwijderen Oud Dak", pl: "Demontaż", sv: "Rivning", no: "Rivning", da: "Nedrivning", fi: "Purku" }, default: 1, options: [
                        { value: 1, label: { en: "Layover (No tear-off)", es: "Sobre cubierta (Sin desmontaje)", de: "Überdachung (Kein Abtrag)", fr: "Recouvrement (Sans dépose)", pt: "Sobreposição (Sem remoção)", it: "Sovrapposizione (Nessuna rimozione)", nl: "Overlaag (Geen verwijdering)", pl: "Nakładka (Bez demontażu)", sv: "Överlägg (Ingen rivning)", no: "Overlegg (Ingen rivning)", da: "Overdækning (Ingen nedrivning)", fi: "Päällekkäin (Ei purkua)" } },
                        { value: 1.3, label: { en: "Full Tear-off", es: "Desmontaje Completo", de: "Komplett-Abtrag", fr: "Dépose complète", pt: "Remoção Completa", it: "Rimozione Completa", nl: "Volledige Verwijdering", pl: "Pełny Demontaż", sv: "Full Rivning", no: "Full Rivning", da: "Fuld nedrivning", fi: "Täydellinen purku" } }
                    ]
                }
            ],
            formula: "area * material * pitch * tearoff * 1.4",
            resultLabel: { en: "Estimated Total Cost", es: "Costo Total Estimado", de: "Geschätzte Gesamtkosten", fr: "Coût Total Estimé", pt: "Custo Total Estimado", it: "Costo Totale Stimato", nl: "Geschatte Totale Kosten", pl: "Szacowany Koszt Całkowity", sv: "Beräknad Totalkostnad", no: "Beregnet Totalkostnad", da: "Estimeret Totalomkostning", fi: "Arvioitu Kokonaiskustannus" },
            breakdown: [
                { label: { en: "Materials", es: "Materiales", de: "Materialien", fr: "Matériaux", pt: "Materiais", it: "Materiali", nl: "Materialen", pl: "Materiały", sv: "Material", no: "Materialer", da: "Materialer", fi: "Materiaalit" }, formula: "area * material * pitch" },
                { label: { en: "Labor", es: "Mano de Obra", de: "Arbeit", fr: "Main d'Œuvre", pt: "Mão de Obra", it: "Manodopera", nl: "Arbeid", pl: "Robocizna", sv: "Arbete", no: "Arbeid", da: "Arbejdsløn", fi: "Työ" }, formula: "area * material * pitch * 0.3" },
                { label: { en: "Disposal & Cleanup", es: "Retiro y Limpieza", de: "Entsorgung", fr: "Évacuation", pt: "Descarte", it: "Smaltimento", nl: "Afvoer", pl: "Utylizacja", sv: "Avfallshantering", no: "Avfallshåndtering", da: "Bortskaffelse & Oprydning", fi: "Jätehuolto & Siivous" }, formula: "area * material * (tearoff - 1 + 0.1)" },
                { label: { en: "Est. Lifespan (Years)", es: "Vida Útil Est. (Años)", de: "Gesch. Lebensdauer (Jahre)", fr: "Durée de Vie Est. (Ans)", pt: "Vida Útil Est. (Anos)", it: "Durata Stimata (Anni)", nl: "Gesch. Levensduur (Jaren)", pl: "Szac. Żywotność (Lata)", sv: "Beräknad Livslängd (År)", no: "Beregnet Levetid (År)", da: "Forventet Levetid (År)", fi: "Odotettu Käyttöikä (v)" }, formula: "material == 4 ? 25 : (material == 9 ? 50 : 75)", tooltip: { en: "Expected lifespan based on selected material (Asphalt: 25y, Metal: 50y, Tile: 75y).", es: "Vida útil esperada según material (Asfalto: 25a, Metal: 50a, Teja: 75a).", de: "Erwartete Lebensdauer je nach Material (Asphalt: 25J, Metall: 50J, Ziegel: 75J).", fr: "Durée de vie prévue selon matériau (Asphalte: 25a, Métal: 50a, Tuile: 75a).", pt: "Vida útil esperada baseada no material (Asfalto: 25a, Metal: 50a, Telha: 75a)." } }
            ],
            proFeatures: {
                pdf: true,
                pdfLabel: { en: "Get Your Free Quote", es: "Obtener Presupuesto Gratis", de: "Kostenloses Angebot", fr: "Devis Gratuit", pt: "Orçamento Grátis", it: "Ricevi Preventivo Gratuito", nl: "Krijg Gratis Offerte", pl: "Otrzymaj Darmową Wycenę", sv: "Få Gratis Offert", no: "Få Gratis Tilbud", da: "Få Gratis Tilbud", fi: "Pyydä Ilmainen Tarjous" }
            },
            content: {
                pt: "<h2>Fatores de custo para substituição de telhado</h2><p>A substituição de um telhado é um dos maiores investimentos.</p>",
                it: "<h2>Fattori di costo per il rifacimento del tetto</h2><p>Rifare il tetto è uno dei maggiori investimenti per un proprietario di casa. Il costo totale è influenzato dall\'area, dalla pendenza e dalla scelta dei materiali.</p>",
                nl: "<h2>Kostenfactoren voor dakvervanging</h2><p>Het vervangen van een dak is een van de grootste investeringen. De totale kosten worden beïnvloed door het dakoppervlak, de hellingsgraad en de materiaalkeuze.</p>",
                pl: "<h2>Czynniki wpływające na koszt wymiany dachu</h2><p>Wymiana dachu to jedna z największych inwestycji. Na całkowity koszt wpływa powierzchnia, nachylenie oraz wybór materiału.</p>",
                sv: "<h2>Kostnadsfaktorer för takbyte</h2><p>Att byta tak är en av de största investeringarna en husägare gör. Totalkostnaden påverkas av takyta, lutning och materialval.</p>",
                no: "<h2>Kostnadsfaktorer for takbytte</h2><p>Å bytte tak er en av de største investeringene en huseier gjør. Totalkostnaden påvirkes av takareal, vinkel og materialval.</p>",
                da: "<h2>Kostnadsfaktorer ved udskiftning af tag</h2><p>Udskiftning af et tag er en af de største investeringer. Den samlede pris påvirkes af tagareal, hældning og materialevalg.</p>",
                fi: "<h2>Kattoremontin kustannustekijät</h2><p>Katon uusiminen on yksi suurimmista investoinneista. Kokonaiskustannuksiin vaikuttavat pinta-ala, kaltevuus ja materiaalivalinta.</p>"
            }
        },
        faqs: {
            en: [{ q: "How long does a roof last?", a: "Asphalt roofs last 20-30 years, metal roofs 50+ years." }],
            de: [{ q: "Wie lange hält ein Dach?", a: "Asphaltdächer halten 20-30 Jahre, Metalldächer 50+ Jahre." }],
            es: [{ q: "¿Cuánto dura un techo?", a: "Los techos de asfalto duran 20-30 años, los de metal 50+." }],
            fr: [{ q: "Combien de temps dure un toit?", a: "Les toits en asphalte durent 20-30 ans, en métal 50+." }],
            pt: [{ q: "Quanto dura um telhado?", a: "Telhados de asfalto duram 20-30 anos, de metal 50+." }],
            it: [{ q: "Quanto dura un tetto?", a: "I tetti in asfalto durano 20-30 anni, quelli in metallo oltre 50 anni." }],
            nl: [{ q: "Hoe lang gaat een dak mee?", a: "Asfaltdaken gaan 20-30 jaar mee, metalen daken 50+ jaar." }],
            pl: [{ q: "Jak długo wytrzymuje dach?", a: "Dachy asfaltowe wytrzymują 20-30 lat, dachy metalowe ponad 50 lat." }],
            sv: [{ q: "Hur länge håller ett tak?", a: "Asfalttak håller 20-30 år, metaltak 50+ år." }],
            no: [{ q: "Hvor lenge varer et tak?", a: "Asfalttak varer i 20-30 år, metalltak i 50+ år." }],
            da: [{ q: "Hvor længe holder et tag?", a: "Tagpaptage holder 20-30 år, metaltage 50+ år." }],
            fi: [{ q: "Kuinka kauan katto kestää?", a: "Huopakatot kestävät 20-30 vuotta, peltikatot yli 50 vuotta." }]
        }
    }
};
