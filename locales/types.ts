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
    callToActionTop: string;
    callToActionBottom: string;
  };

  tokarniRobotyChpkPage: {
    title: string;
    description: string;
    peculiaritiesTitle: string;
    listPeculiarities: { description: string; icon: string }[];
    servicesTitle: string;
    listServices: { description: string }[];
    callToActionTop: string;
    callToActionBottom: string;
  };

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

  indyvidualniZamovlennya: {
    title: string;
    description: string;
    peculiaritiesTitle: string;
    listPeculiarities: { description: string; icon: string }[];
    servicesTitle: string;
    listServices: { description: string }[];
    question: string;
    answer: string;
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
    callToActionTop: string;
    callToActionBottom: string;
  };

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
    nameBtn: string;
    title: string;
    descriptionBtn: string;
    description: string;
    fileName: string;
    noFile: string;
    limitation: string;
    inputTitle: string;
    numberPhone: string;
    submitBtn: string;
    removeBtn: string;
    sendingBtn: string;
    fieldCheck: string;
  };

  welcome: string;
  comingSoon: string;
  inDevelopment: string;

  footer: {
    join: string;
  };
  btnSend: string;
};
