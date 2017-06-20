# SVG `path` Introduction

One effective way to learn SVG is to start with the `<path>` element. In “[The SVG `path` Syntax: An Illustrated Guide](https://css-tricks.com/svg-path-syntax-illustrated-guide/),” Chris Coyier writes:

>It can draw anything! I’ve heard that under the hood all the other drawing elements ultimately use path anyway.

Note that this introduction stays laser-focused on the `<path>` element so all `viewBox` attributes declare `150px` squares (the use of `100px` in the Guide is an error because it crops out what we see in the images).

## using SVG and `<img>`

The external SVG files are loaded with `<img>` elements. In terms of falling back to a bitmap away from SVG, Sara Soueidan talks about [the limitations of using `<img>`](https://www.sarasoueidan.com/blog/svg-picture/). However, her general rule stands for SVG without concern for fallbacks:

>Unless you’re in need of interactivity or external styling, `<img>` is the standard way for loading an SVG image…

The CSS in this sample is confined to styling the `<img>` container. The ‘styling’ of the SVG is done in the most primitive way: the use of `fill`, `stroke` and `stroke-width` attributes directly on `path`.

## resources

* “[SVG `<path>`](https://www.w3schools.com/graphics/svg_path.asp)”
* “[Better SVG Fallback and Art Direction with The `<picture>` Element](https://www.sarasoueidan.com/blog/svg-picture/)”
* 2015: “[A Complete Guide to SVG Fallbacks](https://css-tricks.com/a-complete-guide-to-svg-fallbacks/)”