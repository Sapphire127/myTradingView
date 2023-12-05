export function turnoverChartData(data: any) {

    const arr: { time: string; value: number }[] = [];

    if (data) {
        data.forEach(function(item: { time: any; volume: number; }) {
            arr.push({ time: String(item.time), value: item.volume / 1000000 })
        });
    }

	return arr;
}