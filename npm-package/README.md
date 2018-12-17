# the NPM package

The [NPM package](https://docs.npmjs.com/about-packages-and-modules) is a container for the Node Module. According to [the documentation](https://docs.npmjs.com/about-packages-and-modules#about-modules) as of this writing, the Node module consists of:

* A folder with a `package.json` file containing a `"main"` field.
* A folder with an `index.js` file in it.
* A JavaScript file.

>Note: Since modules are not required to have a `package.json` file, not all modules are packages. Only modules that have a `package.json` file are also packages.

These documented requirements ensure that the `require()` function [[docs](https://nodejs.org/api/modules.html#modules_require)] works correctly.

## my minimal package

From the `/my-minimal-package` [folder](./package-source/my-minimal-package), we can use the NPM CLI to generate `package.json`:

```console
npm init

This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (my-minimal-package)
version: (1.0.0)
description: the most tiny NPM package a big guy can make
entry point: (index.js)
test command:
git repository:
keywords:
author: Bryan Wilhite
license: (ISC)
About to write to .\package-source\my-minimal-package\package.json:

{
  "name": "my-minimal-package",
  "version": "1.0.0",
  "description": "the most tiny NPM package a big guy can make",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Bryan Wilhite",
  "license": "ISC"
}

Is this OK? (yes)
```

This initialization has no concern for the [scope concept](https://docs.npmjs.com/about-scopes).

@[BryanWilhite](https://twitter.com/BryanWilhite)