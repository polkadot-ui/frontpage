/* @license Copyright 2024 @polkadot-ui/frontpage authors & contributors
SPDX-License-Identifier: MIT */

import { Edit } from "../../lib/Edit";
import { Header } from "../../lib/Header";
import { Note } from "../../lib/Note";
import { PolkiconSize } from "./PolkiconSize";
import { PolkiconTheme } from "./PolkiconTheme";
import { PolkiconCopy } from "./PolkiconCopy";
import { PolkiconCopyMsg } from "./PolkiconCopyMsg";
import { DocProps } from "../../lib/types";

export const Doc = ({ folder, npm }: DocProps) => {
  return (
    <>
      <Edit folder={folder} />
      <Header
        title="Polkicon"
        subtitle="A light-weight and customisable Polkadot Icon."
        npm={npm}
        status="stable"
      />
      <p>
        <a
          href="https://github.com/polkadot-ui/library/blob/main/packages/ui-react/lib/icons/Polkicon/index.tsx"
          target="_blank"
          rel="noreferrer"
        >
          <code>Polkicon</code>
        </a>{" "}
        is a light-weight component that renders the Polkadot icon, with various
        display options built in. By default, the <code>address</code> prop
        dictates which color palette the Polkicon will display.
      </p>
      <Note>
        <p>
          Polkicon currently supports the patterns of Polkadot, Kusama and
          Westend networks, with SS58 prefixes 0, 2, and 42 respectively.
          Patterns are dictated by the SS58 prefix of the address provided to
          the <code>Polkicon</code> component. To add support to other networks,
          contributors are welcome to{" "}
          <a
            href="https://github.com/polkadot-ui/library/pulls"
            target="_blank"
            rel="noreferrer"
          >
            Submit a Pull Request
          </a>
          .
        </p>
      </Note>
      <h3 id="size">Size</h3>
      <p>
        Sizes can be provided as a <code>string</code> (in px or rem) (e.g.
        "32px", "2.4rem") or a <code>number</code> (e.g. 64). The default size
        is <code>2rem</code>.
      </p>
      <PolkiconSize />
      <h3 id="outer-color">Outer Color</h3>
      <p>
        The background color of <code>Polkicon</code> can be set with the{" "}
        <code>outerColor</code> prop. This is the color of the outermost circle
        of the icon. The default <code>outerColor</code> value is the{" "}
        <code>--background-default</code> variable, used throughout the Polkadot
        UI library of UI components.{" "}
      </p>
      <p>
        The default value can be overridden with a custom color, or be set to{" "}
        <code>transparent</code>.
      </p>
      <PolkiconTheme />

      <h3 id="size">Copy functionality</h3>
      <p>
        Polkicon comes with a copy functionality which allows the user to copy
        the Icon's address. In order to use it the prop/flag <code>copy</code>{" "}
        should be active at the <code>Polkicon</code> tag (see examples below).
        When <code>copy</code> is active an optional parameter of{" "}
        <code>copyTimeout (in ms)</code> can be set in order to give specific
        transition time to the animation. The default timeout is{" "}
        <code>1000 ms - 1 sec</code>. Based on size provided
      </p>

      <PolkiconCopy />

      <p>
        In addition the "copy message" can be altered by providing the
        <code>copyMsg</code> prop. The default one, that is activated once{" "}
        <code>copy</code> prop is added is the <code>✔</code>. User can always
        supply a word or an icon, or a tag for replacing the default one.
      </p>

      <PolkiconCopyMsg />
      <hr className="md" />

      <h2 id="css-variables-used">CSS Variables Used</h2>

      <ul>
        <li>
          <code>--background-default</code>: Default Polkicon background color
          when <code>outerColor</code> is not defined.
        </li>
      </ul>
    </>
  );
};
