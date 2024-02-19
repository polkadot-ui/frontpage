/* @license Copyright 2024 @polkadot-ui/frontpage authors & contributors
SPDX-License-Identifier: MIT */

import { SimpleEditor } from "../../lib/SimpleEditor";

export const InstallReactCore = () => {
  const code = `yarn add @polkadot-ui/core @polkadot-ui/react`;

  return <SimpleEditor code={code} standalone />;
};
