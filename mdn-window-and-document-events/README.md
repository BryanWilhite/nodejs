# MDN: `window` and `document` events

For a person deeply influenced by the world of jQuery, it is novel to see “new” events in the DOM that are _standards_. The `.ready()` function [📖 [docs](https://api.jquery.com/ready/)] is something we have enjoyed for years in the world of jQuery and only relatively recently do we have a standard event, `DOMContentLoaded` [📖 [docs](https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event)], that is _closer_ to this jQuery functionality.

The jQuery documentation itself strongly suggests that `DOMContentLoaded` is _not_ the equivalent of `.ready()`:

> If the DOM becomes ready and the browser fires `DOMContentLoaded` before the code calls `.ready( handler )`, the function handler will still be executed. In contrast, a `DOMContentLoaded` event listener added after the event fires is never executed.

As of this writing, I ignorantly assume that the standard `readystatechange` event [📖 [docs](https://developer.mozilla.org/en-US/docs/Web/API/Document/readystatechange_event)] was added to address the limitations of `DOMContentLoaded`. (I also assume that [RxJS](https://rxjs.dev/) wrapping `DOMContentLoaded` would directly address what the jQuery team is pointing out [📖 [docs](https://rxjs.dev/api/index/function/fromEventPattern)].)

## related Links

* [View Sample Live on Netlify](https://rasx-node-js.netlify.app/mdn-window-and-document-events/)

[Bryan Wilhite is on LinkedIn](https://www.linkedin.com/in/wilhite)🇺🇸💼
