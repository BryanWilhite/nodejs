# TypeScript minimal

This sample is based on the “[Editing TypeScript](https://code.visualstudio.com/Docs/languages/typescript)” article from Microsoft.

This is a sketch of the PowerShell commands run from the root of this repository:

```PowerShell

npm install -g typescript

```

and/or in bash:

```bash

sudo npm install -g typescript

```

After `Ctrl+Shift+B` invokes the Build Task and completes we can run:

```PowerShell

node .\typescript_minimal\src\HelloWorld.js

```

and/or in bash:

```bash

node ./typescript_minimal/src/HelloWorld.js

```

The minimal configuration around `src\HelloWorld.ts` are these two files:

```plaintext

.vscode\tasks.json
tsconfig.json

```

Note that `tsconfig.json` excludes any `jspm_packages` or `node_modules` folders to prevent building 3rd-party TypeScript.

## related resources

* “[Editing TypeScript](https://code.visualstudio.com/Docs/languages/typescript)”
* “[TypeScript](https://www.typescriptlang.org/)”
* “[tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)”
* Answer: “[TypeScript—How to keep compiled files in a separate directory?](https://stackoverflow.com/a/24454551/22944)”
* “[VS Code ships with a recent stable version of the TypeScript language service and it may not match the version of TypeScript installed globally on your computer…](https://code.visualstudio.com/docs/languages/typescript#_using-newer-typescript-versions)”