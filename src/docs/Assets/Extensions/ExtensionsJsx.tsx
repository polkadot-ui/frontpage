/* @license Copyright 2024 @polkadot-ui/frontpage authors & contributors
SPDX-License-Identifier: MIT */

import { SimpleEditor } from "../../lib/SimpleEditor";
import { PolkadotVault } from "@polkadot-ui/assets/extensions/jsx/PolkadotVault";
import { Demo } from "../../lib/Demo";

export const ExtensionsJsx = () => {
  const code = `import { PolkadotVault } from "@polkadot-ui/assets/extensions/jsx/PolkadotVault";

const App = () => (
  <PolkadotVault />
)`;

  return (
    <>
      <Demo showThemes={false}>
        <div className="svg-box sm">
          <PolkadotVault />
        </div>
      </Demo>
      <SimpleEditor code={code} language="javascript" />
    </>
  );
};
