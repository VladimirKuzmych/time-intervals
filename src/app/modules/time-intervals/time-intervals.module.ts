import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { timeIntervalsComponents } from './components';


@NgModule({
    declarations: [...timeIntervalsComponents],
    imports: [
        CommonModule,
    ],
    exports: [...timeIntervalsComponents],
})
export class TimeIntervalsModule {
}
