import { TestBed } from '@angular/core/testing';

import { TimeIntervalsApiService } from './time-intervals-api.service';

describe('TimeIntervalsApiService', () => {
    let service: TimeIntervalsApiService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(TimeIntervalsApiService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
