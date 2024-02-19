/* @license Copyright 2024 @polkadot-ui/frontpage authors & contributors
SPDX-License-Identifier: MIT */

import { BrowserRouter } from "react-router-dom";
import { Providers } from "./Providers";

export const App = () => {
  return (
    <BrowserRouter basename="/">
      <Providers />
    </BrowserRouter>
  );
};
