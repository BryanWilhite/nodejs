# webpack: “Getting Started”

The sample follows [“Getting Started](https://webpack.js.org/guides/getting-started/)” at webpack.js.org.

When the `webpack-getting-started/` [folder](../webpack-getting-started) was empty, these were the setup steps:

```bash
mkdir webpack-demo
cd webpack-demo
npm init -y
npm install webpack webpack-cli --save-dev
touch index.html
mkdir src
cd src
touch index.js
```

The only deviation from the webpack.js.org material is this `npm` script:

```json
"scripts": {
    "bundle": "npx webpack"
},
```

## the Typescript version of “Getting Started”

The `webpack-demo-typescript` [folder](./webpack-demo-typescript) contains the Typescript version of this tutorial. The [Typescript subject](https://webpack.js.org/configuration/configuration-languages/#typescript) under “Configuration Languages” guides me in this direction for a Typescript version:

```bash
mkdir webpack-demo-typescript
cd webpack-demo-typescript
npm init -y
npm i -D webpack webpack-cli
npm i -s lodash
npm i -D @types/lodash typescript ts-node @types/node @types/webpack @types/html-webpack-plugin html-webpack-plugin
touch webpack.config.ts tsconfig.json index-template.html
mkdir js
mkdir src
cd src
touch index.ts
```

### `ts-node` does not support any module syntax other than `commonjs`

[According](https://webpack.js.org/configuration/configuration-languages/#typescript) to the webpack people:

> Note that you’ll also need to check your `tsconfig.json` file. If the module in `compilerOptions` in `tsconfig.json` is `commonjs`, the setting is complete, else webpack will fail with an error. This occurs because `ts-node` does not support any module syntax other than `commonjs`.

This constraint, by the way, forces Typescript `import` statements to look like this:

```typescript
import * as _ from 'lodash';
```

Instead of this:

```typescript
import _ from 'lodash';
```

This situation is ultimately hostile to modern module support in Web browsers as the server-side, `ts-node` version of Typescript is holding back the client-side, ECMAScript version of Typescript.

### `html-webpack-plugin` is used to generate `dist/index.html`

`html-webpack-plugin` [[GitHub](https://github.com/jantimon/html-webpack-plugin)] uses the `index-template.html` [template](./webpack-demo-typescript/index-template.html) to generate `dist/index.html`.

These template features is what sets `html-webpack-plugin` apart from `file-loader` [[GitHub](https://github.com/webpack-contrib/file-loader)].

@[BryanWilhite](https://twitter.com/BryanWilhite)
