# Node.js® under TypeScript

This sample focuses on the language features of TypeScript over Node.js®. Initial installation on bash looks like this:

```bash
npm install --save-dev \
    @types/lodash \
    @types/node \
    lodash \
    tslint \
    typescript
```

Refer to the scripts in the `package.json` [file](./package.json) for the sub-samples available to run from [the root folder](../typescript).

## array-from/

The `array-from/` [sample](./src/array-from) (run `npm run src-array-from`) demonstrates how to generate an array in a manner similar to how it is done with `Enumerable.Range()` in C# [[docs](https://docs.microsoft.com/en-us/dotnet/api/system.linq.enumerable.range?view=netcore-2.1)].

### related links

* `Array.from()` [[docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)]
* `Array.prototype.keys()` [[docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys)]
* `Array.prototype.map()` [[docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)]
* `Array.prototype.forEach()` [[docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)]
* “[tsc error TS2339: Property 'from' does not exist on type](https://github.com/BryanWilhite/nodejs/issues/12)”

## enum/

The `enum/` [sample](./src/enum) (run `npm run src-enum`) shows (me) that [TypeScript enums](https://www.typescriptlang.org/docs/handbook/enums.html) of strings can be directly compared to string literals.

## lodash-filter/

The `lodash-filter/` [sample](./src/lodash-filter) (run `npm run src-lodash-filter`) demonstrates that `_.filter` is no longer needed for ES2015 going forward. It can be replaced with `Array.prototype.filter()` [[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)].

## lodash-group-by/

The `lodash-group-by/` [sample](./src/lodash-group-by) (run `npm run src-lodash-group-by`) is a very strong assertion that [lodash](https://lodash.com/) (or even [underscore.js](http://underscorejs.org/)) has a role to play in “modern” JavaScript. I specifically point out the usefulness of `_.groupBy` [[docs](https://lodash.com/docs/#groupBy)], coupled with enums.

## lodash-map/

The `lodash-map/` [sample](./src/lodash-map) (run `npm run src-lodash-map`) demonstrates that `_.map` is no longer needed for ES2015 going forward. It can be replaced with `Array.prototype.map()` [[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)].

## lodash-template/

The `lodash-template/` [sample](./src/lodash-template) (run `npm run src-lodash-template`) is a tiny proof that reminds me that `_.template` can be replaced by ES2015 [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals).

## map-object/

The `map-object/` [sample](./src/map-object) (run `npm run src-map-object`) introduces the subject of [Keyed collections](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Keyed_collections) in TypeScript from C#-biased point of view by starting with the closest thing to a C# `Dictionary<K, V>`: the `Map<K, V>` interface. (This Mozilla documentation also reminds us to compare `Map` to `Object` itself.)

[Json.NET has this same bias](https://www.newtonsoft.com/json/help/html/SerializeDictionary.htm) toward the C# dictionary. So this sample shows how the [TypeScript Index Signature](https://basarat.gitbooks.io/typescript/docs/types/index-signatures.html) can be used to parse JSON into the `Map<K, V>` interface. Anders Hejlsberg, by the way, introduced [index signatures as early as 2012](https://typescript.codeplex.com/discussions/398359).

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
* [`Partial` Interface](https://netbasal.com/getting-to-know-the-partial-type-in-typescript-ecfcfbc87cb6)

* [Optional Parameters](http://dotnetpattern.com/typescript-optional-parameters)
* [`Object.assign()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)

* [Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

### related links

* “[TypeScript and field initializers](https://stackoverflow.com/questions/14142071/typescript-and-field-initializers)”
* “[Improved syntax to instantiate anonymous classes #13326](https://github.com/Microsoft/TypeScript/issues/13326)”
* “[Shorthand for field initializer when class has computed property](https://stackoverflow.com/questions/46026629/shorthand-for-field-initializer-when-class-has-computed-property?noredirect=1&lq=1)”

## set-object/

The `set-object/` [sample](./src/set-object) (run `npm run src-set-object`) compares `Set<T>` to `Array<T>` (see “Array and Set compared” under [Keyed collections](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Keyed_collections)).

@[BryanWilhite](https://twitter.com/BryanWilhite)