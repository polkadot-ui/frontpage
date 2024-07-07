import { AccountCard, IconProps } from "@polkadot-ui/react";
import { SimpleEditor } from "../../lib/SimpleEditor";
import { Demo } from "../../lib/Demo";

export const AccountCardPageSimple = () => {
  const code = `
import { AccountCard, IconProps } from "@polkadot-ui/react/AccountCard";
...
const iconProps: IconProps = {}; // or { position = "left" }; <- "left" is the default option
...
return (
  <AccountCard style={{ padding: "1rem" }} icon={iconProps} title={{ address: "1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73" }} extraComponent={{ component: <Switch />, position: "right" }} />
);`;

  const iconProps: IconProps = {
    position: "left",
    address: "1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73",
  };

  return (
    <>
      <Demo showThemes={false}>
        <AccountCard
          style={{ padding: "1rem" }}
          icon={iconProps}
          title={{ address: "1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73" }}
          extraComponent={{
            component: <button>Some button</button>,
            position: "right",
          }}
        />
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
