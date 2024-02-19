/* @license Copyright 2024 @polkadot-ui/frontpage authors & contributors
SPDX-License-Identifier: MIT */

import { SimpleEditor } from "../../lib/SimpleEditor";

export const RmCommas = () => {
  const code = `const inputValue = "1,000,000";
const result = fn.rmCommas(inputValue); // 1000000`;

  return <SimpleEditor code={code} standalone />;
};
