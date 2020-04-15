# typescript and modules

Here is a demonstration of using `rollup` [[GitHub](https://github.com/rollup/rollup)] with TypeScript, leveraging the findings in the `web-components-lit-element` [sample](../web-components-lit-element).

When the `typescript-and-modules/` [folder](../typescript-and-modules) was empty, these were the setup steps:

```console
npm init -y
npm i typescript
npm i -D rollup rollup-plugin-filesize rollup-plugin-node-resolve rollup-plugin-terser @rollup/plugin-replace
```

## related links

- [TypeScript modules](http://www.typescriptlang.org/docs/handbook/modules.html)
- [TypeScript Modules Demystified](https://www.youtube.com/watch?v=KDrWLMUY0R0)
- [102 AMD vs CommonJS](https://www.youtube.com/watch?v=SUFPJ5CAQP0) [explains that browserify concatenates source code into one large file (similar to `compilerOptions.outFile` in `tsconfig.json`). This video does not show the use of TypeScript].
