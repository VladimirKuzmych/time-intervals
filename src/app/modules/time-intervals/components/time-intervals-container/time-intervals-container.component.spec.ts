import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeIntervalsContainerComponent } from './time-intervals-container.component';

describe('TimeIntervalsContainerComponent', () => {
    let component: TimeIntervalsContainerComponent;
    let fixture: ComponentFixture<TimeIntervalsContainerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TimeIntervalsContainerComponent],
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
});
