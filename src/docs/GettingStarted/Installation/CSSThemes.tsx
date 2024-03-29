import { SimpleEditor } from "../../lib/SimpleEditor";

export const CSSThemes = () => {
  const code = `// Top of app hierarchy. E.g. index.tsx, main.tsx.

import "@polkadot-ui/core/accent/polkadot-relay.css";
import "@polkadot-ui/core/theme/default/index.css";

...

const App = () => (
  <div className='theme-polkadot-relay theme-light'>
     ...
  </div>
)`;

  return <SimpleEditor code={code} standalone />;
};
