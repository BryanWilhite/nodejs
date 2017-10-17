import { Component, Input } from '@angular/core';
import { Hero } from '../../models/hero';

@Component({
    selector: 'hero-detail',
    styleUrls: ['hero-detail.css'],
    templateUrl: 'hero-detail.html'
})
export class HeroDetailComponent {
    @Input() hero: Hero;
}
