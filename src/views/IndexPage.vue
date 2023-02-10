<template>
    <div id="index">
        <v-card>
            <v-card-title>INDEX PAGE</v-card-title>
            <v-card-subtitle>vue + vuetify project. Create by HDargo, Player138</v-card-subtitle>
            <v-card-text>
                This is vuetify project.
            </v-card-text>
        </v-card>
        <v-responsive
            aspect-ratio="4 / 3"
            class="border pa-4"
        >
            <v-text-field>
                1
                2
                3
                4
                5
            </v-text-field>
            <v-btn @click="DoLogin">Login</v-btn>
            <v-btn @click="DoLogout">Logout</v-btn>
        </v-responsive>
    </div>
</template>
<style>
#index{
    text-align: center;
    margin: 5vh;
}
</style>
<script>
import {store} from '@/store/store';
export default{
    name: 'IndexPage',
    data(){
        store
    },
    methods:{
        DoLogin:function(){
            store.DoLogin();
        },
        DoLogout:function(){
            store.DoLogout();
        }
    }
}
</script>