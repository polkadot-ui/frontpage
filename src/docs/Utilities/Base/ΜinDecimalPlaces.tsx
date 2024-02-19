/* @license Copyright 2024 @polkadot-ui/frontpage authors & contributors
SPDX-License-Identifier: MIT */

import { SimpleEditor } from "../../lib/SimpleEditor";

export const MinDecimalPlaces = () => {
  const code = `const val = "10.5";
const minDecimals = 4;
fn.minDecimalPlaces(val, minDecimals);// 10.5000`;

  return <SimpleEditor code={code} standalone />;
};
