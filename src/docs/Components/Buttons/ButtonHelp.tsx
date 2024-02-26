/* @license Copyright 2024 @polkadot-ui/frontpage authors & contributors
SPDX-License-Identifier: MIT */

import { Button } from "@polkadot-ui/react"
import { SimpleEditor } from "../../lib/SimpleEditor";
import { Demo } from "../../lib/Demo";

export const ButtonHelp = () => {
  const code = `<Button type="help" marginRight />
<Button type="help" background="secondary" marginRight />
<Button type="help" background="none" outline />`;

  return (
    <>
      <Demo showThemes={false}>
        <Button type="help" marginRight />
        <Button type="help" background="secondary" marginRight />
        <Button type="help" background="none" outline />
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
