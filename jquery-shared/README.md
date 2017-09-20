# Shared: JQuery 2.x

This local folder is used as an alternative to a CDN. It shares JQuery 2.x among the `/jquery-*` samples of this repository. Initial installation:

```bash
npm install --save jquery@2
npm install --save-dev @types/jquery
```

## `typings`: jQuery

This folder is also used by the other folders in this repository to provide code-completion for jQuery JavaScript, using the `reference`, [triple-slash directive](https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html).

### Related Links

* “[Intellisense with Visual Studio Code](https://johnpapa.net/intellisense-witha-visual-studio-code/)” [`tsd` is deprecated in favor of the ([archived](https://github.com/typings/typings)) `typings` command]
* [TypeSearch](https://microsoft.github.io/TypeSearch/)