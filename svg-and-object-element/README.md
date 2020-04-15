# SVG and the `object` element

This sample is driven by “[Tips For Optimising SVG Delivery For The Web](https://calendar.perfplanet.com/2014/tips-for-optimising-svg-delivery-for-the-web/)” by [Sara Soueidan](http://sarasoueidan.com/). Specifically, we concentrate on tip #2, “Avoid multiple requests when providing fallback with `<object>`.”

## SVG with the `anchor` element

The design decision to make an entire SVG block clickable is not a trivial decision (as shown [on StackOverflow.com](https://stackoverflow.com/questions/11374059/make-an-html-svg-object-also-a-clickable-link)). As of this writing, there are two leading techniques: [one](https://stackoverflow.com/a/17133804/22944) is declaring `pointer-events: none;` for the CSS style of `object` (has poor IE support and disables all interactivity in the SVG); [the other](https://stackoverflow.com/a/19553517/22944) is covering the entire SVG with a `rect` wrapped in an anchor element (disables all interactivity in the SVG).

## the `svg-to-png` Gulp pipeline

To generate circle.png, `svg-to-png` [[npm](https://www.npmjs.com/package/svg-to-png), [GitHub](https://github.com/filamentgroup/svg-to-png)] was put in a [gulp pipeline](./gulpfile.js).

`svg-to-png` depends on PhantomJS [[npm](https://www.npmjs.com/package/phantomjs-prebuilt)]. Running Gulp for this sample may cause this error:

```plaintext
error while loading shared libraries: libfontconfig.so.1
```

According to “[error while loading shared libraries: libfontconfig.so.1 #165](https://github.com/giakki/uncss/issues/165),” this is the fix:

```bash
sudo apt-get install libfontconfig
```

## related links

* [View Sample Live on Netlify](https://rasx-node-js.netlify.app/svg-and-object-element/)
* StackOverflow.com: “[make an html svg object also a clickable link](https://stackoverflow.com/questions/11374059/make-an-html-svg-object-also-a-clickable-link)”
