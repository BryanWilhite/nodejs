# Tutorial: Tour of Heroes

This sample follows the “[Tour of Heroes](https://angular.io/tutorial)” tutorial.

From the root [folder](../angular-tour-of-heroes) of this sample:

```shell
npx -p @angular/cli ng new angular-tour-of-heroes
```

There is a StackOverflow [answer](https://stackoverflow.com/a/56346181/22944) explaining the `npx -p @angular/cli` prefix which allows me to run the Angular CLI locally. After the project is generated, the `scripts` in `package.json` need to be changed to:

```json
  "scripts": {
    "ng": "npx ng",
    "start": "npx ng serve",
    "build": "npx ng build",
    "watch": "npx ng build --watch --configuration development",
    "test": "npx ng test"
  },
```

@[BryanWilhite](https://twitter.com/BryanWilhite)
