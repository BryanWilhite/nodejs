# `mocha` and Typescript

The initial spark under this sample folder is to learn and use `mocha` [[GitHub](https://github.com/mochajs/mocha)] while curating/compiling Typescript language samples. This effort would serve as a replacement for my `typescript` samples [folder](https://github.com/BryanWilhite/nodejs/tree/c35ac755fe024bf9b813a3c375a5ec8fdb990623/typescript). There are a few ignorant assumptions of mine here:

- the designers of `mocha` encourage and welcome its use with Typescript
- ‘everyone’ is telling me to use `chai` [[GitHub](https://github.com/chaijs/chai)]
- `ts-mocha` [[GitHub](https://github.com/piotrwitek/ts-mocha)] is more than sufficient
- `lerna` [[GitHub](https://github.com/lerna/lerna#readme)] is going to be helpful, reducing redundant `devDependencies`

From an [empty sample folder](../mocha-and-typescript):

```console
npm init -y
npm i -D lerna mocha chai typescript ts-mocha @types/mocha @types/expect @types/chai
npx lerna init
```

The work here intends to follow [the documentation](https://mochajs.org/#installation) at mochajs.org. And, ideally, the [my C# language study](https://github.com/BryanWilhite/LinqPad) can have Typescript equivalents here.

## Typescript pipeline comments

In a ‘real’ `lerna` repo, there should be at least two different Typescript pipelines: one for the client side and the other for the `node`-based concerns—specifically, the `ts-mocha` concerns. On the `node` side of things `tsconfig` declares `compilerOptions.module: "CommonJS"`.

@[BryanWilhite](https://twitter.com/BryanWilhite)
