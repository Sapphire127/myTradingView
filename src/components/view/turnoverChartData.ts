export function turnoverChartData(data: any) {

    const arr: { time: string; value: number }[] = [];

    if (data) {
        // const max = Math.max(...data.map((q: { value: any; }) => q.value));

        // console.log("max is " + max);
        //找到一个最大值，加一个系数调整

        data.forEach(function(item: { time: any; volume: number; }) {
            arr.push({ time: String(item.time), value: item.volume / 10000000 })
        });
    }

	return arr;
}//三个时间段分开写