<template>
    <h1>ChartPage</h1>
    <Chart :chartData="chartData" :chartOptions="chartOptions"/>
</template>
<script>
import Chart from '@/components/chart.vue'
export default {
    name: 'ChartPage',
    components: {
        Chart
    },
    data(){
        return{
            chartData: {
                labels: [ 'January', 'February', 'March', 'April'],
                datasets: [ { data: [40, 20, 12,50] } ]
            },
            chartOptions: {
                responsive: true
            }
        }
    }
}
</script>
<style>
</style>