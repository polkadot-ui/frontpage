/* @license Copyright 2024 @polkadot-ui/frontpage authors & contributors
SPDX-License-Identifier: MIT */
import { Header } from "../../lib/Header";
import { Edit } from "../../lib/Edit";

import { ConnectPageSimple } from "./ConnectPageSimple";
import { DocProps } from "../../lib/types";

export const Doc = ({ folder, npm }: DocProps) => {
  return (
    <>
      <Edit folder={folder} />
      <Header
        title="Wallets Connect"
        subtitle="A React recipe that allows easy integration of extension wallets with browser app."
        npm={npm}
        status="experimental"
      />
      {/*<p>
         <AccountCardPageShowcase /> 
      </p>*/}
      <h4>Introduction</h4>
      <p>
        The <code>Wallets Connect</code> recipe (which actually is 2 specific
        Providers - the <code>ExtensionProvider</code> which identifies the
        extensions installed in the browser and the <code>AccountProvider</code>{" "}
        which is listing the accounts from the selected extensions) is meant to
        exist for quick and fast integration of any app with the installed
        wallets of the user's browser. It identifies the installed extension and
        upon clicking on one, it prompts the user to connect be shown.
      </p>
      <ConnectPageSimple />
    </>
  );
};
