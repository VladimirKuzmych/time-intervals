import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectChange } from '@angular/material/select';
import { first } from 'rxjs/operators';

import { TimeIntervalFilterComponent } from './time-interval-filter.component';
import { SharedModule } from '../../../../shared';
import { TimeIntervalSearchType } from '../../types';

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
            expect(search.intervalDiff).toBeTruthy();
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
