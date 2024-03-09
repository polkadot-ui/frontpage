/* @license Copyright 2024 @polkadot-ui/frontpage authors & contributors
SPDX-License-Identifier: MIT */

import { HashRouter } from "react-router-dom";
import { Providers } from "./Providers";

export const App = () => {
  return (
    <HashRouter basename="/">
      <Providers />
    </HashRouter>
  );
};
