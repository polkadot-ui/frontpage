/* @license Copyright 2024 @polkadot-ui/frontpage authors & contributors
SPDX-License-Identifier: MIT */

import { ReactElement } from "react";

export interface Props {
  title: string;
  description: string;
  params: string[];
  component: ReactElement;
}
