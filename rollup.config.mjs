import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
//import pkg from './package.json' assert { type: 'json' }; // Use assert for JSON import

// Use Node's built-in modules to read the JSON file
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

// Helper to get __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read and parse package.json
const pkg = JSON.parse(readFileSync(path.resolve(__dirname, 'package.json'), 'utf8'));
// ---- End of change ----

export default {
    input: 'src/index.ts', // Your library entry point
    output: [
        {
            file: pkg.main, // CommonJS output (for Node/older bundlers)
            format: 'cjs',
            sourcemap: true,
        },
        {
            file: pkg.module, // ES Module output (for modern bundlers)
            format: 'esm',
            sourcemap: true,
        },
    ],
    plugins: [
        resolve(), // Locates modules using the Node resolution algorithm
        commonjs(), // Converts CommonJS modules to ES6
        typescript({
            tsconfig: './tsconfig.json', // Point to your tsconfig file
            sourceMap: true, // Ensure TS generates sourcemaps
            declaration: true, // Ensure declarations are generated
            declarationDir: 'dist/types', // Match tsconfig output
            rootDir: 'src', // Match tsconfig rootDir
        }),
        postcss({
            extract: 'styles.css', // Extract CSS into a single file named styles.css in dist/
            minimize: true, // Minify CSS
            sourceMap: true,
             // This is key: Process url() references in CSS
            url: {
                // 'copy' will copy assets to the destination folder ('assets' relative to the CSS file)
                // and update the url() paths in the final CSS.
                url: "copy",
                 // Where to put files copied from url() statments
                assetsPath: "assets/fonts", // Output fonts to dist/assets/fonts
                useHash: true, // Add hash to filenames to prevent caching issues (optional but good)
            },
            // You can add PostCSS plugins like autoprefixer here if needed
            // plugins: [require('autoprefixer')()]
        }),
    ],
    // Specify external dependencies (React should be provided by the consumer)
    external: ['react', 'react-dom'],
};