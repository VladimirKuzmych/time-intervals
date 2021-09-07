import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { timeIntervalsComponents } from './components';
import { RouterModule } from '@angular/router';
import { timeIntervalRoutes } from './time-intervals.routes';


@NgModule({
    declarations: [...timeIntervalsComponents],
    imports: [
        CommonModule,
        RouterModule.forChild(timeIntervalRoutes),
    ],
    exports: [...timeIntervalsComponents],
})
export class TimeIntervalsModule {
}
