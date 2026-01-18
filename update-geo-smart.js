#!/usr/bin/env node

const fs = require('fs');

const filePath = './assets/js/geo-detect.js';
let content = fs.readFileSync(filePath, 'utf8');

// 1. UPDATE INITIALIZATION LOGIC TO CHECK CALCULATOR TYPE
// Find init function
const initStart = content.indexOf('    async function init() {');
if (initStart === -1) {
    console.error('Could not find init function');
    process.exit(1);
}

// Replace init function to include strict type checking
const newInit = `    async function init() {
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
        
        // Define allowed types and their data keys
        const allowedTypes = ['mortgage', 'solar', 'roofing'];
        if (!allowedTypes.includes(calcType)) {
            console.log('CalcKit Geo: Calculator type not supported for geo-insights:', calcType);
            return;
        }

        console.log('CalcKit Geo: Starting detection...');

        // 1. Detect Location
        const location = await detectLocation();
        if (!location) {
            console.log('CalcKit Geo: Could not detect location');
            return;
        }

        // 2. Detect Page Language
        const pageLang = detectPageLanguage();
        console.log('CalcKit Geo: Page language detected as', pageLang);

        // 3. Get Location Data
        const locationInfo = getLocationData(location, pageLang);
        if (!locationInfo) {
            console.log('CalcKit Geo: No data for location', location);
            return;
        }

        // 4. Check if we have specific data for this calculator type
        // e.g. for 'solar', we need locationInfo.data.solar
        if (calcType === 'solar' && !locationInfo.data.solar) return;
        if (calcType === 'roofing' && !locationInfo.data.roofing) return;
        // mortgage data is usually present if locationInfo exists, but good to check
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
    }`;

// Replace the old init function
// We need to find where the old init ends. It likely ends before "window.addEventListener"
const initEnd = content.indexOf('    window.addEventListener(\'DOMContentLoaded', initStart);
const oldInitBlock = content.substring(initStart, initEnd);

// We need to be careful with replacement. Let's look for the matching closing brace of init
// A safer way might be to regex replace the function body, but since I have the file content in memory
// I'll try to identify the block.
// Actually, simpler approach: The file structure is detection functions -> init -> listeners.
// I will just replace `async function init() { ... }` block.

// Let's use string replacement for the specific block if I can match it exactly,
// or just overwrite the file since I'm rewriting a large chunk anyway.
// But to be precise, I'll use the replace_file_content tool approach via this script.

// 2. UPDATE RENDER FUNCTION FOR NEW DESIGN
const renderStart = content.indexOf('    /**\n     * Render the local insights section');
const renderEnd = content.indexOf('    /**\n     * Update calculator defaults');

