import { TimeIntervalSearchType, TimeIntervalType } from "../types";

// Just for JSON generation purpose
function generateTimeIntervals({ intervalDiff }: TimeIntervalSearchType): TimeIntervalType[] {
    const startTimestamp = getStartTimestamp();
    const endTimestamp = getEndTimestamp(startTimestamp);
    const timestampDiff = endTimestamp - startTimestamp;
    const intervalCount = timestampDiff / intervalDiff;

    return new Array(intervalCount)
        .fill(0)
        .map((_: number, index: number) => ({ time: startTimestamp + index * intervalDiff, value: `Detail ${index + 1}` }));
}

function getStartTimestamp(): number {
    const todayDate = new Date();
    const year = todayDate.getFullYear();
    const month = todayDate.getMonth();
    const date = todayDate.getDate();

    return new Date(year, month, date).getTime();
}

function getEndTimestamp(startTimestamp: number): number {
    const endDate = new Date(startTimestamp);
    endDate.setMonth(endDate.getMonth() + 1);

    return endDate.getTime();
}
