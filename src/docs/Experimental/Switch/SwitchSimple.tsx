/* @license Copyright 2024 @polkadot-ui/frontpage authors & contributors
SPDX-License-Identifier: MIT */

import { Switch } from "@polkadot-ui/react/base/inputs/Switch";
import { SimpleEditor } from "../../lib/SimpleEditor";

export const SwitchSimple = () => {
  const code = `<Switch isOn={true} handleToggle={() => console.log("Switch clicked")} />
<Switch isOn={false} handleToggle={() => console.log("Switch clicked")} />
<Switch isOn={true} disabled />
<Switch isOn={false} disabled />`;

  return (
    <>
      <div className="demo">
        <div style={{ padding: "0 5px" }}>
          <Switch
            isOn={true}
            handleToggle={() => console.log("Switch clicked")}
          />
        </div>
        <div style={{ padding: "0 5px" }}>
          <Switch
            isOn={false}
            handleToggle={() => console.log("Switch clicked")}
          />
        </div>
        <div style={{ padding: "0 5px" }}>
          <Switch isOn={true} disabled />
        </div>
        <div style={{ padding: "0 5px" }}>
          <Switch isOn={false} disabled />
        </div>
      </div>
      <SimpleEditor code={code} />
    </>
  );
};
