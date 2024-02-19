/* @license Copyright 2024 @polkadot-ui/frontpage authors & contributors
SPDX-License-Identifier: MIT */

import { SimpleEditor } from "../../lib/SimpleEditor";

export const Shuffle = () => {
  const code = `shuffle([1, 2, 3, 4, 5]) // [2, 5, 1, 3, 4] (or some other shuffled result)
shuffle([]) // []
shuffle([42]) // [42]`;

  return <SimpleEditor code={code} standalone />;
};
