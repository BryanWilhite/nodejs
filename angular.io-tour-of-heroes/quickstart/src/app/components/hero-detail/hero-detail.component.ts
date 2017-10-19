import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../models/hero';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { HeroService } from '../../services/hero.service';

@Component({
    selector: 'hero-detail',
    styleUrls: ['./hero-detail.component.css'],
    templateUrl: './hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit {
    @Input() hero: Hero;

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    goBack(): void {
        this.location.back();
    }

    ngOnInit(): void {
        /*
            “The switchMap operator maps the id in the Observable route parameters
            to a new Observable, the result of the HeroService.getHero() method.”
        */
        this.route.paramMap
            .switchMap(
                (params: ParamMap) =>
                    this.heroService.getHero(+params.get('id'))
                // “the route parameter value is converted to a number with the JavaScript (+) operator”
            )
            .subscribe(hero => (this.hero = hero));
    }
}
