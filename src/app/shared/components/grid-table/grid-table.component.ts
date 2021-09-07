import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-grid-table',
    templateUrl: './grid-table.component.html',
    styleUrls: ['./grid-table.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridTableComponent implements OnInit {
    constructor() {
    }

    ngOnInit(): void {
    }
}
