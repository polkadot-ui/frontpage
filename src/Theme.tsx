// Copyright 2024 @polkadot-ui/frontpage authors & contributors
// SPDX-License-Identifier: MIT

import { Router } from "./Router";

// App-wide theme classes are inserted here.
//
// App-specific theming is added to `ThemeProvider`.
// `@polkadot-ui/react` themes are added to `Entry`.
export const Theme = () => {
  // NOTE: theme not currently in use. Defaulting to light mode.
  // const { mode } = useTheme();

  return (
    <div className={`main theme-ui ui-theme-${"light"}`}>
      <Router />
    </div>
  );
};
