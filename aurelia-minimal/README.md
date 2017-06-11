# aurelia minimal (hello world)

This is minimal sample of three files:

```plaintext

index.html
    \src
        app.html
        app.js

```

In order to present these three files, it takes over 9000 files, upwards of 60MB. These come from this setup sketch at the root folder of this repository (in PowerShell):

```PowerShell

npm install jspm -g

jspm init
npm install jspm --save-dev

jspm install aurelia-framework
jspm install aurelia-bootstrapper
jspm install npm:aurelia-pal-browser

```

Set up our three files in `aurelia_minimal` according to [Erik’s article](http://www.programwitherik.com/hello-world-tutorial-aurelia-2016/). This sample compels us to install `jspm` locally and globally. I do not understand this redundancy. Currently I assume that this is done because using [npm scripts](https://docs.npmjs.com/misc/scripts) to replace the convenience of finding an executable in a shell `PATH` would distract and confuse us.

In order to reuse the huge amount of files in the `jspm_packages` and `node_modules` folders, we must alter the instructions in [Erik’s article](http://www.programwitherik.com/hello-world-tutorial-aurelia-2016/), changing `aurelia_minimal/config.js` (lines [14](https://github.com/BryanWilhite/nodejs/blob/master/aurelia-minimal/config.js#L14)–16):

```js

paths: {
    "*": "aurelia-minimal/src/*",
    "github:*": "../jspm_packages/github/*",
    "npm:*": "../jspm_packages/npm/*"
}

```

and `aurelia_minimal/index.html` (line [10](https://github.com/BryanWilhite/nodejs/blob/master/aurelia-minimal/index.html#L10)):

```html

<script src="../jspm_packages/system.js"></script>

```

With these modifications, we return to the root of the repository and run:

```PowerShell

http-server ./ -o -c-1

```

The `http-server` command will index the root folder of this repository, allowing us to navigate to the `aurelia_minimal` folder.

## related links

* “[Hello World Tutorial With Aurelia.js 2016](http://www.programwitherik.com/hello-world-tutorial-aurelia-2016/)”
* Answer: “[Run Aurelia Framework without NodeJs and JSPM](https://stackoverflow.com/a/28400725)”
* Answer: “[Why do we need to install gulp globally and locally?](https://stackoverflow.com/a/30742196)”
* jspm.io: “[Getting Started](http://jspm.io/docs/getting-started.html)”