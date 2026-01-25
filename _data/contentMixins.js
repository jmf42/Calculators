
const mixins = {
    mortgage: {
        en: {
            intros: [
                "Buying a home in {{location}} is a big step. With average property taxes around {{tax_rate}}% and insurance costs of roughly ${{insurance_cost}}, it's vital to know your true monthly payment.",
                "Navigating the {{location}} market? Our {{year}} Mortgage Calculator estimates typical costs, including the {{tax_rate}}% tax rate common in this area.",
                "Planning to buy in {{location}}? Don't let the {{tax_rate}}% property tax surprise you. Calculate your PITI (Principal, Interest, Taxes, Insurance) instantly."
            ],
            marketContext: [
                "In {{location}}, the {{tax_rate}}% property tax rate can significantly impact affordability. Lenders will also look at the ${{insurance_cost}} insurance average.",
                "Understanding {{location}}'s specific costs like the {{tax_rate}}% tax rate helps you set a realistic budget compared to national averages."
            ],
            closers: [
                "Ready for {{location}}? Use these estimates, including the ${{insurance_cost}} insurance factor, to talk confidently with lenders.",
                "Smart buyers in {{location}} plan for total costs, including the ~{{tax_rate}}% tax. We hope this tool helps you find your dream home."
            ]
        },
        es: {
            intros: [
                "Comprar casa en {{location}} es un gran paso. Con impuestos prediales del {{tax_rate}}% y seguros de ${{insurance_cost}}, es vital conocer tu pago real.",
                "¿Navegando el mercado de {{location}}? Nuestra Calculadora {{year}} estima costos típicos, incluyendo la tasa de impuestos del {{tax_rate}}%.",
                "¿Planeas comprar en {{location}}? Que el impuesto del {{tax_rate}}% no te sorprenda. Calcula tu pago mensual total al instante."
            ],
            marketContext: [
                "En {{location}}, la tasa de impuestos del {{tax_rate}}% impacta tu capacidad de compra. Considera también el seguro promedio de ${{insurance_cost}}.",
                "Entender los costos de {{location}}, como el {{tax_rate}}% de impuestos, te ayuda a crear un presupuesto realista."
            ],
            closers: [
                "¿Listo para {{location}}? Usa estos estimados, incluyendo el factor de seguro de ${{insurance_cost}}, para negociar con prestamistas.",
                "Compradores inteligentes en {{location}} planean con costos totales. Esperamos que esta herramienta te ayude."
            ]
        },
        de: {
            intros: [
                "Ein Hauskauf in {{location}} ist ein großer Schritt. Mit Grundsteuern um {{tax_rate}}% und Versicherungskosten von ca. {{insurance_cost}}$, ist Klarheit wichtig.",
                "Im Immobilienmarkt von {{location}} unterwegs? Unser Rechner {{year}} schätzt typische Kosten, inklusive der {{tax_rate}}% Steuer.",
                "Planen Sie einen Kauf in {{location}}? Lassen Sie sich nicht von der {{tax_rate}}% Steuer überraschen. Berechnen Sie Ihre monatliche Rate sofort."
            ],
            marketContext: [
                "In {{location}} kann die Steuer von {{tax_rate}}% die Bezahlbarkeit beeinflussen. Banken achten auch auf die {{insurance_cost}}$ Versicherung.",
                "Die spezifischen Kosten in {{location}} wie {{tax_rate}}% Steuer zu verstehen, hilft bei der realistischen Budgetplanung."
            ],
            closers: [
                "Bereit für {{location}}? Nutzen Sie diese Schätzungen inklusive {{insurance_cost}}$ Versicherung für Gespräche mit Banken.",
                "Kluge Käufer in {{location}} planen mit Gesamtkosten. Wir hoffen, dieses Tool hilft Ihnen."
            ]
        },
        fr: {
            intros: [
                "Acheter à {{location}} est une étape majeure. Avec des taxes foncières d'environ {{tax_rate}}% et une assurance de {{insurance_cost}}$, il faut connaître son vrai paiement.",
                "Vous explorez le marché de {{location}} ? Notre Calculateur {{year}} estime les coûts, incluant le taux de taxe de {{tax_rate}}%.",
                "Un projet à {{location}} ? Ne laissez pas la taxe de {{tax_rate}}% vous surprendre. Calculez votre mensualité totale instantanément."
            ],
            marketContext: [
                "À {{location}}, le taux de taxe de {{tax_rate}}% impacte l'accessibilité. Les banques regardent aussi l'assurance moyenne de {{insurance_cost}}$.",
                "Comprendre les coûts de {{location}} comme les {{tax_rate}}% de taxes aide à fixer un budget réaliste."
            ],
            closers: [
                "Prêt pour {{location}} ? Utilisez ces estimations avec l'assurance de {{insurance_cost}}$ pour discuter avec les prêteurs.",
                "Les acheteurs avisés à {{location}} prévoient tout. Espérons que cet outil vous aide."
            ]
        },
        pt: {
            intros: [
                "Comprar casa em {{location}} é um grande passo. Com impostos de {{tax_rate}}% e seguro de ${{insurance_cost}}, saiba seu pagamento real.",
                "Explorando o mercado de {{location}}? Nossa Calculadora {{year}} estima custos, incluindo a taxa de imposto de {{tax_rate}}%.",
                "Vai comprar em {{location}}? Não deixe o imposto de {{tax_rate}}% te surpreender. Calcule sua parcela total agora."
            ],
            marketContext: [
                "Em {{location}}, a taxa de {{tax_rate}}% afeta o financiamento. Considere também o seguro médio de ${{insurance_cost}}.",
                "Entender custos de {{location}} como {{tax_rate}}% de imposto ajuda a criar um orçamento realista."
            ],
            closers: [
                "Pronto para {{location}}? Use estas estimativas com seguro de ${{insurance_cost}} para falar com bancos.",
                "Compradores em {{location}} planejam custos totais. Esperamos que esta ferramenta ajude."
            ]
        },
        it: {
            intros: [
                "Comprare casa a {{location}} è un grande passo. Con tasse del {{tax_rate}}% e assicurazione di ${{insurance_cost}}, calcola la tua rata vera.",
                "Nel mercato immobiliare di {{location}}? Il nostro Calcolatore {{year}} stima i costi, inclusa l'aliquota del {{tax_rate}}%.",
                "Pensi di comprare a {{location}}? Non farti sorprendere dal {{tax_rate}}% di tasse. Calcola subito la tua rata mensile."
            ],
            marketContext: [
                "A {{location}}, il tasso del {{tax_rate}}% incide sui costi. Le banche considerano anche i ${{insurance_cost}} di assicurazione.",
                "Capire i costi di {{location}} come il {{tax_rate}}% di tasse aiuta a fare un budget realistico."
            ],
            closers: [
                "Pronto per {{location}}? Usa queste stime con i ${{insurance_cost}} di assicurazione per parlare con i finanziatori.",
                "Chi compra a {{location}} pianifica tutto. Speriamo che questo strumento ti sia utile."
            ]
        },
        nl: {
            intros: [
                "Een huis kopen in {{location}} is een grote stap. Met belastingen rond {{tax_rate}}% en verzekering van ${{insurance_cost}} is inzicht cruciaal.",
                "Op de markt in {{location}}? Onze Calculator {{year}} schat kosten, inclusief het {{tax_rate}}% belastingtarief.",
                "Kopen in {{location}}? Laat u niet verrassen door {{tax_rate}}% belasting. Bereken direct uw maandlasten."
            ],
            marketContext: [
                "In {{location}} beïnvloedt de {{tax_rate}}% belasting de betaalbaarheid. Banken kijken ook naar de ${{insurance_cost}} verzekering.",
                "Inzicht in kosten in {{location}} zoals {{tax_rate}}% belasting helpt bij een realistisch budget."
            ],
            closers: [
                "Klaar voor {{location}}? Gebruik deze cijfers inclusief ${{insurance_cost}} verzekering voor gesprekken met kredietverstrekkers.",
                "Slimme kopers in {{location}} plannen alles. We hopen dat deze tool helpt."
            ]
        }
    },
    // Fallback for languages not explicitly defined above helps prevent crashes, 
    // though ideally we'd have all 12. For brevity in this artifact, mapping to English 
    // or simple generic ones is safer than creating broken objects.
    // simpler generic ones for loan/other types
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
        }
        // ... (can extend)
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
        }
    }
};

// Helper to provide defaults for missing languages
const supportedLangs = ['en', 'es', 'de', 'fr', 'pt', 'it', 'nl', 'pl', 'sv', 'no', 'da', 'fi'];
supportedLangs.forEach(lang => {
    ['mortgage', 'loan', 'generic'].forEach(type => {
        if (!mixins[type][lang]) {
            // Fallback to English but maybe simple replace? 
            // Better to alias it to English to avoid crashes, 
            // assuming the template engine handles it or we accept English content on those pages for now 
            // (step 1 of improvement).
            mixins[type][lang] = mixins[type]['en'];
        }
    });
});

module.exports = mixins;
