import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TimeIntervalsApiService } from '../../services/time-intervals-api.service';

@Component({
    selector: 'app-time-intervals-container',
    templateUrl: './time-intervals-container.component.html',
    styleUrls: ['./time-intervals-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimeIntervalsContainerComponent {
    public timeIntervals$ = this.timeIntervalsApiService.getTimeIntervals({ intervalDiff: 60 * 60 * 1000 });

    constructor(private timeIntervalsApiService: TimeIntervalsApiService) {
    }
}
