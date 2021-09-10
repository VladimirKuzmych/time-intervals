import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared';
import { timeIntervalRoutes } from './time-intervals.routes';
import { timeIntervalsPipes } from './pipes';
import { timeIntervalsComponents } from './components';


@NgModule({
    declarations: [...timeIntervalsComponents, ...timeIntervalsPipes],
    imports: [
        RouterModule.forChild(timeIntervalRoutes),
        SharedModule,
    ],
    exports: [...timeIntervalsComponents, ...timeIntervalsPipes],
})
export class TimeIntervalsModule {
}
