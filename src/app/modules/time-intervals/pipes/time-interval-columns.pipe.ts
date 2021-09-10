import { Pipe, PipeTransform, TemplateRef } from '@angular/core';
import { DatePipe } from '@angular/common';
import { convertDaysToMilliseconds, convertMinutesToMilliseconds } from '../../../utils';
import { GridTableColumnConfigType } from '../../../shared/types';

@Pipe({
    name: 'timeIntervalColumns',
})
export class TimeIntervalColumnsPipe implements PipeTransform {
    constructor(private datePipe: DatePipe) {
    }

    transform(intervalDiff: number | undefined, template?: TemplateRef<any>): GridTableColumnConfigType[] {
        if (!intervalDiff) {
            return [];
        }

        const intervalCount = convertDaysToMilliseconds(1) / intervalDiff;
        const timezoneOffsetMinutes = new Date().getTimezoneOffset();
        const timezoneOffsetMilliseconds = convertMinutesToMilliseconds(timezoneOffsetMinutes);

        return new Array(intervalCount)
            .fill(0)
            .map((_: number, index: number) => ({ template, key: this.datePipe.transform(timezoneOffsetMilliseconds + index * intervalDiff, 'HH:mm') as string}))
    }
}
