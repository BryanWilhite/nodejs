# `mocha` getting started in the browser

This sample starts with “[Running Mocha in the Browser](https://mochajs.org/#running-mocha-in-the-browser)” but quickly diverges into using `tsc` to generate the Javascript needed for the tests. The escalation starts with:

1) setting up the test HTML file manually, writing `getting-started.spec.js` by hand (see `/step-1` [folder](./__tests__/step-1))
2) overwriting `getting-started.spec.js` with `tsc` output from Typescript source (see `/step-2` [folder](./__tests__/step-2))
3) replacing all <https://unpkg.com> sources with local `node_modules` equivalents (see `/step-3` [folder](./__tests__/step-3))

As of this writing, the Typescript configuration chain looks like this:

```console
mocha-getting-started-browser
|- /__tests__
   |- tsconfig.json
   |- /step-3
      |- tsconfig.json ["module": "None"]
```

The `module` property is set to `None` in the `step-3/tsconfig.json` [file](./__tests__/step-3/tsconfig.json) because `mocha` by default is _not_ expecting Javascript modules. I currently assume that to make `mocha` load modules for testing all we need to do is add `type="module"` to the `script` element loading the test file.

Because we are testing in the browser, the `assert` module [used previously](https://github.com/BryanWilhite/nodejs/blob/b2cebb3227a6bf4d00306af21e65780bc1162239/mocha-and-typescript/packages/mocha-getting-started/__tests__/src/getting-started.spec.ts#L1) _must_ be replaced with reference to a `chai` global:

```typescript
const assert = chai.assert;
```

The `mocha` folks are implying that this must be case by declaring that the `chai` library be loaded in their HTML file [from the very beginning](https://github.com/BryanWilhite/nodejs/blob/1ed2b19f7c60bc59f354162fa1690ac4b20a3e45/mocha-and-typescript/packages/mocha-getting-started-browser/__tests__/step-1/index.html#L12):

```html
<script src="https://unpkg.com/chai/chai.js"></script>
```

## initial setup

From the parent `npm` package [folder](../../../mocha-and-typescript), we started with:

```console
npx lerna create @songhay/mocha-getting-started-browser --description "see README" --yes
npx lerna bootstrap
```

@[BryanWilhite](https://twitter.com/BryanWilhite)
