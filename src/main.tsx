import * as ReactDOM from "react-dom/client";
import { App } from "./App";

import "./theme/fonts.css";
import "./theme/theme.css";
import "./styles/index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);
