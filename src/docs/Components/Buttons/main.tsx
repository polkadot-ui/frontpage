/* @license Copyright 2024 @polkadot-ui/frontpage authors & contributors
SPDX-License-Identifier: MIT */

import { Edit } from "../../lib/Edit";
import { Header } from "../../lib/Header";
import { ButtonPrimary } from "./ButtonPrimary";
import { ButtonPrimaryInvert } from "./ButtonPrimaryInvert";
import { ButtonSecondary } from "./ButtonSecondary";
import { ButtonTertiary } from "./ButtonTertiary";
import { ButtonMono } from "./ButtonMono";
import { ButtonMonoInvert } from "./ButtonMonoInvert";
import { ButtonText } from "./ButtonText";
import { ButtonSubmit } from "./ButtonSubmit";
import { ButtonSubmitInvert } from "./ButtonSubmitInvert";
import { ButtonHelp } from "./ButtonHelp";
import { ButtonTab } from "./ButtonTab";
import { H3 } from "../../lib/Headers";
import { DocProps } from "../../lib/types";

export const Doc = ({ folder, npm }: DocProps) => {
  return (
    <>
      <Edit folder={folder} />

      <Header
        title="Buttons"
        subtitle="A small collection of plug-and-play button components."
        npm={npm}
        status="stable"
      />

      <h3 id="button-primary">Button Primary</h3>

      <ButtonPrimary />

      <h3 id="button-primary-invert">Button Primary Invert</h3>

      <ButtonPrimaryInvert />

      <h3 id="button-secondary">Button Secondary</h3>

      <ButtonSecondary />

      <h3 id="button-tertiary">Button Tertiary</h3>

      <ButtonTertiary />

      <h3 id="button-mono">Button Mono</h3>

      <ButtonMono />

      <h3 id="button-mono-invert">Button Mono Invert</h3>

      <ButtonMonoInvert />

      <h3 id="button-text">Button Text</h3>

      <ButtonText />

      <h3 id="button-submit">Button Submit</h3>

      <ButtonSubmit />

      <h3 id="button-submit-invert">Button Submit Invert</h3>

      <ButtonSubmitInvert />

      <h3 id="button-help">Button Help</h3>

      <ButtonHelp />

      <h3 id="button-tab">Button Tab</h3>

      <ButtonTab />
    </>
  );
};
