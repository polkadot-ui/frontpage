/* @license Copyright 2024 @polkadot-ui/frontpage authors & contributors
SPDX-License-Identifier: MIT */

import { Button } from "@polkadot-ui/react";
import { SimpleEditor } from "../../lib/SimpleEditor";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Demo } from "../../lib/Demo";

export const ButtonSubmitInvert = () => {
  const code = `<Button type="submitInvert" text="Button" marginRight />
<Button type="submitInvert" text="Button" marginRight lg />
<Button
  type="submitInvert"
  text="Button"
  iconLeft={faUserReg}
  marginRight
/>
<Button
  type="submitInvert"
  text="Button"
  iconRight={faUserReg}
  marginRight
/>
<Button type="submitInvert" text="Button" disabled />`;

  return (
    <>
      <Demo>
        <Button type="submitInvert" text="Button" marginRight />
        <Button type="submitInvert" text="Button" marginRight lg />
        <Button
          type="submitInvert"
          text="Button"
          iconLeft={faUser}
          marginRight
        />
        <Button
          type="submitInvert"
          text="Button"
          iconRight={faUser}
          marginRight
        />
        <Button type="submitInvert" text="Button" disabled />
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
