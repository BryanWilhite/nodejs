import { DebugElement } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { ComponentFixtureUtility } from '../../mocks/component-fixture-utility';

import { HeroesComponent } from './heroes.component';

export class HeroesComponentFixtureUtility extends ComponentFixtureUtility<HeroesComponent> {
    get heroLineItems(): HTMLLIElement[] {
        return this.queryAll<HTMLLIElement>('li');
    }

    highlightedDebugElement: DebugElement;
    routerSpy: any;

    constructor(fixture: ComponentFixture<HeroesComponent>) {
        super(fixture);
        console.log('constructing HeroesComponentFixtureUtility...');
    }
}
