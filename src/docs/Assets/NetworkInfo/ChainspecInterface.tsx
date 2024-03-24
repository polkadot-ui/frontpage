import { SimpleEditor } from "../../lib/SimpleEditor";

export const ChainspecInterface = () => {
  const code = `export interface Chainspec {
    http_url: string;
  }`;

  return <SimpleEditor code={code} standalone />;
};
