import { candlestickChartData } from './candlestickChartData';

interface Quotes {
    time: string,
    open: number,
    high: number,
    low: number,
    close: number,
    money: number,
    volume: number
}

export function turnoverChartData(frequency: string) {
    const data = candlestickChartData(frequency) as Quotes[];
    const arr: { time: string; value: number }[] = [];

    if (data) {
        data.forEach(function(item) {
            arr.push({ time: item.time, value: item.volume / 10000 })
        });
    }

	return arr;
}