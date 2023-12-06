<script>
import { createChart } from 'lightweight-charts';
import { tweakChartVolume } from './dataAdaptation';

let series;
let chart;

function getChartSeriesConstructorName(type) {
	return `add${type.charAt(0).toUpperCase() + type.slice(1)}Series`;
}

const addSeriesAndData = (type, seriesOptions, data) => {
	const seriesConstructor = getChartSeriesConstructorName(type);
	series = chart[seriesConstructor](seriesOptions);
	series.setData(data);
};

// 调整浏览器窗口大小时自动调整图表大小.
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
        frequency: {
            default: "1d",
            type: String
        },
	},
	mounted() {
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
            }).setData(tweakChartVolume(newData));
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