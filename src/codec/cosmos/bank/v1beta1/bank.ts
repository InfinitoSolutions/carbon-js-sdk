/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../base/v1beta1/coin";

export const protobufPackage = "cosmos.bank.v1beta1";

/** Params defines the parameters for the bank module. */
export interface Params {
  sendEnabled: SendEnabled[];
  defaultSendEnabled: boolean;
}

/**
 * SendEnabled maps coin denom to a send_enabled status (whether a denom is
 * sendable).
 */
export interface SendEnabled {
  denom: string;
  enabled: boolean;
}

/** Input models transaction input. */
export interface Input {
  address: string;
  coins: Coin[];
}

/** Output models transaction outputs. */
export interface Output {
  address: string;
  coins: Coin[];
}

/**
 * Supply represents a struct that passively keeps track of the total supply
 * amounts in the network.
 * This message is deprecated now that supply is indexed by denom.
 *
 * @deprecated
 */
export interface Supply {
  total: Coin[];
}

/**
 * DenomUnit represents a struct that describes a given
 * denomination unit of the basic token.
 */
export interface DenomUnit {
  /** denom represents the string name of the given denom unit (e.g uatom). */
  denom: string;
  /**
   * exponent represents power of 10 exponent that one must
   * raise the base_denom to in order to equal the given DenomUnit's denom
   * 1 denom = 10^exponent base_denom
   * (e.g. with a base_denom of uatom, one can create a DenomUnit of 'atom' with
   * exponent = 6, thus: 1 atom = 10^6 uatom).
   */
  exponent: number;
  /** aliases is a list of string aliases for the given denom */
  aliases: string[];
}

/**
 * Metadata represents a struct that describes
 * a basic token.
 */
export interface Metadata {
  description: string;
  /** denom_units represents the list of DenomUnit's for a given coin */
  denomUnits: DenomUnit[];
  /** base represents the base denom (should be the DenomUnit with exponent = 0). */
  base: string;
  /**
   * display indicates the suggested denom that should be
   * displayed in clients.
   */
  display: string;
  /**
   * name defines the name of the token (eg: Cosmos Atom)
   *
   * Since: cosmos-sdk 0.43
   */
  name: string;
  /**
   * symbol is the token symbol usually shown on exchanges (eg: ATOM). This can
   * be the same as the display.
   *
   * Since: cosmos-sdk 0.43
   */
  symbol: string;
  /**
   * URI to a document (on or off-chain) that contains additional information. Optional.
   *
   * Since: cosmos-sdk 0.46
   */
  uri: string;
  /**
   * URIHash is a sha256 hash of a document pointed by URI. It's used to verify that
   * the document didn't change. Optional.
   *
   * Since: cosmos-sdk 0.46
   */
  uriHash: string;
}

const baseParams: object = { defaultSendEnabled: false };

export const Params = {
  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.sendEnabled) {
      SendEnabled.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.defaultSendEnabled === true) {
      writer.uint32(16).bool(message.defaultSendEnabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParams } as Params;
    message.sendEnabled = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sendEnabled.push(SendEnabled.decode(reader, reader.uint32()));
          break;
        case 2:
          message.defaultSendEnabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    const message = { ...baseParams } as Params;
    message.sendEnabled = (object.sendEnabled ?? []).map((e: any) =>
      SendEnabled.fromJSON(e)
    );
    message.defaultSendEnabled =
      object.defaultSendEnabled !== undefined &&
      object.defaultSendEnabled !== null
        ? Boolean(object.defaultSendEnabled)
        : false;
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.sendEnabled) {
      obj.sendEnabled = message.sendEnabled.map((e) =>
        e ? SendEnabled.toJSON(e) : undefined
      );
    } else {
      obj.sendEnabled = [];
    }
    message.defaultSendEnabled !== undefined &&
      (obj.defaultSendEnabled = message.defaultSendEnabled);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    message.sendEnabled = (object.sendEnabled ?? []).map((e) =>
      SendEnabled.fromPartial(e)
    );
    message.defaultSendEnabled = object.defaultSendEnabled ?? false;
    return message;
  },
};

const baseSendEnabled: object = { denom: "", enabled: false };

