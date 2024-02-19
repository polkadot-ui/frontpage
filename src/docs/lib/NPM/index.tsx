/* @license Copyright 2024 @polkadot-ui/frontpage authors & contributors
SPDX-License-Identifier: MIT */

import { faNpm } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface Props {
  npm: string;
}

export const NPM = ({ npm }: Props) => {
  return (
    <h3 className="npm">
      <FontAwesomeIcon icon={faNpm} />
      <a
        href={`https://www.npmjs.com/package/${npm}`}
        target="_blank"
        rel="noreferrer"
      >
        {npm}
      </a>
    </h3>
  );
};
