/* @license Copyright 2023 @polkadot-cloud/app authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { SimpleEditor } from "../../lib/SimpleEditor";

export const InstallBasic = () => {
  const code = `yarn add @polkadot-cloud/core @polkadot-cloud/assets @polkadot-cloud/utils`;

  return <SimpleEditor code={code} standalone />;
};
