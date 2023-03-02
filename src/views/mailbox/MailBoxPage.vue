<template>
    <v-container
        fluid
        class="py-8 px-6"
    >
        <v-lazy
            :min-height="200"
            :options="{'threshold':0.5}"
            transition="fade-transition"
        >
            <v-row>
                <v-col cols="12">
                    <v-card>
                        <v-list class="pa=5">
                            <v-list-subheader>Today</v-list-subheader>
                            <v-list-item>
                                <v-list-item-title>Title</v-list-item-title>
                                <v-list-item-subtitle>subTitle</v-list-item-subtitle>
                            </v-list-item>
                            <v-divider></v-divider>
                            <v-list-item>
                                <v-list-item-title>Title</v-list-item-title>
                                <v-list-item-subtitle>subTitle</v-list-item-subtitle>
                            </v-list-item>
                            <v-divider></v-divider>
                            <v-list-item>
                                <v-list-item-title>Title</v-list-item-title>
                                <v-list-item-subtitle>subTitle</v-list-item-subtitle>
                            </v-list-item>
                            <v-divider></v-divider>
                            <v-list-item>
                                <v-list-item-title>Title</v-list-item-title>
                                <v-list-item-subtitle>subTitle</v-list-item-subtitle>
                            </v-list-item>
                        </v-list>
                    </v-card>
                </v-col>
                <v-col cols="12">
                    <v-card>
                        <v-list class="pa=5">
                            <v-list-subheader>YesterDay</v-list-subheader>
                            <v-list-item v-for="(n) in 100" :key="n">
                                <v-list-item-title>Title</v-list-item-title>
                                <v-list-item-subtitle>subTitle</v-list-item-subtitle>
                            </v-list-item>
                            <v-divider></v-divider>
                        </v-list>
                    </v-card>
                </v-col>
            </v-row>
        </v-lazy>
    </v-container>
</template>
<script>
export default{
    name:'MailBox',
    data(){

    }
}
</script>
<style>
</style>