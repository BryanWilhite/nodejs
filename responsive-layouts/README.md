# responsive layouts

The intent here is to define layouts for the web sites of my studio, namely songhaysystem.com and kintespace.com. Today, I will organize the effort by year and by these types:

- `blog-index`
- `index`
- `index-11ty`

## `blog-index`: `npm` dependencies

The `blog-index` layout presents static text, images and ‘dynamic’ text from a static JSON file, rendered by `lit-html`. All of this will be bundled and served by webpack, based on these `npm` commands:

```bash
npm i --save-dev \
    clean-webpack-plugin \
    css-loader \
    html-webpack-plugin \
    lit-html \
    mini-css-extract-plugin \
    optimize-css-assets-webpack-plugin \
    sass \
    webpack \
    webpack-cli \
    webpack-dev-server

npm i \
    @material/top-app-bar \
    @material/typography \
    normalize.css
```

Since the Material Design organization is quite nuanced and complex, let it be known that I am taking packages from the work under <https://github.com/material-components/material-components-web>.

## `index`: `npm` dependencies

The `index` layout presents static text, images and ‘dynamic’ text from a static JSON file, rendered by `lit-html`. Styling of the layout will be in Sass statements and the static JSON will be loaded and observed by RxJS in Typescript. All of this will be bundled and served by webpack.

These miserable desires of mine should be satisfied with these `npm` commands:

```bash
npm i --save-dev \
    clean-webpack-plugin \
    css-loader \
    html-webpack-plugin \
    lit-html \
    mini-css-extract-plugin \
    optimize-css-assets-webpack-plugin \
    sass \
    terser-webpack-plugin \
    ts-loader \
    tslint \
    typescript \
    webpack \
    webpack-cli \
    webpack-dev-server

npm i \
    @material/top-app-bar \
    @material/typography \
    normalize.css \
    rxjs
```

## `index-11ty`: `npm` dependencies

The `index-11ty` layout presents static text, images and ‘dynamic’ text from a static JSON file, pre-rendered by `eleventy`:

```bash
npm i --save-dev \
    @11ty/eleventy \
    clean-webpack-plugin \
    css-loader \
    html-webpack-plugin \
    mini-css-extract-plugin \
    optimize-css-assets-webpack-plugin \
    sass \
    terser-webpack-plugin \
    ts-loader \
    tslint \
    typescript \
    webpack \
    webpack-cli \
    webpack-dev-server

npm i \
    @material/top-app-bar \
    @material/typography \
    normalize.css \
```

## resources

- <http://1linelayouts.glitch.me/>
- <https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids>

@[BryanWilhite](https://twitter.com/BryanWilhite)
