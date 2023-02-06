<script>
export default {
  name: 'TestPage',
  props: {
    msg : String
  },
  data(){
    return {
      cnt:0,
      name:''
    }
  },
  watch:{
    name : function(event){
      console.log(event);
    }
  }
};
</script>

<template>
    <div id="app">
        <button @click="cnt++">
            숫자 : {{cnt}}
        </button>
    </div>
    <h1>msg : {{msg}}</h1>
    <input type="text" @input="name = $event.target.value"/>
    <h2>{{name}}</h2>
</template>
