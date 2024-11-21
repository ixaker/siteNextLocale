import { GetStaticPaths, GetStaticProps } from 'next';
import fs from 'fs';
import path from 'path';

type Props = {
  translations: { [key: string]: string };
  lang: string;
};

const Page: React.FC<Props> = ({ translations }) => (
  <div>
    <h1>{translations.welcome}</h1>
    <h1>{translations.title}</h1>
  </div>
);

export const getStaticPaths: GetStaticPaths = async () => {
  const languages = ['en', 'uk'];

  // Генерируем пути для каждого языка
  const paths = languages.map((lang) => ({
    params: { lang },
  }));

  return {
    paths,
    fallback: false, // Страницы для других языков не генерируются
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const lang = params?.lang || 'en';
  const translationsPath = path.join(process.cwd(), 'locales', `${lang}.json`);
  const translations = JSON.parse(fs.readFileSync(translationsPath, 'utf8'));

  return {
    props: {
      translations,
      lang,
    },
  };
};

export default Page;
