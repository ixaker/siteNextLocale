export interface SubMenuItem {
  title: string;
  href: string;
}

export interface MenuItem {
  title: string;
  subMenu?: SubMenuItem[];
  href?: string;
}

export interface Translations {
  [key: string]: string | { [key: string]: string };
}

export interface MenuProps {
  translations: Translations;
  lang: string;
}
