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
    servicesTitle: string;
    listServices: { description: string }[];
  };

  shlifovkaMetaluPage: {
    title: string;
    description: string;
    peculiaritiesTitle: string;
    listPeculiarities: { description: string; icon: string }[];
  };

  termichnaObrobkaPage: {
    title: string;
    description: string;
    peculiaritiesTitle: string;
    listPeculiarities: { description: string; icon: string }[];
  };

  frezerniRoboty: {
    title: string;
    description: string;
    peculiaritiesTitle: string;
    listPeculiarities: { description: string; icon: string }[];
  };

  porizkaNaVerstati: {
    title: string;
    description: string;
    peculiaritiesTitle: string;
    listPeculiarities: { description: string; icon: string }[];
    servicesTitle: string;
    listServices: { description: string }[];
  };

  lyttyaMetalu: {
    title: string;
    description: string;
    peculiaritiesTitle: string;
    listPeculiarities: { description: string; icon: string }[];
  };

  indyvidualniZamovlennya: {
    title: string;
    description: string;
    peculiaritiesTitle: string;
    listPeculiarities: { description: string; icon: string }[];
  };

  orderBenefits: {
    orderBenefitsTitle: string;
    listOrderBenefits: { title: string; icon: string }[];
  };

  zvaryuvannyaMetaluPage: {
    title: string;
    description: string;
    servicesTitle: string;
    listServices: { description: string }[];
    descriptionBenefits: string;
    peculiaritiesTitle: string;
    listPeculiarities: { description: string; icon: string }[];
    descriptionDifferences: string;
  };

  welcome: string;
  comingSoon: string;
  inDevelopment: string;

  footer: {
    join: string;
  };
  btnSend: string;
};
