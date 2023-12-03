<script setup lang="ts">
import { ref } from 'vue';
import LWChart from './composition-api/LWChart.vue';

const seriesOptions = ref({
	color: 'rgb(45, 77, 205)',
});
// const lwChart = ref();
</script>

<template>
    <div class="bottomView ">
        <LWChart
			:autosize="true"
			:series-options="seriesOptions"
			ref="lwChart"
		/>
    </div>
</template>

<style scoped>
.bottomView {
    width: calc(100vw - 100px);
    height: 200px;
    margin: 0 50px;
    font-size: 20px;
    background: black;
    color: white;
}
</style>