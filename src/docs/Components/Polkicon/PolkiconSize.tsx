import { Polkicon } from "@polkadot-ui/react";
import { SimpleEditor } from "../../lib/SimpleEditor";
import { Demo } from "../../lib/Demo";

export const PolkiconSize = () => {
  const code = `<Polkicon size="10rem" address="13Bbi16jczqELAGBH7MaBu31ABreDmw9yFhrEiNEx6wMkNWe" />
<Polkicon size="7rem" address="13Bbi16jczqELAGBH7MaBu31ABreDmw9yFhrEiNEx6wMkNWe" />
<Polkicon size={60} address="13Bbi16jczqELAGBH7MaBu31ABreDmw9yFhrEiNEx6wMkNWe" />`;

  return (
    <>
      <Demo showThemes={false} centered>
        <div className="svg-box">
          <Polkicon
            size="10rem"
            address="13Bbi16jczqELAGBH7MaBu31ABreDmw9yFhrEiNEx6wMkNWe"
          />
        </div>
        <div className="svg-box">
          <Polkicon
            size="7rem"
            address="EkvDzBYPaageH576B7cwhZrTA9EL9CCM8p7U5eqsp8LJysn"
          />
        </div>
        <div className="svg-box">
          <Polkicon
            size={60}
            address="234CHvWmTuaVtkJpLS9oxuhFd3HamcEMrfFAPYoFaetEZmY7"
          />
        </div>
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
