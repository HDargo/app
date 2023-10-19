import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from '@/router/router'
import { Axios } from 'axios'
import store from '@/store/store';
import { loadFonts } from './plugins/webfontloader'
import {createPinia} from 'pinia'

loadFonts()

const app = createApp(App);

app.use(vuetify);
app.use(router);
app.use(store);
app.use(createPinia());
app.config.globalProperties.$axios = Axios;
app.mount('#app');
