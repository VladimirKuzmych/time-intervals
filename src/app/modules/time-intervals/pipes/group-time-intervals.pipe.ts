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
        return timeIntervals.reduce((groupedIntervals: Record<string, Record<string, TimeIntervalType>>, interval: TimeIntervalType) => {
            const dateKey = this.getDateKey(interval);
            const timeKey = this.getTimeKey(interval);
            return { ...groupedIntervals, [dateKey]: { ...(groupedIntervals[dateKey] ?? {}), ...{ [timeKey]: interval }}};
        }, {});
    }

    private getTimeKey(timeInterval: TimeIntervalType): string {
        return this.datePipe.transform(timeInterval.time, 'HH:mm') as string;
    }

    private getDateKey(timeInterval: TimeIntervalType): string {
        return this.datePipe.transform(timeInterval.time, 'yyyy-MM-dd') as string;
    }
}