const newRender = `    /**
     * Render the local insights section as a prominent banner
     */
    function renderInsightsSection(locationInfo, calcType) {
        const { type, data, displayName } = locationInfo;
        
        // Select data source based on calculator type
        const sourceData = calcType === 'solar' ? data.solar : 
                          calcType === 'roofing' ? data.roofing : 
                          data.mortgage;
                          
        if (!sourceData) return ''; // Should be caught by init, but safety first

        let statsHTML = '';
        const currency = data.currency || '$';
        
        // Generate stats grid based on type
        if (calcType === 'solar') {
             statsHTML = \`
                <div class="geo-stats-grid">
                    <div class="geo-stat-card">
                        <div class="geo-stat-label">Sun Hours</div>
                        <div class="geo-stat-value">\${sourceData.sunHours} <span class="unit">hrs/day</span></div>
                    </div>
                    <div class="geo-stat-card">
                        <div class="geo-stat-label">Electric Rate</div>
                        <div class="geo-stat-value">\${currency}\${sourceData.electricRate}<span class="unit">/kWh</span></div>
                    </div>
                    <div class="geo-stat-card">
                        <div class="geo-stat-label">Potential</div>
                        <div class="geo-stat-value">\${sourceData.sunHours > 4 ? 'High 🔥' : 'Moderate ⛅'}</div>
                    </div>
                </div>\`;
        } else if (calcType === 'roofing') {
             statsHTML = \`
                <div class="geo-stats-grid">
                    <div class="geo-stat-card">
                        <div class="geo-stat-label">Labor Rate</div>
                        <div class="geo-stat-value">\${currency}\${sourceData.laborRate}<span class="unit">/sq.ft</span></div>
                    </div>
                    <div class="geo-stat-card">
                        <div class="geo-stat-label">Season</div>
                        <div class="geo-stat-value">Active</div>
                    </div>
                </div>\`;
        } else {
            // Mortgage (Default)
            if (type === 'state') {
                statsHTML = \`
                    <div class="geo-stats-grid">
                        <div class="geo-stat-card">
                            <div class="geo-stat-label">Median Price</div>
                            <div class="geo-stat-value">$\${formatNumber(sourceData.medianPrice)}</div>
                        </div>
                        <div class="geo-stat-card">
                            <div class="geo-stat-label">Property Tax</div>
                            <div class="geo-stat-value">\${sourceData.propertyTaxRate}%</div>
                        </div>
                        <div class="geo-stat-card">
                            <div class="geo-stat-label">Home Insurance</div>
                            <div class="geo-stat-value">$\${formatNumber(sourceData.homeInsurance)}/yr</div>
                        </div>
                        <div class="geo-stat-card \${sourceData.hasStateIncomeTax ? '' : 'geo-stat-highlight'}">
                            <div class="geo-stat-label">State Income Tax</div>
                            <div class="geo-stat-value">\${sourceData.hasStateIncomeTax ? 'Yes' : 'None ✓'}</div>
                        </div>
                    </div>\`;
            } else {
                statsHTML = \`
                    <div class="geo-stats-grid">
                        <div class="geo-stat-card">
                            <div class="geo-stat-label">Median Price</div>
                            <div class="geo-stat-value">\${currency}\${formatNumber(sourceData.medianPrice)}</div>
                        </div>
                        <div class="geo-stat-card">
                            <div class="geo-stat-label">Typical Rate</div>
                            <div class="geo-stat-value">\${sourceData.typicalRate}%</div>
                        </div>
                        <div class="geo-stat-card">
                            <div class="geo-stat-label">Loan Term</div>
                            <div class="geo-stat-value">\${sourceData.typicalTerm} years</div>
                        </div>
                        <div class="geo-stat-card">
                            <div class="geo-stat-label">Down Payment</div>
                            <div class="geo-stat-value">\${sourceData.downPayment}%</div>
                        </div>
                    </div>\`;
            }
        }

        // Get tips
        const tipsList = sourceData.tips || data.tips; // Fallback to generic tips if specific ones missing
        // Handle multilingual tips if they are objects (should be handled by getLocationData already, but tips might be raw in sub-objects)
        // Note: In my data structure, sub-object tips (solar.tips) are usually arrays.
        // If they were multilingual, we'd need logic here. Assuming arrays for now based on data review.
        
        const tipsHTML = Array.isArray(tipsList) ? tipsList.map(tip => \`
            <div class="geo-tip-item">
                <span class="geo-tip-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </span>
                <span class="geo-tip-text">\${tip}</span>
            </div>
        \`).join('') : '';

        const html = \`
            <style>
                .geo-insights-banner {
                    background: var(--surface, #111729);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 24px;
                    padding: 32px;
                    margin: -40px auto 40px;
                    max-width: 960px; /* Aligned with container */
                    box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.5);
                    position: relative;
                    overflow: hidden;
                    backdrop-filter: blur(20px);
                    -webkit-backdrop-filter: blur(20px);
                }
                
                /* Subtle top gradient line */
                .geo-insights-banner::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 1px;
                    background: linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.5), transparent);
                }

                .geo-banner-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 28px;
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
                    filter: drop-shadow(0 0 20px rgba(99, 102, 241, 0.2));
                    line-height: 1;
                }
                .geo-banner-text h2 {
                    font-size: 24px;
                    font-weight: 800;
                    margin: 0 0 4px 0;
                    color: var(--text, #fff);
                    letter-spacing: -0.02em;
                }
                .geo-banner-text p {
                    font-size: 14px;
                    margin: 0;
                    color: var(--text-muted, #94a3b8);
                    font-weight: 500;
                    display: flex;
                    align-items: center;
                    gap: 6px;
                }
                
                .geo-toggle-btn {
                    background: rgba(255,255,255,0.05);
                    border: 1px solid rgba(255,255,255,0.1);
                    color: var(--text-muted, #94a3b8);
                    padding: 8px 16px;
                    border-radius: 12px;
                    cursor: pointer;
                    font-size: 13px;
                    font-weight: 600;
                    transition: all 0.2s ease;
                    display: none; /* Mobile only */
                }
                .geo-toggle-btn:hover {
                    background: rgba(255,255,255,0.1);
                    color: white;
                }

                .geo-stats-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
                    gap: 12px;
                    margin-bottom: 24px;
                }
                .geo-stat-card {
                    background: rgba(0,0,0,0.2);
                    border: 1px solid rgba(255,255,255,0.05);
                    border-radius: 16px;
                    padding: 20px 16px;
                    text-align: center;
                    transition: all 0.2s ease;
                }
                .geo-stat-card:hover {
                    background: rgba(255,255,255,0.03);
                    border-color: rgba(99, 102, 241, 0.3);
                    transform: translateY(-2px);
                }
                .geo-stat-card.geo-stat-highlight {
                    border-color: rgba(16, 185, 129, 0.3);
                    background: rgba(16, 185, 129, 0.05);
                }
                
                .geo-stat-label {
                    color: var(--text-muted, #94a3b8);
                    font-size: 11px;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    margin-bottom: 8px;
                }
                .geo-stat-value {
                    color: var(--text, #fff);
                    font-size: 22px;
                    font-weight: 800;
                    line-height: 1;
                    letter-spacing: -0.02em;
                }
                .geo-stat-value .unit {
                    font-size: 12px;
                    color: var(--text-dim, #64748b);
                    font-weight: 500;
                    margin-left: 2px;
                }

                .geo-tips-section {
                    background: rgba(99, 102, 241, 0.05);
                    border: 1px solid rgba(99, 102, 241, 0.1);
                    border-radius: 16px;
                    padding: 24px;
                }
                .geo-tips-header {
                    font-size: 13px;
                    font-weight: 700;
                    color: var(--primary-light, #a5b4fc);
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    margin-bottom: 16px;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
                .geo-tips-list {
                    display: grid;
                    gap: 12px;
                }
                .geo-tip-item {
                    display: flex;
                    align-items: flex-start;
                    gap: 12px;
                    padding: 0;
                }
                .geo-tip-icon {
                    color: var(--success, #10b981);
                    flex-shrink: 0;
                    margin-top: 2px;
                }
                .geo-tip-text {
                    color: var(--text, #f1f5f9);
                    font-size: 14px;
                    line-height: 1.6;
                }
                
                /* Mobile optimizations */
                @media (max-width: 768px) {
                    .geo-insights-banner {
                        padding: 24px 20px;
                        margin: -20px 16px 32px;
                        border-radius: 20px;
                    }
                    .geo-toggle-btn {
                        display: block;
                    }
                    .geo-banner-flag { font-size: 24px; }
                    .geo-banner-text h2 { font-size: 20px; }
                    .geo-stats-grid { grid-template-columns: 1fr 1fr; gap: 10px; }
                    .geo-stat-value { font-size: 18px; }
                }
            </style>
            <div class="geo-insights-banner">
                <div class="geo-banner-header">
                    <div class="geo-banner-title">
                        <span class="geo-banner-flag">\${type === 'state' ? '🇺🇸' : '🌍'}</span>
                        <div class="geo-banner-text">
                            <h2>\${displayName} Market Insights</h2>
                            <p>
                                <span style="display:inline-block; width:6px; height:6px; background:#10b981; border-radius:50%;"></span>
                                Live Data for \${calcType.charAt(0).toUpperCase() + calcType.slice(1)}
                            </p>
                        </div>
                    </div>
                    <button class="geo-toggle-btn" onclick="this.parentElement.nextElementSibling.classList.toggle('collapsed'); this.textContent = this.textContent === 'Show' ? 'Hide' : 'Show';">Hide</button>
                </div>
                <div class="geo-content">
                    \${statsHTML}
                    <div class="geo-tips-section">
                        <div class="geo-tips-header">
                            Local Factors
                        </div>
                        <div class="geo-tips-list">
                            \${tipsHTML}
                        </div>
                    </div>
                </div>
            </div>
        \`;

        return html;
    }
    `;

