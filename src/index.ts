// import { ethers } from "ethers"
import Greeter from './artifacts/Greeter.json';

// TODO: Find a better solution to getting prettier to understand
// this TypeScript import type syntax
// Parsing error: '=' expected  prettier/prettier
// eslint-disable-next-line prettier/prettier
import type { Greeter as GreeterType } from './types/Greeter';
// import { GreeterFactory } from './types/GreeterFactory';

export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('boop');
  }
  return a + b;
};
// const greeterFactory = new GreeterFactory();

// (async () => {
//   const greeter = await greeterFactory.deploy("hello");
//   return greeter;
// })();
// const greeterAbi = Greeter.abi;
// const provider = ethers.getDefaultProvider();
// const contractAddress = "0x2bD9aAa2953F988153c8629926D22A6a5F69b14E";

// let greeter: GreeterType

export const types = {
  Greeter
};

export type { GreeterType };