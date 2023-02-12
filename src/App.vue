<template>
  <v-app>
    <v-main>
      <!-- <SidebarLayout></SidebarLayout> -->
      <v-card>
        <v-layout>
          <v-navigation-drawer v-model="drawer"
                                :rail="rail"
                                permanent
                                @click="rail = false">
              <v-list-item v-if="store.isLogin"
                            :prepend-avatar="logo"
                            title="John Leider"
                            nav>
                   <!-- login status -->
                  <template v-slot:append>
                      <v-btn variant="text"
                              icon="mdi-chevron-left"
                              @click.stop="rail = !rail"></v-btn>
                  </template>
              </v-list-item>

              <v-list-item v-else>
                  <!-- logout status -->
                  <template v-slot:append>
                      <v-btn variant="text"
                              icon="mdi-chevron-left"
                              @click.stop="rail = !rail"></v-btn>
                  </template>
              </v-list-item>

              <v-divider></v-divider>

              <v-list v-if="store.isLogin" density="compact" nav>
                <v-list-item prepend-icon="mdi-home-city" title="Home" value="home" to="/"></v-list-item>
                <v-list-item prepend-icon="mdi-account" title="My Account" value="account" to="/MyAccount"></v-list-item>
                <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
                <v-list-item prepend-icon="mdi-view-list" title="List Test" value="list" to="/list"></v-list-item>
                <v-list-item prepend-icon="mdi-logout" title="Logout" value="logout" @click="store.DoLogout()"></v-list-item>
              </v-list>
              <v-list v-else density="compact" nav>
                <v-list-item prepend-icon="mdi-home-city" title="Home" value="home" to="/"></v-list-item>
                <v-list-item prepend-icon="mdi-login" title="Login" value="login" to="/login"></v-list-item>
                <v-list-item prepend-icon="mdi-account-plus" title="Regist" value="regist" to="/regist"></v-list-item>
              </v-list>
          </v-navigation-drawer>
          <v-main style="height: 100vh;">
            <v-btn @click="sseTest()">Click me</v-btn>
            <router-view/>
          </v-main>
        </v-layout>
      </v-card>
    </v-main>
  </v-app>
</template>

<script>

import axios from 'axios';
// import SidebarLayout from './components/SidebarLayout.vue';
import {store} from '@/store/store';

export default {
  name : 'app',
  created() {
    // this.$sse.create('/api/sse')
    // .on('message', (msg) => {console.info('Messge : ', msg)})
    // .on('error', (msg) => {console.error('Error : ', msg)})
    // .connect()
    // .then(sse => {console.log('welcome sse : ', sse)})
    // .catch((err) => console.error('Failed make initial connection:', err));
    const source = new EventSource('/api/notifications/sub');

    source.addEventListener('message', message => {
      console.log('Got message', message);
    });
    source.addEventListener('open', message => {
      console.log('open to server', message);
    });
    source.addEventListener('test', message => {
      console.log('test to server', message);
    });
  },
  data () {
    return {
      drawer: true,
      items: [
        { title: 'Home', icon: 'mdi-home-city' },
        { title: 'My Account', icon: 'mdi-account' },
        { title: 'Users', icon: 'mdi-account-group-outline' },
      ],
      rail: true,
      store,
      logo:require('@/assets/logo.png')
    }
  },
  components:{
    // SidebarLayout
  },
  methods:{
    async sseTest(){
      await axios.get('/api/notifications/pub').then((res) =>{
        console.log(res.data);
      })
    }
  }
}
</script>

<style scoped>

</style>