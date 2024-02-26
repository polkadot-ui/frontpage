/* @license Copyright 2024 @polkadot-ui/frontpage authors & contributors
SPDX-License-Identifier: MIT */

import { AccountCard, IconProps } from "@polkadot-ui/react/complex/AccountCard";
import { SimpleEditor } from "../../lib/SimpleEditor";
import { Demo } from "../../lib/Demo";

export const AccountCardPageSimpleMoreProps = () => {
  const code = `
import { AccountCard, IconProps } from "@polkadot-ui/react/complex/AccountCard";
...
const iconProps: IconProps = {
  copy: true,
  position: "right",
  size: 3,
  justify: "space-around",
};
...
return (
  <AccountCard style={{ padding: "1rem" }} icon={iconProps} title={{ address: "1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73" }} />
);`;

  const iconProps: IconProps = {
    copy: true,
    position: "right",
    gridSize: 3,
    justify: "space-around",
  };

  return (
    <>
      <Demo showThemes={false}>
        <AccountCard
          style={{ padding: "1rem" }}
          icon={iconProps}
          title={{ address: "1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73" }}
        />
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
