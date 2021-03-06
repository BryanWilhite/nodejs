import { DebugElement } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

export class ComponentFixtureUtility<TComponent> {
    constructor(public fixture: ComponentFixture<TComponent>) {}

    query<TElement>(selector: string): TElement {
        return this.fixture.nativeElement.querySelector(selector) as TElement;
    }

    queryAll<TElement>(selector: string): TElement[] {
        // querySelectorAll() returns NodeList _not_ an array:
        return Array.from(
            this.fixture.nativeElement.querySelectorAll(selector),
            i => i as TElement
        );
    }

    queryAllByDirective(directive: any): DebugElement[] {
        return this.fixture.debugElement.queryAll(By.directive(directive));
    }

    queryByCss(selector: string): DebugElement {
        return this.fixture.debugElement.query(By.css(selector));
    }

    queryByCssToElement<TElement>(selector: string): TElement {
        const de = this.queryByCss(selector);
        return de.nativeElement as TElement;
    }
}
