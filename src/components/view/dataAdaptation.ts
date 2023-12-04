export function dataAdaptation(data: string) {

    const jsonObj = JSON.parse(data);
    const result: string[] = [];

    for (const key in jsonObj) {
	    if (Object.prototype.hasOwnProperty.call(jsonObj, key)) {
		    jsonObj[key].time = key;
		    result.push(jsonObj[key]);

            console.log("res:" + JSON.stringify(result))
	    }
    }
    return result;
}