<template>
  <div>
    <v-card class="ma-6 pa-3">
      <v-card-title>{{ BoardTitle }}</v-card-title>
      <v-card-item>item</v-card-item>
      <v-card-subtitle>subtitle</v-card-subtitle>
      <v-card-text>text</v-card-text>
      <v-card-actions class="justify-center">
        <v-btn color="primary">추천</v-btn>
        <v-btn color="red">비추천</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "BoardPage",
  data() {
    return {
      BoardNo: 1,
      BoardTitle: "title",
      BoardContent: "content",
    };
  },
};
</script>

<style>
</style>