/* @license Copyright 2024 @polkadot-ui/frontpage authors & contributors
SPDX-License-Identifier: MIT */

import { SimpleEditor } from "../../../lib/SimpleEditor";

export const HookExample = () => {
  const code = `import { useExtensions } from '@polkadot-ui/react/hooks';

const App = () => {
  const { extensions } = useExtensions();
  ...
}`;

  return <SimpleEditor code={code} standalone />;
};
