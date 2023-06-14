<template>
    <v-container fluid pa-0>
        <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" class="pa-5">
        <MyProfile />
    
        <div class="d-flex justify-center">
          <v-card
            class="mr-5 text-center"
            min-width="30%"
            min-height="50%"
          >
            test 1
          </v-card>
    
          <v-card
            class="ml-5 text-center"
            min-width="30%"
            min-height="50vh"
          >
            test 2
          </v-card>

          <v-card
            class="ml-5 text-center"
            min-width="30%"
            min-height="50vh"
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