/* @license Copyright 2024 @polkadot-ui/frontpage authors & contributors
SPDX-License-Identifier: MIT */

import { SimpleEditor } from "../../lib/SimpleEditor";

export const GreaterThanZero = () => {
  const code = `greaterThanZero(new BigNumber("10")) // true
greaterThanZero(new BigNumber("0")) // false
greaterThanZero(new BigNumber("-5")) // false
greaterThanZero(new BigNumber("999999999999999999999999999")) // true
greaterThanZero(new BigNumber("-999999999999999999999999999")) // false`;

  return <SimpleEditor code={code} standalone />;
};
