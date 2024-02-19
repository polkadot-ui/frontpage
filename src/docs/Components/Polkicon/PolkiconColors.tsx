/* @license Copyright 2024 @polkadot-ui/frontpage authors & contributors
SPDX-License-Identifier: MIT */

import { Polkicon } from "@polkadot-ui/react/icons/Polkicon";
import { SimpleEditor } from "../../lib/SimpleEditor";
import { Demo } from "../../lib/Demo";

export const PolkiconColors = () => {
  const code = `<Polkicon size="5rem" address="5EFJZfqfmDZktdFfKUJa3kCrJZrzXUP1tkyN5RNtQ1uqZwtY" colors={["blue", "yellow", "black", "pink", "brown"]} />
<Polkicon size="5rem" address="5EFJZfqfmDZktdFfKUJa3kCrJZrzXUP1tkyN5RNtQ1uqZwtY" colors={["blue", "yellow"]} />
/// If address has a non-valid format, then a "deactivate" Polkicon will appear;
<Polkicon size="5rem" address="111111111111111111111111111111111111111111111111" colors={["blue", "pink", "white", "yellow"]} />
`;

  return (
    <>
      <Demo showThemes={false} centered>
        <div className="svg-box sm">
          <Polkicon
            size="5rem"
            address="5EFJZfqfmDZktdFfKUJa3kCrJZrzXUP1tkyN5RNtQ1uqZwtY"
            colors={["blue", "yellow", "black", "pink", "brown"]}
          />
        </div>
        <div className="svg-box sm">
          <Polkicon
            size="5rem"
            address="5EFJZfqfmDZktdFfKUJa3kCrJZrzXUP1tkyN5RNtQ1uqZwtY"
            colors={["blue", "yellow"]}
          />
        </div>
        <div className="svg-box sm">
          <Polkicon
            size="5rem"
            address="111111111111111111111111111111111111111111111111"
            colors={["blue", "pink", "white", "yellow"]}
          />
        </div>
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
