/* @license Copyright 2024 @polkadot-ui/frontpage authors & contributors
SPDX-License-Identifier: MIT */

import { AccountCard } from "@polkadot-ui/react/complex/AccountCard";
import { SimpleEditor } from "../../lib/SimpleEditor";
import { Demo } from "../../lib/Demo";

export const AccountCardPageSimpleNoIcon = () => {
  const code = `
import { AccountCard } from "@polkadot-ui/react/complex/AccountCard";
...
return (
  <AccountCard style={{ padding: "1rem" }} title={{ address: "1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73" }} />
);`;

  return (
    <>
      <Demo showThemes={false}>
        <AccountCard
          style={{ padding: "1rem" }}
          title={{ address: "1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73" }}
        />
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
