# karma and jasmine: minimal

This ‘minimal’ tutorial is based on “[Continuous Testing of TypeScript Code](http://www.damirscorner.com/blog/posts/20160116-ContinuousTestingOfTypeScriptCode.html).” Recall that to start this work in an empty folder we have to run `npm init`—without this there will warnings about `package.json` being missing as packages are installed. These are the packages to install:

```powershell
npm install -g typings
npm install @types/jasmine --save-dev
npm install --save-dev karma-typescript-preprocessor
npm install --save-dev typescript
```

Note that we have replaced `typings install dt~jasmine --SG` with `npm install @types/jasmine --save-dev` based on the information in “[Typings changes](https://scotch.io/lounge/angular/typings-changes).”