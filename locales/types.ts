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

export type CardData = { title: string; img: string; href: string };

export type ListAdvantages = { description: string; icon: string };

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
    address: string;
    descriptionAddress: string;
    email: string;
    descriptionEmail: string;
    phone: string;
    descriptionPhone: string;
  };
  menu: [NavigationMenu];
  lazernaRizkaPage: {
    title: string;
    description: string;
    servicesTitle: string;
    listServices: { description: string }[];
    advantagesTitle: string;
    listAdvantages: { title: string; icon: string }[];
    descriptionBenefits: string;
    peculiaritiesTitle: string;
    listPeculiarities: { description: string; icon: string }[];
    descriptionDifferences: string;
  };

  tokarniRobotyChpkPage: {
    title: string;
    description: string;
    peculiaritiesTitle: string;
    listPeculiarities: { description: string; icon: string }[];
  };

  shlifovkaMetaluPage: {
    title: string;
    description: string;
  };

  termichnaObrobkaPage: {
    title: string;
    description: string;
  };

  frezerniRoboty: {
    title: string;
    description: string;
  };

  porizkaNaVerstati: {
    title: string;
    description: string;
  };

  lyttyaMetalu: {
    title: string;
    description: string;
  };

  indyvidualniZamovlennya: {
    title: string;
    description: string;
  };

  welcome: string;
  comingSoon: string;
  inDevelopment: string;

  footer: {
    join: string;
  };
  btnSend: string;
};
