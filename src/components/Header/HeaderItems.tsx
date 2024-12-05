import {
  IconProps,
  ReadCvLogo,
  TerminalWindow,
  UserCircle,
} from "@phosphor-icons/react";
import {
  goToExperiencePage,
  goToProfilePage,
  goToProjectsPage,
} from "../../utils";

import { ReactNode } from "react";

export type HeaderItem = {
  component: ReactNode;
  onClick: () => void;
  label: string;
};

const phosphorParams: IconProps = { size: 24, weight: "duotone" };
const p = phosphorParams; // shorthand

export const headerItems: HeaderItem[] = [
  {
    component: <UserCircle {...p} />,
    onClick: goToProfilePage,
    label: "Profile",
  },
  {
    component: <TerminalWindow {...p} />,
    onClick: goToProjectsPage,
    label: "Projects",
  },
  {
    component: <ReadCvLogo {...p} />,
    onClick: goToExperiencePage,
    label: "Experience",
  },
];
