import { ReactElement } from "react";

export interface Props {
  title: string;
  description: string;
  params: string[];
  component: ReactElement;
}
