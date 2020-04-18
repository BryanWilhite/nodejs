# `sass` with `clean-css-cli`

Finding a [Sass](https://sass-lang.com/) pipeline that is local to an `npm` package was challenging for me. The combination of `sass` [[GitHub](https://github.com/sass/sass)] with `clean-css-cli` [[GitHub](https://github.com/jakubpawlowicz/clean-css-cli)] is working for me at this time.

When the `sass-with-clean-css-cli` [folder](../sass-with-clean-css-cli) has no `npm` package, start with:

```console
npm init -y
npm i -D clean-css-cli sass
```

💡 In the wider world of [webpack](https://webpack.js.org/), plugins like `mini-css-extract-plugin` and `optimize-css-assets-webpack-plugin` make the work done here completely unnecessary [📚 [docs](https://webpack.js.org/plugins/mini-css-extract-plugin/#minimizing-for-production)].

⚠ It is very important to not confuse `sass` with `node-sass` [[GitHub](https://github.com/sass/node-sass)] (BTW: `clean-css` [[GitHub](https://github.com/jakubpawlowicz/clean-css)] is for server-side `node` programming, _not_ for `npm` scripting). I have wasted my time before and would like to avoid this in future.

@[BryanWilhite](https://twitter.com/BryanWilhite)
