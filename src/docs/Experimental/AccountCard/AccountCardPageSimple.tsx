/* @license Copyright 2024 @polkadot-ui/frontpage authors & contributors
SPDX-License-Identifier: MIT */

import { AccountCard, IconProps } from "@polkadot-ui/react/complex/AccountCard";
import { SimpleEditor } from "../../lib/SimpleEditor";
import { Switch } from "@polkadot-ui/react/base/inputs/Switch";
import { Demo } from "../../lib/Demo";

export const AccountCardPageSimple = () => {
  const code = `
import { AccountCard, IconProps } from "@polkadot-ui/react/AccountCard";
...
const iconProps: IconProps = {}; // or { position = "left" }; <- "left" is the default option
...
return (
  <AccountCard style={{ padding: "1rem" }} icon={iconProps} title={{ address: "1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73" }} extraComponent={{ component: <Switch />, position: "right" }} />
);`;

  const iconProps: IconProps = {
    position: "left",
  };

  return (
    <>
      <Demo showThemes={false}>
        <AccountCard
          style={{ padding: "1rem" }}
          icon={iconProps}
          title={{ address: "1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73" }}
          extraComponent={{
            component: <Switch />,
            position: "right",
          }}
        />
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
