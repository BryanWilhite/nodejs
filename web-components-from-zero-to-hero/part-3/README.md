# “Web components: from zero to hero” [part 3]

> [LitElement](https://lit-element.polymer-project.org/) is not a framework. It is simply a base class that extends `HTMLElement`. We can look at LitElement as an enhancement of the standard `HTMLElement` class, that will take care of our properties and attributes management, as well as a more refined rendering pipeline for us.

Properties management:

```javascript
static get properties() {
    return {
        text: {
            type: String,
            reflect: true
        },
        checked: {
            type: Boolean,
            reflect: true
        },
        index: {
            type: Number
        }
    }
}
```

The `reflect: true` declaration addresses the whole “reflecting properties to attributes” ceremony we had without the `LitElement` base class.

> Additionally, and perhaps most importantly, the static properties getter will react to changes and trigger a rerender when a property has changed. We no longer have to call render functions manually to update, we just need to update a property, and LitElement will do all the work for us. …You can still use custom getters and setters, but you’ll have to manually call `this.requestUpdate()` to trigger a rerender. Custom getters and setters can be useful for computed properties.

@[BryanWilhite](https://twitter.com/BryanWilhite)
