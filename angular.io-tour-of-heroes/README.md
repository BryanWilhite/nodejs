# angular.io “Tour of Heroes” tutorial

This sample follows the “[Tour of Heroes](https://angular.io/tutorial)” tutorial, based on the `quickstart` [repository](https://github.com/angular/quickstart).

From the root [folder](../angular.io-tour-of-heroes) of this sample:

```bash
git clone https://github.com/angular/quickstart.git quickstart
rm -rf quickstart/.git
cd quickstart
npm install
npm start
```

From here, we follow [the tutorial](https://angular.io/tutorial). This tutorial introduces the following:

* [The Component Decorator](https://angular.io/api/core/Component)
* “[Showing component properties with interpolation](https://angular.io/guide/displaying-data#showing-component-properties-with-interpolation)”
* “[Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)”
* “[Two-way data binding with ngModel](https://angular.io/guide/forms#ngModel)”
* “[`NgModel`—Two-way binding to form elements with `[(ngModel)]`](https://angular.io/guide/template-syntax#ngModel)”
* “[Showing an array property with `*ngFor`](https://angular.io/guide/displaying-data#ngFor)”
* “The `styles` property on the `@Component` decorator”
* “[User Input](https://angular.io/guide/user-input)”
* “[Event binding ( `(event)` )](https://angular.io/guide/template-syntax#event-binding)”
* [Structural Directives](https://angular.io/guide/structural-directives)
* [Built-in Directives](https://angular.io/guide/template-syntax#directives)
* [NgClass](https://angular.io/guide/template-syntax#ngClass)
* [Naming](https://angular.io/guide/styleguide#naming) (Angular Style Guide)
* [Attribute Directives](https://angular.io/guide/attribute-directives#why-input)
* [NgModules](https://angular.io/guide/ngmodule)
* “[dash-case](https://angular.io/guide/glossary#dash-case)”
* [Dependency Injection](https://angular.io/guide/dependency-injection)
* “[Lifecycle Hooks](https://angular.io/guide/lifecycle-hooks)”
* “[Promises for asynchronous programming](http://exploringjs.com/es6/ch_promises.html)” <sup>*</sup>
* [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
* “[Routing & Navigation](https://angular.io/guide/router)” (“BASE HREF IS ESSENTIAL”)
* “The `forRoot()` method supplies the Router service providers and directives needed for routing, and performs the initial navigation based on the current browser URL.”
* The `<router-outlet>` [Directive](https://angular.io/api/router/RouterOutlet) and The `routerLink` [Directive](https://angular.io/api/router/RouterLink).
* “[ActivatedRoute: the one-stop-shop for route information](https://angular.io/guide/router#activated-route)”
* the [CanDeactivate](https://angular.io/api/router/CanDeactivate) guard and the Routing Module (not be confused with `RouterModule`)
* interpolation binding with the `uppercase` [pipe](https://angular.io/api/common/UpperCasePipe) and the pipe operator (`|`).
* [Angular in-memory-web-api](https://github.com/angular/in-memory-web-api)
* Using `$event.stopPropagation()` in click events to prevent a parent-element click event from firing.
* “The `*ngFor` can’t do anything with an `Observable` until you route it through the `async` pipe (`AsyncPipe` [[docs](https://angular.io/api/common/AsyncPipe)])…”
* [the `switchMap` operator](https://www.learnrxjs.io/operators/transformation/switchmap.html)
* “[Architecture Overview](https://angular.io/guide/architecture)”

<sup>*</sup> Note that [RxJS](https://github.com/Reactive-Extensions/RxJS) Observables can be thought of as a replacement for Promises. A 2016 [Rangle.io](https://rangle.io/) video by [Michael Bennet](https://github.com/bennett000) and [Varun Vachhar](https://github.com/winkerVSbecks) delves into [this topic](https://youtu.be/ucUy0CoN57Q?t=1327).

## slight diversions from the tutorial

I took learnings from [Angular QuickStart](https://angular.io/guide/quickstart) and switched components from using `template` and `styles` to using `templateUrl` and `styleUrls`. This move encouraged me to separate components into folders, making a feature-ish-based `src/app` [folder](./quickstart/src/app) arrangement.

## including testing “fundamentals”

The official documentation, “[Testing](https://angular.io/guide/testing#testing)”, under Fundamentals builds upon the Tour of Heroes source code while introducing the Angular `TestBed` [[guide](https://angular.io/guide/testing#testing-services-with-the-testbed)] for the [Jasmine test framework](http://jasmine.github.io/2.4/introduction.html).

The `app.component.spec.ts` [specification](./quickstart/src/app/components/app.component.spec.ts) shows that dependent components can be ignored with `NO_ERRORS_SCHEMA` [[guide](https://angular.io/guide/testing#no_errors_schema)] and the `RouterLinkMock` [directive](./quickstart/src/app/mocks/directives/router-link-mock.ts) eliminates the need to reference every component indirectly referenced by a `routerLink` directive declared in a template [[guide](https://angular.io/guide/testing#routing-component)].

The `dashboard.component.ts` [specification]( ./quickstart/src/app/components/dashboard/dashboard.component.ts) also uses `NO_ERRORS_SCHEMA` and `RouterLinkMock` but adds the Jasmine ability to mock services with “spies,” `fakeAsync` and `tick` [[guide](https://angular.io/guide/testing#component-with-async-service)].

The `hero-detail.component.spec.ts` [specification](./quickstart/src/app/components/hero-detail/hero-detail.component.spec.ts) rapidly escalates the “fundamentals” of Angular testing. This spec takes a dependency on the `ComponentFixtureUtility` [class](./quickstart/src/app/components/hero-detail/hero-detail.component.spec-fixture-util.ts) which [the official Angular documentation](https://angular.io/guide/testing#use-a-page-object) would call a _page_, representing the members of a component, including the `HTMLElement` instances compiled by the `TestBed` into the fixture. This spec also depends on the most complex Jasmine spy, the `hero-service-spy.ts` [class](./quickstart/src/app/mocks/services/hero-service-spy.ts) which is needed to define multiple spy methods and one domain-model fake.

## the Angular team is not enthusiastic about end-to-end (E2E) testing

In “[Why not rely on E2E tests of DOM integration?](https://angular.io/guide/testing#why-not-rely-on-e2e-tests-of-dom-integration),” the Angular team give four reasons to discourage E2E testing. For detail, see “[Julie Ralph: End to End Angular Testing with Protractor](https://www.youtube.com/watch?v=aQipuiTcn3U&t=90s).”

Also, note that running `ng e2e` should throw an error:

```plaintext
Cannot read property 'config' of null
TypeError: Cannot read property 'config' of null
    at Class.run (.\nodejs\angular.io-tour-of-heroes\quickstart\node_modules\@angular\cli\commands\e2e.js:79:63)
    at resolve (.\nodejs\angular.io-tour-of-heroes\quickstart\node_modules\@angular\cli\ember-cli\lib\models\command.js:261:20)
```

This is [a recognized Angular CLI issue](https://github.com/angular/angular-cli/issues/4736) that seems to be related to lack of “proper” (currently-in-use) CLI configuration _by default_ for this tutorial. In other words, [the Angular 2 QuickStart](https://github.com/angular/quickstart) does not recognize the Angular CLI as of this writing (no `.angular-cli.json` file).

## the Angular in-memory-web-api

The [Angular in-memory-web-api](https://github.com/angular/in-memory-web-api) team provides guidance in this area, specifically `hero.service.spec.ts` [[GitHub](https://github.com/angular/in-memory-web-api/blob/master/src/app/hero.service.spec.ts)] is a treasure trove for the novice. It paved the way toward my [spec](./quickstart/src/app/services/in-memory-data.service.spec.ts), `in-memory-data.service.spec.ts`, working because of changes to the `karma.conf.js` [file](./quickstart/karma.conf.js#L49):

```js
// In Memory Web API
{
    pattern: 'node_modules/angular-in-memory-web-api/**/*.js',
    included: false,
    watched: false
},
{
    pattern: 'node_modules/angular-in-memory-web-api/**/*.js.map',
    included: false,
    watched: false
},
```

@[BryanWilhite](https://twitter.com/bryanwilhite)
