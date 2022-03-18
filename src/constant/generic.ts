import { StdFee } from "@cosmjs/amino";
import { coins } from "@cosmjs/proto-signing";
import BigNumber from "bignumber.js";

// 0.0000001 SWTH
// 10 SWTH sats
export const DEFAULT_GAS_PRICE = new BigNumber("769.23077");
export const DEFAULT_GAS = new BigNumber("130000");

export const DEFAULT_FEE: StdFee = {
  amount: coins(DEFAULT_GAS_PRICE.times(DEFAULT_GAS).dp(0).toNumber(), "swth"),
  gas: DEFAULT_GAS.toString(10),
};
