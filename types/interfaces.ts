// TS interaces

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

export interface NavBarLinksI {
  toggleNav?: (() => void) | undefined;
  scrollTarget: string;
}

export interface NavBarLinkI extends NavBarLinksI {
  idx: number;
  name: string;
  scrollTarget: string;
}

export interface NavBarBurger {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ProjectSectionTitleI {
  title: string;
}

export interface ProjectPreviewI {
  preview: string[];
  setModal: React.Dispatch<React.SetStateAction<string[]>>;
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
  preview: string[];
  livelink: string;
  github: string;
  techstack: { name: string; svg: string }[];
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

export interface SectionChangeI {
  handleSectionChange: (
    inView: boolean,
    entry: IntersectionObserverEntry
  ) => void;
}
export interface ModalI {
  modal: string[];
  setModal: React.Dispatch<React.SetStateAction<string[]>>;
}

export interface CarouselI {
  data: string[];
  setModal: React.Dispatch<React.SetStateAction<string[]>>;
}
