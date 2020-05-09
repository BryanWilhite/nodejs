# `mocha` getting started

This sample attempts to walk through `mocha` [getting started](https://mochajs.org/#getting-started) documentation.

From the parent `npm` package folder, we started with:

```console
npx lerna create @songhay/mocha-getting-started --yes
```

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
