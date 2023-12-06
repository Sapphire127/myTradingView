<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref } from 'vue';
import { quotesOf } from './quoteSource';
/*
 * There are example components in both API styles: Options API, and Composition API
 *
 * Select your preferred style from the imports below:
 */
// import LWChart from './composition-api/LWChart.vue';
import LWChart from './LWChart.vue';

/**
 * Generates sample data for the Lightweight Charts™ example
 * @returns {Array} sample data
 */

const props = defineProps ({
    frequency: String,
});

const data = ref([]);
quotesOf(props.frequency).then(quotes => data.value = quotes);
const chartType = ref('candlestick');

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
            :frequency="props.frequency"
			ref="lwChart"
		/>
	</div>
</template>
<style scoped>
.chart-container {
    width: calc(100vw - 100px);
	height: calc(100vh - 150px);
    margin: 0 auto;
}
</style>./quoteSource