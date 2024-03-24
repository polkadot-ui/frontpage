/* @license Copyright 2024 @polkadot-ui/frontpage authors & contributors
SPDX-License-Identifier: MIT */

import { Polkicon } from "@polkadot-ui/react";
import { SimpleEditor } from "../../lib/SimpleEditor";
import { Demo } from "../../lib/Demo";

export const PolkiconCopyMsg = () => {
  const code = `<Polkicon size="9rem" copy copyMsg="Copied" address="5EFJZfqfmDZktdFfKUJa3kCrJZrzXUP1tkyN5RNtQ1uqZwtY" />
<Polkicon size="5rem" copy copyMsg="😁" address="5EFJZfqfmDZktdFfKUJa3kCrJZrzXUP1tkyN5RNtQ1uqZwtY" />
<Polkicon size="15rem" copy copyMsg={<div>This is a tag</div>} address="5EFJZfqfmDZktdFfKUJa3kCrJZrzXUP1tkyN5RNtQ1uqZwtY" />
`;

  return (
    <>
      <Demo showThemes={false} centered>
        <div className="svg-box lg">
          <Polkicon
            size="9rem"
            copy
            copyMsg="Copied"
            address="5EFJZfqfmDZktdFfKUJa3kCrJZrzXUP1tkyN5RNtQ1uqZwtY"
          />
        </div>
        <div className="svg-box sm">
          <Polkicon
            size="5rem"
            copy
            copyMsg="😁"
            address="5EFJZfqfmDZktdFfKUJa3kCrJZrzXUP1tkyN5RNtQ1uqZwtY"
          />
        </div>
        <div className="svg-box lg">
          <Polkicon
            size="15rem"
            copy
            copyMsg={<div>This is a tag</div>}
            address="5EFJZfqfmDZktdFfKUJa3kCrJZrzXUP1tkyN5RNtQ1uqZwtY"
          />
        </div>
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
