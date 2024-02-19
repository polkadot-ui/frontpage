/* @license Copyright 2024 @polkadot-ui/frontpage authors & contributors
SPDX-License-Identifier: MIT */

import { SimpleEditor } from "../../lib/SimpleEditor";

export const Camelize = () => {
  const code = `camelize("hello_world") // helloWorld
camelize("hello world") // helloWorld
camelize("  leadingWhitespace") // leadingWhitespace
camelize("   multiple   spaces   ") // multipleSpaces

// But:
camelize(HeLLo WoRLD) // heLLoWoRld 
// This is due to the fact that Capital letters identify as "beginning of a word")`;

  return <SimpleEditor code={code} standalone />;
};
