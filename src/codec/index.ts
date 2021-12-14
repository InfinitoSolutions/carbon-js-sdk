// GENERATED by scripts/generate-registry.sh
import { Registry } from "@cosmjs/proto-signing";
import { MsgSetTradingFlag, MsgSetTradingFlagResponse, MsgCreateOrder, MsgCreateOrderResponse, MsgEditOrder, MsgEditOrderResponse, MsgCancelOrder, MsgCancelOrderResponse, MsgCancelAll, MsgCancelAllResponse } from "./order/tx";
import { MsgAddCollateral, MsgAddCollateralResponse, MsgRemoveCollateral, MsgRemoveCollateralResponse, MsgAddDebt, MsgAddDebtResponse, MsgRemoveDebt, MsgRemoveDebtResponse, MsgCreateVaultType, MsgCreateVaultTypeResponse } from "./cdp/tx";
import { MsgInitiateLiquidation, MsgInitiateLiquidationResponse } from "./broker/tx";
import { MsgSetFee, MsgSetFeeResponse } from "./fee/tx";
import { MsgSetMargin, MsgSetMarginResponse } from "./position/tx";
import { MsgCreateOracle, MsgCreateOracleResponse, MsgCreateVote, MsgCreateVoteResponse } from "./oracle/tx";
import { MsgGrantAllowance, MsgGrantAllowanceResponse, MsgRevokeAllowance, MsgRevokeAllowanceResponse } from "./cosmos/feegrant/v1beta1/tx";
import { MsgSubmitEvidence, MsgSubmitEvidenceResponse } from "./cosmos/evidence/v1beta1/tx";
import { MsgSend, MsgSendResponse, MsgMultiSend, MsgMultiSendResponse } from "./cosmos/bank/v1beta1/tx";
import { MsgSetWithdrawAddress, MsgSetWithdrawAddressResponse, MsgWithdrawDelegatorReward, MsgWithdrawDelegatorRewardResponse, MsgWithdrawValidatorCommission, MsgWithdrawValidatorCommissionResponse, MsgFundCommunityPool, MsgFundCommunityPoolResponse } from "./cosmos/distribution/v1beta1/tx";
import { MsgVerifyInvariant, MsgVerifyInvariantResponse } from "./cosmos/crisis/v1beta1/tx";
import { MsgCreateVestingAccount, MsgCreateVestingAccountResponse } from "./cosmos/vesting/v1beta1/tx";
import { MsgCreateValidator, MsgCreateValidatorResponse, MsgEditValidator, MsgEditValidatorResponse, MsgDelegate, MsgDelegateResponse, MsgBeginRedelegate, MsgBeginRedelegateResponse, MsgUndelegate, MsgUndelegateResponse } from "./cosmos/staking/v1beta1/tx";
import { MsgGrant, MsgExecResponse, MsgExec, MsgGrantResponse, MsgRevoke, MsgRevokeResponse } from "./cosmos/authz/v1beta1/tx";
import { MsgUnjail, MsgUnjailResponse } from "./cosmos/slashing/v1beta1/tx";
import { MsgSubmitProposal, MsgSubmitProposalResponse, MsgVote, MsgVoteResponse, MsgVoteWeighted, MsgVoteWeightedResponse, MsgDeposit, MsgDepositResponse } from "./cosmos/gov/v1beta1/tx";
import { MsgCreateToken, MsgCreateTokenResponse, MsgSyncToken, MsgSyncTokenResponse, MsgMintToken, MsgMintTokenResponse, MsgBindToken, MsgBindTokenResponse, MsgUnbindToken, MsgUnbindTokenResponse, MsgLinkToken, MsgLinkTokenResponse, MsgWithdraw, MsgWithdrawResponse, MsgAuthorizeBridge, MsgAuthorizeBridgeResponse, MsgDeauthorizeBridge, MsgDeauthorizeBridgeResponse } from "./coin/tx";
import { MsgSetLeverage, MsgSetLeverageResponse } from "./leverage/tx";
import { MsgUpdateProfile, MsgUpdateProfileResponse } from "./profile/tx";
import { MsgCreateSubAccount, MsgCreateSubAccountResponse, MsgActivateSubAccount, MsgActivateSubAccountResponse, MsgRemoveSubAccount, MsgRemoveSubAccountResponse } from "./subaccount/tx";
import { MsgCreateMarket, MsgCreateMarketResponse, MsgUpdateMarket, MsgUpdateMarketResponse } from "./market/tx";
import { MsgCreatePool, MsgCreatePoolResponse, MsgCreatePoolWithLiquidity, MsgCreatePoolWithLiquidityResponse, MsgAddLiquidity, MsgAddLiquidityResponse, MsgRemoveLiquidity, MsgRemoveLiquidityResponse, MsgLinkPool, MsgLinkPoolResponse, MsgUnlinkPool, MsgUnlinkPoolResponse, MsgSetRewardsWeights, MsgSetRewardsWeightsResponse, MsgStakePoolToken, MsgStakePoolTokenResponse, MsgUnstakePoolToken, MsgUnstakePoolTokenResponse, MsgClaimPoolRewards, MsgClaimPoolRewardsResponse, MsgSetRewardCurve, MsgSetRewardCurveResponse, MsgChangeSwapFee, MsgChangeSwapFeeResponse, MsgSetCommitmentCurve, MsgSetCommitmentCurveResponse, MsgChangeNumQuotes, MsgChangeNumQuotesResponse } from "./liquiditypool/tx";

export * from './cosmos-models'

export const registry = new Registry();

registry.register("/Switcheo.carbon.order.MsgSetTradingFlag", MsgSetTradingFlag);
registry.register("/Switcheo.carbon.order.MsgSetTradingFlagResponse", MsgSetTradingFlagResponse);
registry.register("/Switcheo.carbon.order.MsgCreateOrder", MsgCreateOrder);
registry.register("/Switcheo.carbon.order.MsgCreateOrderResponse", MsgCreateOrderResponse);
registry.register("/Switcheo.carbon.order.MsgEditOrder", MsgEditOrder);
registry.register("/Switcheo.carbon.order.MsgEditOrderResponse", MsgEditOrderResponse);
registry.register("/Switcheo.carbon.order.MsgCancelOrder", MsgCancelOrder);
registry.register("/Switcheo.carbon.order.MsgCancelOrderResponse", MsgCancelOrderResponse);
registry.register("/Switcheo.carbon.order.MsgCancelAll", MsgCancelAll);
registry.register("/Switcheo.carbon.order.MsgCancelAllResponse", MsgCancelAllResponse);

