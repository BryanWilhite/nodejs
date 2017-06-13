# nodejs

## my collection of self-educational samples on the Node.js® stack

This repository is based on the assumption that Node.js®-related technology is sitting at the bottom of every Web Client stack I will be concerned about for years to come.

Every CSS, JavaScript and (X)HTML sample that is relevant to the state of the art and my current legacy load _will_ be in this repository. Most of my Web Client/App samples have been on [codepen.io](https://codepen.io/rasx). This repository will attempt to be a superset of my CodePen presence (with the exception of my Angular JS pens).

Each folder of this repository represents a subject matter of self study. To start working with this repository, take a look at the [`http-server`](./http-server) sample.

## the CDN behind my ‘legacy load’ samples

My ‘legacy load’ samples (mostly JQuery and Bootstrap) should be organized behind one (or maybe two [free/open-source CDN sources](https://www.maxcdn.com/blog/free-open-source-cdns/)) for the sake of simplicity and clarity.

My first CDN of choice is “[Microsoft Ajax Content Delivery Network](https://docs.microsoft.com/en-us/aspnet/ajax/cdn/overview)” as it is deliberately limited to the most ridiculously popular JavaScript/CSS libraries.

## my samples road map

Currently my “road map” around these samples is to [invest in Aurelia](./aurelia-official) as a replacement for my Angular 1.x legacy. I would also like to play around with [elm](./elm-minimal) and attempt to bring [Aurelia and Angular together](https://www.npmjs.com/package/aurelia-elm) as functional alternative to TypeScript.

My current bias for Aurelia ‘encourages’ me into taking [Rob Eisenberg’s](http://robeisenberg.com/) defaults for _all_ of my Web Client development:

* node (>= 6.x => see below)
* [RequireJS](http://requirejs.org/) (installed as a default project dependency by `aurelia-cli`)
* [TypeScript](https://www.typescriptlang.org/) (already biased toward this)
* [bluebird](http://bluebirdjs.com/docs/why-bluebird.html) (promise library installed as a default project dependency by `aurelia-cli`)
* [karma](https://github.com/karma-runner/karma) (test runner installed as a default project dependency by `aurelia-cli` as a part of [`aurelia-testing`](https://github.com/aurelia/testing))
* [jasmine](https://github.com/jasmine/jasmine) (test framework installed as a default project dependency by `aurelia-cli`)

You may already have the associated npm packages already installed. As a reminder (to me), [the commands](https://stackoverflow.com/questions/17937960/how-to-list-npm-user-installed-packages) to check for this are:

```bash

npm list -g --depth=0
npm list --depth=0

```

You should also run `ls /usr/local/lib/node_modules/` in bash to verify that any uninstalled packages are removed (additionally, consider `sudo npm cache clean` and `sudo npm -g update`).

## node (>= 6.x)

The [Aurelia CLI](https://github.com/aurelia/cli) (command-line interface) is so cutting-edge that it requires versions of Node.js® (>= 6.x) that are not available ‘by default’ through the _default_ `apt-get` repositories (and, by the way, [the available Chocolatey packages](https://chocolatey.org/packages?q=nodejs)).

To install node 6.x on Ubuntu bash (Windows or Linux), run:

```bash

curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs

```

For detail, see “[Installing Node.js via package manager](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions).”