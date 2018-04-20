import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/hero';
import { HeroService } from '../../services/hero.service';
import { Router } from '@angular/router';

@Component({
    selector: 'my-heroes',
    styleUrls: ['./heroes.component.css'],
    templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;
    title = 'Tour of Heroes';

    constructor(private router: Router, private heroService: HeroService) {}

    ngOnInit(): void {
        this.getHeroes();
    }

    add(name: string): void {
        name = name.trim();
        if (!name) {
            return;
        }
        this.heroService.create(name).then(hero => {
            this.heroes.push(hero);
            this.selectedHero = null;
        });
    }

    delete(hero: Hero): void {
        this.heroService.delete(hero.id).then(() => {
            this.heroes = this.heroes.filter(h => h !== hero);
            if (this.selectedHero === hero) {
                this.selectedHero = null;
            }
        });
    }

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => (this.heroes = heroes));
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
}
