import { candlestickChartData } from './candlestickChartData';

export function turnoverChartData() {
    const data = candlestickChartData();
    const arr: { time: string; value: number }[] = [];
    data.forEach(function(item) {
        arr.push({ time: item.time, value: item.volume / 100000 })
    });

	return arr;
}