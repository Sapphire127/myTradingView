<script setup lang="ts">
import { ref } from 'vue';
import LWChart from './options-api/LWChart.vue';

function createSimpleSwitcher(items, activeItem, activeItemChangedCallback) {
	var switcherElement = document.createElement('div');
	switcherElement.classList.add('switcher');

	var intervalElements = items.map(function(item) {
		var itemEl = document.createElement('button');
		itemEl.innerText = item;
		itemEl.classList.add('switcher-item');
		itemEl.classList.toggle('switcher-active-item', item === activeItem);
		itemEl.addEventListener('click', function() {
			onItemClicked(item);
		});
		switcherElement.appendChild(itemEl);
		return itemEl;
	});

	function onItemClicked(item) {
		if (item === activeItem) {
			return;
		}

		intervalElements.forEach(function(element, index) {
			element.classList.toggle('switcher-active-item', items[index] === item);
		});

		activeItem = item;

		activeItemChangedCallback(item);
	}

	return switcherElement;
}

var intervals = ['1D', '1W', '1M', '1Y'];

var dayData = [
	{ time: '2018-10-19', value: 26.19 },
	{ time: '2018-10-22', value: 25.87 },
	{ time: '2018-10-23', value: 25.83 },
	{ time: '2018-10-24', value: 25.78 },
	{ time: '2018-10-25', value: 25.82 },
	{ time: '2018-10-26', value: 25.81 },
	{ time: '2018-10-29', value: 25.82 },
	{ time: '2018-10-30', value: 25.71 },
	{ time: '2018-10-31', value: 25.82 },
	{ time: '2018-11-01', value: 25.72 }
];

var weekData = [
	{ time: '2016-07-18', value: 26.10 },
	{ time: '2016-07-25', value: 26.19 },
	{ time: '2016-08-01', value: 26.24 },
	{ time: '2016-08-08', value: 26.22 },
	{ time: '2016-08-15', value: 25.98 },
	{ time: '2016-08-22', value: 25.85 },
	{ time: '2016-08-29', value: 25.98 },
	{ time: '2016-09-05', value: 25.71 },
	{ time: '2016-09-12', value: 25.84 },
	{ time: '2016-09-19', value: 25.89 }
];

var monthData = [
	{ time: '2006-12-01', value: 25.40 },
	{ time: '2007-01-01', value: 25.50 },
	{ time: '2007-02-01', value: 25.11 },
	{ time: '2007-03-01', value: 25.24 },
	{ time: '2007-04-02', value: 25.34 },
	{ time: '2007-05-01', value: 24.82 },
	{ time: '2007-06-01', value: 23.85 },
	{ time: '2007-07-02', value: 23.24 },
	{ time: '2007-08-01', value: 23.05 },
	{ time: '2007-09-03', value: 22.26 }
];

var yearData = [
	{ time: '2006-01-02', value: 24.89 },
	{ time: '2007-01-01', value: 25.50 },
	{ time: '2008-01-01', value: 23.90 },
	{ time: '2009-01-01', value: 15.40 },
	{ time: '2010-01-01', value: 22.00 },
	{ time: '2011-01-03', value: 23.73 },
	{ time: '2012-01-02', value: 24.84 },
	{ time: '2013-01-01', value: 25.26 },
	{ time: '2014-01-01', value: 24.98 },
	{ time: '2015-01-01', value: 25.95 }
];

var seriesesData = new Map([
  ['1D', dayData ],
  ['1W', weekData ],
  ['1M', monthData ],
  ['1Y', yearData ],
]);

const chartOptions = ref({});
const data = ref(seriesesData);
const seriesOptions = ref({
	color: 'rgb(45, 77, 205)',
});
const chartType = ref('candlestick');
const lwChart = ref();
var areaSeries = null;
</script>

<template>
    <div class="bottomView ">
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
.bottomView {
    width: calc(100vw - 100px);
    height: 200px;
    margin: 0 50px;
    font-size: 20px;
    background: black;
    color: white;
}
</style>