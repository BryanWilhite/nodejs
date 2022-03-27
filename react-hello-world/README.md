# React JS Hello World with `create-react-app`

This sample is based on “[Create Apps with No Configuration](https://reactjs.org/blog/2016/07/22/create-apps-with-no-configuration.html),” featuring [Create React App](https://github.com/facebookincubator/create-react-app). My non-global installation from the [[folder](../react-hello-world)]:

```console
npx -p create-react-app create-react-app hello-world
```

This command does not generate `*.jsx` source files (`*.js` files instead). There is quite a lengthy [GitHub issue](https://github.com/facebook/create-react-app/issues/87) delving into this state of affairs.

## `npx create-react-app --help`

```console
Usage: create-react-app <project-directory> [options]

Options:
  -V, --version                            output the version number
  --verbose                                print additional logs
  --info                                   print environment debug info
  --scripts-version <alternative-package>  use a non-standard version of react-scripts
  --template <path-to-template>            specify a template for the created project
  --use-pnp                                
  -h, --help                               output usage information
    Only <project-directory> is required.

    A custom --scripts-version can be one of:
      - a specific npm version: 0.8.2
      - a specific npm tag: @next
      - a custom fork published on npm: my-react-scripts
      - a local path relative to the current working directory: file:../my-react-scripts
      - a .tgz archive: https://mysite.com/my-react-scripts-0.8.2.tgz
      - a .tar.gz archive: https://mysite.com/my-react-scripts-0.8.2.tar.gz
    It is not needed unless you specifically want to use a fork.

    A custom --template can be one of:
      - a custom template published on npm: cra-template-typescript
      - a local path relative to the current working directory: file:../my-custom-template
      - a .tgz archive: https://mysite.com/my-custom-template-0.8.2.tgz
      - a .tar.gz archive: https://mysite.com/my-custom-template-0.8.2.tar.gz

    If you have any problems, do not hesitate to file an issue:
      https://github.com/facebook/create-react-app/issues/new
```

## building Hello World with Typescript

The `--scripts-version` command line option shown above supports `react-scripts-ts`, covered in “[TypeScript and React using create-react-app: A step-by-step guide to setting up your first app](https://levelup.gitconnected.com/typescript-and-react-using-create-react-app-a-step-by-step-guide-to-setting-up-your-first-app-6deda70843a4).”

Generation of Typescript App [[folder](../react-hello-world)]:

```console
npx -p create-react-app create-react-app hello-world-ts --template typescript
```

This project format is immediately compatible with my Visual Studio Code environment.

## adding `npx` support to the `package.json` scripts

The `package.json` files for the projects generated above have `npx` script support to avoid running `npm` commands globally:

```json
"scripts": {
  "start": "npx react-scripts start",
  "build": "npx react-scripts build",
  "test": "npx react-scripts test",
  "eject": "npx react-scripts eject"
},
```

## where is RxJS?

I am seeing that React culture prefers to use `rx-lite` instead of the full version of [RxJS](https://rxjs-dev.firebaseapp.com/).

@[BryanWilhite](https://twitter.com/BryanWilhite)