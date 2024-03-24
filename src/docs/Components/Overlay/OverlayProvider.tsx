import { SimpleEditor } from "../../lib/SimpleEditor";

export const OverlayProvider = () => {
  const code = `import { OverlayProvider } from '@polkadot-ui/react/providers';

const AppWithProvider = () => (
  <OverlayProvider>
    <App />
  </OverlayProvider>
);`;

  return <SimpleEditor code={code} standalone />;
};
