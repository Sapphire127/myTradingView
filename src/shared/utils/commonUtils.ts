import axios from "axios";

export async function getRequest(
	baseURL: string,
	path: string,
) {
	try {
		const data = await axios.get<any>(path, { baseURL });
		return data;
	} catch (error) {
		console.error("post request error:", error);
		return null;
	}
}