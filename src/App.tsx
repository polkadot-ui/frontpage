import { HashRouter } from "react-router-dom";
import { Providers } from "./Providers";

export const App = () => {
  return (
    <HashRouter basename="/">
      <Providers />
    </HashRouter>
  );
};
