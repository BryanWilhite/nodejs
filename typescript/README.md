# Node.js® under TypeScript

This sample focuses on the language features of TypeScript over Node.js®. Initial installation on bash looks like this:

```bash
npm install --save-dev \
    @types/node \
    lodash \
    tslint \
    typescript
```

Refer to the scripts in the `package.json` [file](./package.json) for the sub-samples available to run from [the root folder](../typescript).

## minimal/

The `minimal/` [sample](./src/minimal) (run `npm run src-minimal`) is a one-liner, the bare minimum to run over Node.js®.

### related links

* “[Get started with TypeScript in a Node app](https://www.youtube.com/watch?v=kqUw3YnrPPI)”
* “[TypeScript and NodeJS](https://www.youtube.com/watch?v=KjmUKLPhV-M)”

## modules/

The `modules/` [sample](./src/modules) (run `npm run src-modules`) introduces the following concepts:

* [Modules and Export](https://www.typescriptlang.org/docs/handbook/modules.html)
* [Type Assertions](https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md#416-type-assertions)
 (as of this writing there is no documentation for the `as` operator [[GitHub](https://github.com/Microsoft/TypeScript/pull/3564)])

### related links

https://stackoverflow.com/questions/14142071/typescript-and-field-initializers
https://github.com/Microsoft/TypeScript/issues/13326
https://stackoverflow.com/questions/46026629/shorthand-for-field-initializer-when-class-has-computed-property?noredirect=1&lq=1
