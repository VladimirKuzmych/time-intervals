import { ChangeDetectorRef, TemplateRef } from '@angular/core';
import { IfInViewportDirective } from './if-in-viewport.directive';


describe('IfInViewportDirective', () => {
    let directive: IfInViewportDirective;
    const observe = jest.fn();
    const disconnect = jest.fn();
    const viewContainerRef = { createEmbeddedView() {} } as any;
    const cdr = { markForCheck() {} } as ChangeDetectorRef;
    const templateRef = {} as TemplateRef<any>;

    beforeAll(() => {
        jest.useFakeTimers();

        window.IntersectionObserver = jest.fn().mockImplementation((callback) => {
            setTimeout(() => callback([{ isIntersecting: false }]), 1000); // emulate not intersection in 1 second
            setTimeout(() => callback([{ isIntersecting: true }]), 2000); // emulate intersection in 2 seconds

            return { observe, disconnect };
        });
    });

    beforeEach(() => {
        directive = new IfInViewportDirective(templateRef, viewContainerRef, cdr);
    });

    afterAll(() => {
        jest.useRealTimers();
    });

    it('should create an instance', () => {
        expect(directive).toBeTruthy();
    });

    it('should start observing element intersections on init', () => {
        directive.ngOnInit();

        expect(observe).toHaveBeenCalled();
    });

    it('should stop observing element intersections on destroy', () => {
        directive.ngOnDestroy();

        expect(disconnect).toHaveBeenCalled();
    });

    it('should change value once element has intersection', () => {
        expect(directive.value).toBeFalsy();

        jest.runAllTimers();

        expect(directive.value).toBeTruthy();
    });
});
