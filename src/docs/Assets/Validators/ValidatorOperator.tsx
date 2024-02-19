/* @license Copyright 2024 @polkadot-ui/frontpage authors & contributors
SPDX-License-Identifier: MIT */

import { SimpleEditor } from "../../lib/SimpleEditor";

export const ValidatorOperator = () => {
  const code = `// Import validator community object.

import { ValidatorCommunity } from '@polkadot-ui/assets/validators';`;

  return <SimpleEditor code={code} standalone />;
};
