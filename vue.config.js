const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  },
  devServer: {
    proxy: {
        '/*': {
            target:'http://localhost:3000',
            changeOrigin: true
        },
    },
    //header : {'Access-Control-Allow-Origin' : '*'}
  }
})
