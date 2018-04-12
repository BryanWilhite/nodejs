import { Location } from '@angular/common';
import { ComponentFixture } from '@angular/core/testing';
import { ComponentFixtureUtility } from '../../mocks/component-fixture-utility';

import { HeroDetailComponent } from './hero-detail.component';

export class HeroDetailComponentFixtureUtility extends ComponentFixtureUtility<
    HeroDetailComponent
> {
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

    constructor(fixture: ComponentFixture<HeroDetailComponent>) {
        super(fixture);
        console.log('constructing HeroDetailComponentFixtureUtility...');
        const componentLocation = fixture.debugElement.injector.get(Location);
        console.log('componentLocation: ', componentLocation);
        this.locationSpy = componentLocation as any;
        console.log('locationSpy: ', this.locationSpy);
    }
}
