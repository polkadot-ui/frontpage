import {
  AccountProvider,
  ExtensionProvider,
  SelectedAccountType,
} from "@polkadot-ui/react";
import { SimpleEditor } from "../../lib/SimpleEditor";
import { Demo } from "../../lib/Demo";
import { useState } from "react";

export const ConnectPageSimple = () => {
  const code = `
  import { AccountProvider, ExtensionProvider, SelectedAccountType } from "@polkadot-ui/react";
...
return (
  <ExtensionProvider setSelected={setSelectedAccount}>
    <AccountProvider
      selected={selectedAccount}
      setSelected={setSelectedAccount}
    />
  </ExtensionProvider>
);`;

  const [selectedAccount, setSelectedAccount] =
    useState<SelectedAccountType>(null);

  return (
    <>
      <Demo
        showThemes={false}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <ExtensionProvider setSelected={setSelectedAccount}>
          <AccountProvider
            selected={selectedAccount}
            setSelected={setSelectedAccount}
          />
        </ExtensionProvider>
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
