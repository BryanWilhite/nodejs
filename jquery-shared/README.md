# shared: jQuery 2.x

This local folder is used as an alternative to a CDN. It shares jQuery 2.x among the `/jquery-*` samples of this repository. Initial installation:

```bash
npm install --save ^
    jquery@2 ^
    @types/jquery
```

## `@types/jquery`

This folder is also used by the other folders in this repository to provide code-completion for jQuery JavaScript, using the `reference`, [triple-slash directive](https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html).

### Related Links

* [TypeSearch](https://microsoft.github.io/TypeSearch/)