# Angular: “Build your first Angular app”

This is mostly a faithful walkthrough of “[Build your first Angular app](https://angular.dev/tutorials/first-app).” The major difference here is that the Angular CLI (the `ng` command) is _not_ (and will never again) be installed globally on my desktop. This means `npx` (the Node Package eXecutor [📖 [docs](https://docs.npmjs.com/cli/v8/commands/npx)]) must precede all of my `ng` commands.

## other differences

### the use of `--base-href`

The `--base-href` command-line option for `ng build` is needed because the tutorial assumes that the final product will run from the root directory of the server. The `build` script in the `package.json` [file](./package.json) was changed because this would not be my scenario:

```json
"build": "npx ng build --base-href /angular-first-app/dist/first-app/browser/",
```

This change of mine breaks the “root-relative” paths in <acronym title="Cascading Style Sheets">CSS</acronym> like:

```css
.listing-location::before {
    content: url('/public/location-pin.svg') / '';
}
```

…these paths need to be changed to:

```css
.listing-location::before {
    content: url('../../public/location-pin.svg') / '';
}
```

### fetching the `db.json` file from the `public` directory

Instead of simulating an API with `json-server` 📡[GitHub](https://github.com/typicode/json-server), I will fetch a static JSON file, `db.json`, with `HousingService` (in the `housing-service.ts` [file](./src/app/housing-service.ts)):

```typescript
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

    //…

}
```

BTW: instead of using `json-server`, I recommend using <https://mockoon.com/cli/>.

### I failed to see how `ChangeDetectorRef` was arranged by the tutorial…

…so, with the help of Google-search AI, I came up with this (in the `home.ts` [file](./src/app/home/home.ts)):

```typescript
import { ChangeDetectorRef, Component, inject } from '@angular/core';

//…

export class Home {
    filteredLocationList: HousingLocationInfo[] = [];
    housingLocationList: HousingLocationInfo[] = [];
    housingService = inject(HousingService);
    changeDetectorRef = inject(ChangeDetectorRef);

    constructor() {
        this.housingService
            .getAllHousingLocations()
            .then((housingLocationList: HousingLocationInfo[]) => {
                this.housingLocationList = housingLocationList;
                this.filteredLocationList = housingLocationList;
                this.changeDetectorRef.markForCheck();
            });
    }

    //…
}
```

## the `src/` directory layout

```shell
$ tree src

src
├── app
│   ├── app.config.ts
│   ├── app.css
│   ├── app.ts
│   ├── details
│   │   ├── details.css
│   │   └── details.ts
│   ├── home
│   │   ├── home.css
│   │   └── home.ts
│   ├── housing-location
│   │   ├── housing-location.css
│   │   └── housing-location.ts
│   ├── housing-location-info.ts
│   ├── housing-service.ts
│   └── routes.ts
├── assets
│   └── angular.svg
├── favicon.ico
├── index.html
├── main.ts
├── public
│   ├── db.json
│   ├── location-pin.svg
│   └── logo.svg
└── styles.css
```

[Bryan Wilhite is on LinkedIn](https://www.linkedin.com/in/wilhite)🇺🇸💼
