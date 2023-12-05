import moment from "moment";

export function dataAdaptation(data: string) {

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