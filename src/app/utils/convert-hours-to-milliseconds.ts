import { convertMinutesToMilliseconds } from './convert-minutes-to-milliseconds';

export function convertHoursToMilliseconds(hours: number): number {
    return convertMinutesToMilliseconds(hours * 60);
}
