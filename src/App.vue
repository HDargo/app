<template>
  <v-app>
    <v-card>
      <v-layout>
        <v-navigation-drawer v-model="drawer"
                              :rail="rail"
                              permanent
                              @click="rail = false">
            <v-list-item v-if="login"
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

            <v-list v-if="login" density="comfortable" nav>
              <v-list-item prepend-icon="mdi-home-city" title="Home" value="home" to="/"></v-list-item>
              <v-list-item prepend-icon="mdi-bulletin-board" title="boardList" value="BoardList" to="/boardList"></v-list-item>
              <v-list-item prepend-icon="mdi-note-text-outline" title="NoteList" value="noteList" to="/noteList"></v-list-item>
              <v-list-item prepend-icon="mdi-mailbox" title="Mailbox" value="mailbox" to="/mailbox"></v-list-item>
              <v-list-item prepend-icon="mdi-view-list" title="Calendar" value="calendar" to="/calendar"></v-list-item>
              <v-list-item prepend-icon="mdi-account" title="My Account" value="account" to="/MyAccount"></v-list-item>
              <v-list-item prepend-icon="mdi-logout" title="Logout" value="logout" @click="DoLogout"></v-list-item>
            </v-list>
            <v-list v-else density="comfortable" nav>
              <v-list-item prepend-icon="mdi-home-city" title="Home" value="home" to="/"></v-list-item>
              <v-list-item prepend-icon="mdi-login" title="Login" value="login" to="/login"></v-list-item>
              <v-list-item prepend-icon="mdi-account-plus" title="Regist" value="regist" to="/regist"></v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-main style="min-height: 100vh">
          <router-view/>
        </v-main>
      </v-layout>
    </v-card>
  </v-app>
</template>

<script>

export default {
  name : 'app',
  data () {
    return {
      items: [
        { title: 'Home', icon: 'mdi-home-city' },
        { title: 'My Account', icon: 'mdi-account' },
        { title: 'Users', icon: 'mdi-account-group-outline' },
      ],
      drawer: true,
      rail: true,
      logo:this.$store.getters.getProfileImage
      //logo:this.$store.getters.getProfileImage
    }
  },
  computed : {
    login(){
      return this.$store.getters.getLoggin;
    }
  },
  methods:{
    DoLogout(){
      this.$store.commit('doLogout');
      this.$router.push('/');
    }
  },
}
</script>

<style scoped>

</style>