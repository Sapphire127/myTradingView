import { getQuotes } from './model/quoteService';
import { convertTime } from './dataAdaptation'

const startTime = "1664150400";
const endTime = "1693353600";

async function get1dQuotes() {
    const quotes = await getQuotes(startTime, endTime, "1d");
    const quotes1d = convertTime(JSON.stringify(quotes));
    return quotes1d
};

async function get1wQuotes() {
    const quotes = await getQuotes(startTime, endTime, "5d");
    const quotes1w = convertTime(JSON.stringify(quotes));
    return quotes1w
};

async function get1mQuotes() {
    const quotes = await getQuotes(startTime, endTime, "30d");
    const quotes1m = convertTime(JSON.stringify(quotes));
    return quotes1m
};

export async function quotesOf(frequency: string) {
    if (frequency === "1d") {
        return get1dQuotes();
    } else if (frequency === "1w") {
        return get1wQuotes();
    }  else if (frequency === "1m") {
        return get1mQuotes();
    }
}