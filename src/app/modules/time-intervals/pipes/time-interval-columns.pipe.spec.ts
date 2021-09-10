import { DatePipe } from '@angular/common';
import { TimeIntervalColumnsPipe } from './time-interval-columns.pipe';
import { TimePeriodConverterService } from '../../../shared';

describe('TimeIntervalColumnsPipe', () => {
    let pipe: TimeIntervalColumnsPipe

    beforeEach(() => {
        pipe = new TimeIntervalColumnsPipe(new DatePipe('en'), new TimePeriodConverterService());
    });

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('should return empty array if input data is empty', () => {
        expect(pipe.transform(undefined)).toStrictEqual([]);
        expect(pipe.transform(0)).toStrictEqual([]);
    });

    it('should return 00:00 as first result key if input data is not empty', () => {
        expect(pipe.transform(60000)[0].key).toBe('00:00');
    });

    it('should return one item if interval diff is equal to full day', () => {
        const intervalDiff = 24 * 60 * 60 * 1000;

        expect(pipe.transform(intervalDiff)).toHaveLength(1);
    });

    it('should return 00:01 as second result key if interval difference is one minute', () => {
        expect(pipe.transform(60 * 1000)[1].key).toBe('00:01');
    });
});
