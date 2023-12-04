import { getRequest } from "@/shared/utils/commonUtils";

export async function getFund(start: string, end: string, frequency: string) {

	return getRequest("http://127.0.0.1:5000", `/quote?code=605028&start=${start}&end=${end}&frequency=${frequency}`);
}