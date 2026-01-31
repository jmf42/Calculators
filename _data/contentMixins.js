
const mixins = {
    mortgage: {
        en: {
            intros: [
                "Buying a home in {{location}} is a big step. With average property taxes around {{tax_rate}}% and insurance costs of roughly {{currency_symbol}}{{insurance_cost}}, it's vital to know your true monthly payment.",
                "Navigating the {{location}} market? Our {{year}} Mortgage Calculator estimates typical costs, including the {{tax_rate}}% tax rate common in this area.",
                "Planning to buy in {{location}}? Don't let the {{tax_rate}}% property tax surprise you. Calculate your PITI (Principal, Interest, Taxes, Insurance) instantly."
            ],
            marketContext: [
                "In {{location}}, the {{tax_rate}}% property tax rate can significantly impact affordability. Lenders will also look at the {{currency_symbol}}{{insurance_cost}} insurance average.",
                "Understanding {{location}}'s specific costs like the {{tax_rate}}% tax rate helps you set a realistic budget compared to national averages."
            ],
            closers: [
                "Ready for {{location}}? Use these estimates, including the {{currency_symbol}}{{insurance_cost}} insurance factor, to talk confidently with lenders.",
                "Smart buyers in {{location}} plan for total costs, including the ~{{tax_rate}}% tax. We hope this tool helps you find your dream home."
            ]
        },
        es: {
            intros: [
                "Comprar casa en {{location}} es un gran paso. Con impuestos prediales del {{tax_rate}}% y seguros de {{currency_symbol}}{{insurance_cost}}, es vital conocer tu pago real.",
                "¿Navegando el mercado de {{location}}? Nuestra Calculadora {{year}} estima costos típicos, incluyendo la tasa de impuestos del {{tax_rate}}%.",
                "¿Planeas comprar en {{location}}? Que el impuesto del {{tax_rate}}% no te sorprenda. Calcula tu pago mensual total al instante."
            ],
            marketContext: [
                "En {{location}}, la tasa de impuestos del {{tax_rate}}% impacta tu capacidad de compra. Considera también el seguro promedio de {{currency_symbol}}{{insurance_cost}}.",
                "Entender los costos de {{location}}, como el {{tax_rate}}% de impuestos, te ayuda a crear un presupuesto realista."
            ],
            closers: [
                "¿Listo para {{location}}? Usa estos estimados, incluyendo el factor de seguro de {{currency_symbol}}{{insurance_cost}}, para negociar con prestamistas.",
                "Compradores inteligentes en {{location}} planean con costos totales. Esperamos que esta herramienta te ayude."
            ]
        },
        de: {
            intros: [
                "Ein Hauskauf in {{location}} ist ein großer Schritt. Mit Grundsteuern um {{tax_rate}}% und Versicherungskosten von ca. {{insurance_cost}}{{currency_symbol}}, ist Klarheit wichtig.",
                "Im Immobilienmarkt von {{location}} unterwegs? Unser Rechner {{year}} schätzt typische Kosten, inklusive der {{tax_rate}}% Steuer.",
                "Planen Sie einen Kauf in {{location}}? Lassen Sie sich nicht von der {{tax_rate}}% Steuer überraschen. Berechnen Sie Ihre monatliche Rate sofort."
            ],
            marketContext: [
                "In {{location}} kann die Steuer von {{tax_rate}}% die Bezahlbarkeit beeinflussen. Banken achten auch auf die {{insurance_cost}}{{currency_symbol}} Versicherung.",
                "Die spezifischen Kosten in {{location}} wie {{tax_rate}}% Steuer zu verstehen, hilft bei der realistischen Budgetplanung."
            ],
            closers: [
                "Bereit für {{location}}? Nutzen Sie diese Schätzungen inklusive {{insurance_cost}}{{currency_symbol}} Versicherung für Gespräche mit Banken.",
                "Kluge Käufer in {{location}} planen mit Gesamtkosten. Wir hoffen, dieses Tool hilft Ihnen."
            ]
        },
        fr: {
            intros: [
                "Acheter à {{location}} est une étape majeure. Avec des taxes foncières d'environ {{tax_rate}}% et une assurance de {{insurance_cost}}{{currency_symbol}}, il faut connaître son vrai paiement.",
                "Vous explorez le marché de {{location}} ? Notre Calculateur {{year}} estime les coûts, incluant le taux de taxe de {{tax_rate}}%.",
                "Un projet à {{location}} ? Ne laissez pas la taxe de {{tax_rate}}% vous surprendre. Calculez votre mensualité totale instantanément."
            ],
            marketContext: [
                "À {{location}}, le taux de taxe de {{tax_rate}}% impacte l'accessibilité. Les banques regardent aussi l'assurance moyenne de {{insurance_cost}}{{currency_symbol}}.",
                "Comprendre les coûts de {{location}} comme les {{tax_rate}}% de taxes aide à fixer un budget réaliste."
            ],
            closers: [
                "Prêt pour {{location}} ? Utilisez ces estimations avec l'assurance de {{insurance_cost}}{{currency_symbol}} pour discuter avec les prêteurs.",
                "Les acheteurs avisés à {{location}} prévoient tout. Espérons que cet outil vous aide."
            ]
        },
        pt: {
            intros: [
                "Comprar casa em {{location}} é um grande passo. Com impostos de {{tax_rate}}% e seguro de {{currency_symbol}}{{insurance_cost}}, saiba seu pagamento real.",
                "Explorando o mercado de {{location}}? Nossa Calculadora {{year}} estima custos, incluindo a taxa de imposto de {{tax_rate}}%.",
                "Vai comprar em {{location}}? Não deixe o imposto de {{tax_rate}}% te surpreender. Calcule sua parcela total agora."
            ],
            marketContext: [
                "Em {{location}}, a taxa de {{tax_rate}}% afeta o financiamento. Considere também o seguro médio de {{currency_symbol}}{{insurance_cost}}.",
                "Entender custos de {{location}} como {{tax_rate}}% de imposto ajuda a criar um orçamento realista."
            ],
            closers: [
                "Pronto para {{location}}? Use estas estimativas com seguro de {{currency_symbol}}{{insurance_cost}} para falar com bancos.",
                "Compradores em {{location}} planejam custos totais. Esperamos que esta ferramenta ajude."
            ]
        },
        it: {
            intros: [
                "Comprare casa a {{location}} è un grande passo. Con tasse del {{tax_rate}}% e assicurazione di {{currency_symbol}}{{insurance_cost}}, calcola la tua rata vera.",
                "Nel mercato immobiliare di {{location}}? Il nostro Calcolatore {{year}} stima i costi, inclusa l'aliquota del {{tax_rate}}%.",
                "Pensi di comprare a {{location}}? Non farti sorprendere dal {{tax_rate}}% di tasse. Calcola subito la tua rata mensile."
            ],
            marketContext: [
                "A {{location}}, il tasso del {{tax_rate}}% incide sui costi. Le banche considerano anche i {{currency_symbol}}{{insurance_cost}} di assicurazione.",
                "Capire i costi di {{location}} come il {{tax_rate}}% di tasse aiuta a fare un budget realistico."
            ],
            closers: [
                "Pronto per {{location}}? Usa queste stime con i {{currency_symbol}}{{insurance_cost}} di assicurazione per parlare con i finanziatori.",
                "Chi compra a {{location}} pianifica tutto. Speriamo che questo strumento ti sia utile."
            ]
        },
        nl: {
            intros: [
                "Een huis kopen in {{location}} is een grote stap. Met belastingen rond {{tax_rate}}% en verzekering van {{currency_symbol}}{{insurance_cost}} is inzicht cruciaal.",
                "Op de markt in {{location}}? Onze Calculator {{year}} schat kosten, inclusief het {{tax_rate}}% belastingtarief.",
                "Kopen in {{location}}? Laat u niet verrassen door {{tax_rate}}% belasting. Bereken direct uw maandlasten."
            ],
            marketContext: [
                "In {{location}} beïnvloedt de {{tax_rate}}% belasting de betaalbaarheid. Banken kijken ook naar de {{currency_symbol}}{{insurance_cost}} verzekering.",
                "Inzicht in kosten in {{location}} zoals {{tax_rate}}% belasting helpt bij een realistisch budget."
            ],
            closers: [
                "Klaar voor {{location}}? Gebruik deze cijfers inclusief {{currency_symbol}}{{insurance_cost}} verzekering voor gesprekken met kredietverstrekkers.",
                "Slimme kopers in {{location}} plannen alles. We hopen dat deze tool helpt."
            ]
        },
        pl: {
            intros: [
                "Kupno domu w {{location}} to duży krok. Z podatkami od nieruchomości około {{tax_rate}}% i kosztami ubezpieczenia około {{currency_symbol}}{{insurance_cost}}, ważne jest poznanie rzeczywistej raty.",
                "Szukasz na rynku {{location}}? Nasz Kalkulator {{year}} szacuje typowe koszty, w tym stawkę podatkową {{tax_rate}}%.",
                "Planujesz kupić w {{location}}? Nie daj się zaskoczyć {{tax_rate}}% podatkiem. Oblicz całkowitą ratę natychmiast."
            ],
            marketContext: [
                "W {{location}} stawka podatkowa {{tax_rate}}% może znacząco wpłynąć na dostępność. Banki zwracają też uwagę na średnie ubezpieczenie {{currency_symbol}}{{insurance_cost}}.",
                "Zrozumienie kosztów w {{location}}, takich jak {{tax_rate}}% podatku, pomaga ustalić realistyczny budżet."
            ],
            closers: [
                "Gotowy na {{location}}? Użyj tych szacunków, w tym czynnika ubezpieczenia {{currency_symbol}}{{insurance_cost}}, w rozmowach z kredytodawcami.",
                "Mądrzy kupujący w {{location}} planują wszystkie koszty. Mamy nadzieję, że to narzędzie pomoże."
            ]
        },
        sv: {
            intros: [
                "Att köpa bostad i {{location}} är ett stort steg. Med fastighetsskatter runt {{tax_rate}}% och försäkringskostnader på cirka {{currency_symbol}}{{insurance_cost}} är det viktigt att veta din verkliga månadskostnad.",
                "Navigerar du på {{location}}-marknaden? Vår kalkylator {{year}} uppskattar typiska kostnader, inklusive {{tax_rate}}% skattesats.",
                "Planerar du att köpa i {{location}}? Bli inte överraskad av {{tax_rate}}% fastighetsskatt. Beräkna din totala månadskostnad direkt."
            ],
            marketContext: [
                "I {{location}} kan skattesatsen på {{tax_rate}}% påverka överkomligheten betydligt. Banker tittar också på den genomsnittliga försäkringen på {{currency_symbol}}{{insurance_cost}}.",
                "Att förstå {{location}}s specifika kostnader som {{tax_rate}}% skatt hjälper dig att sätta en realistisk budget."
            ],
            closers: [
                "Redo för {{location}}? Använd dessa uppskattningar, inklusive försäkringsfaktorn {{currency_symbol}}{{insurance_cost}}, för samtal med långivare.",
                "Smarta köpare i {{location}} planerar för totala kostnader. Vi hoppas att detta verktyg hjälper dig."
            ]
        },
        no: {
            intros: [
                "Å kjøpe bolig i {{location}} er et stort skritt. Med eiendomsskatt rundt {{tax_rate}}% og forsikringskostnader på ca. {{currency_symbol}}{{insurance_cost}}, er det viktig å vite din faktiske månedlige betaling.",
                "Navigerer du i {{location}}-markedet? Vår kalkulator {{year}} estimerer typiske kostnader, inkludert {{tax_rate}}% skattesats.",
                "Planlegger du å kjøpe i {{location}}? Ikke bli overrasket av {{tax_rate}}% eiendomsskatt. Beregn din totale månedlige betaling umiddelbart."
            ],
            marketContext: [
                "I {{location}} kan skattesatsen på {{tax_rate}}% påvirke overkommeligheten betydelig. Banker ser også på gjennomsnittlig forsikring på {{currency_symbol}}{{insurance_cost}}.",
                "Å forstå {{location}}s spesifikke kostnader som {{tax_rate}}% skatt hjelper deg med å sette et realistisk budsjett."
            ],
            closers: [
                "Klar for {{location}}? Bruk disse estimatene, inkludert forsikringsfaktoren {{currency_symbol}}{{insurance_cost}}, i samtaler med långivere.",
                "Smarte kjøpere i {{location}} planlegger for totale kostnader. Vi håper dette verktøyet hjelper deg."
            ]
        },
        da: {
            intros: [
                "At købe bolig i {{location}} er et stort skridt. Med ejendomsskatter omkring {{tax_rate}}% og forsikringsomkostninger på ca. {{currency_symbol}}{{insurance_cost}}, er det vigtigt at kende din reelle månedlige ydelse.",
                "Navigerer du på {{location}}-markedet? Vores beregner {{year}} estimerer typiske omkostninger, inklusive {{tax_rate}}% skattesats.",
                "Planlægger du at købe i {{location}}? Bliv ikke overrasket af {{tax_rate}}% ejendomsskat. Beregn din samlede månedlige ydelse med det samme."
            ],
            marketContext: [
                "I {{location}} kan skattesatsen på {{tax_rate}}% påvirke overkommeligheden betydeligt. Banker ser også på gennemsnitsforsikringen på {{currency_symbol}}{{insurance_cost}}.",
                "At forstå {{location}}s specifikke omkostninger som {{tax_rate}}% skat hjælper dig med at sætte et realistisk budget."
            ],
            closers: [
                "Klar til {{location}}? Brug disse estimater, inklusive forsikringsfaktoren {{currency_symbol}}{{insurance_cost}}, i samtaler med långivere.",
                "Kloge købere i {{location}} planlægger for samlede omkostninger. Vi håber, dette værktøj hjælper dig."
            ]
        },
        fi: {
            intros: [
                "Asunnon ostaminen paikassa {{location}} on iso askel. Kiinteistöverojen ollessa noin {{tax_rate}}% ja vakuutuskustannusten noin {{currency_symbol}}{{insurance_cost}}, on tärkeää tietää todellinen kuukausimaksusi.",
                "Navigoidko {{location}}-markkinoilla? Laskurimme {{year}} arvioi tyypilliset kustannukset, mukaan lukien {{tax_rate}}% verokanta.",
                "Suunnitteletko ostoa paikassa {{location}}? Älä anna {{tax_rate}}% kiinteistöveron yllättää. Laske kokonaiskuukausimaksusi välittömästi."
            ],
            marketContext: [
                "Paikassa {{location}} {{tax_rate}}% verokanta voi vaikuttaa merkittävästi saatavuuteen. Pankit tarkastelevat myös keskimääräistä vakuutusta {{currency_symbol}}{{insurance_cost}}.",
                "{{location}}n erityisten kustannusten, kuten {{tax_rate}}% veron, ymmärtäminen auttaa asettamaan realistisen budjetin."
            ],
            closers: [
                "Valmis kohteeseen {{location}}? Käytä näitä arvioita, mukaan lukien vakuutustekijä {{currency_symbol}}{{insurance_cost}}, keskusteluissa lainanantajien kanssa.",
                "Älykkäät ostajat paikassa {{location}} suunnittelevat kokonaiskustannukset. Toivomme, että tämä työkalu auttaa sinua."
            ]
        }
    },
    loan: {
        en: {
            intros: [
                "Taking a loan in {{location}}? Accurate estimates including local rates are key.",
                "Calculate your payments for {{location}} borrowing needs instantly."
            ],
            marketContext: [
                "Rates in {{location}} vary. Use this estimate to shop around confidently.",
                "Knowing your total cost in {{location}} empowers your financial decisions."
            ],
            closers: [
                "Plan your finances in {{location}} with these precise figures.",
                "We hope this helps you secure the best loan in {{location}}."
            ]
        },
        es: {
            intros: [
                "¿Pidiendo un préstamo en {{location}}? Estimaciones precisas son clave.",
                "Calcula tus pagos para necesidades de préstamo en {{location}} al instante."
            ],
            marketContext: [
                "Las tasas en {{location}} varían. Usa este estimado para comparar.",
                "Conocer tu costo total en {{location}} empodera tus decisiones."
            ],
            closers: [
                "Planea tus finanzas en {{location}} con estas cifras precisas.",
                "Esperamos que esto te ayude a conseguir el mejor préstamo en {{location}}."
            ]
        },
        de: {
            intros: [
                "Einen Kredit in {{location}} aufnehmen? Präzise Schätzungen inklusive lokaler Zinsen sind der Schlüssel.",
                "Berechnen Sie Ihre Raten für Kreditbedarf in {{location}} sofort."
            ],
            marketContext: [
                "Zinssätze in {{location}} variieren. Nutzen Sie diese Schätzung zum Vergleichen.",
                "Die Kenntnis Ihrer Gesamtkosten in {{location}} stärkt Ihre Entscheidungen."
            ],
            closers: [
                "Planen Sie Ihre Finanzen in {{location}} mit diesen präzisen Zahlen.",
                "Wir hoffen, dies hilft Ihnen, den besten Kredit in {{location}} zu sichern."
            ]
        },
        fr: {
            intros: [
                "Prendre un prêt à {{location}} ? Des estimations précises sont essentielles.",
                "Calculez vos mensualités pour vos besoins d'emprunt à {{location}} instantanément."
            ],
            marketContext: [
                "Les taux à {{location}} varient. Utilisez cette estimation pour comparer.",
                "Connaître votre coût total à {{location}} renforce vos décisions financières."
            ],
            closers: [
                "Planifiez vos finances à {{location}} avec ces chiffres précis.",
                "Nous espérons que cela vous aidera à obtenir le meilleur prêt à {{location}}."
            ]
        },
        pt: {
            intros: [
                "Fazendo um empréstimo em {{location}}? Estimativas precisas são fundamentais.",
                "Calcule suas parcelas para necessidades de crédito em {{location}} instantaneamente."
            ],
            marketContext: [
                "As taxas em {{location}} variam. Use esta estimativa para pesquisar com confiança.",
                "Saber seu custo total em {{location}} fortalece suas decisões financeiras."
            ],
            closers: [
                "Planeje suas finanças em {{location}} com estes números precisos.",
                "Esperamos que isso ajude você a garantir o melhor empréstimo em {{location}}."
            ]
        },
        it: {
            intros: [
                "Prendere un prestito a {{location}}? Stime precise sono fondamentali.",
                "Calcola le tue rate per le esigenze di prestito a {{location}} istantaneamente."
            ],
            marketContext: [
                "I tassi a {{location}} variano. Usa questa stima per confrontare con sicurezza.",
                "Conoscere il costo totale a {{location}} potenzia le tue decisioni finanziarie."
            ],
            closers: [
                "Pianifica le tue finanze a {{location}} con queste cifre precise.",
                "Speriamo che questo ti aiuti a garantire il miglior prestito a {{location}}."
            ]
        },
        nl: {
            intros: [
                "Een lening afsluiten in {{location}}? Nauwkeurige schattingen zijn essentieel.",
                "Bereken uw betalingen voor leenbehoeften in {{location}} direct."
            ],
            marketContext: [
                "Tarieven in {{location}} variëren. Gebruik deze schatting om te vergelijken.",
                "Het kennen van uw totale kosten in {{location}} versterkt uw beslissingen."
            ],
            closers: [
                "Plan uw financiën in {{location}} met deze precieze cijfers.",
                "We hopen dat dit u helpt de beste lening in {{location}} te vinden."
            ]
        },
        pl: {
            intros: [
                "Bierzesz pożyczkę w {{location}}? Dokładne szacunki są kluczowe.",
                "Oblicz swoje raty dla potrzeb pożyczkowych w {{location}} natychmiast."
            ],
            marketContext: [
                "Stawki w {{location}} są różne. Użyj tego szacunku do porównania.",
                "Znajomość całkowitego kosztu w {{location}} wzmacnia Twoje decyzje."
            ],
            closers: [
                "Zaplanuj swoje finanse w {{location}} dzięki tym precyzyjnym liczbom.",
                "Mamy nadzieję, że pomoże Ci to uzyskać najlepszą pożyczkę w {{location}}."
            ]
        },
        sv: {
            intros: [
                "Tar du ett lån i {{location}}? Exakta uppskattningar är nyckeln.",
                "Beräkna dina betalningar för lånebehov i {{location}} direkt."
            ],
            marketContext: [
                "Räntorna i {{location}} varierar. Använd denna uppskattning för att jämföra.",
                "Att känna till din totala kostnad i {{location}} styrker dina beslut."
            ],
            closers: [
                "Planera din ekonomi i {{location}} med dessa exakta siffror.",
                "Vi hoppas att detta hjälper dig att säkra det bästa lånet i {{location}}."
            ]
        },
        no: {
            intros: [
                "Tar du opp lån i {{location}}? Nøyaktige estimater er nøkkelen.",
                "Beregn dine betalinger for lånebehov i {{location}} umiddelbart."
            ],
            marketContext: [
                "Rentene i {{location}} varierer. Bruk dette estimatet for å sammenligne.",
                "Å vite din totale kostnad i {{location}} styrker dine beslutninger."
            ],
            closers: [
                "Planlegg din økonomi i {{location}} med disse presise tallene.",
                "Vi håper dette hjelper deg å sikre det beste lånet i {{location}}."
            ]
        },
        da: {
            intros: [
                "Optager du lån i {{location}}? Præcise estimater er nøglen.",
                "Beregn dine ydelser for lånebehov i {{location}} med det samme."
            ],
            marketContext: [
                "Renterne i {{location}} varierer. Brug dette estimat til at sammenligne.",
                "At kende dine samlede omkostninger i {{location}} styrker dine beslutninger."
            ],
            closers: [
                "Planlæg din økonomi i {{location}} med disse præcise tal.",
                "Vi håber, dette hjælper dig med at sikre det bedste lån i {{location}}."
            ]
        },
        fi: {
            intros: [
                "Otatko lainaa paikassa {{location}}? Tarkat arviot ovat avainasemassa.",
                "Laske maksusi lainatarpeisiin paikassa {{location}} välittömästi."
            ],
            marketContext: [
                "Korot paikassa {{location}} vaihtelevat. Käytä tätä arviota vertailuun.",
                "Kokonaiskustannustesi tunteminen paikassa {{location}} vahvistaa päätöksiäsi."
            ],
            closers: [
                "Suunnittele taloutesi paikassa {{location}} näillä tarkoilla luvuilla.",
                "Toivomme, että tämä auttaa sinua saamaan parhaan lainan paikassa {{location}}."
            ]
        }
    },
    generic: {
        en: {
            intros: ["Welcome to the {{title}} for {{location}}."],
            marketContext: ["Tailored for {{location}} market conditions."],
            closers: ["Use these results to plan your future in {{location}}."]
        },
        es: {
            intros: ["Bienvenido a la {{title}} para {{location}}."],
            marketContext: ["Adaptado a las condiciones de {{location}}."],
            closers: ["Usa estos resultados para planear tu futuro en {{location}}."]
        },
        de: {
            intros: ["Willkommen beim {{title}} für {{location}}."],
            marketContext: ["Zugeschnitten auf die Marktbedingungen in {{location}}."],
            closers: ["Nutzen Sie diese Ergebnisse für Ihre Planung in {{location}}."]
        },
        fr: {
            intros: ["Bienvenue sur le {{title}} pour {{location}}."],
            marketContext: ["Adapté aux conditions du marché de {{location}}."],
            closers: ["Utilisez ces résultats pour planifier votre avenir à {{location}}."]
        },
        pt: {
            intros: ["Bem-vindo à {{title}} para {{location}}."],
            marketContext: ["Adaptado às condições de mercado de {{location}}."],
            closers: ["Use estes resultados para planejar seu futuro em {{location}}."]
        },
        it: {
            intros: ["Benvenuto al {{title}} per {{location}}."],
            marketContext: ["Adattato alle condizioni di mercato di {{location}}."],
            closers: ["Usa questi risultati per pianificare il tuo futuro a {{location}}."]
        },
        nl: {
            intros: ["Welkom bij de {{title}} voor {{location}}."],
            marketContext: ["Afgestemd op de marktomstandigheden in {{location}}."],
            closers: ["Gebruik deze resultaten om uw toekomst in {{location}} te plannen."]
        },
        pl: {
            intros: ["Witamy w {{title}} dla {{location}}."],
            marketContext: ["Dostosowane do warunków rynkowych w {{location}}."],
            closers: ["Wykorzystaj te wyniki, aby zaplanować swoją przyszłość w {{location}}."]
        },
        sv: {
            intros: ["Välkommen till {{title}} för {{location}}."],
            marketContext: ["Skräddarsydd för marknadsförhållandena i {{location}}."],
            closers: ["Använd dessa resultat för att planera din framtid i {{location}}."]
        },
        no: {
            intros: ["Velkommen til {{title}} for {{location}}."],
            marketContext: ["Skreddersydd for markedsforholdene i {{location}}."],
            closers: ["Bruk disse resultatene til å planlegge fremtiden i {{location}}."]
        },
        da: {
            intros: ["Velkommen til {{title}} for {{location}}."],
            marketContext: ["Skræddersyet til markedsforholdene i {{location}}."],
            closers: ["Brug disse resultater til at planlægge din fremtid i {{location}}."]
        },
        fi: {
            intros: ["Tervetuloa {{title}} -laskuriin paikassa {{location}}."],
            marketContext: ["Räätälöity markkinaolosuhteisiin paikassa {{location}}."],
            closers: ["Käytä näitä tuloksia suunnitellaksesi tulevaisuuttasi paikassa {{location}}."]
        }
    }
};

