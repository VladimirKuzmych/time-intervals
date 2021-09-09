import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { TIME_INTERVAL_DEFAULT_OPTION, TIME_INTERVAL_OPTIONS } from '../../constants';
import { TimeIntervalSearchType } from '../../types';

@Component({
    selector: 'app-time-interval-filter',
    templateUrl: './time-interval-filter.component.html',
    styleUrls: ['./time-interval-filter.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimeIntervalFilterComponent implements OnInit {
    public timeIntervalOptions = TIME_INTERVAL_OPTIONS;
    public timeIntervalDefaultValue = TIME_INTERVAL_DEFAULT_OPTION.value;

    @Output() public filterChange = new EventEmitter<TimeIntervalSearchType>();
    @Output() public filterInit = new EventEmitter<TimeIntervalSearchType>();

    ngOnInit() {
        this.filterInit.emit({ intervalDiff: this.timeIntervalDefaultValue });
    }

    public onIntervalChange({ value }: MatSelectChange): void {
        this.filterChange.emit({ intervalDiff: value });
    }
}