registry.register("/Switcheo.carbon.cdp.MsgAddCollateral", MsgAddCollateral);
registry.register("/Switcheo.carbon.cdp.MsgAddCollateralResponse", MsgAddCollateralResponse);
registry.register("/Switcheo.carbon.cdp.MsgRemoveCollateral", MsgRemoveCollateral);
registry.register("/Switcheo.carbon.cdp.MsgRemoveCollateralResponse", MsgRemoveCollateralResponse);
registry.register("/Switcheo.carbon.cdp.MsgAddDebt", MsgAddDebt);
registry.register("/Switcheo.carbon.cdp.MsgAddDebtResponse", MsgAddDebtResponse);
registry.register("/Switcheo.carbon.cdp.MsgRemoveDebt", MsgRemoveDebt);
registry.register("/Switcheo.carbon.cdp.MsgRemoveDebtResponse", MsgRemoveDebtResponse);
registry.register("/Switcheo.carbon.cdp.MsgCreateVaultType", MsgCreateVaultType);
registry.register("/Switcheo.carbon.cdp.MsgCreateVaultTypeResponse", MsgCreateVaultTypeResponse);

registry.register("/Switcheo.carbon.broker.MsgInitiateLiquidation", MsgInitiateLiquidation);
registry.register("/Switcheo.carbon.broker.MsgInitiateLiquidationResponse", MsgInitiateLiquidationResponse);

registry.register("/Switcheo.carbon.fee.MsgSetFee", MsgSetFee);
registry.register("/Switcheo.carbon.fee.MsgSetFeeResponse", MsgSetFeeResponse);

registry.register("/Switcheo.carbon.position.MsgSetMargin", MsgSetMargin);
registry.register("/Switcheo.carbon.position.MsgSetMarginResponse", MsgSetMarginResponse);

registry.register("/Switcheo.carbon.oracle.MsgCreateOracle", MsgCreateOracle);
registry.register("/Switcheo.carbon.oracle.MsgCreateOracleResponse", MsgCreateOracleResponse);
registry.register("/Switcheo.carbon.oracle.MsgCreateVote", MsgCreateVote);
registry.register("/Switcheo.carbon.oracle.MsgCreateVoteResponse", MsgCreateVoteResponse);

registry.register("/cosmos.feegrant.v1beta1.MsgGrantAllowance", MsgGrantAllowance);
registry.register("/cosmos.feegrant.v1beta1.MsgGrantAllowanceResponse", MsgGrantAllowanceResponse);
registry.register("/cosmos.feegrant.v1beta1.MsgRevokeAllowance", MsgRevokeAllowance);
registry.register("/cosmos.feegrant.v1beta1.MsgRevokeAllowanceResponse", MsgRevokeAllowanceResponse);

registry.register("/cosmos.evidence.v1beta1.MsgSubmitEvidence", MsgSubmitEvidence);
registry.register("/cosmos.evidence.v1beta1.MsgSubmitEvidenceResponse", MsgSubmitEvidenceResponse);

registry.register("/cosmos.bank.v1beta1.MsgSend", MsgSend);
registry.register("/cosmos.bank.v1beta1.MsgSendResponse", MsgSendResponse);
registry.register("/cosmos.bank.v1beta1.MsgMultiSend", MsgMultiSend);
registry.register("/cosmos.bank.v1beta1.MsgMultiSendResponse", MsgMultiSendResponse);

registry.register("/cosmos.distribution.v1beta1.MsgSetWithdrawAddress", MsgSetWithdrawAddress);
registry.register("/cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse", MsgSetWithdrawAddressResponse);
registry.register("/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward", MsgWithdrawDelegatorReward);
registry.register("/cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse", MsgWithdrawDelegatorRewardResponse);
registry.register("/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission", MsgWithdrawValidatorCommission);
registry.register("/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse", MsgWithdrawValidatorCommissionResponse);
registry.register("/cosmos.distribution.v1beta1.MsgFundCommunityPool", MsgFundCommunityPool);
registry.register("/cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse", MsgFundCommunityPoolResponse);

registry.register("/cosmos.crisis.v1beta1.MsgVerifyInvariant", MsgVerifyInvariant);
registry.register("/cosmos.crisis.v1beta1.MsgVerifyInvariantResponse", MsgVerifyInvariantResponse);

registry.register("/cosmos.vesting.v1beta1.MsgCreateVestingAccount", MsgCreateVestingAccount);
registry.register("/cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse", MsgCreateVestingAccountResponse);

registry.register("/cosmos.staking.v1beta1.MsgCreateValidator", MsgCreateValidator);
registry.register("/cosmos.staking.v1beta1.MsgCreateValidatorResponse", MsgCreateValidatorResponse);
registry.register("/cosmos.staking.v1beta1.MsgEditValidator", MsgEditValidator);
registry.register("/cosmos.staking.v1beta1.MsgEditValidatorResponse", MsgEditValidatorResponse);
registry.register("/cosmos.staking.v1beta1.MsgDelegate", MsgDelegate);
registry.register("/cosmos.staking.v1beta1.MsgDelegateResponse", MsgDelegateResponse);
registry.register("/cosmos.staking.v1beta1.MsgBeginRedelegate", MsgBeginRedelegate);
registry.register("/cosmos.staking.v1beta1.MsgBeginRedelegateResponse", MsgBeginRedelegateResponse);
registry.register("/cosmos.staking.v1beta1.MsgUndelegate", MsgUndelegate);
registry.register("/cosmos.staking.v1beta1.MsgUndelegateResponse", MsgUndelegateResponse);

