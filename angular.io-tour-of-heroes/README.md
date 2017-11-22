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

Also, note that running `ng e2e` should throw an error:

```plaintext
Cannot read property 'config' of null
TypeError: Cannot read property 'config' of null
    at Class.run (.\nodejs\angular.io-tour-of-heroes\quickstart\node_modules\@angular\cli\commands\e2e.js:79:63)
    at resolve (.\nodejs\angular.io-tour-of-heroes\quickstart\node_modules\@angular\cli\ember-cli\lib\models\command.js:261:20)
```

This is [a recognized Angular CLI issue](https://github.com/angular/angular-cli/issues/4736) that seems to be related to lack of “proper” (currently-in-use) CLI configuration _by default_ for this tutorial. In other words, [the Angular 2 QuickStart](https://github.com/angular/quickstart) does not recognize the Angular CLI as of this writing (no `.angular-cli.json` file).

@[BryanWilhite](https://twitter.com/bryanwilhite)
