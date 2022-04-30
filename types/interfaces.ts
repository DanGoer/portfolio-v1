import React from "react";

export interface BgTheme {
  children: React.ReactNode;
}

export interface TechItemsI {
  name: string;
  svg: React.ReactNode;
}
[];

export interface SocialIconsI {
  name: string;
  viewBox: string;
  svg: string;
  link: string;
}
[];

// todo: what kind of TS for refs?

export interface NavBarLinksI {
  pageRefs?: any;
  toggleNav: () => void;
}

export interface NavBarLinkI extends NavBarLinksI {
  idx: number;
  name: string;
}

export interface NavBarBurger {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<any>>;
}

export interface ProjectSectionTitleI {
  title: string;
}

export interface ProjectPreview {
  preview: string;
}

export interface ProjectsTitleI {
  title: string;
  livelink: string;
}

export interface ProjectsInfoI {
  text: string;
}

export interface ProjectsTechStackI {
  techstack: { name: string; svg: string }[];
}

export interface ProjectsLinksI {
  livelink: string;
  github: string;
}

export interface ProjectsI {
  title: string;
  preview: string;
  livelink: string;
  github: string;
  techstack: { name: string; svg: string }[];
  text: string;
}
[];

export interface ContactTitleI {
  title: string;
}

export interface ContactSubTitleI {
  subtitle: string;
}

export interface ContactButtonI {
  text: string;
  isSubmitting: boolean;
}

export interface ImpressumI {
  subtitle: string;
}