registry.register("/cosmos.authz.v1beta1.MsgGrant", MsgGrant);
registry.register("/cosmos.authz.v1beta1.MsgExecResponse", MsgExecResponse);
registry.register("/cosmos.authz.v1beta1.MsgExec", MsgExec);
registry.register("/cosmos.authz.v1beta1.MsgGrantResponse", MsgGrantResponse);
registry.register("/cosmos.authz.v1beta1.MsgRevoke", MsgRevoke);
registry.register("/cosmos.authz.v1beta1.MsgRevokeResponse", MsgRevokeResponse);

registry.register("/cosmos.slashing.v1beta1.MsgUnjail", MsgUnjail);
registry.register("/cosmos.slashing.v1beta1.MsgUnjailResponse", MsgUnjailResponse);

registry.register("/cosmos.gov.v1beta1.MsgSubmitProposal", MsgSubmitProposal);
registry.register("/cosmos.gov.v1beta1.MsgSubmitProposalResponse", MsgSubmitProposalResponse);
registry.register("/cosmos.gov.v1beta1.MsgVote", MsgVote);
registry.register("/cosmos.gov.v1beta1.MsgVoteResponse", MsgVoteResponse);
registry.register("/cosmos.gov.v1beta1.MsgVoteWeighted", MsgVoteWeighted);
registry.register("/cosmos.gov.v1beta1.MsgVoteWeightedResponse", MsgVoteWeightedResponse);
registry.register("/cosmos.gov.v1beta1.MsgDeposit", MsgDeposit);
registry.register("/cosmos.gov.v1beta1.MsgDepositResponse", MsgDepositResponse);

registry.register("/Switcheo.carbon.coin.MsgCreateToken", MsgCreateToken);
registry.register("/Switcheo.carbon.coin.MsgCreateTokenResponse", MsgCreateTokenResponse);
registry.register("/Switcheo.carbon.coin.MsgSyncToken", MsgSyncToken);
registry.register("/Switcheo.carbon.coin.MsgSyncTokenResponse", MsgSyncTokenResponse);
registry.register("/Switcheo.carbon.coin.MsgMintToken", MsgMintToken);
registry.register("/Switcheo.carbon.coin.MsgMintTokenResponse", MsgMintTokenResponse);
registry.register("/Switcheo.carbon.coin.MsgBindToken", MsgBindToken);
registry.register("/Switcheo.carbon.coin.MsgBindTokenResponse", MsgBindTokenResponse);
registry.register("/Switcheo.carbon.coin.MsgUnbindToken", MsgUnbindToken);
registry.register("/Switcheo.carbon.coin.MsgUnbindTokenResponse", MsgUnbindTokenResponse);
registry.register("/Switcheo.carbon.coin.MsgLinkToken", MsgLinkToken);
registry.register("/Switcheo.carbon.coin.MsgLinkTokenResponse", MsgLinkTokenResponse);
registry.register("/Switcheo.carbon.coin.MsgWithdraw", MsgWithdraw);
registry.register("/Switcheo.carbon.coin.MsgWithdrawResponse", MsgWithdrawResponse);
registry.register("/Switcheo.carbon.coin.MsgAuthorizeBridge", MsgAuthorizeBridge);
registry.register("/Switcheo.carbon.coin.MsgAuthorizeBridgeResponse", MsgAuthorizeBridgeResponse);
registry.register("/Switcheo.carbon.coin.MsgDeauthorizeBridge", MsgDeauthorizeBridge);
registry.register("/Switcheo.carbon.coin.MsgDeauthorizeBridgeResponse", MsgDeauthorizeBridgeResponse);

registry.register("/Switcheo.carbon.leverage.MsgSetLeverage", MsgSetLeverage);
registry.register("/Switcheo.carbon.leverage.MsgSetLeverageResponse", MsgSetLeverageResponse);

registry.register("/Switcheo.carbon.profile.MsgUpdateProfile", MsgUpdateProfile);
registry.register("/Switcheo.carbon.profile.MsgUpdateProfileResponse", MsgUpdateProfileResponse);

registry.register("/Switcheo.carbon.subaccount.MsgCreateSubAccount", MsgCreateSubAccount);
registry.register("/Switcheo.carbon.subaccount.MsgCreateSubAccountResponse", MsgCreateSubAccountResponse);
registry.register("/Switcheo.carbon.subaccount.MsgActivateSubAccount", MsgActivateSubAccount);
registry.register("/Switcheo.carbon.subaccount.MsgActivateSubAccountResponse", MsgActivateSubAccountResponse);
registry.register("/Switcheo.carbon.subaccount.MsgRemoveSubAccount", MsgRemoveSubAccount);
registry.register("/Switcheo.carbon.subaccount.MsgRemoveSubAccountResponse", MsgRemoveSubAccountResponse);

registry.register("/Switcheo.carbon.market.MsgCreateMarket", MsgCreateMarket);
registry.register("/Switcheo.carbon.market.MsgCreateMarketResponse", MsgCreateMarketResponse);
registry.register("/Switcheo.carbon.market.MsgUpdateMarket", MsgUpdateMarket);
registry.register("/Switcheo.carbon.market.MsgUpdateMarketResponse", MsgUpdateMarketResponse);

