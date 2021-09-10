import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'mapPluck',
})
export class MapPluckPipe implements PipeTransform {
    transform<I, P extends keyof I>(items: I[] | undefined, property: P): I[P][] | undefined {
        if (!items) {
            return items;
        }

        return items.map((item: I) => item[property]);
    }
}
