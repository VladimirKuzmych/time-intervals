import { convertMinutesToMilliseconds } from '../../../utils';

export const TIME_INTERVAL_DEFAULT_OPTION = {
    value: convertMinutesToMilliseconds(5),
    label: '5 minutes',
};

export const TIME_INTERVAL_OPTIONS = [
    TIME_INTERVAL_DEFAULT_OPTION,
    { value: convertMinutesToMilliseconds(30), label: '30 minutes' },
    { value: convertMinutesToMilliseconds(60), label: '1 hour' },
];
