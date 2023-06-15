<template>
  <div>
    <v-sheet tile class="d-flex">
      <v-btn icon class="ma-2" @click="prevMonth">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-select
        v-model="year"
        :items="years"
        dense
        hide-details
        class="ma-5"
        label="연도"
        @update:model-value="reloadCalendar"
      ></v-select>
      <v-select
        v-model="month"
        :items="months"
        dense
        hide-details
        class="ma-5"
        label="월"
        @update:model-value="reloadCalendar"
      ></v-select>
      <v-btn icon class="ma-2" @click="nextMonth">
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </v-sheet>
    <table>
      <thead>
        <!-- 상단 요일 표시 -->
        <tr class="calendarRow">
          <template v-for="week in weeks" :key="week">
            <th class="text-center">
              {{ week }}
            </th>
          </template>
        </tr>
      </thead>
      <!-- row 출력 -->
      <tbody>
        <template v-for="day in weekCol" :key="day">
          <tr class="calendarRow">
            <template v-for="d in day" :key="d">
              <td class="text-center" @click="openCalendarModal(d)">
                {{ d }}
              </td>
            </template>
          </tr>
        </template>
      </tbody>
    </table>
    <v-dialog class="pa-5" v-model="dialog"
      ><CalendarModal
        :year="this.year"
        :month="this.month"
        :day="this.day"
        @modalClose="closeCalendarModal"
      ></CalendarModal>
    </v-dialog>
  </div>
</template>

<script>
import CalendarModal from "./CalendarModal.vue";
export default {
  components: {
    CalendarModal,
  },
  data() {
    return {
      year: "",
      month: "",
      day: "",
      years: [2022, 2023],
      months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      weeks: ["일", "월", "화", "수", "목", "금", "토"],
      weekCol: [],
      dialog: false,
    };
  },
  mounted() {
    this.year = new Date().getFullYear();
    this.month = new Date().getMonth() + 1;
    this.reloadCalendar();
  },
  methods: {
    openCalendarModal(day) {
      this.day = day;
      this.dialog = true;
    },
    closeCalendarModal() {
      this.dialog = false;
    },
    reloadCalendar() {
      this.weekCol = this.getDaysInMonth(this.year, this.month);
    },
    nextMonth() {
      var nextMonth = new Date(this.year, this.month).getMonth() + 1;
      if (nextMonth == 1) {
        this.year += 1;
      }
      this.month = nextMonth;
      this.reloadCalendar();
    },
    prevMonth() {
      var prevMonth = new Date(this.year, this.month - 2).getMonth() + 1;
      if (prevMonth == 12) {
        this.year -= 1;
      }
      this.month = prevMonth;
      this.reloadCalendar();
    },
    getDaysInMonth(year, month) {
      const firstDayOfMonth = new Date(year, month - 1, 1);
      const lastDayOfMonth = new Date(year, month, 0);
      const firstWeekOfMonth =
        firstDayOfMonth.getDay() === 0 ? 7 : firstDayOfMonth.getDay();
      const lastWeekOfMonth = lastDayOfMonth.getDay() === 0 ? 7 : lastDayOfMonth.getDay();

      const daysInWeek = [];
      const days = [];

      // Push the days in month to the 'days' array
      for (
        let i = 1 - firstWeekOfMonth;
        i <= lastDayOfMonth.getDate() + (6 - lastWeekOfMonth);
        i++
      ) {
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

<style scoped>
table {
  margin: 0 auto;
  display: grid;
}

.calendarRow {
  display: grid;
  height: 100px;
  grid-template-columns: repeat(7, 1fr);
}
td,
th {
  border: 1px solid;
}
</style>
