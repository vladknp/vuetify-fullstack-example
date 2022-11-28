const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: ["vuetify"],
  devServer: {
    port: 8888,
    proxy: 'http://localhost:3001/api',
  },
});
