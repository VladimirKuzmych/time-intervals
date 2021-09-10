import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TimeIntervalSearchType, TimeIntervalType } from '../types';

@Injectable({
    providedIn: 'root',
})
export class TimeIntervalsApiService {
    constructor(private httpClient: HttpClient) {
    }

    public getTimeIntervals({ intervalDiff }: TimeIntervalSearchType): Observable<TimeIntervalType[]> {
        return this.httpClient.get<TimeIntervalType[]>(`/assets/time-interval-responses/${intervalDiff}-milliseconds.json`);
    }
}
