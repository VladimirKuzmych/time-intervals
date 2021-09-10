import { GroupTimeIntervalsPipe } from './group-time-intervals.pipe';
import { TimeIntervalType } from '../types';
import { DatePipe } from '@angular/common';
import { convertMinutesToMilliseconds } from '../../../utils';

describe('GroupTimeIntervalsPipe', () => {
    let pipe: GroupTimeIntervalsPipe;
    const timezoneOffset = new Date().getTimezoneOffset();
    const timezoneOffsetMilliseconds = convertMinutesToMilliseconds(timezoneOffset);

    beforeEach(() => {
        pipe = new GroupTimeIntervalsPipe(new DatePipe('en'));
    });

    it('should create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('should return empty array if input data is empty', () => {
        expect(pipe.transform(null)).toStrictEqual([]);
        expect(pipe.transform([])).toStrictEqual([]);
    });

    it('should group time interval by date', () => {
        const interval: TimeIntervalType = { time: timezoneOffsetMilliseconds, value: '' };
        const result = pipe.transform([interval]);

        expect(result).toHaveLength(1);
        expect(result[0]).toHaveProperty('00:00');
    });

    it('should group few time intervals by date', () => {
        const timestamp = new Date('1999-10-10').getTime() + timezoneOffsetMilliseconds;
        const intervals: TimeIntervalType[] = [
            { time: timestamp, value: '' },
            { time: timestamp + 1, value: '' },
            { time: Date.now(), value: '' },
        ];
        const result = pipe.transform(intervals);

        expect(result).toHaveLength(2);
        expect(result[0]).toHaveProperty('00:00');
    });
});
