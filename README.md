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

I would like to document my coverage of Node.js-based technologies in this ‘commentary’ section. Ideally, every sample folder in this repo will be addressed here. When this is not the case, then I am trying something new or I have abandoned something ‘old.’

### Angular commentary

I remain committed to Angular as a generator of [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements). [Angular Elements](https://angular.io/guide/elements) “extends HTML by allowing you to define a tag whose content is created and controlled by JavaScript code. The browser maintains a `CustomElementRegistry` of defined custom elements, which maps an instantiable JavaScript class to an HTML tag.” This commitment comes from the strategic desire to make Angular-based experiences _supplemental_ to a static-generated presentation.

My `angular-workspace-minimal` [sample](./angular-workspace-minimal) allows me to declare my Studio preference for [Angular workspaces](https://angular.io/guide/glossary#workspace) which, again, is biased toward Web Component generation.

### CSS commentary

My CSS gurus are [Jen Simmons](https://labs.jensimmons.com/), [Rachel Andrew](https://www.rachelandrew.co.uk/) and [Chris Coyier](https://chriscoyier.net/) (of [CSS-Tricks](https://css-tricks.com/)). My future CSS samples _should_ focus on [CSS Modules](https://css-tricks.com/css-modules-part-1-need/), the ‘native’ [CSS grid](https://hacks.mozilla.org/2018/07/9-biggest-mistakes-with-css-grid/) system, [“infinite” scrolling](https://www.awwwards.com/websites/infinite-scroll/), the [responsive “hero” image](https://madronaweb.com/web-design-blog/web-design-blog-entry-a-responsive-hero.html), etc.

### eleventy commentary

My relatively new commitment to [eleventy](https://www.11ty.dev/) represents my relatively new, static-generation-first approach to Web site design. As of this writing, eleventy is literally filed under the `md-11ty/` [folder](./md-11ty), where the `md` prefix stands for [Markdown](https://en.wikipedia.org/wiki/Markdown). This pigeon-holing of eleventy into the Markdown silo is done to indicate that Markdown is the (relatively new) fundamental document format of my Studio and eleventy is its premiere publishing platform.

BTW: I am going to allow my interest in eleventy completely replace my previous interest in [Hugo](https://gohugo.io/).

### Elm commentary

[Jessica Kerr](https://jessitron.com/) piqued my interest in [Elm](https://elm-lang.org/) with her 2016 talk “[Adventures in Elm](https://www.youtube.com/watch?v=cgXhMc8M4X4).” My [little Elm thingy](./elm-minimal), along with my experiments with [Giraffe](https://github.com/BryanWilhite/dotnet-core/tree/master/dotnet-giraffe-template), indicates my ongoing interest in the relationship functional programming has with building maintainable UI.

### jQuery commentary

I expect that my investment in jQuery is historical. I am using jQuery 3.x in [Bootstrap](http://getbootstrap.com/) 3.x. I assume that my indirect use of jQuery will be phased out by the 3rd-parties that depend on it. A challenge for me would be adding [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components) samples that are equivalents to the jQuery stuff to explicitly reach myself that jQuery is done—_brilliantly_ done but _done_.

### React commentary

My hello-world React [sample](./react-hello-world) is proof that I have “played around” with [React](https://reactjs.org/). The Web developer market is currently in love with React so I had to take a look. Respectfully, React ingeniously addresses problems in the world that no longer exists: the Web Components standard and [Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) were not released/implemented in browsers.

### SVG commentary

My [SVG](https://www.w3.org/TR/SVG/) gurus are (currently) [Sara Soueidan](https://www.sarasoueidan.com/), [Tiffany Rayside](https://codepen.io/tmrDevelops/) and [Chris Coyier](https://chriscoyier.net/). With help from these two (and, of course, others), I need to get comfortable with the basics of SVG (`viewBox`, `preserveAspectRatio`, etc.). Then I need to looking to SVG fall back with the `picture` element. Next would the robust topic of SVG icons.

### Web Components commentary

I have not taken the relatively recently-available option to approach [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components) [[GitHub](https://github.com/mdn/web-components-examples)] as a standard completely independent of Angular, Vue, React etc.

I suppose my Angular/Google influence has led me to the Polymer project in general and [the LitElement project](https://lit-element.polymer-project.org/) in particular. My “[LitElement—Getting Started](./web-components-lit-element)” sample is a step in what I think is the ‘right’ direction.

## global dependencies

Since I have discovered the wonders of `npx` [[GitHub](https://github.com/npm/npx)], I no longer recommend installing tons of global, npm-based executables. My list, therefore, is markedly reduced:

```bash
sudo npm install -g \
    http-server \
    npx \
    @angular/cli
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