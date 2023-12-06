import moment from "moment";

export function convertTime(data: string) {

    const jsonObj = JSON.parse(data);
    const result: string[] = [];

    for (const key in jsonObj) {
	    if (Object.prototype.hasOwnProperty.call(jsonObj, key)) {
		    jsonObj[key].time = moment(Number(key)).format("yyyy-MM-DD");
		    result.push(jsonObj[key]);
	    }
    }
    return result;
}

export function tweakChartVolume(data: any) {

    const arr: { time: string; value: number }[] = [];
    const volumeArr: number[] = [];
    if (data) {
        data.forEach(function(item: { time: any; volume: number; }) {
            volumeArr.push(item.volume)
        });
        const max = Math.max.apply(null, volumeArr);

        data.forEach(function(item: { time: any; volume: number; }) {
            arr.push({ time: String(item.time), value: item.volume / max * 10 })
        });
    }

	return arr;//纵坐标因为max参数调整有问题？
}