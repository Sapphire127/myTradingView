import { getRequest } from "@/shared/utils/httpMessenger";

export async function getQuotes(code: string, start: string, end: string, frequency: string) {

	return await getRequest("http://127.0.0.1:5000", `/quote?code=${code}&start=${start}&end=${end}&frequency=${frequency}`);
}