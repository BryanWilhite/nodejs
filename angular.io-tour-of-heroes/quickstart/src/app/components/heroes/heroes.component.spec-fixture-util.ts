import { ComponentFixture } from '@angular/core/testing';
import { Router } from '@angular/router';
import { ComponentFixtureUtility } from '../../mocks/component-fixture-utility';

import { HeroesComponent } from './heroes.component';

export class HeroesComponentFixtureUtility extends ComponentFixtureUtility<HeroesComponent> {
    get heroLineItems(): HTMLLIElement[] {
        return this.queryAll<HTMLLIElement>('li');
    }

    routerSpy: jasmine.Spy;

    constructor(fixture: ComponentFixture<HeroesComponent>) {
        super(fixture);
        console.log('constructing HeroesComponentFixtureUtility...');
        const spy = this.fixture.debugElement.injector.get(Router);
        this.routerSpy = spy.navigate as jasmine.Spy;
    }
}
