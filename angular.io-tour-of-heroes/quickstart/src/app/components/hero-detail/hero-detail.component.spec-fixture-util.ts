import { ComponentFixture } from '@angular/core/testing';
import { HeroDetailComponent } from './hero-detail.component';
import { Location } from '@angular/common';

export class ComponentFixtureUtility {
    locationSpy: any;

    get buttons(): HTMLButtonElement[] {
        return this.queryAll<HTMLButtonElement>('button');
    }

    get nameDisplay(): HTMLElement {
        return this.query<HTMLElement>('span');
    }

    get nameInput(): HTMLInputElement {
        return this.query<HTMLInputElement>('input');
    }

    constructor(private fixture: ComponentFixture<HeroDetailComponent>) {
        console.log('constructing ComponentFixtureUtility...');
        const componentLocation = fixture.debugElement.injector.get(Location);
        console.log('componentLocation: ', componentLocation);
        this.locationSpy = componentLocation as any;
        console.log('locationSpy: ', this.locationSpy);
    }

    private query<T>(selector: string): T {
        return this.fixture.nativeElement.querySelector(selector);
    }

    private queryAll<T>(selector: string): T[] {
        // querySelectorAll() should return a NodeList _not_ an array:
        return Array.from(
            this.fixture.nativeElement.querySelectorAll(selector),
            i => i as T
        );
    }
}
