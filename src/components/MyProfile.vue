<template>
    <div id="MyProfile">
        <v-card
            class="mx-auto my-5"
            width="1000"
        >
            <v-form ref="form">
                <v-row>
                    <v-col cols="12">
                        <v-avatar
                            size="100"
                        >
                            <v-img
                                :src="preview"
                            />
                        </v-avatar>
                        <v-file-input
                            :rules="rules"
                            accept="image/*"
                            placeholder="Pick an avatar"
                            prepend-icon="mdi-camera"
                            v-model="file"
                            @change="previewFile(file)"
                        ></v-file-input>
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
                        <v-btn color="primary" @click="clickEvent">Save</v-btn>
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
            preview : this.$store.getters.getProfileImage,
            Nickname : '',
            NameRules: [
                v => !!v || 'Nickname is required', 
                v => (v && v.length <= 15) || 'Nickname must be 15 characters or less'
            ],
            Email : '',
            EmailRules : [
                v => !!v || 'Email is required', 
                v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
            ],
            Desciption: '',
            DesciptionRules: [
                v => !(v && v.length >= 100) || 'Description cannot exceed 100 characters.'
            ],
            Password : '',
            PasswordRules : [
                v => !!v || 'Password is required', 
                v => !(v && v.length < 8) || 'PasswordRules must be valid'
            ],
            PasswordValidation : '',
            PasswordValidationRules : [
                v => !!v || 'Password Validation is required', 
                v => !(v && v != this.Password) || 'Password Validation must be valid'
            ],
        }
    },
    methods:{
        previewFile(file){
            const fileData = (data) => {
                this.preview = data;
            }
            const reader = new FileReader()
            reader.readAsDataURL(file[0])
            reader.addEventListener("load", function () {
                fileData(reader.result)
            }, false);
        },
        async clickEvent(){
            const {valid} = await this.$refs.form.validate();
            const formValues = null;
            console.log(formValues);
            const profileData = {};
            if(valid){
                profileData['profileImage'] = this.file[0];
                console.log(profileData);
            }
        }
    }
}
</script>
<style>
</style>