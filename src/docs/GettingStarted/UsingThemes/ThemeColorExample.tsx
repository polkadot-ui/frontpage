/* @license Copyright 2024 @polkadot-ui/frontpage authors & contributors
SPDX-License-Identifier: MIT */

import { SimpleEditor } from "../../lib/SimpleEditor";

export const ThemeColorExample = () => {
  const code = `.theme-light {
 --accent-color-primary: var(--accent-color-primary-light);
}
.theme-dark {
 --accent-color-primary: var(--accent-color-primary-dark);
}`;

  return <SimpleEditor code={code} language="css" standalone />;
};
