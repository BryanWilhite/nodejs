# “Web components: from zero to hero” [part 2]

> [Lit-html](https://github.com/Polymer/lit-html) is a rendering library that lets you write HTML templates with [javascript template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals), and efficiently render and re-render those templates to DOM. Tagged template literals are a feature of ES6 that can span multiple lines, and contain javascript expressions. …lit-html takes your template, replaces all the expressions with generic placeholders called Parts, and makes a `<template>` element out of the result.

Importing `html` and `render` from `lit-html` eliminates the need to explicitly instantiate a `template` and set its `innerHTML` property:

```javascript
template() {
    return html`
        <style>
            :host {
                display: block;
                font-family: sans-serif;
                text-align: center;
            }
            button {
                border: none;
                cursor: pointer;
                background-color: Transparent;
            }
            ul {
                list-style: none;
                padding: 0;
            }
        </style>
        <h3>Raw web components + lit-html</h3>
        <br>
        <h1>To do</h1>
        <form id="todo-input">
            <input type="text" placeholder="Add a new to do"></input>
            <button @click=${this._addTodo}>✅</button>
        </form>
        <ul id="todos">
            ${this.todos.map((todo, index) => html`
                <to-do-item
                    ?checked=${todo.checked}
                    .index=${index}
                    text=${todo.text}
                    @onRemove=${this._removeTodo}
                    @onToggle=${this._toggleTodo}>
                </to-do-item>
                `
    )}
        </ul>
    `;
}

set todos(value) {
    this._todos = value;
    render(this.template(), this._shadowRoot, { eventContext: this });
}
```

> When we wanted to update our component, we had to create a bunch of elements, set their attributes, add their event listeners and append them to the DOM. All by hand. …Now we only declare our template once, we can set attributes, properties and events _declaratively_ in the template, and just call lit-html’s `render` function when we need to. The great thing about lit-html is that it’s fast and efficient at rendering; It looks only at the dynamic expressions, and changes only what needs to be updated.

I see that `?checked=${todo.checked}` (the leading question mark) is used by lit-html for Boolean attributes:

> Conveniently enough, lit-html allows us to easily specify our attribute as a Boolean attribute by prefixing the attribute name with a `?`, and then makes sure the attribute is either present on the element, or not.

The leading period in `.index=${index}` addresses the attribute-property mismatch covered in [Part 1](../part-1):

> Previously, to set properties on our components, we had to imperatively query for the component, and set the property. Thanks to lit-html, we can handle all this in our template instead.

The leading ampersand in `@onRemove=${this._removeTodo}` eliminates all of the previous `CustomElement` ceremony.

@[BryanWilhite](https://twitter.com/BryanWilhite)
