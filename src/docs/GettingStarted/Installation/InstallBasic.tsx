/* @license Copyright 2024 @polkadot-ui/frontpage authors & contributors
SPDX-License-Identifier: MIT */

import { SimpleEditor } from "../../lib/SimpleEditor";

export const InstallBasic = () => {
  const code = `yarn add @polkadot-ui/core @polkadot-ui/assets @polkadot-ui/utils`;

  return <SimpleEditor code={code} standalone />;
};
