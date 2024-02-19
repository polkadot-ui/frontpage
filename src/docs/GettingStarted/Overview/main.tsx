/* @license Copyright 2024 @polkadot-ui/frontpage authors & contributors
SPDX-License-Identifier: MIT */

import { Edit } from "../../lib/Edit";
import { Header } from "../../lib/Header";
import { H2 } from "../../lib/Headers";
import { Note } from "../../lib/Note";
import { DocProps } from "../../lib/types";

export const Doc = ({ folder }: DocProps) => {
  return (
    <>
      <Edit folder={folder} />
      <Header
        title="Overview"
        subtitle="Polkadot UI is a library and platform for developing and publishing assets for Polkadot dApps."
        npm={undefined}
      />

      <H2 id="introduction">Introduction</H2>
      <p>
        Polkadot UI hosts a library of assets, ranging from data sources,
        graphical elements, to fully functional components, for app developers
        to plug and play into their codebases.
      </p>
      <p>The library consists of 4 NPM packages:</p>
      <ul>
        <li>
          <a
            href="https://www.npmjs.com/package/@polkadot-ui/core"
            target="_blank"
            rel="noreferrer"
          >
            <code>@polkadot-ui/core</code>
          </a>
          : Core styles and themes for Polkadot dApps.
        </li>
        <li>
          <a
            href="https://www.npmjs.com/package/@polkadot-ui/react"
            target="_blank"
            rel="noreferrer"
          >
            <code>@polkadot-ui/react</code>
          </a>
          : Functional React components for Polkadot dApps.
        </li>
        <li>
          <a
            href="https://www.npmjs.com/package/@polkadot-ui/assets"
            target="_blank"
            rel="noreferrer"
          >
            <code>@polkadot-ui/assets</code>
          </a>
          : Data sources and graphical assets for key ecosystem elements, such
          as web extension wallets and validator operators.
        </li>
        <li>
          <a
            href="https://www.npmjs.com/package/@polkadot-ui/utils"
            target="_blank"
            rel="noreferrer"
          >
            <code>@polkadot-ui/utils</code>
          </a>
          : Common utility functions to aid in Polkadot dApp development.
        </li>
      </ul>

      <Note>
        <p>
          Polkadot UI is Javascript framework agonostic.{" "}
          <code>@polkadot-ui/react</code> hosts all library components for{" "}
          <a href="https://reactjs.org" target="_blank" rel="noreferrer">
            ReactJS
          </a>
          , but other frameworks can be supported rather trivially.
        </p>
      </Note>
      <Note>
        <p>
          All UI component styling and theming is held in{" "}
          <code>@polkadot-ui/core</code>, in which other packages can utilise
          to implement the supported UI components in their respective
          frameworks.
        </p>
      </Note>

      <hr className="md" />

      <H2 id="goals">Goals</H2>

      <p>
        Polkadot UI aims to fill a void in the Polkadot app developer space
        by providing high quality, well-maintained, critical assets for app
        developers.
      </p>
      <p>The goals of Polkadot UI are as follows:</p>

      <ul>
        <li>
          To provide a go-to platform / hub for Polkadot front-end assets to
          serve the Polkadot app-developer community.
        </li>
        <li>To obliterate the narrative of Polkadot having bad UX. </li>
        <li>To increase the quality of Polkadot apps ecosystem-wide. </li>
        <li>To expedite the creation of quality Polkadot apps.</li>
        <li>
          To provide some standard flows / behaviours for key features, like
          connecting to wallets and signing transactions.
        </li>
      </ul>
    </>
  );
};
