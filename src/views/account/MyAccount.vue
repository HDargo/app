<template>
    <v-container fluid>
        <v-card
            class="mx-auto my-5 bg"
            style="text-align: center; margin: 5vh;"
        >
            <MyProfile/>
            <v-dialog
                v-model="dialog"
                width="auto"
            >
                <template v-slot:activator="{props}">
                    <v-btn
                        color="primary"
                        v-bind="props"
                    >
                        my account modify
                    </v-btn>
                </template>

                <MyProfileModify></MyProfileModify>
            </v-dialog>
        </v-card>
    </v-container>
</template>
<script>
import MyProfile from '@/components/MyProfile.vue'
import MyProfileModify from '@/components/MyProfileModify.vue'

export default{
    name:'MyAccount',
    components:{
        MyProfile,
        MyProfileModify
    },
    data () {
        return {
            dialog : false
        }
    }
}
</script>
<style>
</style>