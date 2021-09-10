import { TestBed } from '@angular/core/testing';

import { TimePeriodConverterService } from './time-period-converter.service';

describe('TimePeriodConverterService', () => {
    let service: TimePeriodConverterService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(TimePeriodConverterService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should return 0 if input data is 0', () => {
        expect(service.convertSecondsToMilliseconds(0)).toBe(0);
        expect(service.convertMinutesToMilliseconds(0)).toBe(0);
        expect(service.convertHoursToMilliseconds(0)).toBe(0);
        expect(service.convertDaysToMilliseconds(0)).toBe(0);
    });

    it('should convert minutes to milliseconds correctly', () => {
        const spy = jest.spyOn(service, 'convertSecondsToMilliseconds');
        expect(service.convertMinutesToMilliseconds(1.5)).toBe(90 * 1000);
        expect(spy).toHaveBeenCalled();

        spy.mockRestore();
    });

    it('should call inner methods for converting days to milliseconds', () => {
        const spy = jest.spyOn(service, 'convertSecondsToMilliseconds');
        service.convertDaysToMilliseconds(2);
        expect(spy).toHaveBeenCalled();

        spy.mockRestore();
    });
});
