<script setup lang="ts">
import { ref } from 'vue';
import { quotesOf } from './quoteSource';
import LWChart from './LWChart.vue';

const props = defineProps ({
    frequency: String,
});

const data = ref([]);
quotesOf(props.frequency).then(quotes => data.value = quotes);
const chartType = ref('candlestick');
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
</style>