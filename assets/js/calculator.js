/**
 * CalcPress AI - Universal Calculator Engine
 * Web Component based calculator with Shadow DOM
 */

class CalcPressCalculator extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.config = null;
        this.values = {};
        this.state = { hiddenFields: new Set() };
    }

    connectedCallback() {
        try {
            const configAttr = this.closest('.calcpress-calculator')?.dataset.config;
            // Decode HTML entities in the config string before parsing to handle escaped characters from Nunjucks
            const decodedConfig = this.decodeHtml(configAttr);
            this.config = JSON.parse(decodedConfig || '{}');
            this.theme = this.closest('.calcpress-calculator')?.dataset.theme || 'light';

            // Initialize state from config
            if (this.config.fields) {
                this.config.fields.forEach(field => {
                    if (field.hidden) {
                        this.state.hiddenFields.add(field.id);
                    }
                });
            }

            // Function to load Chart.js dynamically if needed
            this.loadChartJs();

            this.render();
            this.attachEventListeners();
        } catch (error) {
            console.error('CalcPress Error:', error);
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
                --primary-glow-intense: rgba(99, 102, 241, 0.7);
                --accent-purple: #a855f7;
                --accent-pink: #ec4899;
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
            }
            
            .calc-header {
                margin-bottom: 40px;
                text-align: center;
            }
            
            .calc-title {
                font-size: 32px;
                font-weight: 800;
                margin: 0 0 12px 0;
                background: linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%);
                background-size: 200% 200%;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                letter-spacing: -0.02em;
                animation: gradientShift 8s ease infinite;
            }
            
            @keyframes gradientShift {
                0%, 100% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
            }
            
            .calc-subtitle {
                font-size: 15px;
                color: ${this.theme === 'dark' ? 'var(--text-muted-dark)' : '#6b7280'};
                margin: 0;
                line-height: 1.6;
            }
            
            .calc-field {
                margin-bottom: 28px;
                position: relative;
            }
            
            .field-label {
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-weight: 600;
                margin-bottom: 12px;
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 0.08em;
                color: ${this.theme === 'dark' ? 'var(--text-muted-dark)' : '#4b5563'};
                padding-left: 2px;
            }
            
            /* Input wrapper for prefix/suffix decorators */
            .input-wrapper {
                position: relative;
                display: flex;
                align-items: center;
            }
            
            .input-prefix,
            .input-suffix {
                position: absolute;
                color: ${this.theme === 'dark' ? '#9ca3af' : '#6b7280'};
                font-weight: 500;
                font-size: 15px;
                pointer-events: none;
                z-index: 1;
            }
            
            .input-prefix {
                left: 16px;
            }
            
            .input-suffix {
                right: 16px;
            }
            
            .has-prefix input {
                padding-left: 36px;
            }
            
            .has-suffix input {
                padding-right: 40px;
            }
            
            /* Help tooltip */
            .field-help {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                width: 18px;
                height: 18px;
                border-radius: 50%;
                background: ${this.theme === 'dark' ? '#374151' : '#e5e7eb'};
                color: ${this.theme === 'dark' ? '#9ca3af' : '#6b7280'};
                font-size: 11px;
                font-weight: 700;
                margin-left: 8px;
                cursor: help;
                position: relative;
                outline: none;
            }
            
            .field-help:hover .tooltip,
            .field-help:focus .tooltip {
                opacity: 1;
                visibility: visible;
                transform: translateY(0);
            }
            
            .field-help:focus {
                box-shadow: 0 0 0 2px var(--primary-glow);
            }
            
            .tooltip {
                position: absolute;
                bottom: calc(100% + 8px);
                left: 50%;
                transform: translateX(-50%) translateY(4px);
                background: ${this.theme === 'dark' ? '#111827' : '#1f2937'};
                color: white;
                padding: 8px 12px;
                border-radius: 8px;
                font-size: 12px;
                font-weight: 400;
                text-transform: none;
                letter-spacing: 0;
                white-space: normal;
                opacity: 0;
                visibility: hidden;
                transition: all 0.2s ease;
                z-index: 100;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                width: max-content;
                max-width: 200px;
                line-height: 1.4;
                text-align: center;
            }
            
            .tooltip::after {
                content: '';
                position: absolute;
                top: 100%;
                left: 50%;
                transform: translateX(-50%);
                border: 6px solid transparent;
                border-top-color: ${this.theme === 'dark' ? '#111827' : '#1f2937'};
            }
            
            input[type="number"],
            select {
                width: 100%;
                padding: 16px 20px;
                border: 1px solid ${this.theme === 'dark' ? 'var(--glass-border)' : '#e5e7eb'};
                border-radius: 14px;
                font-size: 17px;
                font-weight: 500;
                background: ${this.theme === 'dark' ? 'var(--surface-dark)' : '#f9fafb'};
                color: ${this.theme === 'dark' ? 'var(--text-dark)' : '#1f2937'};
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                box-sizing: border-box;
            }
            
            input[type="number"]:hover,
            select:hover {
                border-color: ${this.theme === 'dark' ? 'rgba(99, 102, 241, 0.4)' : '#d1d5db'};
                background: ${this.theme === 'dark' ? '#1e2740' : '#f3f4f6'};
            }
            
            input[type="number"]:focus,
            select:focus {
                outline: none;
                border-color: var(--primary);
                box-shadow: 0 0 0 4px var(--primary-glow), 0 8px 20px rgba(99, 102, 241, 0.2);
                background: ${this.theme === 'dark' ? '#1e2740' : '#ffffff'};
            }
            
            /* Custom select arrow */
            select {
                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%236366f1' viewBox='0 0 16 16'%3E%3Cpath d='M8 11L3 6h10l-5 5z'/%3E%3C/svg%3E");
                background-repeat: no-repeat;
                background-position: right 16px center;
                padding-right: 44px;
                cursor: pointer;
            }
            
            /* Keyboard focus indicator (accessibility) */
            input:focus-visible,
            select:focus-visible {
                outline: 3px solid var(--primary);
                outline-offset: 2px;
            }
            
            input[type="range"] {
                -webkit-appearance: none;
                width: 100%;
                height: 6px;
                background: ${this.theme === 'dark' ? 'rgba(99, 102, 241, 0.2)' : '#e5e7eb'};
                border-radius: 3px;
                outline: none;
                margin-top: 12px;
                cursor: pointer;
            }
            
            /* Range slider with dynamic fill - handled via JS */
            input[type="range"].slider-filled {
                background: linear-gradient(90deg, 
                    var(--primary) 0%, 
                    var(--accent-purple) var(--slider-progress), 
                    ${this.theme === 'dark' ? 'rgba(99, 102, 241, 0.2)' : '#e5e7eb'} var(--slider-progress)
                );
            }
            
            input[type="range"]::-webkit-slider-thumb {
                -webkit-appearance: none;
                width: 22px;
                height: 22px;
                border-radius: 50%;
                background: linear-gradient(145deg, #ffffff 0%, #e0e7ff 100%);
                border: 2px solid var(--primary);
                cursor: grab;
                box-shadow: 0 4px 14px rgba(99, 102, 241, 0.4), 0 0 0 4px rgba(99, 102, 241, 0.1);
                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
            }
            
            input[type="range"]::-webkit-slider-thumb:hover {
                transform: scale(1.1);
                box-shadow: 0 6px 20px rgba(99, 102, 241, 0.5), 0 0 0 6px rgba(99, 102, 241, 0.15);
            }
            
            input[type="range"]::-webkit-slider-thumb:active {
                cursor: grabbing;
                transform: scale(1.0);
                box-shadow: 0 2px 10px rgba(99, 102, 241, 0.5);
            }
            
            input[type="range"]::-moz-range-thumb {
                width: 22px;
                height: 22px;
                border-radius: 50%;
                background: linear-gradient(145deg, #ffffff 0%, #e0e7ff 100%);
                border: 2px solid var(--primary);
                cursor: grab;
                box-shadow: 0 4px 14px rgba(99, 102, 241, 0.4);
            }
            
            .range-value {
                font-weight: 700;
                color: var(--primary-light);
                font-size: 17px;
                background: ${this.theme === 'dark' ? 'rgba(99, 102, 241, 0.18)' : 'rgba(99, 102, 241, 0.1)'};
                padding: 6px 16px;
                border-radius: 20px;
                transition: all 0.2s ease;
                border: 1px solid rgba(99, 102, 241, 0.2);
            }

            /* Slider Bounce Animation */
            @keyframes knobBounce {
                0% { transform: scale(1); }
                50% { transform: scale(1.3); }
                100% { transform: scale(1); }
            }

            .slider-bounce::-webkit-slider-thumb {
                animation: knobBounce 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            }
            .slider-bounce::-moz-range-thumb {
                animation: knobBounce 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            }

            /* Conditional Notices */
            .calc-notices {
                margin-top: 24px;
                display: flex;
                flex-direction: column;
                gap: 12px;
                text-align: left;
            }

            .notice-item {
                padding: 12px 16px;
                border-radius: 12px;
                font-size: 14px;
                line-height: 1.5;
                animation: fadeInUp 0.4s ease;
                display: flex;
                gap: 12px;
                align-items: flex-start;
            }

            .notice-item.info {
                background: rgba(59, 130, 246, 0.1);
                border: 1px solid rgba(59, 130, 246, 0.2);
                color: ${this.theme === 'dark' ? '#93c5fd' : '#1d4ed8'};
            }

            .notice-item.warning {
                background: rgba(245, 158, 11, 0.1);
                border: 1px solid rgba(245, 158, 11, 0.2);
                color: ${this.theme === 'dark' ? '#fcd34d' : '#b45309'};
            }

            .notice-icon {
                font-size: 16px;
                flex-shrink: 0;
                margin-top: 2px;
            }

            @keyframes fadeInUp {
                from { opacity: 0; transform: translateY(10px); }
                to { opacity: 1; transform: translateY(0); }
            }

            
            /* Glassmorphism Result Container */
            .calc-result {
                margin-top: 40px;
                padding: 36px 32px;
                background: linear-gradient(145deg, rgba(79, 70, 229, 1) 0%, rgba(139, 92, 246, 0.95) 50%, rgba(217, 70, 239, 0.9) 100%);
                backdrop-filter: blur(20px);
                -webkit-backdrop-filter: blur(20px);
                border-radius: 20px;
                text-align: center;
                color: #ffffff;
                box-shadow: 
                    0 30px 60px -15px rgba(99, 102, 241, 0.5),
                    0 0 60px rgba(139, 92, 246, 0.3),
                    inset 0 1px 0 rgba(255, 255, 255, 0.25);
                position: relative;
                overflow: hidden;
                border: 1px solid rgba(255, 255, 255, 0.15);
                opacity: 1;
                transition: opacity 0.3s ease, transform 0.3s ease;
            }
            
            .calc-result.initializing {
                opacity: 0.7;
            }
            
            .calc-result.calculating {
                animation: pulse 0.5s ease;
            }
            
            @keyframes pulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.01); }
            }
            
            .calc-result::before {
                content: '';
                position: absolute;
                top: -50%;
                left: -50%;
                width: 200%;
                height: 200%;
                background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.2) 0%, transparent 50%);
                pointer-events: none;
                animation: shimmer 12s linear infinite;
            }
            
            @keyframes shimmer {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
            
            /* Sparkle effect on result card */
            @keyframes sparkle {
                0%, 100% { opacity: 0; transform: scale(0) translate(0, 0); }
                20% { opacity: 1; transform: scale(1) translate(-10px, -10px); }
                50% { opacity: 0.5; transform: scale(0.5) translate(10px, 5px); }
                80% { opacity: 1; transform: scale(1) translate(-5px, 10px); }
            }
            
            .calc-result::after {
                content: '✦';
                position: absolute;
                top: 18px;
                right: 24px;
                font-size: 18px;
                color: rgba(255, 255, 255, 0.5);
                animation: sparkle 4s ease-in-out infinite;
                pointer-events: none;
            }
            
            .result-label {
                font-size: 13px;
                text-transform: uppercase;
                letter-spacing: 2.5px;
                font-weight: 700;
                opacity: 0.9;
                margin-bottom: 10px;
                position: relative;
            }
            
            .result-value {
                font-size: 52px;
                font-weight: 800;
                margin: 0;
                line-height: 1.15;
                text-shadow: 0 6px 30px rgba(0,0,0,0.35);
                transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s ease;
                position: relative;
                letter-spacing: -0.02em;
            }
            
            .result-value.updating {
                transform: scale(1.02);
                opacity: 0.9;
            }
            
            .chart-container {
                position: relative;
                height: 200px;
                margin: 24px 0;
                padding: 16px;
                background: rgba(255, 255, 255, 0.06);
                border-radius: 14px;
            }
            
            .result-breakdown {
                margin-top: 24px;
                padding-top: 24px;
                border-top: 1px solid rgba(255,255,255,0.18);
            }
            
            .breakdown-item {
                display: flex;
                justify-content: space-between;
                padding: 14px 18px;
                opacity: 0.95;
                font-size: 14px;
                background: rgba(255, 255, 255, 0.08);
                border-radius: 10px;
                margin-bottom: 8px;
                transition: all 0.25s ease;
                border-left: 3px solid transparent;
            }
            
            .breakdown-item:hover {
                background: rgba(255, 255, 255, 0.14);
                border-left-color: rgba(255, 255, 255, 0.6);
            }
            
            .breakdown-item:last-child {
                margin-bottom: 0;
            }
            
            /* Breakdown item visual hierarchy */
            .breakdown-item:first-child {
                background: rgba(255, 255, 255, 0.15);
                font-weight: 600;
                border-left-color: #10b981;
            }
            
            .breakdown-item .item-value {
                font-weight: 700;
                font-variant-numeric: tabular-nums;
            }
            
            /* Loading Spinner */
            .calcpress-loader {
                display: flex;
                align-items: center;
                padding: 60px;
            }
            
            .calcpress-spinner {
                width: 48px;
                height: 48px;
                border: 4px solid rgba(99, 102, 241, 0.1);
                border-left-color: var(--primary);
                border-radius: 50%;
                animation: spin 0.8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
            }
            
            @keyframes spin {
                to { transform: rotate(360deg); }
            }
            
            /* Enhanced Error State */
            .calc-error {
                background: linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(239, 68, 68, 0.05) 100%);
                border: 2px dashed var(--error);
                border-radius: 16px;
                padding: 32px;
                text-align: center;
            }
            
            .calc-error-icon {
                font-size: 48px;
                margin-bottom: 16px;
            }
            
            .calc-error-title {
                color: var(--error);
                font-size: 18px;
                font-weight: 600;
                margin: 0 0 8px 0;
            }
            
            .calc-error-message {
                color: ${this.theme === 'dark' ? '#9ca3af' : '#6b7280'};
                font-size: 14px;
                margin: 0;
            }
            
            /* Screen reader only text */
            .sr-only {
                position: absolute;
                width: 1px;
                height: 1px;
                padding: 0;
                margin: -1px;
                overflow: hidden;
                clip: rect(0, 0, 0, 0);
                white-space: nowrap;
                border: 0;
            }
            
            /* Action Buttons in Result */
            .result-actions {
                margin-top: 24px;
                display: flex;
                justify-content: center;
                gap: 12px;
            }
            
            .action-btn {
                background: rgba(255, 255, 255, 0.15);
                border: none;
                padding: 8px 16px;
                border-radius: 8px;
                color: white;
                font-size: 13px;
                font-weight: 500;
                cursor: pointer;
                transition: all 0.2s ease;
                display: flex;
                align-items: center;
                gap: 6px;
            }
            
            .action-btn:hover {
                background: rgba(255, 255, 255, 0.25);
                transform: translateY(-1px);
            }
            
            .action-btn svg {
                width: 16px;
                height: 16px;
                fill: currentColor;
            }
            
            /* Primary CTA button with glow pulse */
            .action-btn.primary-cta {
                background: linear-gradient(135deg, #10b981 0%, #059669 100%);
                border: none;
                font-weight: 600;
                animation: ctaPulse 2s ease-in-out infinite;
                box-shadow: 0 4px 15px rgba(16, 185, 129, 0.4);
            }
            
            .action-btn.primary-cta:hover {
                transform: translateY(-2px) scale(1.02);
                box-shadow: 0 6px 20px rgba(16, 185, 129, 0.5);
            }
            
            @keyframes ctaPulse {
                0%, 100% { box-shadow: 0 4px 15px rgba(16, 185, 129, 0.4); }
                50% { box-shadow: 0 4px 25px rgba(16, 185, 129, 0.6); }
            }
            
            /* Breakdown item with info tooltip */
            .breakdown-item .item-info {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                width: 14px;
                height: 14px;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.2);
                color: rgba(255, 255, 255, 0.8);
                font-size: 9px;
                font-weight: 700;
                margin-left: 6px;
                cursor: help;
                position: relative;
            }
            
            .breakdown-item .item-info:hover .breakdown-tooltip {
                opacity: 1;
                visibility: visible;
            }
            
            .breakdown-tooltip {
                position: absolute;
                bottom: calc(100% + 8px);
                left: 50%;
                transform: translateX(-50%);
                background: rgba(0, 0, 0, 0.9);
                color: white;
                padding: 6px 10px;
                border-radius: 6px;
                font-size: 11px;
                font-weight: 400;
                white-space: normal;
                width: max-content;
                max-width: 180px;
                text-align: center;
                opacity: 0;
                visibility: hidden;
                transition: all 0.2s ease;
                z-index: 100;
            }
            
            /* Highlight zero/conditional values */
            .breakdown-item.is-zero {
                opacity: 0.5;
            }
            
            .breakdown-item.is-highlighted {
                background: rgba(16, 185, 129, 0.2);
                border-left: 3px solid #10b981;
            }
            
            /* Negative values (savings, credits) */
            .item-value.is-negative {
                color: #10b981;
            }
            
            .item-value.is-negative::before {
                content: "-";
            }
            
            /* Dynamic border colors for breakdown items are handled via inline styles now */
            .breakdown-item {
                border-left: 3px solid transparent; /* Default */
            }
            
            @media print {
                :host {
                    position: static;
                }
                .calc-container {
                    box-shadow: none;
                    border: 1px solid #ddd;
                    max-width: none;
                    color: black !important;
                    background: white !important;
                }
                .calc-title, .field-label {
                    color: black !important;
                    background: none !important;
                    -webkit-text-fill-color: black !important;
                }
                .calc-result {
                    background: none !important;
                    color: black !important;
                    border: 1px solid #ddd;
                    break-inside: avoid;
                    box-shadow: none;
                }
                .result-value {
                    color: black !important;
                }
                .result-actions, input, select {
                    display: none !important;
                }
                /* Show values instead of inputs for print */
                .calc-field::after {
                    content: attr(data-print-value);
                    display: block;
                    font-weight: bold;
                    margin-top: 4px;
                }
            }

            /* Live region for result announcements */
            .result-announcement {
                position: absolute;
                left: -10000px;
                width: 1px;
                height: 1px;
                overflow: hidden;
            }

            @media (max-width: 640px) {
                .calc-container {
                    padding: 24px 20px;
                    border-radius: 16px;
                    margin: 0 8px;
                }
                
                .calc-title {
                    font-size: 24px;
                }
                
                .calc-subtitle {
                    font-size: 14px;
                }
                
                .calc-field {
                    margin-bottom: 24px;
                }
                
                .field-label {
                    font-size: 11px;
                    margin-bottom: 10px;
                }
                
                .result-value {
                    font-size: 36px;
                }
                
                .calc-result {
                    padding: 28px 20px;
                    border-radius: 16px;
                    margin-top: 32px;
                }
                
                .result-label {
                    font-size: 11px;
                    letter-spacing: 2px;
                }
                
                .breakdown-item {
                    padding: 12px 14px;
                    font-size: 13px;
                    border-radius: 8px;
                }
                
                input[type="number"],
                select {
                    padding: 14px 16px;
                    font-size: 16px; /* Prevents zoom on iOS */
                    border-radius: 12px;
                }
                
                .range-value {
                    font-size: 14px;
                    padding: 4px 12px;
                }
            }
            
            /* Extra small screens */
            @media (max-width: 380px) {
                .calc-container {
                    padding: 20px 16px;
                }
                
                .calc-title {
                    font-size: 22px;
                }
                
                .result-value {
                    font-size: 32px;
                }
                
                .breakdown-item {
                    flex-direction: column;
                    gap: 4px;
                    text-align: left;
                }
                
                .breakdown-item .item-value {
                    align-self: flex-start;
                }
            }
            
            /* Reduced motion preference */
            @media (prefers-reduced-motion: reduce) {
                *, *::before, *::after {
                    animation-duration: 0.01ms !important;
                    animation-iteration-count: 1 !important;
                    transition-duration: 0.01ms !important;
                }
            }

            /* Field Toggle Link */
            .calc-field-toggle {
                font-size: 11px;
                color: var(--primary);
                cursor: pointer;
                text-decoration: none;
                margin-left: 8px;
                opacity: 0.8;
                font-weight: 500;
                transition: opacity 0.2s;
            }

            .calc-field-toggle:hover {
                opacity: 1;
                text-decoration: underline;
            }
            
            .calc-field[hidden] {
                display: none;
            }
        `;
    }

    getHTML() {
        if (!this.config.title) {
            return `
                <div class="calc-error">
                    <div class="calc-error-icon">⚠️</div>
                    <h3 class="calc-error-title">Configuration Missing</h3>
                    <p class="calc-error-message">No calculator configuration found. Please check your setup.</p>
                </div>
            `;
        }

        const fields = this.config.fields || [];
        const fieldsHTML = fields.map(field => this.renderField(field)).join('');

        return `
            <div class="calc-container" role="form" aria-label="${this.escapeHTML(this.config.title)}">
                <div class="calc-header">
                    <h2 class="calc-title">${this.escapeHTML(this.config.title)}</h2>
                    ${this.config.subtitle ? `<p class="calc-subtitle">${this.escapeHTML(this.config.subtitle)}</p>` : ''}
                </div>
                
                <div class="calc-fields">
                    ${fieldsHTML}
                </div>
                
                <div class="calc-result initializing" id="result-container" role="status" aria-live="polite">
                    <div class="result-label" id="result-label">${this.escapeHTML(this.config.resultLabel || 'Result')}</div>
                    <div class="result-value" id="result-value" aria-labelledby="result-label">--</div>
                    <div class="result-announcement sr-only" aria-live="assertive" id="result-announcement"></div>
                    ${this.config.breakdown ? `
                        <div class="chart-container" role="img" aria-label="Result breakdown chart">
                            <canvas id="resultChart"></canvas>
                        </div>
                        <div class="result-breakdown" id="breakdown" role="list" aria-label="Cost breakdown"></div>
                    ` : ''}

                    <div id="notices-container" class="calc-notices" aria-live="polite"></div>
                    
                    <div class="result-actions">
                        ${this.config.proFeatures?.pdf ? `
                            <button class="action-btn primary-cta" id="pdf-btn" title="${this.escapeHTML(this.config.proFeatures.pdfLabel || 'Download PDF')}">
                                <svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
                                ${this.escapeHTML(this.config.proFeatures.pdfLabel || 'Download PDF')}
                            </button>
                        ` : ''}
                        <button class="action-btn" id="print-btn" title="Print Results">
                            <svg viewBox="0 0 24 24"><path d="M19 8h-1V3H6v5H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/></svg>
                            Print / Save
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    renderField(field) {
        let defaultValue;

        if (field.type === 'select') {
            // For select fields, use default or first option's value
            defaultValue = field.default !== undefined ? field.default :
                (field.options && field.options.length > 0 ? field.options[0].value : 0);
        } else if (field.type === 'slider' || field.type === 'number') {
            defaultValue = field.default !== undefined ? field.default : (field.min || 0);
        } else {
            defaultValue = field.default || 0;
        }

        // Preserve existing values to avoid overwriting user input on re-render
        if (this.values[field.id] === undefined) {
            this.values[field.id] = defaultValue;
        }
        const currentValue = this.values[field.id];

        // Check visibility
        const isHidden = this.state.hiddenFields.has(field.id);
        const hiddenAttr = isHidden ? 'hidden' : '';

        // Field Toggle Logic
        let toggleHtml = '';
        if (field.toggle && !isHidden) {
            toggleHtml = `<a href="#" class="calc-field-toggle" data-target="${field.toggle.target}" data-current="${field.id}">${this.escapeHTML(field.toggle.label || 'Switch')}</a>`;
        }

        switch (field.type) {
            case 'number':
                // Detect if this is a currency/money field based on label
                const isCurrency = this.isCurrencyField(field);
                const isPercentage = this.isPercentageField(field);
                const helpText = field.description || field.help;

                return `
                    <div class="calc-field" data-print-value="${this.formatNumber(currentValue)}" ${hiddenAttr} data-id="${field.id}">
                        <label class="field-label" for="${field.id}">
                            <span>
                                ${this.escapeHTML(field.label)}
                                ${helpText ? `
                                    <span class="field-help" tabindex="0" role="button" aria-label="Help info">?
                                        <span class="tooltip">${this.escapeHTML(helpText)}</span>
                                    </span>
                                ` : ''}
                            </span>
                            ${toggleHtml}
                        </label>
                        <div class="input-wrapper ${isPercentage ? 'has-suffix' : ''}">
                            <input
                                type="number"
                                id="${field.id}"
                                value="${currentValue}"
                                min="${field.min || 0}"
                                max="${field.max || 999999999}"
                                step="${field.step || 1}"
                                data-field-id="${field.id}"
                                aria-describedby="${field.id}-desc"
                                placeholder="${field.placeholder || ''}"
                            />
                            ${isPercentage ? '<span class="input-suffix">%</span>' : ''}
                        </div>
                    ${field.description ? `<span id="${field.id}-desc" class="sr-only">${this.escapeHTML(field.description)}</span>` : ''}
                    </div>
                    `;

            case 'slider':
                const sliderProgress = ((currentValue - (field.min || 0)) / ((field.max || 100) - (field.min || 0))) * 100;
                const sliderHelpText = field.description || field.help;

                return `
                    <div class="calc-field" ${hiddenAttr}>
                        <label class="field-label" for="${field.id}">
                            <span>
                                ${this.escapeHTML(field.label)}
                                ${sliderHelpText ? `
                                    <span class="field-help" tabindex="0" role="button" aria-label="Help info">?
                                        <span class="tooltip">${this.escapeHTML(sliderHelpText)}</span>
                                    </span>
                                ` : ''}
                            </span>
                            <span class="range-value" id="${field.id}-value" aria-hidden="true">${currentValue}</span>
                        </label>
                        <input 
                            type="range" 
                            id="${field.id}" 
                            class="slider-filled"
                            value="${currentValue}"
                            min="${field.min || 0}"
                            max="${field.max || 100}"
                            step="${field.step || 1}"
                            data-field-id="${field.id}"
                            aria-valuemin="${field.min || 0}"
                            aria-valuemax="${field.max || 100}"
                            aria-valuenow="${currentValue}"
                            style="--slider-progress: ${sliderProgress}%"
                        />
                    </div>
                    `;

            case 'select':
                const options = field.options.map(opt =>
                    `<option value="${opt.value}" ${opt.value == currentValue ? 'selected' : ''}>${this.escapeHTML(opt.label)}</option>`
                ).join('');
                const selectedOption = field.options.find(opt => opt.value == currentValue);
                const printLabel = selectedOption ? selectedOption.label : currentValue;

                return `
                    <div class="calc-field" data-print-value="${this.escapeHTML(printLabel)}" ${hiddenAttr} data-id="${field.id}">
                        <label class="field-label" for="${field.id}">
                            <span>${this.escapeHTML(field.label)}</span>
                            ${toggleHtml}
                        </label>
                        <select id="${field.id}" data-field-id="${field.id}">
                            ${options}
                        </select>
                    </div>
                    `;

            default:
                return '';
        }
    }

    attachEventListeners() {
        const inputs = this.shadowRoot.querySelectorAll('[data-field-id]');
        inputs.forEach(input => {
            input.addEventListener('input', (e) => this.handleInput(e));

            // Add bounce effect on change (slider release)
            if (input.type === 'range') {
                input.addEventListener('change', (e) => {
                    e.target.classList.remove('slider-bounce');
                    void e.target.offsetWidth; // Trigger reflow
                    e.target.classList.add('slider-bounce');
                    this.triggerHaptic(10); // Haptic on release
                });
            }
        });

        // Toggle Buttons
        const toggles = this.shadowRoot.querySelectorAll('.calc-field-toggle');
        toggles.forEach(toggle => {
            toggle.addEventListener('click', (e) => {
                e.preventDefault();
                const target = toggle.dataset.target;
                const current = toggle.dataset.current;
                this.toggleField(target, current);
            });
        });

        // Initial calculation
        this.calculate();

        // Setup print button
        const printBtn = this.shadowRoot.getElementById('print-btn');
        if (printBtn) {
            printBtn.addEventListener('click', () => {
                this.printCalculator();
            });
        }

        // Setup PDF button
        const pdfBtn = this.shadowRoot.getElementById('pdf-btn');
        if (pdfBtn) {
            pdfBtn.addEventListener('click', () => {
                this.dispatchEvent(new CustomEvent('request-pdf', {
                    bubbles: true,
                    composed: true,
                    detail: { values: this.values }
                }));
            });
        }
    }

    toggleField(targetId, currentId) {
        // Unhide target, hide current
        this.state.hiddenFields.delete(targetId);
        this.state.hiddenFields.add(currentId);

        // Re-render and attach events
        this.render();
        this.attachEventListeners();

        // Focus the new field inputs
        setTimeout(() => {
            const newField = this.shadowRoot.getElementById(targetId);
            if (newField) newField.focus();
        }, 50);
    }

    printCalculator() {
        const printWindow = window.open('', '_blank', 'width=900,height=700');
        if (!printWindow) {
            window.print();
            return;
        }

        const html = this.buildPrintHtml();
        printWindow.document.open();
        printWindow.document.write(html);
        printWindow.document.close();
        printWindow.focus();

        printWindow.onload = () => {
            printWindow.print();
        };

        printWindow.onafterprint = () => {
            printWindow.close();
        };
    }

    buildPrintHtml() {
        const title = this.config.title || 'Calculator';
        const subtitle = this.config.subtitle || '';
        const resultLabel = this.config.resultLabel || 'Result';
        const locale = this.config.locale || 'en-US';
        const generatedAt = new Date().toLocaleString(locale);
        const fields = this.getPrintableFields();
        const result = this.getPrintableResult();
        const breakdown = this.getPrintableBreakdown(result.rawValue);
        const notices = this.getPrintableNotices(result.rawValue);

        const fieldsHtml = fields.map(field => `
                <div class="field">
                    <div class="field-label">${this.escapeHTML(field.label)}</div>
                    <div class="field-value">${this.escapeHTML(field.value)}</div>
                </div>
            `).join('');

        const breakdownHtml = breakdown.length
            ? `
                <div class="section">
                    <h2 class="section-title">Breakdown</h2>
                    <div class="breakdown">
                        ${breakdown.map(item => `
                            <div class="breakdown-item">
                                <span>${this.escapeHTML(item.label)}</span>
                                <span>${this.escapeHTML(item.value)}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `
            : '';

        const noticesHtml = notices.length
            ? `
                <div class="section">
                    <h2 class="section-title">Notes</h2>
                    <ul class="notes">
                        ${notices.map(note => `<li>${this.escapeHTML(note)}</li>`).join('')}
                    </ul>
                </div>
            `
            : '';

        return `
            <!doctype html>
            <html lang="en">
            <head>
                <meta charset="utf-8">
                <title>${this.escapeHTML(title)} - Report</title>
                <style>
                    * { box-sizing: border-box; }
                    body {
                        margin: 40px;
                        font-family: "Helvetica Neue", Arial, sans-serif;
                        color: #111827;
                        background: #ffffff;
                    }
                    .header {
                        display: flex;
                        justify-content: space-between;
                        align-items: flex-start;
                        gap: 24px;
                        border-bottom: 2px solid #e5e7eb;
                        padding-bottom: 16px;
                    }
                    .title {
                        font-size: 28px;
                        margin: 0;
                    }
                    .subtitle {
                        margin: 6px 0 0;
                        color: #4b5563;
                        font-size: 14px;
                    }
                    .meta {
                        text-align: right;
                        font-size: 12px;
                        color: #6b7280;
                    }
                    .section {
                        margin-top: 24px;
                    }
                    .section-title {
                        margin: 0 0 12px;
                        font-size: 16px;
                        text-transform: uppercase;
                        letter-spacing: 0.08em;
                        color: #374151;
                    }
                    .fields {
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
                        gap: 16px 24px;
                    }
                    .field {
                        border-bottom: 1px solid #e5e7eb;
                        padding-bottom: 8px;
                    }
                    .field-label {
                        font-size: 11px;
                        text-transform: uppercase;
                        letter-spacing: 0.08em;
                        color: #6b7280;
                    }
                    .field-value {
                        font-size: 16px;
                        font-weight: 600;
                        margin-top: 6px;
                    }
                    .result-card {
                        border: 1px solid #e5e7eb;
                        border-radius: 16px;
                        padding: 18px 20px;
                        background: #f9fafb;
                    }
                    .result-label {
                        font-size: 12px;
                        letter-spacing: 0.12em;
                        text-transform: uppercase;
                        color: #6b7280;
                    }
                    .result-value {
                        font-size: 32px;
                        font-weight: 700;
                        margin-top: 8px;
                    }
                    .breakdown-item {
                        display: flex;
                        justify-content: space-between;
                        padding: 8px 0;
                        border-bottom: 1px dashed #e5e7eb;
                        font-size: 14px;
                    }
                    .breakdown-item:last-child {
                        border-bottom: none;
                    }
                    .notes {
                        margin: 0;
                        padding-left: 18px;
                        color: #374151;
                        font-size: 14px;
                    }
                    @media print {
                        body { margin: 0.5in; }
                    }
                </style>
            </head>
            <body>
                <div class="header">
                    <div>
                        <h1 class="title">${this.escapeHTML(title)}</h1>
                        ${subtitle ? `<div class="subtitle">${this.escapeHTML(subtitle)}</div>` : ''}
                    </div>
                    <div class="meta">
                        <div>${this.escapeHTML(resultLabel)} report</div>
                        <div>Generated ${this.escapeHTML(generatedAt)}</div>
                    </div>
                </div>

                <div class="section">
                    <h2 class="section-title">Inputs</h2>
                    <div class="fields">
                        ${fieldsHtml}
                    </div>
                </div>

                <div class="section">
                    <div class="result-card">
                        <div class="result-label">${this.escapeHTML(resultLabel)}</div>
                        <div class="result-value">${this.escapeHTML(result.formattedValue)}</div>
                    </div>
                </div>

                ${breakdownHtml}
                ${noticesHtml}
            </body>
            </html>
        `;
    }

    getPrintableFields() {
        const fields = this.config.fields || [];
        return fields.map(field => ({
            label: field.label || field.id,
            value: this.getFieldDisplayValue(field)
        }));
    }

    getFieldDisplayValue(field) {
        const input = this.shadowRoot.getElementById(field.id);
        if (!input) {
            return '';
        }

        if (field.type === 'select') {
            const selected = input.options[input.selectedIndex];
            return selected ? selected.text : '';
        }

        const rawValue = Number(input.value);
        const safeValue = Number.isFinite(rawValue) ? rawValue : 0;
        const formatted = this.formatNumber(safeValue);

        if (this.isPercentageField(field)) {
            return `${formatted}%`;
        }

        if (this.isCurrencyField(field)) {
            return `$${formatted}`;
        }

        return formatted;
    }

    getPrintableResult() {
        const formula = this.config.formula;
        if (!formula) {
            return { rawValue: 0, formattedValue: this.formatCurrency(0) };
        }

        const context = { ...this.values };
        const rawValue = this.evaluateFormula(formula, context);
        return {
            rawValue,
            formattedValue: this.formatCurrency(rawValue)
        };
    }

    getPrintableBreakdown(totalResult) {
        if (!this.config.breakdown) return [];
        const context = { ...this.values, result: totalResult };
        return this.config.breakdown.map(item => {
            const value = this.evaluateFormula(item.formula, context);
            return {
                label: item.label,
                value: this.formatCurrency(value)
            };
        });
    }

    getPrintableNotices(totalResult) {
        if (!this.config.notices || this.config.notices.length === 0) return [];
        const context = { ...this.values, result: totalResult };
        return this.config.notices
            .filter(notice => !notice.condition || this.evaluateFormula(notice.condition, context))
            .map(notice => notice.message);
    }

    handleInput(event) {
        const fieldId = event.target.dataset.fieldId;
        const value = parseFloat(event.target.value) || 0;
        this.values[fieldId] = value;

        // Update range value display and slider fill
        if (event.target.type === 'range') {
            const valueDisplay = this.shadowRoot.getElementById(`${fieldId} -value`);
            if (valueDisplay) {
                valueDisplay.textContent = this.formatNumber(value);
            }

            // Update slider fill progress
            const min = parseFloat(event.target.min) || 0;
            const max = parseFloat(event.target.max) || 100;
            const progress = ((value - min) / (max - min)) * 100;
            event.target.style.setProperty('--slider-progress', `${progress}% `);
            event.target.setAttribute('aria-valuenow', value);
        }

        // Update print value attribute on the container
        const fieldContainer = event.target.closest('.calc-field');
        if (fieldContainer) {
            if (event.target.tagName === 'SELECT') {
                const selectedText = event.target.options[event.target.selectedIndex].text;
                fieldContainer.setAttribute('data-print-value', selectedText);
            } else {
                // For number/range, format it nicely
                fieldContainer.setAttribute('data-print-value', this.formatNumber(value));
            }
        }

        this.calculate();

        // Haptic feedback for interactions (if supported)
        this.triggerHaptic(5);
    }

    triggerHaptic(pattern) {
        if (navigator.vibrate) {
            navigator.vibrate(pattern);
        }
    }

    calculate() {
        try {
            const formula = this.config.formula;
            if (!formula) return;

            // Create a safe context for evaluation
            const context = {
                ...this.values,
                isActive: (id) => !this.state.hiddenFields.has(id)
            };
            const result = this.evaluateFormula(formula, context);

            // Update result display with count-up animation
            const resultEl = this.shadowRoot.getElementById('result-value');
            if (resultEl) {
                // Get previous value for animation
                const prevValue = this.lastResult || 0;
                this.lastResult = result;

                // Animate the value count-up
                this.animateValue(resultEl, prevValue, result, 400);

                // Remove initializing class with a slight delay to allow transition
                setTimeout(() => {
                    const container = this.shadowRoot.getElementById('result-container');
                    if (container) container.classList.remove('initializing');
                }, 500);

                // Announce to screen readers (debounced)
                this.announceResult(this.formatCurrency(result));
            }

            // Display breakdown if configured
            if (this.config.breakdown) {
                this.displayBreakdown(result);
            }

            // Display conditional notices
            this.displayNotices(result);

        } catch (error) {
            console.error('Calculation error:', error);
        }
    }

    announceResult(formatted) {
        // Debounce announcements to avoid overwhelming screen readers
        clearTimeout(this.announceTimeout);
        this.announceTimeout = setTimeout(() => {
            const announcement = this.shadowRoot.getElementById('result-announcement');
            if (announcement) {
                announcement.textContent = `${this.config.resultLabel || 'Result'}: ${formatted} `;
            }
        }, 1000);
    }

    evaluateFormula(formula, context) {
        try {
            // Decode formula if it contains HTML entities (e.g., &lt; for <)
            const decodedFormula = this.decodeHtml(formula);

            const keys = Object.keys(context);
            const values = Object.values(context);
            // Execute formula with scope
            const func = new Function(...keys, 'return ' + decodedFormula);
            return func(...values);
        } catch (e) {
            console.error('Formula evaluation error:', e, formula);
            return 0;
        }
    }

    decodeHtml(html) {
        if (!html) return '';
        // Create a temporary textarea to decode HTML entities
        const txt = document.createElement('textarea');
        txt.innerHTML = html;
        return txt.value;
    }

    // displayResult method is no longer needed as its logic is moved into calculate()
    // displayResult(value) {
    //     const resultEl = this.shadowRoot.getElementById('result-value');
    //     if (resultEl) {
    //         const formatted = this.formatCurrency(value);
    //         resultEl.textContent = formatted;
    //     }

    //     // Display breakdown if configured
    //     if (this.config.breakdown) {
    //         this.displayBreakdown();
    //     }
    // }

    displayBreakdown(totalResult) {
        const breakdownEl = this.shadowRoot.getElementById('breakdown');
        if (!breakdownEl || !this.config.breakdown) return;

        // Add result to context so breakdown formulas can use it (e.g. "result")
        const context = {
            ...this.values,
            result: totalResult,
            isActive: (id) => !this.state.hiddenFields.has(id)
        };

        // Color palette for chart and breakdown syncing (Indigo, Purple, Pink, Blue, Emerald, Amber, Cyan)
        const palette = [
            'rgba(99, 102, 241, 0.8)',
            'rgba(168, 85, 247, 0.8)',
            'rgba(236, 72, 153, 0.8)',
            'rgba(59, 130, 246, 0.8)',
            'rgba(16, 185, 129, 0.8)',
            'rgba(245, 158, 11, 0.8)',
            'rgba(6, 182, 212, 0.8)'
        ];

        // Calculate all items first to share between text list and chart
        const breakdownData = this.config.breakdown.map((item, index) => ({
            label: item.label,
            value: this.evaluateFormula(item.formula, context),
            tooltip: item.tooltip,
            color: palette[index % palette.length] // Assign color based on index
        }));

        // Generate HTML with conditional classes, icons, tooltips, and dynamic colors
        const html = breakdownData.map(item => {
            const isZero = Math.abs(item.value) < 0.01;
            const isNegative = item.value < 0;
            const isHighlighted = item.label.toLowerCase().includes('credit') ||
                item.label.toLowerCase().includes('savings');

            let classes = 'breakdown-item';
            if (isZero) classes += ' is-zero';
            if (isHighlighted) classes += ' is-highlighted';

            let valueClasses = 'item-value';
            if (isNegative) valueClasses += ' is-negative';

            // Add icon based on label keywords
            const icon = this.getBreakdownIcon(item.label);

            const tooltipHtml = item.tooltip ? `
                    <span class="item-info">i
                        <span class="breakdown-tooltip">${this.escapeHTML(item.tooltip)}</span>
                    </span>
                    ` : '';

            // Use the assigned color for the left border
            const style = `border-left-color: ${item.color.replace('0.8', '1')}`;

            return `
                    <div class="${classes}" style="${style}">
                    <span class="item-label">${icon} ${this.escapeHTML(item.label)}${tooltipHtml}</span>
                    <span class="${valueClasses}">${this.formatCurrency(Math.abs(item.value))}</span>
                </div>
                    `;
        }).join('');

        breakdownEl.innerHTML = html;

        // Render Chart with pre-calculated data (filter out zero values for cleaner chart)
        this.renderChart(breakdownData.filter(item => Math.abs(item.value) > 0.01));
    }

    displayNotices(totalResult) {
        const noticesContainer = this.shadowRoot.getElementById('notices-container');
        if (!noticesContainer) return;

        // Clear existing
        noticesContainer.innerHTML = '';

        if (!this.config.notices || this.config.notices.length === 0) return;

        const context = { ...this.values, result: totalResult };

        const activeNotices = this.config.notices.filter(notice => {
            // If condition is present, evaluate it. If expression is missing, assume true (permanent notice)
            if (!notice.condition) return true;
            return this.evaluateFormula(notice.condition, context);
        });

        if (activeNotices.length > 0) {
            const html = activeNotices.map(notice => {
                const type = notice.type || 'info';
                const icon = type === 'warning' ? '⚠️' : '💡';
                return `
                    <div class="notice-item ${type}">
                        <span class="notice-icon">${icon}</span>
                        <span class="notice-message">${this.escapeHTML(notice.message)}</span>
                    </div>
                    `;
            }).join('');

            noticesContainer.innerHTML = html;
        }
    }

    renderChart(dataItems) {
        // Wait for Chart.js to load
        if (!window.Chart) {
            setTimeout(() => this.renderChart(dataItems), 500);
            return;
        }

        const canvas = this.shadowRoot.getElementById('resultChart');
        if (!canvas) return;

        const layout = this.theme === 'dark' ? 'dark' : 'light';
        const labels = dataItems.map(i => i.label);
        const data = dataItems.map(i => i.value);
        const backgroundColors = dataItems.map(i => i.color);


        // Destroy existing chart if any
        if (this.chartInstance) {
            this.chartInstance.destroy();
        }

        this.chartInstance = new Chart(canvas, {
            type: 'doughnut',
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    backgroundColor: backgroundColors,
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: this.theme === 'dark' ? '#f3f4f6' : '#374151'
                        }
                    }
                }
            }
        });
    }

    formatCurrency(value) {
        const currency = this.config.currency || 'USD';
        const locale = this.config.locale || 'en-US';

        // Check if currency is valid ISO 4217 code (3 letters)
        // If it's a symbol ($, %, €) or suffix, use manual formatting
        const isISO = /^[A-Z]{3}$/.test(currency);

        if (isISO) {
            try {
                return new Intl.NumberFormat(locale, {
                    style: 'currency',
                    currency: currency,
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 2
                }).format(value);
            } catch (e) {
                console.warn('Currency format error, falling back', e);
                return currency + ' ' + this.formatNumber(value);
            }
        } else {
            // It's a suffix/symbol - append it
            // If it's a prefix symbol like $, we might want to prepend, but for simplicity:
            // If length is 1 and it's standard like $, usually Intl handles it if we passed USD.
            // But if user literally put "$", we treat as string.
            // For %, we append.
            return this.formatNumber(value) + (currency === '%' ? '%' : ' ' + currency);
        }
    }

    formatNumber(value) {
        const locale = this.config.locale || 'en-US';
        return new Intl.NumberFormat(locale).format(value);
    }

    escapeHTML(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    /**
     * Detect if a field represents currency/money based on its label or id
     */
    isCurrencyField(field) {
        const label = (field.label || '').toLowerCase();
        const id = (field.id || '').toLowerCase();

        // Keywords that indicate currency fields
        const currencyKeywords = [
            'price', 'cost', 'budget', 'payment', 'amount', 'fee',
            'salary', 'income', 'revenue', 'expense', 'value',
            'loan', 'mortgage', 'investment', 'savings',
            'per guest', 'per hour', 'per sqft', 'per sq'
        ];

        // Check if any keyword matches
        return currencyKeywords.some(keyword =>
            label.includes(keyword) || id.includes(keyword)
        );
    }

    /**
     * Detect if a field represents a percentage based on its label or id
     */
    isPercentageField(field) {
        const label = (field.label || '').toLowerCase();
        const id = (field.id || '').toLowerCase();

        // Keywords that indicate percentage fields
        const percentKeywords = [
            'rate', 'percent', '%', 'interest', 'tax rate',
            'down payment (%)', 'margin', 'discount'
        ];

        // Explicit check for "(%)" in label
        if (label.includes('(%)') || label.includes('percent')) {
            return true;
        }

        // Check if any keyword matches (but ensure it's not "down payment" without %)
        return percentKeywords.some(keyword =>
            label.includes(keyword) || id.includes(keyword)
        );
    }

    /**
     * Animate a numeric value from start to end over duration (ms)
     * Creates a premium "count-up" effect
     */
    animateValue(element, start, end, duration) {
        // Clamp duration to reasonable range
        duration = Math.min(Math.max(duration, 100), 1000);

        const startTime = performance.now();
        const diff = end - start;

        // Easing function (ease-out cubic)
        const easeOutCubic = t => 1 - Math.pow(1 - t, 3);

        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeOutCubic(progress);

            const currentValue = start + (diff * easedProgress);
            element.textContent = this.formatCurrency(currentValue);

            // Add subtle scale effect during animation
            if (progress < 1) {
                element.style.transform = `scale(${1 + (0.02 * (1 - progress))})`;
                requestAnimationFrame(animate);
            } else {
                element.style.transform = 'scale(1)';
            }
        };

        requestAnimationFrame(animate);
    }

    /**
     * Get an emoji icon for breakdown items based on label keywords
     */
    getBreakdownIcon(label) {
        const lowerLabel = label.toLowerCase();

        // Category-to-icon mapping
        const iconMap = [
            { keywords: ['principal', 'loan', 'mortgage', 'amount'], icon: '🏠' },
            { keywords: ['interest', 'rate', 'apr'], icon: '📊' },
            { keywords: ['tax', 'taxes', 'property tax'], icon: '🏛️' },
            { keywords: ['insurance', 'pmi', 'coverage'], icon: '🛡️' },
            { keywords: ['hoa', 'association', 'fee', 'fees'], icon: '🏘️' },
            { keywords: ['payment', 'monthly', 'total'], icon: '💵' },
            { keywords: ['savings', 'credit', 'rebate'], icon: '💰' },
            { keywords: ['cost', 'price', 'expense'], icon: '🧾' },
            { keywords: ['labor', 'installation', 'work'], icon: '🔧' },
            { keywords: ['material', 'supplies'], icon: '📦' },
            { keywords: ['energy', 'electric', 'power', 'kwh'], icon: '⚡' },
            { keywords: ['solar', 'panel'], icon: '☀️' },
            { keywords: ['roi', 'return', 'profit', 'gain'], icon: '📈' },
            { keywords: ['repayment', 'payback'], icon: '🔄' }
        ];

        for (const entry of iconMap) {
            if (entry.keywords.some(kw => lowerLabel.includes(kw))) {
                return entry.icon;
            }
        }

        // Default icon
        return '•';
    }
}

// Register the custom element
if (!customElements.get('calcpress-calculator')) {
    customElements.define('calcpress-calculator', CalcPressCalculator);
}

// Initialize calculators on page load
document.addEventListener('DOMContentLoaded', function () {
    const calculators = document.querySelectorAll('.calcpress-calculator');
    calculators.forEach(container => {
        const calculator = document.createElement('calcpress-calculator');
        container.innerHTML = '';
        container.appendChild(calculator);
    });
});
