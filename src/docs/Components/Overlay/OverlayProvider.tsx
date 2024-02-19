/* @license Copyright 2024 @polkadot-ui/frontpage authors & contributors
SPDX-License-Identifier: MIT */

import { SimpleEditor } from "../../lib/SimpleEditor";

export const OverlayProvider = () => {
  const code = `import { OverlayProvider } from '@polkadot-ui/react/providers';

const AppWithProvider = () => (
  <OverlayProvider>
    <App />
  </OverlayProvider>
);`;

  return <SimpleEditor code={code} standalone />;
};
