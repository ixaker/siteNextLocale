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
  lazernaRizkaPage: {
    title: string;
    description: string;
    servicesTitle: string;
    listServices: { description: string }[];
    descriptionBenefits: string;
    peculiaritiesTitle: string;
    listPeculiarities: { description: string; icon: string }[];
    callToActionTop: string;
    callToActionBottom: string;
  };

  tokarniRobotyChpkPage: ServicesPage;

  shlifovkaMetaluPage: {
    title: string;
    description: string;
    peculiaritiesTitle: string;
    listPeculiarities: { description: string; icon: string }[];
    servicesTitle: string;
    listServices: { description: string }[];
    callToActionTop: string;
    callToActionBottom: string;
  };

  termichnaObrobkaPage: {
    title: string;
    description: string;
    peculiaritiesTitle: string;
    listPeculiarities: { description: string; icon: string }[];
    servicesTitle: string;
    listServices: { description: string }[];
    callToActionTop: string;
    callToActionBottom: string;
  };

  frezerniRoboty: {
    title: string;
    description: string;
    peculiaritiesTitle: string;
    listPeculiarities: { description: string; icon: string }[];
    servicesTitle: string;
    listServices: { description: string }[];
    callToAction: string;
  };

  porizkaNaVerstati: {
    title: string;
    description: string;
    peculiaritiesTitle: string;
    listPeculiarities: { description: string; icon: string }[];
    servicesTitle: string;
    listServices: { description: string }[];
    callToActionTop: string;
    callToActionBottom: string;
  };

  lyttyaMetaluPage: {
    title: string;
    description: string;
    servicesTitle: string;
    listServices: { description: string }[];
    listServicesContinuation: { description: string }[];
    descriptionBenefits: string;
    peculiaritiesTitle: string;
    listPeculiarities: { description: string; icon: string }[];
    callToActionTop: string;
    callToActionBottom: string;
  };

  orderBenefits: {
    orderBenefitsTitle: string;
    listOrderBenefits: { title: string; icon: string }[];
  };

  zvaryuvannyaMetaluPage: ServicesPage;

  zaliznychniZapchastynyPage: {
    title: string;
    description: string;
    servicesTitle: string;
    listServices: { description: string }[];
    peculiaritiesTitle: string;
    listPeculiarities: { description: string; icon: string }[];
    question: string;
    answer: string;
  };

  zapchastynyDlyaSilhosptekhnikyPage: {
    title: string;
    description: string;
    servicesTitle: string;
    listServices: { description: string }[];
    descriptionBenefits: string;
    peculiaritiesTitle: string;
    listPeculiarities: { description: string; icon: string }[];
    question: string;
    answer: string;
  };

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
