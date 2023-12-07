import { describe, it, expect } from 'vitest';
import { convertTime } from 'src/components/view/dataAdaptation';

describe('happy_path', () => {
    it('renders properly', () => {
        const data = { "2008-08-08": { "open": "11" }};
        const endData = { time: "1218153600", "open": "11" };
        expect(convertTime(String(data))).toBe(endData)
    })
})