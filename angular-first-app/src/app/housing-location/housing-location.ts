import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HousingLocationInfo } from '../housing-location-info';

@Component({
    selector: 'app-housing-location',
    imports: [RouterLink],
    template: `
    <section class="listing">
        <img
            class="listing-photo"
            [src]="housingLocation().photo"
            alt="Exterior photo of {{ housingLocation().name }}"
            crossorigin
            />
        <h2 class="listing-heading">{{ housingLocation().name }}</h2>
        <p class="listing-location">{{ housingLocation().city }}, {{ housingLocation().state }} <a [routerLink]="['/details', housingLocation().id]">Learn More</a></p>
    </section>
    `,
    styleUrl: './housing-location.css',
})
export class HousingLocation {
    housingLocation = input.required<HousingLocationInfo>();
}
