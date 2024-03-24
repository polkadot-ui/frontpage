import { SimpleEditor } from "../../lib/SimpleEditor";

export const OpenOverlay = () => {
  const code = `import { useOverlay } from '@polkadot-ui/react/hooks';

export const AppComponent = () => {
  const { openModal } = useOverlay().modal;

  return (
    <>
    <button
      onClick={() =>
        openModal({
          key: "MyModal",
          options: { myVal: 'value' } /* optional */
          size: "sm" /* optional */
        })
      }
    >Open Modal
    </button>
    </>
}`;

  return <SimpleEditor code={code} standalone />;
};
