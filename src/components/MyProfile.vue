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
                    {{ form.Description }}
                </v-card-subtitle>
            </v-card-title>
        </v-card>
    </div>
</template>
<script>
export default {
    name:'MyProfile',
    data () {
        return {
            preview : this.$store.getters.getProfileImage,
            form : {
                Nickname : 'Nickname',
                Description : 'Description'
            }
        }
    }
}
</script>
<style>
.profile-text-name{
    text-align: left;
}
</style>