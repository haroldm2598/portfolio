import { StaticImageData } from "next/image";
import { ReactNode } from "react";
import { IconType } from "react-icons";

export type WrapperProps = {
  children: ReactNode;
  className?: string;
};

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

export interface ButtonProps {
  name: string;
  children: ReactNode;
}

export interface ThreeDCardProps {
  data: Array<ProjectProps>;
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
