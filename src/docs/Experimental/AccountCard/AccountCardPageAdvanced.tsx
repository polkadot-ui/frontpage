import { AccountCard, IconProps, Grid } from "@polkadot-ui/react";
import { SimpleEditor } from "../../lib/SimpleEditor";
import { Demo } from "../../lib/Demo";

export const AccountCardPageAdvanced = () => {
  const code = `import { AccountCard, IconProps, } from "@polkadot-ui/react";
...
const iconProps: IconProps = {
  copy: false,
  position: "right",
  gridSize: 3,
  justify: "space-around",
};
...
return (
  <AccountCard style={{ padding: "1rem" }} icon={iconProps} title={{ address: "1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73" }} ellipsis={{ active: true, amount: 10, position: "center" }} />
);`;

  const iconProps: IconProps = {
    copy: false,
    position: "right",
    gridSize: 3,
    justify: "space-around",
    address: "1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73",
  };

  return (
    <>
      <Demo showThemes={false}>
        <Grid row>
          <Grid column sm={4}></Grid>
          <Grid column sm={4}>
            <AccountCard
              style={{ padding: "1rem" }}
              icon={iconProps}
              title={{
                address: "1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73",
              }}
              ellipsis={{ active: true, amount: 10, position: "center" }}
            />
          </Grid>
          <Grid column sm={4}></Grid>
        </Grid>
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
