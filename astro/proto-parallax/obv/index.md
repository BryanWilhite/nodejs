## the modification of this starter template by me

The biggest challenge in the modification of this template was getting it to run properly in a sub-directory of the release server. In my case, this is <https://rasx-node-js.netlify.app/astro/proto-parallax/dist/> where `/astro/proto-parallax/dist/` is regarded as the `base` directory of the Astro app. So my first change is to the `astro/proto-parallax/astro.config.mjs` file:

```javascript
// https://astro.build/config
export default defineConfig({
    site: 'https://rasx-node-js.netlify.app',
    base: '/astro/proto-parallax/dist/',
    …
});
```

The `site` and `base` configuration options are considered [Top-Level Options](https://docs.astro.build/en/reference/configuration-reference/#top-level-options) and notice how the `base` option begins and ends with forward slashes. This is important as I experienced Astro ignoring the `base` option when a trailing slash was missing 😐🐇🕳 Specifically, I could tell that the `base` option was being ignored when the build made HTML like this:

```html
<link rel="preload" href="/_astro/fonts/89758defcfa85239.woff" as="font" type="font/woff" crossorigin>
```

…instead of like this:


```html
<link rel="preload" href="/astro/proto-parallax/dist/_astro/fonts/89758defcfa85239.woff" as="font" type="font/woff" crossorigin>
```

The second major change was injecting `import.meta.env.BASE_URL` all over the place where `BASE_URL` is defined as one of the [default environment variables](https://docs.astro.build/en/guides/environment-variables/#default-environment-variables). This was done in order to respond to the new `base` option. In the IDE of your choice, feel free to search for the multiple locations where this variable is injected. I am sure there has to be a better way🐇🕳

The third change was diving into the `astro/proto-parallax/src/content.config.ts` file and moving the location of the `blog` [content collection](https://docs.astro.build/en/guides/content-collections/). I wanted to move the Markdown files out of the `src` directory to a dedicated [Obsidian](https://obsidian.md/) vault which is treating Markdown more like a data source than source code. I go in to a bit more detail on this in [a Blog post](./blog/obsidian-and-astro) I also added to this starter template.

Finally, the words you are reading now were loaded into the `astro/proto-parallax/src/pages/index.astro` file [via Typescript](https://docs.astro.build/en/guides/markdown-content/#file-imports-vs-content-collections-queries) which I think is freaking cool!