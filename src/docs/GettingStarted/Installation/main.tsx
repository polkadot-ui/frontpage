import { Link } from "react-router-dom";
import { Edit } from "../../lib/Edit";
import { Header } from "../../lib/Header";
import { DocProps } from "../../lib/types";
import { CSSThemes } from "./CSSThemes";
import { InstallReact } from "./InstallReact";
import { InstallReactCore } from "./InstallReactCore";
import { InstallBasic } from "./InstallBasic";
import { Note } from "../../lib/Note";

export const Doc = ({ folder }: DocProps) => {
  return (
    <>
      <Edit folder={folder} />
      <Header
        title="Installation"
        subtitle="Install Polkadot UI packages and super charge your Polkadot dApp."
        npm={undefined}
      />
      <h2 id="basic-installation">Basic Installation</h2>
      <p>
        If your project requires Polkadot UI CSS variables, assets, or
        utilities, install the following dependencies:
      </p>
      <InstallBasic />
      <p>These packages provide static (non-functional) assets and data:</p>
      <ul>
        <li>
          The <code>core</code> package will give your project theme templates
          that comprise of CSS variables.
        </li>
        <li>
          The <code>assets</code> package will give your project access to the
          library of <Link to="/extensions">data and assets</Link>.
        </li>
        <li>
          The <code>utils</code> package will install commonly used{" "}
          <Link to="/base-utilities">utility functions</Link>.
        </li>
      </ul>

      <hr className="md" />

      <h2 id="installation-for-react">Installation for React</h2>

      <p>
        Many of the UI components of <code>@polkadot&#8209;ui/react</code> use
        CSS variables from <code>@polkadot&#8209;ui/core</code>. If you are only
        using headless components from <code>react</code>, then{" "}
        <code>core</code> is not required and <code>react</code> can be
        installed on its own:
      </p>

      <InstallReact />

      <p>
        If however you wish to use fully fledged UI components out of the box,
        read on.
      </p>
      <h3 id="with-css-variables">With CSS Variables</h3>
      <p>
        Firstly, install <code>core</code> and <code>react</code> packages
        together:
      </p>
      <InstallReactCore />
      <p>
        Next, import the <code>default</code> theme and{" "}
        <code>polkadot-relay</code> accent colors to the top of your component
        hierarchy, and wrap your components with the corresponding classes.
        Every component under these classes will have access to the imported CSS
        variables.
      </p>

      <CSSThemes />

      <p>
        That's it! You're now ready to start using Polkadot UI UI components.
      </p>

      <Note>
        <p>
          Importing theme files can quickly bootstrap your project, but you can
          also simply define the CSS variables you require in your own CSS
          files.
        </p>
        <p>
          To see which CSS variables are required for each component, refer to
          their documentation.
        </p>
      </Note>
    </>
  );
};
