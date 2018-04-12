import { Hero } from '../../models/hero';
import { HEROES } from './heroes-mock';

export class HeroServiceSpy {
    testHero: Hero;

    create: jasmine.Spy;
    delete: jasmine.Spy;
    getHero: jasmine.Spy;
    getHeroes: jasmine.Spy;
    update: jasmine.Spy;

    constructor() {
        this.testHero = { id: 42, name: 'Test Hero' };

        this.create = jasmine
            .createSpy('create')
            .and.callFake(() =>
                Promise.resolve(Object.assign({}, this.testHero))
            );

        this.delete = jasmine
            .createSpy('delete')
            .and.callFake(() => Promise.resolve());

        this.getHero = jasmine
            .createSpy('getHero')
            .and.callFake(() =>
                Promise.resolve(Object.assign({}, this.testHero))
            );

        this.getHeroes = jasmine
            .createSpy('getHeroes')
            .and.callFake(() => Promise.resolve(HEROES));

        this.update = jasmine
            .createSpy('update')
            .and.callFake((hero: Hero) =>
                Promise.resolve(Object.assign(this.testHero, hero))
            );
    }
}
