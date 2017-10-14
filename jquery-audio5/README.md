# jQuery: Audio5JS with multiple tracks

This sample demonstrates how [Audio5JS](http://zohararad.github.io/audio5js/) plays multiple tracks.

Initial setup of this sample:

```bash
npm install --save audio5
npm install --save underscore
npm install --save-dev \
    @types/underscore \
    gulp \
    gulp-concat \
    map-stream \
    vinyl-fs
```

The button-click handler in the `index.js` [file](./index.js) defines three states:

```javascript
var shouldChangeTrack = (audio5js.playing && !track.isPlaying);
var shouldPause = (audio5js.playing && track.isPlaying);
var shouldPlay = (!audio5js.playing && track.isPlaying);
```

We see the `shouldChangeTrack` state demands that `initAudio()` be called _again_. Apparently, we cannot share one instance of `Audio5js` with more than one audio track. This is quite unlike [what can be done](https://stackoverflow.com/questions/10792163/change-audio-src-with-javascript) with the HTML5 `<audio>` element.

## related Links

* [View Sample Live on Netlify](https://rasx-node-js.netlify.com/jquery-audio5/)
* [CodePen.io historical sample](https://codepen.io/rasx/pen/obBLge).
