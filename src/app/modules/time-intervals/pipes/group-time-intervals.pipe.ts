import { Pipe, PipeTransform } from '@angular/core';
import { TimeIntervalType } from '../types';
import { DatePipe } from '@angular/common';

@Pipe({
    name: 'groupTimeIntervals',
})
export class GroupTimeIntervalsPipe implements PipeTransform {
    constructor(private datePipe: DatePipe) {
    }

    transform(timeIntervals: TimeIntervalType[] | null): Record<string, TimeIntervalType>[] {
        if (!timeIntervals?.length) {
            return [];
        }
        const groupedTimeIntervalsRecord = this.getGroupedTimeIntervalsRecord(timeIntervals);

        return Object.values(groupedTimeIntervalsRecord);
    }

    private getGroupedTimeIntervalsRecord(timeIntervals: TimeIntervalType[]): Record<string, Record<string, TimeIntervalType>> {
        const groupedIntervals: Record<string, Record<string, TimeIntervalType>> = {};

        timeIntervals.forEach((interval: TimeIntervalType) => {
            const dateKey = this.getDateKey(interval);
            const timeKey = this.getTimeKey(interval);

            if (groupedIntervals[dateKey]) {
                groupedIntervals[dateKey][timeKey] = interval;
            } else {
                groupedIntervals[dateKey] = { [timeKey]: interval };
            }
        });

        return groupedIntervals;
    }

    private getTimeKey(timeInterval: TimeIntervalType): string {
        return this.datePipe.transform(timeInterval.time, 'HH:mm') as string;
    }

    private getDateKey(timeInterval: TimeIntervalType): string {
        return this.datePipe.transform(timeInterval.time, 'yyyy-MM-dd') as string;
    }
}
