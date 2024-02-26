/* @license Copyright 2024 @polkadot-ui/frontpage authors & contributors
SPDX-License-Identifier: MIT */

import { AccountCard, IconProps } from "@polkadot-ui/react/complex/AccountCard";
import { SimpleEditor } from "../../lib/SimpleEditor";
import { Demo } from "../../lib/Demo";

export const AccountCardPageAdvancedVariousIconChanges = () => {
  const codeF = `import { AccountCard, IconProps, ExtraComponentProps } from "@polkadot-ui/react/complex/AccountCard";
...

const iconProps: IconProps = {
  size: 40,
  gridSize: 1,
  justify: "flex-start",
  dark: false,
  colors: ["blue", "green"],
  outerColor: "yellow",
};

<AccountCard
  style={{ padding: "1rem" }}
  fontSize="medium"
  icon={iconProps}
  title={{
    address: "1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73",
  }}
/>`;

  const iconProps: IconProps = {
    size: 40,
    gridSize: 1,
    justify: "flex-start",
    dark: false,
    colors: ["blue", "green"],
    outerColor: "yellow",
  };

  return (
    <>
      <Demo showThemes={false}>
        <AccountCard
          style={{ padding: "1rem" }}
          fontSize="medium"
          icon={iconProps}
          title={{
            address: "1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73",
          }}
        />
      </Demo>
      <SimpleEditor code={codeF} />
    </>
  );
};
