import { SimpleEditor } from "../../lib/SimpleEditor";

export const InstallReactCore = () => {
  const code = `yarn add @polkadot-ui/core @polkadot-ui/react`;

  return <SimpleEditor code={code} standalone />;
};
