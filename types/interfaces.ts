export interface BgTheme {
  children: React.ReactNode;
}

export interface BurgerProps {
  isOpen: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<any>>;
}