registry.register("/Switcheo.carbon.liquiditypool.MsgCreatePool", MsgCreatePool);
registry.register("/Switcheo.carbon.liquiditypool.MsgCreatePoolResponse", MsgCreatePoolResponse);
registry.register("/Switcheo.carbon.liquiditypool.MsgCreatePoolWithLiquidity", MsgCreatePoolWithLiquidity);
registry.register("/Switcheo.carbon.liquiditypool.MsgCreatePoolWithLiquidityResponse", MsgCreatePoolWithLiquidityResponse);
registry.register("/Switcheo.carbon.liquiditypool.MsgAddLiquidity", MsgAddLiquidity);
registry.register("/Switcheo.carbon.liquiditypool.MsgAddLiquidityResponse", MsgAddLiquidityResponse);
registry.register("/Switcheo.carbon.liquiditypool.MsgRemoveLiquidity", MsgRemoveLiquidity);
registry.register("/Switcheo.carbon.liquiditypool.MsgRemoveLiquidityResponse", MsgRemoveLiquidityResponse);
registry.register("/Switcheo.carbon.liquiditypool.MsgLinkPool", MsgLinkPool);
registry.register("/Switcheo.carbon.liquiditypool.MsgLinkPoolResponse", MsgLinkPoolResponse);
registry.register("/Switcheo.carbon.liquiditypool.MsgUnlinkPool", MsgUnlinkPool);
registry.register("/Switcheo.carbon.liquiditypool.MsgUnlinkPoolResponse", MsgUnlinkPoolResponse);
registry.register("/Switcheo.carbon.liquiditypool.MsgSetRewardsWeights", MsgSetRewardsWeights);
registry.register("/Switcheo.carbon.liquiditypool.MsgSetRewardsWeightsResponse", MsgSetRewardsWeightsResponse);
registry.register("/Switcheo.carbon.liquiditypool.MsgStakePoolToken", MsgStakePoolToken);
registry.register("/Switcheo.carbon.liquiditypool.MsgStakePoolTokenResponse", MsgStakePoolTokenResponse);
registry.register("/Switcheo.carbon.liquiditypool.MsgUnstakePoolToken", MsgUnstakePoolToken);
registry.register("/Switcheo.carbon.liquiditypool.MsgUnstakePoolTokenResponse", MsgUnstakePoolTokenResponse);
registry.register("/Switcheo.carbon.liquiditypool.MsgClaimPoolRewards", MsgClaimPoolRewards);
registry.register("/Switcheo.carbon.liquiditypool.MsgClaimPoolRewardsResponse", MsgClaimPoolRewardsResponse);
registry.register("/Switcheo.carbon.liquiditypool.MsgSetRewardCurve", MsgSetRewardCurve);
registry.register("/Switcheo.carbon.liquiditypool.MsgSetRewardCurveResponse", MsgSetRewardCurveResponse);
registry.register("/Switcheo.carbon.liquiditypool.MsgChangeSwapFee", MsgChangeSwapFee);
registry.register("/Switcheo.carbon.liquiditypool.MsgChangeSwapFeeResponse", MsgChangeSwapFeeResponse);
registry.register("/Switcheo.carbon.liquiditypool.MsgSetCommitmentCurve", MsgSetCommitmentCurve);
registry.register("/Switcheo.carbon.liquiditypool.MsgSetCommitmentCurveResponse", MsgSetCommitmentCurveResponse);
registry.register("/Switcheo.carbon.liquiditypool.MsgChangeNumQuotes", MsgChangeNumQuotes);
registry.register("/Switcheo.carbon.liquiditypool.MsgChangeNumQuotesResponse", MsgChangeNumQuotesResponse);

