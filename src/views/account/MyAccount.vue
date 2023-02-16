<template>
    <div id="MyAccount">
        <h1>my account</h1>
        <MyProfile></MyProfile>
    </div>
</template>
<script>

import MyProfile from '@/components/MyProfile.vue'

export default{
    name:'MyAccount',
    components:{
        MyProfile
    },
    data () {

    }
}
</script>
<style>
</style>