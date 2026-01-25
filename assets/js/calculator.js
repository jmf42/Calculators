/**
 * CalcKit - Universal Calculator Engine
 * Web Component based calculator with Shadow DOM
 */

class CalcKitCalculator extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.config = null;
        this.values = {};
        this.state = { hiddenFields: new Set() };
        this.chart = null; // Chart.js instance
        this.lang = 'en';
        this.defaults = null;
    }

    connectedCallback() {
        try {
            const configAttr = this.closest('.calckit-calculator')?.dataset.config;
            const decodedConfig = this.decodeHtml(configAttr);
            this.config = JSON.parse(decodedConfig || '{}');
            this.theme = this.closest('.calckit-calculator')?.dataset.theme || 'light';
            this.lang = this.config.lang || document.documentElement.lang || 'en';
            this.config.lang = this.lang;

            if (this.config.fields) {
                // Parse URL Parameters for Deep Linking
                const urlParams = new URLSearchParams(window.location.search);

                this.config.fields.forEach(field => {
                    // Normalize template-provided values (string vs {en: "..."} objects)
                    field.label = this.resolveText(field.label);
                    if (field.help) field.help = this.resolveText(field.help);
                    if (field.description) field.description = this.resolveText(field.description);
                    if (field.toggle?.label) field.toggle.label = this.resolveText(field.toggle.label);
                    if (Array.isArray(field.options)) {
                        field.options = field.options.map(opt => ({
                            ...opt,
                            label: this.resolveText(opt.label)
                        }));
                    }

                    // Check URL for override
                    if (urlParams.has(field.id)) {
                        const paramVal = parseFloat(urlParams.get(field.id));
                        if (!isNaN(paramVal)) {
                            // Override default with URL value
                            field.default = paramVal;
                        }
                    }

                    if (field.hidden) {
                        this.state.hiddenFields.add(field.id);
                    }
                });

                // Cache defaults after URL overrides so "Reset" returns to a sensible baseline.
                this.defaults = {
                    values: Object.fromEntries(this.config.fields.map(f => [f.id, f.default ?? f.min ?? 0])),
                    hiddenFields: new Set(this.state.hiddenFields)
                };
            }

            this.loadChartJs();
            this.loadPdfLib();

            this.render();
            this.attachEventListeners();
        } catch (error) {
            console.error('CalcKit Error:', error);
            this.shadowRoot.innerHTML = '<div class="error">Calculator configuration error</div>';
        }
    }

    loadChartJs() {
        if (!window.Chart) {
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/chart.js/dist/chart.umd.min.js';
            script.async = true;
            script.onload = () => this.calculate();
            document.head.appendChild(script);
        }
    }

    loadPdfLib() {
        if (!window.jspdf) {
            const script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
            script.async = true;
            script.onload = () => {
                const pluginScript = document.createElement('script');
                pluginScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.8.2/jspdf.plugin.autotable.min.js';
                pluginScript.async = true;
                document.head.appendChild(pluginScript);
            };
            document.head.appendChild(script);
        }
    }

    render() {
        // Destroy existing chart to prevent memory leaks and ensure clean re-render of canvas
        if (this.chart) {
            this.chart.destroy();
            this.chart = null;
        }

        const styles = this.getStyles();
        const html = this.getHTML();

        this.shadowRoot.innerHTML = `
            <style>${styles}</style>
            ${html}
        `;
    }

    getStyles() {
        return `
            :host {
                display: block;
                font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
                line-height: 1.6;
                --primary: #6366f1;
                --primary-dark: #4f46e5;
                --primary-light: #a5b4fc;
                --primary-glow: rgba(99, 102, 241, 0.5);
                --bg-light: #ffffff;
                --bg-dark: #0f1629;
                --surface-dark: #1a2035;
                --text-light: #374151;
                --text-dark: #f8fafc;
                --text-muted-dark: #94a3b8;
                --glass-border: rgba(255, 255, 255, 0.08);
                --success: #10b981;
                --warning: #f59e0b;
                --error: #ef4444;
            }
            
            .calc-container {
                max-width: 680px;
                margin: 0 auto;
                padding: 36px 32px;
                background: ${this.theme === 'dark' ? 'var(--bg-dark)' : 'var(--bg-light)'};
                border-radius: 24px;
                color: ${this.theme === 'dark' ? 'var(--text-dark)' : 'var(--text-light)'};
                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                position: relative;
            }
            
            .calc-header { margin-bottom: 40px; text-align: center; }
            
            .calc-title {
                font-size: 32px; font-weight: 800; margin: 0 0 12px 0;
                background: linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%);
                background-size: 200% 200%; -webkit-background-clip: text; -webkit-text-fill-color: transparent;
                animation: gradientShift 8s ease infinite;
            }
            @keyframes gradientShift { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
            
            .calc-subtitle { font-size: 15px; color: ${this.theme === 'dark' ? 'var(--text-muted-dark)' : '#6b7280'}; margin: 0; }
            

            .calc-fields {
                display: grid;
                grid-template-columns: 1fr;
                gap: 24px;
            }
            
            @media (min-width: 640px) {
                .calc-fields {
                    grid-template-columns: repeat(2, 1fr);
                    gap: 24px 32px;
                }
                /* Make the last odd item span full width if desired, or let it flow */
                 .calc-field:last-child:nth-child(odd) {
                    grid-column: 1 / -1;
                }
            }
            
            .calc-field { margin-bottom: 0; position: relative; }

            
            .field-label {
                display: flex; justify-content: space-between; align-items: center;
                font-weight: 600; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em;
                color: ${this.theme === 'dark' ? 'var(--text-muted-dark)' : '#4b5563'};
                margin-bottom: 12px;
            }
            
            .input-wrapper { position: relative; display: flex; align-items: center; }
            .input-prefix, .input-suffix, .input-currency-symbol {
                position: absolute; color: ${this.theme === 'dark' ? '#9ca3af' : '#6b7280'};
                font-weight: 600; font-size: 16px; pointer-events: none; z-index: 1;
                min-width: 28px; text-align: center;
            }
            .input-prefix, .input-currency-symbol { left: 14px; }
            .input-suffix { right: 14px; }
            .has-prefix input, .is-currency-input input { padding-left: 52px !important; text-align: left; }
            .has-suffix input { padding-right: 52px !important; }
            
            .field-help {
                display: inline-flex; align-items: center; justify-content: center;
                width: 18px; height: 18px; border-radius: 50%;
                background: ${this.theme === 'dark' ? '#374151' : '#e5e7eb'};
                color: ${this.theme === 'dark' ? '#9ca3af' : '#6b7280'};
                font-size: 11px; font-weight: 700; margin-left: 8px; cursor: help;
            }
            
            .calc-result {
                margin-top: 40px; padding: 36px 32px;
                background: linear-gradient(165deg, #1a1f35 0%, #0f1525 100%);
                border: 1px solid rgba(99, 102, 241, 0.25);
                backdrop-filter: blur(20px); border-radius: 20px; text-align: center; color: #ffffff;
                box-shadow: 0 30px 60px -15px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.05);
            }
            
            .result-label {
                font-size: 13px; font-weight: 600; text-transform: uppercase;
                letter-spacing: 0.1em; color: rgba(255, 255, 255, 0.7); margin-bottom: 8px;
            }
            .result-value {
                font-size: 42px; font-weight: 800; 
                background: linear-gradient(135deg, #06b6d4 0%, #22d3ee 100%);
                -webkit-background-clip: text; -webkit-text-fill-color: transparent;
                background-clip: text; text-shadow: 0 0 40px rgba(6, 182, 212, 0.4);
            }
            
            input[type="number"], select {
                width: 100%; padding: 16px 20px;
                border: 1px solid ${this.theme === 'dark' ? 'var(--glass-border)' : '#e5e7eb'};
                border-radius: 14px; font-size: 17px; font-weight: 500;
                background: ${this.theme === 'dark' ? 'var(--surface-dark)' : '#f9fafb'};
                color: ${this.theme === 'dark' ? 'var(--text-dark)' : '#1f2937'};
                box-sizing: border-box;
                transition: border-color 0.2s ease, box-shadow 0.2s ease;
            }
            input[type="number"]:focus, select:focus {
                outline: none;
                border-color: var(--primary);
                box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
            }
            
            /* Error States */
            input.input-error {
                border-color: var(--error) !important;
                box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.15) !important;
            }
            .field-error-message {
                color: var(--error);
                font-size: 12px;
                margin-top: 6px;
                display: none;
                align-items: center;
                gap: 4px;
            }
            .field-error-message.visible { display: flex; }
            .field-error-message svg { width: 14px; height: 14px; fill: var(--error); }

            /* Range Slider Styling */
            input[type="range"] {
                -webkit-appearance: none; width: 100%; height: 6px;
                background: ${this.theme === 'dark' ? 'rgba(99, 102, 241, 0.2)' : '#e5e7eb'};
                border-radius: 3px; outline: none; margin-top: 12px; cursor: pointer;
            }
            input[type="range"]::-webkit-slider-thumb {
                -webkit-appearance: none; width: 22px; height: 22px; border-radius: 50%;
                background: #ffffff; border: 2px solid var(--primary);
                cursor: grab; box-shadow: 0 4px 14px rgba(99, 102, 241, 0.4);
                transition: transform 0.1s;
            }
            input[type="range"]::-webkit-slider-thumb:hover { transform: scale(1.1); }
            
            /* Chart Container */
            .chart-wrapper {
                position: relative; height: 220px; width: 100%;
                margin: 24px 0; display: flex; justify-content: center;
            }
            .chart-wrapper canvas { max-width: 100%; max-height: 100%; }

            /* Action Buttons */
            .result-actions { margin-top: 24px; display: flex; justify-content: center; gap: 12px; flex-wrap: wrap; }
            .action-btn {
                background: rgba(255, 255, 255, 0.08); border: 1px solid rgba(255, 255, 255, 0.1); padding: 12px 20px; border-radius: 12px;
                color: ${this.theme === 'dark' ? '#e2e8f0' : '#4b5563'}; font-size: 14px; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 8px;
                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
            }
            .action-btn:hover { background: rgba(255, 255, 255, 0.12); transform: translateY(-2px); border-color: rgba(255, 255, 255, 0.2); }
            .action-btn.primary-cta {
                background: linear-gradient(135deg, #10b981 0%, #059669 100%);
                box-shadow: 0 4px 15px rgba(16, 185, 129, 0.4);
            }
             .action-btn.share-btn {
                background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
                border-color: rgba(139, 92, 246, 0.4);
                color: #ffffff;
                box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
            }
            .action-btn.share-btn:hover { 
                background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
                box-shadow: 0 6px 20px rgba(99, 102, 241, 0.5);
                color: #fff; 
            }
            .action-btn svg { width: 16px; height: 16px; fill: currentColor; }

            .breakdown-item {
                display: flex; justify-content: space-between; align-items: center;
                padding: 14px 16px;
                background: rgba(6, 182, 212, 0.08); 
                border: 1px solid rgba(6, 182, 212, 0.15);
                border-radius: 10px; margin-bottom: 8px;
                font-size: 14px;
                gap: 12px;
            }
            .breakdown-item span:first-child {
                color: rgba(255, 255, 255, 0.85); font-weight: 500;
                word-break: break-word;
                overflow-wrap: anywhere;
                flex: 1;
            }
            .breakdown-item span:last-child {
                color: #ffffff; font-weight: 700;
                word-break: break-word;
                overflow-wrap: anywhere;
                text-align: right;
                flex-shrink: 0;
            }

            .result-metrics {
                margin-top: 20px;
                display: grid;
                grid-template-columns: repeat(2, minmax(0, 1fr));
                gap: 12px;
            }
            .metric-card {
                background: linear-gradient(145deg, rgba(99, 102, 241, 0.12), rgba(99, 102, 241, 0.05));
                border: 1px solid rgba(99, 102, 241, 0.25);
                border-radius: 14px;
                padding: 16px 18px;
                text-align: left;
                transition: transform 0.2s ease, border-color 0.2s ease;
                min-height: 70px;
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
            .metric-card:hover {
                transform: translateY(-2px);
                border-color: rgba(99, 102, 241, 0.4);
            }
            .metric-label {
                font-size: 11px;
                color: rgba(255, 255, 255, 0.7);
                text-transform: uppercase;
                letter-spacing: 0.1em;
                margin-bottom: 8px;
                font-weight: 600;
                word-break: break-word;
                overflow-wrap: anywhere;
                line-height: 1.4;
            }
            .metric-value {
                font-size: 20px;
                font-weight: 800;
                line-height: 1.2;
                color: #ffffff;
                word-break: break-word;
                overflow-wrap: anywhere;
            }

            /* Toast Notification */
            /* Toast Notification - Enhanced Visibility */
            .toast {
                position: fixed; 
                bottom: 30px; 
                left: 50%; 
                transform: translateX(-50%) translateY(50px);
                background: rgba(16, 185, 129, 0.95); 
                color: white; 
                padding: 12px 24px; 
                border-radius: 50px;
                font-size: 14px; 
                font-weight: 600; 
                opacity: 0; 
                pointer-events: none;
                transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                box-shadow: 0 10px 30px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.1); 
                z-index: 9999; 
                display: flex; 
                align-items: center; 
                gap: 10px;
                backdrop-filter: blur(8px);
                width: max-content;
                max-width: 90vw;
            }
            .toast.visible { 
                opacity: 1; 
                transform: translateX(-50%) translateY(0); 
                pointer-events: auto;
            }

            .metric-help {
                display: inline-flex; align-items: center; justify-content: center;
                width: 14px; height: 14px; border-radius: 50%;
                background: rgba(255,255,255,0.2);
                color: rgba(255,255,255,0.8);
                font-size: 9px; margin-left: 6px; cursor: help;
            }

            /* Mobile Responsive Styles */
            @media (max-width: 639px) {
                .calc-container {
                    padding: 24px 20px;
                }

                .calc-header {
                    margin-bottom: 28px;
                }

                .calc-title {
                    font-size: clamp(24px, 6vw, 28px);
                }

                .calc-subtitle {
                    font-size: 14px;
                }

                .calc-fields {
                    grid-template-columns: 1fr;
                    gap: 18px;
                }

                .calc-field:last-child:nth-child(odd) {
                    grid-column: 1;
                }

                .field-label {
                    font-size: 11px;
                }

                input[type="number"], select {
                    font-size: 15px;
                    padding: 14px 16px;
                }

                .input-prefix, .input-suffix, .input-currency-symbol {
                    font-size: 14px;
                    min-width: 24px;
                }

                .has-prefix input, .is-currency-input input {
                    padding-left: 44px !important;
                }

                .has-suffix input {
                    padding-right: 44px !important;
                }

                .calc-result {
                    margin-top: 32px;
                    padding: 24px 20px;
                }

                .result-label {
                    font-size: 11px;
                }

                .result-value {
                    font-size: 32px;
                }

                .result-metrics {
                    gap: 10px;
                }

                .metric-card {
                    padding: 12px 14px;
                    min-height: 65px;
                }

                .metric-label {
                    font-size: 9px;
                    letter-spacing: 0.05em;
                    line-height: 1.3;
                }

                .metric-value {
                    font-size: 14px;
                    line-height: 1.1;
                }

                .breakdown-item {
                    padding: 10px 12px;
                    font-size: 12px;
                    gap: 8px;
                    flex-wrap: wrap;
                }

                .breakdown-item span:first-child {
                    font-size: 11px;
                }

                .breakdown-item span:last-child {
                    font-size: 12px;
                }

                .result-actions {
                    flex-direction: column;
                    gap: 10px;
                    margin-top: 20px;
                }

                .action-btn {
                    width: 100%;
                    justify-content: center;
                    padding: 10px 16px;
                    font-size: 13px;
                }

                .chart-wrapper {
                    height: 180px;
                    margin: 20px 0;
                }
            }
        `;
    }

    getHTML() {
        if (!this.config.title) return `<div class="calc-error">Config Error</div>`;
        const fields = this.config.fields || [];
        const fieldsHTML = fields.map(field => this.renderField(field)).join('');

        return `
            <div class="calc-container" role="form">
                <div class="calc-header">
                    <h2 class="calc-title">${this.escapeHTML(this.config.title)}</h2>
                    ${this.config.subtitle ? `<p class="calc-subtitle">${this.escapeHTML(this.config.subtitle)}</p>` : ''}
                </div>
                
                <div class="calc-fields">${fieldsHTML}</div>
                
                <div class="calc-result" id="result-container">
                    <div class="result-label">${this.escapeHTML(this.config.resultLabel || 'Estimated Payment')}</div>
                    <div class="result-value" id="result-value">--</div>
                    
                    ${this.config.breakdown ? `
                        <div class="chart-wrapper">
                            <canvas id="resultChart"></canvas>
                        </div>
                        <div class="result-breakdown" id="breakdown"></div>
                    ` : ''}

                    ${Array.isArray(this.config.metrics) && this.config.metrics.length ? `
                        <div class="result-metrics" id="metrics"></div>
                    ` : ''}

                    <div id="notices-container" class="calc-notices"></div>
                    
                </div>
                
                <div class="result-actions">
                     <button class="action-btn share-btn" id="share-btn" title="Copy link to this calculation">
                        <svg viewBox="0 0 24 24"><path d="M18 16c-.8 0-1.5.3-2 .8l-7-4c.1-.3.1-.5.1-.8s0-.5-.1-.8l7-4c.5.5 1.2.8 2 .8 1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3c0 .3 0 .5.1.8l-7 4c-.5-.5-1.2-.8-2-.8-1.7 0-3 1.3-3 3s1.3 3 3 3c.8 0 1.5-.3 2-.8l7 4c-.1.3-.1.5-.1.8 0 1.7 1.3 3 3 3s3-1.3 3-3-1.3-3-3-3z"/></svg>
                        Share
                    </button>

                    <button class="action-btn" id="reset-btn">
                        <svg viewBox="0 0 24 24"><path d="M12 4V1L8 5l4 4V6c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6H4c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8z"/></svg>
                        Reset
                    </button>
                    ${this.config.proFeatures?.pdf ? `
                        <button class="action-btn primary-cta" id="pdf-btn">
                            <svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
                            PDF
                        </button>
                    ` : ''}
                </div>
                
                <div id="toast" class="toast">
                    <svg style="width:16px;height:16px;fill:white" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    Link Copied!
                </div>
            </div>
        `;
    }

    renderField(field) {
        const defaultValue = field.default ?? field.min ?? 0;
        if (this.values[field.id] === undefined) this.values[field.id] = defaultValue;
        const currentValue = this.values[field.id];
        const isHidden = this.state.hiddenFields.has(field.id);
        const hiddenAttr = isHidden ? 'hidden' : '';

        // Determine if we should show a slider (Number field with ranges)
        const showSlider = (field.type === 'number' || field.type === 'slider') &&
            field.min !== undefined && field.max !== undefined &&
            !field.hidden;

        let controlHTML = '';

        if (field.type === 'select') {
            const options = field.options.map(opt =>
                `<option value="${opt.value}" ${opt.value == currentValue ? 'selected' : ''}>${this.escapeHTML(opt.label)}</option>`
            ).join('');
            controlHTML = `<select id="${field.id}" data-field-id="${field.id}">${options}</select>`;
        } else {
            const format = field.format;
            const isPercentage = format === 'percent';
            const isCurrency = format === 'currency';
            const hasUnit = Boolean(field.unit) && !isPercentage;

            // Symbols on the left
            const showPrefix = isCurrency;
            const prefixText = isCurrency ? this.getCurrencySymbol() : '';

            // Symbols on the right
            const showSuffix = isPercentage || hasUnit;
            const suffixText = isPercentage ? '%' : (hasUnit ? field.unit : '');

            controlHTML = `
                <div class="input-wrapper ${showPrefix ? 'has-prefix' : ''} ${isCurrency ? 'is-currency-input' : ''}">
                    ${showPrefix ? `<span class="input-prefix">${this.escapeHTML(prefixText)}</span>` : ''}
                    <input type="number" id="${field.id}" value="${currentValue}"
                        min="${field.min || 0}" max="${field.max || 1e9}" step="${field.step || 1}"
                        data-field-id="${field.id}" />
                    
                    ${showSuffix ? `<span class="input-suffix">${this.escapeHTML(suffixText)}</span>` : ''}
                </div>
                ${showSlider ? `
                    <input type="range" id="${field.id}-range" value="${currentValue}"
                        min="${field.min || 0}" max="${field.max}" step="${field.step || 1}"
                        data-sync-id="${field.id}" />
                ` : ''}
            `;
        }

        return `
            <div class="calc-field" ${hiddenAttr} data-id="${field.id}">
                <label class="field-label" for="${field.id}">
                    <span>
                        ${this.escapeHTML(field.label)}
                        ${field.help ? `<span class="field-help" title="${this.escapeHTML(field.help)}" aria-label="${this.escapeHTML(field.help)}">?</span>` : ''}
                    </span>
                    ${field.toggle ? `<a href="#" class="calc-field-toggle" data-target="${field.toggle.target}" data-current="${field.id}">${field.toggle.label}</a>` : ''}
                </label>
                ${controlHTML}
                <div class="field-error-message" data-error-for="${field.id}"></div>
            </div>
        `;
    }

    attachEventListeners() {
        // Input validation and syncing
        this.shadowRoot.querySelectorAll('input, select').forEach(input => {
            if (input.type === 'range') return; // Handled separately

            // Auto-select input value on focus for better UX
            input.addEventListener('focus', (e) => {
                if (e.target.type === 'number') {
                    e.target.select();
                }
            });

            input.addEventListener('input', (e) => {
                this.handleInput(e);
                // Sync slider if exists
                const slider = this.shadowRoot.getElementById(`${e.target.id}-range`);
                if (slider) slider.value = e.target.value;
            });
        });

        // Slider Syncing
        this.shadowRoot.querySelectorAll('input[type="range"]').forEach(slider => {
            slider.addEventListener('input', (e) => {
                const targetId = e.target.dataset.syncId;
                const numberInput = this.shadowRoot.getElementById(targetId);
                if (numberInput) {
                    numberInput.value = e.target.value;
                    // Manually trigger input handler for the number input to run calc logic
                    numberInput.dispatchEvent(new Event('input'));
                }
            });
        });

        // Toggles
        this.shadowRoot.querySelectorAll('.calc-field-toggle').forEach(t => {
            t.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleField(e.target.dataset.target, e.target.dataset.current);
            });
        });

        // Buttons
        const pdfBtn = this.shadowRoot.getElementById('pdf-btn');
        if (pdfBtn) pdfBtn.addEventListener('click', () => this.generatePDF());

        const resetBtn = this.shadowRoot.getElementById('reset-btn');
        if (resetBtn) resetBtn.addEventListener('click', () => this.resetToDefaults());

        const shareBtn = this.shadowRoot.getElementById('share-btn');
        if (shareBtn) shareBtn.addEventListener('click', () => this.shareScenario());

        // Initial Calc
        this.calculate();
    }

    shareScenario() {
        const url = new URL(window.location.href);
        this.config.fields.forEach(field => {
            // Only add if not hidden and is a valid value
            if (this.values[field.id] !== undefined && !this.state.hiddenFields.has(field.id)) {
                url.searchParams.set(field.id, this.values[field.id]);
            }
        });

        navigator.clipboard.writeText(url.toString()).then(() => {
            this.showToast('Link to this calculation copied!');
        }).catch(err => {
            console.error('Failed to copy', err);
        });
    }

    showToast(message) {
        const toast = this.shadowRoot.getElementById('toast');
        if (toast) {
            toast.textContent = message;
            // Re-add icon if needed, but text serves
            toast.innerHTML = `<svg style="width:16px;height:16px;fill:white" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg> ${message}`;
            toast.classList.add('visible');
            setTimeout(() => toast.classList.remove('visible'), 3000);
        }
    }

    handleInput(event) {
        const fieldId = event.target.dataset.fieldId;
        const rawValue = event.target.value;
        const value = parseFloat(rawValue);
        const field = this.config.fields.find(f => f.id === fieldId);

        // Get error elements
        const inputEl = event.target;
        const errorEl = this.shadowRoot.querySelector(`[data-error-for="${fieldId}"]`);

        // Validation
        let errorMessage = '';
        if (rawValue === '' || rawValue === null) {
            errorMessage = '';
            this.values[fieldId] = field?.default ?? 0;
        } else if (isNaN(value)) {
            errorMessage = this.getErrorText('invalidNumber');
            this.values[fieldId] = 0;
        } else if (field?.min !== undefined && value < field.min) {
            errorMessage = this.getErrorText('minValue').replace('{min}', field.min);
            this.values[fieldId] = value;
        } else if (field?.max !== undefined && value > field.max) {
            errorMessage = this.getErrorText('maxValue').replace('{max}', this.formatNumber(field.max));
            this.values[fieldId] = value;
        } else {
            this.values[fieldId] = value;
        }

        // Show/hide error
        if (errorMessage) {
            inputEl.classList.add('input-error');
            if (errorEl) {
                errorEl.textContent = errorMessage;
                errorEl.classList.add('visible');
            }
        } else {
            inputEl.classList.remove('input-error');
            if (errorEl) errorEl.classList.remove('visible');
        }

        this.calculate();
    }

    getErrorText(key) {
        const errors = {
            invalidNumber: {
                en: 'Please enter a valid number',
                es: 'Ingresa un número válido',
                de: 'Bitte geben Sie eine gültige Zahl ein',
                fr: 'Veuillez entrer un nombre valide',
                pt: 'Digite um número válido',
                it: 'Inserisci un numero valido',
                nl: 'Voer een geldig nummer in',
                pl: 'Wprowadź prawidłową liczbę',
                sv: 'Ange ett giltigt nummer',
                no: 'Skriv inn et gyldig tall',
                da: 'Indtast et gyldigt nummer',
                fi: 'Anna kelvollinen numero'
            },
            minValue: {
                en: 'Minimum value is {min}',
                es: 'El valor mínimo es {min}',
                de: 'Mindestwert ist {min}',
                fr: 'La valeur minimale est {min}',
                pt: 'O valor mínimo é {min}',
                it: 'Il valore minimo è {min}',
                nl: 'Minimumwaarde is {min}',
                pl: 'Minimalna wartość to {min}',
                sv: 'Minsta värdet är {min}',
                no: 'Minimumsverdi er {min}',
                da: 'Minimumsværdi er {min}',
                fi: 'Minimiarvo on {min}'
            },
            maxValue: {
                en: 'Maximum value is {max}',
                es: 'El valor máximo es {max}',
                de: 'Maximalwert ist {max}',
                fr: 'La valeur maximale est {max}',
                pt: 'O valor máximo é {max}',
                it: 'Il valore massimo è {max}',
                nl: 'Maximumwaarde is {max}',
                pl: 'Maksymalna wartość to {max}',
                sv: 'Största värdet är {max}',
                no: 'Maksimumsverdi er {max}',
                da: 'Maksimumsværdi er {max}',
                fi: 'Maksimiarvo on {max}'
            }
        };
        return errors[key]?.[this.lang] || errors[key]?.['en'] || '';
    }

    calculate() {
        if (!this.config.formula) return;

        const context = { ...this.values, isActive: (id) => !this.state.hiddenFields.has(id) };
        const result = this.evaluateFormula(this.config.formula, context);

        // Update Result
        const resultEl = this.shadowRoot.getElementById('result-value');
        if (resultEl) resultEl.textContent = this.formatValue(result, this.config.resultFormat ?? 'currency');

        // Update Breakdown & Chart
        if (this.config.breakdown) {
            const breakdownData = this.config.breakdown.map(item => ({
                label: item.label[this.config.lang || 'en'] || item.label, // Handle lang obj or string
                value: this.evaluateFormula(item.formula, { ...context, result }),
                format: item.format
            }));

            // Render List
            const listEl = this.shadowRoot.getElementById('breakdown');
            if (listEl) {
                listEl.innerHTML = breakdownData.map(item => `
                <div class="breakdown-item">
                        <span>${item.label}</span>
                        <span style="font-weight:700">${this.formatValue(item.value, item.format ?? 'currency')}</span>
                    </div>
                `).join('');
            }

            // Update Chart
            this.updateChart(breakdownData);
        }

        // Metrics
        if (Array.isArray(this.config.metrics) && this.config.metrics.length) {
            const metricsData = this.config.metrics
                .filter(item => !item.condition || this.evaluateFormula(item.condition, { ...context, result }))
                .map(item => ({
                    label: item.label[this.config.lang || 'en'] || item.label,
                    value: this.evaluateFormula(item.formula, { ...context, result }),
                    format: item.format,
                    tooltip: item.tooltip ? (item.tooltip[this.config.lang || 'en'] || item.tooltip) : null
                }));

            const metricsEl = this.shadowRoot.getElementById('metrics');
            if (metricsEl) {
                metricsEl.innerHTML = metricsData.map(item => `
                <div class="metric-card" ${item.tooltip ? `title="${this.escapeHTML(item.tooltip)}"` : ''}>
                        <div class="metric-label">
                            ${this.escapeHTML(item.label)} 
                            ${item.tooltip ? `<span class="metric-help">?</span>` : ''}
                        </div>
                        <div class="metric-value">${this.formatValue(item.value, item.format ?? 'number')}</div>
                    </div>
                `).join('');

                // Add click listeners for mobile-friendly tooltips
                metricsEl.querySelectorAll('.metric-card').forEach(card => {
                    card.addEventListener('click', () => {
                        const tooltip = card.getAttribute('title');
                        if (tooltip) this.showToast(tooltip);
                    });
                });
            }
        }

        // Notices
        if (this.config.notices) {
            const noticesEl = this.shadowRoot.getElementById('notices-container');
            if (noticesEl) {
                const notices = this.config.notices
                    .filter(n => !n.condition || this.evaluateFormula(n.condition, { ...context, result }))
                    .map(n => {
                        // Simple template interpolation for specific variables if needed, 
                        // but primarily just render the message.
                        let msg = n.message[this.config.lang || 'en'] || n.message;
                        // Basic interpolation for ${result} or fixed variables could go here if we implemented a parser,
                        // but for now we rely on pre-calculated logic or simple strings to avoid the user's issue.
                        // We will replace basic ${result} pattern manually if found.
                        msg = msg.replace(/\${Math.abs\(result\).toLocaleString\(\)}/g, this.formatValue(Math.abs(result), 'currency'));
                        return `<div class="notice-item ${n.type}">${this.escapeHTML(msg)}</div>`;
                    });
                noticesEl.innerHTML = notices.join('');
            }
        }
    }

    updateChart(data) {
        const canvas = this.shadowRoot.getElementById('resultChart');
        if (!canvas) return;

        if (!window.Chart) {
            this.pendingChartData = data;
            this.chartInitAttempts = (this.chartInitAttempts || 0) + 1;
            if (this.chartInitAttempts <= 20) {
                clearTimeout(this.chartInitRetry);
                this.chartInitRetry = setTimeout(() => {
                    this.chartInitRetry = null;
                    this.updateChart(this.pendingChartData || data);
                }, 200);
            }
            return;
        }

        this.chartInitAttempts = 0;
        this.pendingChartData = null;

        const chartColors = ['#6366f1', '#8b5cf6', '#3b82f6', '#0ea5e9', '#06b6d4', '#14b8a6'];
        const values = data.map(d => Math.max(0, d.value)); // No negatives
        const labels = data.map(d => d.label);

        if (this.chart) {
            this.chart.data.labels = labels;
            this.chart.data.datasets[0].data = values;
            this.chart.update();
        } else {
            const ctx = canvas.getContext('2d');
            this.chart = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: labels,
                    datasets: [{
                        data: values,
                        backgroundColor: chartColors,
                        borderWidth: 0,
                        hoverOffset: 4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false },
                        tooltip: {
                            callbacks: {
                                label: (ctx) => {
                                    const item = data?.[ctx.dataIndex];
                                    const formatted = this.formatValue(ctx.raw, item?.format ?? 'currency');
                                    return ` ${ctx.label}: ${formatted} `;
                                }
                            }
                        }
                    },
                    cutout: '70%'
                }
            });
        }
    }

    async generatePDF() {
        if (!window.jspdf) {
            alert('PDF Generator is initializing. Please wait 2 seconds...');
            return;
        }

        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        const title = this.config.title;
        const date = new Date().toLocaleDateString();

        // Header
        doc.setFontSize(22);
        doc.setTextColor(99, 102, 241); // Primary Color
        doc.text("CalcKit Report", 14, 20);

        doc.setFontSize(14);
        doc.setTextColor(60);
        doc.text(title, 14, 30);
        doc.setFontSize(10);
        doc.text(`Generated: ${date} `, 14, 36);

        // Inputs Section
        doc.setFontSize(12);
        doc.setTextColor(0);
        doc.text("Input Parameters", 14, 50);

        const inputBody = this.config.fields
            .filter(f => !this.state.hiddenFields.has(f.id))
            .map(f => [f.label[this.config.lang || 'en'] || f.label, this.formatFieldValue(f, this.values[f.id])]);

        doc.autoTable({
            startY: 55,
            head: [['Parameter', 'Value']],
            body: inputBody,
            theme: 'grid',
            headStyles: { fillColor: [99, 102, 241] }
        });

        // Results Section
        const resultY = doc.lastAutoTable.finalY + 15;
        doc.setFontSize(12);
        doc.text("Results", 14, resultY);

        // Calculate Breakdown Data
        const context = { ...this.values, result: 0, isActive: (id) => !this.state.hiddenFields.has(id) };
        const result = this.evaluateFormula(this.config.formula, context);
        context.result = result;

        doc.setFontSize(18);
        doc.setTextColor(0, 150, 0);
        const resultLabel = this.config.resultLabel || 'Result';
        const resultText = `${resultLabel}: ${this.formatValue(result, this.config.resultFormat ?? 'currency')} `;
        doc.text(resultText, 14, resultY + 10);

        if (this.config.breakdown) {
            const breakdownData = this.config.breakdown.map(item => [
                item.label[this.config.lang || 'en'] || item.label,
                this.formatValue(this.evaluateFormula(item.formula, context), item.format ?? 'currency')
            ]);

            doc.autoTable({
                startY: resultY + 15,
                head: [['Item', 'Value']],
                body: breakdownData,
                theme: 'striped'
            });
        }

        if (Array.isArray(this.config.metrics) && this.config.metrics.length) {
            const metricsData = this.config.metrics.map(item => [
                item.label[this.config.lang || 'en'] || item.label,
                this.formatValue(this.evaluateFormula(item.formula, context), item.format ?? 'number')
            ]);

            const metricsY = doc.lastAutoTable?.finalY ? (doc.lastAutoTable.finalY + 12) : (resultY + 20);
            doc.setFontSize(12);
            doc.setTextColor(0);
            doc.text("Key Metrics", 14, metricsY);

            doc.autoTable({
                startY: metricsY + 5,
                head: [['Metric', 'Value']],
                body: metricsData,
                theme: 'striped'
            });
        }

        // Footer
        doc.setFontSize(8);
        doc.setTextColor(150);
        doc.text("Generated by CalcKit", 14, 280);

        doc.save(`${title.replace(/ /g, '_')} _Report.pdf`);
    }

    // Helpers
    evaluateFormula(formula, context) {
        try {
            const func = new Function(...Object.keys(context), `return ${formula}; `);
            return func(...Object.values(context));
        } catch (e) { return NaN; }
    }

    formatCurrency(val) {
        if (!Number.isFinite(val)) return '--';
        // Remove .00 for whole numbers to reduce clutter
        const isWholeNumber = val === Math.floor(val);
        return new Intl.NumberFormat(this.config.locale || 'en-US', {
            style: 'currency',
            currency: this.config.currency || 'USD',
            minimumFractionDigits: isWholeNumber ? 0 : 2,
            maximumFractionDigits: isWholeNumber ? 0 : 2
        }).format(val);
    }

    formatNumber(val, options = {}) {
        if (!Number.isFinite(val)) return '--';
        return new Intl.NumberFormat(this.config.locale || 'en-US', options).format(val);
    }

    formatPercent(val, options = {}) {
        if (!Number.isFinite(val)) return '--';
        const maximumFractionDigits = options.maximumFractionDigits ?? 2;
        const minimumFractionDigits = options.minimumFractionDigits ?? 0;
        return `${this.formatNumber(val, { maximumFractionDigits, minimumFractionDigits })}% `;
    }

    normalizeFormat(format) {
        if (format === undefined || format === null) return null;
        if (typeof format === 'string') return { type: format };
        if (typeof format === 'object') return format;
        return null;
    }

    formatValue(val, format) {
        if (!Number.isFinite(val)) return '--';
        const spec = this.normalizeFormat(format) || this.normalizeFormat(this.config.resultFormat) || { type: 'currency' };

        if (spec.type === 'currency') return this.formatCurrency(val);
        if (spec.type === 'percent') return this.formatPercent(val, spec);
        if (spec.type === 'number') return this.formatNumber(val, spec);
        if (spec.type === 'unit') {
            const unit = spec.unit || '';
            const formatted = this.formatNumber(val, spec);
            return unit ? `${formatted} ${unit} ` : formatted;
        }

        return this.formatNumber(val);
    }

    formatFieldValue(field, val) {
        const spec = this.normalizeFormat(field?.format) || { type: 'number' };
        let formatted = this.formatValue(val, spec);
        if (!field?.unit || formatted === '--') return formatted;

        if (spec.type === 'percent') return formatted;
        if (spec.type === 'currency') return `${formatted}/${field.unit}`;
        return `${formatted} ${field.unit}`;
    }

    resolveText(value) {
        if (value === undefined || value === null) return '';
        if (typeof value === 'string') return value;
        if (typeof value === 'object') {
            const lang = this.lang || 'en';
            if (value[lang]) return value[lang];
            if (value.en) return value.en;
            const fallback = Object.values(value).find(val => typeof val === 'string');
            return fallback || '';
        }
        return String(value);
    }

    getCurrencySymbol() {
        if (this.config.currencySymbol) return this.config.currencySymbol;
        try {
            const formatter = new Intl.NumberFormat(this.config.locale || 'en-US', {
                style: 'currency',
                currency: this.config.currency || 'USD',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
            });
            // Get the formatted string and remove the digits and separators to isolate the symbol
            const formatted = formatter.format(0);
            return formatted.replace(/[0-9\s.,]/g, '').trim() || '$';
        } catch (e) {
            return '$';
        }
    }

    escapeHTML(str) {
        if (typeof str !== 'string') return str;
        return str.replace(/[&<>'"]/g, tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag]));
    }

    decodeHtml(html) {
        const txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    }

    toggleField(targetId, currentId) {
        this.state.hiddenFields.delete(targetId);
        this.state.hiddenFields.add(currentId);
        this.render();
        this.attachEventListeners();
    }

    updateConfig(updates) {
        if (!updates) return;
        this.config = { ...this.config, ...updates };

        // Update lang if changed
        if (updates.lang) this.lang = updates.lang;

        // Re-render essentially everything
        this.render();
        this.attachEventListeners();

        // Recalculate
        this.calculate();
    }

    resetToDefaults() {
        if (!this.defaults) return;

        // Reset to cached default values
        this.values = { ...this.defaults.values };
        this.state.hiddenFields = new Set(this.defaults.hiddenFields);

        // Update all input elements in the shadow DOM to match defaults
        this.config.fields.forEach(field => {
            const input = this.shadowRoot.getElementById(field.id);
            const slider = this.shadowRoot.getElementById(`${field.id}-range`);
            const defaultVal = this.defaults.values[field.id];

            if (input) {
                input.value = defaultVal;
                input.classList.remove('input-error');
            }
            if (slider) {
                slider.value = defaultVal;
            }

            // Clear any error messages
            const errorEl = this.shadowRoot.querySelector(`[data-error-for="${field.id}"]`);
            if (errorEl) errorEl.classList.remove('visible');

            // Handle visibility
            const fieldEl = this.shadowRoot.querySelector(`[data-id="${field.id}"]`);
            if (fieldEl) {
                if (this.state.hiddenFields.has(field.id)) {
                    fieldEl.setAttribute('hidden', '');
                } else {
                    fieldEl.removeAttribute('hidden');
                }
            }
        });

        // Recalculate with new values
        this.calculate();

        // Show confirmation toast
        this.showToast('Reset to defaults');
    }
}

customElements.define('calckit-calculator', CalcKitCalculator);

// Mount helper for pages that provide config via window.calcConfig.
window.mountCalcKit = async function mountCalcKit() {
    const container = document.getElementById('calculator-container');
    if (!container) return;

    let wrapper = container.querySelector('.calckit-calculator');
    if (!wrapper) {
        if (!window.calcConfig) return;
        wrapper = document.createElement('div');
        wrapper.className = 'calckit-calculator';
        wrapper.dataset.theme = 'dark';
        wrapper.dataset.config = JSON.stringify(window.calcConfig);
        container.appendChild(wrapper);
    } else if (!wrapper.dataset.config && window.calcConfig) {
        wrapper.dataset.config = JSON.stringify(window.calcConfig);
    }

    if (wrapper.querySelector('calckit-calculator')) return;

    // Ensure custom element is defined before creating it
    await customElements.whenDefined('calckit-calculator');

    // Use the constructor directly to ensure proper initialization with shadow DOM
    const CalcKitClass = customElements.get('calckit-calculator');
    let calculatorElement = null;

    if (CalcKitClass) {
        try {
            calculatorElement = new CalcKitClass();
        } catch (e) {
            console.error('[CalcKit] Component creation failed', e);
        }
    } else {
        // Fallback: try document.createElement
        try {
            calculatorElement = document.createElement('calckit-calculator');
        } catch (error) {
            console.error('CalcKit: Failed to create element', error);
            return;
        }
    }

    if (calculatorElement) {
        wrapper.appendChild(calculatorElement);
    }
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => window.mountCalcKit());
} else {
    window.mountCalcKit();
}
