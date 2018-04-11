import { Hero } from '../../models/hero';

export class HeroServiceSpy {
    testHero: Hero;

    getHero: jasmine.Spy;
    update: jasmine.Spy;

    constructor() {
        this.testHero = { id: 42, name: 'Test Hero' };

        this.getHero = jasmine
            .createSpy('getHero')
            .and.callFake(() =>
                Promise.resolve(Object.assign({}, this.testHero))
            );

        this.update = jasmine
            .createSpy('update')
            .and.callFake((hero: Hero) =>
                Promise.resolve(Object.assign(this.testHero, hero))
            );
    }
}
