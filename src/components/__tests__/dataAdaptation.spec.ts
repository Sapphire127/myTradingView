import { describe, it, expect } from 'vitest';
import { convertTime } from '../view/dataAdaptation';

describe('dataAdaptation_test', () => {
    it('happy_path', () => {
        const data = JSON.stringify({ "1218153600000": { "open": "11" }, "1691452800000": { "open": "22" }});
        const modifiedData = [{ time: "2008-08-08", "open": "11" }, { time: "2023-08-08", "open": "22" }];
        expect(convertTime(data)).toStrictEqual(modifiedData);
    })
})