export const TxTypes = {
  "MsgSetTradingFlag": "/Switcheo.carbon.order.MsgSetTradingFlag",
  "MsgSetTradingFlagResponse": "/Switcheo.carbon.order.MsgSetTradingFlagResponse",
  "MsgCreateOrder": "/Switcheo.carbon.order.MsgCreateOrder",
  "MsgCreateOrderResponse": "/Switcheo.carbon.order.MsgCreateOrderResponse",
  "MsgEditOrder": "/Switcheo.carbon.order.MsgEditOrder",
  "MsgEditOrderResponse": "/Switcheo.carbon.order.MsgEditOrderResponse",
  "MsgCancelOrder": "/Switcheo.carbon.order.MsgCancelOrder",
  "MsgCancelOrderResponse": "/Switcheo.carbon.order.MsgCancelOrderResponse",
  "MsgCancelAll": "/Switcheo.carbon.order.MsgCancelAll",
  "MsgCancelAllResponse": "/Switcheo.carbon.order.MsgCancelAllResponse",
  "MsgAddCollateral": "/Switcheo.carbon.cdp.MsgAddCollateral",
  "MsgAddCollateralResponse": "/Switcheo.carbon.cdp.MsgAddCollateralResponse",
  "MsgRemoveCollateral": "/Switcheo.carbon.cdp.MsgRemoveCollateral",
  "MsgRemoveCollateralResponse": "/Switcheo.carbon.cdp.MsgRemoveCollateralResponse",
  "MsgAddDebt": "/Switcheo.carbon.cdp.MsgAddDebt",
  "MsgAddDebtResponse": "/Switcheo.carbon.cdp.MsgAddDebtResponse",
  "MsgRemoveDebt": "/Switcheo.carbon.cdp.MsgRemoveDebt",
  "MsgRemoveDebtResponse": "/Switcheo.carbon.cdp.MsgRemoveDebtResponse",
  "MsgCreateVaultType": "/Switcheo.carbon.cdp.MsgCreateVaultType",
  "MsgCreateVaultTypeResponse": "/Switcheo.carbon.cdp.MsgCreateVaultTypeResponse",
  "MsgInitiateLiquidation": "/Switcheo.carbon.broker.MsgInitiateLiquidation",
  "MsgInitiateLiquidationResponse": "/Switcheo.carbon.broker.MsgInitiateLiquidationResponse",
  "MsgSetFee": "/Switcheo.carbon.fee.MsgSetFee",
  "MsgSetFeeResponse": "/Switcheo.carbon.fee.MsgSetFeeResponse",
  "MsgSetMargin": "/Switcheo.carbon.position.MsgSetMargin",
  "MsgSetMarginResponse": "/Switcheo.carbon.position.MsgSetMarginResponse",
  "MsgCreateOracle": "/Switcheo.carbon.oracle.MsgCreateOracle",
  "MsgCreateOracleResponse": "/Switcheo.carbon.oracle.MsgCreateOracleResponse",
  "MsgCreateVote": "/Switcheo.carbon.oracle.MsgCreateVote",
  "MsgCreateVoteResponse": "/Switcheo.carbon.oracle.MsgCreateVoteResponse",
  "MsgGrantAllowance": "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
  "MsgGrantAllowanceResponse": "/cosmos.feegrant.v1beta1.MsgGrantAllowanceResponse",
  "MsgRevokeAllowance": "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
  "MsgRevokeAllowanceResponse": "/cosmos.feegrant.v1beta1.MsgRevokeAllowanceResponse",
  "MsgSubmitEvidence": "/cosmos.evidence.v1beta1.MsgSubmitEvidence",
  "MsgSubmitEvidenceResponse": "/cosmos.evidence.v1beta1.MsgSubmitEvidenceResponse",
  "MsgSend": "/cosmos.bank.v1beta1.MsgSend",
  "MsgSendResponse": "/cosmos.bank.v1beta1.MsgSendResponse",
  "MsgMultiSend": "/cosmos.bank.v1beta1.MsgMultiSend",
  "MsgMultiSendResponse": "/cosmos.bank.v1beta1.MsgMultiSendResponse",
  "MsgSetWithdrawAddress": "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
  "MsgSetWithdrawAddressResponse": "/cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse",
  "MsgWithdrawDelegatorReward": "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
  "MsgWithdrawDelegatorRewardResponse": "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse",
  "MsgWithdrawValidatorCommission": "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
  "MsgWithdrawValidatorCommissionResponse": "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse",
  "MsgFundCommunityPool": "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
  "MsgFundCommunityPoolResponse": "/cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse",
  "MsgVerifyInvariant": "/cosmos.crisis.v1beta1.MsgVerifyInvariant",
  "MsgVerifyInvariantResponse": "/cosmos.crisis.v1beta1.MsgVerifyInvariantResponse",
  "MsgCreateVestingAccount": "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
  "MsgCreateVestingAccountResponse": "/cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse",
  "MsgCreateValidator": "/cosmos.staking.v1beta1.MsgCreateValidator",
  "MsgCreateValidatorResponse": "/cosmos.staking.v1beta1.MsgCreateValidatorResponse",
  "MsgEditValidator": "/cosmos.staking.v1beta1.MsgEditValidator",
  "MsgEditValidatorResponse": "/cosmos.staking.v1beta1.MsgEditValidatorResponse",
  "MsgDelegate": "/cosmos.staking.v1beta1.MsgDelegate",
  "MsgDelegateResponse": "/cosmos.staking.v1beta1.MsgDelegateResponse",
  "MsgBeginRedelegate": "/cosmos.staking.v1beta1.MsgBeginRedelegate",
  "MsgBeginRedelegateResponse": "/cosmos.staking.v1beta1.MsgBeginRedelegateResponse",
  "MsgUndelegate": "/cosmos.staking.v1beta1.MsgUndelegate",
  "MsgUndelegateResponse": "/cosmos.staking.v1beta1.MsgUndelegateResponse",
  "MsgGrant": "/cosmos.authz.v1beta1.MsgGrant",
  "MsgExecResponse": "/cosmos.authz.v1beta1.MsgExecResponse",
  "MsgExec": "/cosmos.authz.v1beta1.MsgExec",
  "MsgGrantResponse": "/cosmos.authz.v1beta1.MsgGrantResponse",
  "MsgRevoke": "/cosmos.authz.v1beta1.MsgRevoke",
  "MsgRevokeResponse": "/cosmos.authz.v1beta1.MsgRevokeResponse",
  "MsgUnjail": "/cosmos.slashing.v1beta1.MsgUnjail",
  "MsgUnjailResponse": "/cosmos.slashing.v1beta1.MsgUnjailResponse",
  "MsgSubmitProposal": "/cosmos.gov.v1beta1.MsgSubmitProposal",
  "MsgSubmitProposalResponse": "/cosmos.gov.v1beta1.MsgSubmitProposalResponse",
  "MsgVote": "/cosmos.gov.v1beta1.MsgVote",
  "MsgVoteResponse": "/cosmos.gov.v1beta1.MsgVoteResponse",
  "MsgVoteWeighted": "/cosmos.gov.v1beta1.MsgVoteWeighted",
  "MsgVoteWeightedResponse": "/cosmos.gov.v1beta1.MsgVoteWeightedResponse",
  "MsgDeposit": "/cosmos.gov.v1beta1.MsgDeposit",
  "MsgDepositResponse": "/cosmos.gov.v1beta1.MsgDepositResponse",
  "MsgCreateToken": "/Switcheo.carbon.coin.MsgCreateToken",
  "MsgCreateTokenResponse": "/Switcheo.carbon.coin.MsgCreateTokenResponse",
  "MsgSyncToken": "/Switcheo.carbon.coin.MsgSyncToken",
  "MsgSyncTokenResponse": "/Switcheo.carbon.coin.MsgSyncTokenResponse",
  "MsgMintToken": "/Switcheo.carbon.coin.MsgMintToken",
  "MsgMintTokenResponse": "/Switcheo.carbon.coin.MsgMintTokenResponse",
  "MsgBindToken": "/Switcheo.carbon.coin.MsgBindToken",
  "MsgBindTokenResponse": "/Switcheo.carbon.coin.MsgBindTokenResponse",
  "MsgUnbindToken": "/Switcheo.carbon.coin.MsgUnbindToken",
  "MsgUnbindTokenResponse": "/Switcheo.carbon.coin.MsgUnbindTokenResponse",
  "MsgLinkToken": "/Switcheo.carbon.coin.MsgLinkToken",
  "MsgLinkTokenResponse": "/Switcheo.carbon.coin.MsgLinkTokenResponse",
  "MsgWithdraw": "/Switcheo.carbon.coin.MsgWithdraw",
  "MsgWithdrawResponse": "/Switcheo.carbon.coin.MsgWithdrawResponse",
  "MsgAuthorizeBridge": "/Switcheo.carbon.coin.MsgAuthorizeBridge",
  "MsgAuthorizeBridgeResponse": "/Switcheo.carbon.coin.MsgAuthorizeBridgeResponse",
  "MsgDeauthorizeBridge": "/Switcheo.carbon.coin.MsgDeauthorizeBridge",
  "MsgDeauthorizeBridgeResponse": "/Switcheo.carbon.coin.MsgDeauthorizeBridgeResponse",
  "MsgSetLeverage": "/Switcheo.carbon.leverage.MsgSetLeverage",
  "MsgSetLeverageResponse": "/Switcheo.carbon.leverage.MsgSetLeverageResponse",
  "MsgUpdateProfile": "/Switcheo.carbon.profile.MsgUpdateProfile",
  "MsgUpdateProfileResponse": "/Switcheo.carbon.profile.MsgUpdateProfileResponse",
  "MsgCreateSubAccount": "/Switcheo.carbon.subaccount.MsgCreateSubAccount",
  "MsgCreateSubAccountResponse": "/Switcheo.carbon.subaccount.MsgCreateSubAccountResponse",
  "MsgActivateSubAccount": "/Switcheo.carbon.subaccount.MsgActivateSubAccount",
  "MsgActivateSubAccountResponse": "/Switcheo.carbon.subaccount.MsgActivateSubAccountResponse",
  "MsgRemoveSubAccount": "/Switcheo.carbon.subaccount.MsgRemoveSubAccount",
  "MsgRemoveSubAccountResponse": "/Switcheo.carbon.subaccount.MsgRemoveSubAccountResponse",
  "MsgCreateMarket": "/Switcheo.carbon.market.MsgCreateMarket",
  "MsgCreateMarketResponse": "/Switcheo.carbon.market.MsgCreateMarketResponse",
  "MsgUpdateMarket": "/Switcheo.carbon.market.MsgUpdateMarket",
  "MsgUpdateMarketResponse": "/Switcheo.carbon.market.MsgUpdateMarketResponse",
  "MsgCreatePool": "/Switcheo.carbon.liquiditypool.MsgCreatePool",
  "MsgCreatePoolResponse": "/Switcheo.carbon.liquiditypool.MsgCreatePoolResponse",
  "MsgCreatePoolWithLiquidity": "/Switcheo.carbon.liquiditypool.MsgCreatePoolWithLiquidity",
  "MsgCreatePoolWithLiquidityResponse": "/Switcheo.carbon.liquiditypool.MsgCreatePoolWithLiquidityResponse",
  "MsgAddLiquidity": "/Switcheo.carbon.liquiditypool.MsgAddLiquidity",
  "MsgAddLiquidityResponse": "/Switcheo.carbon.liquiditypool.MsgAddLiquidityResponse",
  "MsgRemoveLiquidity": "/Switcheo.carbon.liquiditypool.MsgRemoveLiquidity",
  "MsgRemoveLiquidityResponse": "/Switcheo.carbon.liquiditypool.MsgRemoveLiquidityResponse",
  "MsgLinkPool": "/Switcheo.carbon.liquiditypool.MsgLinkPool",
  "MsgLinkPoolResponse": "/Switcheo.carbon.liquiditypool.MsgLinkPoolResponse",
  "MsgUnlinkPool": "/Switcheo.carbon.liquiditypool.MsgUnlinkPool",
  "MsgUnlinkPoolResponse": "/Switcheo.carbon.liquiditypool.MsgUnlinkPoolResponse",
  "MsgSetRewardsWeights": "/Switcheo.carbon.liquiditypool.MsgSetRewardsWeights",
  "MsgSetRewardsWeightsResponse": "/Switcheo.carbon.liquiditypool.MsgSetRewardsWeightsResponse",
  "MsgStakePoolToken": "/Switcheo.carbon.liquiditypool.MsgStakePoolToken",
  "MsgStakePoolTokenResponse": "/Switcheo.carbon.liquiditypool.MsgStakePoolTokenResponse",
  "MsgUnstakePoolToken": "/Switcheo.carbon.liquiditypool.MsgUnstakePoolToken",
  "MsgUnstakePoolTokenResponse": "/Switcheo.carbon.liquiditypool.MsgUnstakePoolTokenResponse",
  "MsgClaimPoolRewards": "/Switcheo.carbon.liquiditypool.MsgClaimPoolRewards",
  "MsgClaimPoolRewardsResponse": "/Switcheo.carbon.liquiditypool.MsgClaimPoolRewardsResponse",
  "MsgSetRewardCurve": "/Switcheo.carbon.liquiditypool.MsgSetRewardCurve",
  "MsgSetRewardCurveResponse": "/Switcheo.carbon.liquiditypool.MsgSetRewardCurveResponse",
  "MsgChangeSwapFee": "/Switcheo.carbon.liquiditypool.MsgChangeSwapFee",
  "MsgChangeSwapFeeResponse": "/Switcheo.carbon.liquiditypool.MsgChangeSwapFeeResponse",
  "MsgSetCommitmentCurve": "/Switcheo.carbon.liquiditypool.MsgSetCommitmentCurve",
  "MsgSetCommitmentCurveResponse": "/Switcheo.carbon.liquiditypool.MsgSetCommitmentCurveResponse",
  "MsgChangeNumQuotes": "/Switcheo.carbon.liquiditypool.MsgChangeNumQuotes",
  "MsgChangeNumQuotesResponse": "/Switcheo.carbon.liquiditypool.MsgChangeNumQuotesResponse"
}

