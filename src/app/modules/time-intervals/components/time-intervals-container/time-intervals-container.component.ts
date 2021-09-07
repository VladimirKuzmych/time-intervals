import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-time-intervals-container',
    templateUrl: './time-intervals-container.component.html',
    styleUrls: ['./time-intervals-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimeIntervalsContainerComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

}
