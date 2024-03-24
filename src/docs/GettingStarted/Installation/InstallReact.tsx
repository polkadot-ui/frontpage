import { SimpleEditor } from "../../lib/SimpleEditor";

export const InstallReact = () => {
  const code = `yarn add @polkadot-ui/react`;

  return <SimpleEditor code={code} standalone />;
};
