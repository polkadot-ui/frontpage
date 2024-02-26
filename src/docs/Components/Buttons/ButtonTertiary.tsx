/* @license Copyright 2024 @polkadot-ui/frontpage authors & contributors
SPDX-License-Identifier: MIT */

import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@polkadot-ui/react";
import { SimpleEditor } from "../../lib/SimpleEditor";
import { Demo } from "../../lib/Demo";

export const ButtonTertiary = () => {
  const code = `<Button type="tertiary" text="Button" marginRight />
<Button type="tertiary" text="Button" iconLeft={faUser} marginRight />
<Button type="tertiary" text="Button" iconRight={faUser} marginRight />
<Button type="tertiary" lg text="Button" disabled />`;

  return (
    <>
      <Demo showThemes={false}>
        <Button type="tertiary" text="Button" marginRight />
        <Button type="tertiary" text="Button" iconLeft={faUser} marginRight />
        <Button type="tertiary" text="Button" iconRight={faUser} marginRight />
        <Button type="tertiary" text="Button" disabled />
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
