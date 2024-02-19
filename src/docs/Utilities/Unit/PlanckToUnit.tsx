/* @license Copyright 2024 @polkadot-ui/frontpage authors & contributors
SPDX-License-Identifier: MIT */

import { SimpleEditor } from "../../lib/SimpleEditor";

export const PlanckToUnit = () => {
  const code = `const inputValue = new BigNumber("10000000");
const units = 6;
fn.planckToUnit(inputValue, units); // 10.000000`;

  return <SimpleEditor code={code} standalone />;
};
