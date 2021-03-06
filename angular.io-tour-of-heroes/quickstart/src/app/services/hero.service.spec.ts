import { async, TestBed, getTestBed } from '@angular/core/testing';
import { HttpModule, Response } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { HeroService } from './hero.service';
import { Hero } from '../models/hero';

describe('HeroService', () => {
    const testBed: TestBed = getTestBed();
    let service: HeroService;
    let crudHero: Hero;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [HeroService],
            imports: [
                HttpModule,
                InMemoryWebApiModule.forRoot(InMemoryDataService, {
                    apiBase: 'api',
                    delay: 1
                })
            ]
        });
    });

    it(
        'should get mock heroes',
        async(() => {
            service = testBed.get(HeroService);
            expect(service).not.toBeNull();
            service
                .getHeroesMock()
                .catch((response: Response) => {
                    expect(response).toBeUndefined();
                })
                .then((responseOrVoid: Hero[] | void) => {
                    const heroes = responseOrVoid as Hero[];
                    expect(heroes).not.toBeNull();
                    expect(heroes.length).toBeGreaterThan(1);
                });
        })
    );

    it(
        'should get heroes with the in-memory API',
        async(() => {
            service = testBed.get(HeroService);
            expect(service).not.toBeNull();
            service
                .getHeroes()
                .catch((response: Response) => {
                    expect(response).toBeUndefined();
                })
                .then((responseOrVoid: Hero[] | void) => {
                    const heroes = responseOrVoid as Hero[];
                    expect(heroes).not.toBeNull();
                    expect(heroes.length).toBeGreaterThan(1);
                });
        })
    );

    it(
        'should get a hero with the in-memory API',
        async(() => {
            const id = 0;
            service = testBed.get(HeroService);
            expect(service).not.toBeNull();
            service
                .getHero(id)
                .catch((response: Response) => {
                    expect(response).toBeUndefined();
                })
                .then((responseOrVoid: Hero | void) => {
                    const hero = responseOrVoid as Hero;
                    expect(hero).not.toBeNull();
                    expect(hero.id).toBe(id);
                });
        })
    );

    it(
        'should take a hero through CRUD with the in-memory API',
        async () => {
            let heroName = 'Super Tester';
            service = testBed.get(HeroService);
            expect(service).not.toBeNull();

            const testCreateOperation = () => {
                expect(crudHero).not.toBeNull();
                expect(crudHero.name).toBe(heroName);
                console.log(crudHero);
            };

            const testUpdateOperation = () => {
                expect(crudHero).not.toBeNull();
                expect(crudHero.name).toBe(heroName);
                console.log(crudHero);
            };

            console.log('generating hero...');
            crudHero = await service.create(heroName);
            testCreateOperation();

            console.log('updating hero...');
            heroName = 'Super Tester Jr.';
            crudHero.name = heroName;
            crudHero = await service.update(crudHero);
            testUpdateOperation();

            console.log('deleting hero...');
            await service.delete(crudHero.id);
            console.log('hero deleted.');
        }
    );
});
