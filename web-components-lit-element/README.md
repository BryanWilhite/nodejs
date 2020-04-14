# LitElement - Getting Started

This sample starts with `@customElement('my-element')` defined in “[Getting Started](https://lit-element.polymer-project.org/guide/start)” from polymer-project.org and “[LitElement TypeScript starter](https://github.com/PolymerLabs/lit-element-starter-ts).”

When the `web-components-lit-element/` [folder](../web-components-lit-element) was empty, these were the setup steps:

```console
npm init -y
npm i lit-element typescript
npm i -D rollup rollup-plugin-filesize rollup-plugin-node-resolve rollup-plugin-terser @rollup/plugin-replace
```

This sample marks the first time I am using `rollup` directly. The `rollup.config.js` [file](./rollup.config.js) is basically lifted verbatim from [Justin Fagnani](https://github.com/justinfagnani) apart from my specification of I/O:

```javascript
export default {
    input: './js/index.js',
    output: {
        file: './js/index.bundled.js',
        format: 'esm',
    },
```

We then see how the `index.html` [file](./index.html), consumes `index.bundled.js`:

```html
<script type="module" src="./js/index.bundled.js"></script>
```

This `script type="module"` syntax is different from [my previous use](../typescript-and-modules) of `requirejs`.

## related links

- “[Webpack and Rollup: the same but different](https://medium.com/webpack/webpack-and-rollup-the-same-but-different-a41ad427058c)”
- “[&lt;script&gt;: The Script element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)”
- “[JavaScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)”

@[BryanWilhite](https://twitter.com/BryanWilhite)