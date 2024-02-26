/* @license Copyright 2024 @polkadot-ui/frontpage authors & contributors
SPDX-License-Identifier: MIT */

import { AccountCard } from "@polkadot-ui/react/complex/AccountCard";
import { Grid } from "@polkadot-ui/react/base/structure/Grid";
import { SimpleEditor } from "../../lib/SimpleEditor";
import { Demo } from "../../lib/Demo";

export const AccountCardPageAdvancedEllipsisExtreme = () => {
  const code = `
import { AccountCard, IconProps } from "@polkadot-ui/react/complex/AccountCard";
...

return (
  <AccountCard style={{ padding: "1rem" }} title={{ address: "1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73" }} ellipsis={{ active: true, amount:500, position: "center" }} />
)`;

  return (
    <>
      <Demo showThemes={false}>
        <Grid row>
          <Grid column>
            <AccountCard
              style={{ padding: "1rem" }}
              title={{
                address: "1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73",
              }}
              ellipsis={{ active: true, amount: 500, position: "center" }}
            />
          </Grid>
        </Grid>
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
