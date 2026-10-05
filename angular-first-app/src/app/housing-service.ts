import { Service } from '@angular/core';
import { HousingLocationInfo } from './housing-location-info';

@Service()
export class HousingService {

    readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';

    housingLocationList: HousingLocationInfo[] = [];

    url = `${window.location.href}public/db.json`;

    async getAllHousingLocations(): Promise<HousingLocationInfo[]> {

        const data = await fetch(this.url);

        const jO = (await data.json()) ?? [];

        this.housingLocationList = jO.locations;

        return this.housingLocationList;
    }

    getHousingLocationById(id: number): HousingLocationInfo | undefined {

        return this.housingLocationList.find((housingLocation) => housingLocation.id === id);
    }

    submitApplication(firstName: string, lastName: string, email: string) {
        console.log(
            `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,
        );
    }
}
