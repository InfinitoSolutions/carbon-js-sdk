import { DEFAULT_NETWORK, Network, Network as _Network, NetworkConfig, NetworkConfigs } from "@carbon-sdk/constant";
import { GenericUtils, NetworkUtils } from "@carbon-sdk/util";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import BigNumber from "bignumber.js";
import CarbonQueryClient from "./CarbonQueryClient";
import CarbonTokenClient from "./CarbonTokenClient";
import { AdminModule, BankModule, BrokerModule, CDPModule, CoinModule, GovModule, LeverageModule, LiquidityPoolModule, MarketModule, OracleModule, OrderModule, PositionModule, ProfileModule, SubAccountModule } from "./modules";
import { CosmosLedger } from "./provider";
import { bnOrZero, BN_ZERO } from "./util/number";
import { TxFeeTypeDefaultKey, TxFeeTypeMap } from "./util/tx";
import { SimpleMap } from "./util/type";
import { CarbonSigner, CarbonWallet, CarbonWalletGenericOpts, CarbonWalletInitOpts } from "./wallet";

export { CarbonTx } from "@carbon-sdk/util";
export { CarbonSigner, CarbonSignerTypes, CarbonWallet, CarbonWalletInitOpts } from "@carbon-sdk/wallet";


export interface CarbonSDKOpts {
  network: Network;
  tmClient: Tendermint34Client;
  config?: Partial<NetworkConfig>;
}
export interface CarbonSDKInitOpts {
  network: Network;
  tmClient?: Tendermint34Client;
  config?: Partial<NetworkConfig>;

  skipInit?: boolean
}

const DEFAULT_SDK_INIT_OPTS: CarbonSDKInitOpts = {
  network: DEFAULT_NETWORK,
};

/**
 * Carbon SDK
 *
 *
 */
class CarbonSDK {
  public static DEFAULT_NETWORK = DEFAULT_NETWORK;

  public readonly query: CarbonQueryClient;

  public readonly wallet?: CarbonWallet;

  network: Network;
  configOverride: Partial<NetworkConfig>;
  networkConfig: NetworkConfig;
  tmClient: Tendermint34Client;
  token: CarbonTokenClient;

  admin: AdminModule;
  order: OrderModule;
  lp: LiquidityPoolModule;
  subaccount: SubAccountModule;
  profile: ProfileModule;
  cdp: CDPModule;
  leverage: LeverageModule;
  market: MarketModule;
  broker: BrokerModule;
  position: PositionModule;
  coin: CoinModule;
  oracle: OracleModule;
  gov: GovModule;
  bank: BankModule;

  constructor(opts: CarbonSDKOpts) {
    this.network = opts.network ?? DEFAULT_NETWORK;
    this.configOverride = opts.config ?? {};
    this.networkConfig = GenericUtils.overrideConfig(NetworkConfigs[this.network], this.configOverride);

    this.tmClient = opts.tmClient;
    this.query = new CarbonQueryClient(opts.tmClient);
    this.token = CarbonTokenClient.instance(this.query);

    this.admin = new AdminModule(this);
    this.order = new OrderModule(this);
    this.lp = new LiquidityPoolModule(this);
    this.subaccount = new SubAccountModule(this);
    this.profile = new ProfileModule(this);
    this.cdp = new CDPModule(this);
    this.leverage = new LeverageModule(this);
    this.market = new MarketModule(this);
    this.broker = new BrokerModule(this);
    this.position = new PositionModule(this);
    this.coin = new CoinModule(this);
    this.oracle = new OracleModule(this);
    this.gov = new GovModule(this);
    this.bank = new BankModule(this);
  }

  public static async instance(opts: CarbonSDKInitOpts = DEFAULT_SDK_INIT_OPTS) {
    const network = opts.network ?? DEFAULT_NETWORK;
    const configOverride = opts.config ?? {};

    const networkConfig = GenericUtils.overrideConfig(NetworkConfigs[network], configOverride);
    const tmClient = await Tendermint34Client.connect(networkConfig.rpcUrl);

    const sdk = new CarbonSDK({ network, config: configOverride, tmClient });

    if (opts.skipInit !== true) {
      await sdk.initialize();
    }

    return sdk;
  }

  public async initialize(): Promise<CarbonSDK> {
    await this.token.initialize();
    if (this.wallet) {
      await this.wallet.initialize(this.query)
    }

    return this;
  }

  public generateOpts(): CarbonSDKOpts {
    return {
      network: this.network,
      config: this.configOverride,
      tmClient: this.tmClient,
    }
  }

  public async connect(wallet: CarbonWallet) {
    const connectedSDK = new ConnectedCarbonSDK(wallet, this.generateOpts());
    await connectedSDK.initialize();
    return connectedSDK;
  }

  public async connectWithPrivateKey(privateKey: string | Buffer) {
    const wallet = CarbonWallet.withPrivateKey(privateKey, {
      network: this.network,
      config: this.configOverride,
    })
    return this.connect(wallet)
  }

  public async connectWithMnemonic(mnemonic: string) {
    const wallet = CarbonWallet.withMnemonic(mnemonic, {
      network: this.network,
      config: this.configOverride,
    })
    return this.connect(wallet)
  }

  public async connectWithSigner(
    signer: CarbonSigner,
    publicKeyBase64: string,
    opts?: CarbonWalletGenericOpts,
  ) {
    const wallet = CarbonWallet.withSigner(signer, publicKeyBase64, {
      ...opts,
      network: this.network,
      config: this.configOverride,
    })
    return this.connect(wallet)
  }

  public async connectWithLedger(
    ledger: CosmosLedger,
    opts?: CarbonWalletGenericOpts,
  ) {
    const publicKeyBuffer = await ledger.getPubKey();
    const publicKeyBase64 = publicKeyBuffer.toString("base64");

    const wallet = CarbonWallet.withLedger(ledger, publicKeyBase64, {
      ...opts,
      network: this.network,
      config: this.configOverride,
    })
    return this.connect(wallet)
  }

  public getConfig(): NetworkConfig {
    return this.networkConfig;
  }

  public getConnectedWallet(): CarbonWallet {
    return this.checkWallet();
  }

  public log(...args: any[]) {
    console.log.apply(console.log, [this.constructor.name, ...args]);
  }

  private checkWallet(): CarbonWallet {
    if (!this.wallet) {
      throw new Error("wallet not connected");
    }

    return this.wallet;
  }

  public static parseNetwork = NetworkUtils.parseNetwork;
}

class ConnectedCarbonSDK extends CarbonSDK {
  wallet: CarbonWallet

  constructor(wallet: CarbonWallet, opts: CarbonSDKOpts) {
    super(opts);
    this.wallet = wallet
  }
}

namespace CarbonSDK {
  export import Network = _Network;
}

export default CarbonSDK;
