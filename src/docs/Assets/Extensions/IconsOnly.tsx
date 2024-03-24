import EnkryptSVG from "@polkadot-ui/assets/extensions/svg/enkrypt.svg?react";
import FearlessWalletSVG from "@polkadot-ui/assets/extensions/svg/fearlesswallet.svg?react";
import PolkadotJSSVG from "@polkadot-ui/assets/extensions/svg/polkadotjs.svg?react";
import PolkaGateSVG from "@polkadot-ui/assets/extensions/svg/polkagate.svg?react";
import SubwalletJSSVG from "@polkadot-ui/assets/extensions/svg/subwalletjs.svg?react";
import TalismanSVG from "@polkadot-ui/assets/extensions/svg/talisman.svg?react";
import LedgerSVG from "@polkadot-ui/assets/extensions/svg/ledger.svg?react";
import PolkadotVaultSVG from "@polkadot-ui/assets/extensions/svg/polkadotvault.svg?react";
import WalletConnectSVG from "@polkadot-ui/assets/extensions/svg/walletconnect.svg?react";
import MetamaskSVG from "@polkadot-ui/assets/extensions/svg/metamask.svg?react";
import { Demo } from "../../lib/Demo";

export const IconsOnly = () => {
  return (
    <>
      <Demo showThemes={false} standalone>
        <div className="svg-box sm">
          <EnkryptSVG />
        </div>
        <div className="svg-box sm">
          <FearlessWalletSVG />
        </div>
        <div className="svg-box sm">
          <MetamaskSVG />
        </div>
        <div className="svg-box sm">
          <PolkadotJSSVG />
        </div>
        <div className="svg-box sm">
          <PolkaGateSVG />
        </div>
        <div className="svg-box sm">
          <SubwalletJSSVG />
        </div>
        <div className="svg-box sm">
          <TalismanSVG />
        </div>
        <div className="svg-box sm" style={{ width: "8rem" }}>
          <LedgerSVG />
        </div>
        <div className="svg-box sm">
          <PolkadotVaultSVG />
        </div>
        <div className="svg-box sm">
          <WalletConnectSVG />
        </div>
      </Demo>
    </>
  );
};
