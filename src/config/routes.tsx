import { ReactNode } from "react";

import { Loaders } from "../docs/Experimental/Loaders";
import { Charts } from "../docs/Components/Charts";
import { Polkicon } from "../docs/Components/Polkicon";
import { Extensions } from "../docs/Assets/Extensions";
import { Validators } from "../docs/Assets/Validators";
import { NetworkInfo } from "src/docs/Assets/NetworkInfo";
import { Grid } from "../docs/Experimental/Grid";
import { Card } from "../docs/Experimental/Cards";
import { AccountCard } from "../docs/Experimental/AccountCard";
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

// recipes
const recipesRoutes = [
  {
    path: "account-card",
    name: "Account card",
    element: <AccountCard />,
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

// Layout Components
const componentsLayoutRoutes = [
  {
    path: "grid",
    name: "Grid",
    element: <Grid />,
  },
  {
    path: "card",
    name: "Card",
    element: <Card />,
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
  {
    path: "networkInfo",
    name: "Network Information",
    element: <NetworkInfo />,
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
  // {
  //   path: "overlay",
  //   name: "Overlay",
  //   element: <Overlay />,
  // },
  {
    path: "loader",
    name: "Loaders",
    element: <Loaders />,
  },
  {
    path: "charts",
    name: "Charts",
    element: <Charts />,
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
  ...componentsLayoutRoutes,
  ...recipesRoutes,
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
    ],
  },
  {
    name: "Core",
    paths: [
      {
        paths: ["using-themes"],
      },
    ],
  },
  {
    name: "Assets",
    paths: [
      {
        paths: ["extensions"],
      },
      {
        paths: ["validators"],
      },
      {
        paths: ["networkInfo"],
      },
    ],
  },
  // {
  //   name: "Providers",
  //   paths: [
  //     {
  //       paths: ["extensions-provider"],
  //     },
  //     {
  //       paths: ["extension-accounts-provider"],
  //     },
  //   ],
  // },
  {
    name: "React Components",
    paths: [
      {
        heading: "Network Components",
        paths: ["polkicon", "account-card"],
      },
      {
        heading: "Generic",
        paths: ["odometer", "charts", "loader"],
      },
      // Activate when the modal is actually working
      // {
      //   paths: ["modal"],
      // },
      {
        heading: "Layout",
        paths: ["card", "grid"],
      },
      // {
      //   heading: "Defaults",
      //   paths: ["buttons", "switch", "textfield"],
      // },
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
