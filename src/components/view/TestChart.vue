<script setup>
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
 * @param  {Boolean} ohlc Whether generated dat should include open, high, low, and close values
 * @returns {Array} sample data
 */
function generateSampleData(ohlc) {
	const randomFactor = 25 + Math.random() * 25;
	function samplePoint(i) {
		return (
			i *
				(0.5 +
					Math.sin(i / 10) * 0.2 +
					Math.sin(i / 20) * 0.4 +
					Math.sin(i / randomFactor) * 0.8 +
					Math.sin(i / 500) * 0.5) +
			200
		);
	}

	const res = [];
	let date = new Date(Date.UTC(2018, 0, 1, 0, 0, 0, 0));
	const numberOfPoints = ohlc ? 100 : 500;
	for (var i = 0; i < numberOfPoints; ++i) {
		const time = date.getTime() / 1000;
		const value = samplePoint(i);
		if (ohlc) {
			const randomRanges = [
				-1 * Math.random(),
				Math.random(),
				Math.random(),
			].map(i => i * 10);
			const sign = Math.sin(Math.random() - 0.5);
			res.push({
				time,
				low: value + randomRanges[0],
				high: value + randomRanges[1],
				open: value + sign * randomRanges[2],
				close: samplePoint(i + 1),
			});
		} else {
			res.push({
				time,
				value,
			});
		}

		date.setUTCDate(date.getUTCDate() + 1);
	}

	return res;
}

const chartOptions = ref({});
const data = ref(generateSampleData(true));
const seriesOptions = ref({
	color: 'rgb(45, 77, 205)',
});
const chartType = ref('candlestick');
const lwChart = ref();

// Set a random colour for the series as an example of how
// to apply new options to series. A similar appraoch will work on the
// option properties.

const changeData = () => {
	data.value = generateSampleData('candlestick');

    const average =
        newData.reduce((s, c) => {
            return s + c.value;
        }, 0) / newData.length;
    seriesOptions.value = { baseValue: { type: 'price', price: average } };
};
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
	<button type="button" @click="changeData">Change Data</button>
</template>
<style scoped>
.chart-container {
    width: 1000px;
	height: 800px;
    margin: 0 auto;
}
</style>