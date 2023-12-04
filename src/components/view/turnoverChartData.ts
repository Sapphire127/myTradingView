import { candlestickChartData } from './candlestickChartData';

export function turnoverChartData(frequency: string) {
    const data = candlestickChartData(frequency);
    const arr: { time: string; value: number }[] = [];

    if (data) {
        data.forEach(function(item) {
            arr.push({ time: String(item.time), value: item.volume / 10000 })
        });
    }

	return arr;
}