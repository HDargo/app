import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from '@/router/router'
import { loadFonts } from './plugins/webfontloader'
import { Axios } from 'axios'

loadFonts()

const app = createApp(App);
app.use(vuetify);
app.use(router);
app.config.globalProperties.$axios = Axios; 
app.mount('#app');
