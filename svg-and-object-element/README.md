# SVG and the `object` element

This sample is driven by “[Tips For Optimising SVG Delivery For The Web](https://calendar.perfplanet.com/2014/tips-for-optimising-svg-delivery-for-the-web/)” by [Sara Soueidan](http://sarasoueidan.com/). Specifically, we concentrate on tip #2, “Avoid multiple requests when providing fallback with `<object>`.”

## SVG with the `anchor` element

The design decision to make an entire SVG block clickable is not a trivial decision (as shown [on StackOverflow.com](https://stackoverflow.com/questions/11374059/make-an-html-svg-object-also-a-clickable-link)). As of this writing, there are two leading techniques: [one](https://stackoverflow.com/a/17133804/22944) is declaring `pointer-events: none;` for the CSS style of `object` (has poor IE support and disables all interactivity in the SVG); [the other](https://stackoverflow.com/a/19553517/22944) is covering the entire SVG with a `rect` wrapped in an anchor element (disables all interactivity in the SVG).

## converting the `*.svg` to `*.png`

On Linux, the `*.svg` was converted to `*.png`, with the [ImageMagick](https://imagemagick.org/) `convert` CLI. Run `npm run apt` to verify that it is installed. On Ubuntu, the output might look like this:

```console
$ npm run apt

> svg-and-object-element@1.0.0 apt
> apt list --installed | grep "imagemagick"


WARNING: apt does not have a stable CLI interface. Use with caution in scripts.

imagemagick-6-common/jammy,jammy,now 8:6.9.11.60+dfsg-1.3build2 all [installed,automatic]
imagemagick-6.q16/jammy,now 8:6.9.11.60+dfsg-1.3build2 amd64 [installed,automatic]
imagemagick/jammy,now 8:6.9.11.60+dfsg-1.3build2 amd64 [installed,automatic]
```

With [ImageMagick](https://imagemagick.org/) installed, run the `npm run convert` script to generate the `circle.png` file.

## related links

* [View Sample Live on Netlify](https://rasx-node-js.netlify.app/svg-and-object-element/)
* StackOverflow.com: “[make an html svg object also a clickable link](https://stackoverflow.com/questions/11374059/make-an-html-svg-object-also-a-clickable-link)”
