/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Header } from "../../../tendermint/types/types";
import { Any } from "../../../google/protobuf/any";
import { Duration } from "../../../google/protobuf/duration";
import { Coin } from "../../base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "cosmos.staking.v1beta1";

/** BondStatus is the status of a validator. */
export enum BondStatus {
  /** BOND_STATUS_UNSPECIFIED - UNSPECIFIED defines an invalid validator status. */
  BOND_STATUS_UNSPECIFIED = 0,
  /** BOND_STATUS_UNBONDED - UNBONDED defines a validator that is not bonded. */
  BOND_STATUS_UNBONDED = 1,
  /** BOND_STATUS_UNBONDING - UNBONDING defines a validator that is unbonding. */
  BOND_STATUS_UNBONDING = 2,
  /** BOND_STATUS_BONDED - BONDED defines a validator that is bonded. */
  BOND_STATUS_BONDED = 3,
  UNRECOGNIZED = -1,
}

export function bondStatusFromJSON(object: any): BondStatus {
  switch (object) {
    case 0:
    case "BOND_STATUS_UNSPECIFIED":
      return BondStatus.BOND_STATUS_UNSPECIFIED;
    case 1:
    case "BOND_STATUS_UNBONDED":
      return BondStatus.BOND_STATUS_UNBONDED;
    case 2:
    case "BOND_STATUS_UNBONDING":
      return BondStatus.BOND_STATUS_UNBONDING;
    case 3:
    case "BOND_STATUS_BONDED":
      return BondStatus.BOND_STATUS_BONDED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BondStatus.UNRECOGNIZED;
  }
}

export function bondStatusToJSON(object: BondStatus): string {
  switch (object) {
    case BondStatus.BOND_STATUS_UNSPECIFIED:
      return "BOND_STATUS_UNSPECIFIED";
    case BondStatus.BOND_STATUS_UNBONDED:
      return "BOND_STATUS_UNBONDED";
    case BondStatus.BOND_STATUS_UNBONDING:
      return "BOND_STATUS_UNBONDING";
    case BondStatus.BOND_STATUS_BONDED:
      return "BOND_STATUS_BONDED";
    default:
      return "UNKNOWN";
  }
}

/**
 * HistoricalInfo contains header and validator information for a given block.
 * It is stored as part of staking module's state, which persists the `n` most
 * recent HistoricalInfo
 * (`n` is set by the staking module's `historical_entries` parameter).
 */
export interface HistoricalInfo {
  header?: Header;
  valset: Validator[];
}

/**
 * CommissionRates defines the initial commission rates to be used for creating
 * a validator.
 */
export interface CommissionRates {
  /** rate is the commission rate charged to delegators, as a fraction. */
  rate: string;
  /** max_rate defines the maximum commission rate which validator can ever charge, as a fraction. */
  maxRate: string;
  /** max_change_rate defines the maximum daily increase of the validator commission, as a fraction. */
  maxChangeRate: string;
}

/** Commission defines commission parameters for a given validator. */
export interface Commission {
  /** commission_rates defines the initial commission rates to be used for creating a validator. */
  commissionRates?: CommissionRates;
  /** update_time is the last time the commission rate was changed. */
  updateTime?: Date;
}

/** Description defines a validator description. */
export interface Description {
  /** moniker defines a human-readable name for the validator. */
  moniker: string;
  /** identity defines an optional identity signature (ex. UPort or Keybase). */
  identity: string;
  /** website defines an optional website link. */
  website: string;
  /** security_contact defines an optional email for security contact. */
  securityContact: string;
  /** details define other optional details. */
  details: string;
}

/**
 * Validator defines a validator, together with the total amount of the
 * Validator's bond shares and their exchange rate to coins. Slashing results in
 * a decrease in the exchange rate, allowing correct calculation of future
 * undelegations without iterating over delegators. When coins are delegated to
 * this validator, the validator is credited with a delegation whose number of
 * bond shares is based on the amount of coins delegated divided by the current
 * exchange rate. Voting power can be calculated as total bonded shares
 * multiplied by exchange rate.
 */
export interface Validator {
  /** operator_address defines the address of the validator's operator; bech encoded in JSON. */
  operatorAddress: string;
  /** consensus_pubkey is the consensus public key of the validator, as a Protobuf Any. */
  consensusPubkey?: Any;
  /** jailed defined whether the validator has been jailed from bonded status or not. */
  jailed: boolean;
  /** status is the validator status (bonded/unbonding/unbonded). */
  status: BondStatus;
  /** tokens define the delegated tokens (incl. self-delegation). */
  tokens: string;
  /** delegator_shares defines total shares issued to a validator's delegators. */
  delegatorShares: string;
  /** description defines the description terms for the validator. */
  description?: Description;
  /** unbonding_height defines, if unbonding, the height at which this validator has begun unbonding. */
  unbondingHeight: Long;
  /** unbonding_time defines, if unbonding, the min time for the validator to complete unbonding. */
  unbondingTime?: Date;
  /** commission defines the commission parameters. */
  commission?: Commission;
  /**
   * min_self_delegation is the validator's self declared minimum self delegation.
   *
   * Since: cosmos-sdk 0.46
   */
  minSelfDelegation: string;
}

/** ValAddresses defines a repeated set of validator addresses. */
export interface ValAddresses {
  addresses: string[];
}

/**
 * DVPair is struct that just has a delegator-validator pair with no other data.
 * It is intended to be used as a marshalable pointer. For example, a DVPair can
 * be used to construct the key to getting an UnbondingDelegation from state.
 */
export interface DVPair {
  delegatorAddress: string;
  validatorAddress: string;
}

/** DVPairs defines an array of DVPair objects. */
export interface DVPairs {
  pairs: DVPair[];
}

/**
 * DVVTriplet is struct that just has a delegator-validator-validator triplet
 * with no other data. It is intended to be used as a marshalable pointer. For
 * example, a DVVTriplet can be used to construct the key to getting a
 * Redelegation from state.
 */
