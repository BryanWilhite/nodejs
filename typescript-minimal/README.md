# TypeScript minimal

This sample is based on the “[Editing TypeScript](https://code.visualstudio.com/Docs/languages/typescript)” article from Microsoft. This article shows that the minimum required for a TypeScript folder/project is the [tsconfig.json](./tsconfig.json) file.

All TypeScript projects require an `npm` installation.

PowerShell:

```PowerShell

npm install -g typescript

```

bash:

```bash

sudo npm install -g typescript

```

To build the source files, we call `tsc` from `[./typescript-minimal](../typescript-minimal)`.

PowerShell/bash:

```bash

tsc -p tsconfig.json

```

Or you can use the non-life-cycle script:

```bash

npm run tsc

```

Alternatively, in Visual Studio Code `Ctrl+Shift+B` invokes the **Tasks: Run Build Task** command.

After a successful build we can run the conventional, life-cycle script:

PowerShell/bash:

```bash

npm start

```

Note that `tsconfig.json` excludes any `jspm_packages` or `node_modules` folders to prevent building 3rd-party TypeScript.

## related resources

* “[Editing TypeScript](https://code.visualstudio.com/Docs/languages/typescript)”
* “[TypeScript](https://www.typescriptlang.org/)”
* “[tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)”
* Answer: “[TypeScript—How to keep compiled files in a separate directory?](https://stackoverflow.com/a/24454551/22944)”
* “[VS Code ships with a recent stable version of the TypeScript language service and it may not match the version of TypeScript installed globally on your computer…](https://code.visualstudio.com/docs/languages/typescript#_using-newer-typescript-versions)”