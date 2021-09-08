import { Pipe, PipeTransform } from '@angular/core';
import { TimeIntervalType } from '../types';

@Pipe({
    name: 'groupTimeIntervals',
})
export class GroupTimeIntervalsPipe implements PipeTransform {
    transform(timeIntervals: TimeIntervalType[] | null): Record<string, TimeIntervalType[]>{
        if (!timeIntervals?.length) {
            return {};
        }

        return timeIntervals.reduce((groupedIntervals: Record<string, TimeIntervalType[]>, interval: TimeIntervalType) => {
            const dateKey = this.getDateKey(interval);
            return { ...groupedIntervals, [dateKey]: [...groupedIntervals[dateKey] ?? [], interval] };
        }, {});
    }

    private getDateKey(timeInterval: TimeIntervalType): string {
        const date = new Date(timeInterval.time);

        return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
    }
}