const safeMortgageMixins = {
    en: {
        intros: [
            "Buying in {{location}}? Taxes, insurance, and fees can change your true monthly cost.",
            "Use this {{year}} mortgage calculator to compare scenarios and plan your budget."
        ],
        marketContext: [
            "Local tax rules and insurance costs vary—check official sources and lenders for current figures."
        ],
        closers: [
            "Use these estimates as a starting point and confirm details with local professionals."
        ]
    },
    es: {
        intros: [
            "¿Compras en {{location}}? Impuestos, seguros y costos adicionales pueden cambiar tu cuota real.",
            "Usa esta calculadora hipotecaria {{year}} para comparar escenarios y planificar tu presupuesto."
        ],
        marketContext: [
            "Las reglas fiscales y los costos de seguro varían según la zona; consulta fuentes oficiales y prestamistas."
        ],
        closers: [
            "Usa estas estimaciones como punto de partida y confirma los detalles con profesionales locales."
        ]
    },
    de: {
        intros: [
            "Kauf in {{location}}? Steuern, Versicherungen und Gebühren können Ihre reale Monatsrate verändern.",
            "Nutzen Sie diesen Hypothekenrechner {{year}}, um Szenarien zu vergleichen und Ihr Budget zu planen."
        ],
        marketContext: [
            "Steuerregeln und Versicherungskosten unterscheiden sich lokal—prüfen Sie offizielle Quellen und Kreditgeber."
        ],
        closers: [
            "Nutzen Sie diese Schätzungen als Ausgangspunkt und bestätigen Sie Details mit lokalen Fachleuten."
        ]
    },
    fr: {
        intros: [
            "Acheter à {{location}} ? Les taxes, assurances et frais peuvent changer votre mensualité réelle.",
            "Utilisez cette calculatrice {{year}} pour comparer des scénarios et planifier votre budget."
        ],
        marketContext: [
            "Les règles fiscales et les coûts d’assurance varient selon la région—vérifiez les sources officielles et les prêteurs."
        ],
        closers: [
            "Utilisez ces estimations comme point de départ et confirmez les détails avec des professionnels locaux."
        ]
    },
    pt: {
        intros: [
            "Comprando em {{location}}? Impostos, seguros e taxas podem alterar sua parcela real.",
            "Use esta calculadora de hipoteca {{year}} para comparar cenários e planejar seu orçamento."
        ],
        marketContext: [
            "Regras fiscais e custos de seguro variam por região—consulte fontes oficiais e bancos."
        ],
        closers: [
            "Use estas estimativas como ponto de partida e confirme detalhes com profissionais locais."
        ]
    },
    it: {
        intros: [
            "Stai comprando a {{location}}? Tasse, assicurazioni e spese possono cambiare la tua rata reale.",
            "Usa questo calcolatore {{year}} per confrontare scenari e pianificare il budget."
        ],
        marketContext: [
            "Regole fiscali e costi assicurativi variano per zona—verifica fonti ufficiali e istituti."
        ],
        closers: [
            "Usa queste stime come punto di partenza e conferma i dettagli con professionisti locali."
        ]
    },
    nl: {
        intros: [
            "Kopen in {{location}}? Belastingen, verzekeringen en kosten kunnen je echte maandlasten veranderen.",
            "Gebruik deze hypotheekcalculator {{year}} om scenario's te vergelijken en je budget te plannen."
        ],
        marketContext: [
            "Belastingregels en verzekeringskosten verschillen per regio—raadpleeg officiële bronnen en geldverstrekkers."
        ],
        closers: [
            "Gebruik deze schattingen als startpunt en bevestig details bij lokale professionals."
        ]
    },
    pl: {
        intros: [
            "Kupujesz w {{location}}? Podatki, ubezpieczenia i opłaty mogą zmienić realną ratę.",
            "Użyj kalkulatora {{year}}, aby porównać scenariusze i zaplanować budżet."
        ],
        marketContext: [
            "Zasady podatkowe i koszty ubezpieczenia różnią się lokalnie—sprawdź źródła oficjalne i kredytodawców."
        ],
        closers: [
            "Traktuj te szacunki jako punkt wyjścia i potwierdź szczegóły lokalnie."
        ]
    },
    sv: {
        intros: [
            "Köper du i {{location}}? Skatter, försäkringar och avgifter kan ändra din verkliga månadskostnad.",
            "Använd denna bolånekalkylator {{year}} för att jämföra scenarier och planera budgeten."
        ],
        marketContext: [
            "Skatteregler och försäkringskostnader varierar lokalt—kontrollera officiella källor och långivare."
        ],
        closers: [
            "Använd dessa uppskattningar som startpunkt och bekräfta detaljer lokalt."
        ]
    },
    no: {
        intros: [
            "Kjøper du i {{location}}? Skatter, forsikringer og gebyrer kan endre den reelle månedsbetalingen.",
            "Bruk denne boliglånskalkulatoren {{year}} for å sammenligne scenarier og planlegge budsjett."
        ],
        marketContext: [
            "Skatteregler og forsikringskostnader varierer lokalt—sjekk offisielle kilder og långivere."
        ],
        closers: [
            "Bruk disse estimatene som startpunkt og bekreft detaljer lokalt."
        ]
    },
    da: {
        intros: [
            "Køber du i {{location}}? Skatter, forsikringer og gebyrer kan ændre din reelle månedlige ydelse.",
            "Brug denne realkreditberegner {{year}} til at sammenligne scenarier og planlægge dit budget."
        ],
        marketContext: [
            "Skatteregler og forsikringsomkostninger varierer lokalt—tjek officielle kilder og långivere."
        ],
        closers: [
            "Brug disse estimater som udgangspunkt og bekræft detaljer lokalt."
        ]
    },
    fi: {
        intros: [
            "Ostatko kohteesta {{location}}? Verot, vakuutukset ja kulut voivat muuttaa todellista kuukausierää.",
            "Käytä tätä asuntolainalaskuria {{year}} vertaillaksesi skenaarioita ja suunnitellaksesi budjetin."
        ],
        marketContext: [
            "Verosäännöt ja vakuutuskustannukset vaihtelevat paikallisesti—tarkista viralliset lähteet ja lainanantajat."
        ],
        closers: [
            "Käytä näitä arvioita lähtökohtana ja varmista yksityiskohdat paikallisesti."
        ]
    }
};

mixins.mortgage = safeMortgageMixins;

// Helper to provide defaults for missing languages
const supportedLangs = ['en', 'es', 'de', 'fr', 'pt', 'it', 'nl', 'pl', 'sv', 'no', 'da', 'fi'];
supportedLangs.forEach(lang => {
    ['mortgage', 'loan', 'generic'].forEach(type => {
        if (!mixins[type][lang]) {
            mixins[type][lang] = mixins[type]['en'];
        }
    });
});

module.exports = mixins;
