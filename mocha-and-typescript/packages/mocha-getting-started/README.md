# `mocha` getting started

This sample attempts to walk from `mocha` “[Getting Started](https://mochajs.org/#getting-started)” documentation through “[Diffs](https://mochajs.org/#diffs)”.

The `*.spec.ts` file(s) in the `src/` [folder](./src) are defined by the `describe()` function which is regarded as the BDD “Interface” [[docs](https://mochajs.org/#bdd)]. `mocha` supports four other “interfaces” by default.

From the parent `npm` package [folder](../../../mocha-and-typescript), we started with:

```console
npx lerna create @songhay/mocha-getting-started --yes
```

we then set up an extending `tsconfig.json` file in the conventional `/__tests__` folder set up by `lerna`. There was, by the way, an Angular-based motivation to use a `tsconfig.spec.json` file but [this is not really a _general_ thing](https://github.com/BryanWilhite/songhay-web-components/issues/3#issuecomment-626273798)—it’s an Angular thing.

## running the tests here

See the `npm` script, `ts-mocha:test:mocha-getting-started`, in the parent [package file](../../package.json).

## “Detects Multiple Calls to `done()`” commentary

[📖 [docs](https://mochajs.org/#detects-multiple-calls-to-done)]

See “[Understanding `setImmediate()`](https://nodejs.dev/understanding-setimmediate).”

## “Asynchronous Code” commentary

[📖 [docs](https://mochajs.org/#detects-multiple-calls-to-done)]

⚠Note that, by default, `mocha` has a `--timeout` [setting](https://mochajs.org/#-timeout-ms-t-ms) of two seconds. Using our `delay` function with a value `>=2000` will cause a `mocha` [timeout](https://mochajs.org/#timeouts) error.

## “Arrow Functions” commentary

[📖 [docs](https://mochajs.org/#arrow-functions)]

> Passing [arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) (aka "lambdas") to Mocha is discouraged. Lambdas lexically bind `this` and cannot access the Mocha context.

## “Exclusive Tests” commentary

[📖 [docs](https://mochajs.org/#exclusive-tests)]

> The exclusivity feature allows you to run only the specified suite or test-case by appending `.only()` to the function.

## “Inclusive Tests” commentary

[📖 [docs](https://mochajs.org/#inclusive-tests)]

> This feature is the inverse of `.only()`. By appending `.skip()`, you may tell Mocha to simply ignore test case(s). Anything skipped will be marked as [pending](https://mochajs.org/#pending-tests), and reported as such.

@[BryanWilhite](https://twitter.com/BryanWilhite)
