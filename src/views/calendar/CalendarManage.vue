<template>
  <div>
    <v-sheet tile height="54" class="d-flex">
      <v-btn icon class="ma-2" @click="prevMonth">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-select v-model="year" :items="years" dense hide-details class="ma-5" label="연도" @update:model-value="reloadCalendar"></v-select>
      <v-select v-model="month" :items="months" dense hide-details class="ma-5" label="월" @update:model-value="reloadCalendar"></v-select>
      <v-btn icon class="ma-2" @click="nextMonth">
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </v-sheet>
    <v-container class="pa-6">
      <v-table>
        <colgroup>
            <col width="16%">
            <col width="16%">
            <col width="16%">
            <col width="16%">
            <col width="16%">
            <col width="16%">
            <col width="16%">
        </colgroup>
        <thead>
          <!-- 상단 요일 표시 -->
          <template v-for="week in weeks" :key="week">
            <th>
              <p>{{ week }}</p>
            </th>
          </template>
        </thead>
        <!-- row 출력 -->
        <tbody>
          <template v-for="day in weekCol" :key="day">
            <tr>
              <template v-for="d in day" :key="d">
                <td>
                  {{ d }}
                </td>
              </template>
            </tr>
          </template>
        </tbody>
      </v-table>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      year: '',
      month: '',
      years: [2022, 2023],
      months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      weeks: ['일', '월', '화', '수', '목', '금', '토'],
      weekRow: 0,
      weekCol: [],
    };
  },
  mounted() {
    this.year = new Date().getFullYear();
    this.month = new Date().getMonth() + 1;
    this.reloadCalendar();
  },
  methods: {
    reloadCalendar() {
      this.weekRow = this.getWeeksInMonth(this.year, this.month);
      this.weekCol = this.getDaysInMonth(this.year, this.month);
    },
    nextMonth() {
      var nextMonth = new Date(this.year, this.month).getMonth() + 1;
      if (nextMonth == 1) {
        this.year += 1;
      }
      this.month = nextMonth;
    },
    prevMonth() {
      var prevMonth = new Date(this.year, this.month - 2).getMonth() + 1;
      if (prevMonth == 12) {
        this.year -= 1;
      }
      this.month = prevMonth;
    },
    getWeeksInMonth(year, month) {
      const firstDayOfMonth = new Date(year, month - 1, 1);
      const lastDayOfMonth = new Date(year, month, 0);
      const lastWeekOfMonth = lastDayOfMonth.getDay() === 0 ? lastDayOfMonth.getDate() / 7 : Math.floor(lastDayOfMonth.getDate() / 7) + 1;
      const firstWeekOfMonth = firstDayOfMonth.getDay() === 0 ? 1 : 0;
      return lastWeekOfMonth - firstWeekOfMonth + 1;
    },
    getDaysInWeek(week, year, month) {
      const days = [];
      const firstDayOfWeek = new Date(year, month - 1, week * 7);
      for (let i = 0; i < 7; i++) {
        const day = new Date(firstDayOfWeek);
        day.setDate(day.getDate() + i);
        days.push(day.getDate());
      }
      return days;
    },
    getDaysInMonth(year, month) {
      const firstDayOfMonth = new Date(year, month - 1, 1);
      const lastDayOfMonth = new Date(year, month, 0);
      const firstWeekOfMonth = firstDayOfMonth.getDay() === 0 ? 7 : firstDayOfMonth.getDay();
      const lastWeekOfMonth = lastDayOfMonth.getDay() === 0 ? 7 : lastDayOfMonth.getDay();
      
      const daysInWeek = [];
      const days = [];
      
      // Push the days in month to the 'days' array
      for (let i = 1 - firstWeekOfMonth; i <= lastDayOfMonth.getDate() + (6 - lastWeekOfMonth); i++) {
        days.push(new Date(year, month - 1, i).getDate());
      }
      
      // Group days by week
      for (let i = 0; i < days.length; i += 7) {
        daysInWeek.push(days.slice(i, i + 7));
      }
      return daysInWeek;
    },
  },
};
</script>

<style>

</style>
