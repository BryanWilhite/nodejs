# SVG coordinate attributes

This sample explores the most important fundamentals of SVG: “SVG attributes that control SVG coordinate systems” as quoted from [the Sara Soueidan article](https://www.sarasoueidan.com/blog/svg-coordinate-systems/) we are following. These are the key attributes:

* “view port” or “canvas” => `width` and `height`
* `viewBox`
* `preserveAspectRatio`

For those of us who are very familiar with the `img` HTML tag, the concepts of the “view port” and the “view box” can be confusing. It looks like Sara Soueidan is trying to tell us that the “view port” corresponds to the `width` and `height` properties of the `img` tag. However the mathematical (vector) nature of SVG means that there must be an independent coordinate system within the “view port” where an image can be _drawn_.

>The initial user coordinate system is the coordinate system established on the SVG canvas. This coordinate system is initially identical to the [“view port”] coordinate system…

When I really sit down and play with the excellent [demo](https://www.sarasoueidan.com/demos/interactive-svg-coordinate-system/) by Sara Soueidan, I can see that the ideal/initial “view port” can completely contain the SVG _drawing_ on the canvas. This demo show the `viewBox` attribute in action:

* Changing the `viewBox` attribute `width` and `height` parameters to a size smaller than the ideal “view port” allows us to crop the image.
* Changing the `viewBox` attribute `width` and `height` parameters to a size larger than the ideal “view port” allows us to surround the image with canvas (white space usually not desired).

>I like to think of the `viewBox` as the “real” coordinate system. After all, it is the coordinate system used to draw the SVG graphics onto the canvas.

Note that above I use `width` and `height` _parameters_ for the `viewBox` _attribute_, we see this in the syntax:

```plaintext
viewBox = <min-x> <min-y> <width> <height>
```

I also see from the [demo](https://www.sarasoueidan.com/demos/interactive-svg-coordinate-system/) that the `min-x` and `min-y` parameters can be used like CSS `padding-left` and `padding-top` respectively by default when negative values are used.