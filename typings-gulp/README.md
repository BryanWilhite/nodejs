# typings: gulp

This folder is used by the other folders in this repository to provide code-completion for gulp JavaScript, using the `reference`, [triple-slash directive](https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html).

## Bundling

Following the guidance of “[Intellisense with Visual Studio Code](https://johnpapa.net/intellisense-witha-visual-studio-code/),” I saw that `tsd` is deprecated in favor of the ([archived](https://github.com/typings/typings)) `typings` command. I assumed that I would need to bundle the multiple type definitions for gulp. This means I would need to run a `typings` command from [typings-gulp](../typings-gulp):

```bash
typings bundle -o main.d.ts
```

However, I am seeing this error: `typings ERR! message Path must be a string. Received undefined`.