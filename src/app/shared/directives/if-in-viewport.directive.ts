import { ChangeDetectorRef, Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[appIfInViewport]',
    exportAs: 'ifInViewport',
})
export class IfInViewportDirective implements OnInit, OnDestroy {
    @Input('appIfInViewport') public element!: HTMLElement;

    public value = false;

    private intersectionCallback = ([{ isIntersecting }]: IntersectionObserverEntry[]) => {
        if (isIntersecting) {
            this.value = isIntersecting;
            this.viewContainerRef.createEmbeddedView(this.templateRef);
            this.intersectionObserver.disconnect();
            this.cdr.markForCheck();
        }
    }
    private intersectionObserver = new IntersectionObserver(this.intersectionCallback);

    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainerRef: ViewContainerRef,
        private cdr: ChangeDetectorRef,
    ) {
    }

    ngOnInit() {
        this.intersectionObserver.observe(this.element);
    }

    ngOnDestroy() {
        this.intersectionObserver.disconnect();
    }
}
