// Copyright 2024 @polkadot-ui/frontpage authors & contributors
// SPDX-License-Identifier: MIT

import { ComponentBase } from "@polkadot-ui/react/types";

/**
 * @name Body
 * @summary An element that houses Side and Main.
 */
export const Body = ({ children, style }: ComponentBase) => (
  <div className="core-body" style={style}>
    {children}
  </div>
);
