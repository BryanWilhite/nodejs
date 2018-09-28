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

## `create-react-app --help`

```console
Usage: create-react-app <project-directory> [options]

Options:

  -V, --version                            output the version number
  --verbose                                print additional logs
  --info                                   print environment debug info
  --scripts-version <alternative-package>  use a non-standard version of react-scripts
  --use-npm
  -h, --help                               output usage information
    Only <project-directory> is required.

    A custom --scripts-version can be one of:
      - a specific npm version: 0.8.2
      - a custom fork published on npm: my-react-scripts
      - a .tgz archive: https://mysite.com/my-react-scripts-0.8.2.tgz
      - a .tar.gz archive: https://mysite.com/my-react-scripts-0.8.2.tar.gz
    It is not needed unless you specifically want to use a fork.

    If you have any problems, do not hesitate to file an issue:
      https://github.com/facebookincubator/create-react-app/issues/new
```

## building Hello World with Typescript

The `--scripts-version` command line option shown above supports `react-scripts-ts`, covered in “[TypeScript and React using create-react-app: A step-by-step guide to setting up your first app](https://levelup.gitconnected.com/typescript-and-react-using-create-react-app-a-step-by-step-guide-to-setting-up-your-first-app-6deda70843a4).”

Generation of Typescript App [[folder](../react-hello-world)]:

```console
create-react-app hello-world-ts --scripts-version=react-scripts-ts
```

This project format is immediately compatible with my Visual Studio Code environment.

@[BryanWilhite](https://twitter.com/BryanWilhite)