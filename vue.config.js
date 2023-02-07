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
        //proxy 요청을 보낼 api 시작 부분
        '/api': {
            target:'http://localhost:3000',
            changeOrigin: true,
        },
    },
    //header : {'Access-Control-Allow-Origin' : '*'}
  }
})
