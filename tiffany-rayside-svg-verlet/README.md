# Tiffany Rayside ([@tmrDevelops](https://twitter.com/tmrDevelops)): SVG: verlet

This sample is a study of a popular [Tiffany Rayside CodePen](https://codepen.io/tmrDevelops/pen/MYVzMe), featuring SVG animation. To get this sample to work outside of the awesome CodePen environment, we have to introduce the [PostCSS](https://www.smashingmagazine.com/2015/12/introduction-to-postcss/) world to our Node.js® culture (with gulp bias):

```bash
npm install --save-dev gulp-postcss
npm install --save-dev gulp-sourcemaps
npm install --save-dev autoprefixer
npm install --save-dev postcss-nested
npm install --save-dev postcss-simple-vars
```

This gulp setup allows us to generate Tiffany’s CSS manually with:

```bash
gulp autoprefixer
```

## notes for Tiffany

I wrapped [your JavaScript](./index.js) in the `window.onload` event handler. I do plan to add a TypeScript-based version of this sample that will run side-by-side next to your code. My intent is to preserve your original intent while studying your techniques in the context of Node.js.

## related links

* [View Sample Live on Netlify](https://rasx-node-js.netlify.app/tiffany-rayside-svg-verlet/)
* Tiffany Rayside on Twitter ([@tmrDevelops](https://twitter.com/tmrDevelops))
* “[PostCSS – A Comprehensive Introduction](https://www.smashingmagazine.com/2015/12/introduction-to-postcss/)”

@[BryanWilhite](https://twitter.com/BryanWilhite)
