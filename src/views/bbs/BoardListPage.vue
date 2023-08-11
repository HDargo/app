<template>
  <div>
    <v-card style="margin: 5vh">
      <v-card-title primary-title> v-card-title channel name </v-card-title>
      <v-list>
        <template v-for="board in boardList" :key="board.boardNo">
          <v-list-item>
            <v-list-item-title>{{ board.boardTitle }}</v-list-item-title>
            <v-list-item-subtitle>{{ board.writerName }}</v-list-item-subtitle>
          </v-list-item>
          <v-divider></v-divider>
        </template>
      </v-list>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "BoardList",
  data() {
    return {
      boardList: [
        { boardNo: 1, boardTitle: "title", writerName: "writer" },
        { boardNo: 2, boardTitle: "title", writerName: "writer" },
        { boardNo: 3, boardTitle: "title", writerName: "writer" },
        { boardNo: 4, boardTitle: "title", writerName: "writer" },
      ],
      channel: "testChannel",
      headers: [
        {
          title: "Number",
          align: "left",
          sortable: false,
          key: "boardNo",
        },
        { title: "Title", key: "boardTitle" },
        { title: "Writer", key: "writerName" },
      ],
    };
  },
  methods: {
    rowClick(event, { item }) {
      this.editedIndex = this.items.indexOf(item);
      this.editedItem = Object.assign({}, item);
      console.log(this.editedIndex);
      console.log(this.editedItem);
      //this.$router('/board/'+this.channel+'/'+item.boardNo);
    },
  },
};
</script>
<style>
</style>