export enum ProposalTypes {
  SetMsgFee = "/Switcheo.carbon.fee.SetMsgFeeProposal",
  ChangeSwapFee = "/Switcheo.carbon.liquiditypool.ChangeSwapFeeProposal",
  CreateToken = "/Switcheo.carbon.coin.CreateTokenProposal",
  CreateOracle = "/Switcheo.carbon.oracle.CreateOracleProposal",
  LinkPool = "/Switcheo.carbon.liquiditypool.LinkPoolProposal",
  UnlinkPool = "/Switcheo.carbon.liquiditypool.UnlinkPoolProposal",
  ChangeNumQuotes = "/Switcheo.carbon.liquiditypool.ChangeNumQuotesProposal",
  SetRewardCurve = "/Switcheo.carbon.liquiditypool.SetRewardCurveProposal",
  SetRewardsWeights = "/Switcheo.carbon.liquiditypool.SetRewardsWeightsProposal",
  SetCommitmentCurve = "/Switcheo.carbon.liquiditypool.SetCommitmentCurveProposal",
  CreateMarket = "/Switcheo.carbon.market.CreateMarketProposal",
  UpdateMarket = "/Switcheo.carbon.market.UpdateMarketProposal",
  SettlementPrice = "/Switcheo.carbon.market.SettlementPriceProposal",
};

