import { getRequest } from "@/shared/utils/httpMessenger";

export async function getQuotes(start: string, end: string, frequency: string) {

	return await getRequest("http://127.0.0.1:5000", `/quote?code=605028&start=${start}&end=${end}&frequency=${frequency}`);
}