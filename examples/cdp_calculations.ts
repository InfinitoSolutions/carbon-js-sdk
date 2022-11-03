import BigNumber from "bignumber.js";
import * as BIP39 from "bip39";
// @ts-ignore
import { CarbonSDK } from "./_sdk";
// @ts-ignore
import "./_setup";

(async () => {
  const mnemonics = process.env.MNEMONICS ?? BIP39.generateMnemonic();
  console.log("mnemonics", mnemonics);

  const sdk = await CarbonSDK.instance({
    network: CarbonSDK.Network.LocalHost,
    config: {
      tmRpcUrl: process.env.TRPC_ENDPOINT,
    },
  });

  const account = "tswth1mkzq49f6axtuyq4qxsalujfujl8sglznqx9zmg"

  const connectedSDK = await sdk.connectWithMnemonic(mnemonics);
  console.log("connected sdk");

  const accData = await sdk.cdp.getAccountData(account)
  console.log("\ngetAccountData", JSON.stringify(accData));

  const debt = await sdk.query.cdp.AccountDebt({ address: "tswth17ktnyhxuxe4s9a2u55gnt5qyalhksws7thnswq", denom: "eth"})
  console.log("\nAccountDebt", JSON.stringify(debt))

  const assetParamsAll = await sdk.query.cdp.AssetAll({})
  console.log("\nAssetAll", JSON.stringify(assetParamsAll))

  const tokenDebts = await sdk.query.cdp.TokenDebtAll({})
  console.log("\nTokenDebtsAll", JSON.stringify(tokenDebts))

  const tokenDebt = await sdk.cdp.getTotalAccountTokenDebt("tswth188xswz2hyu3shtypxfaz7zz97zuevk9k2cxtp9", "eth")
  console.log("\ngetTotalAccountTokenDebt", JSON.stringify(tokenDebt))

  const tokenDebtUSD = await sdk.cdp.getTotalAccountTokenDebtUsdVal("tswth188xswz2hyu3shtypxfaz7zz97zuevk9k2cxtp9", "eth")
  console.log("\ngetTotalAccountTokenDebtUsdVal", JSON.stringify(tokenDebtUSD))

  const cim = await sdk.cdp.recalculateCIM("eth")
  console.log("\nrecalculateCIM", cim.toNumber())

  const stablecoinDebt = await sdk.query.cdp.StablecoinDebt({})
  console.log("\nStablecoinDebt", JSON.stringify(stablecoinDebt))

  const accountStablecoin = await sdk.query.cdp.AccountStablecoin({address: account})
  console.log("\nAccountStablecoin", JSON.stringify(accountStablecoin))

  const ratio = await sdk.cdp.getCdpToActualRatio("cdp/eth")
  console.log("\ngetCdpToActualRatio", JSON.stringify(ratio))

  const amt = new BigNumber("1000000")
  const cdpTokenValue = await sdk.cdp.getCdpTokenUsdVal("cdp/usdc", amt)
  console.log("\ngetCdpTokenUsdVal", cdpTokenValue?.toNumber())

  const totalCollateral = await sdk.cdp.getModuleTotalCollateralUsdVal()
  console.log("\ngetModuleTotalCollateralUsdVal", totalCollateral?.toNumber())

  const totalDebt = await sdk.cdp.getModuleTotalDebtUsdVal()
  console.log("\ngetModuleTotalDebtUsdVal", totalDebt?.toNumber())

  const maxCollateralsForUnlock = await sdk.cdp.getMaxCollateralForUnlock(account, "cdp/eth")
  console.log("\ngetMaxCollateralForUnlock", maxCollateralsForUnlock?.toNumber())

  const cdpTokenPrice = await sdk.cdp.getCdpTokenPrice("cdp/eth")
  console.log("\ngetCdpTokenPrice", cdpTokenPrice?.toNumber())



})().catch(console.error).finally(() => process.exit(0));
