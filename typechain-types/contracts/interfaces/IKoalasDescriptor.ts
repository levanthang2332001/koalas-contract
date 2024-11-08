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
  EventFragment,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
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

export interface IKoalasDescriptorInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "addBackground"
      | "addClothe"
      | "addColorsToPalette"
      | "addEarring"
      | "addEye"
      | "addFace"
      | "addFur"
      | "addHand"
      | "addHead"
      | "addManyBackground"
      | "addManyClothe"
      | "addManyColorsToPalette"
      | "addManyEarring"
      | "addManyEye"
      | "addManyFace"
      | "addManyFur"
      | "addManyHand"
      | "addManyHead"
      | "addManyMouth"
      | "addMouth"
      | "arePartsLocked"
      | "backgroundCount"
      | "backgrounds"
      | "baseURI"
      | "clotheCount"
      | "clothes"
      | "dataURI"
      | "earringCount"
      | "earrings"
      | "eyeCount"
      | "eyes"
      | "faceCount"
      | "faces"
      | "furCount"
      | "furs"
      | "generateSVGImage"
      | "genericDataURI"
      | "handCount"
      | "hands"
      | "headCount"
      | "heads"
      | "isDataURIEnabled"
      | "lockParts"
      | "mouthCount"
      | "mouths"
      | "palettes"
      | "setBaseURI"
      | "toggleDataURIEnabled"
      | "tokenURI"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "BaseURIUpdate" | "DataURIToggled" | "PartsLocked"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "addBackground",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "addClothe",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "addColorsToPalette",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "addEarring",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "addEye", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "addFace", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "addFur", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "addHand", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "addHead", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "addManyBackground",
    values: [string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "addManyClothe",
    values: [BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "addManyColorsToPalette",
    values: [BigNumberish, string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "addManyEarring",
    values: [BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "addManyEye",
    values: [BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "addManyFace",
    values: [BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "addManyFur",
    values: [BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "addManyHand",
    values: [BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "addManyHead",
    values: [BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "addManyMouth",
    values: [BytesLike[]]
  ): string;
  encodeFunctionData(functionFragment: "addMouth", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "arePartsLocked",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "backgroundCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "backgrounds",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "baseURI", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "clotheCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "clothes",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "dataURI",
    values: [BigNumberish, IKoalasSeeder.SeedStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "earringCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "earrings",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "eyeCount", values?: undefined): string;
  encodeFunctionData(functionFragment: "eyes", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "faceCount", values?: undefined): string;
  encodeFunctionData(functionFragment: "faces", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "furCount", values?: undefined): string;
  encodeFunctionData(functionFragment: "furs", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "generateSVGImage",
    values: [IKoalasSeeder.SeedStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "genericDataURI",
    values: [string, string, IKoalasSeeder.SeedStruct]
  ): string;
  encodeFunctionData(functionFragment: "handCount", values?: undefined): string;
  encodeFunctionData(functionFragment: "hands", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "headCount", values?: undefined): string;
  encodeFunctionData(functionFragment: "heads", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "isDataURIEnabled",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "lockParts", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "mouthCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "mouths",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "palettes",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "setBaseURI", values: [string]): string;
  encodeFunctionData(
    functionFragment: "toggleDataURIEnabled",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "tokenURI",
    values: [BigNumberish, IKoalasSeeder.SeedStruct]
  ): string;

  decodeFunctionResult(
    functionFragment: "addBackground",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addClothe", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addColorsToPalette",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addEarring", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "addEye", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "addFace", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "addFur", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "addHand", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "addHead", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addManyBackground",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addManyClothe",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addManyColorsToPalette",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addManyEarring",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addManyEye", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addManyFace",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addManyFur", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addManyHand",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addManyHead",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addManyMouth",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addMouth", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "arePartsLocked",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "backgroundCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "backgrounds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "baseURI", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "clotheCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "clothes", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "dataURI", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "earringCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "earrings", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "eyeCount", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "eyes", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "faceCount", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "faces", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "furCount", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "furs", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "generateSVGImage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "genericDataURI",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "handCount", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hands", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "headCount", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "heads", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isDataURIEnabled",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lockParts", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mouthCount", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mouths", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "palettes", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setBaseURI", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "toggleDataURIEnabled",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tokenURI", data: BytesLike): Result;
}

export namespace BaseURIUpdateEvent {
  export type InputTuple = [baseURI: string];
  export type OutputTuple = [baseURI: string];
  export interface OutputObject {
    baseURI: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DataURIToggledEvent {
  export type InputTuple = [enabeled: boolean];
  export type OutputTuple = [enabeled: boolean];
  export interface OutputObject {
    enabeled: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PartsLockedEvent {
  export type InputTuple = [];
  export type OutputTuple = [];
  export interface OutputObject {}
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IKoalasDescriptor extends BaseContract {
  connect(runner?: ContractRunner | null): IKoalasDescriptor;
  waitForDeployment(): Promise<this>;

  interface: IKoalasDescriptorInterface;

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

  addBackground: TypedContractMethod<
    [backgrounds: string],
    [void],
    "nonpayable"
  >;

  addClothe: TypedContractMethod<[clothes: BytesLike], [void], "nonpayable">;

  addColorsToPalette: TypedContractMethod<
    [paletteIndex: BigNumberish, newColors: string],
    [void],
    "nonpayable"
  >;

  addEarring: TypedContractMethod<[earrings: BytesLike], [void], "nonpayable">;

  addEye: TypedContractMethod<[eyes: BytesLike], [void], "nonpayable">;

  addFace: TypedContractMethod<[faces: BytesLike], [void], "nonpayable">;

  addFur: TypedContractMethod<[furs: BytesLike], [void], "nonpayable">;

  addHand: TypedContractMethod<[hands: BytesLike], [void], "nonpayable">;

  addHead: TypedContractMethod<[head: BytesLike], [void], "nonpayable">;

  addManyBackground: TypedContractMethod<
    [backgrounds: string[]],
    [void],
    "nonpayable"
  >;

  addManyClothe: TypedContractMethod<
    [clothes: BytesLike[]],
    [void],
    "nonpayable"
  >;

  addManyColorsToPalette: TypedContractMethod<
    [paletteIndex: BigNumberish, newColors: string[]],
    [void],
    "nonpayable"
  >;

  addManyEarring: TypedContractMethod<
    [earrings: BytesLike[]],
    [void],
    "nonpayable"
  >;

  addManyEye: TypedContractMethod<[eyes: BytesLike[]], [void], "nonpayable">;

  addManyFace: TypedContractMethod<[faces: BytesLike[]], [void], "nonpayable">;

  addManyFur: TypedContractMethod<[furs: BytesLike[]], [void], "nonpayable">;

  addManyHand: TypedContractMethod<[hands: BytesLike[]], [void], "nonpayable">;

  addManyHead: TypedContractMethod<[head: BytesLike[]], [void], "nonpayable">;

  addManyMouth: TypedContractMethod<
    [mouths: BytesLike[]],
    [void],
    "nonpayable"
  >;

  addMouth: TypedContractMethod<[mouths: BytesLike], [void], "nonpayable">;

  arePartsLocked: TypedContractMethod<[], [boolean], "nonpayable">;

  backgroundCount: TypedContractMethod<[], [bigint], "view">;

  backgrounds: TypedContractMethod<[index: BigNumberish], [string], "view">;

  baseURI: TypedContractMethod<[], [string], "nonpayable">;

  clotheCount: TypedContractMethod<[], [bigint], "view">;

  clothes: TypedContractMethod<[index: BigNumberish], [string], "view">;

  dataURI: TypedContractMethod<
    [tokenId: BigNumberish, seed: IKoalasSeeder.SeedStruct],
    [string],
    "view"
  >;

  earringCount: TypedContractMethod<[], [bigint], "view">;

  earrings: TypedContractMethod<[index: BigNumberish], [string], "view">;

  eyeCount: TypedContractMethod<[], [bigint], "view">;

  eyes: TypedContractMethod<[index: BigNumberish], [string], "view">;

  faceCount: TypedContractMethod<[], [bigint], "view">;

  faces: TypedContractMethod<[index: BigNumberish], [string], "view">;

  furCount: TypedContractMethod<[], [bigint], "view">;

  furs: TypedContractMethod<[index: BigNumberish], [string], "view">;

  generateSVGImage: TypedContractMethod<
    [seed: IKoalasSeeder.SeedStruct],
    [string],
    "view"
  >;

  genericDataURI: TypedContractMethod<
    [name: string, description: string, seed: IKoalasSeeder.SeedStruct],
    [string],
    "view"
  >;

  handCount: TypedContractMethod<[], [bigint], "view">;

  hands: TypedContractMethod<[index: BigNumberish], [string], "view">;

  headCount: TypedContractMethod<[], [bigint], "view">;

  heads: TypedContractMethod<[index: BigNumberish], [string], "view">;

  isDataURIEnabled: TypedContractMethod<[], [boolean], "nonpayable">;

  lockParts: TypedContractMethod<[], [void], "nonpayable">;

  mouthCount: TypedContractMethod<[], [bigint], "view">;

  mouths: TypedContractMethod<[index: BigNumberish], [string], "view">;

  palettes: TypedContractMethod<
    [paletteIndex: BigNumberish, colorIndex: BigNumberish],
    [string],
    "view"
  >;

  setBaseURI: TypedContractMethod<[baseURI: string], [void], "nonpayable">;

  toggleDataURIEnabled: TypedContractMethod<[], [void], "nonpayable">;

  tokenURI: TypedContractMethod<
    [tokenId: BigNumberish, seed: IKoalasSeeder.SeedStruct],
    [string],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "addBackground"
  ): TypedContractMethod<[backgrounds: string], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "addClothe"
  ): TypedContractMethod<[clothes: BytesLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "addColorsToPalette"
  ): TypedContractMethod<
    [paletteIndex: BigNumberish, newColors: string],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "addEarring"
  ): TypedContractMethod<[earrings: BytesLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "addEye"
  ): TypedContractMethod<[eyes: BytesLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "addFace"
  ): TypedContractMethod<[faces: BytesLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "addFur"
  ): TypedContractMethod<[furs: BytesLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "addHand"
  ): TypedContractMethod<[hands: BytesLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "addHead"
  ): TypedContractMethod<[head: BytesLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "addManyBackground"
  ): TypedContractMethod<[backgrounds: string[]], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "addManyClothe"
  ): TypedContractMethod<[clothes: BytesLike[]], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "addManyColorsToPalette"
  ): TypedContractMethod<
    [paletteIndex: BigNumberish, newColors: string[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "addManyEarring"
  ): TypedContractMethod<[earrings: BytesLike[]], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "addManyEye"
  ): TypedContractMethod<[eyes: BytesLike[]], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "addManyFace"
  ): TypedContractMethod<[faces: BytesLike[]], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "addManyFur"
  ): TypedContractMethod<[furs: BytesLike[]], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "addManyHand"
  ): TypedContractMethod<[hands: BytesLike[]], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "addManyHead"
  ): TypedContractMethod<[head: BytesLike[]], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "addManyMouth"
  ): TypedContractMethod<[mouths: BytesLike[]], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "addMouth"
  ): TypedContractMethod<[mouths: BytesLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "arePartsLocked"
  ): TypedContractMethod<[], [boolean], "nonpayable">;
  getFunction(
    nameOrSignature: "backgroundCount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "backgrounds"
  ): TypedContractMethod<[index: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "baseURI"
  ): TypedContractMethod<[], [string], "nonpayable">;
  getFunction(
    nameOrSignature: "clotheCount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "clothes"
  ): TypedContractMethod<[index: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "dataURI"
  ): TypedContractMethod<
    [tokenId: BigNumberish, seed: IKoalasSeeder.SeedStruct],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "earringCount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "earrings"
  ): TypedContractMethod<[index: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "eyeCount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "eyes"
  ): TypedContractMethod<[index: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "faceCount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "faces"
  ): TypedContractMethod<[index: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "furCount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "furs"
  ): TypedContractMethod<[index: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "generateSVGImage"
  ): TypedContractMethod<[seed: IKoalasSeeder.SeedStruct], [string], "view">;
  getFunction(
    nameOrSignature: "genericDataURI"
  ): TypedContractMethod<
    [name: string, description: string, seed: IKoalasSeeder.SeedStruct],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "handCount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "hands"
  ): TypedContractMethod<[index: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "headCount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "heads"
  ): TypedContractMethod<[index: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "isDataURIEnabled"
  ): TypedContractMethod<[], [boolean], "nonpayable">;
  getFunction(
    nameOrSignature: "lockParts"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "mouthCount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "mouths"
  ): TypedContractMethod<[index: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "palettes"
  ): TypedContractMethod<
    [paletteIndex: BigNumberish, colorIndex: BigNumberish],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "setBaseURI"
  ): TypedContractMethod<[baseURI: string], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "toggleDataURIEnabled"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "tokenURI"
  ): TypedContractMethod<
    [tokenId: BigNumberish, seed: IKoalasSeeder.SeedStruct],
    [string],
    "view"
  >;

  getEvent(
    key: "BaseURIUpdate"
  ): TypedContractEvent<
    BaseURIUpdateEvent.InputTuple,
    BaseURIUpdateEvent.OutputTuple,
    BaseURIUpdateEvent.OutputObject
  >;
  getEvent(
    key: "DataURIToggled"
  ): TypedContractEvent<
    DataURIToggledEvent.InputTuple,
    DataURIToggledEvent.OutputTuple,
    DataURIToggledEvent.OutputObject
  >;
  getEvent(
    key: "PartsLocked"
  ): TypedContractEvent<
    PartsLockedEvent.InputTuple,
    PartsLockedEvent.OutputTuple,
    PartsLockedEvent.OutputObject
  >;

  filters: {
    "BaseURIUpdate(string)": TypedContractEvent<
      BaseURIUpdateEvent.InputTuple,
      BaseURIUpdateEvent.OutputTuple,
      BaseURIUpdateEvent.OutputObject
    >;
    BaseURIUpdate: TypedContractEvent<
      BaseURIUpdateEvent.InputTuple,
      BaseURIUpdateEvent.OutputTuple,
      BaseURIUpdateEvent.OutputObject
    >;

    "DataURIToggled(bool)": TypedContractEvent<
      DataURIToggledEvent.InputTuple,
      DataURIToggledEvent.OutputTuple,
      DataURIToggledEvent.OutputObject
    >;
    DataURIToggled: TypedContractEvent<
      DataURIToggledEvent.InputTuple,
      DataURIToggledEvent.OutputTuple,
      DataURIToggledEvent.OutputObject
    >;

    "PartsLocked()": TypedContractEvent<
      PartsLockedEvent.InputTuple,
      PartsLockedEvent.OutputTuple,
      PartsLockedEvent.OutputObject
    >;
    PartsLocked: TypedContractEvent<
      PartsLockedEvent.InputTuple,
      PartsLockedEvent.OutputTuple,
      PartsLockedEvent.OutputObject
    >;
  };
}
