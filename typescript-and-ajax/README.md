# Typescript and the RxJS `ajax` operator

This sample means to represent the most minimal set of `npm` packages required for a [SPA](https://en.wikipedia.org/wiki/Single-page_application).

```bash
npm init -y
npm i -s rxjs
npm i -D typescript \
    @types/node \
    tslint \
    ts-node \
    webpack \
    webpack-cli
```

⚠`ts-node` had to be installed to prevent an error of the form `Property 'observable' does not exist on type 'SymbolConstructor'` [📖 [issue](https://github.com/ReactiveX/rxjs/issues/3674)].

@[BryanWilhite](https://twitter.com/BryanWilhite)
