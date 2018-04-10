import { asyncData } from '../async-data';
import { Hero } from '../../models/hero';

export class HeroServiceSpy {
    testHero: Hero;

    getHero: jasmine.Spy;
    update: jasmine.Spy;

    constructor() {
        this.testHero = { id: 42, name: 'Test Hero' };

        this.getHero = jasmine
            .createSpy('getHero')
            .and.callFake(() => asyncData(Object.assign({}, this.testHero)));

        this.update = jasmine
            .createSpy('update')
            .and.callFake((hero: Hero) =>
                asyncData(Object.assign(this.testHero, hero))
            );
    }
}
