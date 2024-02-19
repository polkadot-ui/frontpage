/* @license Copyright 2024 @polkadot-ui/frontpage authors & contributors
SPDX-License-Identifier: MIT */

import { SimpleEditor } from "../../../lib/SimpleEditor";

export const AccountsExample = () => {
  const code = `import {
  useExtensionAccounts,
} from '@polkadot-ui/react/hooks';

const ConnectedAccounts = () => {
  const { extensionAccounts } = useExtensionAccounts();

  return (
    <>
      {extensionAccounts.map((account) => <p key={account.address}>{account.address}</p>)
    </>
  );
);`;

  return <SimpleEditor code={code} standalone />;
};
