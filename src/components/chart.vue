<template>
    <div id="ChartComponent">
        <Bar
                id="my-chart-id"
                :data="chartData"
                :options="chartOptions"
            />
    </div>
    
</template>
<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
    name: 'ChartComponent',
    components: {
        Bar
    },
    props:{
        chartData : {
            type: Object,
            required: true
        },
        chartOptions:{
            type: Object,
            default: () => {}
        }
    },
}
</script>
<style>
</style>