// Copyright 2024 @polkadot-ui/frontpage authors & contributors
// SPDX-License-Identifier: MIT

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconSVG from "./svg/polkadot_black.svg?react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <div className="app-footer">
      <section>
        <IconSVG className="icon" />
        <div>
          <div className="beta">Beta</div>
        </div>
        <div>
          <h4>
            &copy; Copyright {new Date().getUTCFullYear()} &nbsp;
            <span>Polkadot UI Authors & Contributors.</span>
          </h4>
        </div>{" "}
        <div>
          <h4 className="license">
            Licensed with{" "}
            <a
              href="https://spdx.org/licenses/MIT.html"
              target="_blank"
              rel="noreferrer"
            >
              MIT
            </a>
          </h4>
        </div>
      </section>
      <section>
        <h4>
          <a
            href="https://github.com/polkadot-ui/library"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
            &nbsp; GitHub
          </a>
        </h4>
      </section>
    </div>
  );
};
