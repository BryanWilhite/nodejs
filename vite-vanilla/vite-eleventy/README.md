# Markdown-driving web sites with eleventy (and Vite—and Obsidian)

[eleventy](https://11ty.io) is the current static-site generator solution of the Songhay Studio. These are the main reasons why eleventy is the current choice:

- 11ty uses several templating engines, `liquid` [[docs](https://help.shopify.com/en/themes/liquid)] being the default.
- 11ty is a child of Node.js: JavaScript is the underlying language and whatever else lies under Node.js—no Ruby, no Go.
- [Vite](https://vite.dev/) can enhance the eleventy dev-server experience via the `eleventy-plugin-vite` (<https://github.com/11ty/eleventy-plugin-vite>) plugin.
- This Studio is experimenting with establishing an [Obsidian](https://obsidian.md/) vault in the root eleventy directory for the purpose of managing the Markdown files in a classic word-processing experience.

## installation

One way to install 11ty is to begin with `npm init` in a directory structure of your choice. Another way to get started with 11ty is to select a starter project [[📖 docs](https://www.11ty.dev/docs/starter/)] such as the [official eleventy starter site](https://github.com/11ty/eleventy-base-blog).

As of this writing, I recommend starting with a directory structure of your choice and then studying starter sites, picking and choosing features and settings that you like. My recommended installation depends on `npx` [[npm](https://www.npmjs.com/package/npx)] being installed globally (`npm i -g npx@latest`).

To start building my directory structure, I open Obsidian and set up a new vault [📖 [docs](https://obsidian.md/help/vault)] in the `11ty` [directory](./11ty/). Using Obsidian, see the `11ty/eleventy_read_me.md` [file](./11ty/eleventy_read_me.md) for details.

From the `vite-vanilla/vite-eleventy` [directory](../vite-eleventy/), I generate my eleventy directory structure within the vault [directory](./11ty/):

```bash
touch .gitignore

mkdir -p 11ty/src \
    && touch 11ty/src/main.ts

mkdir -p 11ty/_data
    && touch 11ty/_data/settings.json

mkdir -p 11ty/_includes/layouts \
    && touch 11ty/_includes/layouts/base.html \
    && touch 11ty/_includes/layouts/entry.html

mkdir -p 11ty/client-data \
    && touch 11ty/client-data/my.csv \
    && touch 11ty/client-data/my.json

mkdir -p 11ty/entry \
    && touch 11ty/entry/entry.json \
    && touch 11ty/.eleventyignore \
    && touch 11ty/eleventy.config.js \
    && touch 11ty/index.html

cd 11ty

npm init -y
npm pkg set name="rx-vite-eleventy"
npm pkg set type="module"
npm pkg set repository.type="git"
npm pkg set repository.url="https://github.com/BryanWilhite/nodejs/vite-vanilla/vite-eleventy"

npm i -D @11ty/eleventy @11ty/eleventy-plugin-vite @11ty/eleventy-plugin-rss typescript
npm i d3-dsv

touch tsconfig.json

npm pkg set scripts.build="npx @11ty/eleventy"
npm pkg set scripts.clean="rm -rf _site && rm -rf .11ty-vite"
npm pkg set scripts.start="npx @11ty/eleventy --serve --quiet --incremental"

cd ..
```

…where:

- the `11ty/src/main.ts` [file](11ty/src/main.ts) will be loaded by the `index.html` [file](11ty/index.html), following the pattern from the `vite-counter` [sample](../vite-counter/tsconfig.json)
- `tsconfig.json` can be copied over from the `vite-counter` [sample](../vite-counter/tsconfig.json)
- `d3-dsv` [🔗 [npm](https://www.npmjs.com/package/d3-dsv)] can be used to load the CSV [file](./11ty/client-data/my.csv) in our Obsidian vault

After which, my structure should look like this:

```shell
$ tree -a -I node_modules .
.
├── 11ty
│   ├── attachments
│   │   ├── Pasted image 20260725183712.png
│   │   └── Pasted image 20260725184754.png
│   ├── client-data
│   │   ├── my.csv
│   │   └── my.json
│   ├── _data
│   │   └── settings.json
│   ├── eleventy.config.js
│   ├── .eleventyignore
│   ├── eleventy_read_me.md
│   ├── entry
│   │   ├── entry.json
│   │   └── one.md
│   ├── _includes
│   │   └── layouts
│   │       ├── base.html
│   │       └── entry.html
│   ├── index.html
│   ├── not_in_a_collection.md
│   ├── not_in_a_collection_with_permalink.md
│   ├── .obsidian
│   │   ├── appearance.json
│   │   ├── app.json
│   │   ├── core-plugins.json
│   │   ├── graph.json
│   │   └── workspace.json
│   ├── other-entry
│   │   └── one.md
│   ├── package.json
│   ├── package-lock.json
│   ├── public
│   │   └── favicon.svg
│   ├── src
│   │   └── main.ts
│   └── tsconfig.json
├── .gitignore
└── README.md
```

## eleventy file details

Selected details of the eleventy-relevant files in this sample:

| file | details |
| - | - |
| `11ty/_data/settings.json` | …a typical eleventy [global data file](https://www.11ty.dev/docs/data-global/) at the top of “the data cascade.” |
| `11ty/entry/entry.json` | …declares that all Markdown files in the `11ty/entry/` directory use a specified layout HTML file [📖 [docs](https://www.11ty.dev/docs/data-template-dir/#apply-a-default-layout-to-multiple-templates)] |
| `eleventy.config.js` | …this optional file explored below (see “`eleventy.config.js` details”) [📖 [docs](https://www.11ty.dev/docs/config/)] |
| `.eleventyignore` | …omits assets from being processed by eleventy and can partition or segment the rendering of large eleventy publications [📖 [docs](https://www.11ty.dev/docs/ignores/)] |

## `eleventy.config.js` details

The `eleventy.config.js` [file](11ty/eleventy.config.js) has these notable additions:

- Line 1 `import`s the static JSON file, `vite-vanilla/vite-eleventy/11ty/client-data/my.json` in order to add it to eleventy global data with the `addGlobalData` [📖 [docs](https://www.11ty.dev/docs/data-global-custom/)] call on line 12.
- Line 14 targets the `client-data` directory of the Obsidian vault with `addPassthroughCopy` [📖 [docs](https://www.11ty.dev/docs/copy/)].
- Line 15 targets the `public` directory of the Obsidian vault with `addPassthroughCopy` because this is a Vite convention that is apparently _not_ working through eleventy [📖 [docs](https://vite.dev/guide/assets#the-public-directory)].
- Line 19 specifies the `output` directory [📖 [docs](https://www.11ty.dev/docs/config/#output-directory)].

## additional eleventy and Obsidian details

Each of the Markdown files in the Obsidian vault will go into detail about selected issues:

- processing (or lack thereof) for images pasted into Obsidian
- JSON front matter support by eleventy (but not much by Obsidian)


[Bryan Wilhite is on LinkedIn](https://www.linkedin.com/in/wilhite)🇺🇸💼
