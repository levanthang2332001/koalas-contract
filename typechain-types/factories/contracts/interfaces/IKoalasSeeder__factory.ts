/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IKoalasSeeder,
  IKoalasSeederInterface,
} from "../../../contracts/interfaces/IKoalasSeeder";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "koalasId",
        type: "uint256",
      },
      {
        internalType: "contract IKoalasDescriptor",
        name: "descriptor",
        type: "address",
      },
    ],
    name: "generateSeed",
    outputs: [
      {
        components: [
          {
            internalType: "uint48",
            name: "background",
            type: "uint48",
          },
          {
            internalType: "uint48",
            name: "fur",
            type: "uint48",
          },
          {
            internalType: "uint48",
            name: "face",
            type: "uint48",
          },
          {
            internalType: "uint48",
            name: "clothe",
            type: "uint48",
          },
          {
            internalType: "uint48",
            name: "eye",
            type: "uint48",
          },
          {
            internalType: "uint48",
            name: "mouth",
            type: "uint48",
          },
          {
            internalType: "uint48",
            name: "erring",
            type: "uint48",
          },
          {
            internalType: "uint48",
            name: "hand",
            type: "uint48",
          },
          {
            internalType: "uint48",
            name: "head",
            type: "uint48",
          },
        ],
        internalType: "struct IKoalasSeeder.Seed",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IKoalasSeeder__factory {
  static readonly abi = _abi;
  static createInterface(): IKoalasSeederInterface {
    return new Interface(_abi) as IKoalasSeederInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IKoalasSeeder {
    return new Contract(address, _abi, runner) as unknown as IKoalasSeeder;
  }
}