/* @license Copyright 2024 @polkadot-ui/frontpage authors & contributors
SPDX-License-Identifier: MIT */

import { Chart } from "@polkadot-ui/react";
import { SimpleEditor } from "../../lib/SimpleEditor";
import { Demo } from "../../lib/Demo";

export const PieDead = () => {
  const code = `// "Dead" Pie example - when all values provided sum to 0.
<Chart
  diameter={75}
  items={[
    { value: 0, color: "var(--accent-color-primary)" },
    { value: 0, color: "var(--background-default)" },
  ]}
/>`;

  return (
    <>
      <Demo showThemes={false}>
        <div className="svg-box">
          <Chart
            diameter={75}
            items={[
              { value: 0, color: "var(--accent-color-primary)" },
              { value: 0, color: "var(--background-default)" },
            ]}
          />
        </div>
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
