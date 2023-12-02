<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref } from 'vue';

/*
 * There are example components in both API styles: Options API, and Composition API
 *
 * Select your preferred style from the imports below:
 */
// import LWChart from './composition-api/LWChart.vue';
import LWChart from './options-api/LWChart.vue';

/**
 * Generates sample data for the Lightweight Charts™ example
 * @returns {Array} sample data
 */
function generateSampleData() {
	var res = [
        { time: '2018-10-19', open: 54.62, high: 55.50, low: 54.52, close: 54.90 },
        { time: '2018-10-22', open: 55.08, high: 55.27, low: 54.61, close: 54.98 },
        { time: '2018-10-23', open: 56.09, high: 57.47, low: 56.09, close: 57.21 },
        { time: '2018-10-24', open: 57.00, high: 58.44, low: 56.41, close: 57.42 },
        { time: '2018-10-25', open: 57.46, high: 57.63, low: 56.17, close: 56.43 },
        { time: '2018-10-26', open: 56.26, high: 56.62, low: 55.19, close: 55.51 },
        { time: '2018-10-29', open: 55.81, high: 57.15, low: 55.72, close: 56.48 },
        { time: '2018-10-30', open: 56.92, high: 58.80, low: 56.92, close: 58.18 },
        { time: '2018-10-31', open: 58.32, high: 58.32, low: 56.76, close: 57.09 },
        { time: '2018-11-01', open: 56.98, high: 57.28, low: 55.55, close: 56.05 },
        { time: '2018-11-02', open: 56.34, high: 57.08, low: 55.92, close: 56.63 },
        { time: '2018-11-05', open: 56.51, high: 57.45, low: 56.51, close: 57.21 },
        { time: '2018-11-06', open: 57.02, high: 57.35, low: 56.65, close: 57.21 },
        { time: '2018-11-07', open: 57.55, high: 57.78, low: 57.03, close: 57.65 },
        { time: '2018-11-08', open: 57.70, high: 58.44, low: 57.66, close: 58.27 },
        { time: '2018-11-09', open: 58.32, high: 59.20, low: 57.94, close: 58.46 },
        { time: '2018-11-12', open: 58.84, high: 59.40, low: 58.54, close: 58.72 },
        { time: '2018-11-13', open: 59.09, high: 59.14, low: 58.32, close: 58.66 },
        { time: '2018-11-14', open: 59.13, high: 59.32, low: 58.41, close: 58.94 },
        { time: '2018-11-15', open: 58.85, high: 59.09, low: 58.45, close: 59.08 },
    ];
	return res;
}

const chartOptions = ref({});
const data = ref(generateSampleData());
const seriesOptions = ref({
	color: 'rgb(45, 77, 205)',
});
const chartType = ref('candlestick');
const lwChart = ref();

// Set a random colour for the series as an example of how
// to apply new options to series. A similar appraoch will work on the
// option properties.
</script>

<template>
	<div class="chart-container">
		<LWChart
			:type="chartType"
			:data="data"
			:autosize="true"
			:chart-options="chartOptions"
			:series-options="seriesOptions"
			ref="lwChart"
		/>
	</div>
</template>
<style scoped>
.chart-container {
    width: calc(100vw - 100px);
	height: 400px;
    margin: 0 auto;
}
</style>