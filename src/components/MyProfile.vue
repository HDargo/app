<template>
    <div id="MyProfile">
        <v-card
            class="mx-auto my-5"
            width="1000"
        >
            <v-row>
                <v-col cols="12">
                    <v-card-text>
                        <v-flex class="mb-4">
                            <v-avatar
                                size="100"
                            >
                                <v-img
                                    :src="preview"
                                />
                            </v-avatar>
                        </v-flex>
                    </v-card-text>
                </v-col>
            </v-row>
            <v-card-title class="profile-text-name ma-4 pt-16">
                <v-card-title primary-title class="text-h6">
                    {{ form.Nickname }}
                </v-card-title>
                <v-card-subtitle>
                    {{ form.Desciption }}
                </v-card-subtitle>
            </v-card-title>
            
            <v-dialog
                v-model="dialog"
                width="auto"
                class="ButtonCenter"
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
    </div>
</template>
<script>

import MyProfileModify from '@/components/MyProfileModify.vue'
export default {
    name:'MyProfile',
    components:{
        MyProfileModify
    },
    data () {
        return {
            preview : this.$store.getters.getProfileImage,
            form : {
                Nickname : this.$store.getters.getNickname,
                Desciption : this.$store.getters.getDesciption
            },
            dialog : false
        }
    }
}
</script>
<style>
.profile-text-name{
    text-align: left;
}
</style>