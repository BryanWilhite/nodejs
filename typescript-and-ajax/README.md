# Typescript and the RxJS `ajax` operator

This sample means to represent the most minimal set of `npm` packages required for a [SPA](https://en.wikipedia.org/wiki/Single-page_application).

```bash
npm init -y
npm i -s rxjs
npm i -D typescript \
    tslint \
    rollup \
    rollup-plugin-filesize \
    rollup-plugin-node-resolve \
    rollup-plugin-terser \
    @rollup/plugin-replace
```

`rollup.config.js` [file](./rollup.config.js):

```javascript
export default {
    input: './js/index.js',
    output: {
        file: './js/index.bundled.js',
        format: 'esm',
    },
```

@[BryanWilhite](https://twitter.com/BryanWilhite)
