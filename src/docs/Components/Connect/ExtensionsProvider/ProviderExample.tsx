import { SimpleEditor } from "../../../lib/SimpleEditor";

export const ProviderExample = () => {
  const code = `import { ExtensionsProvider } from '@polkadot-ui/react/providers';

const AppWithProvider = () => (
  <ExtensionsProvider>
    <App />
  </ExtensionsProvider>
);`;

  return <SimpleEditor code={code} standalone />;
};
