/* @license Copyright 2024 @polkadot-ui/frontpage authors & contributors
SPDX-License-Identifier: MIT */

import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@polkadot-ui/react";
import { SimpleEditor } from "../../lib/SimpleEditor";
import { Demo } from "../../lib/Demo";

export const ButtonPrimary = () => {
  const code = `<Button text="Button" marginRight />
<Button type="primary" text="Button" iconLeft={faUser} marginRight />
<Button type="primary" text="Button" iconLeft={faUser} marginRight colorSecondary />
<Button type="primary" text="Button" lg disabled />`;

  return (
    <>
      <Demo>
        <Button text="Button" marginRight />
        <Button type="primary" text="Button" iconLeft={faUser} marginRight />
        <Button
          type="primary"
          text="Button"
          iconLeft={faUser}
          marginRight
          colorSecondary
        />
        <Button type="primary" text="Button" lg disabled />
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
