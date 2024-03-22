const { defineConfig } = require('@vue/cli-service');
const path = require('path');
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: 'http://localhost:4444',
  },
  outputDir: path.resolve(__dirname, '../backend/public'),
});
