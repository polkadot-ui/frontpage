import InfoSVG from "../../../svg/info.svg?react";

import { ReactNode } from "react";

export const Note = ({ children }: { children: ReactNode }) => {
  return (
    <div className="note">
      <section>
        <div className="icon">
          <InfoSVG />
        </div>
      </section>
      <section>{children}</section>
    </div>
  );
};
