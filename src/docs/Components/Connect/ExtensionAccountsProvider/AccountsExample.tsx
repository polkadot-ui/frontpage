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
