import React from "react";

export interface BgTheme {
  children: React.ReactNode;
}

export interface BurgerProps {
  isOpen: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<any>>;
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

export interface projectContentI {
  title: string;
  preview: string;
  livelink: string;
  github: string;
  techstack: { name: string; svg: string }[];
}
[];
