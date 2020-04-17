# `npx` and `concat`

A simple demonstration of `concat` [[GitHub](https://github.com/gko/concat)] running locally with or without `npx` (explicitly).

From an empty `node-concat` [folder](../node-concat):

```bash
npm init -y
npm i -s concat
touch a.txt b.txt
```

Edit the `package.json)` [file](./package.json):

```json
"scripts": {
    "build": "concat -o c.txt a.txt b.txt",
    "build:npx": "npx concat -o c.txt a.txt b.txt"
},
```

@[BryanWilhite](https://twitter.com/BryanWilhite)
