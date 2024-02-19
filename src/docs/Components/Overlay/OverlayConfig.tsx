/* @license Copyright 2024 @polkadot-ui/frontpage authors & contributors
SPDX-License-Identifier: MIT */

import { SimpleEditor } from "../../lib/SimpleEditor";

export const OverlayConfig = () => {
  const code = `const { options } = useOverlay().modal.config;
const { myVal } = options;

console.log(myVal);
>> 'value'`;

  return <SimpleEditor code={code} standalone />;
};
