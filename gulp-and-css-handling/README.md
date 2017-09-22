# gulp and CSS handling

Here is a demonstration of how gulp can be used to bundle CSS files.

## gulp typings

Following the guidance of “[Intellisense with Visual Studio Code](https://johnpapa.net/intellisense-witha-visual-studio-code/),” I saw that `tsd` is deprecated in favor of the ([archived](https://github.com/typings/typings)) `typings` command. I assumed that I would need to bundle the multiple type definitions for gulp. This means I would need to run a `typings` command from [typings-gulp](../typings-gulp):

```bash
typings bundle -o main.d.ts
```

However, I am seeing this error: `typings ERR! message Path must be a string. Received undefined`.

Eventually, I followed the guidance from [a StackOverflow.com answer](https://stackoverflow.com/a/36414244/22944) (which is meant to eliminate the need for `reference` declarations). Since typings should already be installed globally (because of Aurelia), these command suffice:

```bash
typings init
typings install --save-dev gulp
```

## installation notes

Only `gulp` and `vinyl-fs` need to be installed locally and globally, the other dependencies in `package.json` can be installed locally. Package `vinyl-fs` had to be installed globally (in part) to avoid `EPERM` errors like `npm ERR! Error: EPERM: operation not permitted, rename`.
