import { convertSecondsToMilliseconds } from './convert-seconds-to-milliseconds';

export function convertMinutesToMilliseconds(minutes: number): number {
    return convertSecondsToMilliseconds(minutes * 60);
}
