import { ComponentFixture } from '@angular/core/testing';
import { ComponentFixtureUtility } from '../../mocks/component-fixture-utility';

import { HeroesComponent } from './heroes.component';

export class HeroesComponentFixtureUtility extends ComponentFixtureUtility<HeroesComponent> {
    get buttons(): HTMLButtonElement[] {
        return this.queryAll<HTMLButtonElement>('button');
    }

    get heroLineItems(): HTMLLIElement[] {
        return this.queryAll<HTMLLIElement>('li');
    }

    constructor(fixture: ComponentFixture<HeroesComponent>) {
        super(fixture);
        console.log('constructing HeroesComponentFixtureUtility...');
    }
}
