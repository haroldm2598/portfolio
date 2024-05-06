import { StaticImageData } from "next/image";
import { IconType } from "react-icons";

export interface InitialState {
  isActive: boolean;
  navLinks: Array<NavLinksProps>;
  projectList: Array<ProjectProps>;
  expertiseList: Array<{ imgSrc: string }>;
  socialMediaList: Array<MediaLinksProps>;
}

interface NavLinksProps {
  name: string;
  path: string;
}

export interface MediaLinksProps {
  Icon: IconType;
  socmedName: string;
  path: string;
}

export interface ProjectProps {
  imageSrc: StaticImageData;
  title: string;
  desc: string;
  githubLink: string;
  livePreviewLink: string;
}

export interface FormProps {
  name?: string;
  email?: string;
  message?: string;
}

export type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];
