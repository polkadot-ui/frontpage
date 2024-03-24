import { SimpleEditor } from "../../lib/SimpleEditor";

export const InstallBasic = () => {
  const code = `yarn add @polkadot-ui/core @polkadot-ui/assets @polkadot-ui/utils`;

  return <SimpleEditor code={code} standalone />;
};
