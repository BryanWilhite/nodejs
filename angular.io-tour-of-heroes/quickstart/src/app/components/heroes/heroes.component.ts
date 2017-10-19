import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/hero';
import { HeroService } from '../../services/hero.service';
import { Router } from '@angular/router';

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

    constructor(private router: Router, private heroService: HeroService) {}

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => (this.heroes = heroes));
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    ngOnInit(): void {
        this.getHeroes();
    }
}
