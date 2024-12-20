import { GetStaticPropsContext, GetStaticPropsResult, GetStaticPaths } from 'next';
import path from 'path';
import fs from 'fs';
import { ContactPage, HomePage, ProductPage, ServicesPage, Translations } from '../../locales/types';

export const getDefaultLanguage = (langFromUrl?: string): string => {
  const defaultLanguage = 'uk';

  return SUPPORTED_LANGUAGES.includes(langFromUrl || '') ? langFromUrl! : defaultLanguage;
};

// Определяем поддерживаемые языки динамически
const getSupportedLanguages = (): string[] => {
  const localesPath = path.join(process.cwd(), 'locales');
  const files = fs.readdirSync(localesPath);
  // получаем массив джейсонов с язіком
  const jsonFiles = files.filter((file) => path.extname(file) === '.json');

  return jsonFiles.map((file) => file.replace('.json', '')); // Убираем расширение
};

export const SUPPORTED_LANGUAGES = getSupportedLanguages();

// Загружает переводы из файловой системы
const loadTranslations = (lang: string): Translations => {
  const filePath = path.join(process.cwd(), 'locales', `${lang}.json`);

  if (fs.existsSync(filePath)) {
    return JSON.parse(fs.readFileSync(filePath, 'utf-8')) as Translations;
  } else {
    console.warn(`Translations not found for language: ${lang}`);

    const defaultFilePath = path.join(process.cwd(), 'locales', `uk.json`);
    return JSON.parse(fs.readFileSync(defaultFilePath, 'utf-8')) as Translations;
  }
};
// Функция обёртка для getStaticProps
export const withStaticProps = async <P>(context: GetStaticPropsContext): Promise<GetStaticPropsResult<P>> => {
  const lang = (context.params?.lang as string) || 'uk';

  const translations = loadTranslations(lang);

  return {
    props: {
      translations,
      lang,
      supportedLanguages: SUPPORTED_LANGUAGES,
      defaultLanguage: getDefaultLanguage(),
      version: `?v=${new Date().getTime()}`.slice(0, 9),
    } as P,
  };
};

export type PageProps = {
  translations: Translations;
  lang: string;
  supportedLanguages: string[];
  defaultLanguage: string;
  children?: React.ReactNode;
  version: string;
};

export type ServicesComponentProps = {
  translations: Translations;
  lang: string;
  supportedLanguages: string[];
  translationsPage: ServicesPage;
  version: string;
};
export type ProductComponentProps = {
  translations: Translations;
  lang: string;
  supportedLanguages: string[];
  translationsPage: ProductPage;
  version: string;
};

export type HomeComponentProps = {
  translations: Translations;
  lang: string;
  supportedLanguages: string[];
  translationsPage: HomePage;
  version: string;
};

export type ContactComponentsProps = {
  translations: Translations;
  lang: string;
  supportedLanguages: string[];
  translationsPage: ContactPage;
  version: string;
};

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}
// Функция для создания путей
export const withStaticPaths: GetStaticPaths = async () => {
  const paths = SUPPORTED_LANGUAGES.map((lang) => ({
    params: { lang },
  }));

  return {
    paths,
    fallback: false,
  };
};
