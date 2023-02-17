<template>
    <div id="MyProfile">
        <v-card
            class="mx-auto my-5"
            width="1000"
        >
            <v-row>
                <v-col>
                    <v-img
                        :src="preview"
                        width="100"
                    />
                    <v-file-input
                        :rules="rules"
                        accept="image/png, image/jpeg, image/bmp"
                        placeholder="Pick an avatar"
                        prepend-icon="mdi-camera"
                        label="Avatar"
                        v-model="file"
                        @change="previewFile(file)"
                    ></v-file-input>
                </v-col>
                <v-col>
                    <h2>Name</h2>
                    <p>subtitle</p>
                </v-col>
            </v-row>
        </v-card>
    </div>
</template>
<script>
export default {
    name:'MyProfile',
    data () {
        return {
            preview : this.$store.getters.getProfileImage
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
        }
    }
}
</script>
<style>
</style>