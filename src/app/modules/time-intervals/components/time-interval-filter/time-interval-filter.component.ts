import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { TimeIntervalSearchType } from '../../types';
import { TimePeriodConverterService } from '../../../../shared';

@Component({
    selector: 'app-time-interval-filter',
    templateUrl: './time-interval-filter.component.html',
    styleUrls: ['./time-interval-filter.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimeIntervalFilterComponent implements OnInit {
    public timeIntervalOptions = [
        { value: this.timePeriodConverterService.convertMinutesToMilliseconds(5), label: '5 minutes' },
        { value: this.timePeriodConverterService.convertMinutesToMilliseconds(30), label: '30 minutes' },
        { value: this.timePeriodConverterService.convertMinutesToMilliseconds(60), label: '1 hour' },
    ];
    public timeIntervalDefaultValue = this.timeIntervalOptions[0].value;

    @Output() public filterChange = new EventEmitter<TimeIntervalSearchType>();
    @Output() public filterInit = new EventEmitter<TimeIntervalSearchType>();

    constructor(private timePeriodConverterService: TimePeriodConverterService) {
    }

    ngOnInit() {
        this.filterInit.emit({ intervalDiff: this.timeIntervalDefaultValue });
    }

    public onIntervalChange({ value }: MatSelectChange): void {
        this.filterChange.emit({ intervalDiff: value });
    }
}
