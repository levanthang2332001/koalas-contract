/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IProxyRegistry,
  IProxyRegistryInterface,
} from "../../../contracts/external/IProxyRegistry";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "proxies",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IProxyRegistry__factory {
  static readonly abi = _abi;
  static createInterface(): IProxyRegistryInterface {
    return new Interface(_abi) as IProxyRegistryInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IProxyRegistry {
    return new Contract(address, _abi, runner) as unknown as IProxyRegistry;
  }
}