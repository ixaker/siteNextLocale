import { GetStaticPropsContext, GetStaticPropsResult, GetStaticPaths } from 'next';
import path from 'path';
import fs from 'fs';

//const SUPPORTED_LANGUAGES = ['en', 'uk']; // Поддерживаемые языки

// Определяем поддерживаемые языки динамически
const getSupportedLanguages = (): string[] => {
  const localesPath = path.join(process.cwd(), 'locales');
  return fs.readdirSync(localesPath).map((file) => file.replace('.json', '')); // Убираем расширение
};

export const SUPPORTED_LANGUAGES = getSupportedLanguages();

// Загружает переводы из файловой системы
const loadTranslations = (lang: string) => {
  const filePath = path.join(process.cwd(), 'locales', `${lang}.json`);

  if (fs.existsSync(filePath)) {
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  } else {
    console.warn(`Translations not found for language: ${lang}`);
    return {
      welcome: 'Welcome',
      comingSoon: 'Coming Soon!',
      inDevelopment: 'Page is under development.',
    }; // Значения по умолчанию
  }
};

// Функция обёртка для getStaticProps
export const withStaticProps = async <P>(
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<P>> => {
  const lang = (context.params?.lang as string) || 'en';

  const translations = loadTranslations(lang);

  return {
    props: {
      translations,
      lang,
    } as P,
  };
};

export type PageProps = {
  translations: { [key: string]: string };
  lang: string;
};

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
