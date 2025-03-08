# Markdown-driving web sites with 11ty

[11ty](https://11ty.io) is the current static-site generator solution of the Songhay Studio. These are the main reasons why 11ty is the current choice:

- 11ty uses several templating engines, `liquid` [[docs](https://help.shopify.com/en/themes/liquid)] being the default.
- 11ty is a child of Node.js: JavaScript is the underlying language and whatever else lies under Node.js—no Ruby, no Go.

## installation

The installation depends on `npx` [[npm](https://www.npmjs.com/package/npx)] being installed globally (`npm i -g npx@latest`).

With respect to the `package.json` [file](./package.json), run:

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
    ├── entry
    │   └── one
    └── not_in_a_collection
```

The `md-11ty/11ty/.eleventy.js` [file](./md-11ty/11ty/.eleventy.js) specifies the `app-staging` directory:

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

## related links

- “[Making A Simple Web Site With The Simplest Static Site Generator, Level 1](https://www.zachleat.com/web/eleventy-tutorial-level-1/)” by @zachleat
- <https://github.com/11ty/eleventy-base-blog>
- “[Introducing npx: an npm package runner](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b)”

@[BryanWilhite](https://twitter.com/BryanWilhite)
