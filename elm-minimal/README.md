# elm minimal

This minimal sample worked best (for me) on Linux (Ubuntu). From bash, we start with:

```bash

sudo npm install -g elm
sudo npm install -g elm-format

```

Then from the root folder of this repository we run `elm-make`:

```bash

elm-make elm-minimal/src/Counter.elm --output=elm-minimal/Counter.html

```

In the root folder of this repository there is an `elm-package.json` file with this `source-directories` setting:

```js

"source-directories": [
    "elm-minimal/src"
],

```

Also, the conventional `\elm-stuff` folder has been added to `.gitignore`.

## related resources

* guide.elm-lang.org: “[Install](https://guide.elm-lang.org/install.html)”
* “[An Introduction to Elm](https://www.gitbook.com/book/evancz/an-introduction-to-elm/details)”
* “[`elm-make`](https://github.com/elm-lang/elm-make)”