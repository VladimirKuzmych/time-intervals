import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TimeIntervalsApiService } from './time-intervals-api.service';
import { TimeIntervalType } from '../types';

describe('TimeIntervalsApiService', () => {
    let service: TimeIntervalsApiService;
    let httpMock: HttpTestingController;

    const intervalDiff = 5 * 60 * 1000;
    const requestURL = `/assets/time-interval-responses/${intervalDiff}-milliseconds.json`;
    const apiError = { error: 'Error: Unknown API Error', message: 'API Error' };
    const apiErrorResponseOptions = { status: 400, statusText: 'Bad Request' };

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
        });
        service = TestBed.inject(TimeIntervalsApiService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should return generated time intervals', () => {
        const expectedResult: TimeIntervalType[] = [];

        service.getTimeIntervals({ intervalDiff }).subscribe((actualResult: TimeIntervalType[]) => {
            expect(actualResult).toBe(expectedResult);
        });

        const testRequest = httpMock.expectOne(requestURL);
        expect(testRequest.request.method).toBe('GET');
        testRequest.flush(expectedResult);
    });

    it('should return time intervals get api error', () => {
        service.getTimeIntervals({ intervalDiff }).subscribe({
            error: ({ error }) => expect(error).toEqual(apiError),
        });

        const testRequest = httpMock.expectOne(requestURL);
        testRequest.flush(apiError, apiErrorResponseOptions);
    });
});
