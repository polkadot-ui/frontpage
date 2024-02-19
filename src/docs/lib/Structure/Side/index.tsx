// Copyright 2024 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: MIT

import { appendOrEmpty } from "@polkadot-ui/utils";
import type { CSSProperties } from "react";
import { ComponentBase } from "@polkadot-ui/react/types";

export type SideProps = ComponentBase & {
  // whether the side menu should be open on smaller screens.
  open: boolean;
  // whether side menu is in minimised state.
  minimised: boolean;
  // optional width property to be applied to maximised side.
  width?: string | number;
};

/**
 * @name Side
 * @summary An element that houses the side menu and transitions to a toggle-able fixed overlay
 * on smaller screens.
 * @summary Handles maximised and minimised transitions.
 */
export const Side = ({
  children,
  style,
  open,
  minimised,
  width = "20rem",
}: SideProps) => {
  const vars = { "--core-side-width": width } as CSSProperties;

  return (
    <div
      style={{ ...vars, ...style }}
      className={`core-side${appendOrEmpty(!open, "hidden")}${appendOrEmpty(
        minimised,
        "minimised"
      )}`}
    >
      {children}
    </div>
  );
};
