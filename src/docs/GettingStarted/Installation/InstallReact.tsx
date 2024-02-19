/* @license Copyright 2024 @polkadot-ui/frontpage authors & contributors
SPDX-License-Identifier: MIT */

import { SimpleEditor } from "../../lib/SimpleEditor";

export const InstallReact = () => {
  const code = `yarn add @polkadot-ui/react`;

  return <SimpleEditor code={code} standalone />;
};
