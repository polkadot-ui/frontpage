/* @license Copyright 2024 @polkadot-ui/frontpage authors & contributors
SPDX-License-Identifier: MIT */

import { Card } from "@polkadot-ui/react/base/structure/Card";
import { SimpleEditor } from "../../lib/SimpleEditor";
import { Demo } from "../../lib/Demo";

export const CardMono = () => {
  const code = `<Card>
  <h5>Just a card</h5>
</Card>`;

  return (
    <>
      <Demo showThemes={false}>
        <Card>
          <h5>Just a card</h5>
        </Card>
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