export interface DVVTriplet {
  delegatorAddress: string;
  validatorSrcAddress: string;
  validatorDstAddress: string;
}

/** DVVTriplets defines an array of DVVTriplet objects. */
export interface DVVTriplets {
  triplets: DVVTriplet[];
}

/**
 * Delegation represents the bond with tokens held by an account. It is
 * owned by one delegator, and is associated with the voting power of one
 * validator.
 */
export interface Delegation {
  /** delegator_address is the bech32-encoded address of the delegator. */
  delegatorAddress: string;
  /** validator_address is the bech32-encoded address of the validator. */
  validatorAddress: string;
  /** shares define the delegation shares received. */
  shares: string;
}

/**
 * UnbondingDelegation stores all of a single delegator's unbonding bonds
 * for a single validator in an time-ordered list.
 */
export interface UnbondingDelegation {
  /** delegator_address is the bech32-encoded address of the delegator. */
  delegatorAddress: string;
  /** validator_address is the bech32-encoded address of the validator. */
  validatorAddress: string;
  /** entries are the unbonding delegation entries. */
  entries: UnbondingDelegationEntry[];
}

/** UnbondingDelegationEntry defines an unbonding object with relevant metadata. */
export interface UnbondingDelegationEntry {
  /** creation_height is the height which the unbonding took place. */
  creationHeight: Long;
  /** completion_time is the unix time for unbonding completion. */
  completionTime?: Date;
  /** initial_balance defines the tokens initially scheduled to receive at completion. */
  initialBalance: string;
  /** balance defines the tokens to receive at completion. */
  balance: string;
}

/** RedelegationEntry defines a redelegation object with relevant metadata. */
export interface RedelegationEntry {
  /** creation_height  defines the height which the redelegation took place. */
  creationHeight: Long;
  /** completion_time defines the unix time for redelegation completion. */
  completionTime?: Date;
  /** initial_balance defines the initial balance when redelegation started. */
  initialBalance: string;
  /** shares_dst is the amount of destination-validator shares created by redelegation. */
  sharesDst: string;
}

/**
 * Redelegation contains the list of a particular delegator's redelegating bonds
 * from a particular source validator to a particular destination validator.
 */
export interface Redelegation {
  /** delegator_address is the bech32-encoded address of the delegator. */
  delegatorAddress: string;
  /** validator_src_address is the validator redelegation source operator address. */
  validatorSrcAddress: string;
  /** validator_dst_address is the validator redelegation destination operator address. */
  validatorDstAddress: string;
  /** entries are the redelegation entries. */
  entries: RedelegationEntry[];
}

/** Params defines the parameters for the staking module. */
export interface Params {
  /** unbonding_time is the time duration of unbonding. */
  unbondingTime?: Duration;
  /** max_validators is the maximum number of validators. */
  maxValidators: number;
  /** max_entries is the max entries for either unbonding delegation or redelegation (per pair/trio). */
  maxEntries: number;
  /** historical_entries is the number of historical entries to persist. */
  historicalEntries: number;
  /** bond_denom defines the bondable coin denomination. */
  bondDenom: string;
  /** min_commission_rate is the chain-wide minimum commission rate that a validator can charge their delegators */
  minCommissionRate: string;
}

/**
 * DelegationResponse is equivalent to Delegation except that it contains a
 * balance in addition to shares which is more suitable for client responses.
 */
export interface DelegationResponse {
  delegation?: Delegation;
  balance?: Coin;
}

/**
 * RedelegationEntryResponse is equivalent to a RedelegationEntry except that it
 * contains a balance in addition to shares which is more suitable for client
 * responses.
 */
export interface RedelegationEntryResponse {
  redelegationEntry?: RedelegationEntry;
  balance: string;
}

/**
 * RedelegationResponse is equivalent to a Redelegation except that its entries
 * contain a balance in addition to shares which is more suitable for client
 * responses.
 */
export interface RedelegationResponse {
  redelegation?: Redelegation;
  entries: RedelegationEntryResponse[];
}

/**
 * Pool is used for tracking bonded and not-bonded token supply of the bond
 * denomination.
 */
export interface Pool {
  notBondedTokens: string;
  bondedTokens: string;
}

const baseHistoricalInfo: object = {};

