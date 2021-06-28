import { MsgSetMargin } from "@carbon-sdk/codec/position/tx";
import { CarbonTx } from "@carbon-sdk/util/tx";
import { BigNumber } from "bignumber.js";
import BaseModule from "./base";

export class PositionModule extends BaseModule {

  public async editMargin(params: PositionModule.SetMarginParams) {
    const wallet = this.getWallet();

    const value = MsgSetMargin.fromPartial({
      creator: wallet.bech32Address,
      market: params.market,
      margin: params.margin.shiftedBy(18).toString(10),
    })

    return await wallet.sendTx({
      typeUrl: CarbonTx.Types.MsgSetMargin,
      value,
    });
  }

  public async editMargins(params: PositionModule.SetMarginParams[]) {
    const wallet = this.getWallet();

    const msgs = params.map(param => {
        const value = MsgSetMargin.fromPartial({
            creator: wallet.bech32Address,
            market: param.market,
            margin: param.margin.shiftedBy(18).toString(10),
          })

      return {
        typeUrl: CarbonTx.Types.MsgSetMargin,
        value,
      }
    })

    return await wallet.sendTxs(msgs, CarbonTx.DEFAULT_SIGN_OPTS);
  }
}

export namespace PositionModule {
  export interface SetMarginParams {
    market: string
    margin: BigNumber
  }
};