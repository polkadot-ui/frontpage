/* @license Copyright 2024 @polkadot-ui/frontpage authors & contributors
SPDX-License-Identifier: MIT */

import { Loader } from "@polkadot-ui/react/loaders/Loader";
import { SimpleEditor } from "../../lib/SimpleEditor";
import { Demo } from "../../lib/Demo";

export const LoaderLine = () => {
  const code = `<Loader type="line" text="loading..." />
{/* or (line is the default loader setting) */}
<Loader text="loading..." />`;

  const codeOptional = `{/* Optional text field */}
<Loader type="line" />`;
  return (
    <>
      <Demo>
        <Loader type="line" text="loading..." />
      </Demo>
      <SimpleEditor code={code} />
      <Demo>
        <Loader type="line" />
      </Demo>
      <SimpleEditor code={codeOptional} />
    </>
  );
};
