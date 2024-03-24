import { SimpleEditor } from "../../lib/SimpleEditor";

export const IsNotZero = () => {
  const code = `isNotZero(new BigNumber("10")) // true
isNotZero(new BigNumber("0")) // false
isNotZero(new BigNumber("-5")) // true
isNotZero(new BigNumber("999999999999999999999999999")) // true
isNotZero(new BigNumber("-999999999999999999999999999")) // true`;

  return <SimpleEditor code={code} standalone />;
};
