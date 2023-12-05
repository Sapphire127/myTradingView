import { getFund } from './modal/fundService';
import { dataAdaptation } from './dataAdaptation'

async function get1dQuotes() {
    const data = await getFund("1664150400", "1669420800", "1d");
    return data;
};

async function get1wQuotes() {
    const data = await getFund("1664150400", "1669420800", "5d");
    return data;
};

async function get1mQuotes() {
    const data = await getFund("1664150400", "1669420800", "22d");
    return data;
};//暂时无法拿到数据

async function mockQuotes1d() {
    const quotes = await get1dQuotes();
    const quotes1d = dataAdaptation(JSON.stringify(quotes));
    return quotes1d
};

async function mockQuotes1w() {
    const quotes = await get1wQuotes();
    const quotes1w = dataAdaptation(JSON.stringify(quotes));
    return quotes1w
};

async function mockQuotes1m() {
    const quotes = await get1mQuotes();
    const quotes1m = dataAdaptation(JSON.stringify(quotes));
    return quotes1m
};

export async function candlestickChartData(frequency: string) {
    if (frequency === "1d") {
        return mockQuotes1d();
    } else if (frequency === "1w") {
        return mockQuotes1w();
    }  else if (frequency === "1m") {
        return mockQuotes1m;
    }
}