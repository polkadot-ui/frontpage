import { Card } from "@polkadot-ui/react";
import { SimpleEditor } from "../../lib/SimpleEditor";
import { Demo } from "../../lib/Demo";

export const CardMono = () => {
  const code = `<Card>
  <h5>Just a card</h5>
</Card>`;

  return (
    <>
      <Demo showThemes={false}>
        <Card>
          <h5>Just a card</h5>
        </Card>
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
