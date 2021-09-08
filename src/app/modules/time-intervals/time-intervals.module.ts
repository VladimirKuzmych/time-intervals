import { NgModule } from '@angular/core';
import { timeIntervalsComponents } from './components';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { timeIntervalRoutes } from './time-intervals.routes';
import { timeIntervalsPipes } from './pipes';


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
