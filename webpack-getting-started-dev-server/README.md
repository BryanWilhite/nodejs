# webpack: `webpack-dev-server`

This sample follows [“Getting Started](https://webpack.js.org/guides/getting-started/)” at webpack.js.org through to the “[Development](https://webpack.js.org/guides/development/)” section in order to cover `webpack-dev-server`.

This portion of the journey through the documentation requires files and code to be deleted before moving on to the next section. To avoid doing this, there are multiple folders, saving the work done. Each section below will denote its respective folder:

## Asset Management

📁 `webpack-asset-management` [folder](./webpack-asset-management)

>One of the coolest webpack features is that you can also include any other type of file, besides JavaScript, for which there is a loader.

## Output Management

📁 `webpack-output-management` [folder](./webpack-output-management)

> But what would happen if we changed the name of one of our entry points, or even added a new one? The generated bundles would be renamed on a build, but our `index.html` file would still reference the old names. Let’s fix that with the `HtmlWebpackPlugin` [📖 [docs](https://webpack.js.org/plugins/html-webpack-plugin)]. …you should know that the `HtmlWebpackPlugin` by default will generate its own `index.html` file, even though we already have one…

This sample builds upon the work done in the `webpack-getting-started/webpack-demo` [folder](../webpack-getting-started/webpack-demo).

@[BryanWilhite](https://twitter.com/BryanWilhite)
