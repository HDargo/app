<template>
    <div id="Login" >
        <v-banner text="로그인"/>
        <v-sheet width="50vh" class="mx-auto">
            <v-form ref="form">
                <v-text-field
                    v-bind:id="ID"
                    :rules="nameRules"
                    :counter="10"
                    label="Your ID"
                    required
                ></v-text-field>
                <v-text-field
                    v-bind:password="password"
                    :rules="passwordRules"
                    label="Your Password"
                    required
                ></v-text-field>
                <div class="d-flex flex-column">
                    <v-btn
                        color="success"
                        class="mt-4"
                        block
                        @click="validate"
                    >Validate</v-btn>
                    <v-btn
                        color="error"
                        class="mt-4"
                        block
                        @click="reset"
                    >Reset Form</v-btn>
                </div>
            </v-form>
        </v-sheet>
    </div>
</template>
<script>
import {store} from '@/store/store'
export default{
    name:'LoginPage',
    data: ()=>({
        valid:false,
        ID:'',
        password:'',
        checkBox:false,
        nameRules: [
            v => !!v || 'Name is required',
            v => (v && v.length <= 10) || 'Name must be less than 10 characters',
        ],
        passwordRules:[
            v => !!v || 'Password is required',
            v => (v && v.length > 10) || 'Password must be over than 10 characters'
        ],
        store
    }),
    methods:{
        async validate () {
            const {valid} = await this.$refs.form.validate()

            if(valid){
                store.DoLogin();
            }
        },
        reset() {
            this.$refs.form.reset()
        },
    }
}
</script>
<style>
#login{
    margin: 5vh;
}
</style>