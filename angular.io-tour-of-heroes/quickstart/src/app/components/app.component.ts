import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero';
import { HeroService } from '../services/hero.service';

@Component({
    selector: 'my-app',
    providers: [HeroService],
    styleUrls: ['./app.component.css'],
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;
    title = 'Tour of Heroes';

    constructor(private heroService: HeroService) {}
    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => (this.heroes = heroes));
    }
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
    ngOnInit(): void {
        this.getHeroes();
    }
}
