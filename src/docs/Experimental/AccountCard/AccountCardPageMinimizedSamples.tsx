import {
  AccountCard,
  EllipsisProps,
  ExtraComponentProps,
  IconProps,
  TitleProps,
  Grid,
} from "@polkadot-ui/react";
import { SimpleEditor } from "../../lib/SimpleEditor";
import { HPosition } from "@polkadot-ui/react/utils/types";
import { Demo } from "../../lib/Demo";

export const AccountCardPageMinimizedSamples = () => {
  const commonCode = `const titleProps: TitleProps = {
  address: "1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73",
  name: "The name of the account",
  justify: "flex-start",
};

const ellipsisProps: EllipsisProps = {
  active: true,
  amount: 7,
};

const iconProps: IconProps = {
  size: 20,
  gridSize: 3,
  justify: "space-around",
};

const extraComponentProps: ExtraComponentProps = {
  component: (
    <div
      style={{
        borderRight: "0.1rem solid white",
        padding: "0 2rem",
        color: "white",
      }}
    >
      Nominating
    </div>
  ),
  gridSize: 4,
  justify: "space-around",
};`;

  const code = `<Grid row>
  <Grid column sm={3}></Grid>
  <Grid column sm={6}>
    <AccountCard
      fontSize="x-small"
      icon={iconProps}
      ellipsis={ellipsisProps}
      title={titleProps}
      extraComponent={extraComponentProps}
    />
  </Grid>
  <Grid column sm={3}></Grid>
</Grid>`;

  const codeNoCard = `<Grid row>
  <Grid column sm={3}></Grid>
  <Grid column sm={6}>
    <AccountCard
      noCard // the only diff from the code above
      fontSize="x-small"
      icon={iconProps}
      ellipsis={ellipsisProps}
      title={titleProps}
      extraComponent={extraComponentProps}
    />
  </Grid>
  <Grid column sm={3}></Grid>
</Grid>`;

  const titleProps: TitleProps = {
    address: "1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73",
    name: "The name of the account",
    justify: "flex-start",
  };

  const ellipsisProps: EllipsisProps = {
    active: true,
    amount: 20,
    position: "center" as HPosition,
  };

  const iconProps: IconProps = {
    size: 20,
    gridSize: 1,
    justify: "flex-start",
    address: "1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73",
  };

  const extraComponentProps: ExtraComponentProps = {
    component: (
      <h5
        style={{
          borderRight: "0.1rem solid var(--border-secondary-color)",
          padding: "0 2rem",
        }}
      >
        Nominating
      </h5>
    ),
    gridSize: 4,
    justify: "flex-start",
  };

  return (
    <>
      <SimpleEditor code={commonCode} standalone />
      <Demo showThemes={false}>
        <Grid row>
          <Grid column sm={3}></Grid>
          <Grid column sm={6}>
            <AccountCard
              fontSize="x-small"
              icon={iconProps}
              ellipsis={ellipsisProps}
              title={titleProps}
              extraComponent={extraComponentProps}
            />
          </Grid>
          <Grid column sm={3}></Grid>
        </Grid>
      </Demo>
      <SimpleEditor code={code} />

      <h4>Without the Card component</h4>
      <Demo showThemes={false}>
        <Grid row>
          <Grid column sm={3}></Grid>
          <Grid column sm={6}>
            <AccountCard
              noCard
              fontSize="x-small"
              icon={iconProps}
              ellipsis={ellipsisProps}
              title={titleProps}
              extraComponent={extraComponentProps}
            />
          </Grid>
          <Grid column sm={3}></Grid>
        </Grid>
      </Demo>
      <SimpleEditor code={codeNoCard} />
    </>
  );
};
