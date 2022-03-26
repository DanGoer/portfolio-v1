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

export interface NavBarI {
  toggleNav?: () => void;
  idx: number;
  name: string;
  isOpen?: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<any>>;
}

export interface ProjectsI {
  title: string;
  preview: string;
  livelink: string;
  github: string;
  techstack: { name: string; svg: string }[];
  text?: string;
}
[];

export interface ContactI {
  title?: string;
  placeholder?: string;
  subtitle?: string;
  inputType?: string;
  fieldType?: string;
  text?: string;
  isSubmitting?: boolean;
}

export interface ImpressumI {
  subtitle: string;
}
