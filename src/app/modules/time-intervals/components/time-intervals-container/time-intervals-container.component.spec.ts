import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { first } from 'rxjs/operators';

import { TimeIntervalsApiService } from '../../services/time-intervals-api.service';
import { TimeIntervalSearchType } from '../../types';
import { TimeIntervalsContainerComponent } from './time-intervals-container.component';
import { TimeIntervalFilterComponent } from '../time-interval-filter/time-interval-filter.component';
import { GroupTimeIntervalsPipe } from '../../pipes/group-time-intervals.pipe';
import { TimeIntervalColumnsPipe } from '../../pipes/time-interval-columns.pipe';
import { SharedModule } from '../../../../shared/shared.module';
import { DatePipe } from '@angular/common';

describe('TimeIntervalsContainerComponent', () => {
    let component: TimeIntervalsContainerComponent;
    let fixture: ComponentFixture<TimeIntervalsContainerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TimeIntervalsContainerComponent, TimeIntervalFilterComponent, GroupTimeIntervalsPipe, TimeIntervalColumnsPipe],
            imports: [SharedModule, NoopAnimationsModule],
            providers: [
                {
                    provide: TimeIntervalsApiService,
                    useValue: { getTimeIntervals: jest.fn((_: TimeIntervalSearchType) => of([])) },
                },
                DatePipe,
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

    it('should set time intervals', done => {
        component.applySearch({ intervalDiff: 1e6 });

        component.timeIntervals$.pipe(
            first(),
        ).subscribe(timeIntervals => {
            expect(timeIntervals).toHaveLength(0);
            done();
        });
    });
});
