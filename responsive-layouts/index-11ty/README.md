# eleventy ([11ty.dev](https://11ty.dev)) index layout

This sample documents the core ingredients needed to cook up a production Web site based on the [Publications Index](http://songhayblog.azurewebsites.net/entry/2020-12-24-songhay-publications-and-the-concept-of-the-index) data of my Studio.

The Publications Index indexes a _Presentation_. To mark this, we start with the `presentation/` folder. We place the Publications Index file, `index.json`, in the conventional, eleventy `_data/` [folder](./index-11ty/presentation/_data) under the Presentation folder.

In the bash shell, we can generate the conventional eleventy files (with respect to the `index-11ty/` [folder](./index-11ty)):

```bash
touch \
    presentation/_data/settings.json \
    presentation/.eleventyignore \
    presentation/.eleventy.js \
    presentation/index.html
```

All of these files (except for `presentation/index.html`) will be filled out based on previous work with eleventy in this Studio and ongoing research. The `presentation/index.html` file is copied from the `responsive-layouts/index/` [folder](./index) to be modified for eleventy static file generation.

## choosing liquid templates in eleventy

The `presentation/index.html` file can be decomposed into liquid snippets with the conventional `_includes` folder:

```bash
touch \
    presentation/_includes/head.liquid \
    presentation/_includes/body-svg.liquid \
    presentation/_includes/body-header.liquid \
    presentation/_includes/body-footer.liquid
```

## related links

- [eleventy liquid template supported features](https://www.11ty.dev/docs/languages/liquid/#supported-features)
- “[Tips for Using Snippets in Your Shopify Theme](https://www.shopify.com/partners/blog/88186566-tips-for-using-snippets-in-your-shopify-theme)”
- “[Create Pages from Data](https://www.11ty.dev/docs/pages-from-data/#create-pages-from-data)”
- “[Custom Collections](https://www.pborenstein.com/posts/collections/#custom-collections)”
- [eleventy starter projects](https://www.11ty.dev/docs/starter/)

@[BryanWilhite](https://twitter.com/BryanWilhite)
