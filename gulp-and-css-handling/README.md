# gulp and CSS Handling

## Installation Notes

Only `gulp` and `vinyl-fs` need to be installed locally and globally, the other dependencies in `package.json` can be installed locally. Package `vinyl-fs` had to be installed globally (in part) to avoid `EPERM` errors like `npm ERR! Error: EPERM: operation not permitted, rename`.
