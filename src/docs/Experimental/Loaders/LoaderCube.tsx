/* @license Copyright 2024 @polkadot-ui/frontpage authors & contributors
SPDX-License-Identifier: MIT */

import { Loader } from "@polkadot-ui/react/loaders/Loader";
import { SimpleEditor } from "../../lib/SimpleEditor";
import { Demo } from "../../lib/Demo";

export const LoaderCube = () => {
  const code = `<Loader type="cube" />`;

  return (
    <>
      <Demo>
        <div style={{ margin: "4rem 0 2rem 0" }}>
          <Loader type="cube" />
        </div>
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
