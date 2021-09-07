import { NgModule } from '@angular/core';
import { timeIntervalsComponents } from './components';
import { RouterModule } from '@angular/router';
import { timeIntervalRoutes } from './time-intervals.routes';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
    declarations: [...timeIntervalsComponents],
    imports: [
        RouterModule.forChild(timeIntervalRoutes),
        SharedModule,
    ],
    exports: [...timeIntervalsComponents],
})
export class TimeIntervalsModule {
}
