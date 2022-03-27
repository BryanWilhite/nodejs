# Angular minimal Workspace

A minimal Workspace in Angular is one where:

* there is at least one Angular Library
* there is one or no Angular app with a routing module

This is the 2022 study. The previous study is in [a historical snapshot](https://github.com/BryanWilhite/nodejs/tree/688589d34bb00fd5ffbdadc0879e5fe068b54172/angular-workspace-minimal).

## step 1: generate new workspace

From the `workspace/` [folder](./workspace), run:

```console
npx -p @angular/cli ng new songhay --create-application=false --routing=true --style=scss --verbose=true
```

The `--routing` and `--style` flags are there to prevent prompts while the command is running.

## step 2: generate library

From the `workspace/songhay/` [folder](./workspace/songhay), run:

```console
npx ng generate library @songhay/core --prefix=rx
```

We are using the at-symbol (`@`) syntax which requires a subcategory—in this case it is `core`.

## step 3: generate workspace application

From the `workspace/songhay/` [folder](./workspace/songhay), run:

```console
npx ng generate application studio-floor --routing=true --style=scss
```

The `studio-floor` ‘workspace application’ can be useful for manual testing and display of library types.

The `ng generate application` command will generate the specified application in the `projects/` [folder](./workspace/projects) which is _not_ the case when adding libraries to an existing project.

### my preference for _not_ running `ng` globally

After the project is generated, the `scripts` in `/workspace/songhay/package.json` need to be changed to:

```json
  "scripts": {
    "ng": "npx ng",
    "start": "npx ng serve",
    "build": "npx ng build",
    "watch": "npx ng build --watch --configuration development",
    "test": "npx ng test"
  },
```

## running `ng test`

Running `npx ng test` from the `workspace/songhay/` [folder](./workspace) should start Karma-Jasmine tests _in sequence_, running the library tests first _then_ the app tests (after entering `Ctrl+c` to stop the library tests). This behavior was not expected and is not intuitive.

## running `ng build`

Running `npx ng build` from the `workspace/songhay/` [folder](./workspace) should build the `@songhay/core` library so that it can be imported in `studio-floor` (see “importing library components” below).

From the `workspace/songhay/` [folder](./workspace/songhay), run:

```console
npx ng build @songhay/core
```

## importing library components

[Ed Pelc](https://twitter.com/ed_pelc) advises [in his ngHouston talk](https://www.youtube.com/watch?v=nP7Yodr-WUA?t=1232) that importing library types should be of the form:

```typescript
import { CoreComponent } from '@songhay/core';
```

> Everything comes from the main library name… Only `ng-packagr` sub-packages use deeper imports… —Ed Pelc

In the example here, we should import `CoreComponent` in the `studio-floor` [routing module](./workspace/songhay/projects/studio-floor/src/app/app-routing.module.ts) to navigate to this library component.

### navigating to the `CoreComponent`

Add a new `routerLink` in [`app.component.html`](./workspace/songhay/projects/studio-floor/src/app/app.component.html), leading to the library component, `CoreComponent`:

```html
<h2><a [routerLink]="['songhay/core/component']">Songhay Core Component</a></h2>
```

Running `npx ng serve` should show the new link from the `workspace/songhay/` [folder](./workspace/songhay).

## resources

* “[The Angular Library Series—Creating a Library with Angular CLI](https://blog.angularindepth.com/creating-a-library-in-angular-6-87799552e7e5)”
* “[Angular Workspace: No Application for You!](https://blog.angularindepth.com/angular-workspace-no-application-for-you-4b451afcc2ba)”
* “[ngHouston—Reusable Angular CLI Libraries w/ Lazy Loaded Routes w/ Ed Pelc](https://www.youtube.com/watch?v=nP7Yodr-WUA)”

@[BryanWilhite](https://twitter.com/BryanWilhite)
