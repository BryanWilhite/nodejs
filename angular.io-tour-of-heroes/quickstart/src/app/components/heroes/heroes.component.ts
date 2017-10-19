import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/hero';
import { HeroService } from '../../services/hero.service';

@Component({
    selector: 'my-heroes',
    providers: [HeroService],
    styleUrls: ['./heroes.component.css'],
    templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
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
