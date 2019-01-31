# the NPM package with Typescript

This Typescript version of `my-minimal-package` [[folder](../npm-package/package-source/my-minimal-package)] follows the guidance of “[Step by step: Building and publishing an NPM Typescript package](https://itnext.io/step-by-step-building-and-publishing-an-npm-typescript-package-44fe7164964c)” by Carl-Johan Kihl. In summary, the notable modifications are:

* run `npm i --save-dev typescript`
* add `tsconfig.json` (with `"declaration": true`—and `.gitignore` for `compilerOptions.outDir`)
* add `types` to `package.json`
* add script, `"build" : "tsc"`, to `package.json`
* run `npm run build`

Success from here should lead us into the topics of linting and testing, mentioned in Kihl’s article.

## my minimal Typescript package consumer

From the `\minimal` [folder](./package-consumers/minimal) we can run:

```console
npm i ..\..\package-source\my-minimal-typescript-package\
npm run build
node .\lib\main.js
```

@[BryanWilhite](https://twitter.com/BryanWilhite)