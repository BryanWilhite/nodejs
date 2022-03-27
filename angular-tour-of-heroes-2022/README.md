# Tutorial: Tour of Heroes

This sample follows the “[Tour of Heroes](https://angular.io/tutorial)” tutorial. This is the 2022 time-frame of this tutorial. For earlier times, refer to [a historical GitHub snapshot of the previous study](https://github.com/BryanWilhite/nodejs/tree/0b2f54b45cfa480ee3986618cb2d2344c27fba1a/angular.io-tour-of-heroes).

From the root [folder](../angular-tour-of-2022-heroes) of this sample:

```shell
npx -p @angular/cli ng new angular-tour-of-heroes
```

There is a StackOverflow [answer](https://stackoverflow.com/a/56346181/22944) explaining the `npx -p @angular/cli` prefix which allows me to run the Angular CLI locally. After the project is generated, the `scripts` in `package.json` need to be changed to:

```json
  "scripts": {
    "ng": "npx ng",
    "start": "npx ng serve",
    "build": "npx ng build",
    "watch": "npx ng build --watch --configuration development",
    "test": "npx ng test"
  },
```

## Angular topics

From here, we follow [the tutorial](https://angular.io/tutorial). As of this writing, the tutorial introduces the following concepts/topics in six parts:

### part 1

<https://angular.io/tutorial/toh-pt1>

- Angular CLI 📖 <https://angular.io/cli>
- the `@Component` decorator <https://angular.io/api/core/Component>
- the `ngOnInit()` lifecycle hooks <https://angular.io/guide/lifecycle-hooks>
- interpolation binding syntax `{{ foo }}` 📖 <https://angular.io/guide/interpolation>
- the element selector of the Angular Component 📖 <https://angular.io/tutorial/toh-pt1#selector>
- interpolation binding with the `uppercase` pipe 📖 <https://angular.io/api/common/UpperCasePipe>
- interpolation binding with the pipe operator (`|`)
- two-way binding to form elements with `[(ngModel)]` 📖 <https://angular.io/api/forms/NgModel>
- the `FormsModule` 📖 <https://angular.io/api/forms/FormsModule>
- the top-level `AppModule` class and `@NgModule` <https://angular.io/api/core/NgModule>

### part 2

<https://angular.io/tutorial/toh-pt2>

- the `ngForOf` [structural](https://angular.io/guide/structural-directives) directive (`*ngFor`) 📖 <https://angular.io/api/common/NgForOf#description>
- event-binding syntax `(click)` 📖 <https://angular.io/guide/event-binding>
- the `ngIf` structural directive (`*ngIf`) 📖 <https://angular.io/api/common/NgIf>
- class-binding syntax (`[class.cssName]="myCssName"`) <https://angular.io/guide/attribute-binding#class-binding>

### part 3

<https://angular.io/tutorial/toh-pt3>

- input `@Component` properties with the `@Input` decorator 📖 <https://angular.io/guide/inputs-outputs>
- one-way [property binding](https://angular.io/guide/property-binding#binding-to-a-property) (`[foo]`) with `@Input` properties

### part 4

<https://angular.io/tutorial/toh-pt4>

- dependency injection 📖 <https://angular.io/guide/dependency-injection>
- the `@Injectable` decorator 📖 <https://angular.io/api/core/Injectable>
- providers 📖 <https://angular.io/guide/providers>
- `Observable` in the Rx.JS library<sup>*</sup> <https://rxjs.dev/>
- the “service-in-service” scenario <https://angular.io/tutorial/toh-pt4#inject-it-into-the-heroservice>

___

<sup>*</sup> Note that [RxJS](https://github.com/Reactive-Extensions/RxJS) Observables can be thought of as a replacement for Promises. A 2016 [Rangle.io](https://rangle.io/) video by [Michael Bennet](https://github.com/bennett000) and [Varun Vachhar](https://github.com/winkerVSbecks) delves into [this topic](https://youtu.be/ucUy0CoN57Q?t=1327).

### part 5

<https://angular.io/tutorial/toh-pt5>

- the `RouterModule` 📖 <https://angular.io/api/router/RouterModule>
- the `Routes` array 📖 <https://angular.io/api/router/Routes>
- the `RouterModule.forRoot` method <https://angular.io/api/router/RouterModule#forRoot>
- the `<router-outlet></router-outlet>` element <https://angular.io/api/router/RouterOutlet>
- the `routerLink` directive 📖 <https://angular.io/api/router/RouterLink>
- the `ActivatedRoute` class 📖 <https://angular.io/api/router/ActivatedRoute>
- the `ParamMap` interface 📖 <https://angular.io/api/router/ParamMap>
- the `Location` service 📖 <https://angular.io/api/common/Location>

### part 6

- the `HttpClient` service 📖 <https://angular.io/api/common/http/HttpClient>
- the `HttpClientModule` 📖 <https://angular.io/api/common/http/HttpClientModule>
- the `HttpHeaders` class (for `httpOptions`) 📖 <https://angular.io/api/common/http/HttpHeaders>
- the `of` function 📖 <https://www.learnrxjs.io/learn-rxjs/operators/creation/of>
- the `switchMap` operator 📖 <https://www.learnrxjs.io/operators/transformation/switchmap.html>
- the `map` operator 📖 <https://rxjs.dev/api/operators/map>
- the `catchError` operator 📖 <https://rxjs.dev/api/operators/catchError>
- the `tap` operator 📖 <https://rxjs.dev/api/operators/tap>
- `angular-in-memory-web-api` [GitHub](https://github.com/angular/in-memory-web-api)

## related reading

- Using `$event.stopPropagation()` in click events to prevent a parent-element click event from firing.
- “The `*ngFor` can’t do anything with an `Observable` until you route it through the `async` pipe (`AsyncPipe` [[docs](https://angular.io/api/common/AsyncPipe)])…”
- [Attribute Directives](https://angular.io/guide/attribute-directives#why-input)
- “[Architecture Overview](https://angular.io/guide/architecture)”
- [Naming](https://angular.io/guide/styleguide#naming) (Angular Style Guide)
- “[HTML5 URLs and the `<base href>`](https://angular.io/guide/router#html5-urls-and-the--base-href)”
- the [CanDeactivate](https://angular.io/api/router/CanDeactivate) guard and the Routing Module (not to be confused with `RouterModule`)

@[BryanWilhite](https://twitter.com/BryanWilhite)
