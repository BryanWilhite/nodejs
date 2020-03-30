# Node.js®

## my collection of self-educational samples on the Node.js® stack

This repository is based on the assumption that Node.js®-related technology is sitting at the bottom of every Web Client stack I will be concerned about for years to come.

Every CSS, JavaScript and (X)HTML sample that is relevant to the state of the art and my current legacy load _will_ be in this repository. Most of my Web Client/App samples have been on [codepen.io](https://codepen.io/rasx) and [stackblitz.com](https://stackblitz.com/@BryanWilhite). This repository will attempt to be a superset of my CodePen presence (with the exception of my Angular JS pens).

Each folder of this repository represents a subject matter of self study. This study is taking place inside the free IDE from Microsoft, [Visual Studio Code](https://code.visualstudio.com/) with on my Windows Desktop or my Ubuntu Desktop. To start working with this repository, start with the [`http-server`](./http-server) sample.

The intent is to approach each of these samples from their respective folder through `npm` (with a valid `project.json` file), using `npm install` then `npm start` and/or `npm test`. This install-start/test cycle is intended to exist _after_ `package.json` is generated with dependencies (there may also be the need to use [`npm run`](https://docs.npmjs.com/cli/run-script)). It implies that the initial installs (described in the `README.md` in each folder) have been completed—so the `npm install` command here should be an update.

## emulating the CSS normalize feature of codepen.io

The popular `normalize.css` [[repository](https://github.com/necolas/normalize.css/blob/master/normalize.css)] is available [via CDN](https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css). Additionally, this CSS standardizes:

```css
html {
    font-family: sans-serif;
    margin: 2em;
}
```

For detail, see [gulp and CSS handling](./gulp-and-css-handling).

## my samples: a bit of commentary

### eleventy commentary

My relatively new commitment to [eleventy](https://www.11ty.dev/) represents my relatively new, static-generation-first approach to Web site design. As of this writing, eleventy is literally filed under the `md-11ty/` [folder](./md-11ty), where the `md` prefix stands for [Markdown](https://en.wikipedia.org/wiki/Markdown). This pigeon-holing to is done to indicate that Markdown is the (relatively new) fundamental document format of my Studio and eleventy is its premiere publishing platform.

### Angular commentary

I remain committed to Angular as a source of HTML components for a “modern” Web Client. The current assumption here is that [Angular Ivy](https://angular.io/guide/ivy) will make adding dynamic interactivity to a static Web site as easy as declaring an Ivy element in HTML and auto-magically Ivy (and Web standards) will do the rest. This assumption comes from the desire to make Angular-based experiences _supplemental_ to a static-generated presentation.

### SVG commentary

My [SVG](https://www.w3.org/TR/SVG/) gurus are (currently) [Sara Soueidan](https://www.sarasoueidan.com/), [Tiffany Rayside](https://codepen.io/tmrDevelops/) and [Chris Coyier](https://chriscoyier.net/). With help from these two (and, of course, others), I need to get comfortable with the basics of SVG (`viewBox`, `preserveAspectRatio`, etc.). Then I need to looking to SVG fall back with the `picture` element. Next would the robust topic of SVG icons.

### CSS commentary

My CSS gurus are [Jen Simmons](https://labs.jensimmons.com/), [Rachel Andrew](https://www.rachelandrew.co.uk/) and [Chris Coyier](https://chriscoyier.net/) (of [CSS-Tricks](https://css-tricks.com/)). My CSS samples should be categorized by “level.” Focus should be placed on [Bootstrap](http://getbootstrap.com/), CSS Grids, “infinite” scrolling and the responsive “hero” image.

### jQuery commentary

I expect that my investment in jQuery is historical. I am using jQuery 2.x in Bootstrap 3.x. I assume that my indirect use of jQuery will be phased out by the 3rd-parties that depend on it.

## global dependencies

Since I have discovered the wonders of `npx` [[GitHub](https://github.com/npm/npx)], I no longer recommend installing tons of global, npm-based executables. My list, therefore, is markedly reduced:

```bash
sudo npm install -g \
    http-server \
    npx
```

You may already have these globally installed npm packages available to the Node.js runtime on your machine(s). As a reminder (to me), [the commands](https://stackoverflow.com/questions/17937960/how-to-list-npm-user-installed-packages) to check for this are:

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

## Node.js LTS

I recommend installing the latest [LTS](https://en.wikipedia.org/wiki/Long-term_support) version of Node.js. On Windows, try Chocolatey by [searching for the LTS version](https://chocolatey.org/packages?q=nodejs-lts).

As of this writing, on Ubuntu bash (Windows or Linux), run:

```bash
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs
```

For detail, see “[Installing Node.js via package manager](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions)” and “[Installation instructions](https://github.com/nodesource/distributions#installation-instructions).”

Finally (seriously), this command comes in handy:

```bash
sudo npm install npm@latest -g
```

According to [the official docs](https://docs.npmjs.com/getting-started/installing-node#updating-npm), “npm gets updated more frequently than Node does.”

@[BryanWilhite](https://twitter.com/bryanwilhite)