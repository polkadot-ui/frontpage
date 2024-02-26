/* @license Copyright 2024 @polkadot-ui/frontpage authors & contributors
SPDX-License-Identifier: MIT */

import {
  AccountCard,
  ExtraComponentProps,
  IconProps,
} from "@polkadot-ui/react/complex/AccountCard";
import { Button } from "@polkadot-ui/react"
import { SimpleEditor } from "../../lib/SimpleEditor";
import { Demo } from "../../lib/Demo";

export const AccountCardPageAdvancedExtraComponentDiff = () => {
  const code = `import { AccountCard, IconProps, ExtraComponentProps } from "@polkadot-ui/react/complex/AccountCard";
...

const iconProps: IconProps = {
  copy: false,
  position: "right",
  gridSize: 2,
  justify: "space-around",
};

const extraComponentProps: ExtraComponentProps = {
  component: (
    <Button
      type="monoInvert"
      text="log"
      marginRight
      onClick={() =>
        console.log("1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73")
      }
    />
  ),
  gridSize: 1,
  justify: "space-around",
};
...
return (
  <AccountCard style={{ padding: "1rem" }} icon={iconProps} title={{ address: "1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73" }} extraComponent={extraComponentProps} />
)`;

  const iconProps: IconProps = {
    position: "right",
    gridSize: 2,
    justify: "space-around",
  };

  const extraComponentProps: ExtraComponentProps = {
    component: (
      <Button
        type="monoInvert"
        text="log"
        marginRight
        onClick={() =>
          console.log("1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73")
        }
      />
    ),
    gridSize: 1,
    justify: "space-around",
  };

  return (
    <>
      <Demo showThemes={false}>
        <AccountCard
          style={{ padding: "1rem" }}
          icon={iconProps}
          title={{
            address: "1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73",
          }}
          extraComponent={extraComponentProps}
        />
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
