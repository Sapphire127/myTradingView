import { getQuotes } from './model/quoteService';
import { convertTime } from './dataAdaptation'

const startTime = "1664150400";
const endTime = "1693353600";

export async function quotesOf(code: string, frequency: string) {
    if (frequency === "1d") {
        return await get1dQuotes(code);
    } else if (frequency === "1w") {
        return await get1wQuotes(code);
    }  else if (frequency === "1m") {
        return await get1mQuotes(code);
    }
};

async function get1dQuotes(code: string) {
    const quotes = await getQuotes(code, startTime, endTime, "1d");
    const quotes1d = convertTime(JSON.stringify(quotes));
    return quotes1d
};

async function get1wQuotes(code: string) {
    const quotes = await getQuotes(code, startTime, endTime, "5d");
    const quotes1w = convertTime(JSON.stringify(quotes));
    return quotes1w
};

async function get1mQuotes(code: string) {
    const quotes = await getQuotes(code, startTime, endTime, "30d");
    const quotes1m = convertTime(JSON.stringify(quotes));
    return quotes1m
};