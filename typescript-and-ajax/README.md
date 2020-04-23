# Typescript and the RxJS `ajax` operator

This sample means to represent the most minimal set of `npm` packages required for a [SPA](https://en.wikipedia.org/wiki/Single-page_application). This minimalism takes advantage of modern JavaScript features such as [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals).

From an empty `typescript-and-ajax` [folder](../typescript-and-ajax):

```bash
npm init -y
npm i -s rxjs common-tags
npm i -D typescript \
    @types/common-tags \
    @types/node \
    tslint \
    ts-node \
    webpack \
    webpack-cli
```

The `rxjs` package [[GitHub](https://github.com/ReactiveX/rxjs)] is at the heart of this minimalist build. Its `ajax` operator [📖 [docs](https://rxjs.dev/api/ajax/ajax)] provides the `Observable<T>` support [📖 [docs](https://rxjs.dev/guide/observable)] that is excellent for loading SPA data.

⚠`ajax` uses `XhrHttpRequest` as it emerges in the `rxjs` v5.x time frame. To move ahead to the `rxjs` v6.x world, use `fromFetch` with [a caveat](https://indepth.dev/mastering-rxjs-operators-and-functions-that-can-bite-you-when-you-dont-expect/#fromfetch-function-vs-ajax-const).

The `common-tags` package [[GitHub](https://github.com/zspecza/common-tags)] was included primarily for its `safeHtml` function [📖 [docs](https://github.com/zspecza/common-tags#safehtml)]. This package is introduced and recommended by Bharathvaj Ganesan in “[Tagged Template literals—It’s more than you think](https://codeburst.io/javascript-es6-tagged-template-literals-a45c26e54761).”

⚠`ts-node` had to be installed to prevent an error of the form `Property 'observable' does not exist on type 'SymbolConstructor'` [📖 [issue](https://github.com/ReactiveX/rxjs/issues/3674)].

@[BryanWilhite](https://twitter.com/BryanWilhite)
