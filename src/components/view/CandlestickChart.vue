<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { computed, watch } from 'vue';
import { quotesOf } from './quoteSource';
import LWChart from './LWChart.vue';

const props = defineProps ({
    frequency: String,
});

const data = ref([]);
const route = useRoute();
const code = computed(() => String(route.query.code));
const frequency = props.frequency;

watch(code, newCode =>
    quotesOf(newCode, frequency).then(quotes => data.value = quotes),
);//frequency更新不刷新

const chartType = ref('candlestick');
</script>

<template>
	<div class="chart-container">
		<LWChart
			:type="chartType"
			:data="data"
			:autosize="true"
            :frequency="frequency"
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