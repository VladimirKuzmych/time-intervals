import { MapPluckPipe } from './map-pluck.pipe';

describe('MapPluckPipe', () => {
    let pipe: MapPluckPipe;

    beforeEach(() => {
        pipe = new MapPluckPipe();
    });

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('should return undefined if input data is not passed', () => {
        expect(pipe.transform<{ key: string }, 'key'>(undefined, 'key')).toBeUndefined();
    });

    it('should return empty array if empty array is passed', () => {
        expect(pipe.transform([], 'key')).toStrictEqual([]);
    });

    it('should map array and take property value', () => {
        const items = [{ key: 123 }];

        expect(pipe.transform(items, 'key')).toHaveLength(1);
        expect(pipe.transform(items, 'key')).toStrictEqual([123]);
    });
});
