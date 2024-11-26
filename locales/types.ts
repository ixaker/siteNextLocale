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

export type ContactList = [
  { title: string; icon: string; description: string },
  { title: string; icon: string; description: string },
  { title: string; icon: string; description: string },
];

export type CardData = { title: string; img: string; href: string };

export type Translations = {
  locale: string;
  homePage: {
    meta: Meta;
    topTitle: string;
    bottomTitle: string;
    description: string;
    btnSend: string;
    aboutCompany: string;
    h2: string;
    h3: string;
    descriptionCompany: string;
  };
  cardData: CardData[];
  contactPage: {
    meta: Meta;
    title: string;
    contactList: ContactList;
  };
  menu: [NavigationMenu];

  welcome: string;
  comingSoon: string;
  inDevelopment: string;

  footer: {
    join: string;
  };
};
