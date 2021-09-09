import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { TimeIntervalFilterComponent } from './time-interval-filter.component';
import { SharedModule } from '../../../../shared/shared.module';
import { TimeIntervalSearchType } from '../../types';
import { TIME_INTERVAL_DEFAULT_OPTION } from '../../constants';
import { first } from 'rxjs/operators';
import { MatSelectChange } from '@angular/material/select';

describe('TimeIntervalFilterComponent', () => {
    let component: TimeIntervalFilterComponent;
    let fixture: ComponentFixture<TimeIntervalFilterComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TimeIntervalFilterComponent],
            imports: [SharedModule, NoopAnimationsModule],
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TimeIntervalFilterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should emit default search value on init', done => {
        component.filterInit.pipe(
            first(),
        ).subscribe((search: TimeIntervalSearchType) => {
            expect(search.intervalDiff).toBe(TIME_INTERVAL_DEFAULT_OPTION.value);
            done();
        });

        component.ngOnInit();
    });

    it('should emit search value on filter change', done => {
        const intervalDiff = 123;

        component.filterChange.pipe(
            first(),
        ).subscribe((search: TimeIntervalSearchType) => {
            expect(search.intervalDiff).toBe(intervalDiff);
            done();
        });

        component.onIntervalChange({ value: intervalDiff } as MatSelectChange);
    });
});
