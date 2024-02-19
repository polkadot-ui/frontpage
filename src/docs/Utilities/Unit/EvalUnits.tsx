/* @license Copyright 2024 @polkadot-ui/frontpage authors & contributors
SPDX-License-Identifier: MIT */

import { SimpleEditor } from "../../lib/SimpleEditor";

export const EvalUnits = () => {
  const code = `evalUnits("666", 9) // 666000000000
evalUnits("1.23", 9) // 1230000000
evalUnits("1,23", 9) // 1230000000
evalUnits("1k", 9) // 1000000000000
evalUnits("1.2k", 9) // 1200000000000
evalUnits("1,2k", 9) // 1200000000000
evalUnits("1.2m", 9) // 1200000
evalUnits("0.002μ", 9) // 2
13000000f", 9) // 13

// Not so happy paths
evalUnits("good23", 9) // "Input is not correct. Use numbers, floats or expression (e.g. 1k, 1.3m)"
evalUnits("1,23.445k") // "Input is not correct. Use numbers, floats or expression (e.g. 1k, 1.3m)"`;

  return <SimpleEditor code={code} standalone />;
};
