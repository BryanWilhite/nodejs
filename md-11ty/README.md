# Markdown-driving web sites with 11ty

[11ty](https://11ty.io) is the current static-site generator solution of the Songhay Studio. These are the main reasons why 11ty is the current choice:

- 11ty uses several templating engines, `liquid` [[docs](https://help.shopify.com/en/themes/liquid)] being the default.
- 11ty is a child of Node.js: JavaScript is the underlying language and whatever else lies under Node.js—no Ruby, no Go.

## installation

One way to install 11ty is to begin with `npm` in a directory structure of your choice. Another way to get started with 11ty is to select a starter project [[📖 docs](https://www.11ty.dev/docs/starter/)] such as the [official eleventy starter site](https://github.com/11ty/eleventy-base-blog).

As of this writing, I recommend starting with a directory structure of your choice and then studying starter sites, picking and choosing features and settings that you like. This recommended installation depends on `npx` [[npm](https://www.npmjs.com/package/npx)] being installed globally (`npm i -g npx@latest`).

With respect to the location of the `package.json` [file](./11ty/package.json), run:

```console
npm i --save-dev eleventy
```

## conventional file structure

The current convention in this Studio is to store generator templates and configuration in the `11ty` directory that is pointing at the `app-staging` output directory. In this particular sample, we have:

```console
.
├── 11ty
│   ├── _data
│   ├── entry
│   ├── other-entry
│   └── templates
│       └── layouts
└── app-staging
    ├── data
    ├── entry
    │   └── one
    └── not_in_a_collection
```

The `11ty` directory is where the `npm` root should be—where the `md-11ty/11ty/package.json` [file](./11ty/package.json) resides.

The `md-11ty/11ty/.eleventy.js` [file](./11ty/.eleventy.js) specifies the `app-staging` directory:

```javascript
return {
    dir: {
        input: ".",
        output: "../app-staging",
        …
    },
    …
};
```

## the novelty of the `app-staging/data` directory

The `app-staging/data` [directory](./app-staging/data) stores static data files (in JSON format) that can be used on the live site in a SPA scenario _and_ be used by 11ty builds. The `md-11ty/11ty/.eleventy.js` [file](./11ty/.eleventy.js) `import`s a static JSON file from the `app-staging/data` directory:

```javascript
import staticJson from '../app-staging/data/static.json' with { type: 'json' };

export default function (config) {
    config.addGlobalData('staticJson', staticJson);
    //…
};
```

Use of the `addGlobalData` method [📖 [docs](https://www.11ty.dev/docs/data-global-custom/)] is essential here.

## related links

- “[Making A Simple Web Site With The Simplest Static Site Generator, Level 1](https://www.zachleat.com/web/eleventy-tutorial-level-1/)” by @zachleat
- <https://github.com/11ty/eleventy-base-blog>
- “[Introducing npx: an npm package runner](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b)”

@[BryanWilhite](https://twitter.com/BryanWilhite)
