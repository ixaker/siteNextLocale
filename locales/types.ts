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

export type ServicesPage = {
  title: string;
  descriptionTop: string;
  descriptionBottom: string;
  infoCard: { title: string; description?: string; list?: { description: string }[]; image: string }[];
  callToAction: string;
  callToActionGeneral?: string;
  callToActionBottom: string;
};

export type ProductPage = {
  title: string;
  descriptionTop: string;
  descriptionBottom: string;
  servicesTitle: string;
  listServices: { description: string }[];
  peculiaritiesTitle: string;
  listPeculiarities: { description: string; icon: string }[];
  question: string;
  answer: string;
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
  lazernaRizkaPage: ServicesPage;

  tokarniRobotyChpkPage: ServicesPage;

  shlifovkaMetaluPage: ServicesPage;

  termichnaObrobkaPage: ServicesPage;

  frezerniRoboty: ServicesPage;

  porizkaNaVerstati: ServicesPage;

  lyttyaMetaluPage: ServicesPage;

  zvaryuvannyaMetaluPage: ServicesPage;

  piskostruminniRoboty: ServicesPage;
  orderBenefits: {
    orderBenefitsTitle: string;
    listOrderBenefits: { title: string; icon: string }[];
  };

  zaliznychniZapchastynyPage: ProductPage;

  zapchastynyDlyaSilhosptekhnikyPage: ProductPage;

  modalInfo: {
    title: string;
    descriptionBtn: string;
    limitation: string;
    inputTitle: string;
    submitBtn: string;
    dropFile: string;
  };

  welcome: string;
  comingSoon: string;
  inDevelopment: string;

  footer: {
    join: string;
  };
  btnSend: string;
  messageInformation: string;
};
