import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { GridTableColumnConfigType } from '../../types';

@Component({
    selector: 'app-grid-table',
    templateUrl: './grid-table.component.html',
    styleUrls: ['./grid-table.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridTableComponent {
    // it works slow with large amount of data, I will try to add cdk virtual scroll in the future
    @Input() public columns: GridTableColumnConfigType[] = [];
    @Input() public dataSource: unknown[] = [];
}
