<script>
import { createChart } from 'lightweight-charts';

// Lightweight Chart instances are stored as normal JS variables
// If you need to use a ref then it is recommended that you use `shallowRef` instead
let series;
let chart;

// Function to get the correct series constructor name for current series type.
function getChartSeriesConstructorName(type) {
	return `add${type.charAt(0).toUpperCase() + type.slice(1)}Series`;
}

// Creates the chart series and sets the data.
const addSeriesAndData = (type, seriesOptions, data) => {
	const seriesConstructor = getChartSeriesConstructorName(type);
	series = chart[seriesConstructor](seriesOptions);
	series.setData(data);
};

// Auto resizes the chart when the browser window is resized.
const resizeHandler = container => {
	if (!chart || !container) return;
	const dimensions = container.getBoundingClientRect();
	chart.resize(dimensions.width, dimensions.height);
};

export default {
	props: {
		type: {
			type: String,
			default: 'candlestick',
		},
		data: {
			type: Array,
			required: true,
		},
		autosize: {
			default: true,
			type: Boolean,
		},
		chartOptions: {
			type: Object,
		},
		seriesOptions: {
			type: Object,
		},
		timeScaleOptions: {
			type: Object,
		},
		priceScaleOptions: {
			type: Object,
		},
	},
	mounted() {
		// Create the Lightweight Charts Instance using the container ref.
		chart = createChart(this.$refs.chartContainer, this.chartOptions);
		addSeriesAndData(this.type, this.seriesOptions, this.data);
        chart.addLineSeries({
        color: 'rgba(4, 111, 232, 1)',
        lineWidth: 2,
        }).setData([
            { time: {year: 2018, month: 10, day: 19}, value: 37.401446370157814 },
            { time: {year: 2018, month: 10, day: 20}, value: 44.14728329801845 },
            { time: {year: 2018, month: 10, day: 21}, value: 43.908512951087765 },
            { time: {year: 2018, month: 10, day: 22}, value: 47.139711966410914 },
            { time: {year: 2018, month: 10, day: 23}, value: 43.78495537329606 },
            { time: {year: 2018, month: 10, day: 24}, value: 46.37910782721347 },
            { time: {year: 2018, month: 10, day: 25}, value: 48.280192310089234 },
            { time: {year: 2018, month: 10, day: 26}, value: 49.63767420501933 },
            { time: {year: 2018, month: 10, day: 27}, value: 43.05752682224708 },
            { time: {year: 2018, month: 10, day: 28}, value: 48.32708061157758 },
            { time: {year: 2018, month: 10, day: 29}, value: 53.39600337663517 },
            { time: {year: 2018, month: 10, day: 30}, value: 46.711006266435355 },
            { time: {year: 2018, month: 10, day: 31}, value: 54.13809826985657 },
            { time: {year: 2018, month: 11, day: 1}, value: 55.79021790616995 },
            { time: {year: 2018, month: 11, day: 2}, value: 49.2873885580548 },
            { time: {year: 2018, month: 11, day: 3}, value: 56.97009522871737 },
            { time: {year: 2018, month: 11, day: 4}, value: 50.823930530973975 },
            { time: {year: 2018, month: 11, day: 5}, value: 54.960060077375076 },
            { time: {year: 2018, month: 11, day: 6}, value: 62.0222568413422 },
            { time: {year: 2018, month: 11, day: 7}, value: 58.20081640960216 },
            { time: {year: 2018, month: 11, day: 8}, value: 65.13004590769961 },
            { time: {year: 2018, month: 11, day: 9}, value: 57.78891076252559 },
            { time: {year: 2018, month: 11, day: 10}, value: 58.792896124952186 },
            { time: {year: 2018, month: 11, day: 11}, value: 61.87890147945707 },
            { time: {year: 2018, month: 11, day: 12}, value: 60.93156560716248 },
            { time: {year: 2018, month: 11, day: 13}, value: 57.85928164082374 },
            { time: {year: 2018, month: 11, day: 14}, value: 70.95139577968187 },
            { time: {year: 2018, month: 11, day: 15}, value: 71.59735270974251 }
        ]);

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
	/*
	 * Watch for changes to any of the component properties.
	 *
	 * If an options property is changed then we will apply those options
	 * on top of any existing options previously set (since we are using the
	 * `applyOptions` method).
	 *
	 * If there is a change to the chart type, then the existing series is removed
	 * and the new series is created, and assigned the data.
	 *
	 */
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
</template>

<style scoped>
.lw-chart {
	height: 100%;
}
</style>