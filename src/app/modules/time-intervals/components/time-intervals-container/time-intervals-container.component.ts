import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { TimeIntervalsApiService } from '../../services/time-intervals-api.service';
import { TimeIntervalSearchType } from '../../types';

@Component({
    selector: 'app-time-intervals-container',
    templateUrl: './time-intervals-container.component.html',
    styleUrls: ['./time-intervals-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimeIntervalsContainerComponent {
    private searchSubject = new ReplaySubject<TimeIntervalSearchType>(1);
    public search$ = this.searchSubject.asObservable();

    public timeIntervals$ = this.search$.pipe(
        switchMap((search: TimeIntervalSearchType) => this.timeIntervalsApiService.getTimeIntervals(search)),
    );

    constructor(private timeIntervalsApiService: TimeIntervalsApiService) {
    }

    public applySearch(search: TimeIntervalSearchType): void {
        this.searchSubject.next(search);
    }
}
