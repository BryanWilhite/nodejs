import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from '../models/hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
    private heroesUrl = 'api/heroes'; // URL to web api

    constructor(private http: Http) {}

    getHeroMock(id: number): Promise<Hero> {
        return this.getHeroesMock().then(heroes =>
            heroes.find(hero => hero.id === id)
        );
    }

    getHeroesMock(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }

    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise(resolve => {
            // Simulate server latency with 2 second delay
            setTimeout(() => resolve(this.getHeroes()), 2000);
        });
    }

    getHero(id: number): Promise<Hero> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http
            .get(url)
            .toPromise()
            .then(response => response.json().data as Hero)
            .catch(this.handleError);
    }

    getHeroes(): Promise<Hero[]> {
        // http.get() returns an RxJS Observable by design
        return this.http
            .get(this.heroesUrl)
            .toPromise()
            .then(response => response.json().data as Hero[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
