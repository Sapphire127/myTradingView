const mockQuotes10m = [
	{ time: Date.parse('2018-10-22 09:00') / 1000, open: 180.34, high: 280.00, low: 178.57, close: 280.00 },
	{ time: Date.parse('2018-10-22 09:10') / 1000, open: 280.34, high: 380.34, low: 150.34, close: 150.34 },
	{ time: Date.parse('2018-10-22 09:20') / 1000, open: 150.34, high: 580.99, low: 78.57, close: 380.34 },
	{ time: Date.parse('2018-10-22 09:30') / 1000, open: 380.34, high: 380.34, low: 80.34, close: 80.34 },
	{ time: Date.parse('2018-10-22 09:40') / 1000, open: 80.34, high: 480.99, low: 80.34, close: 100.34 },
	{ time: Date.parse('2018-10-22 09:50') / 1000, open: 100.34, high: 580.99, low: 100.34, close: 179.85 },
];
const mockQuotes1h = [
    { time: Date.parse('2018-10-22 09:00') / 1000, open: 180.34, high: 280.00, low: 178.57, close: 280.00 },
    { time: Date.parse('2018-10-22 10:00') / 1000, open: 280.00, high: 588.99, low: 178.57, close: 178.57 },
    { time: Date.parse('2018-10-22 11:00') / 1000, open: 180.00, high: 180.00, low: 18.57, close: 20.00 },
    { time: Date.parse('2018-10-22 12:00') / 1000, open: 20.00, high: 180.99, low: 20.00, close: 158.57 },
    { time: Date.parse('2018-10-22 13:00') / 1000, open: 158.00, high: 280.99, low: 158.00, close: 250.00 },
    { time: Date.parse('2018-10-22 14:00') / 1000, open: 250.34, high: 288.99, low: 248.57, close: 280.00 },
];
const mockQuotes1d = [
	{ time: '2018-10-22', open: 180.34, high: 280.00, low: 158.00, close: 178.00 },
	{ time: '2018-10-23', open: 178.00, high: 289.00, low: 132.57, close: 145.00 },
	{ time: '2018-10-24', open: 145.34, high: 320.54, low: 145.34, close: 299.00 },
	{ time: '2018-10-25', open: 299.34, high: 330.00, low: 299.34, close: 320.00 },
	{ time: '2018-10-26', open: 320.64, high: 333.00, low: 312.57, close: 323.50 },
	{ time: '2018-10-29', open: 323.80, high: 345.00, low: 303.57, close: 344.00 },
];
const mockQuotes1w = [
	{ time: '2016-07-18', open: 313.80, high: 345.00, low: 303.57, close: 344.00 },
	{ time: '2016-07-25', open: 344.80, high: 350.00, low: 320.57, close: 323.00 },
	{ time: '2016-08-01', open: 323.44, high: 360.35, low: 303.57, close: 344.00 },
	{ time: '2016-08-08', open: 323.55, high: 345.00, low: 320.00, close: 345.00 },
	{ time: '2016-08-15', open: 345.67, high: 345.45, low: 323.57, close: 329.00 },
	{ time: '2016-08-22', open: 329.78, high: 332.00, low: 329.57, close: 332.00 },
	{ time: '2016-08-29', open: 332.65, high: 355.00, low: 322.50, close: 354.00 },
];

// const onItemClicked = ()  => {
//     fetchQuotes(code, frequency, start, end)
// };

export const fetchQuotes = (code: string, frequency: string, start: string, end: string) => {
    if (frequency === "10m") {
        return mockQuotes10m;
    } else if (frequency === "1h") {
        return mockQuotes1h;
    } else if (frequency === "1d") {
        return mockQuotes1d;
    } else if (frequency === "1w") {
        return mockQuotes1w;
    }
}