const mockQuotes10m = [
	{ time: Date.parse('2018-10-22 09:00') / 1000, open: 180.34, high: 280.00, low: 178.57, close: 280.00, money: 782763.0, volume: 113537.0 },
	{ time: Date.parse('2018-10-22 09:10') / 1000, open: 280.34, high: 380.34, low: 150.34, close: 150.34, money: 325455.0, volume: 116775.0 },
	{ time: Date.parse('2018-10-22 09:20') / 1000, open: 150.34, high: 580.99, low: 78.57, close: 380.34, money: 345353.0, volume: 115666.0 },
	{ time: Date.parse('2018-10-22 09:30') / 1000, open: 380.34, high: 380.34, low: 80.34, close: 80.34, money: 545455.0, volume: 117455.0 },
	{ time: Date.parse('2018-10-22 09:40') / 1000, open: 80.34, high: 480.99, low: 80.34, close: 100.34, money: 464666.0, volume: 114545.0 },
	{ time: Date.parse('2018-10-22 09:50') / 1000, open: 100.34, high: 580.99, low: 100.34, close: 179.85, money: 347377.0, volume: 113463.0 },
];

const mockQuotes1h = [
    { time: Date.parse('2018-10-22 09:00') / 1000, open: 180.34, high: 280.00, low: 178.57, close: 280.00, money: 782763.0, volume: 13537.0 },
    { time: Date.parse('2018-10-22 10:00') / 1000, open: 280.00, high: 588.99, low: 178.57, close: 178.57, money: 325455.0, volume: 16775.0 },
    { time: Date.parse('2018-10-22 11:00') / 1000, open: 180.00, high: 180.00, low: 18.57, close: 20.00, money: 345353.0, volume: 15666.0 },
    { time: Date.parse('2018-10-22 12:00') / 1000, open: 20.00, high: 180.99, low: 20.00, close: 158.57, money: 545455.0, volume: 17455.0 },
    { time: Date.parse('2018-10-22 13:00') / 1000, open: 158.00, high: 280.99, low: 158.00, close: 250.00, money: 464666.0, volume: 14545.0 },
    { time: Date.parse('2018-10-22 14:00') / 1000, open: 250.34, high: 288.99, low: 248.57, close: 280.00, money: 347377.0, volume: 13463.0 },
];

const mockQuotes1d = [
    { time: '2018-10-21', open: 50.29, high: 55.50, low: 50.29, close: 54.90, money: 7820763.0, volume: 135637.0 },
    { time: '2018-10-22', open: 55.08, high: 55.27, low: 54.61, close: 54.98, money: 3255455.0, volume: 167675.0 },
    { time: '2018-10-23', open: 56.09, high: 57.47, low: 56.09, close: 57.21, money: 3453453.0, volume: 156666.0 },
    { time: '2018-10-24', open: 57.00, high: 58.44, low: 56.41, close: 57.42, money: 5454545.0, volume: 174555.0 },
    { time: '2018-10-25', open: 57.46, high: 57.63, low: 52.17, close: 53.43, money: 4646466.0, volume: 145455.0 },
    { time: '2018-10-26', open: 53.26, high: 56.62, low: 50.19, close: 51.51, money: 4634636.0, volume: 143434.0 },
    { time: '2018-10-29', open: 51.81, high: 57.15, low: 51.72, close: 56.48, money: 3463463.0, volume: 143344.0 },
    { time: '2018-10-30', open: 56.92, high: 58.80, low: 56.92, close: 58.18, money: 4574574.0, volume: 145466.0 },
    { time: '2018-10-31', open: 58.32, high: 58.32, low: 56.76, close: 57.09, money: 2352355.0, volume: 143636.0 },
    { time: '2018-11-01', open: 56.98, high: 57.28, low: 55.55, close: 56.05, money: 6746777.0, volume: 163463.0 },
    { time: '2018-11-02', open: 56.34, high: 57.08, low: 55.92, close: 56.63, money: 3463643.0, volume: 134634.0 },
    { time: '2018-11-05', open: 56.51, high: 57.45, low: 56.51, close: 57.21, money: 3463466.0, volume: 123535.0 },
    { time: '2018-11-06', open: 57.02, high: 57.35, low: 56.65, close: 57.21, money: 7545737.0, volume: 154366.0 },
    { time: '2018-11-07', open: 57.55, high: 57.78, low: 57.03, close: 57.65, money: 3473477.0, volume: 134363.0 },
    { time: '2018-11-08', open: 57.70, high: 58.44, low: 57.66, close: 58.27, money: 4574574.0, volume: 134634.0 },
    { time: '2018-11-09', open: 58.32, high: 59.20, low: 57.94, close: 58.46, money: 6456457.0, volume: 134636.0 },
    { time: '2018-11-10', open: 58.84, high: 69.40, low: 58.54, close: 68.72, money: 3473477.0, volume: 134636.0 },
    { time: '2018-11-11', open: 68.84, high: 69.40, low: 48.54, close: 48.72, money: 4574777.0, volume: 134636.0 },
    { time: '2018-11-12', open: 58.84, high: 59.40, low: 58.54, close: 58.72, money: 4574777.0, volume: 134636.0 },
    { time: '2018-11-13', open: 59.09, high: 59.14, low: 58.32, close: 58.66, money: 6456457.0, volume: 134636.0 },
    { time: '2018-11-14', open: 59.13, high: 59.32, low: 58.41, close: 58.94, money: 4745757.0, volume: 145745.0 },
    { time: '2018-11-15', open: 58.85, high: 66.09, low: 58.45, close: 65.08, money: 6565464.0, volume: 157573.0 },
];

const mockQuotes1w = [
	{ time: '2016-07-18', open: 313.80, high: 345.00, low: 303.57, close: 344.00, money: 782763.0, volume: 13537.0 },
	{ time: '2016-07-25', open: 344.80, high: 350.00, low: 320.57, close: 323.00, money: 325455.0, volume: 16775.0 },
	{ time: '2016-08-01', open: 323.44, high: 360.35, low: 303.57, close: 344.00, money: 6456457.0, volume: 134636.0  },
	{ time: '2016-08-08', open: 323.55, high: 345.00, low: 320.00, close: 345.00, money: 4574777.0, volume: 134636.0 },
	{ time: '2016-08-15', open: 345.67, high: 345.45, low: 323.57, close: 329.00, money: 6456457.0, volume: 134636.0 },
	{ time: '2016-08-22', open: 329.78, high: 332.00, low: 329.57, close: 332.00, money: 4745757.0, volume: 145745.0 },
	{ time: '2016-08-29', open: 332.65, high: 355.00, low: 322.50, close: 354.00, money: 6565464.0, volume: 157573.0 },
];

export function candlestickChartData(frequency: string) {
    if (frequency === "10m") {
        return mockQuotes10m;
    } else if (frequency === "1h") {
        return mockQuotes1h;
    }  else if (frequency === "1d") {
        return mockQuotes1d;
    } else if (frequency === "1w") {
        return mockQuotes1w;
    }
}