import { SimpleEditor } from "../../lib/SimpleEditor";

export const ChainInterface = () => {
  const code = `export interface Chain {
    type: string;
    parent?: string;
    consensus: string;
    sudo: boolean;
    para_id?: number;
  }`;

  return <SimpleEditor code={code} standalone />;
};
