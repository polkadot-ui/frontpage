/* @license Copyright 2024 @polkadot-ui/frontpage authors & contributors
SPDX-License-Identifier: MIT */

import { SimpleEditor } from "../../lib/SimpleEditor";

export const ImportSimple = () => {
  const code = `// Import browser extensions as object or array.
import { Extensions, ExtensionsArray } from "@polkadot-ui/assets/extensions";

// Import hardware wallets as object or array.
import { Hardware, HardwareArray } from "@polkadot-ui/assets/extensions";

// Get PolkaGate extension metadata.
console.log(Extensions['polkagate']);
>> {
  title: "PolkaGate",
  website: "polkagate.xyz",
}`;

  return <SimpleEditor code={code} language="javascript" standalone />;
};
