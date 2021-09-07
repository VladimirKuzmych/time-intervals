import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeIntervalSelectComponent } from './time-interval-select.component';

describe('TimeIntervalSelectComponent', () => {
    let component: TimeIntervalSelectComponent;
    let fixture: ComponentFixture<TimeIntervalSelectComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TimeIntervalSelectComponent],
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TimeIntervalSelectComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
