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
  description: string;
  descriptionBottom: string;
  infoCard: { title: string; description?: string; list?: { description: string }[]; image: string }[];
  callToAction: string;
  callToActionGeneral?: string;
  callToActionBottom: string;
  srcImg: string;
  ourEquipmentTitle: string;
  ourEquipment: { title: string; name: string; description: string[]; image: string }[];
};
export type ProductPage = {
  title: string;
  description: string;
  descriptionBottom: string;
  servicesTitle: string;
  listServices: { description: string }[];
  peculiaritiesTitle: string;
  listPeculiarities: { description: string; icon: string }[];
  question: string;
  answer: string;
  srcImg: string;
};

export type HomePage = {
  // meta: Meta;
  srcImg: string;
  title: string;
  topTitle: string;
  bottomTitle: string;
  description: string;
  h2: string;
  h3: string;
  descriptionCompany: string;
};

export type ContactPage = {
  srcImg: string;
  title: string;
  address: string;
  descriptionAddress: string;
  email: string;
  descriptionEmail: string;
  phone: string;
  descriptionPhone: string;
  ourLocation: string;
  buildRoute: string;
  description: string;
};

export type CardData = { title: string; img: string; href: string };

export type ListAdvantages = { description: string; icon: string };

export type Translations = {
  locale: string;
  homePage: HomePage;
  cardData: CardData[];
  contactPage: ContactPage;
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
    filesSizeIsLarger: string;
    fileSizeIsLarger: string;
    inputTitle: string;
    submitBtn: string;
    dropFile: string;
    successfulSending: string;
    errorMessage: string;
    unknownError: string;
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
