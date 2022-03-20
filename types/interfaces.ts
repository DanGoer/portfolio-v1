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
