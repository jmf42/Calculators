const esbuild = require('esbuild');
const path = require('path');
const fs = require('fs');

const isProd = process.env.NODE_ENV === 'production';

async function build() {
    console.log(`Building assets (${isProd ? 'Production' : 'Development'})...`);

    // Ensure _site/assets exists
    const outDir = path.resolve(__dirname, '../_site/assets');
    if (!fs.existsSync(outDir)) {
        fs.mkdirSync(outDir, { recursive: true });
    }

    try {
        const result = await esbuild.build({
            entryPoints: [
                'assets/js/calculator.js',
                'assets/js/analytics.js',
                'assets/js/geo-detect.js',
                'assets/css/style.css'
            ],
            entryNames: isProd ? '[dir]/[name].[hash]' : '[dir]/[name]',
            outdir: '_site/assets',
            bundle: true,
            minify: isProd,
            sourcemap: !isProd,
            metafile: true,
            platform: 'browser',
            target: ['es2020'],
            loader: {
                '.css': 'css',
                '.js': 'js'
            }
        });

        if (isProd) {
            // Generate Manifest for Eleventy
            const outputs = result.metafile.outputs;
            const manifest = {};

            Object.keys(outputs).forEach(outputFile => {
                const entryPoint = outputs[outputFile].entryPoint;
                if (entryPoint) {
                    // entryPoint is like 'assets/js/calculator.js'
                    // outputFile is like '_site/assets/js/calculator.HASH.js'

                    const originalName = path.basename(entryPoint);
                    const hashedName = path.basename(outputFile);

                    manifest[originalName] = hashedName;
                }
            });

            const dataDir = path.resolve(__dirname, '../_data');
            if (!fs.existsSync(dataDir)) {
                fs.mkdirSync(dataDir, { recursive: true });
            }

            fs.writeFileSync(
                path.join(dataDir, 'manifest.json'),
                JSON.stringify(manifest, null, 2)
            );
            console.log('Manifest generated:', manifest);
        } else {
            // In dev, we just map 1:1 for simplicity or could use same hashing logic if desired
            // maintaining simple names for dev
            const manifest = {
                "calculator.js": "calculator.js",
                "analytics.js": "analytics.js",
                "geo-detect.js": "geo-detect.js",
                "style.css": "style.css"
            };
            const dataDir = path.resolve(__dirname, '../_data');
            if (!fs.existsSync(dataDir)) {
                fs.mkdirSync(dataDir, { recursive: true });
            }
            fs.writeFileSync(
                path.join(dataDir, 'manifest.json'),
                JSON.stringify(manifest, null, 2)
            );
        }

        console.log('Assets built successfully!');
    } catch (e) {
        console.error('Build failed:', e);
        process.exit(1);
    }
}

build();
