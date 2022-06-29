const path = require('node:path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'main.js'),
      name: 'myModule',
      fileName: format => `my-module.${format}.js`,
    },
  },
})
