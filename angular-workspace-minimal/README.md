# Angular minimal Workspace

A minimal Workspace in Angular is one where:

* there is a routing module
* there is at least one Angular Library
* there is one or no Angular app

```console
PS > ng new my-lib --create-application=false --routing=true --style=scss --verbose=true

CREATE my-lib/angular.json (135 bytes)
CREATE my-lib/package.json (1257 bytes)
CREATE my-lib/README.md (1022 bytes)
CREATE my-lib/tsconfig.json (435 bytes)
CREATE my-lib/tslint.json (2824 bytes)
CREATE my-lib/.editorconfig (246 bytes)
CREATE my-lib/.gitignore (587 bytes)
npm WARN deprecated circular-json@0.5.9: CircularJSON is in maintenance only, flatted is its successor.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.7 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.7: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

added 685 packages from 828 contributors and audited 20296 packages in 62.828s
found 0 vulnerabilities

    Directory is already under version control. Skipping initialization of git.

PS > ng generate library my-lib --prefix=my

CREATE projects/my-lib/karma.conf.js (968 bytes)
CREATE projects/my-lib/ng-package.json (155 bytes)
CREATE projects/my-lib/package.json (136 bytes)
CREATE projects/my-lib/tsconfig.lib.json (726 bytes)
CREATE projects/my-lib/tsconfig.spec.json (246 bytes)
CREATE projects/my-lib/tslint.json (245 bytes)
CREATE projects/my-lib/src/test.ts (700 bytes)
CREATE projects/my-lib/src/public_api.ts (155 bytes)
CREATE projects/my-lib/src/lib/my-lib.module.ts (220 bytes)
CREATE projects/my-lib/src/lib/my-lib.component.spec.ts (622 bytes)
CREATE projects/my-lib/src/lib/my-lib.component.ts (254 bytes)
CREATE projects/my-lib/src/lib/my-lib.service.spec.ts (329 bytes)
CREATE projects/my-lib/src/lib/my-lib.service.ts (134 bytes)
UPDATE angular.json (1232 bytes)
UPDATE package.json (1434 bytes)
UPDATE tsconfig.json (557 bytes)
npm WARN deprecated istanbul@0.4.5: This module is no longer maintained, try this instead:
npm WARN deprecated   npm i nyc
npm WARN deprecated Visit https://istanbul.js.org/integrations for other alternatives.

> node-sass@4.10.0 install E:\~sourceRoot\nodejs\angular-workspace-minimal\my-lib\node_modules\node-sass
> node scripts/install.js

Cached binary found at C:\Users\rasx\AppData\Roaming\npm-cache\node-sass\4.10.0\win32-x64-64_binding.node

> node-sass@4.10.0 postinstall E:\~sourceRoot\nodejs\angular-workspace-minimal\my-lib\node_modules\node-sass
> node scripts/build.js

Binary found at E:\~sourceRoot\nodejs\angular-workspace-minimal\my-lib\node_modules\node-sass\vendor\win32-x64-64\binding.node
Testing binary
Binary is fine

> ng-packagr@4.7.0 postinstall E:\~sourceRoot\nodejs\angular-workspace-minimal\my-lib\node_modules\ng-packagr
> opencollective postinstall

     *** Thank you for using ng-packagr! ***

Please consider donating to our open collective
     to help us maintain this package.

  https://opencollective.com/ng-packagr/donate

                    ***

npm WARN tsickle@0.34.3 requires a peer of typescript@~3.3.1 but none is installed. You must install peer dependencies yourself.
npm WARN ajv-keywords@3.4.0 requires a peer of ajv@^6.9.1 but none is installed. You must install peer dependencies yourself.
npm WARN The package tslib is included as both a dev and production dependency.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.7 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.7: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

added 570 packages from 501 contributors and audited 47685 packages in 57.345s
found 0 **vulnerabilities**

PS > ng generate application rx-app --routing=true --style=scss

CREATE projects/rx-app/src/favicon.ico (5430 bytes)
CREATE projects/rx-app/src/index.html (292 bytes)
CREATE projects/rx-app/src/main.ts (372 bytes)
CREATE projects/rx-app/src/polyfills.ts (3571 bytes)
CREATE projects/rx-app/src/test.ts (642 bytes)
CREATE projects/rx-app/src/styles.scss (80 bytes)
CREATE projects/rx-app/src/assets/.gitkeep (0 bytes)
CREATE projects/rx-app/src/environments/environment.prod.ts (51 bytes)
CREATE projects/rx-app/src/environments/environment.ts (662 bytes)
CREATE projects/rx-app/browserslist (388 bytes)
CREATE projects/rx-app/karma.conf.js (983 bytes)
CREATE projects/rx-app/tsconfig.app.json (172 bytes)
CREATE projects/rx-app/tsconfig.spec.json (270 bytes)
CREATE projects/rx-app/tslint.json (317 bytes)
CREATE projects/rx-app/src/app/app-routing.module.ts (245 bytes)
CREATE projects/rx-app/src/app/app.module.ts (393 bytes)
CREATE projects/rx-app/src/app/app.component.html (1152 bytes)
CREATE projects/rx-app/src/app/app.component.spec.ts (1095 bytes)
CREATE projects/rx-app/src/app/app.component.ts (211 bytes)
CREATE projects/rx-app/src/app/app.component.scss (0 bytes)
CREATE projects/rx-app-e2e/protractor.conf.js (752 bytes)
CREATE projects/rx-app-e2e/tsconfig.e2e.json (219 bytes)
CREATE projects/rx-app-e2e/src/app.e2e-spec.ts (618 bytes)
CREATE projects/rx-app-e2e/src/app.po.ts (251 bytes)
UPDATE angular.json (9218 bytes)
UPDATE package.json (1434 bytes)
npm WARN ajv-keywords@3.4.0 requires a peer of ajv@^6.9.1 but none is installed. You must install peer dependencies yourself.
npm WARN tsickle@0.34.3 requires a peer of typescript@~3.3.1 but none is installed. You must install peer dependencies yourself.
npm WARN The package tslib is included as both a dev and production dependency.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.7 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.7: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

audited 47685 packages in 16.078s
found 0 vulnerabilities
```

The `ng generate application` command will generate the specified application in the `projects/` [folder](./my-lib/projects) which is _not_ the case when adding libraries to an existing project.

## running `ng test`

Running `ng test` from the `my-lib/` [folder](./my-lib) should start Karma-Jasmine tests _in sequence_, running the library tests first _then_ the app tests (after entering `Ctrl+c` to stop the library tests). This behavior was not expected and is not intuitive.

## resources

* “[The Angular Library Series—Creating a Library with Angular CLI](https://blog.angularindepth.com/creating-a-library-in-angular-6-87799552e7e5)”
* “[Angular Workspace: No Application for You!](https://blog.angularindepth.com/angular-workspace-no-application-for-you-4b451afcc2ba)”

@[BryanWilhite](https://twitter.com/BryanWilhite)
