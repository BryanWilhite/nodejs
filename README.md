# nodejs

## my Node.js® stack of self-educational samples

This repository is based on the assumption that Node.js®-related technology is sitting at the bottom of every Web Client stack I will be concerned about for years to come.

Every CSS, JavaScript and (X)HTML sample that is relevant to the state of the art and my current legacy load _will_ be in this repository. Most of my Web Client/App samples have been on [codepen.io](https://codepen.io/rasx). This repository will attempt to be a superset of my CodePen presence (with the exception of my Angular JS pens).

Each folder of this repository represents a subject matter of self study. To start working with this repository, take a look at the [`http-server`](./http-server) sample.

## the CDN behind my ‘legacy load’ samples

My ‘legacy load’ samples (mostly JQuery and Bootstrap) should be organized behind one (or maybe two [free/open-source CDN sources](https://www.maxcdn.com/blog/free-open-source-cdns/)) for the sake of simplicity and clarity.

My first CDN of choice is “[Microsoft Ajax Content Delivery Network](https://docs.microsoft.com/en-us/aspnet/ajax/cdn/overview)” as it is deliberately limited to the most ridiculously popular JavaScript/CSS libraries.

## my samples road map

Currently my “road map” around these samples is to [invest in Aurelia](./aurelia-minimal) as a replacement for my Angular 1.x legacy. I would also like to play around with [elm](./elm-minimal) and attempt to bring [Aurelia and Angular together](https://www.npmjs.com/package/aurelia-elm).

My current bias for Aurelia ‘encourages’ me into taking [Rob Eisenberg’s](http://robeisenberg.com/) defaults:

* [jspm](http://jspm.io/)
* [SystemJS](https://github.com/systemjs/systemjs)
* [TypeScript](https://www.typescriptlang.org/) (already biased toward this)

You may already have the associated npm packages already installed. As a reminder (to me), [the commands](https://stackoverflow.com/questions/17937960/how-to-list-npm-user-installed-packages) to check for this are:

```bash

npm list -g --depth=0
npm list --depth=0

```