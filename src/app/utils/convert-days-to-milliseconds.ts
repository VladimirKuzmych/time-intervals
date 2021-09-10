import { convertHoursToMilliseconds } from './convert-hours-to-milliseconds';

export function convertDaysToMilliseconds(days: number): number {
    return convertHoursToMilliseconds(days * 24);
}