export const HistoricalInfo = {
  encode(
    message: HistoricalInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.header !== undefined) {
      Header.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.valset) {
      Validator.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HistoricalInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHistoricalInfo } as HistoricalInfo;
    message.valset = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.header = Header.decode(reader, reader.uint32());
          break;
        case 2:
          message.valset.push(Validator.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): HistoricalInfo {
    const message = { ...baseHistoricalInfo } as HistoricalInfo;
    message.header =
      object.header !== undefined && object.header !== null
        ? Header.fromJSON(object.header)
        : undefined;
    message.valset = (object.valset ?? []).map((e: any) =>
      Validator.fromJSON(e)
    );
    return message;
  },

  toJSON(message: HistoricalInfo): unknown {
    const obj: any = {};
    message.header !== undefined &&
      (obj.header = message.header ? Header.toJSON(message.header) : undefined);
    if (message.valset) {
      obj.valset = message.valset.map((e) =>
        e ? Validator.toJSON(e) : undefined
      );
    } else {
      obj.valset = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<HistoricalInfo>): HistoricalInfo {
    const message = { ...baseHistoricalInfo } as HistoricalInfo;
    message.header =
      object.header !== undefined && object.header !== null
        ? Header.fromPartial(object.header)
        : undefined;
    message.valset = (object.valset ?? []).map((e) => Validator.fromPartial(e));
    return message;
  },
};

const baseCommissionRates: object = {
  rate: "",
  maxRate: "",
  maxChangeRate: "",
};

export const CommissionRates = {
  encode(
    message: CommissionRates,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.rate !== "") {
      writer.uint32(10).string(message.rate);
    }
    if (message.maxRate !== "") {
      writer.uint32(18).string(message.maxRate);
    }
    if (message.maxChangeRate !== "") {
      writer.uint32(26).string(message.maxChangeRate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommissionRates {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCommissionRates } as CommissionRates;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rate = reader.string();
          break;
        case 2:
          message.maxRate = reader.string();
          break;
        case 3:
          message.maxChangeRate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CommissionRates {
    const message = { ...baseCommissionRates } as CommissionRates;
    message.rate =
      object.rate !== undefined && object.rate !== null
        ? String(object.rate)
        : "";
    message.maxRate =
      object.maxRate !== undefined && object.maxRate !== null
        ? String(object.maxRate)
        : "";
    message.maxChangeRate =
      object.maxChangeRate !== undefined && object.maxChangeRate !== null
        ? String(object.maxChangeRate)
        : "";
    return message;
  },

  toJSON(message: CommissionRates): unknown {
    const obj: any = {};
    message.rate !== undefined && (obj.rate = message.rate);
    message.maxRate !== undefined && (obj.maxRate = message.maxRate);
    message.maxChangeRate !== undefined &&
      (obj.maxChangeRate = message.maxChangeRate);
    return obj;
  },

  fromPartial(object: DeepPartial<CommissionRates>): CommissionRates {
    const message = { ...baseCommissionRates } as CommissionRates;
    message.rate = object.rate ?? "";
    message.maxRate = object.maxRate ?? "";
    message.maxChangeRate = object.maxChangeRate ?? "";
    return message;
  },
};

const baseCommission: object = {};

export const Commission = {
  encode(
    message: Commission,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.commissionRates !== undefined) {
      CommissionRates.encode(
        message.commissionRates,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.updateTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.updateTime),
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Commission {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCommission } as Commission;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commissionRates = CommissionRates.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.updateTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Commission {
    const message = { ...baseCommission } as Commission;
    message.commissionRates =
      object.commissionRates !== undefined && object.commissionRates !== null
        ? CommissionRates.fromJSON(object.commissionRates)
        : undefined;
    message.updateTime =
      object.updateTime !== undefined && object.updateTime !== null
        ? fromJsonTimestamp(object.updateTime)
        : undefined;
    return message;
  },

  toJSON(message: Commission): unknown {
    const obj: any = {};
    message.commissionRates !== undefined &&
      (obj.commissionRates = message.commissionRates
        ? CommissionRates.toJSON(message.commissionRates)
        : undefined);
    message.updateTime !== undefined &&
      (obj.updateTime = message.updateTime.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<Commission>): Commission {
    const message = { ...baseCommission } as Commission;
    message.commissionRates =
      object.commissionRates !== undefined && object.commissionRates !== null
        ? CommissionRates.fromPartial(object.commissionRates)
        : undefined;
    message.updateTime = object.updateTime ?? undefined;
    return message;
  },
};

const baseDescription: object = {
  moniker: "",
  identity: "",
  website: "",
  securityContact: "",
  details: "",
};

export const Description = {
  encode(
    message: Description,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.moniker !== "") {
      writer.uint32(10).string(message.moniker);
    }
    if (message.identity !== "") {
      writer.uint32(18).string(message.identity);
    }
    if (message.website !== "") {
      writer.uint32(26).string(message.website);
    }
    if (message.securityContact !== "") {
      writer.uint32(34).string(message.securityContact);
    }
    if (message.details !== "") {
      writer.uint32(42).string(message.details);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Description {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDescription } as Description;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.moniker = reader.string();
          break;
        case 2:
          message.identity = reader.string();
          break;
        case 3:
          message.website = reader.string();
          break;
        case 4:
          message.securityContact = reader.string();
          break;
        case 5:
          message.details = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Description {
    const message = { ...baseDescription } as Description;
    message.moniker =
      object.moniker !== undefined && object.moniker !== null
        ? String(object.moniker)
        : "";
    message.identity =
      object.identity !== undefined && object.identity !== null
        ? String(object.identity)
        : "";
    message.website =
      object.website !== undefined && object.website !== null
        ? String(object.website)
        : "";
    message.securityContact =
      object.securityContact !== undefined && object.securityContact !== null
        ? String(object.securityContact)
        : "";
    message.details =
      object.details !== undefined && object.details !== null
        ? String(object.details)
        : "";
    return message;
  },

  toJSON(message: Description): unknown {
    const obj: any = {};
    message.moniker !== undefined && (obj.moniker = message.moniker);
    message.identity !== undefined && (obj.identity = message.identity);
    message.website !== undefined && (obj.website = message.website);
    message.securityContact !== undefined &&
      (obj.securityContact = message.securityContact);
    message.details !== undefined && (obj.details = message.details);
    return obj;
  },

  fromPartial(object: DeepPartial<Description>): Description {
    const message = { ...baseDescription } as Description;
    message.moniker = object.moniker ?? "";
    message.identity = object.identity ?? "";
    message.website = object.website ?? "";
    message.securityContact = object.securityContact ?? "";
    message.details = object.details ?? "";
    return message;
  },
};

const baseValidator: object = {
  operatorAddress: "",
  jailed: false,
  status: 0,
  tokens: "",
  delegatorShares: "",
  unbondingHeight: Long.ZERO,
  minSelfDelegation: "",
};

export const Validator = {
  encode(
    message: Validator,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.operatorAddress !== "") {
      writer.uint32(10).string(message.operatorAddress);
    }
    if (message.consensusPubkey !== undefined) {
      Any.encode(message.consensusPubkey, writer.uint32(18).fork()).ldelim();
    }
    if (message.jailed === true) {
      writer.uint32(24).bool(message.jailed);
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    if (message.tokens !== "") {
      writer.uint32(42).string(message.tokens);
    }
    if (message.delegatorShares !== "") {
      writer.uint32(50).string(message.delegatorShares);
    }
    if (message.description !== undefined) {
      Description.encode(
        message.description,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (!message.unbondingHeight.isZero()) {
      writer.uint32(64).int64(message.unbondingHeight);
    }
    if (message.unbondingTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.unbondingTime),
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.commission !== undefined) {
      Commission.encode(message.commission, writer.uint32(82).fork()).ldelim();
    }
    if (message.minSelfDelegation !== "") {
      writer.uint32(90).string(message.minSelfDelegation);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Validator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseValidator } as Validator;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operatorAddress = reader.string();
          break;
        case 2:
          message.consensusPubkey = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.jailed = reader.bool();
          break;
        case 4:
          message.status = reader.int32() as any;
          break;
        case 5:
          message.tokens = reader.string();
          break;
        case 6:
          message.delegatorShares = reader.string();
          break;
        case 7:
          message.description = Description.decode(reader, reader.uint32());
          break;
        case 8:
          message.unbondingHeight = reader.int64() as Long;
          break;
        case 9:
          message.unbondingTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 10:
          message.commission = Commission.decode(reader, reader.uint32());
          break;
        case 11:
          message.minSelfDelegation = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Validator {
    const message = { ...baseValidator } as Validator;
    message.operatorAddress =
      object.operatorAddress !== undefined && object.operatorAddress !== null
        ? String(object.operatorAddress)
        : "";
    message.consensusPubkey =
      object.consensusPubkey !== undefined && object.consensusPubkey !== null
        ? Any.fromJSON(object.consensusPubkey)
        : undefined;
    message.jailed =
      object.jailed !== undefined && object.jailed !== null
        ? Boolean(object.jailed)
        : false;
    message.status =
      object.status !== undefined && object.status !== null
        ? bondStatusFromJSON(object.status)
        : 0;
    message.tokens =
      object.tokens !== undefined && object.tokens !== null
        ? String(object.tokens)
        : "";
    message.delegatorShares =
      object.delegatorShares !== undefined && object.delegatorShares !== null
        ? String(object.delegatorShares)
        : "";
    message.description =
      object.description !== undefined && object.description !== null
        ? Description.fromJSON(object.description)
        : undefined;
    message.unbondingHeight =
      object.unbondingHeight !== undefined && object.unbondingHeight !== null
        ? Long.fromString(object.unbondingHeight)
        : Long.ZERO;
    message.unbondingTime =
      object.unbondingTime !== undefined && object.unbondingTime !== null
        ? fromJsonTimestamp(object.unbondingTime)
        : undefined;
    message.commission =
      object.commission !== undefined && object.commission !== null
        ? Commission.fromJSON(object.commission)
        : undefined;
    message.minSelfDelegation =
      object.minSelfDelegation !== undefined &&
      object.minSelfDelegation !== null
        ? String(object.minSelfDelegation)
        : "";
    return message;
  },

  toJSON(message: Validator): unknown {
    const obj: any = {};
    message.operatorAddress !== undefined &&
      (obj.operatorAddress = message.operatorAddress);
    message.consensusPubkey !== undefined &&
      (obj.consensusPubkey = message.consensusPubkey
        ? Any.toJSON(message.consensusPubkey)
        : undefined);
    message.jailed !== undefined && (obj.jailed = message.jailed);
    message.status !== undefined &&
      (obj.status = bondStatusToJSON(message.status));
    message.tokens !== undefined && (obj.tokens = message.tokens);
    message.delegatorShares !== undefined &&
      (obj.delegatorShares = message.delegatorShares);
    message.description !== undefined &&
      (obj.description = message.description
        ? Description.toJSON(message.description)
        : undefined);
    message.unbondingHeight !== undefined &&
      (obj.unbondingHeight = (message.unbondingHeight || Long.ZERO).toString());
    message.unbondingTime !== undefined &&
      (obj.unbondingTime = message.unbondingTime.toISOString());
    message.commission !== undefined &&
      (obj.commission = message.commission
        ? Commission.toJSON(message.commission)
        : undefined);
    message.minSelfDelegation !== undefined &&
      (obj.minSelfDelegation = message.minSelfDelegation);
    return obj;
  },

  fromPartial(object: DeepPartial<Validator>): Validator {
    const message = { ...baseValidator } as Validator;
    message.operatorAddress = object.operatorAddress ?? "";
    message.consensusPubkey =
      object.consensusPubkey !== undefined && object.consensusPubkey !== null
        ? Any.fromPartial(object.consensusPubkey)
        : undefined;
    message.jailed = object.jailed ?? false;
    message.status = object.status ?? 0;
    message.tokens = object.tokens ?? "";
    message.delegatorShares = object.delegatorShares ?? "";
    message.description =
      object.description !== undefined && object.description !== null
        ? Description.fromPartial(object.description)
        : undefined;
    message.unbondingHeight =
      object.unbondingHeight !== undefined && object.unbondingHeight !== null
        ? Long.fromValue(object.unbondingHeight)
        : Long.ZERO;
    message.unbondingTime = object.unbondingTime ?? undefined;
    message.commission =
      object.commission !== undefined && object.commission !== null
        ? Commission.fromPartial(object.commission)
        : undefined;
    message.minSelfDelegation = object.minSelfDelegation ?? "";
    return message;
  },
};

const baseValAddresses: object = { addresses: "" };

export const ValAddresses = {
  encode(
    message: ValAddresses,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.addresses) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValAddresses {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseValAddresses } as ValAddresses;
    message.addresses = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ValAddresses {
    const message = { ...baseValAddresses } as ValAddresses;
    message.addresses = (object.addresses ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: ValAddresses): unknown {
    const obj: any = {};
    if (message.addresses) {
      obj.addresses = message.addresses.map((e) => e);
    } else {
      obj.addresses = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ValAddresses>): ValAddresses {
    const message = { ...baseValAddresses } as ValAddresses;
    message.addresses = (object.addresses ?? []).map((e) => e);
    return message;
  },
};

const baseDVPair: object = { delegatorAddress: "", validatorAddress: "" };

export const DVPair = {
  encode(
    message: DVPair,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DVPair {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDVPair } as DVPair;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DVPair {
    const message = { ...baseDVPair } as DVPair;
    message.delegatorAddress =
      object.delegatorAddress !== undefined && object.delegatorAddress !== null
        ? String(object.delegatorAddress)
        : "";
    message.validatorAddress =
      object.validatorAddress !== undefined && object.validatorAddress !== null
        ? String(object.validatorAddress)
        : "";
    return message;
  },

  toJSON(message: DVPair): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined &&
      (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined &&
      (obj.validatorAddress = message.validatorAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<DVPair>): DVPair {
    const message = { ...baseDVPair } as DVPair;
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
};

const baseDVPairs: object = {};

export const DVPairs = {
  encode(
    message: DVPairs,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.pairs) {
      DVPair.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DVPairs {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDVPairs } as DVPairs;
    message.pairs = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairs.push(DVPair.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DVPairs {
    const message = { ...baseDVPairs } as DVPairs;
    message.pairs = (object.pairs ?? []).map((e: any) => DVPair.fromJSON(e));
    return message;
  },

  toJSON(message: DVPairs): unknown {
    const obj: any = {};
    if (message.pairs) {
      obj.pairs = message.pairs.map((e) => (e ? DVPair.toJSON(e) : undefined));
    } else {
      obj.pairs = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<DVPairs>): DVPairs {
    const message = { ...baseDVPairs } as DVPairs;
    message.pairs = (object.pairs ?? []).map((e) => DVPair.fromPartial(e));
    return message;
  },
};

const baseDVVTriplet: object = {
  delegatorAddress: "",
  validatorSrcAddress: "",
  validatorDstAddress: "",
};

export const DVVTriplet = {
  encode(
    message: DVVTriplet,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorSrcAddress !== "") {
      writer.uint32(18).string(message.validatorSrcAddress);
    }
    if (message.validatorDstAddress !== "") {
      writer.uint32(26).string(message.validatorDstAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DVVTriplet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDVVTriplet } as DVVTriplet;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorSrcAddress = reader.string();
          break;
        case 3:
          message.validatorDstAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DVVTriplet {
    const message = { ...baseDVVTriplet } as DVVTriplet;
    message.delegatorAddress =
      object.delegatorAddress !== undefined && object.delegatorAddress !== null
        ? String(object.delegatorAddress)
        : "";
    message.validatorSrcAddress =
      object.validatorSrcAddress !== undefined &&
      object.validatorSrcAddress !== null
        ? String(object.validatorSrcAddress)
        : "";
    message.validatorDstAddress =
      object.validatorDstAddress !== undefined &&
      object.validatorDstAddress !== null
        ? String(object.validatorDstAddress)
        : "";
    return message;
  },

  toJSON(message: DVVTriplet): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined &&
      (obj.delegatorAddress = message.delegatorAddress);
    message.validatorSrcAddress !== undefined &&
      (obj.validatorSrcAddress = message.validatorSrcAddress);
    message.validatorDstAddress !== undefined &&
      (obj.validatorDstAddress = message.validatorDstAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<DVVTriplet>): DVVTriplet {
    const message = { ...baseDVVTriplet } as DVVTriplet;
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorSrcAddress = object.validatorSrcAddress ?? "";
    message.validatorDstAddress = object.validatorDstAddress ?? "";
    return message;
  },
};

const baseDVVTriplets: object = {};

export const DVVTriplets = {
  encode(
    message: DVVTriplets,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.triplets) {
      DVVTriplet.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DVVTriplets {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDVVTriplets } as DVVTriplets;
    message.triplets = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.triplets.push(DVVTriplet.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DVVTriplets {
    const message = { ...baseDVVTriplets } as DVVTriplets;
    message.triplets = (object.triplets ?? []).map((e: any) =>
      DVVTriplet.fromJSON(e)
    );
    return message;
  },

  toJSON(message: DVVTriplets): unknown {
    const obj: any = {};
    if (message.triplets) {
      obj.triplets = message.triplets.map((e) =>
        e ? DVVTriplet.toJSON(e) : undefined
      );
    } else {
      obj.triplets = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<DVVTriplets>): DVVTriplets {
    const message = { ...baseDVVTriplets } as DVVTriplets;
    message.triplets = (object.triplets ?? []).map((e) =>
      DVVTriplet.fromPartial(e)
    );
    return message;
  },
};

const baseDelegation: object = {
  delegatorAddress: "",
  validatorAddress: "",
  shares: "",
};

export const Delegation = {
  encode(
    message: Delegation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.shares !== "") {
      writer.uint32(26).string(message.shares);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Delegation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDelegation } as Delegation;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.shares = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Delegation {
    const message = { ...baseDelegation } as Delegation;
    message.delegatorAddress =
      object.delegatorAddress !== undefined && object.delegatorAddress !== null
        ? String(object.delegatorAddress)
        : "";
    message.validatorAddress =
      object.validatorAddress !== undefined && object.validatorAddress !== null
        ? String(object.validatorAddress)
        : "";
    message.shares =
      object.shares !== undefined && object.shares !== null
        ? String(object.shares)
        : "";
    return message;
  },

  toJSON(message: Delegation): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined &&
      (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined &&
      (obj.validatorAddress = message.validatorAddress);
    message.shares !== undefined && (obj.shares = message.shares);
    return obj;
  },

  fromPartial(object: DeepPartial<Delegation>): Delegation {
    const message = { ...baseDelegation } as Delegation;
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.shares = object.shares ?? "";
    return message;
  },
};

const baseUnbondingDelegation: object = {
  delegatorAddress: "",
  validatorAddress: "",
};

export const UnbondingDelegation = {
  encode(
    message: UnbondingDelegation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    for (const v of message.entries) {
      UnbondingDelegationEntry.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnbondingDelegation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUnbondingDelegation } as UnbondingDelegation;
    message.entries = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.entries.push(
            UnbondingDelegationEntry.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UnbondingDelegation {
    const message = { ...baseUnbondingDelegation } as UnbondingDelegation;
    message.delegatorAddress =
      object.delegatorAddress !== undefined && object.delegatorAddress !== null
        ? String(object.delegatorAddress)
        : "";
    message.validatorAddress =
      object.validatorAddress !== undefined && object.validatorAddress !== null
        ? String(object.validatorAddress)
        : "";
    message.entries = (object.entries ?? []).map((e: any) =>
      UnbondingDelegationEntry.fromJSON(e)
    );
    return message;
  },

  toJSON(message: UnbondingDelegation): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined &&
      (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined &&
      (obj.validatorAddress = message.validatorAddress);
    if (message.entries) {
      obj.entries = message.entries.map((e) =>
        e ? UnbondingDelegationEntry.toJSON(e) : undefined
      );
    } else {
      obj.entries = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<UnbondingDelegation>): UnbondingDelegation {
    const message = { ...baseUnbondingDelegation } as UnbondingDelegation;
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.entries = (object.entries ?? []).map((e) =>
      UnbondingDelegationEntry.fromPartial(e)
    );
    return message;
  },
};

const baseUnbondingDelegationEntry: object = {
  creationHeight: Long.ZERO,
  initialBalance: "",
  balance: "",
};

export const UnbondingDelegationEntry = {
  encode(
    message: UnbondingDelegationEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.creationHeight.isZero()) {
      writer.uint32(8).int64(message.creationHeight);
    }
    if (message.completionTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.completionTime),
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.initialBalance !== "") {
      writer.uint32(26).string(message.initialBalance);
    }
    if (message.balance !== "") {
      writer.uint32(34).string(message.balance);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UnbondingDelegationEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUnbondingDelegationEntry,
    } as UnbondingDelegationEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creationHeight = reader.int64() as Long;
          break;
        case 2:
          message.completionTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.initialBalance = reader.string();
          break;
        case 4:
          message.balance = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UnbondingDelegationEntry {
    const message = {
      ...baseUnbondingDelegationEntry,
    } as UnbondingDelegationEntry;
    message.creationHeight =
      object.creationHeight !== undefined && object.creationHeight !== null
        ? Long.fromString(object.creationHeight)
        : Long.ZERO;
    message.completionTime =
      object.completionTime !== undefined && object.completionTime !== null
        ? fromJsonTimestamp(object.completionTime)
        : undefined;
    message.initialBalance =
      object.initialBalance !== undefined && object.initialBalance !== null
        ? String(object.initialBalance)
        : "";
    message.balance =
      object.balance !== undefined && object.balance !== null
        ? String(object.balance)
        : "";
    return message;
  },

  toJSON(message: UnbondingDelegationEntry): unknown {
    const obj: any = {};
    message.creationHeight !== undefined &&
      (obj.creationHeight = (message.creationHeight || Long.ZERO).toString());
    message.completionTime !== undefined &&
      (obj.completionTime = message.completionTime.toISOString());
    message.initialBalance !== undefined &&
      (obj.initialBalance = message.initialBalance);
    message.balance !== undefined && (obj.balance = message.balance);
    return obj;
  },

  fromPartial(
    object: DeepPartial<UnbondingDelegationEntry>
  ): UnbondingDelegationEntry {
    const message = {
      ...baseUnbondingDelegationEntry,
    } as UnbondingDelegationEntry;
    message.creationHeight =
      object.creationHeight !== undefined && object.creationHeight !== null
        ? Long.fromValue(object.creationHeight)
        : Long.ZERO;
    message.completionTime = object.completionTime ?? undefined;
    message.initialBalance = object.initialBalance ?? "";
    message.balance = object.balance ?? "";
    return message;
  },
};

const baseRedelegationEntry: object = {
  creationHeight: Long.ZERO,
  initialBalance: "",
  sharesDst: "",
};

export const RedelegationEntry = {
  encode(
    message: RedelegationEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.creationHeight.isZero()) {
      writer.uint32(8).int64(message.creationHeight);
    }
    if (message.completionTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.completionTime),
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.initialBalance !== "") {
      writer.uint32(26).string(message.initialBalance);
    }
    if (message.sharesDst !== "") {
      writer.uint32(34).string(message.sharesDst);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RedelegationEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRedelegationEntry } as RedelegationEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creationHeight = reader.int64() as Long;
          break;
        case 2:
          message.completionTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.initialBalance = reader.string();
          break;
        case 4:
          message.sharesDst = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RedelegationEntry {
    const message = { ...baseRedelegationEntry } as RedelegationEntry;
    message.creationHeight =
      object.creationHeight !== undefined && object.creationHeight !== null
        ? Long.fromString(object.creationHeight)
        : Long.ZERO;
    message.completionTime =
      object.completionTime !== undefined && object.completionTime !== null
        ? fromJsonTimestamp(object.completionTime)
        : undefined;
    message.initialBalance =
      object.initialBalance !== undefined && object.initialBalance !== null
        ? String(object.initialBalance)
        : "";
    message.sharesDst =
      object.sharesDst !== undefined && object.sharesDst !== null
        ? String(object.sharesDst)
        : "";
    return message;
  },

  toJSON(message: RedelegationEntry): unknown {
    const obj: any = {};
    message.creationHeight !== undefined &&
      (obj.creationHeight = (message.creationHeight || Long.ZERO).toString());
    message.completionTime !== undefined &&
      (obj.completionTime = message.completionTime.toISOString());
    message.initialBalance !== undefined &&
      (obj.initialBalance = message.initialBalance);
    message.sharesDst !== undefined && (obj.sharesDst = message.sharesDst);
    return obj;
  },

  fromPartial(object: DeepPartial<RedelegationEntry>): RedelegationEntry {
    const message = { ...baseRedelegationEntry } as RedelegationEntry;
    message.creationHeight =
      object.creationHeight !== undefined && object.creationHeight !== null
        ? Long.fromValue(object.creationHeight)
        : Long.ZERO;
    message.completionTime = object.completionTime ?? undefined;
    message.initialBalance = object.initialBalance ?? "";
    message.sharesDst = object.sharesDst ?? "";
    return message;
  },
};

const baseRedelegation: object = {
  delegatorAddress: "",
  validatorSrcAddress: "",
  validatorDstAddress: "",
};

export const Redelegation = {
  encode(
    message: Redelegation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorSrcAddress !== "") {
      writer.uint32(18).string(message.validatorSrcAddress);
    }
    if (message.validatorDstAddress !== "") {
      writer.uint32(26).string(message.validatorDstAddress);
    }
    for (const v of message.entries) {
      RedelegationEntry.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Redelegation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRedelegation } as Redelegation;
    message.entries = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorSrcAddress = reader.string();
          break;
        case 3:
          message.validatorDstAddress = reader.string();
          break;
        case 4:
          message.entries.push(
            RedelegationEntry.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Redelegation {
    const message = { ...baseRedelegation } as Redelegation;
    message.delegatorAddress =
      object.delegatorAddress !== undefined && object.delegatorAddress !== null
        ? String(object.delegatorAddress)
        : "";
    message.validatorSrcAddress =
      object.validatorSrcAddress !== undefined &&
      object.validatorSrcAddress !== null
        ? String(object.validatorSrcAddress)
        : "";
    message.validatorDstAddress =
      object.validatorDstAddress !== undefined &&
      object.validatorDstAddress !== null
        ? String(object.validatorDstAddress)
        : "";
    message.entries = (object.entries ?? []).map((e: any) =>
      RedelegationEntry.fromJSON(e)
    );
    return message;
  },

  toJSON(message: Redelegation): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined &&
      (obj.delegatorAddress = message.delegatorAddress);
    message.validatorSrcAddress !== undefined &&
      (obj.validatorSrcAddress = message.validatorSrcAddress);
    message.validatorDstAddress !== undefined &&
      (obj.validatorDstAddress = message.validatorDstAddress);
    if (message.entries) {
      obj.entries = message.entries.map((e) =>
        e ? RedelegationEntry.toJSON(e) : undefined
      );
    } else {
      obj.entries = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Redelegation>): Redelegation {
    const message = { ...baseRedelegation } as Redelegation;
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorSrcAddress = object.validatorSrcAddress ?? "";
    message.validatorDstAddress = object.validatorDstAddress ?? "";
    message.entries = (object.entries ?? []).map((e) =>
      RedelegationEntry.fromPartial(e)
    );
    return message;
  },
};

const baseParams: object = {
  maxValidators: 0,
  maxEntries: 0,
  historicalEntries: 0,
  bondDenom: "",
  minCommissionRate: "",
};

export const Params = {
  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.unbondingTime !== undefined) {
      Duration.encode(message.unbondingTime, writer.uint32(10).fork()).ldelim();
    }
    if (message.maxValidators !== 0) {
      writer.uint32(16).uint32(message.maxValidators);
    }
    if (message.maxEntries !== 0) {
      writer.uint32(24).uint32(message.maxEntries);
    }
    if (message.historicalEntries !== 0) {
      writer.uint32(32).uint32(message.historicalEntries);
    }
    if (message.bondDenom !== "") {
      writer.uint32(42).string(message.bondDenom);
    }
    if (message.minCommissionRate !== "") {
      writer.uint32(50).string(message.minCommissionRate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParams } as Params;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbondingTime = Duration.decode(reader, reader.uint32());
          break;
        case 2:
          message.maxValidators = reader.uint32();
          break;
        case 3:
          message.maxEntries = reader.uint32();
          break;
        case 4:
          message.historicalEntries = reader.uint32();
          break;
        case 5:
          message.bondDenom = reader.string();
          break;
        case 6:
          message.minCommissionRate = reader.string();
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
    message.unbondingTime =
      object.unbondingTime !== undefined && object.unbondingTime !== null
        ? Duration.fromJSON(object.unbondingTime)
        : undefined;
    message.maxValidators =
      object.maxValidators !== undefined && object.maxValidators !== null
        ? Number(object.maxValidators)
        : 0;
    message.maxEntries =
      object.maxEntries !== undefined && object.maxEntries !== null
        ? Number(object.maxEntries)
        : 0;
    message.historicalEntries =
      object.historicalEntries !== undefined &&
      object.historicalEntries !== null
        ? Number(object.historicalEntries)
        : 0;
    message.bondDenom =
      object.bondDenom !== undefined && object.bondDenom !== null
        ? String(object.bondDenom)
        : "";
    message.minCommissionRate =
      object.minCommissionRate !== undefined &&
      object.minCommissionRate !== null
        ? String(object.minCommissionRate)
        : "";
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.unbondingTime !== undefined &&
      (obj.unbondingTime = message.unbondingTime
        ? Duration.toJSON(message.unbondingTime)
        : undefined);
    message.maxValidators !== undefined &&
      (obj.maxValidators = message.maxValidators);
    message.maxEntries !== undefined && (obj.maxEntries = message.maxEntries);
    message.historicalEntries !== undefined &&
      (obj.historicalEntries = message.historicalEntries);
    message.bondDenom !== undefined && (obj.bondDenom = message.bondDenom);
    message.minCommissionRate !== undefined &&
      (obj.minCommissionRate = message.minCommissionRate);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    message.unbondingTime =
      object.unbondingTime !== undefined && object.unbondingTime !== null
        ? Duration.fromPartial(object.unbondingTime)
        : undefined;
    message.maxValidators = object.maxValidators ?? 0;
    message.maxEntries = object.maxEntries ?? 0;
    message.historicalEntries = object.historicalEntries ?? 0;
    message.bondDenom = object.bondDenom ?? "";
    message.minCommissionRate = object.minCommissionRate ?? "";
    return message;
  },
};

const baseDelegationResponse: object = {};

export const DelegationResponse = {
  encode(
    message: DelegationResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.delegation !== undefined) {
      Delegation.encode(message.delegation, writer.uint32(10).fork()).ldelim();
    }
    if (message.balance !== undefined) {
      Coin.encode(message.balance, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DelegationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDelegationResponse } as DelegationResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegation = Delegation.decode(reader, reader.uint32());
          break;
        case 2:
          message.balance = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DelegationResponse {
    const message = { ...baseDelegationResponse } as DelegationResponse;
    message.delegation =
      object.delegation !== undefined && object.delegation !== null
        ? Delegation.fromJSON(object.delegation)
        : undefined;
    message.balance =
      object.balance !== undefined && object.balance !== null
        ? Coin.fromJSON(object.balance)
        : undefined;
    return message;
  },

  toJSON(message: DelegationResponse): unknown {
    const obj: any = {};
    message.delegation !== undefined &&
      (obj.delegation = message.delegation
        ? Delegation.toJSON(message.delegation)
        : undefined);
    message.balance !== undefined &&
      (obj.balance = message.balance
        ? Coin.toJSON(message.balance)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<DelegationResponse>): DelegationResponse {
    const message = { ...baseDelegationResponse } as DelegationResponse;
    message.delegation =
      object.delegation !== undefined && object.delegation !== null
        ? Delegation.fromPartial(object.delegation)
        : undefined;
    message.balance =
      object.balance !== undefined && object.balance !== null
        ? Coin.fromPartial(object.balance)
        : undefined;
    return message;
  },
};

const baseRedelegationEntryResponse: object = { balance: "" };

export const RedelegationEntryResponse = {
  encode(
    message: RedelegationEntryResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.redelegationEntry !== undefined) {
      RedelegationEntry.encode(
        message.redelegationEntry,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.balance !== "") {
      writer.uint32(34).string(message.balance);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RedelegationEntryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRedelegationEntryResponse,
    } as RedelegationEntryResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.redelegationEntry = RedelegationEntry.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.balance = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RedelegationEntryResponse {
    const message = {
      ...baseRedelegationEntryResponse,
    } as RedelegationEntryResponse;
    message.redelegationEntry =
      object.redelegationEntry !== undefined &&
      object.redelegationEntry !== null
        ? RedelegationEntry.fromJSON(object.redelegationEntry)
        : undefined;
    message.balance =
      object.balance !== undefined && object.balance !== null
        ? String(object.balance)
        : "";
    return message;
  },

  toJSON(message: RedelegationEntryResponse): unknown {
    const obj: any = {};
    message.redelegationEntry !== undefined &&
      (obj.redelegationEntry = message.redelegationEntry
        ? RedelegationEntry.toJSON(message.redelegationEntry)
        : undefined);
    message.balance !== undefined && (obj.balance = message.balance);
    return obj;
  },

  fromPartial(
    object: DeepPartial<RedelegationEntryResponse>
  ): RedelegationEntryResponse {
    const message = {
      ...baseRedelegationEntryResponse,
    } as RedelegationEntryResponse;
    message.redelegationEntry =
      object.redelegationEntry !== undefined &&
      object.redelegationEntry !== null
        ? RedelegationEntry.fromPartial(object.redelegationEntry)
        : undefined;
    message.balance = object.balance ?? "";
    return message;
  },
};

const baseRedelegationResponse: object = {};

export const RedelegationResponse = {
  encode(
    message: RedelegationResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.redelegation !== undefined) {
      Redelegation.encode(
        message.redelegation,
        writer.uint32(10).fork()
      ).ldelim();
    }
    for (const v of message.entries) {
      RedelegationEntryResponse.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RedelegationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRedelegationResponse } as RedelegationResponse;
    message.entries = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.redelegation = Redelegation.decode(reader, reader.uint32());
          break;
        case 2:
          message.entries.push(
            RedelegationEntryResponse.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RedelegationResponse {
    const message = { ...baseRedelegationResponse } as RedelegationResponse;
    message.redelegation =
      object.redelegation !== undefined && object.redelegation !== null
        ? Redelegation.fromJSON(object.redelegation)
        : undefined;
    message.entries = (object.entries ?? []).map((e: any) =>
      RedelegationEntryResponse.fromJSON(e)
    );
    return message;
  },

  toJSON(message: RedelegationResponse): unknown {
    const obj: any = {};
    message.redelegation !== undefined &&
      (obj.redelegation = message.redelegation
        ? Redelegation.toJSON(message.redelegation)
        : undefined);
    if (message.entries) {
      obj.entries = message.entries.map((e) =>
        e ? RedelegationEntryResponse.toJSON(e) : undefined
      );
    } else {
      obj.entries = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<RedelegationResponse>): RedelegationResponse {
    const message = { ...baseRedelegationResponse } as RedelegationResponse;
    message.redelegation =
      object.redelegation !== undefined && object.redelegation !== null
        ? Redelegation.fromPartial(object.redelegation)
        : undefined;
    message.entries = (object.entries ?? []).map((e) =>
      RedelegationEntryResponse.fromPartial(e)
    );
    return message;
  },
};

const basePool: object = { notBondedTokens: "", bondedTokens: "" };

export const Pool = {
  encode(message: Pool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.notBondedTokens !== "") {
      writer.uint32(10).string(message.notBondedTokens);
    }
    if (message.bondedTokens !== "") {
      writer.uint32(18).string(message.bondedTokens);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Pool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePool } as Pool;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.notBondedTokens = reader.string();
          break;
        case 2:
          message.bondedTokens = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Pool {
    const message = { ...basePool } as Pool;
    message.notBondedTokens =
      object.notBondedTokens !== undefined && object.notBondedTokens !== null
        ? String(object.notBondedTokens)
        : "";
    message.bondedTokens =
      object.bondedTokens !== undefined && object.bondedTokens !== null
        ? String(object.bondedTokens)
        : "";
    return message;
  },

  toJSON(message: Pool): unknown {
    const obj: any = {};
    message.notBondedTokens !== undefined &&
      (obj.notBondedTokens = message.notBondedTokens);
    message.bondedTokens !== undefined &&
      (obj.bondedTokens = message.bondedTokens);
    return obj;
  },

  fromPartial(object: DeepPartial<Pool>): Pool {
    const message = { ...basePool } as Pool;
    message.notBondedTokens = object.notBondedTokens ?? "";
    message.bondedTokens = object.bondedTokens ?? "";
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

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds.toNumber() * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