// Exported for convenience
export { MessageType } from "./misc/message_type";
export { Transaction } from "./misc/transaction";
export { QuerySearchRequest, QuerySearchResponse } from "./misc/query";
export { MsgSetTradingFlag, MsgSetTradingFlagResponse, MsgCreateOrder, MsgCreateOrderResponse, MsgEditOrder, MsgEditOrderResponse, MsgCancelOrder, MsgCancelOrderResponse, MsgCancelAll, MsgCancelAllResponse } from "./order/tx";
export { Order, APIOrder, DBOrder, OrdersForMarket, OrderIDsForMarket, OrderIDs, Orders } from "./order/order";
export { QueryGetOrderRequest, QueryGetOrderResponse, QueryAllOrderRequest, QueryAllOrderResponse, QueryAccountOpenOrdersRequest, QueryAccountOpenOrdersResponse } from "./order/query";
export { OrderEvent } from "./order/event";
export { MsgAddCollateral, MsgAddCollateralResponse, MsgRemoveCollateral, MsgRemoveCollateralResponse, MsgAddDebt, MsgAddDebtResponse, MsgRemoveDebt, MsgRemoveDebtResponse, MsgCreateVaultType, MsgCreateVaultTypeResponse } from "./cdp/tx";
export { Vault, VaultType } from "./cdp/vault";
export { QueryGetVaultRequest, QueryGetVaultResponse, QueryAllVaultRequest, QueryAllVaultResponse, QueryGetVaultTypeRequest, QueryGetVaultTypeResponse, QueryAllVaultTypeRequest, QueryAllVaultTypeResponse } from "./cdp/query";
export { VaultTypeEvent, VaultEvent } from "./cdp/event";
export { LiquidatorPosition, MsgInitiateLiquidation, MsgInitiateLiquidationResponse } from "./broker/tx";
export { IncomingLiquidations } from "./broker/incoming_liquidations";
export { MinMaxBoundary } from "./broker/pagination";
export { Candlestick } from "./broker/candlestick";
export { Amm } from "./broker/amm";
export { QueryCandlesticksRequest, QueryCandlesticksResponse, QueryTradesRequest, QueryTradesResponse } from "./broker/query";
export { TradeEvent } from "./broker/event";
export { IncomingPoolSwap } from "./broker/incoming_pool_swap";
export { MsgSetFee, MsgSetFeeResponse } from "./fee/tx";
export { MsgFee } from "./fee/fee";
export { SetMsgFeeProposal } from "./fee/proposal";
export { QueryGetMsgFeeRequest, QueryGetMsgFeeResponse, QueryAllMsgFeeRequest, QueryAllMsgFeeResponse } from "./fee/query";
export { Transfer } from "./bank/event";
export { AccountTradeHistoryRow } from "./liquidation/history";
export { OutstandingPosition, OutstandingPositions } from "./liquidation/outstanding_position";
export { QueryAllLiquidationRequest, QueryAllLiquidationResponse } from "./liquidation/query";
export { Any } from "./google/protobuf/any";
export { Timestamp } from "./google/protobuf/timestamp";
export { DoubleValue, FloatValue, Int64Value, UInt64Value, Int32Value, UInt32Value, BoolValue, StringValue, BytesValue } from "./google/protobuf/wrappers";
export { Duration } from "./google/protobuf/duration";
export { MsgSetMargin, MsgSetMarginResponse } from "./position/tx";
export { Position, Positions } from "./position/position";
export { QueryGetPositionRequest, QueryGetPositionResponse, QueryAllPositionRequest, QueryAllPositionResponse } from "./position/query";
export { PositionEvent } from "./position/event";
export { MsgCreateOracle, CreateOracleParams, MsgCreateOracleResponse, MsgCreateVote, MsgCreateVoteResponse } from "./oracle/tx";
export { Oracle, Vote, Result, Mark } from "./oracle/oracle";
export { CreateOracleProposal } from "./oracle/proposal";
export { QueryOracleRequest, QueryOracleResponse, QueryAllOracleRequest, QueryAllOracleResponse, QueryAllResultRequest, QueryAllResultResponse, QueryAllVoteRequest, QueryAllVoteResponse, QueryVoterPowerRequest, QueryVoterPowerResponse } from "./oracle/query";
export { NewVoteEvent, RecordVoteEvent, VoteEvent, ResultEvent } from "./oracle/event";
export { MsgCreateToken, CreateTokenParams, MsgCreateTokenResponse, MsgSyncToken, MsgSyncTokenResponse, MsgMintToken, MsgMintTokenResponse, MsgBindToken, MsgBindTokenResponse, MsgUnbindToken, MsgUnbindTokenResponse, MsgLinkToken, MsgLinkTokenResponse, MsgWithdraw, MsgWithdrawResponse, MsgAuthorizeBridge, MsgAuthorizeBridgeResponse, MsgDeauthorizeBridge, MsgDeauthorizeBridgeResponse } from "./coin/tx";
export { ExternalTransfer } from "./coin/extevents";
export { CreateTokenProposal } from "./coin/proposal";
export { Bridge } from "./coin/bridge";
export { QueryGetTokenRequest, QueryGetTokenResponse, QueryAllTokenRequest, QueryAllTokenResponse, QueryGetLockedCoinsRequest, QueryGetLockedCoinsResponse, QueryAllWrapperMappingsRequest, QueryAllWrapperMappingsResponse, QueryAllWrapperMappingsResponse_WrapperMappingsEntry, QueryGetBalancesRequest, QueryGetBalancesResponse, QueryGetExternalTransfersRequest, QueryGetExternalTransfersResponse, QueryGetBridgeRequest, QueryGetBridgeResponse, QueryAllBridgeRequest, QueryAllBridgeResponse } from "./coin/query";
export { Token, BalanceChange, LockedCoins, LockedCoinsRecord, PositionPool, TokenBalance } from "./coin/token";
export { NewTokenEvent, SyncTokenEvent, BindTokenEvent, UnbindTokenEvent, LinkTokenEvent } from "./coin/event";
export { MarketLeverage, MarketLeverageRecord } from "./leverage/leverage";
export { MsgSetLeverage, MsgSetLeverageResponse } from "./leverage/tx";
export { QueryGetLeverageRequest, QueryGetLeverageResponse, QueryAllLeverageRequest, QueryAllLeverageResponse } from "./leverage/query";
export { LeverageEvent } from "./leverage/event";
export { MsgUpdateProfile, MsgUpdateProfileResponse } from "./profile/tx";
export { Profile } from "./profile/profile";
export { QueryGetProfileRequest, QueryGetProfileResponse, QueryAllProfileRequest, QueryAllProfileResponse } from "./profile/query";
export { UpdateProfileEvent } from "./profile/event";
export { MsgCreateSubAccount, MsgCreateSubAccountResponse, MsgActivateSubAccount, MsgActivateSubAccountResponse, MsgRemoveSubAccount, MsgRemoveSubAccountResponse } from "./subaccount/tx";
export { QueryGetSubAccountRequest, QueryGetSubAccountResponse, QueryAllSubAccountRequest, QueryAllSubAccountResponse, QuerySubAccountStatusRequest, QuerySubAccountStatusResponse, QuerySubAccountPowerRequest, QuerySubAccountPowerResponse } from "./subaccount/query";
export { SubAccount, GenesisSubAccount } from "./subaccount/subaccount";
export { CreateValidator, CompleteUnbonding, Delegate } from "./staking/event";
export { OrderBookLevel, OrderBook, StopBook } from "./book/book";
export { QueryGetBookRequest, QueryGetBookResponse, QueryAllBookRequest, QueryAllBookResponse } from "./book/query";
export { OrderBookEvent } from "./book/event";
export { MsgCreateMarket, MsgCreateMarketResponse, MsgUpdateMarket, MsgUpdateMarketResponse } from "./market/tx";
export { CreateMarketProposal, UpdateMarketProposal } from "./market/proposal";
export { Market, MarketParams } from "./market/market";
export { QueryGetMarketRequest, QueryGetMarketResponse, QueryAllMarketRequest, QueryAllMarketResponse } from "./market/query";
export { MarketEvent } from "./market/event";
export { MintData } from "./inflation/inflation";
export { QueryMintDataRequest, QueryMintDataResponse } from "./inflation/query";
export { MsgCreatePool, MsgCreatePoolResponse, MsgCreatePoolWithLiquidity, MsgCreatePoolWithLiquidityResponse, MsgAddLiquidity, MsgAddLiquidityResponse, MsgRemoveLiquidity, MsgRemoveLiquidityResponse, MsgLinkPool, LinkPoolParams, MsgLinkPoolResponse, MsgUnlinkPool, UnlinkPoolParams, MsgUnlinkPoolResponse, MsgSetRewardsWeights, SetRewardsWeightsParams, MsgSetRewardsWeightsResponse, MsgStakePoolToken, MsgStakePoolTokenResponse, MsgUnstakePoolToken, MsgUnstakePoolTokenResponse, MsgClaimPoolRewards, MsgClaimPoolRewardsResponse, MsgSetRewardCurve, SetRewardCurveParams, MsgSetRewardCurveResponse, MsgChangeSwapFee, ChangeSwapFeeParams, MsgChangeSwapFeeResponse, MsgSetCommitmentCurve, SetCommitmentCurveParams, MsgSetCommitmentCurveResponse, MsgChangeNumQuotes, ChangeNumQuotesParams, MsgChangeNumQuotesResponse } from "./liquiditypool/tx";
export { RewardCurve, CommitmentCurve, RewardWeight, RewardWeights, Commitment, CommitmentRecord, TotalCommitment, TotalCommitmentRecord, CommitmentResponse, RewardHistory, RewardHistoryRecord, CommitmentExpiry, CommitmentExpiries, CommitmentExpiriesRecord, LastClaimRecord, AllocatedRewards } from "./liquiditypool/reward";
export { Pool, Pools, AddLiquidity, AddLiquidities, RemoveLiquidity, RemoveLiquidities } from "./liquiditypool/liquiditypool";
export { LinkPoolProposal, UnlinkPoolProposal, SetRewardCurveProposal, SetCommitmentCurveProposal, SetRewardsWeightsProposal, ChangeSwapFeeProposal, ChangeNumQuotesProposal } from "./liquiditypool/proposal";
export { QueryGetPoolRequest, QueryGetPoolResponse, QueryAllPoolRequest, QueryAllPoolResponse, QueryRewardHistoryRequest, ExtendedPool, QueryRewardHistoryResponse, QuerierRewardHistory, QueryCommitmentRequest, QueryCommitmentResponse, QueryAllCommitmentRequest, QueryAllCommitmentResponse, QueryLastClaimRequest, QueryLastClaimResponse, QueryCommitmentCurveRequest, QueryCommitmentCurveResponse, QueryRewardCurveRequest, QueryRewardCurveResponse, QueryTotalCommitmentRequest, QueryTotalCommitmentResponse, QueryAllTotalCommitmentRequest, QueryAllTotalCommitmentResponse, QueryClaimableRewardsRequest, QueryClaimableRewardsResponse } from "./liquiditypool/query";
export { PoolEvent, TotalCommitmentChangeEvent, RewardsWeightChangeEvent, CommitmentCurveEvent, CommitmentEvent } from "./liquiditypool/event";
export { QueryBalanceRequest, QueryBalanceResponse } from "./insurance/query";
export { EventDataInsuranceFundTransfer } from "./insurance/event";
export { FundByMarket, Fund } from "./insurance/fund";
export { PriceSet } from "./pricing/pricing";
export { SettlementPriceProposal, SettlementPriceParams } from "./pricing/proposal";
export { QueryPriceSetRequest, QueryPriceSetResponse, QueryAllPriceSetRequest, QueryAllPriceSetResponse, QueryRateRequest, QueryRateResponse } from "./pricing/query";
export { PriceUpdateEvent } from "./pricing/event";
