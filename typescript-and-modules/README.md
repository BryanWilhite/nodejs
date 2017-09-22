# typescript and modules

Here is a demonstration of using [RequireJS](http://requirejs.org/) with TypeScript, leveraging the ES6 modules feature introduced in a [2015 GitHub issue from Anders Hejlsberg](https://github.com/Microsoft/TypeScript/issues/2242).

This `script` tag is the key to getting RequireJS working:

```html
<script src="./node_modules/requirejs/require.js" data-main="./js/index.js"></script>
```

Run `npm run` to see the custom commands for this demonstration.

## related links

* [TypeScript modules](http://www.typescriptlang.org/docs/handbook/modules.html)
* [TypeScript Modules Demystified](https://www.youtube.com/watch?v=KDrWLMUY0R0)
* [102 AMD vs CommonJS](https://www.youtube.com/watch?v=SUFPJ5CAQP0) [explains that browserify concatenates source code into one large file (similar to `compilerOptions.outFile` in `tsconfig.json`). This video does not show the use of TypeScript].