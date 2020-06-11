# tsdx-typechain

This project was bootstrapped with [TSDX](https://github.com/jaredpalmer/tsdx) and [Buidler](https://buidler.dev).

## Goal

The goal is to be able to expose typings for specific smart contracts as an npm package that can be used to interact with those contracts. This way the user gets typings without needing to be able to run TypeChain on the contracts within their own project.

## Error that currently is a blocker

This line - `import { Greeter } from "../typechain/Greeter";` - isn't working.

I might need to configure Rollup via TSDX, there might be a simple change to the tsconfig.json that can address it, or maybe something else needs to be done.

```
Error: Could not resolve '../typechain/Greeter' from src/index.ts

    at error (/Users/paulcowgill/Code/tsdx-typechain/node_modules/rollup/dist/shared/node-entry.js:5400:30)

    at ModuleLoader.handleResolveId (/Users/paulcowgill/Code/tsdx-typechain/node_modules/rollup/dist/shared/node-entry.js:12410:24)

    at ModuleLoader.<anonymous> (/Users/paulcowgill/Code/tsdx-typechain/node_modules/rollup/dist/shared/node-entry.js:12298:30)

    at Generator.next (<anonymous>)

    at fulfilled (/Users/paulcowgill/Code/tsdx-typechain/node_modules/rollup/dist/shared/node-entry.js:38:28)
```

## Local Development

Below is a list of commands you will probably find useful.

## `npm run build`
Builds the contracts, generates types for the contracts, and then transpiles the TypeScript package which uses those types.

### `npm run build:contracts`

### `npm run generate-types`
Generates types for the smart contracts using TypeChain.

### `npm run build:ts`

Bundles the package to the `dist` folder.
The package is optimized and bundled with Rollup into multiple formats (CommonJS, UMD, and ES Module).

## `npm run test`
Tests the contracts and the TypeScript

### `npm run test:ts`

Runs the test watcher (Jest) in an interactive mode.
By default, runs tests related to files changed since the last commit.

### `npm run test:contracts`
