/* @license Copyright 2024 @polkadot-ui/frontpage authors & contributors
SPDX-License-Identifier: MIT */

import { Chart } from "@polkadot-ui/react/base/structure/Chart";
import { SimpleEditor } from "../../lib/SimpleEditor";
import { Demo } from "../../lib/Demo";

export const PieSimple = () => {
  const code = `<Chart diameter={75}
  items={[
    { value: 60, color: "red" },
    { value: 200, color: "var(--background-default)" },
  ]}
/>
<Chart diameter={75}
  items={[
    { value: 200, color: "var(--accent-color-primary)" },
    { value: 0, color: "var(--background-default)" },
  ]}
/>
<Chart
  diameter={75}
  items={[
    { value: 0, color: "var(--accent-color-primary)" },
    { value: 200, color: "var(--background-default)" },
  ]}
/>`;

  return (
    <>
      <Demo>
        <div className="svg-box wide">
          <Chart
            diameter={75}
            items={[
              { value: 60, color: "var(--accent-color-primary)" },
              { value: 200, color: "var(--background-default)" },
            ]}
          />
        </div>
        <div className="svg-box wide">
          <Chart
            diameter={75}
            items={[
              { value: 200, color: "var(--accent-color-primary)" },
              { value: 0, color: "var(--background-default)" },
            ]}
          />
        </div>
        <div className="svg-box wide">
          <Chart
            diameter={75}
            items={[
              { value: 0, color: "var(--accent-color-primary)" },
              { value: 200, color: "var(--background-default)" },
            ]}
          />
        </div>
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
