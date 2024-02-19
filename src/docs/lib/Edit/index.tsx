/* @license Copyright 2024 @polkadot-ui/frontpage authors & contributors
SPDX-License-Identifier: MIT */

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Edit = ({ folder }: { folder: string }) => {
  return (
    <div className="edit-on-github">
      <a
        href={`https://github.com/polkadot-ui/frontpage/edit/main/src/docs/${folder}/main.tsx`}
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} />
        &nbsp; Edit this page
      </a>
    </div>
  );
};
