# `mocha` getting started in the browser

This sample starts with “[Running Mocha in the Browser](https://mochajs.org/#running-mocha-in-the-browser)” but quickly diverges into using `tsc` to generate the Javascript needed for the tests. The escalation starts with:

1) setting up the test HTML file manually, writing `getting-started.spec.js` by hand (see `/step-1` [folder](./__tests__/step-1))
2) overwriting `getting-started.spec.js` with `tsc` output from Typescript source (see `/step-2` [folder](./__tests__/step-2))
3) replacing all <https://unpkg.com> sources with local `node_modules` equivalents

## initial setup

From the parent `npm` package [folder](../../../mocha-and-typescript), we started with:

```console
npx lerna create @songhay/mocha-getting-started-browser --description "see README" --yes
npx lerna bootstrap
```

@[BryanWilhite](https://twitter.com/BryanWilhite)
