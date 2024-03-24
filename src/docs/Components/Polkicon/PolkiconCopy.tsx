/* @license Copyright 2024 @polkadot-ui/frontpage authors & contributors
SPDX-License-Identifier: MIT */

import { Polkicon } from "@polkadot-ui/react";
import { SimpleEditor } from "../../lib/SimpleEditor";
import { Demo } from "../../lib/Demo";

export const PolkiconCopy = () => {
  const code = `<Polkicon copy size="2rem" address="5EFJZfqfmDZktdFfKUJa3kCrJZrzXUP1tkyN5RNtQ1uqZwtY" copyTimeout={300} />
<Polkicon copy size="5rem" address="5EFJZfqfmDZktdFfKUJa3kCrJZrzXUP1tkyN5RNtQ1uqZwtY" />
<Polkicon copy size="7rem" address="5EFJZfqfmDZktdFfKUJa3kCrJZrzXUP1tkyN5RNtQ1uqZwtY" copyTimeout={2000} />
<Polkicon copy size="15rem" address="5EFJZfqfmDZktdFfKUJa3kCrJZrzXUP1tkyN5RNtQ1uqZwtY" copyTimeout={10000} />`;

  return (
    <>
      <Demo showThemes={false} centered>
        <div className="svg-box">
          <Polkicon
            copy
            size="2rem"
            address="5EFJZfqfmDZktdFfKUJa3kCrJZrzXUP1tkyN5RNtQ1uqZwtY"
            copyTimeout={300}
          />
        </div>
        <div className="svg-box">
          <Polkicon
            copy
            size="5rem"
            address="5EFJZfqfmDZktdFfKUJa3kCrJZrzXUP1tkyN5RNtQ1uqZwtY"
          />
        </div>
        <div className="svg-box">
          <Polkicon
            copy
            size="7rem"
            address="5EFJZfqfmDZktdFfKUJa3kCrJZrzXUP1tkyN5RNtQ1uqZwtY"
            copyTimeout={2000}
          />
        </div>
        <div className="svg-box">
          <Polkicon
            copy
            size="15rem"
            address="5EFJZfqfmDZktdFfKUJa3kCrJZrzXUP1tkyN5RNtQ1uqZwtY"
            copyTimeout={10000}
          />
        </div>
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
