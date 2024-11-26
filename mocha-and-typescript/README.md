# `mocha` and Typescript

The initial spark under this sample folder is to learn and use `mocha` [[GitHub](https://github.com/mochajs/mocha)] while curating/compiling Typescript language samples. This effort would serve as a replacement for my `typescript` samples [folder](https://github.com/BryanWilhite/nodejs/tree/c35ac755fe024bf9b813a3c375a5ec8fdb990623/typescript). There are a few ignorant assumptions of mine here:

- the designers of `mocha` encourage and welcome its use with Typescript
- ‘everyone’ is telling me to use `chai` [[GitHub](https://github.com/chaijs/chai)]
- `ts-mocha` [[GitHub](https://github.com/piotrwitek/ts-mocha)] is more than sufficient
- `lerna` [[GitHub](https://github.com/lerna/lerna#readme)] is going to be helpful, reducing redundant `devDependencies`

From an [empty sample folder](../mocha-and-typescript):

```console
npm init -y
npm i -D lerna mocha chai typescript tslint @types/mocha @types/expect @types/chai @tsconfig/strictest
npx lerna init
```

The work here intends to follow [the documentation](https://mochajs.org/#installation) at mochajs.org. And, ideally, the [my C# language study](https://github.com/BryanWilhite/LinqPad) can have Typescript equivalents here.

## the removal of `ts-mocha`

I have removed `ts-mocha` from this sample.

A glance at the `ts-mocha` [repo](https://github.com/piotrwitek/ts-mocha) can make one feel like `ts-mocha` has been left behind for about two years or completely abandoned.

I have forced to look into this possibility of abandonment after getting a `ERR_UNKNOWN_FILE_EXTENSION` error from `ts-mocha` with `Unknown file extension ".mts"` where the `.mts` extension is actually ‘native’ to modern TypeScript [📖 [docs](https://www.typescriptlang.org/docs/handbook/modules/theory.html#module-format-detection)] My flippant accusation is that `ts-mocha` is not aware of Typescript “modules” with the `.mts` extension.

On the other hand, I could be mistaken by all of this and was just one `tsconfig.json` editing session away from resolving my issue.

@[BryanWilhite](https://twitter.com/BryanWilhite)
