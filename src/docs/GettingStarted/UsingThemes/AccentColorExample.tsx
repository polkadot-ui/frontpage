/* @license Copyright 2024 @polkadot-ui/frontpage authors & contributors
SPDX-License-Identifier: MIT */

import { SimpleEditor } from "../../lib/SimpleEditor";

export const AccentColorExample = () => {
  const code = `.theme-my-identity {
 --accent-color-primary-light: #4d3091;
 --accent-color-primary-dark: #8e73b6;
}`;

  return <SimpleEditor code={code} language="css" standalone />;
};
