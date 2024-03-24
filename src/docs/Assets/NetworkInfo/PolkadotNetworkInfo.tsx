/* @license Copyright 2024 @polkadot-ui/frontpage authors & contributors
SPDX-License-Identifier: MIT */

import { SimpleEditor } from "../../lib/SimpleEditor";

export const PolkadotNetworkInfo = () => {
  const code = `// Import Polkadot's information object.

import { polkadot } from '@polkadot-ui/assets/external';

console.log(polkadot);
`;

  return <SimpleEditor code={code} standalone />;
};