// We will overwrite the file. The original replacement script was cleaner than trying to splice strings here
// because of line endings and indentation. 
// I will regenerate the ENTIRE file content in the script to be safe.
// To do that, I'll read the original file again in the replacement script I'm writing NOW.

// Construct the full file content script
const updateScript = \`const fs = require('fs');
const filePath = './assets/js/geo-detect.js';
let content = fs.readFileSync(filePath, 'utf8');

// Helper to replace function body
function replaceFunction(cont, funcName, newFunc) {
    // Basic regex to find function. Note: this is brittle if braces aren't balanced or formatted standardly
    // But since we control the file format somewhat, we assume standard "async function init() {"
    const startRegex = new RegExp('async\\\\s+function\\\\s+' + funcName + '\\\\s*\\\\(|function\\\\s+' + funcName + '\\\\s*\\\\(');
    const match = cont.match(startRegex);
    if (!match) return cont;
    
    const startIndex = match.index;
    let braceCount = 0;
    let foundStart = false;
    let endIndex = -1;
    
    // Scan for matching brace
    for (let i = startIndex; i < cont.length; i++) {
        if (cont[i] === '{') {
            braceCount++;
            foundStart = true;
        } else if (cont[i] === '}') {
            braceCount--;
            if (foundStart && braceCount === 0) {
                endIndex = i + 1;
                break;
            }
        }
    }
    
    if (endIndex !== -1) {
        return cont.substring(0, startIndex) + newFunc + cont.substring(endIndex);
    }
    return cont;
}

// 1. UPDATE INIT
const newInit = \`    /**
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
        
        // Define allowed types and their data keys
        const allowedTypes = ['mortgage', 'solar', 'roofing'];
        if (!allowedTypes.includes(calcType)) {
            console.log('CalcKit Geo: Calculator type not supported for geo-insights:', calcType);
            return;
        }

        console.log('CalcKit Geo: Starting detection...');

        // 1. Detect Location
        const location = await detectLocation();
        if (!location) {
            return;
        }

        // 2. Detect Page Language
        const pageLang = detectPageLanguage();
        console.log('CalcKit Geo: Page language detected as', pageLang);

        // 3. Get Location Data
        const locationInfo = getLocationData(location, pageLang);
        if (!locationInfo) {
            return;
        }

        // 4. Check if we have specific data for this calculator type
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
    }\`;

// 2. UPDATE RENDER
const newRender = \`    /**
     * Render the local insights section as a prominent banner
     */
    function renderInsightsSection(locationInfo, calcType) {
        const { type, data, displayName } = locationInfo;
        
        // Select data source based on calculator type
        const sourceData = calcType === 'solar' ? data.solar : 
                          calcType === 'roofing' ? data.roofing : 
                          data.mortgage;
                          
        if (!sourceData) return '';

        let statsHTML = '';
        const currency = data.currency || '$';
        
        // Generate stats grid
        if (calcType === 'solar') {
             statsHTML = \\\`
                <div class="geo-stats-grid">
                    <div class="geo-stat-card">
                        <div class="geo-stat-label">Sun Hours</div>
                        <div class="geo-stat-value">\\\${sourceData.sunHours} <span class="unit">hrs/day</span></div>
                    </div>
                    <div class="geo-stat-card">
                        <div class="geo-stat-label">Electric Rate</div>
                        <div class="geo-stat-value">\\\${currency}\\\${sourceData.electricRate}<span class="unit">/kWh</span></div>
                    </div>
                    <div class="geo-stat-card">
                        <div class="geo-stat-label">Potential</div>
                        <div class="geo-stat-value">\\\${sourceData.sunHours > 4 ? 'High 🔥' : 'Moderate ⛅'}</div>
                    </div>
                </div>\\\`;
        } else if (calcType === 'roofing') {
             statsHTML = \\\`
                <div class="geo-stats-grid">
                    <div class="geo-stat-card">
                        <div class="geo-stat-label">Labor Rate</div>
                        <div class="geo-stat-value">\\\${currency}\\\${sourceData.laborRate}<span class="unit">/sq.ft</span></div>
                    </div>
                    <div class="geo-stat-card">
                        <div class="geo-stat-label">Season</div>
                        <div class="geo-stat-value">Active</div>
                    </div>
                </div>\\\`;
        } else {
            // Mortgage
            if (type === 'state') {
                statsHTML = \\\`
                    <div class="geo-stats-grid">
                        <div class="geo-stat-card">
                            <div class="geo-stat-label">Median Price</div>
                            <div class="geo-stat-value">$\\\${formatNumber(sourceData.medianPrice)}</div>
                        </div>
                        <div class="geo-stat-card">
                            <div class="geo-stat-label">Property Tax</div>
                            <div class="geo-stat-value">\\\${sourceData.propertyTaxRate}%</div>
                        </div>
                        <div class="geo-stat-card">
                            <div class="geo-stat-label">Home Insurance</div>
                            <div class="geo-stat-value">$\\\${formatNumber(sourceData.homeInsurance)}/yr</div>
                        </div>
                        <div class="geo-stat-card \\\${sourceData.hasStateIncomeTax ? '' : 'geo-stat-highlight'}">
                            <div class="geo-stat-label">State Income Tax</div>
                            <div class="geo-stat-value">\\\${sourceData.hasStateIncomeTax ? 'Yes' : 'None ✓'}</div>
                        </div>
                    </div>\\\`;
            } else {
                statsHTML = \\\`
                    <div class="geo-stats-grid">
                        <div class="geo-stat-card">
                            <div class="geo-stat-label">Median Price</div>
                            <div class="geo-stat-value">\\\${currency}\\\${formatNumber(sourceData.medianPrice)}</div>
                        </div>
                        <div class="geo-stat-card">
                            <div class="geo-stat-label">Typical Rate</div>
                            <div class="geo-stat-value">\\\${sourceData.typicalRate}%</div>
                        </div>
                        <div class="geo-stat-card">
                            <div class="geo-stat-label">Loan Term</div>
                            <div class="geo-stat-value">\\\${sourceData.typicalTerm} years</div>
                        </div>
                        <div class="geo-stat-card">
                            <div class="geo-stat-label">Down Payment</div>
                            <div class="geo-stat-value">\\\${sourceData.downPayment}%</div>
                        </div>
                    </div>\\\`;
            }
        }

        const tipsList = sourceData.tips || data.tips;
        const tips = Array.isArray(tipsList) ? tipsList : (tipsList && typeof tipsList === 'object' ? Object.values(tipsList)[0] : []);
        
        const tipsHTML = tips.map(tip => \\\`
            <div class="geo-tip-item">
                <span class="geo-tip-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </span>
                <span class="geo-tip-text">\\\${tip}</span>
            </div>
        \\\`).join('');

        const html = \\\`
            <style>
                .geo-insights-banner {
                    background: var(--surface, #111729);
                    border: 1px solid rgba(255, 255, 255, 0.08); /* glass-border */
                    border-radius: 24px;
                    padding: 32px;
                    margin: -40px auto 40px;
                    max-width: 960px;
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
                        <span class="geo-banner-flag">\\\${type === 'state' ? '🇺🇸' : '🌍'}</span>
                        <div class="geo-banner-text">
                            <h2>\\\${displayName} Insights</h2>
                            <p>
                                <span style="display:inline-block; width:6px; height:6px; background:#10b981; border-radius:50%;"></span>
                                Live Market Data
                            </p>
                        </div>
                    </div>
                    <button class="geo-toggle-btn" onclick="this.parentElement.nextElementSibling.classList.toggle('collapsed'); this.textContent = this.textContent === 'Show' ? 'Hide' : 'Show';">Hide</button>
                </div>
                <div class="geo-content">
                    \\\${statsHTML}
                    <div class="geo-tips-section">
                        <div class="geo-tips-header">
                            Local Factors
                        </div>
                        <div class="geo-tips-list">
                            \\\${tipsHTML}
                        </div>
                    </div>
                </div>
            </div>
        \\\`;

        return html;
    }\`;

let newContent = replaceFunction(content, 'init', newInit);
newContent = replaceFunction(newContent, 'renderInsightsSection', newRender);

fs.writeFileSync(filePath, newContent, 'utf8');
console.log('Successfully updated geo-detect.js with new styles and logic');
\`;

fs.writeFileSync('update-geo-smart.js', updateScript);
