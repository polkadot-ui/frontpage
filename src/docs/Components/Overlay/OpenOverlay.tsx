/* @license Copyright 2024 @polkadot-ui/frontpage authors & contributors
SPDX-License-Identifier: MIT */

import { SimpleEditor } from "../../lib/SimpleEditor";

export const OpenOverlay = () => {
  const code = `import { useOverlay } from '@polkadot-ui/react/hooks';

export const AppComponent = () => {
  const { openModal } = useOverlay().modal;

  return (
    <>
    <button
      onClick={() =>
        openModal({
          key: "MyModal",
          options: { myVal: 'value' } /* optional */
          size: "sm" /* optional */
        })
      }
    >Open Modal
    </button>
    </>
}`;

  return <SimpleEditor code={code} standalone />;
};
