/* @license Copyright 2024 @polkadot-ui/frontpage authors & contributors
SPDX-License-Identifier: MIT */

import { SimpleEditor } from "../../../lib/SimpleEditor";

export const ConnectExample = () => {
  const code = `import {
    useExtensionAccounts,
  } from '@polkadot-ui/react/hooks';

const ConnectAccounts = () => {
  const { connectExtensionAccounts } = useExtensionAccounts();

  return (
    <>
      <button
        type="button"
        onClick={() => {
          if (extension) connectExtensionAccounts('subwallet-js');
        }}
      >
        Connect to Subwallet JS
      </button>
      <App />
    </>
  );
);`;

  return <SimpleEditor code={code} standalone />;
};
