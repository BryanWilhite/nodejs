# React JS Hello World with `create-react-app`

This sample is based on “[Create Apps with No Configuration](https://reactjs.org/blog/2016/07/22/create-apps-with-no-configuration.html),” featuring [Create React App](https://github.com/facebookincubator/create-react-app). Installation:

```console
npm install -g create-react-app
```

Generation of App [[folder](../react-hello-world)]:

```console
create-react-app hello-world
```

This command does not generate `*.jsx` source files (`*.js` files instead). There is quite a lengthy [GitHub issue](https://github.com/facebook/create-react-app/issues/87) delving into this state of affairs.

Here is a list of notable packages installed:

* `babel`
* `browserify`
* `jest`
* `lodash`
* `postcss`
* `webpack`

There are quite a few packages designed for older browsers (pre-ES6). A feature of `create-react-app` is:

> We take care of updating Babel, ESLint, and webpack to stable compatible versions so you can update a single dependency to get them all.

So over a quarter gig of packages are not meant to be maintained individually by the developer.