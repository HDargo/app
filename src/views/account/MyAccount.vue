<template>
    <v-container fluid pa-0>
        <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
        <MyProfile />
    
        <div class="d-flex justify-center">
          <v-card
            class="mr-5"
            min-width="60vh"
            min-height="50vh"
            style="text-align: center;"
          >
            test 1
          </v-card>
    
          <v-card
            class="ml-5"
            min-width="60vh"
            min-height="50vh"
            style="text-align: center;"
          >
            test 2
          </v-card>

          <v-card
            class="ml-5"
            min-width="60vh"
            min-height="50vh"
            style="text-align: center;"
          >
            test 3
          </v-card>
        </div>
        </v-parallax>
    </v-container>
</template>
<script>
import MyProfile from '@/components/MyProfile.vue'

export default{
    name:'MyAccount',
    components:{
        MyProfile,
    },
    
}
</script>
<style>
</style>