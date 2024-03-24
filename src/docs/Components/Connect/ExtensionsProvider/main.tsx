import { Edit } from "../../../lib/Edit";
import { Header } from "../../../lib/Header";
import { DocProps } from "../../../lib/types";
import { ProviderExample } from "./ProviderExample";
import { Note } from "../../../lib/Note";
import { Link } from "react-router-dom";
import { HookExample } from "./HookExample";
import { SimpleEditor } from "../../../lib/SimpleEditor";

export const Doc = ({ folder, npm }: DocProps) => {
  const code = `import App from "./App";
  import {
    ExtensionsProvider,
    ExtensionAccountsProvider,
  } from "@polkadot-ui/react/providers";

  ....
  
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <ExtensionsProvider>
      <ExtensionAccountsProvider ...>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ExtensionAccountsProvider>
    </ExtensionsProvider>
  );`;

  return (
    <>
      <Edit folder={folder} />
      <Header
        title="Extensions Provider"
        subtitle="Discover available web3 exensions and manage their status."
        npm={npm}
        status="stable"
      />
      <p>
        <a
          href="https://github.com/polkadot-ui/library/blob/main/packages/ui-react/lib/connect/ExtensionsProvider/index.tsx"
          target="_blank"
          rel="noreferrer"
        >
          <code>ExtensionsProvider</code>
        </a>{" "}
        allows your app to discover the currently installed web3 extensions, and
        provides a setter to update their status. Wrap your app with{" "}
        <code>ExtensionsProvider</code> to give your components access to the
        available web extensions:
      </p>
      <ProviderExample />
      <p>
        With the provider in place, extensions data can be accessed with the{" "}
        <code>useExtensions</code> hook:
      </p>
      <HookExample />
      <Note>
        <p>
          <code>ExtensionsProvider</code> supports all the web3 wallet
          extensions listed on the <Link to="/extensions">Web3 Extensions</Link>{" "}
          page.
        </p>
      </Note>
      <h3 id="requires">Warning:</h3>
      <Note>
        <p>
          When <code>React.StrictMode</code> is used, it should be placed{" "}
          <b>after</b> the <code>ExtensionsProvider</code> and{" "}
          <code>ExtensionAccountsProvider</code>, or the providers will not
          work.
        </p>
      </Note>
      <SimpleEditor code={code} standalone />
      <hr />
      <h3 id="extension-syncing">Extension Syncing</h3>
      <p>
        Web3 extensions are injected into the <code>window.injectedWeb3</code>{" "}
        object, which is an asynchronous process that happens when the window
        loads. For this reason, <code>ExtensionsProvider</code> also provides a{" "}
        <code>checkingInjectedWeb3</code> boolean value, that signals whether
        the initial check for <code>injectedWeb3</code> is underway.
      </p>
      <p>
        {" "}
        <code>checkingInjectedWeb3</code> will initially be <code>true</code>,
        and updated to <code>false</code> once <code>window.injectedWeb3</code>{" "}
        is present, or if <code>injectedWeb3</code> is not found after a 5
        second timeout.
      </p>
      <hr className="lg" />
      <h2 id="values">Values</h2>
      <h3 id="checkingInjectedWeb3">checkingInjectedWeb3</h3>
      <div className="params inline">
        <p>boolean</p>
      </div>
      <p>
        Returns a boolean reflecting whether <code>window.injectedWeb3</code> is
        being checked.
      </p>
      <h3 id="extensionStatus">extensionsStatus</h3>
      <div className="params inline">
        <p>Record&#60;string, ExtensionStatus&#62;</p>
      </div>
      <p>
        A key value record of each extension and their status. Empty object by
        default until <code>setExtensionStatus</code> is called.
      </p>
      <h3 id="setExtensionStatus">setExtensionStatus</h3>
      <div className="params inline">
        <p>(id: string, status: ExtensionStatus): void</p>
      </div>
      <p>
        A function that takes an extension id and status, and updates the{" "}
        <code>extensionsStatus</code> record. Accepts values of{" "}
        <code>installed</code>, <code>not_authenticated</code> and{" "}
        <code>connected</code>.
      </p>
      <h3 id="removeExtensionStatus">removeExtensionStatus</h3>
      <div className="params inline">
        <p>(id: string): void</p>
      </div>
      <p>
        Removes an extension from the <code>extensionsStatus</code> record. This
        should be called when the extension is not found / not installed.
      </p>
      <h3 id="extensionInstalled">extensionInstalled</h3>
      <div className="params inline">
        <p>(id: string): boolean</p>
      </div>
      <p>
        A function that takes an extension id checks whether the extension is
        installed.
      </p>
      <h3 id="extensionCanConnect">extensionCanConnect</h3>
      <div className="params inline">
        <p>(id: string): boolean</p>
      </div>
      <p>
        Checks if the provided extension <code>id</code> can be connected to.
        Returns false if the extension is not installed or is not connected.
      </p>
    </>
  );
};
