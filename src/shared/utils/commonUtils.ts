import axios from "axios";

export interface Response<T> {
	code: string;
	body: T;
	message: string;
}

export async function getRequest(
	baseURL: string,
	path: string,
) {
	try {
		const data = await axios.get<Response<any>>(path, { baseURL });
		return data;
	} catch (error) {
		console.error("post request error:", error);
		return null;
	}
}