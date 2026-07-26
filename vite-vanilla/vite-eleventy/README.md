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
mkdir 11ty \
    && mkdir -p 11ty/_data \
    && touch 11ty/_data/settings.json \
    && mkdir -p 11ty/_includes/layouts \
    && touch 11ty/_includes/layouts/base.html \
    && touch 11ty/_includes/layouts/entry.html \
    && touch 11ty/entry/entry.json \
    && touch 11ty/.eleventyignore \
    && touch 11ty/index.html
```

After which, my structure should look like this:

```bash
$ tree 11ty
11ty
├── attachments
│   ├── Pasted image 20260725183712.png
│   └── Pasted image 20260725184754.png
├── _data
│   └── settings.json
├── eleventy_read_me.md
├── entry
│   ├── entry.json
│   └── one.md
├── _includes
│   └── layouts
│       ├── base.html
│       └── entry.html
├── index.html
├── not_in_a_collection.md
├── not_in_a_collection_with_permalink.md
└── other-entry
    └── one.md
```

```bash
mkdir app-staging
```

[Bryan Wilhite is on LinkedIn](https://www.linkedin.com/in/wilhite)🇺🇸💼
