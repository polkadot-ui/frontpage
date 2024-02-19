/* @license Copyright 2024 @polkadot-ui/frontpage authors & contributors
SPDX-License-Identifier: MIT */

import { SimpleEditor } from "../../lib/SimpleEditor";

export const UnitToPlanck = () => {
  const code = `const inputValue = "10";
const units = 6;
fn.unitToPlanck(inputValue, units); // 10000000`;

  return <SimpleEditor code={code} standalone />;
};
