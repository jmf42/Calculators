
const testCalc = () => {
    const investment = 1000;
    const entryPrice = 50000;
    const fees = 10;
    const taxRate = 20;

    // Helper
    const calculate = (exitPrice) => {
        const coins = investment / entryPrice; // 0.02
        const grossVal = coins * exitPrice;
        const preTaxProfit = grossVal - investment - fees;

        // Current Formula in file
        // (((investment / entryPrice) * exitPrice) - investment - fees) * (1 - (taxRate / 100))
        const currentFormulaResult = preTaxProfit * (1 - (taxRate / 100));

        // Proposed Correct Logic: Only tax on profit
        const correctResult = preTaxProfit > 0 ? preTaxProfit * (1 - (taxRate / 100)) : preTaxProfit;

        console.log(`--- Test Exit: $${exitPrice} ---`);
        console.log(`Gross Value: ${grossVal}`);
        console.log(`Pre-Tax Profit: ${preTaxProfit}`);
        console.log(`Current Formula Result: ${currentFormulaResult}`);
        console.log(`Correct Logic Result: ${correctResult}`);

        if (Math.abs(currentFormulaResult - correctResult) > 0.01) {
            console.log("❌ DISCREPANCY FOUND");
        } else {
            console.log("✅ OK");
        }
    }

    // Scenario 1: Profit
    // Exit 60000. 
    // Gross = 0.02 * 60000 = 1200.
    // Profit = 1200 - 1000 - 10 = 190.
    // Tax = 20% of 190 = 38.
    // Net = 152.
    calculate(60000);

    // Scenario 2: Loss
    // Exit 40000.
    // Gross = 0.02 * 40000 = 800.
    // Profit = 800 - 1000 - 10 = -210.
    // Current Formula: -210 * 0.8 = -168 (implies tax credit).
    // Correct Logic: -210 (you lost 210, you don't pay tax, but you don't get money back instantly).
    calculate(40000);
}

testCalc();
