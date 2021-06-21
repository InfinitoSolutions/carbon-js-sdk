/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  Token,
  LockedCoinsWithKey,
  PositionPoolCoinsWithKey,
} from "../coin/token";

export const protobufPackage = "Switcheo.carbon.coin";

/** GenesisState defines the coin module's genesis state. */
export interface GenesisState {
  /** this line is used by starport scaffolding # genesis/proto/state */
  tokens: Token[];
  wrapperMappings: { [key: string]: string };
  lockedCoins: LockedCoinsWithKey[];
  /** this line is used by starport scaffolding # ibc/genesis/proto */
  positionPoolCoins: PositionPoolCoinsWithKey[];
}

export interface GenesisState_WrapperMappingsEntry {
  key: string;
  value: string;
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.tokens) {
      Token.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    Object.entries(message.wrapperMappings).forEach(([key, value]) => {
      GenesisState_WrapperMappingsEntry.encode(
        { key: key as any, value },
        writer.uint32(18).fork()
      ).ldelim();
    });
    for (const v of message.lockedCoins) {
      LockedCoinsWithKey.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.positionPoolCoins) {
      PositionPoolCoinsWithKey.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.tokens = [];
    message.wrapperMappings = {};
    message.lockedCoins = [];
    message.positionPoolCoins = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokens.push(Token.decode(reader, reader.uint32()));
          break;
        case 2:
          const entry2 = GenesisState_WrapperMappingsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry2.value !== undefined) {
            message.wrapperMappings[entry2.key] = entry2.value;
          }
          break;
        case 3:
          message.lockedCoins.push(
            LockedCoinsWithKey.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.positionPoolCoins.push(
            PositionPoolCoinsWithKey.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.tokens = [];
    message.wrapperMappings = {};
    message.lockedCoins = [];
    message.positionPoolCoins = [];
    if (object.tokens !== undefined && object.tokens !== null) {
      for (const e of object.tokens) {
        message.tokens.push(Token.fromJSON(e));
      }
    }
    if (
      object.wrapperMappings !== undefined &&
      object.wrapperMappings !== null
    ) {
      Object.entries(object.wrapperMappings).forEach(([key, value]) => {
        message.wrapperMappings[key] = String(value);
      });
    }
    if (object.lockedCoins !== undefined && object.lockedCoins !== null) {
      for (const e of object.lockedCoins) {
        message.lockedCoins.push(LockedCoinsWithKey.fromJSON(e));
      }
    }
    if (
      object.positionPoolCoins !== undefined &&
      object.positionPoolCoins !== null
    ) {
      for (const e of object.positionPoolCoins) {
        message.positionPoolCoins.push(PositionPoolCoinsWithKey.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.tokens) {
      obj.tokens = message.tokens.map((e) => (e ? Token.toJSON(e) : undefined));
    } else {
      obj.tokens = [];
    }
    obj.wrapperMappings = {};
    if (message.wrapperMappings) {
      Object.entries(message.wrapperMappings).forEach(([k, v]) => {
        obj.wrapperMappings[k] = v;
      });
    }
    if (message.lockedCoins) {
      obj.lockedCoins = message.lockedCoins.map((e) =>
        e ? LockedCoinsWithKey.toJSON(e) : undefined
      );
    } else {
      obj.lockedCoins = [];
    }
    if (message.positionPoolCoins) {
      obj.positionPoolCoins = message.positionPoolCoins.map((e) =>
        e ? PositionPoolCoinsWithKey.toJSON(e) : undefined
      );
    } else {
      obj.positionPoolCoins = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.tokens = [];
    message.wrapperMappings = {};
    message.lockedCoins = [];
    message.positionPoolCoins = [];
    if (object.tokens !== undefined && object.tokens !== null) {
      for (const e of object.tokens) {
        message.tokens.push(Token.fromPartial(e));
      }
    }
    if (
      object.wrapperMappings !== undefined &&
      object.wrapperMappings !== null
    ) {
      Object.entries(object.wrapperMappings).forEach(([key, value]) => {
        if (value !== undefined) {
          message.wrapperMappings[key] = String(value);
        }
      });
    }
    if (object.lockedCoins !== undefined && object.lockedCoins !== null) {
      for (const e of object.lockedCoins) {
        message.lockedCoins.push(LockedCoinsWithKey.fromPartial(e));
      }
    }
    if (
      object.positionPoolCoins !== undefined &&
      object.positionPoolCoins !== null
    ) {
      for (const e of object.positionPoolCoins) {
        message.positionPoolCoins.push(PositionPoolCoinsWithKey.fromPartial(e));
      }
    }
    return message;
  },
};

const baseGenesisState_WrapperMappingsEntry: object = { key: "", value: "" };

export const GenesisState_WrapperMappingsEntry = {
  encode(
    message: GenesisState_WrapperMappingsEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GenesisState_WrapperMappingsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGenesisState_WrapperMappingsEntry,
    } as GenesisState_WrapperMappingsEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState_WrapperMappingsEntry {
    const message = {
      ...baseGenesisState_WrapperMappingsEntry,
    } as GenesisState_WrapperMappingsEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    return message;
  },

  toJSON(message: GenesisState_WrapperMappingsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GenesisState_WrapperMappingsEntry>
  ): GenesisState_WrapperMappingsEntry {
    const message = {
      ...baseGenesisState_WrapperMappingsEntry,
    } as GenesisState_WrapperMappingsEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
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
  | undefined
  | Long;
export type DeepPartial<T> = T extends Builtin
  ? T
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
