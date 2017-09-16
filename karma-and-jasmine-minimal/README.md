# karma and jasmine: minimal

This ‘minimal’ tutorial for [karma](https://karma-runner.github.io) and [jasmine](https://jasmine.github.io) is based on “[Continuous Testing of TypeScript Code](http://www.damirscorner.com/blog/posts/20160116-ContinuousTestingOfTypeScriptCode.html).” Recall that to start this work in an empty folder we have to run `npm init`—without this there will warnings about `package.json` being missing as packages are installed. These are the packages to install (with `karma init`):

```powershell
npm install jasmine --save-dev
npm install karma --save-dev
npm install karma-jasmine --save-dev
npm install karma-chrome-launcher --save-dev

node node_modules/karma/bin/karma init

npm install -g typings
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

```powershell
node node_modules/karma/bin/karma start .\karma.conf.js
```

Optionally, this command can be added to `scripts.test` of `package.json` for the conventional `npm test` command.

## Related Links

* [Historical Google Tech Talk from Vojta Jina of the original Angular JS team](https://www.youtube.com/watch?v=YG5DEzaQBIc)
* [Karma files](http://karma-runner.github.io/1.0/config/files.html)
* [“Quick Karma” (demonstrates the use of `debug.html`)](https://www.youtube.com/watch?v=AoMoL2UAC-A)