<template>
  <v-app>
    <v-main>
      <SidebarLayout><IndexPage/></SidebarLayout>
    </v-main>
  </v-app>
</template>

<script>
import SidebarLayout from '@/include/SidebarLayout.vue'
import IndexPage from '@/views/IndexPage.vue'

export default {
  name: 'App',

  components: {
    IndexPage,
    SidebarLayout
  },

  data: () => ({
    //
  }),
}
</script>
