import { Pipe, PipeTransform, TemplateRef } from '@angular/core';
import { DatePipe } from '@angular/common';
import { GridTableColumnConfigType, TimePeriodConverterService } from '../../../shared';

@Pipe({
    name: 'timeIntervalColumns',
})
export class TimeIntervalColumnsPipe implements PipeTransform {
    constructor(private datePipe: DatePipe, private timePeriodConverterService: TimePeriodConverterService) {
    }

    transform(intervalDiff: number | undefined, template?: TemplateRef<any>): GridTableColumnConfigType[] {
        if (!intervalDiff) {
            return [];
        }

        const intervalCount = this.timePeriodConverterService.convertDaysToMilliseconds(1) / intervalDiff;
        const timezoneOffsetMinutes = new Date().getTimezoneOffset();
        const timezoneOffsetMilliseconds = this.timePeriodConverterService.convertMinutesToMilliseconds(timezoneOffsetMinutes);

        return new Array(intervalCount)
            .fill(0)
            .map((_: number, index: number) => ({ template, key: this.datePipe.transform(timezoneOffsetMilliseconds + index * intervalDiff, 'HH:mm') as string}))
    }
}
