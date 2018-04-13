import { ComponentFixture } from '@angular/core/testing';
import { ComponentFixtureUtility } from '../../mocks/component-fixture-utility';

import { HeroesComponent } from './heroes.component';

export class HeroesComponentFixtureUtility extends ComponentFixtureUtility<
    HeroesComponent
> {
    get buttons(): HTMLButtonElement[] {
        return this.queryAll<HTMLButtonElement>('button');
    }

    get headers(): HTMLHeadingElement[] {
        return this.queryAll<HTMLHeadingElement>('h2');
    }

    get heroLineItems(): HTMLLIElement[] {
        return this.queryAll<HTMLLIElement>('li');
    }

    get inputs(): HTMLInputElement[] {
        return this.queryAll<HTMLInputElement>('input');
    }

    getButton(li: HTMLLIElement): HTMLButtonElement {
        return li.querySelector('button') as HTMLButtonElement;
    }

    constructor(fixture: ComponentFixture<HeroesComponent>) {
        super(fixture);
        console.log('constructing HeroesComponentFixtureUtility...');
    }
}
