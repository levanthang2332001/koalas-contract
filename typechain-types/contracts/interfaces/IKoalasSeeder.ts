/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export declare namespace IKoalasSeeder {
  export type SeedStruct = {
    background: BigNumberish;
    fur: BigNumberish;
    face: BigNumberish;
    clothe: BigNumberish;
    eye: BigNumberish;
    mouth: BigNumberish;
    erring: BigNumberish;
    hand: BigNumberish;
    head: BigNumberish;
  };

  export type SeedStructOutput = [
    background: bigint,
    fur: bigint,
    face: bigint,
    clothe: bigint,
    eye: bigint,
    mouth: bigint,
    erring: bigint,
    hand: bigint,
    head: bigint
  ] & {
    background: bigint;
    fur: bigint;
    face: bigint;
    clothe: bigint;
    eye: bigint;
    mouth: bigint;
    erring: bigint;
    hand: bigint;
    head: bigint;
  };
}

export interface IKoalasSeederInterface extends Interface {
  getFunction(nameOrSignature: "generateSeed"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "generateSeed",
    values: [BigNumberish, AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "generateSeed",
    data: BytesLike
  ): Result;
}

export interface IKoalasSeeder extends BaseContract {
  connect(runner?: ContractRunner | null): IKoalasSeeder;
  waitForDeployment(): Promise<this>;

  interface: IKoalasSeederInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  generateSeed: TypedContractMethod<
    [koalasId: BigNumberish, descriptor: AddressLike],
    [IKoalasSeeder.SeedStructOutput],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "generateSeed"
  ): TypedContractMethod<
    [koalasId: BigNumberish, descriptor: AddressLike],
    [IKoalasSeeder.SeedStructOutput],
    "view"
  >;

  filters: {};
}
