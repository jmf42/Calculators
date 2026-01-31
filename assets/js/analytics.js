/**
 * CalcKit Analytics & Conversion Tracking
 * Tracks calculator usage, conversions, and user behavior
 */

(function () {
    'use strict';

    // Initialize analytics
    const Analytics = {
        // Track calculator interactions
        trackCalculatorUse: function (calculatorType, action, value) {
            if (window.gtag) {
                gtag('event', 'calculator_interaction', {
                    event_category: 'calculator',
                    event_label: calculatorType,
                    calculator_action: action,
                    value: value
                });
            }
        },

        // Track when user gets a result
        trackResultGenerated: function (calculatorType, resultValue) {
            if (window.gtag) {
                gtag('event', 'result_generated', {
                    event_category: 'calculator',
                    event_label: calculatorType,
                    value: resultValue
                });
            }

            // Also track as a "micro-conversion"
            this.trackMicroConversion('result_generated');
        },

        // Track CTA clicks
        trackCTAClick: function (ctaType, ctaLocation) {
            if (window.gtag) {
                gtag('event', 'cta_click', {
                    event_category: 'conversion',
                    event_label: ctaType,
                    cta_location: ctaLocation
                });
            }
        },

        // Track email signups
        trackEmailSignup: function (source) {
            if (window.gtag) {
                gtag('event', 'email_signup', {
                    event_category: 'conversion',
                    event_label: source,
                    value: 1
                });
            }

            /* 
            // TODO: Set AD_CONVERSION_ID environment variable for production
            // Track as conversion in Google Ads if applicable
            if (window.gtag) {
                gtag('event', 'conversion', {
                    'send_to': 'AW-CONVERSION_ID/CONVERSION_LABEL' // Replace with actual ID
                });
            }
            */
        },

        // Track plugin link clicks
        trackPluginClick: function (source) {
            if (window.gtag) {
                gtag('event', 'plugin_click', {
                    event_category: 'conversion',
                    event_label: source,
                    value: 5 // Assign value to track revenue potential
                });
            }
        },

        // Track time spent on calculator
        trackTimeSpent: function (calculatorType, seconds) {
            if (window.gtag) {
                gtag('event', 'time_on_calculator', {
                    event_category: 'engagement',
                    event_label: calculatorType,
                    value: seconds
                });
            }
        },

        // Track micro-conversions (small positive actions)
        trackMicroConversion: function (action) {
            if (window.gtag) {
                gtag('event', 'micro_conversion', {
                    event_category: 'engagement',
                    event_label: action
                });
            }
        },

        // Track print/save actions
        trackPrintSave: function (calculatorType) {
            if (window.gtag) {
                gtag('event', 'print_save', {
                    event_category: 'engagement',
                    event_label: calculatorType
                });
            }

            this.trackMicroConversion('print_save');
        },

        // Track social shares
        trackShare: function (platform, calculatorType) {
            if (window.gtag) {
                gtag('event', 'share', {
                    event_category: 'engagement',
                    method: platform,
                    content_type: 'calculator',
                    item_id: calculatorType
                });
            }
        }
    };

    // Auto-track time on page
    let startTime = Date.now();
    let tracked30s = false;
    let tracked60s = false;

    setInterval(() => {
        const elapsed = Math.floor((Date.now() - startTime) / 1000);

        if (elapsed >= 30 && !tracked30s) {
            tracked30s = true;
            Analytics.trackMicroConversion('30s_engaged');
        }

        if (elapsed >= 60 && !tracked60s) {
            tracked60s = true;
            Analytics.trackMicroConversion('60s_engaged');
        }
    }, 5000);

    // Track scroll depth
    let maxScroll = 0;
    let tracked25 = false;
    let tracked50 = false;
    let tracked75 = false;
    let tracked100 = false;

    window.addEventListener('scroll', () => {
        const scrollable = document.body.scrollHeight - window.innerHeight;
        if (scrollable <= 0) return;
        const scrollPercent = (window.scrollY / scrollable) * 100;
        maxScroll = Math.max(maxScroll, scrollPercent);

        if (maxScroll >= 25 && !tracked25) {
            tracked25 = true;
            if (window.gtag) {
                gtag('event', 'scroll_depth', {
                    event_category: 'engagement',
                    event_label: '25%'
                });
            }
        }

        if (maxScroll >= 50 && !tracked50) {
            tracked50 = true;
            if (window.gtag) {
                gtag('event', 'scroll_depth', {
                    event_category: 'engagement',
                    event_label: '50%'
                });
            }
        }

        if (maxScroll >= 75 && !tracked75) {
            tracked75 = true;
            if (window.gtag) {
                gtag('event', 'scroll_depth', {
                    event_category: 'engagement',
                    event_label: '75%'
                });
            }
        }

        if (maxScroll >= 95 && !tracked100) {
            tracked100 = true;
            if (window.gtag) {
                gtag('event', 'scroll_depth', {
                    event_category: 'engagement',
                    event_label: '100%'
                });
            }
        }
    });

    // Track calculator field changes (debounced)
    let calculatorType = document.body.dataset.calculatorType || 'unknown';
    let changeTimeout;

    const handleFieldInput = (e) => {
        const path = typeof e.composedPath === 'function' ? e.composedPath() : [e.target];
        const fieldEl = path.find(el => el && el.matches && el.matches('input[data-field-id], select[data-field-id]'));
        if (!fieldEl) return;
        clearTimeout(changeTimeout);
        changeTimeout = setTimeout(() => {
            Analytics.trackCalculatorUse(calculatorType, 'field_change', fieldEl.dataset.fieldId);
        }, 2000);
    };

    document.addEventListener('input', handleFieldInput);
    document.addEventListener('change', handleFieldInput);

    // Expose to global scope for manual tracking
    window.CalcKitAnalytics = Analytics;

    // Track page load
    if (window.gtag) {
        gtag('event', 'page_view', {
            page_location: window.location.href,
            page_path: window.location.pathname,
            page_title: document.title
        });
    }
})();
