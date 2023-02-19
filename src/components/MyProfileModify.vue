<template>
    <div id="MyProfile">
        <v-card
            class="mx-auto my-5"
            width="1000"
        >
            <v-form ref="form" @submit.prevent="submitEvent" enctype="multipart/form-data">
                <v-row>
                    <v-col cols="12">
                        <v-avatar size="120" class="mx-5">
                            <v-img
                                :src="preview"
                                @error="'URL ON ERROR'"
                            >
                                <template v-slot:placeholder>  
                                    <v-progress-circular
                                    style="margin-top:40px"
                                    indeterminate
                                    color="custm_theme_6"
                                    ></v-progress-circular> 
                                </template>
                            </v-img>
                        </v-avatar>
                        <v-btn
                            prepend-icon="mdi-camera"
                            color="primary"
                            class="text-none"
                            round
                            depressed
                            :loading="isSelecting"
                            @click="onButtonClick"
                        >
                            profile image change
                        </v-btn>
                        <input
                            ref="uploader"
                            class="d-none"
                            type="file"
                            accept="image/*"
                            @change="previewFile"
                        >
                    </v-col>
                    <v-col cols="12">
                        <v-card-item>
                            <v-text-field
                                label="Nickname"
                                v-model="Nickname"
                                :rules="NameRules"
                                hide-details="auto"
                                :counter="15"
                            ></v-text-field>
                        </v-card-item>
                        <v-card-item>
                            <v-text-field
                                label="Email"
                                v-model="Email"
                                :rules="EmailRules"
                                hide-details="auto"
                            ></v-text-field>
                        </v-card-item>
                        <v-card-item>
                            <v-text-field
                                label="Desciption"
                                v-model="Desciption"
                                :rules="DesciptionRules"
                                hide-details="auto"
                                :counter="100"
                            ></v-text-field>
                        </v-card-item>
                        <v-card-item>
                            <v-text-field
                                label="Password"
                                v-model="Password"
                                :rules="PasswordRules"
                                hide-details="auto"
                                :counter="100"
                            ></v-text-field>
                        </v-card-item>
                        <v-card-item>
                            <v-text-field
                                label="Password validation"
                                v-model="PasswordValidation"
                                :rules="PasswordValidationRules"
                                hide-details="auto"
                                :counter="100"
                            ></v-text-field>
                        </v-card-item>
                    </v-col>
                </v-row>
                <v-row>
                    <v-card-actions class="mx-auto">
                        <v-btn type="submit" color="primary">Save</v-btn>
                    </v-card-actions>
                </v-row>
            </v-form>
        </v-card>
    </div>
</template>
<script>
export default {
    name:'MyProfile',
    data () {
        return {
            isSelecting : false,
            preview : this.$store.getters.getProfileImage,
            Nickname : '',
            NameRules: [
                //v => !!v || 'Nickname is required', 
                //v => (v && v.length <= 15) || 'Nickname must be 15 characters or less'
            ],
            Email : '',
            EmailRules : [
                //v => !!v || 'Email is required', 
                //v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
            ],
            Desciption: '',
            DesciptionRules: [
                //v => !(v && v.length >= 100) || 'Description cannot exceed 100 characters.'
            ],
            Password : '',
            PasswordRules : [
                //v => !!v || 'Password is required', 
                //v => !(v && v.length < 8) || 'PasswordRules must be valid'
            ],
            PasswordValidation : '',
            PasswordValidationRules : [
                //v => !!v || 'Password Validation is required', 
                //v => !(v && v != this.Password) || 'Password Validation must be valid'
            ],
        }
    },
    methods:{
        previewFile(e){
            // not completely functional
            const fileData = (file) => {
                this.preview = file;
            }
            const reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.addEventListener("load", function() {
                fileData(reader.result);
            }, false);
        },
        submitEvent : function(e){
            e.preventDefault();
            console.log("form data : ", this.$data);
        },
        onButtonClick() {
            this.isSelecting = true
            window.addEventListener('focus', () => {
                this.isSelecting = false
            }, { once: true })

            this.$refs.uploader.click()
        },
    }
}
</script>
<style>
</style>