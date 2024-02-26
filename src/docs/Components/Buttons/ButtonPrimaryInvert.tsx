/* @license Copyright 2024 @polkadot-ui/frontpage authors & contributors
SPDX-License-Identifier: MIT */

import { Button } from "@polkadot-ui/react"
import { SimpleEditor } from "../../lib/SimpleEditor";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Demo } from "../../lib/Demo";

export const ButtonPrimaryInvert = () => {
  const code = `<Button type="primaryInvert" text="Button" marginRight />
<Button type="primaryInvert" text="Button" iconLeft={faUserReg} marginRight />
<Button type="primaryInvert" text="Button" iconRight={faUserReg} marginRight />
<Button type="primaryInvert" lg text="Button" disabled />`;

  return (
    <>
      <Demo>
        <Button type="primaryInvert" text="Button" marginRight />
        <Button
          type="primaryInvert"
          text="Button"
          iconLeft={faUser}
          marginRight
          colorSecondary
        />
        <Button
          type="primaryInvert"
          text="Button"
          iconRight={faUser}
          marginRight
        />
        <Button type="primaryInvert" lg text="Button" disabled />
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
