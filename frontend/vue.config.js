const { defineConfig } = require('@vue/cli-service');
const path = require('path');
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: path.resolve(__dirname, '../backend/public'),
  devServer: {
    proxy: `http://localhost:${process.env.PORT || 4444}`,
  },
});
