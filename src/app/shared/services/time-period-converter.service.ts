import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class TimePeriodConverterService {
    public convertSecondsToMilliseconds(seconds: number): number {
        return seconds * 1000;
    }

    public convertMinutesToMilliseconds(minutes: number): number {
        return this.convertSecondsToMilliseconds(minutes * 60);
    }

    public convertHoursToMilliseconds(hours: number): number {
        return this.convertMinutesToMilliseconds(hours * 60);
    }

    public convertDaysToMilliseconds(days: number): number {
        return this.convertHoursToMilliseconds(days * 24);
    }
}
