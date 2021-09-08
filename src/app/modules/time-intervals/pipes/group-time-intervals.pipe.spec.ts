import { GroupTimeIntervalsPipe } from './group-time-intervals.pipe';
import { TimeIntervalType } from '../types';

describe('GroupTimeIntervalsPipe', () => {
    let pipe: GroupTimeIntervalsPipe;

    beforeEach(() => {
        pipe = new GroupTimeIntervalsPipe();
    });

    it('should create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('should return empty object if input data is empty', () => {
        expect(pipe.transform(null)).toStrictEqual({});
        expect(pipe.transform([])).toStrictEqual({});
    });

    it('should group time interval by date', () => {
        const interval: TimeIntervalType = { time: 0, value: '' };
        const expectedDateKey = '1970-0-1';
        const result = pipe.transform([interval]);

        expect(result).toHaveProperty(expectedDateKey);
        expect(result[expectedDateKey]).toStrictEqual([interval]);
    });

    it('should group few time intervals by date', () => {
        const todayDate = new Date();
        const todayDateKey = `${todayDate.getFullYear()}-${todayDate.getMonth()}-${todayDate.getDate()}`;
        const intervals: TimeIntervalType[] = [
            { time: new Date('1999-10-10').getTime(), value: '' },
            { time: todayDate.getTime(), value: '' },
            { time: Date.now(), value: '' },
        ];
        const result = pipe.transform(intervals);

        expect(result).toHaveProperty(todayDateKey);
        expect(Object.keys(result)).toHaveLength(2);
    });
});
