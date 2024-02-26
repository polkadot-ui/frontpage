/* @license Copyright 2024 @polkadot-ui/frontpage authors & contributors
SPDX-License-Identifier: MIT */

import { Loader } from "@polkadot-ui/react/loaders/Loader";
import { SimpleEditor } from "../../lib/SimpleEditor";
import { Demo } from "../../lib/Demo";

export const LoaderDots = () => {
  const code = `<Loader type="dots" />`;

  return (
    <>
      <Demo>
        <Loader type="dots" />
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
