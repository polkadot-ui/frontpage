/* @license Copyright 2024 @polkadot-ui/frontpage authors & contributors
SPDX-License-Identifier: MIT */
import { ReactNode } from "react";

import { Polkicon } from "../docs/Components/Polkicon";
import { Extensions } from "../docs/Assets/Extensions";
import { Validators } from "../docs/Assets/Validators";
import { Overlay } from "../docs/Components/Overlay";
import { Odometer } from "../docs/Components/Odometer";
import { UtilitiesBase } from "../docs/Utilities/Base";
import { UtilitiesUnit } from "../docs/Utilities/Unit";
import { Overview } from "../docs/GettingStarted/Overview";
import { Installation } from "../docs/GettingStarted/Installation";
import { UsingThemes } from "../docs/GettingStarted/UsingThemes";
import { ExtensionsProvider } from "../docs/Components/Connect/ExtensionsProvider";
import { ExtensionAccountsProvider } from "../docs/Components/Connect/ExtensionAccountsProvider";

type Routes = {
  name: string;
  path: string;
  default?: boolean;
  element: ReactNode;
}[];

type RouteCategories = ((RouteCategoryPath | RouteCategoryMulti) & {
  name?: string;
})[];

interface RouteCategoryPath {
  path: string;
}

export interface RouteCategoryMulti {
  paths: {
    heading?: string;
    paths: string[];
  }[];
}

// Getting started
const gettingStartedRoutes = [
  {
    path: "overview",
    name: "Overview",
    element: <Overview />,
    default: true,
  },
  {
    path: "installation",
    name: "Installation",
    element: <Installation />,
  },
  {
    path: "using-themes",
    name: "Using Themes",
    element: <UsingThemes />,
  },
];

// utils
const utilsRoutes = [
  {
    path: "base-utilities",
    name: "Base Utilities",
    element: <UtilitiesBase />,
  },
  {
    path: "unit_utilities",
    name: "Unit Utilities",
    element: <UtilitiesUnit />,
  },
];

const assetsRoutes = [
  {
    path: "extensions",
    name: "Web3 Extensions",
    element: <Extensions />,
  },
  {
    path: "validators",
    name: "Validator Operators",
    element: <Validators />,
  },
];

const componentsRoutes = [
  {
    path: "extensions-provider",
    name: "Extensions",
    element: <ExtensionsProvider />,
  },
  {
    path: "extension-accounts-provider",
    name: "Extension Accounts",
    element: <ExtensionAccountsProvider />,
  },
  {
    path: "polkicon",
    name: "Polkicon",
    element: <Polkicon />,
  },
  {
    path: "odometer",
    name: "Odometer",
    element: <Odometer />,
  },
  {
    path: "overlay",
    name: "Overlay",
    element: <Overlay />,
  },
];

export const routes: Routes = [
  {
    path: "/",
    name: "Home",
    element: <Overview />, // Until we have a landing page
  },
  ...gettingStartedRoutes,
  ...assetsRoutes,
  ...componentsRoutes,
  ...utilsRoutes,
];

export const routeCategories: RouteCategories = [
  {
    name: "Getting Started",
    paths: [
      {
        paths: ["overview"],
      },
      {
        paths: ["installation"],
      },
      {
        paths: ["using-themes"],
      },
    ],
  },
  {
    name: "Data & Assets",
    paths: [
      {
        paths: ["extensions"],
      },
      {
        paths: ["validators"],
      },
    ],
  },
  {
    name: "Components",
    paths: [
      {
        heading: "Connect",
        paths: ["extensions-provider", "extension-accounts-provider"],
      },
      {
        heading: "UI",
        paths: ["polkicon", "odometer", "overlay"],
      },
    ],
  },
  {
    name: "Utilities",
    paths: [
      {
        paths: ["base-utilities", "unit_utilities"],
      },
    ],
  },
];

export const nameFromRoute = (path: string): string | undefined =>
  routes?.find((r) => r.path === path)?.name;

export const isDefaultRoute = (path: string): boolean =>
  !!routes?.find((r) => r.default === true && r.path === path);
