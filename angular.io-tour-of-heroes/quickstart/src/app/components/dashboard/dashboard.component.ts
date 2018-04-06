import { Component, OnInit } from '@angular/core';

import { Hero } from '../../models/hero';
import { HeroService } from '../../services/hero.service';

@Component({
    selector: 'my-dashboard',
    styleUrls: ['./dashboard.component.css'],
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];
    title = 'Top Heroes';

    constructor(private heroService: HeroService) {}

    ngOnInit(): void {
        this.heroService
            .getHeroes()
            .then(heroes => this.heroes = heroes.slice(1, 5));
    }
}
