# Karma and Jasmine: minimal

This ‘minimal’ tutorial for [Karma](https://karma-runner.github.io) and [Jasmine](https://jasmine.github.io) is based on “[Continuous Testing of TypeScript Code](http://www.damirscorner.com/blog/posts/20160116-ContinuousTestingOfTypeScriptCode.html).” Recall that to start this work in an empty folder we have to run `npm init`—without this there will warnings about `package.json` being missing as packages are installed. These are the packages to install (with `karma init`):

```bash
npm install jasmine --save-dev
npm install karma --save-dev
npm install karma-jasmine --save-dev
npm install karma-chrome-launcher --save-dev

node node_modules/karma/bin/karma init

sudo npm install -g typings
npm install @types/jasmine --save-dev
npm install karma-typescript-preprocessor --save-dev
npm install typescript --save-dev
```

Note that we have replaced `typings install dt~jasmine --SG` with `npm install @types/jasmine --save-dev` based on the information in “[Typings changes](https://scotch.io/lounge/angular/typings-changes).” This ‘minimal’ installation should be upwards of 50MB, over 5000 files.

When tests are placed, the first line should be changed from:

```js
///<reference path="../typings/index.d.ts"/>
```

to:

```js
///<reference path="../node_modules/@types/jasmine/index.d.ts"/>
```

and this will be the command to run:

```bash
node node_modules/karma/bin/karma start .\karma.conf.js
```

Optionally, this command can be added to `scripts.test` of `package.json` for the conventional `npm test` command.

## `files` served and `proxies` in `karma.conf.js`

It is possible to configure Karma to serve files (using relative paths) once this is configured in `karma.conf.js`:

```js
files: [
    {
        pattern: 'served/*.*',
        included: false,
        served: true,
        watched: false,
        nocache: true
    }
],

proxies: {
    '/served/': '/base/served/'
},
```

With the configuration above (with `singleRun: true`), the `files` array shows that `/base/served/karma.png` can be entered into the browser and serve the PNG. But the Karma-conventional `/base/` prefix can be eliminated with the `proxies` dictionary. See the “proxies” section in [Configuration File](http://karma-runner.github.io/1.0/config/configuration-file.html).

## `karma-htmlfile-reporter`

The Karma plugin [`karma-htmlfile-reporter`](https://github.com/matthias-schuetz/karma-htmlfile-reporter) provides what should come by default: the ability to see a report of the tests in the browser in addition to the terminal output. This sample is configured to render the report at `base/test/report.html`, with the help of `files` served:

```js
{
    pattern: 'test/report.html',
    included: false,
    served: true,
    watched: false,
    nocache: true
}
```

## `karma-jasmine-jquery`

The final piece in this ‘minimal’ setup is the Karma framework, `karma-jasmine-jquery` [[GitHub](https://github.com/bessdsv/karma-jasmine-jquery)]. This makes testing UI components with the power of JQuery possible:

```bash
npm install --save-dev karma-jasmine-jquery

npm install --save-dev @types/jasmine-jquery
npm install --save-dev @types/karma-jasmine
```

`karma-jasmine-jquery` is just an adapter for `jasmine-jquery` so much of the documentation detail is at its [GitHub](https://github.com/velesin/jasmine-jquery) repository. The `jasmine-jquery-intro.spec.ts` [file](./jasmine-jquery-intro.spec.ts) shows this Karma framework in action.


## related Links

* [Historical Google Tech Talk from Vojta Jina of the original Angular JS team](https://www.youtube.com/watch?v=YG5DEzaQBIc)
* [Karma files](http://karma-runner.github.io/1.0/config/files.html)
* [“Quick Karma” (demonstrates the use of `debug.html`)](https://www.youtube.com/watch?v=AoMoL2UAC-A)