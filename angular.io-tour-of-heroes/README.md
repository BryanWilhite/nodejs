# angular.io “Tour of Heroes” tutorial

This sample follows the “[Tour of Heroes](https://angular.io/tutorial)” tutorial, based on the `quickstart` [repository](https://github.com/angular/quickstart).

From the root [folder](../angular.io-tour-of-heroes) of this sample:

```bash
git clone https://github.com/angular/quickstart.git quickstart
rm -rf quickstart/.git
cd quickstart
npm install
npm start
```

From here, we follow [the tutorial](https://angular.io/tutorial).

## diversions from the tutorial

We took learnings from [Angular QuickStart](https://angular.io/guide/quickstart) and switched components from using `template` and `styles` to using `templateUrl` and `styleUrls`. This move encouraged us to separate components into folders, making a feature-ish-based `src/app` [folder](./quickstart/src/app) arrangement.