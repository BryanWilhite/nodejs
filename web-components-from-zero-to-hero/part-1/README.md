# “Web components: from zero to hero” [part 1]

An explanation for why custom HTML elements cannot be self-closing:

> Custom elements also cannot be self-closing because HTML only allows a few elements to be self-closing. These are called _void elements_, like `<br/>` or `<img/>`, or elements that don’t allow children nodes. …Allowing self-closing elements would require a change in the HTML parser, which is a problem since HTML parsing is security sensitive. HTML producers need to be able to rely on how a given piece of HTML parses in order to be able to implement XSS-safe HTML generation.

The [MDN introduction to templates and slots](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots) confines itself to the inline HTML _declaration_ of `template` and `slot`. The problem with this educational approach is its deliberate ignorance of the JavaScript module system(s)—which was probably done to avoid complicating the matter and might also be a consequence of the deprecation of declaring `link` to [include external HTML files](https://www.html5rocks.com/en/tutorials/webcomponents/imports/).

Pascal Schlip _is_ sensitive to the JavaScript module system(s) and introduces us to `template` imperatively with this:

```javascript
const template = document.createElement('template');
template.innerHTML = `
    <style>
        :host {
            display: block;
            font-family: sans-serif;
        }

        .completed {
            text-decoration: line-through;
        }

        button {
            border: none;
            cursor: pointer;
        }
    </style>
    <li class="item">
        <input type="checkbox">
        <label></label>
        <button>❌</button>
    </li>
`;
```

> We only set the `innerHTML` on the template _once_. The reason we're using a template is because cloning templates is much cheaper than calling `.innerHTML` for all instances of our component.

The CSS styling embedded in the `innerHTML` uses the `:host` pseudo class [📖 [docs](https://developer.mozilla.org/en-US/docs/Web/CSS/:host())] from [CSS Scoping Module Level 1](https://drafts.csswg.org/css-scoping/#host-selector).

> An important thing to note is that the display is always set to `display: inline;`, which means you can’t set a width or height on your element. So make sure to set a `:host` display style (e.g. block, inline-block, flex) unless you prefer the default of inline.

The attributes vs. properties issue was introduced to me [in Angular documentation](https://angular.io/guide/template-syntax#html-attribute-vs-dom-property):

> _Attributes_ are handled differently, and don’t allow rich data, in fact, they only allow a `String` type as a limitation of HTML. Properties are more flexible and can handle complex data types like Objects or Arrays. …The difference is that attributes are defined on HTML elements. When the browser parses the HTML, a corresponding DOM node will be created. This node is an object, and therefore it has _properties_. …_Setting_ attributes works differently from properties as well, notice how we didn't implement any getters or setters. We added our `text` attribute to the `static get observedAttributes` getter, to allow us to watch for changes on the `text` attribute. And we implemented the `attributesChangedCallback` to react to those changes:

```javascript
static get observedAttributes() {
    return ['text', 'checked', 'index'];
}

attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
        case 'text':
            this._text = newValue;
            break;
        case 'checked':
            this._checked = this.hasAttribute('checked');
            break;
        case 'index':
            this._index = parseInt(newValue);
            break;
    }
}
```

When an attribute is a Boolean:

> The presence of a boolean attribute on an element represents the `True` value, and the absence of the attribute represents the `False` value.

```javascript
_renderTodoItem() {
    if (this.hasAttribute('checked')) {
        this.$item.classList.add('completed');
        this.$checkbox.setAttribute('checked', '');
    } else {
        this.$item.classList.remove('completed');
        this.$checkbox.removeAttribute('checked');
    }

    this.$text.innerHTML = this._text;
}
```

The term “reflecting properties to attributes”:

> We’ve currently set it only as an `attribute`, but we would like to have it available as a `property` as well. This is called _reflecting properties to attributes_.

```javascript
set index(val) {
    this.setAttribute('index', val);
}

get index() {
    return this._index;
}

get checked() {
    return this.hasAttribute('checked');
}

set checked(val) {
    if (val) {
        this.setAttribute('checked', '');
    } else {
        this.removeAttribute('checked');
    }
}
```

@[BryanWilhite](https://twitter.com/BryanWilhite)
