/* @license Copyright 2024 @polkadot-ui/frontpage authors & contributors
SPDX-License-Identifier: MIT */

import { Demo } from "../../lib/Demo";
import { SimpleEditor } from "../../lib/SimpleEditor";
import { Grid } from "@polkadot-ui/react/base/structure/Grid";

export const GridOneThree = () => {
  const code = `<Grid row>
  <Grid column sm={12} md={6}>1/2</Grid>
  <Grid column sm={12} md={3}>1/4</Grid>
  <Grid column sm={12} md={3}>1/4</Grid>
</Grid>`;

  const separatorStyle = {
    border: "0.1rem dashed var(--border-secondary-color)",
    padding: "0.5rem",
    TextAlign: "center",
  };

  return (
    <>
      <Demo showThemes={false}>
        <Grid row style={separatorStyle}>
          <Grid style={separatorStyle} column sm={12} md={6}>
            <h5>1/2</h5>
          </Grid>
          <Grid style={separatorStyle} column sm={12} md={3}>
            <h5>1/4</h5>
          </Grid>
          <Grid style={separatorStyle} column sm={12} md={3}>
            <h5>1/4</h5>
          </Grid>
        </Grid>
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
