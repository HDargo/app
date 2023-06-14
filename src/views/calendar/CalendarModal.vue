<template>
  <div id="calendarModal">
    <v-card>
      <v-card-title>Modify Calendar Day</v-card-title>
      <v-card-item>{{ year }} 년 {{ month }} 월 {{ day }} 일</v-card-item>
      <v-card-item><v-text-field></v-text-field></v-card-item>
      <v-card-actions>
        <v-btn @click="close">close</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "calendarModal",
  props: ["year", "month", "day"],
  created() {
    console.log("calendarModal created");
  },
  data() {
    return {
      name: "",
    };
  },
  methods: {
    close() {
      this.$emit("modalClose");
    },
  },
};
</script>

<style>
</style>