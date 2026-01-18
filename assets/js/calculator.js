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
    }

    connectedCallback() {
        try {
            const configAttr = this.closest('.calckit-calculator')?.dataset.config;
            const decodedConfig = this.decodeHtml(configAttr);
            this.config = JSON.parse(decodedConfig || '{}');
            this.theme = this.closest('.calckit-calculator')?.dataset.theme || 'light';

            if (this.config.fields) {
                // Parse URL Parameters for Deep Linking
                const urlParams = new URLSearchParams(window.location.search);

                this.config.fields.forEach(field => {
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
            script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
            script.async = true;
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
            
            .calc-field { margin-bottom: 28px; position: relative; }
            
            .field-label {
                display: flex; justify-content: space-between; align-items: center;
                font-weight: 600; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em;
                color: ${this.theme === 'dark' ? 'var(--text-muted-dark)' : '#4b5563'};
                margin-bottom: 12px;
            }
            
            .input-wrapper { position: relative; display: flex; align-items: center; }
            .input-prefix, .input-suffix {
                position: absolute; color: ${this.theme === 'dark' ? '#9ca3af' : '#6b7280'};
                font-weight: 500; font-size: 15px; pointer-events: none; z-index: 1;
            }
            .input-prefix { left: 16px; }
            .input-suffix { right: 16px; }
            .has-prefix input { padding-left: 36px; }
            .has-suffix input { padding-right: 40px; }
            
            .field-help {
                display: inline-flex; align-items: center; justify-content: center;
                width: 18px; height: 18px; border-radius: 50%;
                background: ${this.theme === 'dark' ? '#374151' : '#e5e7eb'};
                color: ${this.theme === 'dark' ? '#9ca3af' : '#6b7280'};
                font-size: 11px; font-weight: 700; margin-left: 8px; cursor: help;
            }
            
            .calc-result {
                margin-top: 40px; padding: 36px 32px;
                background: linear-gradient(145deg, rgba(79, 70, 229, 1) 0%, rgba(139, 92, 246, 0.95) 50%, rgba(217, 70, 239, 0.9) 100%);
                backdrop-filter: blur(20px); border-radius: 20px; text-align: center; color: #ffffff;
                box-shadow: 0 30px 60px -15px rgba(99, 102, 241, 0.5);
            }
            
            input[type="number"], select {
                width: 100%; padding: 16px 20px;
                border: 1px solid ${this.theme === 'dark' ? 'var(--glass-border)' : '#e5e7eb'};
                border-radius: 14px; font-size: 17px; font-weight: 500;
                background: ${this.theme === 'dark' ? 'var(--surface-dark)' : '#f9fafb'};
                color: ${this.theme === 'dark' ? 'var(--text-dark)' : '#1f2937'};
                box-sizing: border-box;
            }

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
                background: rgba(255, 255, 255, 0.15); border: none; padding: 10px 18px; border-radius: 10px;
                color: white; font-size: 13px; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 8px;
                transition: all 0.2s;
            }
            .action-btn:hover { background: rgba(255, 255, 255, 0.25); transform: translateY(-1px); }
            .action-btn.primary-cta {
                background: linear-gradient(135deg, #10b981 0%, #059669 100%);
                box-shadow: 0 4px 15px rgba(16, 185, 129, 0.4);
            }
             .action-btn.share-btn {
                background: rgba(255, 255, 255, 0.1); border: 1px solid rgba(255, 255, 255, 0.2);
            }
            .action-btn.share-btn:hover { background: rgba(255, 255, 255, 0.2); }
            .action-btn svg { width: 16px; height: 16px; fill: currentColor; }

            .breakdown-item {
                display: flex; justify-content: space-between; padding: 12px 14px;
                background: rgba(255, 255, 255, 0.08); border-radius: 8px; margin-bottom: 8px;
                font-size: 13px;
            }

            /* Toast Notification */
            .toast {
                position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%) translateY(20px);
                background: #10b981; color: white; padding: 10px 20px; border-radius: 30px;
                font-size: 13px; font-weight: 600; opacity: 0; pointer-events: none;
                transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                box-shadow: 0 10px 25px rgba(0,0,0,0.1); z-index: 10; display: flex; align-items: center; gap: 8px;
            }
            .toast.visible { opacity: 1; transform: translateX(-50%) translateY(0); }
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

                    <div id="notices-container" class="calc-notices"></div>
                    
                    <div class="result-actions">
                         <button class="action-btn share-btn" id="share-btn" title="Copy link to this calculation">
                            <svg viewBox="0 0 24 24"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/></svg>
                            Share
                        </button>

                        <button class="action-btn" id="reset-btn">
                            <svg viewBox="0 0 24 24"><path d="M17 6A8 8 0 005 14h2a6 6 0 119-3l-2 2 7 0 0-7z"/></svg> Reset
                        </button>
                        ${this.config.proFeatures?.pdf ? `
                            <button class="action-btn primary-cta" id="pdf-btn">
                                <svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
                                PDF
                            </button>
                        ` : ''}
                    </div>
                </div>
                
                <div id="toast" class="toast">
                    <svg style="width:16px;height:16px;fill:white" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    Link Copied!
                </div>
            </div>
        `;
    }

    renderField(field) {
        let defaultValue = field.default || (field.min || 0);
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
            const isPercentage = field.label.includes('%') || (field.id === 'rate' || field.id === 'taxRate');
            const isCurrency = field.label.includes('$') || (field.id === 'price' || field.id === 'down');

            controlHTML = `
                <div class="input-wrapper ${isPercentage ? 'has-suffix' : ''} ${isCurrency ? 'has-prefix' : ''}">
                    ${isCurrency ? `<span class="input-prefix">${this.config.currencySymbol || '$'}</span>` : ''}
                    <input type="number" id="${field.id}" value="${currentValue}"
                        min="${field.min || 0}" max="${field.max || 1e9}" step="${field.step || 1}"
                        data-field-id="${field.id}" />
                    ${isPercentage ? '<span class="input-suffix">%</span>' : ''}
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
                    <span>${this.escapeHTML(field.label)}</span>
                    ${field.toggle ? `<a href="#" class="calc-field-toggle" data-target="${field.toggle.target}" data-current="${field.id}">${field.toggle.label}</a>` : ''}
                </label>
                ${controlHTML}
            </div>
        `;
    }

    attachEventListeners() {
        // Input validation and syncing
        this.shadowRoot.querySelectorAll('input, select').forEach(input => {
            if (input.type === 'range') return; // Handled separately

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
            toast.innerHTML = `<svg style="width:16px;height:16px;fill:white" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> ${message}`;
            toast.classList.add('visible');
            setTimeout(() => toast.classList.remove('visible'), 3000);
        }
    }

    handleInput(event) {
        const fieldId = event.target.dataset.fieldId;
        const value = parseFloat(event.target.value);
        this.values[fieldId] = isNaN(value) ? 0 : value;
        this.calculate();
    }

    calculate() {
        if (!this.config.formula) return;

        const context = { ...this.values, isActive: (id) => !this.state.hiddenFields.has(id) };
        const result = this.evaluateFormula(this.config.formula, context);

        // Update Result
        const resultEl = this.shadowRoot.getElementById('result-value');
        if (resultEl) resultEl.textContent = this.formatCurrency(result);

        // Update Breakdown & Chart
        if (this.config.breakdown) {
            const breakdownData = this.config.breakdown.map(item => ({
                label: item.label[this.config.lang || 'en'] || item.label, // Handle lang obj or string
                value: this.evaluateFormula(item.formula, { ...context, result })
            }));

            // Render List
            const listEl = this.shadowRoot.getElementById('breakdown');
            if (listEl) {
                listEl.innerHTML = breakdownData.map(item => `
                    <div class="breakdown-item">
                        <span>${item.label}</span>
                        <span style="font-weight:700">${this.formatCurrency(item.value)}</span>
                    </div>
                `).join('');
            }

            // Update Chart
            this.updateChart(breakdownData);
        }

        // Notices
        if (this.config.notices) {
            const noticesEl = this.shadowRoot.getElementById('notices-container');
            if (noticesEl) {
                const notices = this.config.notices
                    .filter(n => !n.condition || this.evaluateFormula(n.condition, { ...context, result }))
                    .map(n => `<div class="notice-item ${n.type}">${n.message[this.config.lang || 'en'] || n.message}</div>`);
                noticesEl.innerHTML = notices.join('');
            }
        }
    }

    updateChart(data) {
        const canvas = this.shadowRoot.getElementById('resultChart');
        if (!canvas || !window.Chart) return;

        const chartColors = ['#6366f1', '#10b981', '#f59e0b', '#ec4899', '#8b5cf6', '#3b82f6'];
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
                                label: (ctx) => ` ${ctx.label}: ${this.formatCurrency(ctx.raw)}`
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
        doc.text(`Generated: ${date}`, 14, 36);

        // Inputs Section
        doc.setFontSize(12);
        doc.setTextColor(0);
        doc.text("Input Parameters", 14, 50);

        const inputBody = this.config.fields
            .filter(f => !this.state.hiddenFields.has(f.id))
            .map(f => [f.label[this.config.lang || 'en'] || f.label, this.values[f.id]]);

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
        doc.text("Payment Breakdown", 14, resultY);

        // Calculate Breakdown Data
        const context = { ...this.values, result: 0, isActive: (id) => !this.state.hiddenFields.has(id) };
        const result = this.evaluateFormula(this.config.formula, context);
        context.result = result;

        doc.setFontSize(18);
        doc.setTextColor(0, 150, 0);
        doc.text(`Total: ${this.formatCurrency(result)} / month`, 14, resultY + 10);

        if (this.config.breakdown) {
            const breakdownData = this.config.breakdown.map(item => [
                item.label[this.config.lang || 'en'] || item.label,
                this.formatCurrency(this.evaluateFormula(item.formula, context))
            ]);

            doc.autoTable({
                startY: resultY + 15,
                head: [['Component', 'Cost']],
                body: breakdownData,
                theme: 'striped'
            });
        }

        // Footer
        doc.setFontSize(8);
        doc.setTextColor(150);
        doc.text("Generated by CalcKit - The Mortgage Calculator Authority", 14, 280);

        doc.save(`${title.replace(/ /g, '_')}_Report.pdf`);
    }

    // Helpers
    evaluateFormula(formula, context) {
        try {
            const func = new Function(...Object.keys(context), `return ${formula};`);
            return func(...Object.values(context));
        } catch (e) { return 0; }
    }

    formatCurrency(val) {
        return new Intl.NumberFormat(this.config.locale || 'en-US', {
            style: 'currency', currency: this.config.currency || 'USD'
        }).format(val);
    }

    formatNumber(val) {
        return new Intl.NumberFormat(this.config.locale || 'en-US').format(val);
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

    resetToDefaults() {
        this.values = {};
        this.state.hiddenFields.clear();
        this.connectedCallback();
    }
}

customElements.define('calckit-calculator', CalcKitCalculator);
