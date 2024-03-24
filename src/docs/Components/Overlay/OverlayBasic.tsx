import { SimpleEditor } from "../../lib/SimpleEditor";

export const OverlayBasic = () => {
  const code = `import { Overlay } from '@polkadot-ui/react';
import { MyModal, AnotherModal } from './modals';
import { FallbackModal } from './fallback-modal';

export const Overlays = () => (
  <Overlay
    fallback={FallbackModal}
    modals={{
      MyModal,
      AnotherModal,
    }}
  />
);`;

  return <SimpleEditor code={code} standalone />;
};
