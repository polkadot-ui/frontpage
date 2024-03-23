/* @license Copyright 2024 @polkadot-ui/frontpage authors & contributors
SPDX-License-Identifier: MIT */
import PolkadotExample from "./polkadot_example.png";

import { Note } from "../../lib/Note";
import { Edit } from "../../lib/Edit";
import { Header } from "../../lib/Header";
import { PolkadotNetworkInfo } from "./PolkadotNetworkInfo";
import { DocProps } from "../../lib/types";
import { NetworkInformationInterface } from "./NetworkInformationInterface";
import { ChainInterface } from "./ChainInterface";
import { ChainspecInterface } from "./ChainspecInterface";

export const Doc = ({ folder, npm }: DocProps) => {
  return (
    <>
      <Edit folder={folder} />

      <Header
        title="Network Information"
        subtitle="A directory of Polkadot's ecosystem nodes and relevant information."
        npm={npm}
        status="stable"
      />

      <p>
        This directory provides an easy way to access various information for
        the networks of Polkadot ecosystem, such as node/chain information,
        repository and chainspec links, contact information, rpc and/or api
        endpoints etc.
      </p>
      <Note>
        <p>
          To open a PR to add additional network information to this list, refer
          to the instructions hosted in this package's{" "}
          <a
            href="https://github.com/polkadot-ui/library/tree/main/packages/assets#adding-network-information"
            target="_blank"
            rel="noreferrer"
          >
            README file
          </a>
          .
        </p>
      </Note>
      <p>
        The interface that the Network's JSON should follow, can be seen below:
      </p>

      <NetworkInformationInterface />

      <p>where the interfaces that are used (Chain, Chainspect) are:</p>
      <ul>
        <li>the Chain interface:</li>
      </ul>
      <ChainInterface />

      <ul>
        <li>the Chainspec interface:</li>
      </ul>
      <ChainspecInterface />

      <h2>An example</h2>
      <p>
        Below the Polkadot network information are imported from the npm and are
        logged in the console:
      </p>
      <PolkadotNetworkInfo />

      <p>And the output will be a json like the one seen below:</p>
      <img src={PolkadotExample} />
    </>
  );
};
