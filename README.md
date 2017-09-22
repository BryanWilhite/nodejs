# nodejs

## my collection of self-educational samples on the Node.js® stack

This repository is based on the assumption that Node.js®-related technology is sitting at the bottom of every Web Client stack I will be concerned about for years to come.

Every CSS, JavaScript and (X)HTML sample that is relevant to the state of the art and my current legacy load _will_ be in this repository. Most of my Web Client/App samples have been on [codepen.io](https://codepen.io/rasx). This repository will attempt to be a superset of my CodePen presence (with the exception of my Angular JS pens).

Each folder of this repository represents a subject matter of self study. This study is taking place inside the free IDE from Microsoft, [Visual Studio Code](https://code.visualstudio.com/) with the [Windows Subsystem for Linux](https://msdn.microsoft.com/en-us/commandline/wsl/about). To start working with this repository, start with the [`http-server`](./http-server) sample.

The intent is to approach each of these samples from their respective folder through `npm` (with a valid `project.json` file), using `npm install` then `npm start` and/or `npm test`. This install-start/test cycle is intended to exist _after_ `package.json` is generated with dependencies (there may also be the need to use [`npm run`](https://docs.npmjs.com/cli/run-script)). It implies that the initial installs (described in the `README.md` in each folder) have been completed—so the npm install command here is actually an update (which further implies that these samples will not be started frequently).

## emulating the CSS normalize feature of codepen.io

The popular `normalize.css` [[repository](https://github.com/necolas/normalize.css/blob/master/normalize.css)] is available [via CDN](https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css). Additionally, this CSS standardizes:

```css
html {
    font-family: sans-serif;
    margin: 2em;
}
```

For detail, see [gulp and CSS handling](./gulp-and-css-handling).

## my samples road map(s)

### Aurelia road map

[Invest in Aurelia](./aurelia-official) as a replacement for my Angular 1.x legacy. I would also like to play around with [elm](./elm-minimal) and attempt to bring [Aurelia and elm together](https://www.npmjs.com/package/aurelia-elm) as functional alternative to TypeScript.

My current bias for Aurelia ‘encourages’ me into taking [Rob Eisenberg’s](http://robeisenberg.com/) defaults for _all_ of my Web Client development:

* node (>= 6.x => see below)
* [RequireJS](http://requirejs.org/) (installed as a default project dependency by `aurelia-cli`)
* [TypeScript](https://www.typescriptlang.org/) (already biased toward this)
* [bluebird](http://bluebirdjs.com/docs/why-bluebird.html) (promise library installed as a default project dependency by `aurelia-cli`)
* [karma](https://github.com/karma-runner/karma) (test runner installed as a default project dependency by `aurelia-cli` as a part of [`aurelia-testing`](https://github.com/aurelia/testing))
* [jasmine](https://github.com/jasmine/jasmine) (test framework installed as a default project dependency by `aurelia-cli`)

### SVG road map

My SVG gurus are (currently) [Sara Soueidan](https://www.sarasoueidan.com/), [Tiffany Rayside](https://codepen.io/tmrDevelops/) and [Chris Coyier](https://chriscoyier.net/). With help from these two (and, of course, others), I need to get comfortable with the basics of SVG (`viewBox`, `preserveAspectRatio`, etc.). Then I need to looking to SVG fall back with the `picture` element. Next would the robust topic of SVG icons.

### CSS road map

My CSS gurus are [Rachel Andrew](https://www.rachelandrew.co.uk/) and [Chris Coyier](https://chriscoyier.net/) (of [CSS-Tricks](https://css-tricks.com/)). My CSS samples should be categorized by “level.” Focus should be placed on [Bootstrap](http://getbootstrap.com/), CSS Grids, “infinite” scrolling and the responsive “hero” image.

### jQuery road map

I expect that my investment in jQuery is historical. I am using jQuery 2.x in Bootstrap 3.x. I assume that my indirect use of jQuery will be phased out by the 3rd-parties that depend on it.

## global dependencies

```bash
sudo npm install -g \
    http-server \
    gulp \
    vinyl-fs \
    eslint \
    babel-eslint \
    aurelia-cli \
    karma \
    jasmine \
    typescript \
    typings \
    elm \
    elm-format \
    elm-make \
    @angular/cli
```

You may already have these globally installed npm packages available to the Node.js runtime. As a reminder (to me), [the commands](https://stackoverflow.com/questions/17937960/how-to-list-npm-user-installed-packages) to check for this are:

```bash
npm list -g --depth=0
npm list --depth=0
```

You should also run `ls /usr/local/lib/node_modules/` in bash to verify that any uninstalled packages are removed (additionally, consider `sudo npm cache clean` and `sudo npm -g update`). One last bit, when you run `npm list -g --depth=0` and all you see is this:

```plaintext
/usr/lib
└── npm@3.10.10
```

try `npm list -g --depth=1` (this implies you have node >= 6.x installed).

## node (>= 6.x)

The [Aurelia CLI](https://github.com/aurelia/cli) (command-line interface) is so cutting-edge that it requires versions of Node.js® (>= 6.x) that are not available ‘by default’ through the _default_ `apt-get` repositories (and, by the way, [the available Chocolatey packages](https://chocolatey.org/packages?q=nodejs)).

To install node 6.x on Ubuntu bash (Windows or Linux), run:

```bash
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs
```

For detail, see “[Installing Node.js via package manager](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions).”

@[BryanWilhite](https://twitter.com/bryanwilhite)