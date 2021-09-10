import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridTableComponent } from './grid-table.component';
import { SharedModule } from '../../shared.module';

describe('GridTableComponent', () => {
    let component: GridTableComponent;
    let fixture: ComponentFixture<GridTableComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SharedModule],
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(GridTableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
