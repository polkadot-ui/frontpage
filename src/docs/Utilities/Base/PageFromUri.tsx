/* @license Copyright 2024 @polkadot-ui/frontpage authors & contributors
SPDX-License-Identifier: MIT */

import { SimpleEditor } from "../../lib/SimpleEditor";

export const PageFromUri = () => {
  const code = `pageFromUri("/products/detail", "home") // detail

// attention on the extra space at the end of the pathname
pageFromUri("/products/detail ", "home") // detail
pageFromUri("", "home"); // home
pageFromUri("/categories/", "home") // home
pageFromUri("/about us", "home") // about us
pageFromUri("/products/detail#section, "home") // detail#section`;

  return <SimpleEditor code={code} standalone />;
};
