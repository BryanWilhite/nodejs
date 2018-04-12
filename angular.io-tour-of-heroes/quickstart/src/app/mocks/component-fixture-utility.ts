import { ComponentFixture } from '@angular/core/testing';

export class ComponentFixtureUtility<TComponent> {
    constructor(protected fixture: ComponentFixture<TComponent>) {}

    protected query<TElement>(selector: string): TElement {
        return this.fixture.nativeElement.querySelector(selector);
    }

    protected queryAll<TElement>(selector: string): TElement[] {
        // querySelectorAll() should return a NodeList _not_ an array:
        return Array.from(
            this.fixture.nativeElement.querySelectorAll(selector),
            i => i as TElement
        );
    }
}