export const SendEnabled = {
  encode(
    message: SendEnabled,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.enabled === true) {
      writer.uint32(16).bool(message.enabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SendEnabled {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSendEnabled } as SendEnabled;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.enabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SendEnabled {
    const message = { ...baseSendEnabled } as SendEnabled;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.enabled =
      object.enabled !== undefined && object.enabled !== null
        ? Boolean(object.enabled)
        : false;
    return message;
  },

  toJSON(message: SendEnabled): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.enabled !== undefined && (obj.enabled = message.enabled);
    return obj;
  },

  fromPartial(object: DeepPartial<SendEnabled>): SendEnabled {
    const message = { ...baseSendEnabled } as SendEnabled;
    message.denom = object.denom ?? "";
    message.enabled = object.enabled ?? false;
    return message;
  },
};

const baseInput: object = { address: "" };

export const Input = {
  encode(message: Input, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Input {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInput } as Input;
    message.coins = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Input {
    const message = { ...baseInput } as Input;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    message.coins = (object.coins ?? []).map((e: any) => Coin.fromJSON(e));
    return message;
  },

  toJSON(message: Input): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    if (message.coins) {
      obj.coins = message.coins.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.coins = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Input>): Input {
    const message = { ...baseInput } as Input;
    message.address = object.address ?? "";
    message.coins = (object.coins ?? []).map((e) => Coin.fromPartial(e));
    return message;
  },
};

const baseOutput: object = { address: "" };

export const Output = {
  encode(
    message: Output,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Output {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOutput } as Output;
    message.coins = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Output {
    const message = { ...baseOutput } as Output;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    message.coins = (object.coins ?? []).map((e: any) => Coin.fromJSON(e));
    return message;
  },

  toJSON(message: Output): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    if (message.coins) {
      obj.coins = message.coins.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.coins = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Output>): Output {
    const message = { ...baseOutput } as Output;
    message.address = object.address ?? "";
    message.coins = (object.coins ?? []).map((e) => Coin.fromPartial(e));
    return message;
  },
};

const baseSupply: object = {};

export const Supply = {
  encode(
    message: Supply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.total) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Supply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSupply } as Supply;
    message.total = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.total.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Supply {
    const message = { ...baseSupply } as Supply;
    message.total = (object.total ?? []).map((e: any) => Coin.fromJSON(e));
    return message;
  },

  toJSON(message: Supply): unknown {
    const obj: any = {};
    if (message.total) {
      obj.total = message.total.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.total = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Supply>): Supply {
    const message = { ...baseSupply } as Supply;
    message.total = (object.total ?? []).map((e) => Coin.fromPartial(e));
    return message;
  },
};

const baseDenomUnit: object = { denom: "", exponent: 0, aliases: "" };

export const DenomUnit = {
  encode(
    message: DenomUnit,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.exponent !== 0) {
      writer.uint32(16).uint32(message.exponent);
    }
    for (const v of message.aliases) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DenomUnit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDenomUnit } as DenomUnit;
    message.aliases = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.exponent = reader.uint32();
          break;
        case 3:
          message.aliases.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DenomUnit {
    const message = { ...baseDenomUnit } as DenomUnit;
    message.denom =
      object.denom !== undefined && object.denom !== null
        ? String(object.denom)
        : "";
    message.exponent =
      object.exponent !== undefined && object.exponent !== null
        ? Number(object.exponent)
        : 0;
    message.aliases = (object.aliases ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: DenomUnit): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.exponent !== undefined && (obj.exponent = message.exponent);
    if (message.aliases) {
      obj.aliases = message.aliases.map((e) => e);
    } else {
      obj.aliases = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<DenomUnit>): DenomUnit {
    const message = { ...baseDenomUnit } as DenomUnit;
    message.denom = object.denom ?? "";
    message.exponent = object.exponent ?? 0;
    message.aliases = (object.aliases ?? []).map((e) => e);
    return message;
  },
};

const baseMetadata: object = {
  description: "",
  base: "",
  display: "",
  name: "",
  symbol: "",
  uri: "",
  uriHash: "",
};

export const Metadata = {
  encode(
    message: Metadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.description !== "") {
      writer.uint32(10).string(message.description);
    }
    for (const v of message.denomUnits) {
      DenomUnit.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.base !== "") {
      writer.uint32(26).string(message.base);
    }
    if (message.display !== "") {
      writer.uint32(34).string(message.display);
    }
    if (message.name !== "") {
      writer.uint32(42).string(message.name);
    }
    if (message.symbol !== "") {
      writer.uint32(50).string(message.symbol);
    }
    if (message.uri !== "") {
      writer.uint32(58).string(message.uri);
    }
    if (message.uriHash !== "") {
      writer.uint32(66).string(message.uriHash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Metadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMetadata } as Metadata;
    message.denomUnits = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.description = reader.string();
          break;
        case 2:
          message.denomUnits.push(DenomUnit.decode(reader, reader.uint32()));
          break;
        case 3:
          message.base = reader.string();
          break;
        case 4:
          message.display = reader.string();
          break;
        case 5:
          message.name = reader.string();
          break;
        case 6:
          message.symbol = reader.string();
          break;
        case 7:
          message.uri = reader.string();
          break;
        case 8:
          message.uriHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Metadata {
    const message = { ...baseMetadata } as Metadata;
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    message.denomUnits = (object.denomUnits ?? []).map((e: any) =>
      DenomUnit.fromJSON(e)
    );
    message.base =
      object.base !== undefined && object.base !== null
        ? String(object.base)
        : "";
    message.display =
      object.display !== undefined && object.display !== null
        ? String(object.display)
        : "";
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.symbol =
      object.symbol !== undefined && object.symbol !== null
        ? String(object.symbol)
        : "";
    message.uri =
      object.uri !== undefined && object.uri !== null ? String(object.uri) : "";
    message.uriHash =
      object.uriHash !== undefined && object.uriHash !== null
        ? String(object.uriHash)
        : "";
    return message;
  },

  toJSON(message: Metadata): unknown {
    const obj: any = {};
    message.description !== undefined &&
      (obj.description = message.description);
    if (message.denomUnits) {
      obj.denomUnits = message.denomUnits.map((e) =>
        e ? DenomUnit.toJSON(e) : undefined
      );
    } else {
      obj.denomUnits = [];
    }
    message.base !== undefined && (obj.base = message.base);
    message.display !== undefined && (obj.display = message.display);
    message.name !== undefined && (obj.name = message.name);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.uri !== undefined && (obj.uri = message.uri);
    message.uriHash !== undefined && (obj.uriHash = message.uriHash);
    return obj;
  },

  fromPartial(object: DeepPartial<Metadata>): Metadata {
    const message = { ...baseMetadata } as Metadata;
    message.description = object.description ?? "";
    message.denomUnits = (object.denomUnits ?? []).map((e) =>
      DenomUnit.fromPartial(e)
    );
    message.base = object.base ?? "";
    message.display = object.display ?? "";
    message.name = object.name ?? "";
    message.symbol = object.symbol ?? "";
    message.uri = object.uri ?? "";
    message.uriHash = object.uriHash ?? "";
    return message;
  },
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
