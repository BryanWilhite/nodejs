# MDN: Web Components

> Web Components is a suite of different technologies allowing you to create reusable custom elements — with their functionality encapsulated away from the rest of your code — and utilize them in your web apps.

[ 📖 <https://developer.mozilla.org/en-US/docs/Web/Web_Components> ]

This sample covers the tutorials in the Mozilla documentation for [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components):

- [Using custom elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements)
- [Using shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM)
- [Using templates and slots](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots)

A note given in the first tutorial is of fundamental importance:

> Remember that for the custom element to work, the script that registers it has to be loaded after the DOM is parsed. This can be done either by including the `<script>` element at the bottom of the `<body>`, or by including the defer attribute in your `<script>` element.

This explains why most MDN samples appends the Web Component script _after_ its declaration:

```html
<my-component></my-component>

<script src="my-component.js"></script>

```

The source code for these samples should all be in the `web-components-examples` [repo](https://github.com/mdn/web-components-examples).

@[BryanWilhite](https://twitter.com/BryanWilhite)
