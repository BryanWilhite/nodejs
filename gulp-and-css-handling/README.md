# gulp and CSS handling

Here is a demonstration of how gulp can be used to bundle CSS files.

Initial setup:

```bash
npm install --save-dev \
    gulp \
    gulp-concat \
    gulp-minify-css \
    map-stream \
    vinyl-fs \
    @types/gulp
```

## installation notes

Only `gulp` and `vinyl-fs` need to be installed locally and globally, the other dependencies in `package.json` can be installed locally. Package `vinyl-fs` had to be installed globally (in part) to avoid `EPERM` errors like `npm ERR! Error: EPERM: operation not permitted, rename`.
