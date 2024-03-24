/* @license Copyright 2024 @polkadot-ui/frontpage authors & contributors
SPDX-License-Identifier: MIT */

import {
  AccountCard,
  EllipsisProps,
  ExtraComponentProps,
  IconProps,
  TitleProps,
  Grid,
} from "@polkadot-ui/react";
import { HPosition } from "@polkadot-ui/react/utils/types";
import { useState } from "react";

export const AccountCardPageShowcase = () => {
  const [isName, setIsName] = useState<boolean>(true);
  const [isLeft, setIsLeft] = useState<boolean>(true);
  const [hasEllipsis, setHasEllipsis] = useState<boolean>(false);

  const titleProps: TitleProps = isName
    ? {
        address: "1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73",
        name: "My Polkadot Account's name",
        justify: "flex-start",
      }
    : {
        address: "1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73",
        justify: "flex-start",
      };

  const ellipsisProps: EllipsisProps = {
    active: hasEllipsis,
    amount: 3,
    position: "center" as HPosition,
  };

  const iconProps: IconProps = {
    size: 30,
    gridSize: 1,
    justify: "space-around",
    copy: true,
  };

  const extraComponentProps: ExtraComponentProps = {
    component: (
      <h5
        style={
          isLeft
            ? {
                borderRight: "0.1rem solid var(--border-secondary-color)",
                padding: "0 4rem",
              }
            : {
                borderLeft: "0.1rem solid var(--border-secondary-color)",
                padding: "0 4rem",
              }
        }
      >
        Xtra Txt
      </h5>
    ),
    gridSize: 3,
    justify: "space-around",
    position: (isLeft ? "left" : "right") as HPosition,
  };

  return (
    <>
      <Grid row>
        <Grid column sm={2}></Grid>
        <Grid column sm={8}>
          <AccountCard
            fontSize="small"
            icon={iconProps}
            ellipsis={ellipsisProps}
            title={titleProps}
            extraComponent={extraComponentProps}
          />
        </Grid>
      </Grid>
      <Grid row style={{ margin: "2rem 0" }}>
        <Grid column sm={3}></Grid>
        <Grid column sm={2}>
          <button
            onClick={() => setIsName(!isName)}
            style={{
              padding: "0.2rem 1rem",
              border: "0.1rem solid #ccc",
              borderRadius: "0.5rem",
            }}
          >
            Swap {isName ? "address" : "name"}
          </button>
        </Grid>
        <Grid column sm={2}>
          <button
            onClick={() => setIsLeft(!isLeft)}
            style={{
              padding: "0.2rem 1rem",
              border: "0.1rem solid #ccc",
              borderRadius: "0.5rem",
            }}
          >
            Swamp Comps
          </button>
        </Grid>
        <Grid column sm={2}>
          <button
            onClick={() => setHasEllipsis(!hasEllipsis)}
            style={{
              padding: "0.2rem 1rem",
              border: "0.1rem solid #ccc",
              borderRadius: "0.5rem",
            }}
          >
            Turn ellipsis {hasEllipsis ? "off" : "on"}
          </button>
        </Grid>
        <Grid column sm={3}></Grid>
      </Grid>
    </>
  );
};
