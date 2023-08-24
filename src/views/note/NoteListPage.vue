<template>
    <div>
        <v-card style="margin: 5vh;"
        >
        <v-card-title primary-title>
            v-card-title channel name
        </v-card-title>
        <v-list>
            <template v-for="(n) in 10" :key="n">
                <v-list-item>
                    <v-list-item-title>VListItemTitle</v-list-item-title>
                </v-list-item>
                <v-divider></v-divider>
            </template>
        </v-list>
    </v-card>
</div>
</template>
<script>
export default{
    name:'NoteList',
    data(){
        return {
            
        }
    }
}
</script>
<style>
</style>