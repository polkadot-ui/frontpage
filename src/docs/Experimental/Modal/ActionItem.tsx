/* @license Copyright 2024 @polkadot-ui/frontpage authors & contributors
SPDX-License-Identifier: MIT */

import { ActionItem } from "@polkadot-ui/react/base/modal/ActionItem";
import { SimpleEditor } from "../../lib/SimpleEditor";
import { Demo } from "../../lib/Demo";

export const ActionItemStatic = () => {
  const code = `<ActionItem text="Some Action" />`;

  return (
    <>
      <Demo showThemes={false}>
        <ActionItem text="Some Action" />
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
