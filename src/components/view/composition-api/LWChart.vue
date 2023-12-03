<script>
import { createChart } from 'lightweight-charts';
import { turnoverChartData } from '../turnoverChartData';
import { ref } from 'vue';

// Lightweight Chart instances are stored as normal JS variables
// If you need to use a ref then it is recommended that you use `shallowRef` instead
let series;
let chart;

// Auto resizes the chart when the browser window is resized.
const resizeHandler = container => {
	if (!chart || !container) return;
	const dimensions = container.getBoundingClientRect();
	chart.resize(dimensions.width, dimensions.height);
};

const frequency = ref("10m");

const data = turnoverChartData();

var areaSeries = null;

export default {
	props: {
		autosize: {
			default: true,
			type: Boolean,
		},
		seriesOptions: {
			type: Object,
		}
	},

    setup() {
        function switchTo10m() {
            frequency.value = "10m";
            alert(frequency.value);
            console.log("data is " + JSON.stringify(data.value));

            // if (areaSeries) {
            //     chart.removeSeries(areaSeries);
            //     areaSeries = null;
            // }
            // areaSeries = chart.addAreaSeries({
            //     color: 'rgba(4, 111, 232, 1)',
            //     lineWidth: 2,
            // });
            // areaSeries.setData(data);
        }
        function switchTo1h() {
            frequency.value = "1h";
            alert(frequency.value )
        }
        function switchTo1d() {
            frequency.value = "1d";
            alert(frequency.value )
        }
        function switchTo1w() {
            frequency.value = "1w";
            alert(frequency.value )
        }
        return {
            switchTo10m,
            switchTo1h,
            switchTo1d,
            switchTo1w
        }
    },

	mounted() {
		// Create the Lightweight Charts Instance using the container ref.
		chart = createChart(this.$refs.chartContainer, this.chartOptions);
        chart.addHistogramSeries({
            color: 'rgba(4, 111, 232, 1)',
            lineWidth: 2,
        }).setData(data);

		if (this.priceScaleOptions) {
			chart.priceScale().applyOptions(this.priceScaleOptions);
		}

		if (this.timeScaleOptions) {
			chart.timeScale().applyOptions(this.timeScaleOptions);
		}

		chart.timeScale().fitContent();

		if (this.autosize) {
			window.addEventListener('resize', () =>
				resizeHandler(this.$refs.chartContainer)
			);
		}
	},
	unmounted() {
		if (chart) {
			chart.remove();
			chart = null;
		}
		if (series) {
			series = null;
		}
		window.removeEventListener('resize', resizeHandler);
	},

	watch: {
		autosize(enabled) {
			if (!enabled) {
				window.removeEventListener('resize', () =>
					resizeHandler(this.$refs.chartContainer)
				);
				return;
			}
			window.addEventListener('resize', () =>
				resizeHandler(this.$refs.chartContainer)
			);
		},
		data(newData) {
			if (!series) return;
			series.setData(newData);
		},
		chartOptions(newOptions) {
			if (!chart) return;
			chart.applyOptions(newOptions);
		},
		seriesOptions(newOptions) {
			if (!series) return;
			series.applyOptions(newOptions);
		},
		priceScaleOptions(newOptions) {
			if (!chart) return;
			chart.priceScale().applyOptions(newOptions);
		},
		timeScaleOptions(newOptions) {
			if (!chart) return;
			chart.timeScale().applyOptions(newOptions);
		},
	},
	methods: {
		fitContent() {
			if (!chart) return;
			chart.timeScale().fitContent();
		},
		getChart() {
			return chart;
		},
	},
	expose: ['fitContent', 'getChart'],
};
</script>

<template>
	<div class="lw-chart" ref="chartContainer"></div>
    <button @click="switchTo10m">10m</button>
    <button @click="switchTo1h">1h</button>
    <button @click="switchTo1d">1d</button>
    <button @click="switchTo1w">1w</button>
</template>

<style scoped>
.lw-chart {
	height: 100%;
}
</style>