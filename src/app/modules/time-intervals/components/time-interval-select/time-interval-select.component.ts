import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-time-interval-select',
    templateUrl: './time-interval-select.component.html',
    styleUrls: ['./time-interval-select.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimeIntervalSelectComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

}
