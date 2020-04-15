# Angular minimal Workspace

A minimal Workspace in Angular is one where:

* there is at least one Angular Library
* there is one or no Angular app with a routing module

## step 1: generate new workspace

From the `workspace/` [folder](./workspace), run:

```console
ng new songhay --create-application=false --routing=true --style=scss --verbose=true
```

The `--routing` and `--style` flags are there to prevent prompts while the command is running.

## step 2: generate library

From the `workspace/songhay/` [folder](./workspace/songhay), run:

```console
ng generate library @songhay/core --prefix=rx
```

We are using the at-symbol (`@`) syntax which requires a subcategory—in this case it is `core`.

## step 3: generate workspace application

From the `workspace/songhay/` [folder](./workspace/songhay), run:

```console
ng generate application studio-floor --routing=true --style=scss
```

The `studio-floor` ‘workspace application’ can be useful for manual testing and display of library types.

The `ng generate application` command will generate the specified application in the `projects/` [folder](./workspace/projects) which is _not_ the case when adding libraries to an existing project.

## running `ng test`

Running `ng test` from the `workspace/` [folder](./workspace) should start Karma-Jasmine tests _in sequence_, running the library tests first _then_ the app tests (after entering `Ctrl+c` to stop the library tests). This behavior was not expected and is not intuitive.

## importing library components

[Ed Pelc](https://twitter.com/ed_pelc) advises [in his ngHouston talk](https://www.youtube.com/watch?v=nP7Yodr-WUA?t=1232) that importing library types should be of the form:

```typescript
import { CoreComponent } from '@songhay/core';
```

> Everything comes from the main library name… Only `ng-packagr` sub-packages use deeper imports… —Ed Pelc

In the example here, we should import `CoreComponent` in the `studio-floor` [routing module](./workspace/songhay/projects/studio-floor/src/app/app-routing.module.ts) to navigate to this library component. However, `import` will not work at design time until the library is built.

From the `workspace/songhay/` [folder](./workspace/songhay), run:

```console
ng build @songhay/core
```

Running `ng serve` should show the new link (in [`app.component.html`](./workspace/songhay/projects/studio-floor/src/app/app.component.html)), leading to the library component:

```html
<h2><a [routerLink]="['songhay/core/component']">Songhay Core Component</a></h2>
```

We can now route to the core component as shown in [`app-routing.module.ts`](./workspace/songhay/projects/studio-floor/src/app/app-routing.module.ts), back the routing reference to `CoreComponent` in [`app.module.ts`](./workspace/songhay/projects/studio-floor/src/app/app.module.ts), add a `[routerLink]` to [`app.component.html`](./workspace/songhay/projects/studio-floor/src/app/app.component.html) and build the local app:

```console
ng build studio-floor --prod
```

After the build we can run `ng serve` to see the results.

## resources

* “[The Angular Library Series—Creating a Library with Angular CLI](https://blog.angularindepth.com/creating-a-library-in-angular-6-87799552e7e5)”
* “[Angular Workspace: No Application for You!](https://blog.angularindepth.com/angular-workspace-no-application-for-you-4b451afcc2ba)”
* “[ngHouston—Reusable Angular CLI Libraries w/ Lazy Loaded Routes w/ Ed Pelc](https://www.youtube.com/watch?v=nP7Yodr-WUA)”

@[BryanWilhite](https://twitter.com/BryanWilhite)
