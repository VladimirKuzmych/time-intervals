import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { TimeIntervalsContainerComponent } from './time-intervals-container.component';
import { TimeIntervalSelectComponent } from '../time-interval-select/time-interval-select.component';
import { TimeIntervalsApiService } from '../../services/time-intervals-api.service';
import { TimeIntervalSearchType } from '../../types';

describe('TimeIntervalsContainerComponent', () => {
    let component: TimeIntervalsContainerComponent;
    let fixture: ComponentFixture<TimeIntervalsContainerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TimeIntervalsContainerComponent, TimeIntervalSelectComponent],
            providers: [
                {
                    provide: TimeIntervalsApiService,
                    useValue: { getTimeIntervals: jest.fn((_: TimeIntervalSearchType) => of([])) } },
            ],
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TimeIntervalsContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should set time intervals', async () => {
        const timeIntervals = await component.timeIntervals$.toPromise();
        expect(timeIntervals).toHaveLength(0);
    });
});
