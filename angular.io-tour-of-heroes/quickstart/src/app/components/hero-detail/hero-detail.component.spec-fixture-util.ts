import { ComponentFixture } from '@angular/core/testing';
import { HeroDetailComponent } from './hero-detail.component';
import { Location } from '@angular/common';

export class ComponentFixtureUtility {
    locationSpy: jasmine.Spy;

    get buttons() {
        return this.queryAll<HTMLButtonElement>('button');
    }

    get nameDisplay() {
        return this.query<HTMLElement>('span');
    }

    get nameInput() {
        return this.query<HTMLInputElement>('input');
    }

    constructor(private fixture: ComponentFixture<HeroDetailComponent>) {
        const componentLocation = fixture.debugElement.injector.get(Location);
        this.locationSpy = componentLocation as any;
    }

    private query<T>(selector: string): T {
        return this.fixture.nativeElement.querySelector(selector);
    }

    private queryAll<T>(selector: string): T[] {
        return this.fixture.nativeElement.querySelectorAll(selector);
    }
}
