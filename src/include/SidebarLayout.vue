<template>
    <div id='HeaderLayout'>
        <v-card>
            <v-layout>
              <v-navigation-drawer
                v-model="drawer"
                :rail="rail"
                permanent
                @click="rail = false"
              >
                <v-list-item 
                  v-if="login"
                  prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
                  title="John Leider"
                  nav><!-- login-->
                  <template v-slot:append>
                    <v-btn
                      variant="text"
                      icon="mdi-chevron-left"
                      @click.stop="rail = !rail"
                    ></v-btn>
                  </template>
                </v-list-item>

                <v-list-item v-else> <!-- logout status -->
                  <template v-slot:append>
                    <v-btn
                      variant="text"
                      icon="mdi-chevron-left"
                      @click.stop="rail = !rail"
                    ></v-btn>
                  </template>
                </v-list-item>

                <v-divider></v-divider>
        
                <v-list v-if="login" density="compact" nav>
                  <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
                  <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
                  <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
                  <v-list-item prepend-icon="mdi-logout" title="Logout" value="logout"></v-list-item>
                </v-list>
                <v-list v-else density="compact" nav>
                  <v-list-item prepend-icon="mdi-login" title="Login" value="login"></v-list-item>
                  <v-list-item prepend-icon="mdi-account-plus" title="Regist" value="regist"></v-list-item>
                </v-list>
              </v-navigation-drawer>
              <v-app-bar title="Application Bar"><v-btn @click="proxyReqTest">Button</v-btn></v-app-bar>
              <v-main style="height: 100vh"></v-main>
            </v-layout>
          </v-card>
    </div>
</template>
<script>

import axios from 'axios';

export default {
    data () {
      return {
        drawer: true,
        items: [
          { title: 'Home', icon: 'mdi-home-city' },
          { title: 'My Account', icon: 'mdi-account' },
          { title: 'Users', icon: 'mdi-account-group-outline' },
        ],
        rail: true,
        login:true
      }
    },
    props:{
      name:String,
      subtitle:String,
      permissions:Array
    },
    methods:{
      proxyReqTest(){
        axios.get('/api/Test').then((res) => {
          console.log('ProxyTest res : ', res);
        })
        .catch((error) => {
          console.log('ProxyTest err : ', error);
        })
      }
    }
}
</script>
<style>
</style>