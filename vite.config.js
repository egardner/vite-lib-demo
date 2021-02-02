const fs = require('fs')
const path = require('path')
const vue = require('@vitejs/plugin-vue');

/**
 * @type {import('vite').UserConfig}
 */
module.exports = {
    build: {
        // See https://vitejs.dev/guide/build.html#library-mode
        lib: {
            entry: path.resolve(__dirname, 'src/main.js'),
            name: 'SDComponents'
        },

        // Leaving this unminified so you can see what exactly gets included in
        // the bundles
        minify: false,

        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: ['vue'],

            // Provide global variables to use in the UMD build
            // for externalized deps
            output: {
                globals: {
                    vue: 'Vue'
                }
            }
        }
    },
    plugins: [
        // Explicitly emit an index.html file for demo purposes
        {
            name: 'emit-index',
            generateBundle() {
                this.emitFile({
                    type: 'asset',
                    fileName: 'index.html',
                    source: fs.readFileSync(
                        path.resolve(__dirname, 'index.dist.html'),
                        'utf-8'
                    )
                })
            }
        },

        // Vite Vue SFC plugin
        vue()
    ]
}
