import { candlestickChartData } from './candlestickChartData';

export function turnoverChartData(data: any) {
    // const data = await candlestickChartData(frequency);
    const arr: { time: string; value: number }[] = [];

    if (data) {
        data.forEach(function(item: { time: any; volume: number; }) {
            arr.push({ time: String(item.time), value: item.volume / 10000 })
        });
    }

	return arr;
}