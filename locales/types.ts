export type Meta = {
  title: string;
  description: string;
  keywords: string;
  imgOg: string;
};

export type NavigationMenu = {
  title: string;
  href?: string;
  subMenu?: [NavigationMenu];
};

export type Translations = {
  locale: string;
  homePage: {
    meta: Meta;
    topTitle: string;
    bottomTitle: string;
    description: string;
    btnSend: string;
  };
  contactPage: {
    meta: Meta;
    welcome: string;
    about: string;
    title: string;
    description: string;
    phone: string;
    email: string;
    address: string;
    footer: string;
  };
  menu: [NavigationMenu];

  welcome: string;
  comingSoon: string;
  inDevelopment: string;
};
