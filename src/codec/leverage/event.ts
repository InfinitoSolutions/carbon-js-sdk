/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "Switcheo.tradehubcosmos.leverage";

export interface LeverageEvent {
  leverage: string;
  type: string;
  market: string;
  address: string;
}

const baseLeverageEvent: object = {
  leverage: "",
  type: "",
  market: "",
  address: "",
};

export const LeverageEvent = {
  encode(
    message: LeverageEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.leverage !== "") {
      writer.uint32(10).string(message.leverage);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    if (message.market !== "") {
      writer.uint32(26).string(message.market);
    }
    if (message.address !== "") {
      writer.uint32(34).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LeverageEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLeverageEvent } as LeverageEvent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.leverage = reader.string();
          break;
        case 2:
          message.type = reader.string();
          break;
        case 3:
          message.market = reader.string();
          break;
        case 4:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LeverageEvent {
    const message = { ...baseLeverageEvent } as LeverageEvent;
    if (object.leverage !== undefined && object.leverage !== null) {
      message.leverage = String(object.leverage);
    } else {
      message.leverage = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = String(object.type);
    } else {
      message.type = "";
    }
    if (object.market !== undefined && object.market !== null) {
      message.market = String(object.market);
    } else {
      message.market = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: LeverageEvent): unknown {
    const obj: any = {};
    message.leverage !== undefined && (obj.leverage = message.leverage);
    message.type !== undefined && (obj.type = message.type);
    message.market !== undefined && (obj.market = message.market);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<LeverageEvent>): LeverageEvent {
    const message = { ...baseLeverageEvent } as LeverageEvent;
    if (object.leverage !== undefined && object.leverage !== null) {
      message.leverage = object.leverage;
    } else {
      message.leverage = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = "";
    }
    if (object.market !== undefined && object.market !== null) {
      message.market = object.market;
    } else {
      message.market = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
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
