<script>
import { createChart } from 'lightweight-charts';
import { turnoverChartData } from '../turnoverChartData';

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
		seriesOptions: {
			type: Object,
		},
        frequency: {
            default: "10m",
            type: String
        },
	},
	mounted() {
		// Create the Lightweight Charts Instance using the container ref.
		chart = createChart(this.$refs.chartContainer, {
            layout: {
                background: { color: '#222' },
                textColor: '#DDD',
            },
            grid: {
                vertLines: { color: '#444' },
                horzLines: { color: '#444' },
            },
            localization: {
                dateFormat: 'yyyy-MM-dd',
                locale: 'en-US',
            },
            timeScale: {
                timeVisible: true,
            secondsVisible: false,
            },
        });
        addSeriesAndData(this.type, this.seriesOptions, this.data);

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
            chart.addHistogramSeries({
                color: 'rgba(4, 111, 232, 1)',
                lineWidth: 2,
            }).setData(turnoverChartData(newData));
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