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
        content: {
            en: `
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
            es: `
                <div class="prose">
                    <h3>¿Por qué usar esta Calculadora de Hipoteca 2026?</h3>
                    <p>A diferencia de las calculadoras simples, esta herramienta ofrece una <strong>visión financiera completa</strong>. No solo calcula el capital y los intereses; incluye costos críticos que determinan tu pago mensual <em>real</em>:</p>
                    <ul>
                        <li><strong>Impuestos sobre la Propiedad:</strong> Basados en la tasa impositiva local.</li>
                        <li><strong>Seguro de Hogar:</strong> Esencial para proteger tu patrimonio.</li>
                        <li><strong>Gastos de Comunidad (HOA):</strong> Comunes en condominios y urbanizaciones.</li>
                    </ul>
                    <p>Usa los <strong>gráficos interactivos</strong> para visualizar cómo crece tu capital con el tiempo frente a los intereses pagados al banco. Ideal para comparar plazos de 15 vs 30 años.</p>
                </div>
            `,
            de: `
                <div class="prose">
                    <h3>Warum diesen Baufinanzierungsrechner 2026 nutzen?</h3>
                    <p>Im Gegensatz zu einfachen Rechnern bietet dieses Tool ein <strong>vollständiges finanzielles Bild</strong>. Es berechnet nicht nur Tilgung and Zinsen, sondern berücksichtigt auch wichtige Kosten, die Ihre <em>tatsächliche</em> monatliche Rate bestimmen:</p>
                    <ul>
                        <li><strong>Grundsteuer:</strong> Basierend auf Ihrem lokalen Hebesatz.</li>
                        <li><strong>Wohngebäudeversicherung:</strong> Essentiell zum Schutz Ihres Eigentums.</li>
                        <li><strong>Hausgeld/Nebenkosten:</strong> Wichtig bei Eigentumswohnungen oder Wohnanlagen.</li>
                    </ul>
                    <p>Nutzen Sie die <strong>interaktiven Diagramme</strong>, um zu visualisieren, wie Ihr Eigenkapital über die Zeit wächst im Vergleich zu den Zinsen. Perfekt zum Vergleich von 15- und 30-jährigen Darlehenslaufzeiten.</p>
                </div>
            `,
            fr: `
                <div class="prose">
                    <h3>Pourquoi utiliser cette calculatrice de prêt immobilier 2026 ?</h3>
                    <p>Contrairement aux calculatrices simples, cet outil offre une <strong>image financière complète</strong>. Il ne calcule pas seulement le capital et les intérêts ; il prend en compte les coûts critiques qui déterminent votre mensualité <em>réelle</em> :</p>
                    <ul>
                        <li><strong>Taxes Foncières :</strong> Basées sur votre taux d'imposition local.</li>
                        <li><strong>Assurance Habitation :</strong> Essentielle pour protéger votre patrimoine.</li>
                        <li><strong>Frais de Copropriété (HOA) :</strong> Courants dans les appartements et les lotissements.</li>
                    </ul>
                    <p>Utilisez les <strong>graphiques interactifs</strong> pour visualiser comment votre capital augmente au fil du temps par rapport aux intérêts payés à la banque. Parfait pour comparer des prêts sur 15 ou 25 ans.</p>
                </div>
            `,
            pt: `
                <div class="prose">
                    <h3>Por que usar esta Calculadora de Hipoteca 2026?</h3>
                    <p>Ao contrário de calculadoras simples, esta ferramenta fornece um <strong>quadro financeiro completo</strong>. Ela não calcula apenas o principal e os juros; ela considera custos críticos que determinam sua parcela mensal <em>real</em>:</p>
                    <ul>
                        <li><strong>Impostos sobre a Propriedade:</strong> Com base na taxa de imposto local.</li>
                        <li><strong>Seguro Residencial:</strong> Essencial para proteger seu patrimônio.</li>
                        <li><strong>Taxas de Condomínio (HOA):</strong> Comuns em apartamentos e comunidades planejadas.</li>
                    </ul>
                    <p>Use os <strong>gráficos interativos</strong> para visualizar como seu patrimônio cresce ao longo do tempo em relação aos juros pagos ao banco. Perfeito para comparar prazos de 15 vs. 30 anos.</p>
                </div>
            `,
            it: `
                <div class="prose">
                    <h3>Perché usare questo Calcolatore di Mutui 2026?</h3>
                    <p>A differenza dei semplici calcolatori, questo strumento fornisce un <strong>quadro finanziario completo</strong>. Non calcola solo capitale e interessi; include i costi critici che determinano la tua rata mensile <em>reale</em>:</p>
                    <ul>
                        <li><strong>Tasse sulla Proprietà:</strong> Basate sull'aliquota fiscale locale.</li>
                        <li><strong>Assicurazione Casa:</strong> Essenziale per proteggere il tuo patrimonio.</li>
                        <li><strong>Spese Condominiali (HOA):</strong> Comuni in appartamenti e complessi residenziali.</li>
                    </ul>
                    <p>Usa i <strong>grafici interattivi</strong> per visualizzare come cresce il tuo capitale nel tempo rispetto agli interessi pagati alla banca. Perfetto per confrontare mutui a 15 o 30 anni.</p>
                </div>
            `,
            nl: `
                <div class="prose">
                    <h3>Waarom deze Hypotheek Calculator 2026 gebruiken?</h3>
                    <p>In tegenstelling tot eenvoudige calculators biedt deze tool een <strong>volledig financieel beeld</strong>. Het berekent niet alleen hoofdsom en rente; het houdt rekening met kritieke kosten die uw <em>werkelijke</em> maandelijkse lasten bepalen:</p>
                    <ul>
                        <li><strong>Onroerendgoedbelasting:</strong> Gebaseerd op uw lokale belastingtarief.</li>
                        <li><strong>Opstalverzekering:</strong> Essentieel voor de bescherming van uw bezit.</li>
                        <li><strong>VvE-kosten:</strong> Gebruikelijk bij appartementen en geplande gemeenschappen.</li>
                    </ul>
                    <p>Gebruik de <strong>interactieve grafieken</strong> om te visualiseren hoe uw eigen vermogen in de loop van de tijd groeit ten opzichte van de rente die aan de bank wordt betaald. Perfect voor het vergelijken van leningtermijnen van 15 vs. 30 jaar.</p>
                </div>
            `,
            pl: `
                <div class="prose">
                    <h3>Dlaczego warto korzystać z tego kalkulatora hipotecznego 2026?</h3>
                    <p>W przeciwieństwie do prostych kalkulatorów, to narzędzie zapewnia <strong>pełny obraz finansowy</strong>. Nie tylko oblicza kapitał i odsetki; uwzględnia kluczowe koszty, które określają Twoją <em>rzeczywistą</em> miesięczną ratę:</p>
                    <ul>
                        <li><strong>Podatki od nieruchomości:</strong> Na podstawie lokalnej stawki podatkowej.</li>
                        <li><strong>Ubezpieczenie domu:</strong> Niezbędne do ochrony Twojego majątku.</li>
                        <li><strong>Czynsz (HOA):</strong> Powszechny w mieszkaniach i wspólnotach.</li>
                    </ul>
                    <p>Skorzystaj z <strong>interaktywnych wykresów</strong>, aby zwizualizować, jak rośnie wypracowany kapitał w czasie w porównaniu z odsetkami płaconymi bankowi. Idealne do porównania okresów kredytowania 15 i 30 lat.</p>
                </div>
            `,
            sv: `
                <div class="prose">
                    <h3>Varför använda denna bolånekalkylator 2026?</h3>
                    <p>Till skillnad från enkla kalkylatorer ger det här verktyget en <strong>komplett finansiell bild</strong>. Det beräknar inte bara amortering och ränta; det tar hänsyn till kritiska kostnader som avgör din <em>faktiska</em> månadskostnad:</p>
                    <ul>
                        <li><strong>Fastighetsskatt:</strong> Baserat på din lokala skattesats.</li>
                        <li><strong>Hemförsäkring:</strong> Viktigt för att skydda din tillgång.</li>
                        <li><strong>Samfällighetsavgifter (HOA):</strong> Vanligt i bostadsrätter och planerade områden.</li>
                    </ul>
                    <p>Använd de <strong>interaktiva diagrammen</strong> för att visualisera hur ditt eget kapital växer över tid jämfört med räntan som betalas till banken. Perfekt för att jämföra 15-åriga vs. 30-åriga lån.</p>
                </div>
            `,
            no: `
                <div class="prose">
                    <h3>Hvorfor bruke denne boliglånskalkulatoren 2026?</h3>
                    <p>I motsetning til enkle kalkulatorer, gir dette verktøyet et <strong>komplett økonomisk bilde</strong>. Det beregner ikke bare avdrag og renter; det tar hensyn til kritiske kostnader som bestemmer din <em>faktiske</em> månedlige betaling:</p>
                    <ul>
                        <li><strong>Eiendomsskatt:</strong> Basert på din lokale skattesats.</li>
                        <li><strong>Huseierforsikring:</strong> Viktig for å beskytte eiendelen din.</li>
                        <li><strong>Fellesutgifter (HOA):</strong> Vanlig i sameier og borettslag.</li>
                    </ul>
                    <p>Bruk de <strong>interaktive diagrammene</strong> til å visualisere hvordan egenkapitalen din vokser over tid kontra rentene som betalas til banken. Perfekt for å sammenligne 15-års vs. 30-års lån.</p>
                </div>
            `,
            da: `
                <div class="prose">
                    <h3>Hvorfor bruge denne realkreditberegner 2026?</h3>
                    <p>I modsætning til simple beregnere giver dette værktøj et <strong>komplet økonomisk billede</strong>. Det beregner ikke kun afdrag og renter; det tager højde for kritiske omkostninger, der bestemmer din <em>faktiske</em> månedlige ydelse:</p>
                    <ul>
                        <li><strong>Ejendomsskat:</strong> Baseret på din lokale skattesats.</li>
                        <li><strong>Husforsikring:</strong> Vigtig for at beskytte din aktiv.</li>
                        <li><strong>Ejerforeningsgebyrer (HOA):</strong> Almindeligt i ejerlejligheder og planlagte områder.</li>
                    </ul>
                    <p>Brug de <strong>interaktive diagrammer</strong> til at visualisere, hvordan din friværdi vokser over tid i forhold til de renter, der betales til banken. Perfekt til at sammenligne 15-årige vs. 30-årige lån.</p>
                </div>
            `,
            fi: `
                <div class="prose">
                    <h3>Miksi käyttää tätä vuoden 2026 asuntolainalaskuria?</h3>
                    <p>Toisin kuin yksinkertaiset laskurit, tämä työkalu tarjoaa <strong>täydellisen taloudellisen kuvan</strong>. Se ei laske vain pääomaa ja korkoa; se huomioi kriittiset kustannukset, jotka määrittävät <em>todellisen</em> kuukausieräsi:</p>
                    <ul>
                        <li><strong>Kiinteistövero:</strong> Perustuu paikalliseen veroprosenttiisi.</li>
                        <li><strong>Kotivakuutus:</strong> Välttämätön omaisuutesi suojaamiseksi.</li>
                        <li><strong>Yhtiövastike (HOA):</strong> Yleinen osakehuoneistoissa ja suunnitelluissa yhteisöissä.</li>
                    </ul>
                    <p>Käytä <strong>interaktiivisia kaavioita</strong> visualisoidaksesi, miten omapääomasi kasvaa ajan myötä suhteessa pankille maksettaviin korkoihin. Täydellinen 15 vuoden ja 30 vuoden laina-aikojen vertailuun.</p>
                </div>
            `
        },
        seo: {
            en: {
                synonyms: ["home loan calculator", "house payment calculator", "mortgage payment estimator", "home affordability calculator"],
                useCases: ["First-time homebuyers estimating monthly costs", "Refinancing to get a lower interest rate", "Comparing 15-year vs 30-year mortgages"],
                relatedTerms: ["PITI", "Amortization", "Escrow", "LTV", "DTI"],
                relatedCalculators: ["loan", "roi", "solar"]
            },
            es: {
                synonyms: ["calculadora de préstamo hipotecario", "calculadora de pagos de casa", "estimador de pagos de hipoteca", "calculadora de asequibilidad de vivienda"],
                useCases: ["Compradores de vivienda por primera vez", "Refinanciación para obtener una tasa más baja", "Comparar hipotecas a 15 vs 30 años"],
                relatedTerms: ["PITI", "Amortización", "Escrow", "LTV", "DTI"]
            },
            de: {
                synonyms: ["Baufinanzierungsrechner", "Hauskredit Rechner"],
                useCases: ["Monatliche Rate berechnen", "Zinsbindungsdauer vergleichen"],
                relatedTerms: ["Tilgungssatz", "Sollzins vs Effektivzins"]
            },
            fr: {
                synonyms: ["calculateur de prêt logement", "simulateur de mensualités", "calculer capacité d'emprunt"],
                useCases: ["Calcul des mensualités pour un premier achat", "Renégociation de taux", "Comparer prêts sur 15 et 25 ans"],
                relatedTerms: ["Amortissement", "Taux d'endettement", "Assurance emprunteur"]
            },
            pt: {
                synonyms: ["calculadora de empréstimo habitacional", "simulador de parcelas de casa", "estimativa de hipoteca"],
                useCases: ["Compradores de primeira viagem", "Refinanciamento de juros", "Comparar prazos de 15 vs 30 anos"],
                relatedTerms: ["Amortização", "Taxa Selic", "LTV", "DTI"]
            },
            it: {
                synonyms: ["calcolatore prestito casa", "simulatore rata mutuo", "stima pagamento ipotecario"],
                useCases: ["Calcolo rata per primo acquisto", "Surroga del mutuo", "Confronto mutuo 15 vs 30 anni"],
                relatedTerms: ["Ammortamento", "LTV", "Spread", "Euribor"]
            },
            nl: {
                synonyms: ["hypotheek berekenen tool", "maandlasten calculator", "huis lening simulator"],
                useCases: ["Starters die maandlasten schatten", "Oversluiten voor lagere rente", "Vergelijken 20 vs 30 jaar hypotheek"],
                relatedTerms: ["Annuïteit", "Lineair", "NHG", "LTV"]
            },
            pl: {
                synonyms: ["kalkulator kredytu mieszkaniowego", "symulacja raty hipoteki", "obliczanie zdolności kredytowej"],
                useCases: ["Pierwszy zakup nieruchomości", "Refinansowanie kredytu", "Porównanie rat na 20 i 30 lat"],
                relatedTerms: ["Amortyzacja", "Wkład własny", "WIBOR", "LTV"]
            },
            sv: {
                synonyms: ["bolånekalkyl", "beräkna månadskostnad hus", "lånelöfte kalkylator"],
                useCases: ["Förstagångsköpare budgetering", "Omförhandling av ränta", "Jämföra 30-åriga vs 50-åriga lån"],
                relatedTerms: ["Amorteringskrav", "Belåningsgrad", "Skuldkvotsakut"]
            },
            no: {
                synonyms: ["boliglånskalkulator", "beregne månedsbeløp bolig", "estimere lånekostnad"],
                useCases: ["Førstegangskjøpere planlegging", "Refinansiering av boliglån", "Sammenligne løpetid på lån"],
                relatedTerms: ["Avdrag", "Renters rente", "Belåningsgrad"]
            },
            da: {
                synonyms: ["realkreditberegner", "beregn afdrag på bolig", "låneberegner hus"],
                useCases: ["Førstegangskøbere estimering", "Omlægning af lån", "Sammenlign fast vs variabel rente"],
                relatedTerms: ["Afdrag", "Bidragssats", "Belåningsgrad"]
            },
            fi: {
                synonyms: ["asuntolainan kuukausierälaskuri", "lainalaskuri lyhennystaulukko"],
                useCases: ["Ensiasunnon ostajan budjetointi", "Lainan uudelleenrahoitus"],
                relatedTerms: ["Todellinen vuosikorko", "Annuiteettilaina"]
            }
        },
        faqs: {
            en: [
                { q: "How much house can I afford?", a: "A general rule is that your monthly mortgage payment should not exceed 28% of your gross monthly income (the 28/36 rule). For example, if you earn $6,000/month, aim to keep your payment under $1,680. Our calculator helps you test different scenarios." },
                { q: "What is included in a mortgage payment?", a: "Your monthly payment typically includes PITI: Principal (loan balance), Interest (cost of borrowing), Taxes (property taxes), and Insurance (homeowners). Some payments also include HOA fees and PMI if your down payment is under 20%." },
                { q: "How does the down payment affect my loan?", a: "A larger down payment reduces your loan amount, which lowers your monthly payment and total interest cost. Put down 20% to avoid PMI (Private Mortgage Insurance), which typically costs 0.5-1% of your loan annually." },
                { q: "What credit score do I need for a mortgage?", a: "Conventional loans typically require 620+, FHA loans accept 580+ (or 500 with 10% down), VA loans have no minimum but lenders prefer 620+. A score of 740+ gets you the best interest rates, potentially saving tens of thousands over the loan term." },
                { q: "What is the difference between APR and interest rate?", a: "The interest rate is the cost of borrowing the principal. APR (Annual Percentage Rate) includes the interest rate PLUS fees like origination costs, points, and mortgage insurance—giving you the true cost of the loan. Always compare APRs, not just rates." },
                { q: "Should I choose a 15-year or 30-year mortgage?", a: "A 15-year mortgage has higher monthly payments but saves 50-60% on total interest and builds equity faster. A 30-year offers lower payments and more flexibility. Choose 15-year if you can afford it; choose 30-year if you need cash flow or plan to invest the difference." },
                { q: "When should I refinance my mortgage?", a: "Consider refinancing when rates drop 0.75-1% below your current rate, you can recoup closing costs within 2-3 years of staying in the home, or you want to switch from ARM to fixed-rate. Use our calculator to compare your current payment to potential new payment." },
                { q: "What are closing costs and how much are they?", a: "Closing costs are fees paid when finalizing your mortgage—typically 2-5% of the loan amount. They include appraisal ($300-600), title insurance ($500-1,500), origination fees (0.5-1% of loan), and prepaid taxes/insurance. On a $300K loan, expect $6,000-15,000." }
            ],
            es: [
                { q: "¿Qué casa me puedo permitir?", a: "Una regla general es que tu cuota no supere el 28% de tus ingresos brutos mensuales. Por ejemplo, si ganas $6,000/mes, mantén tu pago bajo $1,680." },
                { q: "¿Qué incluye la cuota hipotecaria?", a: "Incluye PITI: Principal (balance del préstamo), Interés, Impuestos sobre la propiedad, y Seguro de vivienda. A veces incluye HOA y PMI si tu entrada es menor al 20%." },
                { q: "¿Cómo afecta la entrada al préstamo?", a: "Una entrada mayor reduce el préstamo y los intereses totales. Aporta 20% para evitar el PMI, que cuesta 0.5-1% del préstamo anualmente." },
                { q: "¿Qué puntaje de crédito necesito?", a: "Préstamos convencionales requieren 620+, FHA acepta 580+ (o 500 con 10% de entrada). Un puntaje de 740+ te da las mejores tasas de interés." },
                { q: "¿Cuál es la diferencia entre APR y tasa de interés?", a: "La tasa de interés es el costo de pedir prestado. El APR incluye la tasa MÁS comisiones como costos de originación y seguro hipotecario—mostrando el costo real del préstamo." },
                { q: "¿Hipoteca a 15 o 30 años?", a: "A 15 años: pagos más altos pero ahorras 50-60% en intereses totales. A 30 años: pagos más bajos y más flexibilidad. Elige según tu capacidad de pago." },
                { q: "¿Cuándo debo refinanciar?", a: "Considera refinanciar cuando las tasas bajen 0.75-1% por debajo de tu tasa actual y puedas recuperar los costos de cierre en 2-3 años." },
                { q: "¿Qué son los costos de cierre?", a: "Son tarifas pagadas al finalizar la hipoteca—típicamente 2-5% del préstamo. Incluyen tasación, seguro de título, y gastos prepagados. En un préstamo de $300K, espera $6,000-15,000." }
            ],
            de: [
                { q: "Wie viel Haus kann ich mir leisten?", a: "Eine Faustregel besagt, dass Ihre monatliche Hypothekenzahlung 28% Ihres Bruttoeinkommens nicht überschreiten sollte." },
                { q: "Was ist in einer Hypothekenzahlung enthalten?", a: "Typischerweise enthält sie Kapital, Zinsen, Grundsteuer und Wohngebäudeversicherung (PITI). Manchmal auch Hausgeld und PMI." },
                { q: "Wie wirkt sich die Anzahlung auf mein Darlehen aus?", a: "Eine größere Anzahlung reduziert den Kreditbetrag und die Gesamtzinsen. 20% Anzahlung vermeidet PMI." },
                { q: "Sollte ich 15 oder 30 Jahre Laufzeit wählen?", a: "15 Jahre: höhere Raten, aber 50-60% Zinsersparnis. 30 Jahre: niedrigere Raten, mehr Flexibilität." }
            ],
            fr: [
                { q: "Combien puis-je emprunter ?", a: "Une règle générale est que votre mensualité ne doit pas dépasser 28 % de votre revenu mensuel brut. Par exemple, si vous gagnez 6 000 €/mois, visez une mensualité inférieure à 1 680 €." },
                { q: "Que comprend une mensualité ?", a: "Votre paiement comprend généralement le capital, les intérêts, les taxes foncières et l'assurance habitation. Certains paiements incluent également les frais de copropriété." },
                { q: "Quel est l'impact de l'apport personnel ?", a: "Un apport plus important réduit le montant de votre prêt, ce qui diminue votre mensualité et le coût total des intérêts." },
                { q: "Quelle durée choisir : 15 ou 30 ans ?", a: "15 ans : mensualités plus élevées mais économie de 50-60 % sur les intérêts totaux. 30 ans : mensualités plus faibles et plus de flexibilité." }
            ],
            pt: [
                { q: "Quanto posso gastar em uma casa?", a: "Uma regra geral é que sua parcela mensal não deve exceder 28% de sua renda mensal bruta. Por exemplo, se você ganha R$ 6.000/mês, tente manter sua parcela abaixo de R$ 1.680." },
                { q: "O que está incluído em uma parcela de hipoteca?", a: "Seu pagamento mensal normalmente inclui o principal, juros, impostos sobre a propriedade e seguro residencial. Alguns pagamentos também incluem taxas de condomínio." },
                { q: "Como a entrada afeta meu empréstimo?", a: "Uma entrada maior reduz o valor do empréstimo, o que diminui sua parcela mensal e o custo total de juros." },
                { q: "Devo escolher 15 ou 30 anos?", a: "15 anos: parcelas mensais mais altas, mas economiza 50-60% em juros totais. 30 anos: parcelas menores e mais flexibilidade." }
            ],
            it: [
                { q: "Quanto posso permettermi per una casa?", a: "Una regola generale è che la tua rata mensile non dovrebbe superare il 28% del tuo reddito mensile lordo. Ad exemple, se guadagni 6.000 €/mese, punta a una rata inferiore a 1.680 €." },
                { q: "Cosa è incluso in una rata del mutuo?", a: "Il tuo pagamento mensile include solitamente capitale, interessi, tasse sulla proprietà e assicurazione sulla casa. Alcuni pagamenti includono anche le spese condominiali." },
                { q: "In che modo l'acconto influisce sul mio prestito?", a: "Un acconto maggiore riduce l'importo del prestito, il che abbassa la tua rata mensile e il costo totale degli interessi." },
                { q: "Dovrei scegliere 15 o 30 anni?", a: "15 anni: rate più alte ma risparmi il 50-60% sugli interessi totali. 30 anni: rate più basse e maggiore flessibilità." }
            ],
            nl: [
                { q: "Hoeveel huis kan ik betalen?", a: "Een algemene regel is dat uw maandelijkse hypotheeklast niet hoger mag zijn dan 28% van uw bruto maandinkomen. Als u bijvoorbeeld € 6.000 per maand verdient, streef dan naar een last van minder dan € 1.680." },
                { q: "Wat is inbegrepen in een hypotheekbetaling?", a: "Uw maandelijkse betaling omvat doorgaans hoofdsom, rente, onroerendgoedbelasting en opstalverzekering. Sommige betalingen bevatten ook VvE-kosten." },
                { q: "Hoe beïnvloedt de aanbetaling mijn lening?", a: "Een grotere aanbetaling verlaagt het leenbedrag, waardoor uw maandelijkse lasten en de totale rentekosten dalen." },
                { q: "Moet ik kiezen voor 15 of 30 jaar?", a: "15 jaar: hogere maandlasten maar 50-60% besparing op totale rente. 30 jaar: lagere lasten en meer flexibiliteit." }
            ],
            pl: [
                { q: "Na jaki dom mnie stać?", a: "Ogólna zasada mówi, że Twoja miesięczna rata kredytu nie powinna przekraczać 28% Twojego dochodu brutto. Na przykład, jeśli zarabiasz 6000 zł/mies., celuj w ratę poniżej 1680 zł." },
                { q: "Co jest zawarte w racie kredytu hipotecznego?", a: "Twoja miesięczna wpłata zazwyczaj obejmuje kapitał, odsetki, podatki od nieruchomości i ubezpieczenie domu. Niektóre płatności obejmują również koszynsz (HOA)." },
                { q: "Jak wkład własny wpływa na kredyt?", a: "Większy wkład własny zmniejsza kwotę pożyczki, co obniża miesięczną ratę i całkowity koszt odsetek." },
                { q: "Czy powinienem wybrać 15 czy 30 lat?", a: "15 lat: wyższe raty, ale oszczędność 50-60% na odsetkach. 30 lat: niższe raty i większa elastyczność." }
            ],
            sv: [
                { q: "Hur dyrt hus har jag råd med?", a: "En tumregel är att din månatliga bolånekostnad inte bör överstiga 28 % av din bruttoinkomst. Om du till exempel tjänar 60 000 kr/mån bör du sikta på en kostnad under 16 800 kr." },
                { q: "Vad ingår i en bolånebetalning?", a: "Din månadsbetalning inkluderar vanligtvis amortering, ränta, fastighetsskatt och hemförsäkring. Vissa betalningar inkluderar även samfällighetsavgifter." },
                { q: "Hur påverkar kontantinsatsen mitt lån?", a: "En större kontantinsats minskar lånebeloppet, vilket sänker din månadsbetalning och den totala räntekostnaden." },
                { q: "Ska jag välja 15 eller 30 år?", a: "15 år: högre månadsbetalningar men sparar 50-60 % i räntekostnader. 30 år: lägre månadskostnad och mer flexibilitet." }
            ],
            no: [
                { q: "Hvor dyrt hus har jeg råd til?", a: "En tommelfingerregel er at din månedlige boliglånskostnad ikke bør overstige 28 % av din bruttoinntekt. Hvis du for eksempel tjener 60 000 kr/mnd, bør du sikte på en kostnad under 16 800 kr." },
                { q: "Hva er inkludert i en boliglånsbetaling?", a: "Månedsbetalingen din inkluderer vanligvis avdrag, renter, eiendomsskatt og huseierforsikring. Noen betalinger inkluderer også felleskostnader." },
                { q: "Hvordan påvirker egenkapitalen lånet mitt?", a: "Mer egenkapital reduserer lånebeløpet, noe som senker månedsbetalingen din og den totale rentekostnaden." },
                { q: "Bør jeg velge 15 eller 30 år?", a: "15 år: høyere månedsbetalinger, men sparer 50-60 % i rentekostnader. 30 år: lavere månadskostnad og mer fleksibilitet." }
            ],
            da: [
                { q: "Hvor dyrt et hus har jeg råd til?", a: "En tommelfingerregel er, at din månedlige realkreditydelse ikke bør overstige 28 % af din bruttoindkomst. Hvis du f.eks. tjener 60.000 kr./md., skal du gå efter en ydelse under 16.800 kr." },
                { q: "Hvad er inkluderet i en boligydelse?", a: "Din månedlige betaling inkluderer normalt afdrag, renter, ejendomsskat og husforsikring. Nogle betalinger inkluderer også ejerforeningsgebyrer." },
                { q: "Hvordan påvirker udbetalingen mit lån?", a: "En større udbetaling mindsker lånebeløbet, hvilket sænker din månedlige ydelse og de samlede renteomkostninger." },
                { q: "Skal jeg vælge 15 eller 30 år?", a: "15 år: højere månedlige ydelser, men sparer 50-60 % i renteomkostninger. 30 år: lavere ydelser og mere fleksibilitet." }
            ],
            fi: [
                { q: "Kuinka kalliiseen asuntoon minulla on varaa?", a: "Peukalosääntönä on, että kuukausittainen asuntolainasi ei saisi ylittää 28 % bruttotuloistasi. Jos ansaitset esimerkiksi 6 000 €/kk, tavoittele alle 1 680 €:n erää." },
                { q: "Mitä asuntolainan kuukausierä sisältää?", a: "Kuukausieräsi sisältää yleensä lyhennyksen, koron, kiinteistöveron ja kotivakuutuksen. Jotkut maksut sisältävät myös yhtiövastikkeen." },
                { q: "Miten käsiraha vaikuttaa lainaani?", a: "Suurempi käsiraha pienentää lainasummaa, mikä laskee kuukausierääsi ja kokonaiskorkokuluja." },
                { q: "Pitäisikö minun valita 15 vai 30 vuotta?", a: "15 vuotta: suuremmat kuukausierät, mutta säästät 50-60 % kokonaiskoroissa. 30 vuotta: pienemmät erät ja enemmän joustavuutta." }
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
            formula: "(rate > 0 ? (Math.max(0, principal - down) * (rate/100/12) * Math.pow(1 + rate/100/12, years*12) / (Math.pow(1 + rate/100/12, years*12) - 1)) : (Math.max(0, principal - down) / (years * 12 || 1))) + (tax / 12) + (insurance / 12) + hoa + (down < principal * 0.2 ? (principal - down) * 0.005 / 12 : 0)",
            resultFormat: "currency",
            resultLabel: { en: "Monthly Payment", fi: "Kuukausierä", de: "Monatliche Rate", es: "Pago Mensual", fr: "Mensualité", pt: "Parcela Mensal", it: "Rata Mensile", nl: "Maandelijkse Lasten", pl: "Miesięczna Rata", sv: "Månadskostnad", no: "Månedlig Betaling", da: "Månedlig Ydelse" },
            breakdown: [
                { label: { en: "Principal & Interest", fi: "Lyhennys ja korko", de: "Kapital & Zinsen", es: "Capital e Interés", fr: "Capital et Intérêts", pt: "Capital e Juros", it: "Capitale e Interessi", nl: "Aflossing en Rente", pl: "Kapitał i Odsetki", sv: "Amortering och Ränta", no: "Avdrag og Renter", da: "Afdrag og Rente" }, formula: "rate > 0 ? (principal - down) * (rate/100/12) * Math.pow(1 + rate/100/12, years*12) / (Math.pow(1 + rate/100/12, years*12) - 1) : (principal - down) / (years * 12 || 1)", format: "currency" },
                { label: { en: "Property Tax", fi: "Kiinteistövero", de: "Grundsteuer", es: "Impuestos", fr: "Taxe Foncière", pt: "IPTU", it: "Tassa di Proprietà", nl: "OZB", pl: "Podatek", sv: "Fastighetsskatt", no: "Eiendomsskatt", da: "Ejendomsskat" }, formula: "tax / 12", format: "currency" },
                { label: { en: "Insurance", fi: "Vakuutus", de: "Versicherung", es: "Seguro", fr: "Assurance", pt: "Seguro", it: "Assicurazione", nl: "Verzekering", pl: "Ubezpieczenie", sv: "Försäkring", no: "Forsikring", da: "Forsikring" }, formula: "insurance / 12", format: "currency" },
                { label: { en: "HOA", fi: "Yhtiövastike", de: "Hausgeld", es: "Gastos Comunes", fr: "Charges", pt: "Condomínio", it: "Spese Condominiali", nl: "VvE", pl: "Czynsz", sv: "Månadsavgift", no: "Fellesutgifter", da: "Ejerforening" }, formula: "hoa", format: "currency" }
            ],
            metrics: [
                { label: { en: "Total Loan Amount", de: "Nettodarlehensbetrag", es: "Monto neto del préstamo", fr: "Montant du Prêt", pt: "Valor do Empréstimo", it: "Importo del Prestito", nl: "Leningbedrag", pl: "Kwota Kredytu", sv: "Lånebelopp", no: "Lånebeløp", da: "Lånebeløb", fi: "Lainan Määrä" }, formula: "principal - down", format: "currency" },
                { label: { en: "Total Interest Paid", de: "Gesamte Zinskosten", es: "Total de intereses", fr: "Intérêts Totaux", pt: "Juros Totais", it: "Interessi Totali", nl: "Totale Rente", pl: "Suma Odsetek", sv: "Total Ränta", no: "Total Rente", da: "Samlede Renter", fi: "Kokonaiskorko" }, formula: "rate > 0 ? ((((principal - down) * (rate/100/12) * Math.pow(1 + rate/100/12, years*12) / (Math.pow(1 + rate/100/12, years*12) - 1)) * years * 12) - (principal - down)) : 0", format: "currency" }
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
        content: {
            en: `
                <div class="prose">
                    <h3>Understand Your Loan Payments in 2026</h3>
                    <p>Whether you're financing a car, consolidating debt, or taking out a personal loan, knowing your <strong>true monthly payment</strong> is essential for budgeting. This calculator shows you both the payment and <strong>total interest cost</strong>.</p>
                    <ul>
                        <li><strong>Personal Loans:</strong> Typically 10-25% APR depending on credit.</li>
                        <li><strong>Auto Loans:</strong> Often 5-12% APR with terms from 36-72 months.</li>
                        <li><strong>Debt Consolidation:</strong> Compare your current rates to potential savings.</li>
                    </ul>
                    <p>A shorter term means higher payments but <strong>less total interest</strong>. Use the calculator to find your sweet spot.</p>
                </div>
            `,
            es: `
                <div class="prose">
                    <h3>Entiende tus Pagos de Préstamo en 2026</h3>
                    <p>Ya sea que financies un coche, consolides deudas o pidas un préstamo personal, conocer tu <strong>pago mensual real</strong> es esencial para tu presupuesto. Esta calculadora te muestra tanto el pago como el <strong>costo total de intereses</strong>.</p>
                    <ul>
                        <li><strong>Préstamos Personales:</strong> Típicamente 10-25% TAE según el crédito.</li>
                        <li><strong>Préstamos de Coche:</strong> A menudo 5-12% TAE con plazos de 36-72 meses.</li>
                        <li><strong>Consolidación de Deuda:</strong> Compara tus tasas actuales con ahorros potenciales.</li>
                    </ul>
                    <p>Un plazo más corto significa pagos mensuales más altos pero <strong>menos interés total</strong>. Usa la calculadora para encontrar tu equilibrio ideal.</p>
                </div>
            `,
            de: `
                <div class="prose">
                    <h3>Verstehen Sie Ihre Kreditraten im Jahr 2026</h3>
                    <p>Egal, ob Sie ein Auto finanzieren, Schulden konsolidieren oder einen Privatkredit aufnehmen, die Kenntnis Ihrer <strong>tatsächlichen monatlichen Rate</strong> ist für die Budgetplanung unerlässlich. Dieser Rechner zeigt Ihnen sowohl die Rate als auch die <strong>Gesamtzinskosten</strong>.</p>
                    <ul>
                        <li><strong>Privatkredite:</strong> In der Regel 10-25% effektiver Jahreszins je nach Bonität.</li>
                        <li><strong>Autokredite:</strong> Oft 5-12% effektiver Jahreszins mit Laufzeiten von 36-72 Monaten.</li>
                        <li><strong>Schuldenkonsolidierung:</strong> Vergleichen Sie Ihre aktuellen Zinssätze mit potenziellen Einsparungen.</li>
                    </ul>
                    <p>Eine kürzere Laufzeit bedeutet höhere Raten, aber <strong>weniger Gesamtzinsen</strong>. Nutzen Sie den Rechner, um das optimale Gleichgewicht zu finden.</p>
                </div>
            `,
            fr: `
                <div class="prose">
                    <h3>Comprendre vos remboursements de prêt en 2026</h3>
                    <p>Que vous financiez une voiture, consolidiez vos dettes ou contractiez un prêt personnel, connaître votre <strong>mensualité réelle</strong> est essentiel pour votre budget. Cette calculatrice vous montre à la fois le paiement et le <strong>coût total des intérêts</strong>.</p>
                    <ul>
                        <li><strong>Prêts Personnels:</strong> Généralement 10-25% TAEG selon le crédit.</li>
                        <li><strong>Prêts Auto:</strong> Souvent 5-12% TAEG avec des durées de 36 à 72 mois.</li>
                        <li><strong>Rachat de Crédit:</strong> Comparez vos taux actuels avec les économies potentielles.</li>
                    </ul>
                    <p>Une durée plus courte signifie des mensualités plus élevées mais <strong>moins d'intérêts totaux</strong>. Utilisez la calculatrice pour trouver votre équilibre.</p>
                </div>
            `,
            pt: `
                <div class="prose">
                    <h3>Entenda seus pagamentos de empréstimo em 2026</h3>
                    <p>Esteja você financiando um carro, consolidando dívidas ou fazendo um empréstimo pessoal, saber sua <strong>parcela mensal real</strong> é essencial para o orçamento. Esta calculadora mostra tanto o pagamento quanto o <strong>custo total de juros</strong>.</p>
                    <ul>
                        <li><strong>Empréstimos Pessoais:</strong> Normalmente 10-25% CET dependendo do crédito.</li>
                        <li><strong>Empréstimos de Carro:</strong> Muitas vezes 5-12% CET com prazos de 36-72 meses.</li>
                        <li><strong>Consolidação de Dívida:</strong> Compare suas taxas atuais com as economias potenciais.</li>
                    </ul>
                    <p>Um prazo mais curto significa parcelas mais altas, mas <strong>menos juros totais</strong>. Use a calculadora para encontrar o seu ponto ideal.</p>
                </div>
            `,
            it: `
                <div class="prose">
                    <h3>Comprendi le tue rate del prestito nel 2026</h3>
                    <p>Che tu stia finanziando un'auto, consolidando un debito o chiedendo un prestito personale, conoscere la tua <strong>rata mensile reale</strong> è essenziale per il budget. Questo calcolatore ti mostra sia il pagamento che il <strong>costo totale degli interessi</strong>.</p>
                    <ul>
                        <li><strong>Prestiti Personali:</strong> In genere 10-25% TAEG in base al credito.</li>
                        <li><strong>Prestiti Auto:</strong> Spesso 5-12% TAEG con durate da 36 a 72 mesi.</li>
                        <li><strong>Consolidamento Debiti:</strong> Confronta i tuoi tassi attuali con il potenziale risparmio.</li>
                    </ul>
                    <p>Una durata più breve significa rate più alte ma <strong>meno interessi totali</strong>. Usa il calcolatore per trovare il tuo equilibrio.</p>
                </div>
            `,
            nl: `
                <div class="prose">
                    <h3>Begrijp uw leningbetalingen in 2026</h3>
                    <p>Of u nu een auto financiert, schulden consolideert of een persoonlijke lening afsluit, het kennen van uw <strong>werkelijke maandelijkse betaling</strong> is essentieel voor uw budget. Deze calculator toont u zowel de betaling als de <strong>totale rentekosten</strong>.</p>
                    <ul>
                        <li><strong>Persoonlijke leningen:</strong> Meestal 10-25% JKP, afhankelijk van uw krediet.</li>
                        <li><strong>Autoleningen:</strong> Vaak 5-12% JKP met looptijden van 36-72 maanden.</li>
                        <li><strong>Schuldconsolidatie:</strong> Vergelijk uw huidige tarieven met potentiële besparingen.</li>
                    </ul>
                    <p>Een kortere looptijd betekent hogere betalingen, maar <strong>minder totale rente</strong>. Gebruik de calculator om uw ideale balans te vinden.</p>
                </div>
            `,
            pl: `
                <div class="prose">
                    <h3>Zrozum swoje raty pożyczki w 2026 roku</h3>
                    <p>Niezależnie od tego, czy finansujesz samochód, konsolidujesz zadłużenie, czy bierzesz pożyczkę gotówkową, znajomość <strong>rzeczywistej miesięcznej raty</strong> jest kluczowa dla budżetu. Ten kalkulator pokazuje zarówno ratę, jak i <strong>całkowity koszt odsetek</strong>.</p>
                    <ul>
                        <li><strong>Pożyczki gotówkowe:</strong> Zazwyczaj 10-25% RRSO w zależności od kredytu.</li>
                        <li><strong>Kredyty samochodowe:</strong> Często 5-12% RRSO z okresem od 36 do 72 miesięcy.</li>
                        <li><strong>Konsolidacja zadłużenia:</strong> Porównaj swoje obecne stawki z potencjalnymi oszczędnościami.</li>
                    </ul>
                    <p>Krótszy okres oznacza wyższe raty, ale <strong>mniejszą sumę odsetek</strong>. Skorzystaj z kalkulatora, aby znaleźć optymalne rozwiązanie.</p>
                </div>
            `,
            sv: `
                <div class="prose">
                    <h3>Förstå dina lånebetalningar 2026</h3>
                    <p>Oavsett om du finansierar en bil, samlar lån eller tar ett privatlån är det viktigt för din budget att känna till din <strong>faktiska månadskostnad</strong>. Denna kalkylator visar både betalningen och den <strong>totala räntekostnaden</strong>.</p>
                    <ul>
                        <li><strong>Privatlån:</strong> Vanligtvis 10-25 % effektiv ränta beroende på kredit.</li>
                        <li><strong>Billån:</strong> Ofta 5-12 % effektiv ränta med löptid på 36-72 månader.</li>
                        <li><strong>Skuldsanering:</strong> Jämför dina nuvarande räntor med potentiella besparingar.</li>
                    </ul>
                    <p>En kortare löptid innebär högre månadskostnad men <strong>mindre total ränta</strong>. Använd kalkylatorn för att hitta rätt balans.</p>
                </div>
            `,
            no: `
                <div class="prose">
                    <h3>Forstå dine lånebetalinger i 2026</h3>
                    <p>Enten du finansierer en bil, samler gjeld eller tar et forbrukslån, er det avgjørende for budsjettet å kjenne din <strong>faktiske månedlige betaling</strong>. Denne kalkulatoren viser deg både betalingen og den <strong>totale rentekostnaden</strong>.</p>
                    <ul>
                        <li><strong>Forbrukslån:</strong> Vanligvis 10-25 % effektiv rente avhengig av kreditt.</li>
                        <li><strong>Billån:</strong> Ofte 5-12 % effektiv rente med løpetid fra 36-72 måneder.</li>
                        <li><strong>Gjeldsordning:</strong> Sammenlign dine nåværende renter med potensielle besparelser.</li>
                    </ul>
                    <p>En kortere løpetid betyr høyere betalinger, men <strong>mindre total rente</strong>. Bruk kalkulatoren for å finne ditt ideelle nivå.</p>
                </div>
            `,
            da: `
                <div class="prose">
                    <h3>Forstå dine låneafdrag i 2026</h3>
                    <p>Uanset om du finansierer en bil, samler gæld eller tager et privatlån, er det vigtigt for budgettet at kende din <strong>faktiske månedlige ydelse</strong>. Denne beregner viser dig både ydelsen og de <strong>samlede renteomkostninger</strong>.</p>
                    <ul>
                        <li><strong>Privatlån:</strong> Typisk 10-25 % ÅOP afhængigt af kredit.</li>
                        <li><strong>Billån:</strong> Ofte 5-12 % ÅOP med løbetider fra 36-72 måneder.</li>
                        <li><strong>Gældskonsolidering:</strong> Sammenlign dine nuværende renter med potentielle besparelser.</li>
                    </ul>
                    <p>En kortere løbetid betyder højere ydelser, men <strong>færre samlede renter</strong>. Brug beregneren til at finde din balance.</p>
                </div>
            `,
            fi: `
                <div class="prose">
                    <h3>Ymmärrä lainanmaksuerosi vuonna 2026</h3>
                    <p>Rahoitatpa autoa, yhdistät velkoja tai otat kulutusluottoa, <strong>todellisen kuukausierän</strong> tietäminen on välttämätöntä budjetoinnin kannalta. Tämä laskuri näyttää sekä erän että <strong>kokonaiskorkokulut</strong>.</p>
                    <ul>
                        <li><strong>Kulutusluotot:</strong> Yleensä 10-25 % todellinen vuosikorko luottotiedoista riippuen.</li>
                        <li><strong>Autolainat:</strong> Usein 5-12 % todellinen vuosikorko 36-72 kuukauden maksuajalla.</li>
                        <li><strong>Velkojen yhdistäminen:</strong> Vertaa nykyisiä korkojasi mahdollisiin säästöihin.</li>
                    </ul>
                    <p>Lyhyempi maksuaika tarkoittaa suurempia eriä, mutta <strong>pienempiä kokonaiskorkoja</strong>. Käytä laskuria löytääksesi sinulle sopivan tasapainon.</p>
                </div>
            `
        },
        seo: {
            en: {
                synonyms: ["loan payment calculator", "personal loan calculator", "auto loan calculator", "loan amortization calculator"],
                useCases: ["Calculating monthly car payments", "Comparing loan offers", "Planning debt consolidation"],
                relatedTerms: ["loan APR", "monthly payment", "amortization schedule", "total interest", "loan term"],
                relatedCalculators: ["mortgage", "roi", "crypto"]
            },
            es: {
                synonyms: ["calculadora de cuotas de préstamo", "calculadora de préstamo personal", "calculadora de préstamo de coche", "calculadora de amortización"],
                useCases: ["Cálculo de pagos mensuales de coche", "Comparación de ofertas de préstamo", "Planificación de consolidación de deuda"],
                relatedTerms: ["APR del préstamo", "pago mensual", "tabla de amortización", "interés total"]
            },
            de: {
                synonyms: ["Ratenkredit Rechner", "Autokredit Kalkulator", "Darlehensrechner"],
                useCases: ["Autofinanzierung berechnen", "Kreditangebote vergleichen"],
                relatedTerms: ["effektiver Jahreszins", "Monatsrate", "Tilgungsplan"]
            },
            fr: {
                synonyms: ["calculateur de mensualités de prêt", "simulateur de crédit personnel", "calcul de prêt auto"],
                useCases: ["Calcul des mensualités auto", "Comparer les offres de crédit", "Planifier un rachat de crédit"],
                relatedTerms: ["TAEG du prêt", "mensualité", "tableau d'amortissement"]
            },
            pt: {
                synonyms: ["calculadora de parcelas de empréstimo", "simulador de crédito pessoal", "calculadora de financiamento auto"],
                useCases: ["Cálculo de parcelas de carro", "Comparar ofertas de empréstimo", "Planejar consolidação de dívida"],
                relatedTerms: ["CET do empréstimo", "parcela mensal", "tabela de amortização"]
            },
            it: {
                synonyms: ["calcolatore rata prestito", "simulatore prestito personale", "calcolo finanziamento auto"],
                useCases: ["Calcolo rate auto mensili", "Confronto offerte di prestito", "Pianificazione consolidamento debiti"],
                relatedTerms: ["TAEG del prestito", "rata mensile", "piano di ammortamento"]
            },
            nl: {
                synonyms: ["lening maandlasten calculator", "persoonlijke lening simulator", "autolening berekenen"],
                useCases: ["Berekenen maandelijkse autokosten", "Vergelijken van leningoffertes", "Planning van schuldconsolidatie"],
                relatedTerms: ["JKP van de lening", "maandelijkse betaling", "aflossingsschema"]
            },
            pl: {
                synonyms: ["kalkulator raty pożyczki", "symulator kredytu gotówkowego", "kalkulator kredytu samochodowego"],
                useCases: ["Obliczanie miesięcznych rat za samochód", "Porównywanie ofert pożyczek", "Planowanie konsolidacji zadłużenia"],
                relatedTerms: ["RRSO pożyczki", "miesięczna rata", "harmonogram spłat"]
            },
            sv: {
                synonyms: ["lånekalkylator månadskostnad", "privatlånskalkylator", "billånskalkyl"],
                useCases: ["Beräkna månadskostnad för bil", "Jämföra låneebjudanden", "Planera skuldsanering"],
                relatedTerms: ["effektiv ränta", "månadsbetalning", "amorteringsplan"]
            },
            no: {
                synonyms: ["lånekalkulator månedsbeløp", "forbrukslån kalkulator", "billånskalkulator"],
                useCases: ["Beregne månedlige bilkostnader", "Sammenligne lånetilbud", "Planlegge gjeldsordning"],
                relatedTerms: ["effektiv rente", "månedsbetaling", "nedbetalingsplan"]
            },
            da: {
                synonyms: ["låneberegner månedlig ydelse", "privatlån beregner", "billånsberegner"],
                useCases: ["Beregn månedlige bilafdrag", "Sammenlign lånetilbud", "Planlæg gældskonsolidering"],
                relatedTerms: ["ÅOP på lån", "månedlig ydelse", "afdragsplan"]
            },
            fi: {
                synonyms: ["lainalyhennyslaskuri", "kulutusluottolaskuri", "autolainalaskuri"],
                useCases: ["Autolainan kuukausierän laskeminen", "Lainatarjousten vertailu", "Velkojen yhdistämisen suunnittelu"],
                relatedTerms: ["todellinen vuosikorko", "kuukausierä", "lyhennyssuunnitelma"]
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
            ],
            de: [
                { q: "Wie werden Kreditraten berechnet?", a: "Wir verwenden die Standard-Amortisationsformel, um Präzision für jeden Festzinskredit zu gewährleisten." },
                { q: "Beeinflusst die Laufzeit den Zinssatz?", a: "Ja, in der Regel haben kürzere Laufzeiten niedrigere Zinssätze, aber höhere monatliche Raten." }
            ],
            fr: [
                { q: "Comment les mensualités sont-elles calculées ?", a: "Nous utilisons la formule d'amortissement standard pour garantir la précision de tout prêt à taux fixe." },
                { q: "La durée du prêt affecte-t-elle le taux d'intérêt ?", a: "Oui, généralement les durées plus courtes ont des taux d'intérêt plus bas mais des mensualités plus élevées." }
            ],
            pt: [
                { q: "Como as parcelas do empréstimo são calculadas?", a: "Usamos a fórmula de amortização padrão para garantir precisão em qualquer empréstimo de taxa fixa." },
                { q: "O prazo do empréstimo afeta a taxa de juros?", a: "Sim, normalmente prazos mais curtos têm taxas de juros mais baixas, mas parcelas mensais mais altas." }
            ],
            it: [
                { q: "Come vengono calcolate le rate del prestito?", a: "Usiamo la formula di ammortamento standard per garantire la precisione per qualsiasi prestito a tasso fisso." },
                { q: "La durata del prestito influisce sul tasso di interesse?", a: "Sì, in genere le durate più brevi hanno tassi di interesse più bassi ma rate mensili più alte." }
            ],
            nl: [
                { q: "Hoe worden leningbetalingen berekend?", a: "We gebruiken de standaard amortisatieformule om precisie te garanderen voor elke lening met een vaste rente." },
                { q: "Heeft de looptijd invloed op de rentevoet?", a: "Ja, meestal hebben kortere looptijden lagere rentetarieven maar hogere maandelijkse lasten." }
            ],
            pl: [
                { q: "Jak obliczane są raty pożyczki?", a: "Używamy standardowej formuły amortyzacyjnej, aby zapewnić precyzję dla każdej pożyczki o stałym oprocentowaniu." },
                { q: "Czy okres pożyczki wpływa na oprocentowanie?", a: "Tak, zazwyczaj krótsze okresy mają niższe oprocentowanie, ale wyższe miesięczne raty." }
            ],
            sv: [
                { q: "Hur beräknas lånebetalningar?", a: "Vi använder den vanliga amorteringsformeln för att säkerställa precision för alla lån med fast ränta." },
                { q: "Påverkar lånetiden räntan?", a: "Ja, vanligtvis har kortare löptider lägre ränta men högre månadsbetalningar." }
            ],
            no: [
                { q: "Hvordan beregnes lånebetalinger?", a: "Vi bruker standard amortiseringsformel for å sikre presisjon for alle lån med fast rente." },
                { q: "Påvirker låneperioden renten?", a: "Ja, vanligvis har kortere løpetid lavere rente, men høyere månedlige betalinger." }
            ],
            da: [
                { q: "Hvordan beregnes låneydelser?", a: "Vi bruger den standard amortiseringsformel for at sikre præcision for ethvert fastforrentet lån." },
                { q: "Påvirker lånets løbetid renten?", a: "Ja, typisk har kortere løbetider lavere renter, men højere månedlige ydelser." }
            ],
            fi: [
                { q: "Miten lainaerät lasketaan?", a: "Käytämme vakioitua lyhennyskaavaa varmistaaksemme tarkkuuden kaikille kiinteäkorkoisille lainoille." },
                { q: "Vaikuttaako laina-aika korkoon?", a: "Kyllä, yleensä lyhyemmillä laina-ajoilla on alhaisemmat korot mutta suuremmat kuukausierät." }
            ]
        },
        config: {
            currency: { en: "USD", es: "EUR", de: "EUR", fr: "EUR", pt: "BRL", it: "EUR", nl: "EUR", pl: "PLN", sv: "SEK", no: "NOK", da: "DKK", fi: "EUR" },
            locale: { en: "en-US", es: "es-ES", de: "de-DE", fr: "fr-FR", pt: "pt-BR", it: "it-IT", nl: "nl-NL", pl: "pl-PL", sv: "sv-SE", no: "no-NO", da: "da-DK", fi: "fi-FI" },
            fields: [
                { id: "amount", type: "number", label: { en: "Loan Amount", fi: "Lainan määrä", de: "Kreditbetrag", es: "Monto del Préstamo", fr: "Montant du Prêt", pt: "Valor do Empréstimo", it: "Importo del Prestito", nl: "Leningbedrag", pl: "Kwota Pożyczki", sv: "Lånebelopp", no: "Lånebeløp", da: "Lånebeløb" }, default: 15000, step: 1000, format: "currency" },
                { id: "rate", type: "number", label: { en: "Interest Rate (%)", fi: "Korko (%)", de: "Zinssatz (%)", es: "Tasa de Interés (%)", fr: "Taux d'Intérêt (%)", pt: "Taxa de Juros (%)", it: "Tasso di Interesse (%)", nl: "Rentepercentage (%)", pl: "Oprocentowanie (%)", sv: "Räntesats (%)", no: "Rentesats (%)", da: "Rentesats (%)" }, default: 9.5, step: 0.1, format: "percent" },
                { id: "months", type: "number", label: { en: "Term (Months)", fi: "Laina-aika (kk)", de: "Laufzeit (Monate)", es: "Plazo (Meses)", fr: "Durée (Mois)", pt: "Prazo (Meses)", it: "Durata (Mesi)", nl: "Looptijd (Maanden)", pl: "Okres (Miesiące)", sv: "Löptid (Månader)", no: "Løpetid (Måneder)", da: "Løbetid (Måneder)" }, default: 36, step: 6 }
            ],
            formula: "rate > 0 ? amount * (rate/100/12) * Math.pow(1 + rate/100/12, months) / (Math.pow(1 + rate/100/12, months) - 1) : amount / (months || 1)",
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
        content: {
            en: `
                <div class="prose">
                    <h3>What is a Good ROI in 2026?</h3>
                    <p><strong>Return on Investment (ROI)</strong> is the universal metric for measuring profitability. Whether you're evaluating a stock, a marketing campaign, or a real estate deal, ROI tells you how much you gained relative to your cost.</p>
                    <ul>
                        <li><strong>Stock Market:</strong> Historical average ~7-10% annually.</li>
                        <li><strong>Real Estate:</strong> 8-12% ROI considered solid.</li>
                        <li><strong>Marketing:</strong> 5:1 return (400% ROI) is a common benchmark.</li>
                    </ul>
                    <p>Remember: ROI doesn't account for <strong>time</strong>. A 50% return over 5 years is very different from 50% in 1 year. For time-based analysis, consider <strong>annualized returns</strong>.</p>
                </div>
            `,
            es: `
                <div class="prose">
                    <h3>¿Qué es un Buen ROI en 2026?</h3>
                    <p>El <strong>Retorno de Inversión (ROI)</strong> es la métrica universal para medir la rentabilidad. Ya sea que evalúes una acción, una campaña de marketing o un negocio inmobiliario, el ROI te dice cuánto ganaste en relación con tu costo.</p>
                    <ul>
                        <li><strong>Mercado de Valores:</strong> Promedio histórico ~7-10% anual.</li>
                        <li><strong>Bienes Raíces:</strong> Un ROI del 8-12% se considera sólido.</li>
                        <li><strong>Marketing:</strong> Un retorno de 5:1 (400% de ROI) es un punto de referencia común.</li>
                    </ul>
                    <p>Recuerda: El ROI no tiene en cuenta el <strong>tiempo</strong>. Un retorno del 50% en 5 años es muy diferente a un 50% in 1 año. Para análisis basados en el tiempo, considera el <strong>rendimiento anualizado</strong>.</p>
                </div>
            `,
            de: `
                <div class="prose">
                    <h3>Was ist ein guter ROI im Jahr 2026?</h3>
                    <p>Der <strong>Return on Investment (ROI)</strong> ist die universelle Kennzahl zur Messung der Rentabilität. Egal, ob Sie eine Aktie, eine Marketingkampagne oder ein Immobiliengeschäft bewerten, der ROI zeigt Ihnen, wie viel Sie im Verhältnis zu Ihren Kosten gewonnen haben.</p>
                    <ul>
                        <li><strong>Aktienmarkt:</strong> Historischer Durchschnitt ~7-10% jährlich.</li>
                        <li><strong>Immobilien:</strong> 8-12% ROI gilt als solide.</li>
                        <li><strong>Marketing:</strong> Ein 5:1-Return (400% ROI) ist ein gängiger Benchmark.</li>
                    </ul>
                    <p>Denken Sie daran: Der ROI berücksichtigt nicht die <strong>Zeit</strong>. Eine Rendite von 50% über 5 Jahre ist etwas ganz anderes als 50% in einem Jahr. Berücksichtigen Sie für zeitbasierte Analysen die <strong>annualisierte Rendite</strong>.</p>
                </div>
            `,
            fr: `
                <div class="prose">
                    <h3>Qu'est-ce qu'un bon ROI en 2026 ?</h3>
                    <p>Le <strong>Retour sur Investissement (ROI)</strong> est la mesure universelle de la rentabilité. Que vous évaluiez une action, une campagne marketing ou une opération immobilière, le ROI vous indique ce que vous avez gagné par rapport à votre coût.</p>
                    <ul>
                        <li><strong>Bourse:</strong> Moyenne historique ~7-10% par an.</li>
                        <li><strong>Immobilier:</strong> Un ROI de 8-12% est considéré comme solide.</li>
                        <li><strong>Marketing:</strong> Un retour de 5:1 (400% de ROI) est une référence courante.</li>
                    </ul>
                    <p>Rappel : Le ROI ne tient pas compte du <strong>temps</strong>. Un rendement de 50% sur 5 ans est très différent de 50% en 1 an. Pour une analyse basée sur le temps, considérez le <strong>rendement annualisé</strong>.</p>
                </div>
            `,
            pt: `
                <div class="prose">
                    <h3>O que é um bom ROI em 2026?</h3>
                    <p>O <strong>Retorno sobre Investimento (ROI)</strong> é a métrica universal para medir a lucratividade. Quer você esteja avaliando uma ação, uma campanha de marketing ou um negócio imobiliário, o ROI diz quanto você ganhou em relação ao seu custo.</p>
                    <ul>
                        <li><strong>Mercado de Ações:</strong> Média histórica de ~7-10% ao ano.</li>
                        <li><strong>Imobiliário:</strong> ROI de 8-12% é considerado sólido.</li>
                        <li><strong>Marketing:</strong> Um retorno de 5:1 (400% de ROI) é uma referência comum.</li>
                    </ul>
                    <p>Lembre-se: O ROI não leva em conta o <strong>tempo</strong>. Um retorno de 50% em 5 anos é muito diferente de 50% em 1 ano. Para análise baseada no tempo, considere o <strong>retorno anualizado</strong>.</p>
                </div>
            `,
            it: `
                <div class="prose">
                    <h3>Cos'è un buon ROI nel 2026?</h3>
                    <p>Il <strong>Ritorno sull'Investimento (ROI)</strong> è la metrica universale per misurare la redditività. Che tu stia valutando un'azione, una campagna di marketing o un affare immobiliare, il ROI ti dice quanto hai guadagnato rispetto al tuo costo.</p>
                    <ul>
                        <li><strong>Mercato Azionario:</strong> Media storica ~7-10% annuo.</li>
                        <li><strong>Immobiliare:</strong> Un ROI dell'8-12% è considerato solido.</li>
                        <li><strong>Marketing:</strong> Un ritorno di 5:1 (ROI del 400%) è un parametro comune.</li>
                    </ul>
                    <p>Ricorda: il ROI non tiene conto del <strong>tempo</strong>. Un rendimento del 50% in 5 anni è molto diverso dal 50% in 1 anno. Per l'analisi temporale, considera il <strong>rendimento annualizzato</strong>.</p>
                </div>
            `,
            nl: `
                <div class="prose">
                    <h3>Wat is een goede ROI in 2026?</h3>
                    <p><strong>Rendement op investering (ROI)</strong> is de universele maatstaf voor het meten van winstgevendheid. Of u nu een aandeel, een marketingcampagne of een vastgoeddeal evalueert, ROI vertelt u hoeveel u heeft gewonnen ten opzichte van uw kosten.</p>
                    <ul>
                        <li><strong>Aandelenmarkt:</strong> Historisch gemiddelde ~7-10% per jaar.</li>
                        <li><strong>Vastgoed:</strong> 8-12% ROI wordt als solide beschouwd.</li>
                        <li><strong>Marketing:</strong> Een rendement van 5:1 (400% ROI) is een gangbare benchmark.</li>
                    </ul>
                    <p>Onthoud: ROI houdt geen rekening met <strong>tijd</strong>. Een rendement van 50% over 5 jaar is heel anders dan 50% in 1 jaar. Overweeg voor tijdgebaseerde analyse het <strong>geannualiseerde rendement</strong>.</p>
                </div>
            `,
            pl: `
                <div class="prose">
                    <h3>Co to jest dobry ROI w 2026 roku?</h3>
                    <p><strong>Zwrot z inwestycji (ROI)</strong> to uniwersalny wskaźnik pomiaru rentowności. Niezależnie od tego, czy oceniasz akcje, kampanię marketingową czy transakcję na rynku nieruchomości, ROI mówi Ci, ile zyskałeś w stosunku do poniesionych kosztów.</p>
                    <ul>
                        <li><strong>Giełda:</strong> Średnia historyczna ok. 7-10% rocznie.</li>
                        <li><strong>Nieruchomości:</strong> ROI na poziomie 8-12% uważa się za solidny.</li>
                        <li><strong>Marketing:</strong> Zwrot 5:1 (400% ROI) to powszechny punkt odniesienia.</li>
                    </ul>
                    <p>Pamiętaj: ROI nie uwzględnia <strong>czasu</strong>. Zwrot 50% w ciągu 5 lat bardzo różni się od 50% w ciągu 1 roku. Do analiz czasowych należy brać pod uwagę <strong>zannualizowaną stopę zwrotu</strong>.</p>
                </div>
            `,
            sv: `
                <div class="prose">
                    <h3>Vad är en bra ROI 2026?</h3>
                    <p><strong>Avkastning på investering (ROI)</strong> är det universella måttet för att mäta lönsamhet. Oavsett om du utvärderar en aktie, en marknadsföringskampanj eller en fastighetsaffär, talar ROI om hur mycket du tjänat i förhållande till din kostnad.</p>
                    <ul>
                        <li><strong>Aktiemarknaden:</strong> Historiskt genomsnitt ~7-10 % per år.</li>
                        <li><strong>Fastigheter:</strong> 8-12 % ROI anses vara gediget.</li>
                        <li><strong>Marknadsföring:</strong> 5:1 i avkastning (400 % ROI) är ett vanligt riktmärke.</li>
                    </ul>
                    <p>Kom ihåg: ROI tar inte hänsyn till <strong>tid</strong>. En avkastning på 50 % under 5 år är väldigt annorlunda än 50 % på 1 år. För tidsbaserad analys, överväg <strong>annualiserad avkastning</strong>.</p>
                </div>
            `,
            no: `
                <div class="prose">
                    <h3>Hva er en god ROI i 2026?</h3>
                    <p><strong>Avkastning på investering (ROI)</strong> er den universelle målestokken for lønnsomhet. Enten du vurderer en aksje, en markedsføringskampanje eller en eiendomshandel, forteller ROI deg hvor mye du har tjent i forhold til kostnadene dine.</p>
                    <ul>
                        <li><strong>Aksjemarkedet:</strong> Historisk gjennomsnitt ~7-10 % årlig.</li>
                        <li><strong>Eiendom:</strong> 8-12 % ROI anses som solid.</li>
                        <li><strong>Markedsføring:</strong> 5:1 avkastning (400 % ROI) er et vanlig benchmark.</li>
                    </ul>
                    <p>Husk: ROI tar ikke hensyn til <strong>tid</strong>. En avkastning på 50 % over 5 år er noe helt annet enn 50 % på 1 år. For tidsbasert analyse, vurder <strong>annualisert avkastning</strong>.</p>
                </div>
            `,
            da: `
                <div class="prose">
                    <h3>Hvad er et godt ROI i 2026?</h3>
                    <p><strong>Afkast af investering (ROI)</strong> er den universelle målestok for rentabilitet. Uanset om du vurderer en aktie, en marketingkampagne eller en ejendomshandel, fortæller ROI dig, hvor meget du har vundet i forhold til dine omkostninger.</p>
                    <ul>
                        <li><strong>Aktiemarkedet:</strong> Historisk gennemsnit ~7-10 % årligt.</li>
                        <li><strong>Ejendom:</strong> Et ROI på 8-12 % anses for solidt.</li>
                        <li><strong>Marketing:</strong> Et afkast på 5:1 (400 % ROI) er et almindeligt benchmark.</li>
                    </ul>
                    <p>Husk: ROI tager ikke højde for <strong>tid</strong>. Et afkast på 50 % over 5 år er meget anderledes end 50 % på 1 år. Til tidsbaseret analyse bør du overveje <strong>annualiseret afkast</strong>.</p>
                </div>
            `,
            fi: `
                <div class="prose">
                    <h3>Mikä on hyvä ROI vuonna 2026?</h3>
                    <p><strong>Sijoitetun pääoman tuotto (ROI)</strong> on yleismaailmallinen mittari kannattavuuden mittaamiseen. Arvioitpa sitten osaketta, markkinointikampanjaa tai kiinteistökauppaa, ROI kertoo, kuinka paljon voitit suhteessa kustannuksiisi.</p>
                    <ul>
                        <li><strong>Osakemarkkinat:</strong> Historiallinen keskiarvo n. 7-10 % vuodessa.</li>
                        <li><strong>Kiinteistöt:</strong> 8-12 % ROI:ta pidetään hyvänä.</li>
                        <li><strong>Markkinointi:</strong> 5:1 tuotto (400 % ROI) on yleinen vertailukohta.</li>
                    </ul>
                    <p>Muista: ROI ei ota huomioon <strong>aikaa</strong>. 50 % tuotto 5 vuodessa on hyvin erilainen kuin 50 % tuotto 1 vuodessa. Aikapohjaista analyysia varten harkitse <strong>annualisoitua tuottoa</strong>.</p>
                </div>
            `
        },
        seo: {
            en: {
                synonyms: ["return on investment calculator", "investment calculator", "profit calculator", "ROI percentage calculator"],
                useCases: ["Evaluating stock investments", "Measuring marketing campaign success", "Comparing real estate deals"],
                relatedTerms: ["return on investment", "profit margin", "investment multiple", "net profit", "annualized return"],
                relatedCalculators: ["loan", "solar", "crypto"]
            },
            es: {
                synonyms: ["calculadora de retorno de inversión", "calculadora de inversiones", "calculadora de beneficios", "calculadora de porcentaje de ROI"],
                useCases: ["Evaluación de inversiones en bolsa", "Medición del éxito de campañas de marketing", "Comparación de negocios inmobiliarios"],
                relatedTerms: ["retorno de inversión", "margen de beneficio", "múltiplo de inversión", "beneficio neto"]
            },
            de: {
                synonyms: ["Kapitalrendite Rechner", "Investitionsrechner", "Gewinnrechner"],
                useCases: ["Aktieninvestitionen bewerten", "Marketingkampagnen analysieren"],
                relatedTerms: ["Kapitalrendite", "Gewinnmarge", "Rendite"]
            },
            fr: {
                synonyms: ["calculateur de retour sur investissement", "simulateur d'investissement", "calcul de profit"],
                useCases: ["Évaluer des investissements boursiers", "Mesurer le succès d'une campagne marketing", "Comparer des transactions immobilières"],
                relatedTerms: ["retour sur investissement", "marge bénéficiaire", "multiples d'investissement"]
            },
            pt: {
                synonyms: ["calculadora de retorno sobre investimento", "simulador de investimento", "calculadora de lucro"],
                useCases: ["Avaliar investimentos em ações", "Medir o sucesso de campanhas de marketing", "Comparar negócios imobiliários"],
                relatedTerms: ["retorno sobre investimento", "margem de lucro", "múltiplo de investimento"]
            },
            it: {
                synonyms: ["calcolatore ritorno sull'investimento", "simulatore d'investimento", "calcolo del profitto"],
                useCases: ["Valutazione investimenti azionari", "Misurazione del successo di campagne marketing", "Confronto affari immobiliari"],
                relatedTerms: ["ritorno sull'investimento", "margine di profitto", "multiplo di investimento"]
            },
            nl: {
                synonyms: ["rendement op investering calculator", "beleggingscalculator", "winstcalculator"],
                useCases: ["Beoordelen van aandelenbeleggingen", "Meten van succes van marketingcampagnes", "Vergelijken van vastgoeddeals"],
                relatedTerms: ["rendement op investering", "winstmarge", "beleggingsmultiple"]
            },
            pl: {
                synonyms: ["kalkulator zwrotu z inwestycji", "kalkulator inwestycyjny", "kalkulator zysku"],
                useCases: ["Ocena inwestycji giełdowych", "Pomiar sukcesu kampanii marketingowych", "Porównywanie ofert nieruchomości"],
                relatedTerms: ["zwrot z inwestycji", "marża zysku", "mnożnik inwestycyjny"]
            },
            sv: {
                synonyms: ["avkastning på investering kalkylator", "investeringskalkylator", "vinstkalkylator"],
                useCases: ["Utvärdera aktieinvesteringar", "Mäta framgång för marknadsföringskampanjer", "Jämföra fastighetsaffärer"],
                relatedTerms: ["avkastning på investering", "vinstmarginal", "investeringsmultipel"]
            },
            no: {
                synonyms: ["avkastning på investering kalkulator", "investeringskalkulator", "fortjenestekalkulator"],
                useCases: ["Vurdere aksjeinvesteringer", "Måle suksess i markedsføringskampanjer", "Sammenligne eiendomshandler"],
                relatedTerms: ["avkastning på investering", "fortjenestemargin", "investeringsmultippel"]
            },
            da: {
                synonyms: ["afkast af investering beregner", "investeringsberegner", "overskudsberegner"],
                useCases: ["Vurdering af aktieinvesteringer", "Måling af succes for marketingkampagner", "Sammenligning af ejendomshandler"],
                relatedTerms: ["afkast af investering", "overskudsmargin", "investeringsmultipel"]
            },
            fi: {
                synonyms: ["sijoituksen tuottolaskuri", "investointilaskuri", "voittolaskuri"],
                useCases: ["Osakesijoitusten arviointi", "Markkinointikampanjoiden onnistumisen mittaaminen", "Kiinteistökauppojen vertailu"],
                relatedTerms: ["sijoitetun pääoman tuotto", "voittomarginaali", "sijoituskerroin"]
            }
        },
        faqs: {
            en: [
                { q: "How is ROI calculated?", a: "ROI is calculated by subtracting the initial cost of the investment from its final value, then dividing this total by the cost of the investment." },
                { q: "What is a 'good' ROI?", a: "A 'good' ROI depends on the asset class. Stocks generally target 7-10%, while real estate often aims for 8-12%." }
            ],
            es: [
                { q: "¿Cómo se calcula el ROI?", a: "El ROI se calcula restando el costo inicial de la inversión de su valor final, y luego dividiendo ese total por el costo de la inversión." },
                { q: "¿Qué es un 'buen' ROI?", a: "Depende del tipo de activo. Las acciones suelen buscar un 7-10%, mientras que los bienes raíces apuntan a un 8-12%." }
            ],
            de: [
                { q: "Wie wird der ROI berechnet?", a: "Der ROI wird berechnet, indem die ursprünglichen Investitionskosten vom Endwert abgezogen und das Ergebnis durch die Investitionskosten geteilt werden." },
                { q: "Was ist ein 'guter' ROI?", a: "Ein 'guter' ROI hängt von der Anlageklasse ab. Aktien zielen meist auf 7-10% ab, Immobilien oft auf 8-12%." }
            ],
            fr: [
                { q: "Comment le ROI est-il calculé ?", a: "Le ROI est calculé en soustrayant le coût initial de l'investissement de sa valeur finale, puis en divisant ce total par le coût de l'investissement." },
                { q: "Qu'est-ce qu'un 'bon' ROI ?", a: "Un 'bon' ROI dépend de la classe d'actifs. Les actions visent généralement 7-10 %, tandis que l'immobilier vise souvent 8-12 %." }
            ],
            pt: [
                { q: "Como o ROI é calculado?", a: "O ROI é calculado subtraindo o custo inicial do investimento de seu valor final e dividindo esse total pelo custo do investimento." },
                { q: "O que é um 'bom' ROI?", a: "Um 'bom' ROI depende da classe de ativos. Ações geralmente visam 7-10%, enquanto o setor imobiliário costuma buscar 8-12%." }
            ],
            it: [
                { q: "Come si calcola il ROI?", a: "Il ROI si calcola sottraendo il costo iniziale dell'investimento dal suo valore finale, quindi dividendo questo totale per il costo dell'investimento." },
                { q: "Cos'è un 'buon' ROI?", a: "Un 'buon' ROI dipende dalla classe di attività. Le azioni in genere puntano al 7-10%, mentre l'immobiliare spesso mira all'8-12%." }
            ],
            nl: [
                { q: "Hoe wordt ROI berekend?", a: "ROI wordt berekend door de initiële kosten van de investering af te trekken van de eindwaarde en dit totaal vervolgens te delen door de kosten van de investering." },
                { q: "Wat is een 'goede' ROI?", a: "Een 'goede' ROI hangt af van de activaklasse. Aandelen mikken doorgaans op 7-10%, terwijl vastgoed vaak streeft naar 8-12%." }
            ],
            pl: [
                { q: "Jak oblicza się ROI?", a: "ROI oblicza się, odejmując koszt początkowy inwestycji od jej wartości końcowej, a następnie dzieląc ten wynik przez koszt inwestycji." },
                { q: "Co to jest 'dobry' ROI?", a: "„Dobry” ROI zależy od klasy aktywów. Akcje zazwyczaj celują w 7-10%, podczas gdy nieruchomości często w 8-12%." }
            ],
            sv: [
                { q: "Hur beräknas ROI?", a: "ROI beräknas genom att dra av den ursprungliga kostnaden för investeringen från dess slutvärde och sedan dela detta med kostnaden för investeringen." },
                { q: "Vad är en 'bra' ROI?", a: "En 'bra' ROI beror på tillgångsslaget. Aktier siktar vanligtvis på 7-10 %, medan fastigheter ofta siktar på 8-12 %." }
            ],
            no: [
                { q: "Hvordan beregnes ROI?", a: "ROI beregnes ved å trekke den opprinnelige kostnaden for investeringen fra sluttverdien, og deretter dele dette på kostnaden for investeringen." },
                { q: "Hva er en 'god' ROI?", a: "En 'god' ROI avhenger av aktivaklassen. Aksjer sikter vanligvis på 7-10 %, mens eiendom ofte sikter på 8-12 %." }
            ],
            da: [
                { q: "Hvordan beregnes ROI?", a: "ROI beregnes ved at trække de oprindelige omkostninger for investeringen fra dens slutværdi og derefter dividere dette med omkostningerne for investeringen." },
                { q: "Hvad er et 'godt' ROI?", a: "Et 'godt' ROI afhænger af aktivklassen. Aktier sigter generelt efter 7-10 %, mens ejendom ofte sigter efter 8-12 %." }
            ],
            fi: [
                { q: "Miten ROI lasketaan?", a: "ROI lasketaan vähentämällä sijoituksen alkuperäinen hinta sen loppuarvosta ja jakamalla tämä tulos sijoituksen hinnalla." },
                { q: "Mikä on 'hyvä' ROI?", a: "„Hyvä” ROI riippuu omaisuusluokasta. Osakkeet tavoittelevat yleensä 7–10 %, kun taas kiinteistöt tähtäävät usein 8–12 %:iin." }
            ]
        },
        config: {
            currency: { en: "USD", es: "EUR", de: "EUR", fr: "EUR", pt: "BRL", it: "EUR", nl: "EUR", pl: "PLN", sv: "SEK", no: "NOK", da: "DKK", fi: "EUR" },
            locale: { en: "en-US", es: "es-ES", de: "de-DE", fr: "fr-FR", pt: "pt-BR", it: "it-IT", nl: "nl-NL", pl: "pl-PL", sv: "sv-SE", no: "no-NO", da: "da-DK", fi: "fi-FI" },
            fields: [
                { id: "investment", type: "number", label: { en: "Amount Invested", fi: "Investoitu määrä", de: "Investiert", es: "Cantidad Invertida", fr: "Montant Investi", pt: "Valor Investido", it: "Importo Investito", nl: "Geïnvesteerd Bedrag", pl: "Zainwestowana Kwota", sv: "Investerat Belopp", no: "Investert Beløp", da: "Investeret Beløb" }, default: 1000, step: 100, format: "currency" },
                { id: "returned", type: "number", label: { en: "Amount Returned", fi: "Palautettu määrä", de: "Rückfluss", es: "Cantidad Devuelta", fr: "Montant Reçu", pt: "Valor Retornado", it: "Importo Restituito", nl: "Terugontvangen Bedrag", pl: "Zwrócona Kwota", sv: "Belopp som Återbetalats", no: "Beløp som er Tilbakeført", da: "Beløb der er Tilbageført" }, default: 1500, step: 100, format: "currency" }
            ],
            formula: "investment > 0 ? ((returned - investment) / investment) * 100 : 0",
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
        content: {
            en: `
                <div class="prose">
                    <h3>Plan Your Crypto Trades Like a Pro</h3>
                    <p>Don't enter a trade blind. This calculator helps you <strong>plan before you buy</strong> and <strong>know your exit</strong> before you sell.</p>
                    <ul>
                        <li><strong>Target Multiplier:</strong> Set your goal (2x, 3x, 10x) and instantly see the exit price you need</li>
                        <li><strong>Break-Even Price:</strong> Know the minimum price to recover your investment + fees</li>
                        <li><strong>ROI %:</strong> See your percentage gain/loss at a glance</li>
                        <li><strong>Coins Purchased:</strong> Know exactly how many tokens you'll own</li>
                    </ul>
                    <p><strong>Pro tip:</strong> Use the Target Multiplier to set realistic profit targets. If hitting 2x requires an absurd price, maybe it's not the right entry.</p>
                </div>
            `,
            es: `
                <div class="prose">
                    <h3>Planifica tus Operaciones Cripto como un Pro</h3>
                    <p>No entres en una operación a ciegas. Esta calculadora te ayuda a <strong>planificar antes de comprar</strong> y <strong>conocer tu salida</strong> antes de vender.</p>
                    <ul>
                        <li><strong>Multiplicador Objetivo:</strong> Establece tu meta (2x, 3x, 10x) y mira al instante el precio de salida necesario.</li>
                        <li><strong>Precio de Equilibrio:</strong> Conoce el precio mínimo para recuperar tu inversión más comisiones.</li>
                        <li><strong>% de ROI:</strong> Mira tu porcentaje de ganancia o pérdida de un vistazo.</li>
                        <li><strong>Monedas Compradas:</strong> Sabrás exactamente cuántos tokens poseerás.</li>
                    </ul>
                    <p><strong>Consejo Pro:</strong> Usa el Multiplicador Objetivo para establecer metas realistas. Si alcanzar un 2x requiere un precio absurdo, quizá no sea la entrada correcta.</p>
                </div>
            `,
            de: `
                <div class="prose">
                    <h3>Planen Sie Ihre Krypto-Trades wie ein Profi</h3>
                    <p>Gehen Sie nicht blind in einen Trade. Dieser Rechner hilft Ihnen, <strong>vor dem Kauf zu planen</strong> und <strong>Ihren Ausstieg zu kennen</strong>, bevor Sie verkaufen.</p>
                    <ul>
                        <li><strong>Ziel-Multiplikator:</strong> Setzen Sie Ihr Ziel (2x, 3x, 10x) und sehen Sie sofort den benötigten Ausstiegspreis.</li>
                        <li><strong>Break-Even-Preis:</strong> Kennen Sie den Mindestpreis, um Ihre Investition + Gebühren zurückzuerhalten.</li>
                        <li><strong>ROI %:</strong> Sehen Sie Ihren prozentualen Gewinn/Verlust auf einen Blick.</li>
                        <li><strong>Gekaufte Coins:</strong> Wissen Sie genau, wie viele Token Sie besitzen werden.</li>
                    </ul>
                    <p><strong>Profi-Tipp:</strong> Nutzen Sie den Ziel-Multiplikator, um realistische Gewinnziele zu setzen. Wenn ein 2x einen absurden Preis erfordert, ist es vielleicht nicht der richtige Einstieg.</p>
                </div>
            `,
            fr: `
                <div class="prose">
                    <h3>Planifiez vos transactions crypto comme un pro</h3>
                    <p>N'entrez pas dans une transaction à l'aveugle. Ce calculateur vous aide à <strong>planifier avant d'acheter</strong> et à <strong>connaître votre sortie</strong> avant de vendre.</p>
                    <ul>
                        <li><strong>Multiplicateur cible:</strong> Fixez votre objectif (2x, 3x, 10x) et voyez instantanément le prix de sortie nécessaire.</li>
                        <li><strong>Prix d'équilibre:</strong> Connaissez le prix minimum pour récupérer votre investissement + frais.</li>
                        <li><strong>% de ROI:</strong> Visualisez votre gain ou perte en pourcentage en un coup d'œil.</li>
                        <li><strong>Jetons achetés:</strong> Sachez exactement combien de jetons vous posséderez.</li>
                    </ul>
                    <p><strong>Conseil de pro:</strong> Utilisez le multiplicateur cible pour fixer des objectifs de profit réalistes. Si atteindre 2x demande un prix absurde, ce n'est peut-être pas la bonne entrée.</p>
                </div>
            `,
            pt: `
                <div class="prose">
                    <h3>Planeje suas negociações de cripto como um profissional</h3>
                    <p>Não entre em uma negociação às cegas. Esta calculadora ajuda você a <strong>planejar antes de comprar</strong> e <strong>saber sua saída</strong> antes de vender.</p>
                    <ul>
                        <li><strong>Multiplicador Alvo:</strong> Defina sua meta (2x, 3x, 10x) e veja instantaneamente o preço de saída necessário.</li>
                        <li><strong>Preço de Equilíbrio:</strong> Saiba o preço mínimo para recuperar seu investimento + taxas.</li>
                        <li><strong>% de ROI:</strong> Veja sua porcentagem de ganho/perda de relance.</li>
                        <li><strong>Moedas Compradas:</strong> Saiba exatamente quantos tokens você possuirá.</li>
                    </ul>
                    <p><strong>Dica profissional:</strong> Use o Multiplicador Alvo para definir metas de lucro realistas. Se atingir 2x exigir um preço absurdo, talvez não seja a entrada certa.</p>
                </div>
            `,
            it: `
                <div class="prose">
                    <h3>Pianifica i tuoi trade crypto come un professionista</h3>
                    <p>Non entrare in un trade alla cieca. Questo calcolatore ti aiuta a <strong>pianificare prima di acquistare</strong> e <strong>conoscere la tua uscita</strong> prima di vendere.</p>
                    <ul>
                        <li><strong>Moltiplicatore Obiettivo:</strong> Imposta il tuo obiettivo (2x, 3x, 10x) e vedi istantaneamente il prezzo di uscita necessario.</li>
                        <li><strong>Prezzo di Pareggio:</strong> Conosci il prezzo minimo per recuperare il tuo investimento + commissioni.</li>
                        <li><strong>% di ROI:</strong> Visualizza la tua percentuale di guadagno/perdita a colpo d'occhio.</li>
                        <li><strong>Monete Acquistate:</strong> Sappi esattamente quanti token possiederai.</li>
                    </ul>
                    <p><strong>Consiglio da pro:</strong> Usa il Moltiplicatore Obiettivo per impostare obiettivi di profitto realistici. Se raggiungere il 2x richiede un prezzo assurdo, forse non è l'entrata giusta.</p>
                </div>
            `,
            nl: `
                <div class="prose">
                    <h3>Plan uw crypto-trades als een pro</h3>
                    <p>Stap niet blindelings in een trade. Deze calculator helpt u om <strong>te plannen voordat u koopt</strong> en <strong>uw uitgang te kennen</strong> voordat u verkoopt.</p>
                    <ul>
                        <li><strong>Doel-multiplier:</strong> Stel uw doel in (2x, 3x, 10x) en zie direct de benodigde uitstapprijs.</li>
                        <li><strong>Break-even prijs:</strong> Ken de minimumprijs om uw investering + kosten terug te verdienen.</li>
                        <li><strong>ROI %:</strong> Zie uw procentuele winst/verlies in één oogopslag.</li>
                        <li><strong>Gekochte munten:</strong> Weet precies hoeveel tokens u zult bezitten.</li>
                    </ul>
                    <p><strong>Pro-tip:</strong> Gebruik de doel-multiplier om realistische winstdoelen te stellen. Als het bereiken van 2x een absurde prijs vereist, is het misschien niet de juiste instap.</p>
                </div>
            `,
            pl: `
                <div class="prose">
                    <h3>Planuj swoje transakcje krypto jak profesjonalista</h3>
                    <p>Nie wchodź w transakcję w ciemno. Ten kalkulator pomoże Ci <strong>zaplanować przed zakupem</strong> i <strong>poznać wyjście</strong> przed sprzedażą.</p>
                    <ul>
                        <li><strong>Mnożnik docelowy:</strong> Ustaw swój cel (2x, 3x, 10x) i natychmiast zobacz potrzebną cenę wyjścia.</li>
                        <li><strong>Cena progowa:</strong> Poznaj minimalną cenę potrzebną do odzyskania inwestycji + opłat.</li>
                        <li><strong>% ROI:</strong> Zobacz swój procentowy zysk/stratę na pierwszy rzut oka.</li>
                        <li><strong>Zakupione monety:</strong> Dowiedz się dokładnie, ile tokenów będziesz posiadać.</li>
                    </ul>
                    <p><strong>Wskazówka:</strong> Użyj mnożnika docelowego, aby ustawić realistyczne cele zysku. Jeśli osiągnięcie 2x wymaga absurdalnej ceny, być może nie jest to właściwe wejście.</p>
                </div>
            `,
            sv: `
                <div class="prose">
                    <h3>Planera dina kryptotransaktioner som ett proffs</h3>
                    <p>Gå inte in i en affär i blindo. Denna kalkylator hjälper dig att <strong>planera innan du köper</strong> och <strong>veta din utgångspunkt</strong> innan du säljer.</p>
                    <ul>
                        <li><strong>Målmulitiplikator:</strong> Sätt ditt mål (2x, 3x, 10x) och se direkt vilket utgångspris du behöver.</li>
                        <li><strong>Break-even pris:</strong> Ta reda på minimipriset för att få tillbaka din investering + avgifter.</li>
                        <li><strong>ROI %:</strong> Se din procentuella vinst/förlust på ett ögonblick.</li>
                        <li><strong>Köpta mynt:</strong> Vet exakt hur många tokens du kommer att äga.</li>
                    </ul>
                    <p><strong>Proffstips:</strong> Använd målmulitiplikatorn för att sätta realistiska vinstmål. Om det krävs ett absurt pris för att nå 2x, är det kanske inte rätt läge att gå in.</p>
                </div>
            `,
            no: `
                <div class="prose">
                    <h3>Planlegg kryptohandlene dine som en proff</h3>
                    <p>Ikke gå inn i en handel i blinde. Denne kalkulatoren hjelper deg med å <strong>planlegge før du kjøper</strong> og <strong>vite utgangen din</strong> før du selger.</p>
                    <ul>
                        <li><strong>Målmultiplikator:</strong> Sett målet ditt (2x, 3x, 10x) og se umiddelbart hvilken utgangspris du trenger.</li>
                        <li><strong>Break-even pris:</strong> Vit minsteprisen for å få tilbake investeringen din + gebyrer.</li>
                        <li><strong>ROI %:</strong> Se din prosentvise gevinst/tap på et øyeblikk.</li>
                        <li><strong>Kjøpte mynter:</strong> Vit nøyaktig hvor mange tokens du vil eie.</li>
                    </ul>
                    <p><strong>Profftips:</strong> Bruk målmultiplikatoren til å sette realistiske gevinstmål. Hvis det kreves en absurd pris for å nå 2x, er det kanskje ikke riktig inngang.</p>
                </div>
            `,
            da: `
                <div class="prose">
                    <h3>Planlæg dine kryptohandler som en professionel</h3>
                    <p>Gå ikke ind i en handel i blinde. Denne beregner hjælper dig med at <strong>planlægge før du køber</strong> og <strong>kende din udgang</strong> før du sælger.</p>
                    <ul>
                        <li><strong>Målmultiplikator:</strong> Sæt dit mål (2x, 3x, 10x) og se med det samme den udgangspris, du har brug for.</li>
                        <li><strong>Break-even pris:</strong> Kend minimumsprisen for at få din investering + gebyrer tilbage.</li>
                        <li><strong>ROI %:</strong> Se din procentvise gevinst/tab med et øjekast.</li>
                        <li><strong>Købte mønter:</strong> Ved præcis hvor mange tokens, du vil eje.</li>
                    </ul>
                    <p><strong>Proff-tip:</strong> Brug målmultiplikatoren til at sætte realistiske overskudsmål. Hvis det kræver en absurd pris at nå 2x, er det måske ikke den rigtige indgang.</p>
                </div>
            `,
            fi: `
                <div class="prose">
                    <h3>Suunnittele kryptokauppasi kuin ammattilainen</h3>
                    <p>Älä aloita kauppaa sokeasti. Tämä laskuri auttaa sinua <strong>suunnittelemaan ennen ostamista</strong> ja <strong>tietämään poistumistiesi</strong> ennen myymistä.</p>
                    <ul>
                        <li><strong>Tavoitekerroin:</strong> Aseta tavoitteesi (2x, 3x, 10x) ja näe välittömästi tarvittava myyntihinta.</li>
                        <li><strong>Nollatulos-hinta:</strong> Tiedä minimihinta sijoituksesi ja kulujen kattamiseksi.</li>
                        <li><strong>ROI %:</strong> Näe prosentuaalinen voittosi/tappiosi yhdellä silmäyksellä.</li>
                        <li><strong>Ostetut kolikot:</strong> Tiedä tarkalleen, kuinka monta tokenia omistat.</li>
                    </ul>
                    <p><strong>Ammattilaisvinkki:</strong> Käytä tavoitekerrointa asettaaksesi realistisia voittotavoitteita. Jos 2x saavuttaminen vaatii absurdin hinnan, se ei ehkä ole oikea ostohetki.</p>
                </div>
            `
        },
        seo: {
            en: {
                synonyms: ["bitcoin profit calculator", "crypto roi calculator", "trading fee calculator", "ethereum profit estimator", "BTC calculator", "ETH profit calculator", "altcoin gains calculator", "cryptocurrency investment calculator", "DeFi profit calculator", "crypto P&L calculator"],
                useCases: ["Day traders planning entries/exits", "HODLers estimating portfolio value", "Calculating break-even prices", "Tax planning for crypto gains", "Comparing trade scenarios"],
                relatedTerms: ["ROI", "maker fee", "taker fee", "gas fees", "profit margin", "break-even price", "HODL", "slippage", "market order", "limit order"],
                relatedCalculators: ["roi", "loan"]
            },
            es: {
                synonyms: ["calculadora de beneficios bitcoin", "calculadora de ROI cripto", "calculadora de comisiones de trading", "estimador de ganancias ethereum"],
                useCases: ["Traders planificando entradas y salidas", "HODLers estimando valor de portafolio", "Cálculo de precios de equilibrio"],
                relatedTerms: ["ROI", "comisión maker", "comisión taker", "gas fees", "punto de equilibrio"]
            },
            de: {
                synonyms: ["Bitcoin Rechner", "Krypto Gewinn Rechner", "Ethereum Kalkulator", "Altcoin Rechner"],
                useCases: ["Trading Strategien planen", "Portfolio Wert berechnen", "Steuerplanung"],
                relatedTerms: ["Trading Gebühren", "Gewinnmarge", "Break-Even Preis"]
            },
            fr: {
                synonyms: ["calculateur de profit bitcoin", "simulateur ROI crypto", "calcul de frais de trading"],
                useCases: ["Traders planifiant entrées et sorties", "HODLers estimant la valeur du portefeuille", "Calcul du seuil de rentabilité"],
                relatedTerms: ["ROI", "frais de transaction", "prix d'équilibre", "frais de gaz"]
            },
            pt: {
                synonyms: ["calculadora de lucro bitcoin", "simulador de ROI cripto", "calculadora de taxas de trading"],
                useCases: ["Traders planejando entradas e saídas", "HODLers estimando valor da carteira", "Cálculo de preço de equilíbrio"],
                relatedTerms: ["ROI", "taxas de corretagem", "preço de equilíbrio", "taxas de rede"]
            },
            it: {
                synonyms: ["calcolatore profitto bitcoin", "simulatore ROI crypto", "calcolo commissioni trading"],
                useCases: ["Trader che pianificano entrate e uscite", "HODLer che stimano il valore del portafoglio", "Calcolo del prezzo di pareggio"],
                relatedTerms: ["ROI", "commissioni trading", "prezzo di pareggio", "costi di transazione"]
            },
            nl: {
                synonyms: ["bitcoin winst calculator", "crypto ROI simulator", "trading kosten berekenen"],
                useCases: ["Traders die in- en uitstappunten plannen", "HODLers die portfoliowaarde schatten", "Berekenen van break-even prijzen"],
                relatedTerms: ["ROI", "handelskosten", "break-even prijs", "gas fees"]
            },
            pl: {
                synonyms: ["kalkulator zysku bitcoin", "symulator ROI krypto", "kalkulator opłat tradingowych"],
                useCases: ["Traderzy planujący wejścia i wyjścia", "HODLerzy szacujący wartość portfela", "Obliczanie cen progowych"],
                relatedTerms: ["ROI", "opłaty transakcyjne", "cena progowa", "koszty sieciowe"]
            },
            sv: {
                synonyms: ["bitcoin vinstkalkylator", "krypto ROI kalkylator", "trading avgiftskalkylator"],
                useCases: ["Traders som planerar köp och sälj", "HODLers som uppskattar portföljvärde", "Beräkna break-even priser"],
                relatedTerms: ["ROI", "handelsavgifter", "break-even pris", "gasavgifter"]
            },
            no: {
                synonyms: ["bitcoin gevinstkalkulator", "krypto ROI kalkulator", "trading gebyrkalkulator"],
                useCases: ["Traders som planerer kjøp og salg", "HODLere som anslår porteføljeverdi", "Beregne break-even priser"],
                relatedTerms: ["ROI", "handelsgebyrer", "break-even pris", "nettverksgebyrer"]
            },
            da: {
                synonyms: ["bitcoin gevinstberegner", "krypto ROI beregner", "trading gebyrberegner"],
                useCases: ["Traders der planlægger køb og salg", "HODLere der anslår porteføljeværdi", "Beregn break-even priser"],
                relatedTerms: ["ROI", "handelsgebyrer", "break-even pris", "netværksgebyrer"]
            },
            fi: {
                synonyms: ["bitcoin tuottolaskuri", "krypton ROI-laskuri", "kaupankäyntikululaskuri"],
                useCases: ["Treidaajat suunnittelemassa ostoja ja myyntejä", "HODLaajat arvioimassa salkun arvoa", "Nollatulos-hintojen laskeminen"],
                relatedTerms: ["ROI", "välityspalkkiot", "nollatulos-hinta", "siirtomaksut"]
            }
        },
        faqs: {
            en: [
                { q: "How do I calculate crypto profit?", a: "Crypto profit = (Coins Purchased × Exit Price) - Initial Investment - Fees. Our calculator handles this automatically, showing you Net Profit, ROI %, and Break-Even Price." },
                { q: "What is the break-even price in crypto?", a: "The break-even price is the minimum exit price needed to recover your initial investment plus all fees. It's calculated as: Entry Price × (1 + Fees/Investment)." },
                { q: "Does this calculator work for Bitcoin, Ethereum, and Altcoins?", a: "Yes! This calculator works for any cryptocurrency - Bitcoin (BTC), Ethereum (ETH), Solana (SOL), XRP, Dogecoin (DOGE), and all other altcoins." },
                { q: "What fees should I include?", a: "Include all trading fees: exchange fees (maker/taker), network gas fees, withdrawal fees, and any other transaction costs." },
                { q: "How is crypto ROI calculated?", a: "ROI = ((Exit Value - Entry Value - Fees) / Entry Value) × 100. A positive ROI means profit; negative means loss." }
            ],
            es: [
                { q: "¿Cómo calculo las ganancias en cripto?", a: "Ganancia = (Monedas × Precio de Salida) - Inversión Inicial - Comisiones. Nuestra calculadora lo hace automáticamente, mostrando el beneficio neto, el % de ROI y el precio de equilibrio." },
                { q: "¿Qué es el precio de equilibrio?", a: "Es el precio mínimo de salida necesario para recuperar tu inversión inicial más todas las comisiones." },
                { q: "¿Funciona para Bitcoin y Ethereum?", a: "¡Sí! Funciona para cualquier criptomoneda: Bitcoin (BTC), Ethereum (ETH), Solana (SOL), XRP, Dogecoin (DOGE) y todas las demás altcoins." },
                { q: "¿Qué comisiones debo incluir?", a: "Incluye todas las comisiones de intercambio, tarifas de red (gas), tarifas de retiro y cualquier otro costo de transacción." },
                { q: "¿Cómo se calcula el ROI cripto?", a: "ROI = ((Valor de Salida - Valor de Entrada - Comisiones) / Valor de Entrada) × 100. Un ROI positivo significa ganancia." }
            ],
            de: [
                { q: "Wie berechne ich Krypto-Gewinne?", a: "Gewinn = (Coins × Ausstiegspreis) - Investition - Gebühren. Unser Rechner zeigt Ihnen Nettogewinn, ROI % und den Break-Even-Preis automatisch an." },
                { q: "Was ist der Break-Even-Preis?", a: "Der Mindestpreis, um Ihre Investition plus alle Gebühren zurückzubekommen." },
                { q: "Funktioniert das für Bitcoin und Ethereum?", a: "Ja! Für alle Kryptowährungen: Bitcoin (BTC), Ethereum (ETH), Solana (SOL), XRP, Dogecoin (DOGE) und alle anderen Altcoins." },
                { q: "Welche Gebühren sollte ich einbeziehen?", a: "Alle Handelsgebühren: Börsengebühren, Netzwerk-Gas-Gebühren, Abhebungsgebühren und sonstige Transaktionskosten." },
                { q: "Wie wird der Krypto-ROI berechnet?", a: "ROI = ((Ausstiegswert - Einstiegswert - Gebühren) / Einstiegswert) × 100. Ein positiver ROI bedeutet Gewinn." }
            ],
            fr: [
                { q: "Comment calculer les profits crypto ?", a: "Profit = (Jetons × Prix de Sortie) - Investissement - Frais. Notre calculateur affiche automatiquement le profit net, le % de ROI et le prix d'équilibre." },
                { q: "Qu'est-ce que le prix d'équilibre ?", a: "Le prix de sortie minimum nécessaire pour récupérer votre investissement initial plus tous les frais." },
                { q: "Est-ce que cela fonctionne pour Bitcoin et Ethereum ?", a: "Oui ! Pour toutes les cryptomonnaies : Bitcoin (BTC), Ethereum (ETH), Solana (SOL), XRP, Dogecoin (DOGE) et autres altcoins." },
                { q: "Quels frais dois-je inclure ?", a: "Incluez tous les frais de trading : frais de plateforme, frais de réseau (gas), frais de retrait et tout autre coût de transaction." },
                { q: "Comment le ROI crypto est-il calculé ?", a: "ROI = ((Valeur de Sortie - Valeur d'Entrée - Frais) / Valeur d'Entrée) × 100. Un ROI positif signifie un gain." }
            ],
            pt: [
                { q: "Como calcular lucros de cripto?", a: "Lucro = (Moedas × Preço de Saída) - Investimento - Taxas. Nossa calculadora mostra lucro líquido, % de ROI e preço de equilíbrio automaticamente." },
                { q: "O que é o preço de equilíbrio em cripto?", a: "O preço mínimo de saída necessário para recuperar seu investimento inicial mais todas as taxas." },
                { q: "Funciona para Bitcoin e Ethereum?", a: "Sim! Para qualquer criptomoeda: Bitcoin (BTC), Ethereum (ETH), Solana (SOL), XRP, Dogecoin (DOGE) e outras altcoins." },
                { q: "Quais taxas devo incluir?", a: "Inclua todas as taxas de negociação: taxas de exchange, taxas de rede (gas), taxas de retirada e outros custos." },
                { q: "Como o ROI de cripto é calculado?", a: "ROI = ((Valor de Salida - Valor de Entrada - Taxas) / Valor de Entrada) × 100. ROI positivo significa lucro." }
            ],
            it: [
                { q: "Come calcolo il profitto crypto?", a: "Profitto = (Monete × Prezzo d'Uscita) - Investimento - Commissioni. Il calcolatore mostra profitto netto, % di ROI e prezzo di pareggio." },
                { q: "Cos'è il prezzo di pareggio?", a: "Il prezzo d'uscita minimo necessario per recuperare l'investimento iniziale più tutte le commissioni." },
                { q: "Funziona per Bitcoin ed Ethereum?", a: "Sì! Per ogni criptovaluta: Bitcoin (BTC), Ethereum (ETH), Solana (SOL), XRP, Dogecoin (DOGE) e altre altcoin." },
                { q: "Quali commissioni devo includere?", a: "Includi tutte le commissioni di trading: exchange, gas della rete, prelievo e altri costi di transazione." },
                { q: "Come si calcola il ROI crypto?", a: "ROI = ((Valore Uscita - Valore Entrata - Commissioni) / Valore Entrata) × 100. ROI positivo significa profitto." }
            ],
            nl: [
                { q: "Hoe bereken ik crypto-winst?", a: "Winst = (Munten × Uitstapprijs) - Investering - Kosten. De calculator toont nettowinst, ROI % en de break-even prijs." },
                { q: "Wat is de break-even prijs?", a: "De minimale uitstapprijs die nodig is om uw initiële investering plus alle kosten terug te verdienen." },
                { q: "Werkt dit voor Bitcoin en Ethereum?", a: "Ja! Voor elke cryptomunt: Bitcoin (BTC), Ethereum (ETH), Solana (SOL), XRP, Dogecoin (DOGE) en andere altcoins." },
                { q: "Welke kosten moet ik meerekenen?", a: "Neem alle handelskosten mee: exchange fees, netwerk gas fees, opnamekosten en andere transactiekosten." },
                { q: "Hoe wordt crypto ROI berekend?", a: "ROI = ((Uitstapwaarde - Instapwaarde - Kosten) / Instapwaarde) × 100. Positieve ROI betekent winst." }
            ],
            pl: [
                { q: "Jak obliczyć zysk z krypto?", a: "Zysk = (Monety × Cena Wyjścia) - Inwestycja - Opłaty. Kalkulator pokazuje zysk netto, % ROI i cenę progową." },
                { q: "Co to jest cena progowa (break-even)?", a: "Minimalna cena wyjścia potrzebna do odzyskania początkowej inwestycji wraz ze wszystkimi opłatami." },
                { q: "Czy to działa dla Bitcoin i Ethereum?", a: "Tak! Dla każdej kryptowaluty: Bitcoin (BTC), Ethereum (ETH), Solana (SOL), XRP, Dogecoin (DOGE) i altcoinów." },
                { q: "Jakie opłaty należy uwzględnić?", a: "Wszystkie opłaty transakcyjne: giełdowe, sieciowe (gas), opłaty za wypłatę i inne koszty." },
                { q: "Jak oblicza się ROI w krypto?", a: "ROI = ((Wartość Wyjścia - Wartość Wejścia - Opłaty) / Wartość Wejścia) × 100. Dodatni ROI oznacza zysk." }
            ],
            sv: [
                { q: "Hur beräknar jag kryptovinst?", a: "Vinst = (Mynt × Utgångspris) - Investering - Avgifter. Kalkylatorn visar nettovinst, ROI % och break-even pris." },
                { q: "Vad är break-even priset?", a: "Det minsta utgångspris som behövs för att få tillbaka din ursprungliga investering plus alla avgifter." },
                { q: "Fungerar det för Bitcoin och Ethereum?", a: "Ja! För alla kryptovalutor: Bitcoin (BTC), Ethereum (ETH), Solana (SOL), XRP, Dogecoin (DOGE) och andra altcoins." },
                { q: "Vilka avgifter ska jag inkludera?", a: "Inkludera alla handelsavgifter: börsavgifter, nätverksavgifter (gas), uttagsavgifter och andra kostnader." },
                { q: "Hur beräknas krypto ROI?", a: "ROI = ((Utgångsvärde - Ingångsvärde - Avgifter) / Ingångsvärde) × 100. Positiv ROI betyder vinst." }
            ],
            no: [
                { q: "Hvordan beregner jeg kryptogevinst?", a: "Gevinst = (Mynter × Utgangspris) - Investering - Gebyrer. Kalkulatoren viser nettogevinst, ROI % og break-even pris." },
                { q: "Hva er break-even pris?", a: "Den minste utgangsprisen som trengs for å få tilbake din opprinnelige investering pluss alle gebyrer." },
                { q: "Fungerer det for Bitcoin og Ethereum?", a: "Ja! For alle kryptovalutaer: Bitcoin (BTC), Ethereum (ETH), Solana (SOL), XRP, Dogecoin (DOGE) og andre altcoins." },
                { q: "Hvilke gebyrer bør jeg inkludere?", a: "Inkluder alle handelsgebyrer: børsgebyrer, nettverksgebyrer (gas), uttaksgebyrer og andre kostnader." },
                { q: "Hvordan beregnes krypto ROI?", a: "ROI = ((Utgangsverdi - Inngangsverdi - Gebyrer) / Inngangsverdi) × 100. Positiv ROI betyr gevinst." }
            ],
            da: [
                { q: "Hvordan beregner jeg kryptogevinst?", a: "Gevinst = (Mønter × Udgangspris) - Investering - Gebyrer. Beregneren viser nettogevinst, ROI % og break-even pris." },
                { q: "Hvad er break-even prisen?", a: "Den mindste udgangspris, der er nødvendig for at få din oprindelige investering plus alle gebyrer tilbage." },
                { q: "Virker det til Bitcoin og Ethereum?", a: "Ja! Til alle kryptovalutaer: Bitcoin (BTC), Ethereum (ETH), Solana (SOL), XRP, Dogecoin (DOGE) og andre altcoins." },
                { q: "Hvilke gebyrer skal jeg inkludere?", a: "Inkluder alle handelsgebyrer: børssgebyrer, netværksgebyrer (gas), udbetalingsgebyrer og andre omkostninger." },
                { q: "Hvordan beregnes krypto ROI?", a: "ROI = ((Udgangsværdi - Indgangsværdi - Gebyrer) / Indgangsværdi) × 100. Positivt ROI betyder gevinst." }
            ],
            fi: [
                { q: "Miten lasken kryptovoiton?", a: "Voitto = (Kolikot × Myyntihinta) - Sijoitus - Kulut. Laskuri näyttää nettovoiton, ROI %:n ja nollatulos-hinnan." },
                { q: "Mikä on nollatulos-hinta?", a: "Pienin myyntihinta, joka tarvitaan alkuperäisen sijoituksen ja kaikkien kulujen kattamiseen." },
                { q: "Toimiiko tämä Bitcoinille ja Ethereumille?", a: "Kyllä! Kaikille kryptovaluutoille: Bitcoin (BTC), Ethereum (ETH), Solana (SOL), XRP, Dogecoin (DOGE) ja altcoinit." },
                { q: "Mitä kuluja minun pitäisi sisällyttää?", a: "Sisällytä kaikki kaupankäyntikulut: pörssimaksut, verkkomaksut (gas), nostokuluja ja muut siirtokulut." },
                { q: "Miten krypton ROI lasketaan?", a: "ROI = ((Myyntiarvo - Ostoarvo - Kulut) / Ostoarvo) × 100. Positiivinen ROI tarkoittaa voittoa." }
            ]
        },
        config: {
            currency: { en: "USD", de: "EUR" },
            locale: { en: "en-US", de: "de-DE" },
            fields: [
                { id: "investment", type: "number", label: { en: "Invested Amount", fi: "Sijoitettu summa", de: "Investierter Betrag", es: "Monto Invertido", fr: "Montant Investi", pt: "Valor Investido", it: "Importo Investito", nl: "Geïnvesteerd Bedrag", pl: "Zainwestowana Kwota", sv: "Investerat Belopp", no: "Investert Beløp", da: "Investeret Beløb" }, default: 1000, step: 100, format: "currency" },
                { id: "entryPrice", type: "number", label: { en: "Entry Price ($)", fi: "Ostohinta ($)", de: "Einstiegspreis ($)", es: "Precio de Entrada ($)", fr: "Prix d'Entrée ($)", pt: "Preço de Entrada ($)", it: "Prezzo di Entrata ($)", nl: "Instapprijs ($)", pl: "Cena Wejścia ($)", sv: "Ingångspris ($)", no: "Inngangspris ($)", da: "Indgangspris ($)" }, default: 50000, step: 100 },
                { id: "exitPrice", type: "number", label: { en: "Exit Price ($)", fi: "Myyntihinta ($)", de: "Ausstiegspreis ($)", es: "Precio de Salida ($)", fr: "Prix de Sortie ($)", pt: "Preço de Saída ($)", it: "Prezzo di Uscita ($)", nl: "Uitstapprijs ($)", pl: "Cena Wyjścia ($)", sv: "Utgångspris ($)", no: "Utgangspris ($)", da: "Udgangspris ($)" }, default: 55000, step: 100 },
                { id: "fees", type: "number", label: { en: "Total Fees ($)", fi: "Kulut yhteensä ($)", de: "Gebühren Gesamt ($)", es: "Comisiones Totales ($)", fr: "Frais Totaux ($)", pt: "Taxas Totais ($)", it: "Commissioni Totali ($)", nl: "Totale Kosten ($)", pl: "Opłaty Razem ($)", sv: "Totala Avgifter ($)", no: "Totale Gebyrer ($)", da: "Samlede Gebyrer ($)" }, default: 10, step: 1, format: "currency" },
                { id: "taxRate", type: "number", label: { en: "Tax Rate (%)", fi: "Vero (%)", de: "Steuersatz (%)", es: "Impuestos (%)", fr: "Impôts (%)", pt: "Imposto (%)", it: "Tasse (%)", nl: "Belastingtarief (%)", pl: "Podatek (%)", sv: "Skattesats (%)", no: "Skattesats (%)", da: "Skattesats (%)" }, default: 0, min: 0, max: 100, step: 1, format: "percent", help: { en: "Capital gains tax rate. Leave 0 for pre-tax profit.", es: "Impuesto sobre ganancias de capital.", de: "Kapitalertragsteuer." } },
                { id: "targetMultiplier", type: "number", label: { en: "Profit Goal (x)", fi: "Voittotavoite (x)", de: "Gewinnziel (x)", es: "Meta de Ganancia (x)", fr: "Objectif de Gain (x)", pt: "Meta de Lucro (x)", it: "Obiettivo di Profitto (x)", nl: "Winstdoel (x)", pl: "Cel Zysku (x)", sv: "Vinstmål (x)", no: "Gevinstmål (x)", da: "Gevinstmål (x)" }, default: 2, min: 1.1, max: 1000, step: 0.1, help: { en: "Set your target return (e.g. 2x = double your money). We calculate the price needed.", es: "Establece tu retorno objetivo (ej. 2x = duplicar). Calculamos el precio necesario." } }
            ],
            formula: "entryPrice > 0 ? ((((investment / entryPrice) * exitPrice) - investment - fees) > 0 ? (((investment / entryPrice) * exitPrice) - investment - fees) * (1 - (taxRate / 100)) : (((investment / entryPrice) * exitPrice) - investment - fees)) : 0",
            resultFormat: "currency",
            resultLabel: { en: "Net Profit (After Tax)", fi: "Nettovoitto (Veron jälkeen)", de: "Nettogewinn (Nach Steuern)", es: "Beneficio Neto (Tras Impuestos)", fr: "Bénéfice Net (Après Impôt)", pt: "Lucro Líquido (Pós-Imposto)", it: "Utile Netto (Dopo le Tasse)", nl: "Nettowinst (Na Belasting)", pl: "Zysk Netto (Po Opodatkowaniu)", sv: "Nettovinst (Efter Skatt)", no: "Nettogevinst (Etter Skatt)", da: "Nettofortjeneste (Efter Skat)" },
            breakdown: [
                { label: { en: "Gross Profit", fi: "Bruttovoitto", de: "Bruttogewinn", es: "Beneficio Bruto", fr: "Bénéfice Brut", pt: "Lucro Bruto", it: "Utile Lordo", nl: "Brutowinst", pl: "Zysk Brutto", sv: "Bruttovinst", no: "Bruttofortjeneste", da: "Bruttoafkast" }, formula: "((investment / entryPrice) * exitPrice) - investment - fees", format: "currency" },
                { label: { en: "Estimated Tax", fi: "Arvioitu vero", de: "Geschätzte Steuer", es: "Impuesto Estimado", fr: "Impôt Estimé", pt: "Imposto Estimado", it: "Tassa Stimata", nl: "Geschatte Belasting", pl: "Szacowany Podatek", sv: "Beräknad Skatt", no: "Beregnet Skatt", da: "Beregnet Skat" }, formula: "(((investment / entryPrice) * exitPrice) - investment - fees) > 0 ? (((investment / entryPrice) * exitPrice) - investment - fees) * (taxRate / 100) : 0", format: "currency" },
                { label: { en: "Total Fees", fi: "Kulut yhteensä", de: "Gesamtgebühren", es: "Comisiones Totales", fr: "Frais Totaux", pt: "Taxas Totais", it: "Commissioni Totali", nl: "Totale Kosten", pl: "Opłaty Razem", sv: "Totala Avgifter", no: "Totale Gebyrer", da: "Samlede Gebyrer" }, formula: "fees", format: "currency" },
                { label: { en: "Initial Investment", fi: "Alkuperäinen sijoitus", de: "Investition", es: "Inversión Inicial", fr: "Investissement Initial", pt: "Investimento Inicial", it: "Investimento Iniziale", nl: "Initiële Investering", pl: "Inwestycja Początkowa", sv: "Initial Investering", no: "Opprinnelig Investering", da: "Oprindelig Investering" }, formula: "investment", format: "currency" }
            ],
            metrics: [
                { label: { en: "ROI %", fi: "ROI %", de: "ROI %", es: "ROI %", fr: "ROI %", pt: "ROI %", it: "ROI %", nl: "ROI %", pl: "ROI %", sv: "ROI %", no: "ROI %", da: "ROI %" }, formula: "((((investment / entryPrice) * exitPrice) - investment - fees) > 0 ? (((investment / entryPrice) * exitPrice) - investment - fees) * (1 - (taxRate / 100)) : (((investment / entryPrice) * exitPrice) - investment - fees)) / investment * 100", format: "percent" },
                { label: { en: "Break-Even Price", fi: "Nollatulos-hinta", de: "Break-Even Preis", es: "Precio de Equilibrio", fr: "Prix d'Équilibre", pt: "Preço de Equilíbrio", it: "Prezzo di Pareggio", nl: "Break-Even Prijs", pl: "Cena Progowa", sv: "Break-Even Pris", no: "Break-Even Pris", da: "Break-Even Pris" }, formula: "entryPrice * (investment + fees) / investment", format: "currency" },
                { label: { en: "🔥 Recovery Pump Needed", fi: "🔥 Tarvittava nousu", de: "🔥 Nötiger Anstieg", es: "🔥 Subida Necesaria", fr: "🔥 Hausse Nécessaire", pt: "🔥 Subida Necessária", it: "🔥 Rialzo Necessario", nl: "🔥 Benodigde Stijging", pl: "🔥 Wymagany Wzrost", sv: "🔥 Nödvändig Uppgång", no: "🔥 Nødvendig Oppgang", da: "🔥 Nødvendig Stigning" }, formula: "((entryPrice - exitPrice) / exitPrice * 100)", format: "percent", condition: "exitPrice < entryPrice", tooltip: { en: "The percentage pump needed just to get back to break-even.", es: "El porcentaje de subida necesario para recuperar tu inversión." } },
                { label: { en: "🚀 Target Price", fi: "🚀 Tavoitehinta", de: "🚀 Zielpreis", es: "🚀 Precio Objetivo", fr: "🚀 Prix Cible", pt: "🚀 Preço Alvo", it: "🚀 Prezzo Obiettivo", nl: "🚀 Doelprijs", pl: "🚀 Cena Docelowa", sv: "🚀 Målpris", no: "🚀 Målpris", da: "🚀 Målpris" }, formula: "entryPrice * (targetMultiplier * investment + fees) / investment", format: "currency", tooltip: { en: "The price needed to hit your Profit Goal.", es: "El precio necesario para alcanzar tu Meta de Ganancia." } }
            ],
            notices: [
                { message: { en: "🚀 Nice! This trade is in profit by +${Math.abs(result).toLocaleString()}", es: "🚀 ¡Genial! Esta operación tiene una ganancia de +${Math.abs(result).toLocaleString()}", de: "🚀 Super! Dieser Trade bringt +${Math.abs(result).toLocaleString()}" }, condition: "result > 0", type: "success" },
                { message: { en: "⚠️ Warning: You are at a loss of ${Math.abs(result).toLocaleString()}. See 'Recovery Pump' metric for details.", es: "⚠️ Cuidado: Estás perdiendo ${Math.abs(result).toLocaleString()}.", de: "⚠️ Warnung: Sie sind ${Math.abs(result).toLocaleString()} im Minus." }, condition: "result < 0", type: "warning" }
            ]
        },
    },
    solar: {
        baseType: "solar",
        id: "solar",
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
        content: {
            en: `
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
            es: `
                <div class="prose">
                    <h3>¿Vale la pena la Energía Solar en 2026?</h3>
                    <p>Con el aumento de los precios de la electricidad y la caída de los costos solares, pasarse a la energía solar nunca ha sido tan atractivo. Esta calculadora te ayuda a estimar tu <strong>periodo de amortización</strong> y el ROI anual basado en tu consumo actual.</p>
                    <ul>
                        <li><strong>Horas Pico de Sol:</strong> Varía según la región (4-6 horas de promedio).</li>
                        <li><strong>Créditos Fiscales:</strong> Muchos países ofrecen incentivos por instalación.</li>
                        <li><strong>Periodo de Retorno:</strong> La mayoría de los sistemas se pagan solos en 6-10 años.</li>
                    </ul>
                    <p>Recuerda tener en cuenta los <strong>incentivos locales</strong> para obtener la estimación más precisa.</p>
                </div>
            `,
            de: `
                <div class="prose">
                    <h3>Lohnt sich Solar im Jahr 2026?</h3>
                    <p>Bei steigenden Strompreisen und sinkenden Solarkosten war der Umstieg auf Solar noch nie so attraktiv. Dieser Rechner hilft Ihnen, Ihre <strong>Amortisationszeit</strong> und den jährlichen ROI basierend auf Ihrem aktuellen Stromverbrauch zu schätzen.</p>
                    <ul>
                        <li><strong>Sonnenstunden:</strong> Variiert je nach Region (Durchschnittlich 4-6 Stunden).</li>
                        <li><strong>Förderungen:</strong> Staatliche Zuschüsse und Einspeisevergütungen nutzen.</li>
                        <li><strong>Amortisation:</strong> Die meisten Anlagen rechnen sich nach 6-10 Jahren.</li>
                    </ul>
                    <p>Berücksichtigen Sie auch <strong>lokale Anreize</strong> für eine möglichst genaue Schätzung.</p>
                </div>
            `,
            fr: `
                <div class="prose">
                    <h3>Le solaire en vaut-il la peine en 2026 ?</h3>
                    <p>Avec l'augmentation des prix de l'électricité et la baisse des coûts du solaire, franchir le pas n'a jamais été aussi intéressant. Ce calculateur vous aide à estimer votre <strong>période de récupération</strong> et votre ROI annuel.</p>
                    <ul>
                        <li><strong>Heures d'ensoleillement :</strong> Varie selon la région (moyenne de 4 à 6 heures).</li>
                        <li><strong>Aides d'État :</strong> Des crédits d'impôt et des primes sont souvent disponibles.</li>
                        <li><strong>Retour sur investissement :</strong> La plupart des systèmes sont rentabilisés en 6 à 10 ans.</li>
                    </ul>
                    <p>N'oubliez pas d'inclure les <strong>incitations locales</strong> pour obtenir l'estimation la plus précise.</p>
                </div>
            `,
            pt: `
                <div class="prose">
                    <h3>Vale a pena usar energia solar em 2026?</h3>
                    <p>Com o aumento dos preços da eletricidade e a queda dos custos solares, a energia solar nunca foi tão atraente. Esta calculadora ajuda você a estimar seu <strong>período de retorno</strong> e o ROI anual.</p>
                    <ul>
                        <li><strong>Horas de Sol de Pico:</strong> Varia de acordo com a região (média de 4 a 6 horas).</li>
                        <li><strong>Incentivos Fiscais:</strong> Muitos governos oferecem benefícios para sistemas solares.</li>
                        <li><strong>Período de Retorno:</strong> A maioria dos sistemas se paga em 6 a 10 anos.</li>
                    </ul>
                    <p>Lembre-se de considerar os <strong>incentivos locais</strong> para obter a estimativa mais precisa.</p>
                </div>
            `,
            it: `
                <div class="prose">
                    <h3>Il solare conviene nel 2026?</h3>
                    <p>Con i prezzi dell'elettricità in aumento e i costi del solare in calo, passare al solare non è mai stato così vantaggioso. Questo calcolatore ti aiuta a stimare il tuo <strong>periodo di rientro</strong> e il ROI annuo.</p>
                    <ul>
                        <li><strong>Ore di sole di picco:</strong> Varia in base alla regione (media di 4-6 ore).</li>
                        <li><strong>Incentivi statali:</strong> Sono spesso disponibili detrazioni fiscali o bonus.</li>
                        <li><strong>Periodo di rientro:</strong> La maggior parte dei sistemi si ripaga in 6-10 anni.</li>
                    </ul>
                    <p>Ricorda di includere gli <strong>incentivi locali</strong> per la stima più accurata.</p>
                </div>
            `,
            nl: `
                <div class="prose">
                    <h3>Is zonnenergie de moeite waard in 2026?</h3>
                    <p>Met stijgende elektriciteitsprijzen en dalende kosten voor zonnepanelen is de overstap nog nooit zo aantrekkelijk geweest. Deze calculator helpt u bij het schatten van uw <strong>terugverdientijd</strong> en jaarlijkse ROI.</p>
                    <ul>
                        <li><strong>Piekuur zon:</strong> Varieert per regio (gemiddeld 4-6 uur).</li>
                        <li><strong>Belastingvoordelen:</strong> Veel overheden bieden subsidies voor zonnepanelen.</li>
                        <li><strong>Terugverdientijd:</strong> De meeste systemen verdienen zichzelf in 6-10 jaar terug.</li>
                    </ul>
                    <p>Vergeet niet om <strong>lokale stimuleringsmaatregelen</strong> mee te rekenen voor de meest nauwkeurige schatting.</p>
                </div>
            `,
            pl: `
                <div class="prose">
                    <h3>Czy fotowoltaika opłaca się w 2026 roku?</h3>
                    <p>Przy rosnących cenach energii i spadających kosztach instalacji, przejście na słońce nigdy nie było bardziej atrakcyjne. Ten kalkulator pomaga oszacować <strong>czas zwrotu</strong> i roczny ROI.</p>
                    <ul>
                        <li><strong>Szczytowe godziny nasłonecznienia:</strong> Zależą od regionu (średnio 4-6 godzin).</li>
                        <li><strong>Ulgi podatkowe:</strong> Wiele programów oferuje dofinansowanie do instalacji.</li>
                        <li><strong>Czas zwrotu:</strong> Większość systemów zwraca się w ciągu 6-10 lat.</li>
                    </ul>
                    <p>Pamiętaj, aby uwzględnić <strong>lokalne dotacje</strong>, aby uzyskać jak najdokładniejszy wynik.</p>
                </div>
            `,
            sv: `
                <div class="prose">
                    <h3>Är solceller värt det 2026?</h3>
                    <p>Med stigande elpriser och sjunkande solcellskostnader har det aldrig varit mer attraktivt att satsa på solenergi. Denna kalkylator hjälper dig att uppskatta din <strong>återbetalningstid</strong> och årliga ROI.</p>
                    <ul>
                        <li><strong>Soltimmar:</strong> Varierar beroende på region (i genomsnitt 4-6 timmar).</li>
                        <li><strong>Skattereduktion:</strong> Många länder erbjuder stöd för grön teknik.</li>
                        <li><strong>Återbetalningstid:</strong> De flesta system betalar sig själva på 6-10 år.</li>
                    </ul>
                    <p>Kom ihåg att räkna med <strong>lokala incitament</strong> för den mest exakta uppskattningen.</p>
                </div>
            `,
            no: `
                <div class="prose">
                    <h3>Er solceller verdt det i 2026?</h3>
                    <p>Med stigende strømpriser og synkende solcellekostnader har det aldri vært mer attraktivt med solenergi. Denne kalkulatoren hjelper deg med å anslå <strong>nedbetalingstiden</strong> din og årlig ROI.</p>
                    <ul>
                        <li><strong>Soltimer:</strong> Varierer etter region (gjennomsnittlig 4-6 timer).</li>
                        <li><strong>Støtteordningar:</strong> Sjekk lokale støtteordninger som Enova.</li>
                        <li><strong>Nedbetalingstid:</strong> De fleste anlegg tjener seg selv inn på 6-10 år.</li>
                    </ul>
                    <p>Husk å ta med <strong>lokale insentiver</strong> for å få et mest mulig nøyaktig estimat.</p>
                </div>
            `,
            da: `
                <div class="prose">
                    <h3>Er solenergi det værd i 2026?</h3>
                    <p>Med stigende elpriser og faldende solcelleomkostninger har det aldrig været mere attraktivt at skifte til solenergi. Denne beregner hjælper dig med at estimere din <strong>tilbagebetalingstid</strong> og årlige ROI.</p>
                    <ul>
                        <li><strong>Soltimer :</strong> Varierer fra region til region (genomsnitligt 4-6 timer).</li>
                        <li><strong>Tilskudsordninger:</strong> Mange lande tilbyder støtte til vedvarende energi.</li>
                        <li><strong>Tilbagebetalingstid:</strong> De fleste anlæg har tjent sig selv hjem på 6-10 år.</li>
                    </ul>
                    <p>Husk at indregne <strong>lokale tilskud</strong> for at få det mest præcise estimat.</p>
                </div>
            `,
            fi: `
                <div class="prose">
                    <h3>Kannattaako aurinkoenergia vuonna 2026?</h3>
                    <p>Sähkön hintojen noustessa ja aurinkoenergian kustannusten laskiessa aurinkoon siirtyminen ei ole koskaan ollut houkuttelevampaa. Tämä laskuri auttaa sinua arvioimaan <strong>takaisinmaksuajan</strong> ja vuotuisen ROI:n.</p>
                    <ul>
                        <li><strong>Aurinkotunnit:</strong> Vaihtelee alueittain (keskimäärin 4-6 tuntia).</li>
                        <li><strong>Tuet:</strong> Monet maat tarjoavat verovähennyksiä tai tukea järjestelmille.</li>
                        <li><strong>Takaisinmaksuaika:</strong> Useimmat järjestelmät maksavat itsensä takaisin 6-10 vuodessa.</li>
                    </ul>
                    <p>Muista huomioida <strong>paikalliset kannustimet</strong> saadaksesi tarkimman arvion.</p>
                </div>
            `
        },
        seo: {
            en: {
                synonyms: ["solar savings calculator", "solar panel ROI calculator", "solar payback calculator", "photovoltaic cost estimator"],
                useCases: ["Homeowners considering solar installation", "Comparing solar quotes from installers", "Estimating long-term energy savings"],
                relatedTerms: ["solar panel cost", "solar ROI", "payback period", "net metering", "ITC tax credit"],
                relatedCalculators: ["mortgage", "roi", "crypto"]
            },
            es: {
                synonyms: ["calculadora de ahorro solar", "calculadora de ROI de paneles solares", "calculadora de amortización solar"],
                useCases: ["Propietarios considerando instalación solar", "Comparación de presupuestos de instaladores", "Estimación de ahorro energético a largo plazo"],
                relatedTerms: ["costo de panel solar", "ROI solar", "periodo de retorno", "medición neta"]
            },
            de: {
                synonyms: ["Solaranlage Rechner", "Photovoltaik Kalkulator", "PV Amortisation"],
                useCases: ["Hausbesitzer überlegen Solaranlage", "Solarangebote vergleichen"],
                relatedTerms: ["Solaranlage Kosten", "Einspeisevergütung", "Amortisationszeit"]
            },
            fr: {
                synonyms: ["calculateur d'économies solaires", "simulateur ROI panneaux solaires", "calcul de rentabilité photovoltaïque"],
                useCases: ["Propriétaires envisageant l'installation solaire", "Comparer les devis d'installateurs", "Estimer les économies d'énergie à long terme"],
                relatedTerms: ["coût panneau solaire", "ROI solaire", "délai de récupération"]
            },
            pt: {
                synonyms: ["calculadora de economia solar", "simulador de ROI de painéis solares", "calculadora de retorno solar"],
                useCases: ["Proprietários considerando instalação solar", "Comparar orçamentos de instaladores", "Estimar economia de energia a longo prazo"],
                relatedTerms: ["custo de painel solar", "ROI solar", "período de retorno"]
            },
            it: {
                synonyms: ["calcolatore risparmio solare", "simulatore ROI pannelli solari", "calcolo ammortamento fotovoltaico"],
                useCases: ["Proprietari che considerano l'installazione solare", "Confronto preventivi installatori", "Stima risparmio energetico a lungo termine"],
                relatedTerms: ["costo pannelli solari", "ROI solare", "periodo di rientro"]
            },
            nl: {
                synonyms: ["zonnepanelen besparingscalculator", "solar ROI simulator", "zonnepanelen terugverdientijd berekenen"],
                useCases: ["Huiseigenaren die zonnepanelen overwegen", "Vergelijken van offertes van installateurs", "Schatten van energiebesparingen op lange termijn"],
                relatedTerms: ["kosten zonnepanelen", "solar ROI", "terugverdientijd"]
            },
            pl: {
                synonyms: ["kalkulator oszczędności fotowoltaiki", "symulator ROI paneli słonecznych", "obliczanie zwrotu z fotowoltaiki"],
                useCases: ["Właściciele domów rozważający fotowoltaikę", "Porównywanie ofert instalatorów", "Szacowanie długoterminowych oszczędności"],
                relatedTerms: ["koszt paneli słonecznych", "ROI fotowoltaiki", "czas zwrotu"]
            },
            sv: {
                synonyms: ["solcellsbesparing kalkylator", "solceller ROI kalkylator", "återbetalningstid solceller"],
                useCases: ["Husägare som överväger solceller", "Jämföra offerter från installatörer", "Uppskatta långsiktiga energibesparingar"],
                relatedTerms: ["solcellskostnad", "solceller ROI", "återbetalningstid"]
            },
            no: {
                synonyms: ["solcellebesparing kalkulator", "solceller ROI kalkulator", "nedbetalingstid solceller"],
                useCases: ["Huseiere som vurderer solceller", "Sammenligne tilbud fra installatører", "Anslå langsiktige energibesparelser"],
                relatedTerms: ["solcellekostnad", "solceller ROI", "nedbetalingstid"]
            },
            da: {
                synonyms: ["solcellebesparelse beregner", "solceller ROI beregner", "tilbagebetalingstid solceller"],
                useCases: ["Boligejere der overvejer solceller", "Sammenlign tilbud fra installatører", "Anslå langsigtede energibesparelser"],
                relatedTerms: ["solcelleomkostninger", "solceller ROI", "tilbagebetalingstid"]
            },
            fi: {
                synonyms: ["aurinkopaneelien säästölaskuri", "aurinkovoiman ROI-laskuri", "aurinkopaneelien takaisinmaksulaskuri"],
                useCases: ["Asunnon omistajat harkitsemassa aurinkopaneeleja", "Asentajien tarjousten vertailu", "Pitkän aikavälin energiansäästöjen arviointi"],
                relatedTerms: ["aurinkopaneelien hinta", "aurinko-ROI", "takaisinmaksuaika"]
            }
        },
        faqs: {
            en: [
                { q: "How long is the typical solar payback period?", a: "Most residential solar systems pay for themselves in 6 to 10 years, depending on local electricity rates and incentives." },
                { q: "Are solar panels worth it in cloudy climates?", a: "Yes! Solar panels still generate electricity on cloudy days, though at a lower efficiency. Germany, for example, is a world leader in solar despite its climate." },
                { q: "Does solar increase property value?", a: "Studies show that homes with solar panels sell for 4% more on average than comparable homes without them." }
            ],
            es: [
                { q: "¿Cuánto tiempo tarda en recuperarse la inversión solar?", a: "La mayoría de los sistemas se pagan solos en 6-10 años, dependiendo de las tarifas eléctricas locales." },
                { q: "¿Valen la pena los paneles en climas nublados?", a: "Sí, los paneles siguen generando energía en días nublados, aunque con menor eficiencia." },
                { q: "¿Aumenta el valor de la propiedad?", a: "Los estudios indican que las casas con paneles solares se venden por un promedio de un 4% más." }
            ],
            de: [
                { q: "Wie lange ist die Amortisationszeit bei Solar?", a: "Die meisten Anlagen rechnen sich nach 6-10 Jahren, abhängig von Strompreisen und Förderungen." },
                { q: "Lohnen sich Solarpanels bei bewölktem Wetter?", a: "Ja! Panels erzeugen auch bei Bewölkung Strom, wenn auch mit geringerer Effizienz." },
                { q: "Steigert Solar den Immobilienwert?", a: "Studien zeigen, dass Häuser mit Solaranlagen im Durchschnitt 4% teurer verkauft werden." }
            ],
            fr: [
                { q: "Quelle est la durée de rentabilisation du solaire ?", a: "La plupart des systèmes sont rentabilisés en 6 à 10 ans, selon les tarifs d'électricité et les aides." },
                { q: "Les panneaux valent-ils le coup sous un ciel nuageux ?", a: "Oui ! Les panneaux génèrent toujours de l'électricité les jours nuageux, bien qu'avec une efficacité moindre." },
                { q: "Le solaire augmente-t-il la valeur de la propriété ?", a: "Des études montrent que les maisons avec panneaux solaires se vendent en moyenne 4 % plus cher." }
            ],
            pt: [
                { q: "Qual o período de retorno da energia solar?", a: "A maioria dos sistemas se paga em 6 a 10 anos, dependendo das tarifas locais e incentivos." },
                { q: "Painéis solares valem a pena em climas nublados?", a: "Sim! Os painéis ainda geram eletricidade em dias nublados, embora com menor eficiência." },
                { q: "A energia solar aumenta o valor do imóvel?", a: "Estudos mostram que casas com painéis solares são vendidas por cerca de 4% a mais em média." }
            ],
            it: [
                { q: "Quanto dura il periodo di rientro del solare?", a: "La maggior parte dei sistemi si ripaga in 6-10 anni, a seconda delle tariffe locali e degli incentivi." },
                { q: "I pannelli solari convengono in climi nuvolosi?", a: "Sì! I pannelli generano comunque elettricità nei giorni nuvolosi, anche se con minore efficienza." },
                { q: "Il solare aumenta il valore dell'immobile?", a: "Gli studi mostramo che le case con pannelli solari si vendono in media al 4% in più." }
            ],
            nl: [
                { q: "Hoe lang is de terugverdientijd van zonnepanelen?", a: "De meeste systemen verdienen zichzelf in 6-10 jaar terug, afhankelijk van lokale tarieven en subsidies." },
                { q: "Zijn zonnepanelen de moeite waard bij bewolkt weer?", a: "Ja! Panelen wekken ook op bewolkte dagen stroom op, zij het met een lagere efficiëntie." },
                { q: "Verhogen zonnepanelen de waarde van mijn woning?", a: "Onderzoek toont aan dat huizen met zonnepanelen gemiddeld 4% meer opbrengen bij verkoop." }
            ],
            pl: [
                { q: "Jak długo zwraca się instalacja fotowoltaiczna?", a: "Większość instalacji zwraca się w ciągu 6-10 lat, zależnie od cen prądu i dotacji." },
                { q: "Czy fotowoltaika opłaca się przy zachmurzeniu?", a: "Tak! Panele produkują energię nawet w pochmurne dni, choć z mniejszą wydajnością." },
                { q: "Czy panele słoneczne zwiększają wartość domu?", a: "Badania pokazują, że domy z fotowoltaiką sprzedają się średnio o 4% drożej." }
            ],
            sv: [
                { q: "Hur lång är återbetalningstiden för solceller?", a: "De flesta system betalar sig själva på 6-10 år, beroende på lokala elpriser och stöd." },
                { q: "Är solceller värt det när det är molnigt?", a: "Ja! Paneler genererar fortfarande el på molniga dagar, om än med lägre effektivitet." },
                { q: "Höjer solceller värdet på huset?", a: "Studier visar att hus med solceller säljs för i genomsnitt 4 % mer." }
            ],
            no: [
                { q: "Hvor lang er nedbetalingstiden for solceller?", a: "De fleste anlegg tjener seg selv inn på 6-10 år, avhengig av strømpriser og støtte." },
                { q: "Lønner solceller seg i overskyet vær?", a: "Ja! Paneler genererer fortsatt strøm på overskyede dager, men med lavere effektivitet." },
                { q: "Øker solceller verdien på boligen?", a: "Studier viser at boliger med solceller selges for i snitt 4 % mer." }
            ],
            da: [
                { q: "Hvor lang er tilbagebetalingstiden for solceller?", a: "De fleste anlæg har tjent sig selv hjem på 6-10 år, afhængigt af elpriser og tilskud." },
                { q: "Er solceller det værd i skyet vejr?", a: "Ja! Paneler producerer stadig strøm på skyede dage, dog med lavere effektivitet." },
                { q: "Øger solceller ejendommens værdi?", a: "Undersøgelser viser, at huse med solceller i gennemsnit sælges for 4 % mere." }
            ],
            fi: [
                { q: "Kuinka pitkä on aurinkopaneelien takaisinmaksuaika?", a: "Useimmat järjestelmät maksavat itsensä takaisin 6-10 vuodessa sähkön hinnasta ja tuista riippuen." },
                { q: "Kannattavatko paneelit pilvisellä säällä?", a: "Kyllä! Paneelit tuottavat sähköä myös pilvisinä päivinä, vaikkakin pienemmällä teholla." },
                { q: "Nostavatko aurinkopaneelit asunnon arvoa?", a: "Tutkimukset osoittavat, että aurinkopaneeleilla varustetut kodit myydään keskimäärin 4 % kalliimmalla." }
            ]
        },
        config: {
            currency: { en: "USD", es: "EUR", de: "EUR", fr: "EUR", pt: "BRL", it: "EUR", nl: "EUR", pl: "PLN", sv: "SEK", no: "NOK", da: "DKK", fi: "EUR" },
            locale: { en: "en-US", es: "es-ES", de: "de-DE", fr: "fr-FR", pt: "pt-BR", it: "it-IT", nl: "nl-NL", pl: "pl-PL", sv: "sv-SE", no: "no-NO", da: "da-DK", fi: "fi-FI" },
            fields: [
                { id: "bill", type: "number", label: { en: "Monthly Electric Bill", fi: "Kuukausittainen sähkölasku", de: "Monatl. Stromrechnung", es: "Factura Eléctrica Mensual", fr: "Facture d'Électricité Mensuelle", pt: "Conta de Luz Mensal", it: "Bolletta Elettrica Mensile", nl: "Maandelijkse Elektriciteitsrekening", pl: "Miesięczny Rachunek za Prąd", sv: "Månatlig Elräkning", no: "Månedlig Strømregning", da: "Månedlig Elregning" }, default: 150, min: 0, step: 10, format: "currency" },
                { id: "electricityRate", type: "number", label: { en: "Electricity Cost ($/kWh)", fi: "Sähkön hinta (€/kWh)", de: "Strompreis (€/kWh)", es: "Precio Electricidad (€/kWh)", fr: "Prix de l'Électricité", pt: "Tarifa de Energia", it: "Costo Elettricità", nl: "Stroomprijs", pl: "Cena Prądu", sv: "Elpris", no: "Strømpris", da: "Elpris" }, default: 0.15, min: 0.01, step: 0.01, format: "currency" },
                { id: "sunHours", type: "number", label: { en: "Peak Sun Hours / Day", fi: "Aurinkotunnit / Päivä", de: "Sonnenstunden / Tag", es: "Horas de Sol al Día", fr: "Heures de Soleil par Jour", pt: "Horas de Sol por Dia", it: "Ore di Sole al Giorno", nl: "Zonne-uren per Dag", pl: "Godziny Słoneczne na Dobę", sv: "Soltimmar per Dag", no: "Soltimer per Dag", da: "Soltimer pr. Dag" }, default: 4, min: 1, max: 12, step: 0.1 },
                { id: "costPerWatt", type: "number", label: { en: "Cost per Watt Installed", fi: "Hinta per asennettu watti", de: "Kosten pro Watt", es: "Costo por Vatio Instalado", fr: "Coût par Watt Installé", pt: "Custo por Watt Instalado", it: "Costo per Watt Installato", nl: "Kosten per Geïnstalleerde Watt", pl: "Koszt za Wat Instalacji", sv: "Kostnad per Installerad Watt", no: "Kostnad per Installert Watt", da: "Omkostning pr. Installeret Watt" }, default: 3.00, min: 1, step: 0.1, format: "currency" }
            ],
            formula: "((bill * 12) / ((((bill * 12) / (electricityRate || 0.1)) / (sunHours * 365 * 0.75 || 1) * 1000 * costPerWatt) || 1)) * 100",
            resultFormat: "percent",
            resultLabel: { en: "Estimated Yearly ROI", fi: "Arvioitu vuotuinen ROI", de: "Geschätzter Jährlicher ROI", es: "ROI Anual Estimado", fr: "ROI Annuel Estimé", pt: "ROI Anual Estimado", it: "ROI Annuo Stimato", nl: "Geschatte Jaarlijkse ROI", pl: "Szacowany Roczny ROI", sv: "Uppskattad Årlig Avkastning", no: "Anslått Årlig Avkastning", da: "Anslået Årligt Afkast" },
            breakdown: [
                { label: { en: "System Cost (Est.)", fi: "Järjestelmän hinta (arvio)", de: "Anlagenkosten (Geschätzt)", es: "Costo del Sistema (Est.)", fr: "Coût du Système (Est.)", pt: "Custo do Sistema (Est.)", it: "Costo del Sistema (Stimato)", nl: "Systeemkosten (Schatting)", pl: "Koszt Systemu (Szac.)", sv: "Systemkostnad (Uppsk.)", no: "Systemkostnad (Anslått)", da: "Systemomkostninger (Anslået)" }, formula: "((bill * 12) / (electricityRate || 0.1)) / (sunHours * 365 * 0.75 || 1) * 1000 * costPerWatt", format: "currency" },
                { label: { en: "Annual Savings", fi: "Vuotuiset säästöt", de: "Jährliche Ersparnis", es: "Ahorro Anual", fr: "Économies Annuelles", pt: "Economia Anual", it: "Risparmio Annuo", nl: "Jaarlijkse Besparing", pl: "Roczne Oszczędności", sv: "Årligt Sparande", no: "Årlig Sparing", da: "Årlig Besparelse" }, formula: "bill * 12", format: "currency" }
            ],
            metrics: [
                { label: { en: "Payback Period (Years)", fi: "Takaisinmaksuaika (vuotta)", de: "Amortisationszeit (Jahre)", es: "Periodo de Retorno (Años)", fr: "Délai de Récupération (Années)", pt: "Período de Retorno (Anos)", it: "Periodo di Ammortamento (Anni)", nl: "Terugverdientijd (Jaren)", pl: "Okres Zwrotu (Lata)", sv: "Återbetalningstid (År)", no: "Nedbetalingstid (År)", da: "Tilbagebetalingstid (År)" }, formula: "(((bill * 12) / (electricityRate || 0.1)) / (sunHours * 365 * 0.75 || 1) * 1000 * costPerWatt) / (bill * 12 || 1)", format: "number" }
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
        content: {
            en: `
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
            es: `
                <div class="prose">
                    <h3>Planifica la Boda de tus Sueños en 2026</h3>
                    <p>Una boda promedio en 2026 cuesta entre <strong>30.000 y 50.000 €</strong>, pero tu presupuesto depende de tus prioridades. Esta calculadora te ayuda a ver el <em>panorama completo</em> antes de contratar proveedores.</p>
                    <ul>
                        <li><strong>Lugar y Recepción:</strong> Normalmente el 40-50% del presupuesto total.</li>
                        <li><strong>Catering:</strong> Calcula entre 75 y 200 € por invitado.</li>
                        <li><strong>Fotografía:</strong> No escatimes aquí; son tus recuerdos para siempre.</li>
                    </ul>
                    <p>Usa la métrica de <strong>costo por invitado</strong> para comparar lugares de forma justa.</p>
                </div>
            `,
            de: `
                <div class="prose">
                    <h3>Planen Sie Ihre Traumhochzeit im Jahr 2026</h3>
                    <p>Eine durchschnittliche Hochzeit im Jahr 2026 kostet zwischen <strong>30.000 und 50.000 €</strong>, aber Ihr Budget hängt ganz von Ihren Prioritäten ab. Dieser Rechner hilft Ihnen, das <em>Gesamtbild</em> zu sehen.</p>
                    <ul>
                        <li><strong>Ort & Empfang:</strong> In der Regel 40-50% des Gesamtbudgets.</li>
                        <li><strong>Catering:</strong> Rechnen Sie mit 75-200 € pro Gast für Speisen und Getränke.</li>
                        <li><strong>Fotografie:</strong> Sparen Sie hier nicht – das sind Ihre bleibenden Erinnerungen.</li>
                    </ul>
                    <p>Nutzen Sie die Kennzahl <strong>Kosten pro Gast</strong>, um Locations fair zu vergleichen.</p>
                </div>
            `,
            fr: `
                <div class="prose">
                    <h3>Planifiez le mariage de vos rêves en 2026</h3>
                    <p>Un mariage moyen en 2026 coûte entre <strong>30 000 et 50 000 €</strong>, mais votre budget dépend entièrement de vos priorités. Ce calculateur vous aide à voir la <em>vue d'ensemble</em> avant de vous engager.</p>
                    <ul>
                        <li><strong>Lieu et Réception :</strong> Généralement 40 à 50 % du budget total.</li>
                        <li><strong>Traiteur :</strong> Comptez 75 à 200 € par invité.</li>
                        <li><strong>Photographie :</strong> Ne lésinez pas ici, ce sont vos souvenirs durables.</li>
                    </ul>
                    <p>Utilisez la métrique du <strong>coût par invité</strong> pour comparer équitablement les lieux.</p>
                </div>
            `,
            pt: `
                <div class="prose">
                    <h3>Planeje o casamento dos seus sonhos em 2026</h3>
                    <p>Um casamento médio em 2026 custa entre <strong>R$ 30.000 e R$ 50.000</strong>, mas seu orçamento depende inteiramente de suas prioridades. Esta calculadora ajuda você a ver o <em>cenário completo</em>.</p>
                    <ul>
                        <li><strong>Local e Recepção:</strong> Geralmente 40-50% do orçamento total.</li>
                        <li><strong>Buffet:</strong> Espere de R$ 75 a R$ 200 por convidado.</li>
                        <li><strong>Fotografia:</strong> Não economize aqui — estas são suas memórias eternas.</li>
                    </ul>
                    <p>Use a métrica de <strong>custo por convidado</strong> para comparar locais de forma justa.</p>
                </div>
            `,
            it: `
                <div class="prose">
                    <h3>Pianifica il matrimonio dei tuoi sogni nel 2026</h3>
                    <p>Un matrimonio medio nel 2026 costa tra <strong>30.000 e 50.000 €</strong>, ma il tuo budget dipende interamente dalle tue priorità. Questo calcolatore ti aiuta a vedere il <em>quadro completo</em>.</p>
                    <ul>
                        <li><strong>Location e Ricevimento:</strong> Solitamente il 40-50% del budget totale.</li>
                        <li><strong>Catering:</strong> Calcola tra 75 e 200 € a persona.</li>
                        <li><strong>Fotografia:</strong> Non risparmiare qui: sono i tuoi ricordi per la vita.</li>
                    </ul>
                    <p>Usa la metrica del <strong>costo per invitato</strong> per confrontare equamente le location.</p>
                </div>
            `,
            nl: `
                <div class="prose">
                    <h3>Plan uw droombruiloft in 2026</h3>
                    <p>De gemiddelde bruiloft in 2026 kost tussen de <strong>€ 30.000 en € 50.000</strong>, maar uw budget hangt volledig af van uw prioriteiten. Deze calculator helpt u het <em>volledige plaatje</em> te zien.</p>
                    <ul>
                        <li><strong>Locatie & Receptie:</strong> Meestal 40-50% van het totale budget.</li>
                        <li><strong>Catering:</strong> Reken op € 75-200 per gast voor eten en drinken.</li>
                        <li><strong>Fotografie:</strong> Bespaar hier niet op – dit zijn uw blijvende herinneringen.</li>
                    </ul>
                    <p>Gebruik de <strong>kosten per gast</strong> om locaties eerlijk te vergelijken.</p>
                </div>
            `,
            pl: `
                <div class="prose">
                    <h3>Zaplanuj wesele swoich marzeń w 2026 roku</h3>
                    <p>Średnie wesele w 2026 roku kosztuje od <strong>30 000 do 50 000 zł</strong>, ale Twój budżet zależy wyłącznie od Twoich priorytetów. Ten kalkulator pomaga zobaczyć <em>pełny obraz</em> sytuacji.</p>
                    <ul>
                        <li><strong>Miejsce i Przyjęcie:</strong> Zazwyczaj 40-50% całkowitego budżetu.</li>
                        <li><strong>Catering:</strong> Spodziewaj się 75-200 zł za gościa.</li>
                        <li><strong>Fotografia:</strong> Nie oszczędzaj tutaj — to Twoje pamiątki na całe życie.</li>
                    </ul>
                    <p>Użyj wskaźnika <strong>kosztu na gościa</strong>, aby sprawiedliwie porównać oferty.</p>
                </div>
            `,
            sv: `
                <div class="prose">
                    <h3>Planera ditt drömbröllop 2026</h3>
                    <p>Ett genomsnittligt bröllop 2026 kostar mellan <strong>300 000 och 500 000 kr</strong>, men din budget beror helt på dina prioriteringar. Denna kalkylator hjälper dig att se <em>helhetsbilden</em>.</p>
                    <ul>
                        <li><strong>Lokal & Reception:</strong> Vanligtvis 40-50 % av den totala budgeten.</li>
                        <li><strong>Catering:</strong> Räkna med 750-2000 kr per gäst för mat och dryck.</li>
                        <li><strong>Fotografi:</strong> Snåla inte här – det här är dina livslånga minnen.</li>
                    </ul>
                    <p>Använd mätvärdet <strong>kostnad per gäst</strong> för att jämföra lokaler på ett rättvist sätt.</p>
                </div>
            `,
            no: `
                <div class="prose">
                    <h3>Planlegg drømmebryllupet i 2026</h3>
                    <p>Et gjennomsnittlig bryllup i 2026 koster mellom <strong>300 000 og 500 000 kr</strong>, men budsjettet avhenger helt av dine prioriteringer. Denne kalkulatoren hjelper deg med å se <em>det komplette bildet</em>.</p>
                    <ul>
                        <li><strong>Lokaler og Mottakelse:</strong> Vanligvis 40-50 % av totalbudsjettet.</li>
                        <li><strong>Servering:</strong> Regn med 750-2000 kr per gjest for mat og drikke.</li>
                        <li><strong>Fotografering:</strong> Ikke spar her – dette er minnene dine for livet.</li>
                    </ul>
                    <p>Bruk <strong>kostnad per gjest</strong> for å sammenligne lokaler og holde deg innenfor budsjettet.</p>
                </div>
            `,
            da: `
                <div class="prose">
                    <h3>Planlæg dit drømmebryllup i 2026</h3>
                    <p>Et gennemsnitligt bryllup i 2026 koster mellem <strong>300.000 og 500.000 kr.</strong>, men dit budget afhænger helt af dine prioriteringer. Denne beregner hjælper dig med at se det <em>fulde billede</em>.</p>
                    <ul>
                        <li><strong>Sted og Reception:</strong> Normalt 40-50 % af det samlede budget.</li>
                        <li><strong>Catering:</strong> Forvent 750-2.000 kr. pr. gæst for mad og drikke.</li>
                        <li><strong>Fotografi:</strong> Spar ikke her – det er dine varige minder.</li>
                    </ul>
                    <p>Brug <strong>omkostning pr. gæst</strong> til at sammenligne steder på en retfærdig måde.</p>
                </div>
            `,
            fi: `
                <div class="prose">
                    <h3>Suunnittele unelmiesi häät vuonna 2026</h3>
                    <p>Keskimääräiset häät vuonna 2026 maksavat <strong>30 000 – 50 000 €</strong>, mutta budjettisi riippuu täysin prioriteeteistasi. Tämä laskuri auttaa sinua näkemään <em>kokonaiskuvan</em>.</p>
                    <ul>
                        <li><strong>Juhlapaikka ja Vastaanotto:</strong> Yleensä 40–50 % kokonaisbudjetista.</li>
                        <li><strong>Catering:</strong> Odota 75–200 € vierasta kohden.</li>
                        <li><strong>Valokuvaus:</strong> Älä säästä tässä — nämä ovat elinikäisiä muistojasi.</li>
                    </ul>
                    <p>Käytä <strong>kustannus per vieras</strong> -mittaria vertaillaksesi hääpaikkoja tasapuolisesti.</p>
                </div>
            `
        },
        faqs: {
            en: [
                { q: "What's the biggest wedding expense?", a: "The venue and catering are typically the largest expenses, often consuming about 50% of the total budget." },
                { q: "How much should I budget per guest?", a: "In 2026, couples are averaging $150-$300 per guest when considering food, drinks, rentals, and cake." },
                { q: "How can I save money on my wedding?", a: "Consider an off-peak day (Friday or Sunday), reducing the guest list, or choosing a buffet instead of a plated meal." }
            ],
            es: [
                { q: "¿Cuál es el mayor gasto de una boda?", a: "El lugar y el catering suelen ser los gastos más grandes, consumiendo cerca del 50% del presupuesto." },
                { q: "¿Cuánto presupuesto debo asignar por invitado?", a: "En 2026, las parejas promedian entre 150 y 300 € por invitado considerando comida y bebida." },
                { q: "¿Cómo puedo ahorrar dinero?", a: "Considera un día que no sea sábado (viernes o domingo), reduce la lista de invitados o elige un buffet." }
            ],
            de: [
                { q: "Was ist der größte Kostenfaktor bei einer Hochzeit?", a: "Die Location und das Catering sind in der Regel die größten Ausgaben (ca. 50% des Budgets)." },
                { q: "Wie viel sollte ich pro Gast einplanen?", a: "Im Jahr 2026 rechnen Paare mit durchschnittlich 150-300 € pro Gast für Verpflegung und Ausstattung." },
                { q: "Wie kann ich bei der Hochzeit sparen?", a: "Wählen Sie einen Wochentag oder Sonntag, verkleinern Sie die Gästeliste oder wählen Sie ein Buffet." }
            ],
            fr: [
                { q: "Quelle est la plus grosse dépense d'un mariage ?", a: "Le lieu et le traiteur sont généralement les dépenses les plus importantes, soit environ 50 % du budget." },
                { q: "Quel budget prévoir par invité ?", a: "En 2026, les couples prévoient en moyenne 150 à 300 € par invité pour la nourriture, les boissons et la location." },
                { q: "Comment réduire les coûts ?", a: "Envisagez un mariage en semaine ou un dimanche, réduisez la liste d'invités ou optez pour un buffet." }
            ],
            pt: [
                { q: "Qual é a maior despesa de um casamento?", a: "O local e o buffet são tipicamente as maiores despesas, consumindo cerca de 50% do orçamento total." },
                { q: "Quanto devo orçar por convidado?", a: "Em 2026, os casais estão gastando em média R$ 150-R$ 300 por convidado com comida e bebida." },
                { q: "Como posso economizar dinheiro?", a: "Considere casar em um dia alternativo (sexta ou domingo), reduza a lista de convidados ou escolha um buffet." }
            ],
            it: [
                { q: "Qual è la spesa più grande di un matrimonio?", a: "La location e il catering sono solitamente le voci più care, circa il 50% del budget totale." },
                { q: "Quanto dovrei preventivare per invitato?", a: "Nel 2026, la media è di 150-300 € a persona tra cibo, bevande e allestimenti." },
                { q: "Come posso risparmiare?", a: "Scegli un giorno feriale o la domenica, riduci il numero di invitati o preferisci il buffet al servizio al tavolo." }
            ],
            nl: [
                { q: "Wat is de grootste kostenpost van een bruiloft?", a: "De locatie en catering zijn meestal de grootste uitgaven, vaak zo'n 50% van het totale budget." },
                { q: "Hoeveel moet ik per gast budgetteren?", a: "In 2026 begroten koppels gemiddeld €150-€300 per gast voor eten, drinken en huur." },
                { q: "Hoe kan ik geld besparen?", a: "Kies voor een doordeweekse dag of zondag, verklein de gastenlijst of kies voor een buffet." }
            ],
            pl: [
                { q: "Co jest największym wydatkiem weselnym?", a: "Miejsce i catering to zazwyczaj największe koszty, stanowiące około 50% całego budżetu." },
                { q: "Ile powinienem zaplanować na jednego gościa?", a: "W 2026 roku pary planują średnio 150-300 zł na osobę (jedzenie, napoje, wynajem)." },
                { q: "Jak mogę zaoszczędzić?", a: "Rozważ wesele w piątek lub niedzielę, zmniejsz listę gości lub wybierz bufet zamiast dań serwowanych." }
            ],
            sv: [
                { q: "Vad är den största utgiften vid ett bröllop?", a: "Lokalen och maten är oftast de största utgifterna, cirka 50 % av den totala budgeten." },
                { q: "Hur mycket ska jag budgetera per gäst?", a: "Under 2026 räknar par med i snitt 1500-3000 kr per gäst för mat och dryck." },
                { q: "Hur kan jag spara pengar?", a: "Välj en fredag eller söndag, minska gästlistan eller välj buffé istället för trerättersmiddag." }
            ],
            no: [
                { q: "Hva er den største utgiften i et bryllup?", a: "Lokale og servering er vanligvis de største utgiftene, ofte rundt 50 % av totalbudsjettet." },
                { q: "Hvor mye bør jeg budsjettere per gjest?", a: "I 2026 regner par med i snitt 1500-3000 kr per gjest for mat og drikke." },
                { q: "Hvordan kan jeg spare penger?", a: "Velg en ukedag eller søndag, reduser gjestelisten eller velg buffé." }
            ],
            da: [
                { q: "Hvad er den største bryllupsudgift?", a: "Stedet og forplejningen er typisk de største udgifter, ofte omkring 50 % af det samlede budget." },
                { q: "Hvor meget skal jeg budgettere pr. gæst?", a: "I 2026 budgetterer par i gennemsnit med 1.500-3.000 kr. pr. gæst for mad og drikke." },
                { q: "Hvordan kan jeg spare penge?", a: "Overvej en fredag eller søndag, skær ned på gæstelisten eller vælg buffet frem for portionsanretning." }
            ],
            fi: [
                { q: "Mikä on häiden suurin menoerä?", a: "Juhlapaikka ja tarjoilut ovat tyypillisesti suurimmat kulut, usein noin 50 % kokonaisbudjetista." },
                { q: "Kuinka paljon budjetoida vierasta kohden?", a: "Vuonna 2026 parit budjetoivat keskimäärin 150–300 € vierasta kohden (ruoka ja juoma)." },
                { q: "Miten voin säästää rahaa?", a: "Harkitse häitä perjantaina tai sunnuntaina, karsi vieraslistaa tai valitse noutopöytä." }
            ]
        },
        seo: {
            en: {
                synonyms: ["wedding budget calculator", "marriage cost estimator", "wedding planner tool", "bridal budget calculator"],
                useCases: ["Couples planning their first wedding", "Parents budgeting for a child's wedding", "Wedding planners giving clients estimates"],
                relatedTerms: ["wedding venue cost", "catering per head", "wedding photographer rates", "reception budget"],
                relatedCalculators: ["loan", "roi"]
            },
            es: {
                synonyms: ["calculadora de presupuesto de boda", "estimador de costos de matrimonio", "herramienta de planificación de bodas"],
                useCases: ["Parejas planeando su primera boda", "Padres presupuestando para la boda de un hijo", "Planificadores de bodas dando estimaciones"],
                relatedTerms: ["costo de lugar de boda", "catering por persona", "tarifas de fotógrafo de bodas"]
            },
            de: {
                synonyms: ["Hochzeitsbudget Rechner", "Heiratskosten Kalkulator"],
                useCases: ["Brautpaare planen ihre Hochzeit", "Eltern budgetieren für die Hochzeit"],
                relatedTerms: ["Hochzeitslocation Kosten", "Catering Kosten pro Person"]
            },
            fr: {
                synonyms: ["calculateur de budget mariage", "simulateur de coûts de mariage", "outil de planification de mariage"],
                useCases: ["Couples planifiant leur premier mariage", "Parents budgétisant pour le mariage d'un enfant", "Organisateurs de mariages donnant des estimations"],
                relatedTerms: ["coût du lieu de mariage", "traiteur par personne", "tarifs photographe de mariage"]
            },
            pt: {
                synonyms: ["calculadora de orçamento de casamento", "estimador de custos de matrimônio", "ferramenta de planejamento de casamento"],
                useCases: ["Casais planejando seu primeiro casamento", "Pais orçando para o casamento de um filho", "Planejadores de casamento dando estimativas"],
                relatedTerms: ["custo do local do casamento", "buffet por pessoa", "tarifas de fotógrafo de casamento"]
            },
            it: {
                synonyms: ["calcolatore budget matrimonio", "simulatore costi matrimonio", "strumento pianificazione matrimonio"],
                useCases: ["Coppie che pianificano il loro primo matrimonio", "Genitori che preventivano per il matrimonio di un figlio", "Wedding planner che forniscono stime"],
                relatedTerms: ["costo location matrimonio", "catering a persona", "tariffe fotografo matrimonio"]
            },
            nl: {
                synonyms: ["trouwbudget calculator", "huwelijkskosten simulator", "bruiloft planner tool"],
                useCases: ["Stellen die hun eerste bruiloft plannen", "Ouders die budgetteren voor de bruiloft van een kind", "Wedding planners die schattingen geven"],
                relatedTerms: ["kosten trouwlocatie", "catering per persoon", "tarieven trouwfotograaf"]
            },
            pl: {
                synonyms: ["kalkulator budżetu weselnego", "symulator kosztów ślubu", "narzędzie do planowania wesela"],
                useCases: ["Pary planujące swój pierwszy ślub", "Rodzice budżetujący wesele dziecka", "Plannerzy weselni podający szacunki"],
                relatedTerms: ["koszt sali weselnej", "catering za osobę", "stawki fotografa weselnego"]
            },
            sv: {
                synonyms: ["bröllopsbudget kalkylator", "bröllopskostnad simulator", "bröllopsplaneringsverktyg"],
                useCases: ["Par som planerar sitt första bröllop", "Föräldrar som budgeterar för ett barns bröllop", "Bröllopsplanerare som ger uppskattningar"],
                relatedTerms: ["kostnad bröllopslokal", "catering per person", "priser bröllopsfotograf"]
            },
            no: {
                synonyms: ["bryllupsbudsjett kalkulator", "bryllupskostnad simulator", "bryllupsplanlegger verktøy"],
                useCases: ["Par som planlegger sitt første bryllup", "Foreldre som budsjetterer for et barns bryllup", "Bryllupsplanleggere som gir anslag"],
                relatedTerms: ["kostnad bryllupslokale", "catering per person", "priser bryllupsfotograf"]
            },
            da: {
                synonyms: ["bryllupsbudget beregner", "bryllupsomkostning simulator", "bryllupsplanlægningsværktøj"],
                useCases: ["Par der planlægger deres første bryllup", "Forældre der budgetterer til et barns bryllup", "Bryllupsarrangører der giver overslag"],
                relatedTerms: ["omkostninger bryllupslokale", "catering pr. person", "priser bryllupsfotograf"]
            },
            fi: {
                synonyms: ["hääbudjettilaskuri", "hääkustannusarvio", "hääsuunnittelutyökalu"],
                useCases: ["Parit suunnittelemassa ensimmäisiä häitään", "Vanhemmat budjetoimassa lapsen häitä", "Hääsuunnittelijat antamassa arvioita"],
                relatedTerms: ["hääpaikan kustannus", "tarjoilu per henkilö", "hääkuvaajan hinnasto"]
            }
        },
        config: {
            currency: { en: "USD", es: "EUR", de: "EUR", fr: "EUR", pt: "BRL", it: "EUR", nl: "EUR", pl: "PLN", sv: "SEK", no: "NOK", da: "DKK", fi: "EUR" },
            locale: { en: "en-US", es: "es-ES", de: "de-DE", fr: "fr-FR", pt: "pt-BR", it: "it-IT", nl: "nl-NL", pl: "pl-PL", sv: "sv-SE", no: "no-NO", da: "da-DK", fi: "fi-FI" },
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
                { label: { en: "Cost per Guest (Est. 100)", fi: "Kustannus per vieras (arvio 100)", de: "Kosten pro Gast (ca. 100)", es: "Costo por invitado (est. 100)", fr: "Coût par invité (est. 100)", pt: "Custo por convidado (est. 100)", it: "Costo per invitato (est. 100)", nl: "Kosten per gast (ca. 100)", pl: "Koszt na osobę (ok. 100)", sv: "Kostnad per gäst (ca 100)", no: "Kostnad per gjest (ca. 100)", da: "Omkostning pr. gæst (ca. 100)" }, formula: "(venue + catering + attire + photography + decor + other) / 100", format: "currency" }
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
        content: {
            en: `
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
            es: `
                <div class="prose">
                    <h3>¿Cuánto cuesta un suelo nuevo en 2026?</h3>
                    <p>Los costos varían según el material y la mano de obra. Esta calculadora incluye un <strong>margen de desperdicio</strong> (generalmente un 10%) para darte un presupuesto realista.</p>
                    <ul>
                        <li><strong>Madera:</strong> 60-120 € por m² instalado.</li>
                        <li><strong>Laminado:</strong> 30-80 € por m² instalado.</li>
                        <li><strong>Baldosa:</strong> 50-150 € por m² instalado.</li>
                        <li><strong>Moqueta:</strong> 20-60 € por m² instalado.</li>
                    </ul>
                    <p>Pide siempre presupuesto a <strong>más de 3 contratistas</strong> y consulta la garantía.</p>
                </div>
            `,
            de: `
                <div class="prose">
                    <h3>Was kostet ein neuer Boden im Jahr 2026?</h3>
                    <p>Die Kosten variieren je nach Material und Arbeitsaufwand. Dieser Rechner berücksichtigt den <strong>Materialverschnitt</strong> (ca. 10%), um ein realistisches Budget zu bieten.</p>
                    <ul>
                        <li><strong>Hartholz:</strong> 60-120 € pro m² inkl. Verlegung.</li>
                        <li><strong>Laminat:</strong> 30-80 € pro m² inkl. Verlegung.</li>
                        <li><strong>Fliesen:</strong> 50-150 € pro m² inkl. Verlegung.</li>
                        <li><strong>Teppich:</strong> 20-60 € pro m² inkl. Verlegung.</li>
                    </ul>
                    <p>Holen Sie Angebote von <strong>mindestens 3 Firmen</strong> ein und achten Sie auf die Garantie.</p>
                </div>
            `,
            fr: `
                <div class="prose">
                    <h3>Quel est le coût d'un nouveau sol en 2026 ?</h3>
                    <p>Les coûts varient selon le matériau et la main-d'œuvre. Ce calculateur inclut une <strong>marge de perte</strong> (10% en moyenne) pour un budget réaliste.</p>
                    <ul>
                        <li><strong>Parquet massif :</strong> 60-120 € par m² posé.</li>
                        <li><strong>Stratifié :</strong> 30-80 € par m² posé.</li>
                        <li><strong>Carrelage :</strong> 50-150 € par m² posé.</li>
                        <li><strong>Moquette :</strong> 20-60 € par m² posé.</li>
                    </ul>
                    <p>Demandez toujours des devis à <strong>plus de 3 entrepreneurs</strong> et vérifiez les garanties.</p>
                </div>
            `,
            pt: `
                <div class="prose">
                    <h3>Quanto custa um piso novo em 2026?</h3>
                    <p>Os custos variam conforme o material e a mão de obra. Esta calculadora considera o <strong>desperdício de material</strong> (cerca de 10%) para um orçamento realista.</p>
                    <ul>
                        <li><strong>Madeira:</strong> R$ 60-120 por m² instalado.</li>
                        <li><strong>Laminado:</strong> R$ 30-80 por m² instalado.</li>
                        <li><strong>Porcelanato:</strong> R$ 50-150 por m² instalado.</li>
                        <li><strong>Carpete:</strong> R$ 20-60 por m² instalado.</li>
                    </ul>
                    <p>Solicite orçamentos de <strong>ao menos 3 profissionais</strong> e pergunte sobre garantias.</p>
                </div>
            `,
            it: `
                <div class="prose">
                    <h3>Quanto costa un nuovo pavimento nel 2026?</h3>
                    <p>I costi variano in base al materiale e alla manodopera. Questo calcolatore include lo <strong>sfrido</strong> (circa il 10%) per un budget realistico.</p>
                    <ul>
                        <li><strong>Parquet:</strong> 60-120 € al m² posato.</li>
                        <li><strong>Laminato:</strong> 30-80 € al m² posato.</li>
                        <li><strong>Piastrelle:</strong> 50-150 € al m² posato.</li>
                        <li><strong>Moquette:</strong> 20-60 € al m² posato.</li>
                    </ul>
                    <p>Chiedi sempre preventivi a <strong>più di 3 ditte</strong> e verifica le garanzie su materiali e posa.</p>
                </div>
            `,
            nl: `
                <div class="prose">
                    <h3>Wat kost een nieuwe vloer in 2026?</h3>
                    <p>De kosten variëren per materiaal en arbeidstarief. Deze calculator houdt rekening met <strong>materiaalverlies</strong> (ca. 10%) voor een realistisch budget.</p>
                    <ul>
                        <li><strong>Hardhout:</strong> € 60-120 per m² gelegd.</li>
                        <li><strong>Laminaat:</strong> € 30-80 per m² gelegd.</li>
                        <li><strong>Tegels:</strong> € 50-150 per m² gelegd.</li>
                        <li><strong>Tapijt:</strong> € 20-60 per m² gelegd.</li>
                    </ul>
                    <p>Vraag altijd offertes aan bij <strong>3+ aannemers</strong> en let op de garantie.</p>
                </div>
            `,
            pl: `
                <div class="prose">
                    <h3>Ile kosztuje nowa podłoga w 2026 roku?</h3>
                    <p>Koszty zależą od materiału i stawek robocizny. Kalkulator uwzględnia <strong>naddatek na odpady</strong> (ok. 10%), aby podać realistyczny budżet.</p>
                    <ul>
                        <li><strong>Drewno:</strong> 60-120 zł za m² z montażem.</li>
                        <li><strong>Panele:</strong> 30-80 zł za m² z montażem.</li>
                        <li><strong>Płytki:</strong> 50-150 zł za m² z montażem.</li>
                        <li><strong>Wykładzina:</strong> 20-60 zł za m² z montażem.</li>
                    </ul>
                    <p>Zawsze zbieraj oferty od <strong>min. 3 wykonawców</strong> i pytaj o gwarancję.</p>
                </div>
            `,
            sv: SwedishContent = `
                <div class="prose">
                    <h3>Vad kostar ett nytt golv 2026?</h3>
                    <p>Golvkostnader varierar kraftigt beroende på material och arbetskostnad. Denna kalkylator räknar med <strong>spill</strong> (ca 10 %) för en realistisk budget.</p>
                    <ul>
                        <li><strong>Trägolv:</strong> 600-1200 kr per m² lagt.</li>
                        <li><strong>Laminat:</strong> 300-800 kr per m² lagt.</li>
                        <li><strong>Klinker:</strong> 500-1500 kr per m² lagt.</li>
                        <li><strong>Matta:</strong> 200-600 kr per m² lagt.</li>
                    </ul>
                    <p>Ta alltid in offerter från <strong>mer än 3 entreprenörer</strong> och kolla garantierna.</p>
                </div>
            `,
            no: `
                <div class="prose">
                    <h3>Hva koster nytt gulv i 2026?</h3>
                    <p>Gulvkostnader varierer etter materialvalg og arbeid. Denne kalkulatoren tar hensyn til <strong>svinn</strong> (ca. 10 %) for et realistisk budsjett.</p>
                    <ul>
                        <li><strong>Heltre:</strong> 600-1200 kr per m² lagt.</li>
                        <li><strong>Laminat:</strong> 300-800 kr per m² lagt.</li>
                        <li><strong>Fliser:</strong> 500-1500 kr per m² lagt.</li>
                        <li><strong>Teppe:</strong> 200-600 kr per m² lagt.</li>
                    </ul>
                    <p>Hent alltid inn tilbud fra <strong>minst 3 firmaer</strong> og sjekk garantivilkårene.</p>
                </div>
            `,
            da: `
                <div class="prose">
                    <h3>Hvad koster et nyt gulv i 2026?</h3>
                    <p>Gulvpriser varierer efter materiale og arbejdsløn. Denne beregner inkluderer <strong>spild</strong> (ca. 10 %) for et realistisk budget.</p>
                    <ul>
                        <li><strong>Trægulv:</strong> 600-1.200 kr. pr. m² lagt.</li>
                        <li><strong>Laminat:</strong> 300-800 kr. pr. m² lagt.</li>
                        <li><strong>Fliser:</strong> 500-1.500 kr. pr. m² lagt.</li>
                        <li><strong>Tæppe:</strong> 200-600 kr. pr. m² lagt.</li>
                    </ul>
                    <p>Indhent altid tilbud fra <strong>mindst 3 entreprenører</strong> og spørg ind til garantien.</p>
                </div>
            `,
            fi: `
                <div class="prose">
                    <h3>Paljonko uusi lattia maksaa vuonna 2026?</h3>
                    <p>Lattian hinta vaihtelee materiaalin ja työn hinnan mukaan. Laskuri huomioi <strong>materiaalin hukan</strong> (noin 10 %) realistisen budjetin saamiseksi.</p>
                    <ul>
                        <li><strong>Puu:</strong> 60–120 € / m² asennettuna.</li>
                        <li><strong>Laminaatti:</strong> 30–80 € / m² asennettuna.</li>
                        <li><strong>Laatta:</strong> 50–150 € / m² asennettuna.</li>
                        <li><strong>Matto:</strong> 20–60 € / m² asennettuna.</li>
                    </ul>
                    <p>Pyydä tarjoukset <strong>vähintään kolmelta urakoitsijalta</strong> ja tarkista takuuehdot.</p>
                </div>
            `
        },
        faqs: {
            en: [
                { q: "How much extra flooring should I buy for waste?", a: "The industry standard is to add 10% to your total square footage for waste, cuts, and future repairs." },
                { q: "Is professional flooring installation worth it?", a: "While DIY can save money, professional installation ensures a flat surface, long-term durability, and often comes with a multi-year warranty." },
                { q: "What's the most durable flooring for pets?", a: "Luxury Vinyl Plank (LVP) and tile are generally the most durable options for pets due to scratch resistance and water resistance." }
            ],
            es: [
                { q: "¿Cuánto material extra debo comprar?", a: "El estándar de la industria es añadir un 10% adicional por desperdicio, cortes y reparaciones futuras." },
                { q: "¿Vale la pena la instalación profesional?", a: "La instalación profesional garantiza una superficie nivelada, durabilidad y suele incluir garantía." },
                { q: "¿Qué suelo es mejor para mascotas?", a: "El vinilo de lujo (LVP) y el gres son las opciones más resistentes a arañazos y líquidos." }
            ],
            de: [
                { q: "Wie viel Materialverschnitt sollte ich einplanen?", a: "Es ist üblich, 10% zusätzlich zur Gesamtfläche für Verschnitt und zukünftige Reparaturen zu kaufen." },
                { q: "Lohnt sich die professionelle Verlegung?", a: "Profis garantieren einen ebenen Boden und Langlebigkeit; zudem gibt es oft eine Gewährleistung auf die Arbeit." },
                { q: "Welcher Boden ist am besten für Haustiere?", a: "Design-Vinyl (LVP) und Fliesen sind am widerstandsfähigsten gegen Kratzer und Feuchtigkeit." }
            ],
            fr: [
                { q: "Combien de surplus de sol dois-je acheter ?", a: "La norme est d'ajouter 10 % à votre surface totale pour les coupes, les pertes et les réparations futures." },
                { q: "La pose professionnelle en vaut-elle la peine ?", a: "Elle garantit une surface plane, une durabilité accrue et s'accompagne souvent d'une garantie décennale." },
                { q: "Quel sol est le plus résistant pour les animaux ?", a: "Le vinyle (LVP) et le carrelage sont les meilleures options car ils résistent bien aux griffures et à l'eau." }
            ],
            pt: [
                { q: "Quanto material extra devo comprar para sobra?", a: "O padrão é adicionar 10% à metragem total para cortes, desperdícios e reparos futuros." },
                { q: "Vale a pena contratar instalação profissional?", a: "A instalação profissional garante um piso nivelado, maior durabilidade e costuma ter garantia." },
                { q: "Qual o melhor piso para quem tem pets?", a: "Pisos vinílicos (LVP) e porcelanatos são as opções mais resistentes a arranhões e umidade." }
            ],
            it: [
                { q: "Quanto materiale extra dovrei comprare?", a: "Lo standard è aggiungere il 10% alla metratura totale per sfridi, tagli e riparazioni future." },
                { q: "Conviene la posa professionale?", a: "La posa professionale assicura una superficie planare, duratura e include solitamente una garanzia sul lavoro." },
                { q: "Qual è il pavimento migliore per chi ha animali?", a: "Vinilici (LVP) e piastrelle sono le opzioni più resistenti ai graffi e ai liquidi." }
            ],
            nl: [
                { q: "Hoeveel extra vloermateriaal moet ik kopen?", a: "De standaard is om 10% extra te rekenen voor snijverlies, fouten en toekomstige reparaties." },
                { q: "Is professionele installatie de moeite waard?", a: "Dit garandeert een vlakke ondergrond en duurzaamheid; bovendien krijgt u vaak garantie op het werk." },
                { q: "Wat is de meest duurzame vloer voor huisdieren?", a: "PVC (LVP) en tegels zijn de beste opties vanwege hun kras- en vochtbestendigheid." }
            ],
            pl: [
                { q: "Ile zapasu materiału powinienem kupić?", a: "Standardem jest zakup o 10% więcej materiału niż wynosi powierzchnia na docięcia i odpady." },
                { q: "Czy profesjonalny montaż się opłaca?", a: "Gwarantuje on równą powierzchnię, trwałość i zazwyczaj obejmuje wieloletnią gwarancję." },
                { q: "Jaka podłoga jest najlepsza przy zwierzętach?", a: "Panele winylowe (LVP) i płytki są najbardziej odporne na zarysowania i wodę." }
            ],
            sv: [
                { q: "Hur mycket extra golv ska jag köpa för spill?", a: "Branschstandard är att lägga till 10 % på den totala ytan för spill, kapning och framtida reparationer." },
                { q: "Är det värt att anlita ett proffs för golvläggning?", a: "Proffs säkerställer ett plant underlag och lång hållbarhet, och arbetet kommer ofta med garanti." },
                { q: "Vilket golv är bäst för husdjur?", a: "Vinyl (LVP) och klinker är generellt de mest hållbara alternativen tack vare reptålighet och vattentålighet." }
            ],
            no: [
                { q: "Hvor mye ekstra gulv bør jeg kjøpe for svinn?", a: "Bransjestandarden er å legge til 10 % ekstra for svinn, kutt og fremtidige reparasjoner." },
                { q: "Lønner det seg med profesjonell gulvlegging?", a: "Profesjonell montering sikrer et flatt gulv og lang holdbarhet, og kommer ofte med garanti." },
                { q: "Hvilket gulv er mest holdbart for kjæledyr?", a: "Vinyl (LVP) og fliser er de beste valgene på grunn av ripe- og vannbestandighet." }
            ],
            da: [
                { q: "Hvor meget ekstra gulv skal jeg købe til spild?", a: "Branchestandarden er at lægge 10 % til det samlede areal til spild, tilskæringer og fremtidige reparationer." },
                { q: "Er det pengene værd at få lagt gulv professionelt ?", a: "Det sikrer en plan overflade og holdbarhed, og arbejdet er ofte dækket af en garanti." },
                { q: "Hvilket gulv er mest holdbart til kæledyr?", a: "Luksusvinyl (LVP) og fliser er generelt de mest holdbare løsninger pga. ridsefasthed og vandmodstand." }
            ],
            fi: [
                { q: "Kuinka paljon ylimääräistä materiaalia pitäisi ostaa?", a: "Laske 10 % hukkaa varten leikkauksiin ja tuleviin korjauksiin." },
                { q: "Kannattaako ammattimainen asennus?", a: "Ammattilainen takaa tasaisen pinnan ja kestävyyden; työllä on yleensä myös takuu." },
                { q: "Mikä lattia on paras lemmikeille?", a: "Vinyyli (LVP) ja laatta kestävät parhaiten naarmuja ja kosteutta." }
            ]
        },
        seo: {
            en: {
                synonyms: ["flooring cost estimator", "floor installation calculator", "hardwood floor calculator", "tile cost calculator"],
                useCases: ["Homeowners planning floor renovation", "Contractors estimating material needs", "Comparing flooring material costs"],
                relatedTerms: ["flooring installation cost", "hardwood flooring price", "laminate floor cost", "carpet installation"],
                relatedCalculators: ["roofing", "mortgage"]
            },
            es: {
                synonyms: ["calculadora de costos de suelos", "calculadora de instalación de suelos", "calculadora de suelos de madera", "calculadora de costos de baldosas"],
                useCases: ["Propietarios planeando renovación de suelos", "Contratistas estimando necesidades de material", "Comparación de costos de materiales de suelo"],
                relatedTerms: ["costo de instalación de suelo", "precio de suelo de madera", "costo de suelo laminado"]
            },
            de: {
                synonyms: ["Bodenbelag Kosten Rechner", "Parkett Kalkulator"],
                useCases: ["Renovierung planen", "Handwerker Angebote vergleichen"],
                relatedTerms: ["Parkett Kosten", "Laminat Preis", "Verlegekosten"]
            },
            fr: {
                synonyms: ["calculateur de coût de revêtement de sol", "simulateur d'installation de sol", "calculateur de parquet"],
                useCases: ["Propriétaires planifiant une rénovation", "Entrepreneurs estimant les besoins en matériaux", "Comparer les coûts des matériaux"],
                relatedTerms: ["coût pose de sol", "prix parquet massif", "prix sol stratifié"]
            },
            pt: {
                synonyms: ["calculadora de custo de pisos", "simulador de instalação de pisos", "calculadora de tacos e laminados"],
                useCases: ["Proprietários planejando renovação de pisos", "Empreiteiros estimando necessidades de material", "Comparar custos de materiais de piso"],
                relatedTerms: ["custo de instalação de piso", "preço de piso de madeira", "custo de piso laminado"]
            },
            it: {
                synonyms: ["calcolatore costo pavimenti", "simulatore posa pavimenti", "calcolo parquet e piastrelle"],
                useCases: ["Proprietari che pianificano la ristrutturazione dei pavimenti", "Appaltatori che stimano il fabbisogno di materiale", "Confronto dei costi dei materiali"],
                relatedTerms: ["costo posa pavimento", "prezzo parquet", "costo pavimento in laminato"]
            },
            nl: {
                synonyms: ["vloerkosten calculator", "vloerinstallatie simulator", "hardhouten vloer berekenen"],
                useCases: ["Huiseigenaren die vloerrenovatie plannen", "Aannemers die materiaalbehoeften schatten", "Vergelijken van materiaalkosten voor vloeren"],
                relatedTerms: ["installatiekosten vloer", "prijs hardhouten vloer", "kosten laminaatvloer"]
            },
            pl: {
                synonyms: ["kalkulator kosztów podłogi", "symulator montażu podłóg", "kalkulator paneli i płytek"],
                useCases: ["Właściciele domów planujący remont podłóg", "Wykonawcy szacujący zapotrzebowanie na materiał", "Porównywanie kosztów materiałów podłogowych"],
                relatedTerms: ["koszt montażu podłogi", "cena podłogi drewnianej", "koszt paneli podłogowych"]
            },
            sv: {
                synonyms: ["golvkostnad kalkylator", "golvläggning simulator", "kalkylator för trägolv"],
                useCases: ["Husägare som planerar golvrenovering", "Entreprenörer som uppskattar materialbehov", "Jämföra golvmaterialkostnader"],
                relatedTerms: ["golvläggningskostnad", "pris för trägolv", "laminatgolvskostnad"]
            },
            no: {
                synonyms: ["gulvkostnad kalkulator", "gulvlegging simulator", "kalkulator for tregulv"],
                useCases: ["Huseiere som planlegger gulvrenovering", "Entreprenører som anslår materialbehov", "Sammenligne gulvmaterialkostnader"],
                relatedTerms: ["gulvleggingskostnad", "pris for tregulv", "laminatgulvkostnad"]
            },
            da: {
                synonyms: ["gulvomkostning beregner", "gulvlægning simulator", "beregner til trægulve"],
                useCases: ["Boligejere der planlægger gulvrenovering", "Entreprenører der anslår materialebehov", "Sammenlign gulvmaterialeomkostninger"],
                relatedTerms: ["gulvlægningsomkostninger", "pris på trægulv", "laminatgulvomkostninger"]
            },
            fi: {
                synonyms: ["lattiakustannusarvio", "lattianasennuslaskuri", "puulattialaskuri"],
                useCases: ["Asunnon omistajat suunnittelemassa lattiaremonttia", "Urakoitsijat arvioimassa materiaalin tarvetta", "Lattiamateriaalien kustannusvertailu"],
                relatedTerms: ["lattian asennuskustannus", "puulattian hinta", "laminaattilattian kustannus"]
            }
        },
        config: {
            currency: { en: "USD", es: "EUR", de: "EUR", fr: "EUR", pt: "BRL", it: "EUR", nl: "EUR", pl: "PLN", sv: "SEK", no: "NOK", da: "DKK", fi: "EUR" },
            locale: { en: "en-US", es: "es-ES", de: "de-DE", fr: "fr-FR", pt: "pt-BR", it: "it-IT", nl: "nl-NL", pl: "pl-PL", sv: "sv-SE", no: "no-NO", da: "da-DK", fi: "fi-FI" },
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
        content: {
            en: `
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
            es: `
                <div class="prose">
                    <h3>Costo de Reemplazo de Techo en 2026</h3>
                    <p>Un techo nuevo es una gran inversión. Esta calculadora considera la <strong>inclinación</strong> y el <strong>margen de desperdicio</strong> para darte una estimación precisa.</p>
                    <ul>
                        <li><strong>Tejas Asfálticas:</strong> 350-500 € por cuadrado (9.3 m²).</li>
                        <li><strong>Techos de Metal:</strong> 600-1.200 € por cuadrado.</li>
                        <li><strong>Teja/Pizarra:</strong> 1.000-2.500 € por cuadrado.</li>
                    </ul>
                    <p>Los techos más inclinados requieren más material y mano de obra.</p>
                </div>
            `,
            de: `
                <div class="prose">
                    <h3>Kosten für Dachsanierung im Jahr 2026</h3>
                    <p>Ein neues Dach ist eine große Investition. Dieser Rechner berücksichtigt die <strong>Dachneigung</strong> und den <strong>Verschnitt</strong> für eine genaue Kostenschätzung.</p>
                    <ul>
                        <li><strong>Bitumenschindeln:</strong> 350-500 € pro Quadrat (ca. 10 m²).</li>
                        <li><strong>Metalldach:</strong> 600-1.200 € pro Quadrat.</li>
                        <li><strong>Ziegel/Schiefer:</strong> 1.000-2.500 € pro Quadrat.</li>
                    </ul>
                    <p>Steilere Dächer erfordern mehr Material und Arbeitszeit.</p>
                </div>
            `,
            fr: `
                <div class="prose">
                    <h3>Coût de remplacement de toiture en 2026</h3>
                    <p>Une nouvelle toiture est un investissement majeur. Ce calculateur prend en compte la <strong>pente du toit</strong> et la <strong>marge de perte</strong>.</p>
                    <ul>
                        <li><strong>Bardeaux d'asphalte :</strong> 350-500 € par carré (approx. 9,3 m²).</li>
                        <li><strong>Toiture métallique :</strong> 600-1 200 € par carré.</li>
                        <li><strong>Tuile / Ardoise :</strong> 1 000-2 500 € par carré.</li>
                    </ul>
                    <p>Les toits plus pentus nécessitent plus de matériaux et de main-d'œuvre.</p>
                </div>
            `,
            pt: `
                <div class="prose">
                    <h3>Custo de substituição de telhado em 2026</h3>
                    <p>Um telhado novo é um grande investimento. Esta calculadora considera a <strong>inclinação do telhado</strong> e a <strong>margem de desperdício</strong>.</p>
                    <ul>
                        <li><strong>Telhas Asfálticas:</strong> R$ 350-500 por quadrado (aprox. 9,3 m²).</li>
                        <li><strong>Telhado de Metal:</strong> R$ 600-1.200 por quadrado.</li>
                        <li><strong>Telha/Vantagem:</strong> R$ 1.000-2.500 por quadrado.</li>
                    </ul>
                    <p>Telhados mais inclinados exigem mais material e mão de obra.</p>
                </div>
            `,
            it: `
                <div class="prose">
                    <h3>Costo rifacimento tetto nel 2026</h3>
                    <p>Un nuovo tetto è un investimento importante. Questo calcolatore considera la <strong>pendenza</strong> e lo <strong>sfrido dei materiali</strong>.</p>
                    <ul>
                        <li><strong>Tegole canadesi:</strong> 350-500 € per quadrato (circa 9,3 m²).</li>
                        <li><strong>Tetto in metallo:</strong> 600-1.200 € per quadrato.</li>
                        <li><strong>Tegole/Ardesia:</strong> 1.000-2.500 € per quadrato.</li>
                    </ul>
                    <p>I tetti più ripidi richiedono più materiale e manodopera.</p>
                </div>
            `,
            nl: `
                <div class="prose">
                    <h3>Kosten voor dakvervanging in 2026</h3>
                    <p>Een nieuw dak is een grote investering. Deze calculator houdt rekening met de <strong>dakhelling</strong> en <strong>materiaalverlies</strong>.</p>
                    <ul>
                        <li><strong>Bitumen shingles:</strong> € 350-500 per square (ca. 9,3 m²).</li>
                        <li><strong>Metalen dakbedekking:</strong> € 600-1.200 per square.</li>
                        <li><strong>Dakpannen/Leisteen:</strong> € 1.000-2.500 per square.</li>
                    </ul>
                    <p>Steilere daken vereisen meer materiaal en arbeidsuren.</p>
                </div>
            `,
            pl: `
                <div class="prose">
                    <h3>Koszt wymiany dachu w 2026 roku</h3>
                    <p>Nowy dach to wielka inwestycja. Ten kalkulator uwzględnia <strong>nachylenie dachu</strong> oraz <strong>naddatek na odpady</strong>.</p>
                    <ul>
                        <li><strong>Gont bitumiczny:</strong> 350-500 zł za square (ok. 9,3 m²).</li>
                        <li><strong>Dach metalowy:</strong> 600-1 200 zł za square.</li>
                        <li><strong>Dachówka/Łupek:</strong> 1 000-2 500 zł za square.</li>
                    </ul>
                    <p>Strome dachy wymagają więcej materiału i czasu pracy.</p>
                </div>
            `,
            sv: `
                <div class="prose">
                    <h3>Kostnad för takbyte 2026</h3>
                    <p>Ett nytt tak är en stor investering. Denna kalkylator tar hänsyn till <strong>taklutning</strong> och <strong>spillmängd</strong>.</p>
                    <ul>
                        <li><strong>Asfaltschiffer:</strong> 3 500-5 000 kr per segment (ca 9,3 m²).</li>
                        <li><strong>Plåttak:</strong> 6 000-12 000 kr per segment.</li>
                        <li><strong>Tegel/Skiffer:</strong> 10 000-25 000 kr per segment.</li>
                    </ul>
                    <p>Brantare tak kräver mer material och mer arbete.</p>
                </div>
            `,
            no: `
                <div class="prose">
                    <h3>Kostnad for takfornyelse i 2026</h3>
                    <p>Et nytt tak er en stor investering. Denne kalkulatoren tar hensyn til <strong>takvinkel</strong> og <strong>svinn</strong>.</p>
                    <ul>
                        <li><strong>Asfalttakshingel:</strong> 3 500-5 000 kr per felt (ca. 9,3 m²).</li>
                        <li><strong>Metalltak:</strong> 6 000-12 000 kr per felt.</li>
                        <li><strong>Takstein/Skifer:</strong> 10 000-25 000 kr per felt.</li>
                    </ul>
                    <p>Brattere tak krever mer materiale og arbeidstid.</p>
                </div>
            `,
            da: `
                <div class="prose">
                    <h3>Omkostninger til nyt tag i 2026</h3>
                    <p>Et nyt tag er en stor investering. Denne beregner tager højde for <strong>taghældning</strong> og <strong>spild</strong>.</p>
                    <ul>
                        <li><strong>Tagpap/Shingles:</strong> 3.500-5.000 kr. pr. felt (ca. 9,3 m²).</li>
                        <li><strong>Metaltag:</strong> 6.000-12.000 kr. pr. felt.</li>
                        <li><strong>Tegl/Skifer:</strong> 10.000-25.000 kr. pr. felt.</li>
                    </ul>
                    <p>Stejlere tage kræver mere materiale og flere arbejdstimer.</p>
                </div>
            `,
            fi: `
                <div class="prose">
                    <h3>Katon uusimisen hinta vuonna 2026</h3>
                    <p>Uusi katto on suuri investointi. Tämä laskuri huomioi <strong>katon kaltevuuden</strong> ja <strong>materiaalin hukan</strong>.</p>
                    <ul>
                        <li><strong>Bitumikattolaatta:</strong> 350–500 € / neliö (n. 9,3 m²).</li>
                        <li><strong>Peltikatto:</strong> 600–1 200 € / neliö.</li>
                        <li><strong>Tiili/Liuskekivi:</strong> 1 000–2 500 € / neliö.</li>
                    </ul>
                    <p>Jyrkemmät katot vaativat enemmän materiaalia ja työtunteja.</p>
                </div>
            `
        },
        faqs: {
            en: [
                { q: "What is a 'square' in roofing?", a: "A roofing square is an area of 100 square feet (10' x 10'). It's the standard unit of measurement for roofing materials." },
                { q: "How does roof pitch affect cost?", a: "Steeper roofs (higher pitch) increase costs because they require more safety equipment, more labor time, and slightly more material surface area." },
                { q: "Can I install a new roof over old shingles?", a: "While possible in some areas (reroofing), most professionals recommend a full 'tear-off' to inspect the underlying wood deck for rot or damage." }
            ],
            es: [
                { q: "¿Qué es un 'cuadrado' en techado?", a: "Un cuadrado equivale a 100 pies cuadrados (aprox. 9,3 m²). Es la unidad estándar para materiales." },
                { q: "¿Cómo afecta la inclinación al costo?", a: "Los techos más inclinados aumentan el costo debido a la seguridad necesaria, tiempo de trabajo y superficie." },
                { q: "¿Puedo poner tejas nuevas sobre las viejas?", a: "Aunque es posible, se recomienda quitar todo para revisar si hay madera podrida debajo." }
            ],
            de: [
                { q: "Was ist ein 'Quadrat' beim Dachdecken?", a: "Ein Quadrat entspricht ca. 9,3 m² (100 sq ft). Es ist die Standardeinheit für Dachmaterialien." },
                { q: "Wie beeinflusst die Dachneigung die Kosten?", a: "Steilere Dächer erhöhen die Kosten wegen höherer Sicherheitsanforderungen und mehr Arbeitsaufwand." },
                { q: "Kann ich neue Ziegel über alte legen?", a: "In der Regel wird empfohlen, das alte Dach komplett zu entfernen, um den Untergrund auf Schäden zu prüfen." }
            ],
            fr: [
                { q: "Qu'est-ce qu'un 'carré' en toiture ?", a: "Un carré représente 100 pieds carrés (environ 9,3 m²). C'est l'unité de mesure standard pour les matériaux de toiture." },
                { q: "Comment la pente affecte-t-elle le prix ?", a: "Les pentes raides augmentent les coûts car elles demandent plus de sécurité et de temps de pose." },
                { q: "Peut-on poser de nouveaux bardeaux sur les anciens ?", a: "Bien que parfois autorisé, il est recommandé de tout retirer pour inspecter la charpente." }
            ],
            pt: [
                { q: "O que é um 'quadrado' em telhados?", a: "Um quadrado de telhado é uma área de 100 pés quadrados (aprox. 9,3 m²). É a unidade padrão de medida." },
                { q: "Como a inclinação afeta o custo?", a: "Telhados mais íngremes aumentam os custos devido à segurança, tempo e área de superfície extra." },
                { q: "Posso instalar um telhado novo sobre o antigo?", a: "Embora possível em alguns casos, profissionais recomendam a remoção completa para checar a estrutura." }
            ],
            it: [
                { q: "Cos'è un 'quadrato' in edilizia acrobatica/tetto?", a: "Un quadrato corrisponde a 100 piedi quadrati (circa 9,3 m²). È l'unità standard per i materiali." },
                { q: "Come influisce la pendenza sul costo?", a: "Tetti più ripidi aumentano i costi per via della sicurezza necessaria e della maggiore fatica." },
                { q: "Posso posare il nuovo tetto sopra il vecchio?", a: "Si raccomanda quasi sempre la rimozione totale per ispezionare se ci sono infiltrazioni o legname marcio." }
            ],
            nl: [
                { q: "Wat is een 'square' bij dakbedekking?", a: "Een 'square' is 100 vierkante voet (ca. 9,3 m²). Dit is de standaardmaat voor dakmaterialen." },
                { q: "Hoe beïnvloedt de dakhelling de kosten?", a: "Steilere daken verhogen de kosten vanwege extra veiligheidsmaatregelen en langere arbeidstijd." },
                { q: "Kan ik een nieuw dak over het oude leggen?", a: "Hoewel dit soms kan, raden experts aan het oude dak te verwijderen om de onderliggende constructie te inspecteren." }
            ],
            pl: [
                { q: "Co to jest 'square' w dekarstwie?", a: "To jednostka miary odpowiadająca 100 stopom kwadratowym (ok. 9,3 m²)." },
                { q: "Jak nachylenie dachu wpływa na koszt?", a: "Strome dachy są droższe ze względu na trudniejszy montaż, bezpieczeństwo i większą powierzchnię." },
                { q: "Czy można kłaść nowy dach na stary?", a: "Zazwyczaj zaleca się zerwanie starego pokrycia, aby sprawdzić stan więźby dachowej." }
            ],
            sv: [
                { q: "Vad är ett 'segment' (square) inom takläggning?", a: "Ett segment motsvarar 100 kvadratfot (ca 9,3 m²) och är standardmåttet för takmaterial." },
                { q: "Hur påverkar taklutningen kostnaden?", a: "Brantare tak ökar kostnaderna eftersom de kräver mer säkerhetsutrustning och tar längre tid att lägga." },
                { q: "Kan man lägga nytt tak ovanpå det gamla?", a: "De flesta proffs rekommenderar att man tar bort det gamla taket för att kunna inspektera underlaget." }
            ],
            no: [
                { q: "Hva er et 'felt' (square) innen taklegging?", a: "Et felt tilsvarer 100 kvadratfot (ca. 9,3 m²) og er standardmålet for takmaterialer." },
                { q: "Hvordan påvirker takvinkelen kostnaden?", a: "Brattere tak øker kostnadene fordi det krever mer sikring og tar lengre tid å legge." },
                { q: "Kan jeg legge nytt tak over det gamle?", a: "De fleste fagfolk anbefaler å fjerne det gamle taket helt for å sjekke om det er råte i undertaket." }
            ],
            da: [
                { q: "Hvad er et 'felt' (square) inden for taglægning?", a: "Et felt svarer til 100 kvadratfod (ca. 9,3 m²) og er standardmålet for tagmaterialer." },
                { q: "Hvordan påvirker taghældningen prisen?", a: "Stejlere tage koster mere, da de kræver mere sikkerhedsudstyr og tager længere tid at lægge." },
                { q: "Kan man lægge nyt tag oven på det gamle?", a: "De fleste anbefaler at fjerne det gamle tag helt for at tjekke for råd eller skader i den underliggende konstruktion." }
            ],
            fi: [
                { q: "Mikä on 'neliö' (square) kattomateriaaleissa?", a: "Se vastaa 100 neliöjalkaa (n. 9,3 m²) ja on materiaalien standardimitta." },
                { q: "Miten katon kaltevuus vaikuttaa hintaan?", a: "Jyrkemmät katot lisäävät kustannuksia turvatoimien ja pidemmän työajan vuoksi." },
                { q: "Voiko uuden katon asentaa vanhan päälle?", a: "Vaikka se on mahdollista, suosittelemme vanhan poistamista, jotta nähdään onko alla lahovaurioita." }
            ]
        },
        seo: {
            en: {
                synonyms: ["roof replacement calculator", "shingle calculator", "roofing cost estimator", "roof repair calculator"],
                useCases: ["Homeowners planning roof replacement", "Insurance adjusters estimating claims", "Roofing contractors bidding jobs"],
                relatedTerms: ["roof replacement cost", "shingles per square", "roof pitch", "asphalt shingle cost"],
                relatedCalculators: ["flooring", "solar"]
            },
            es: {
                synonyms: ["calculadora de reemplazo de techo", "calculadora de tejas", "estimador de costos de techado", "calculadora de reparación de techo"],
                useCases: ["Propietarios planeando reemplazo de techo", "Ajustadores de seguros estimando reclamos", "Contratistas de techado licitando trabajos"],
                relatedTerms: ["costo de reemplazo de techo", "tejas por cuadrado", "inclinación del techo"]
            },
            de: {
                synonyms: ["Dachsanierung Rechner", "Dachziegel Kalkulator"],
                useCases: ["Dachsanierung planen", "Dachdecker Angebote einholen"],
                relatedTerms: ["Dachziegel Kosten", "Dachneigung", "Dachsanierung Preis"]
            },
            fr: {
                synonyms: ["calculateur de réfection de toiture", "simulateur de tuiles", "calcul de coût de toiture"],
                useCases: ["Propriétaires planifiant une réfection de toiture", "Experts en assurance estimant les sinistres", "Entrepreneurs en couverture soumissionnant"],
                relatedTerms: ["coût remplacement toiture", "tuiles par carré", "pente du toit"]
            },
            pt: {
                synonyms: ["calculadora de substituição de telhado", "simulador de telhas", "estimador de custos de telhado"],
                useCases: ["Proprietários planejando substituição de telhado", "Peritos de seguros estimando sinistros", "Empreiteiros de telhado fazendo orçamentos"],
                relatedTerms: ["custo de substituição de telhado", "telhas por metro quadrado", "inclinação do telhado"]
            },
            it: {
                synonyms: ["calcolatore rifacimento tetto", "simulatore tegole", "stima costi copertura"],
                useCases: ["Proprietari che pianificano il rifacimento del tetto", "Periti assicurativi che stimano i danni", "Appaltatori di tetti che presentano offerte"],
                relatedTerms: ["costo sostituzione tetto", "tegole per quadrato", "pendenza del tetto"]
            },
            nl: {
                synonyms: ["dakvervanging calculator", "dakpannen simulator", "dakkosten schatten"],
                useCases: ["Huiseigenaren die dakvervanging plannen", "Verzekeringsexperts die claims schatten", "Dakdekkers die klussen offreren"],
                relatedTerms: ["kosten dakvervanging", "dakpannen per vierkante meter", "dakhelling"]
            },
            pl: {
                synonyms: ["kalkulator wymiany dachu", "symulator dachówek", "szacowanie kosztów dekarstwa"],
                useCases: ["Właściciele domów planujący wymianę dachu", "Likwidatorzy szkód szacujący roszczenia", "Dekarze składający oferty"],
                relatedTerms: ["koszt wymiany dachu", "liczba dachówek", "nachylenie dachu"]
            },
            sv: {
                synonyms: ["takbyte kalkylator", "takpanneberäknare", "takkostnad kalkylator"],
                useCases: ["Husägare som planerar takbyte", "Försäkringsjusterare som uppskattar skador", "Takläggare som lämnar offerter"],
                relatedTerms: ["takbyteskostnad", "takpannor per enhet", "taklutning"]
            },
            no: {
                synonyms: ["takfornyelse kalkulator", "takstein kalkulator", "takkostnad kalkulator"],
                useCases: ["Huseiere som planlegger takfornyelse", "Forsikringsjusterare som anslår skader", "Taktekkere som gir anbud"],
                relatedTerms: ["takfornyelse kostnad", "takstein per enhet", "takvinkel"]
            },
            da: {
                synonyms: ["tagudskiftning beregner", "tagsten beregner", "tagomkostning simulator"],
                useCases: ["Boligejere der planlægger tagudskiftning", "Forsikringstaksatorer der anslår krav", "Tagdækkere der byder på opgaver"],
                relatedTerms: ["omkostninger tagudskiftning", "tagsten pr. enhed", "taghældning"]
            },
            fi: {
                synonyms: ["katon uusimislaskuri", "kattotiililaskuri", "kattokustannusarvio"],
                useCases: ["Asunnon omistajat suunnittelemassa katon uusimista", "Vakuutustarkastajat arvioimassa vahinkoja", "Kattourakoitsijat tarjoamassa töitä"],
                relatedTerms: ["katon uusimiskustannus", "tiiliä per neliö", "katon kaltevuus"]
            }
        },
        config: {
            currency: { en: "USD", es: "EUR", de: "EUR", fr: "EUR", pt: "BRL", it: "EUR", nl: "EUR", pl: "PLN", sv: "SEK", no: "NOK", da: "DKK", fi: "EUR" },
            locale: { en: "en-US", es: "es-ES", de: "de-DE", fr: "fr-FR", pt: "pt-BR", it: "it-IT", nl: "nl-NL", pl: "pl-PL", sv: "sv-SE", no: "no-NO", da: "da-DK", fi: "fi-FI" },
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
};
