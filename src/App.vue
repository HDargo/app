<template>
  <img style="width:3%" alt="Vue logo" src="./assets/logo.png">
  <ListPage/>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import ListPage from '@/views/ListPage.vue';
export default {
  name: 'App',
  components: {
    ListPage
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
