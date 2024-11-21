import { GetStaticPaths, GetStaticProps } from 'next';
import fs from 'fs';
import path from 'path';

type Props = {
  translations: { [key: string]: string };
  lang: string;
};

const Home = ({ translations, lang }: Props) => {
  return (
    <div>
      <h1>{translations.welcome}</h1>
      <p>{translations.about}</p>
      <p>Current language: {lang}</p>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const languages = ['en', 'uk'];
  const paths = languages.flatMap((lang) => [
    { params: { lang } },
    { params: { lang, slug: 'contact' } },
  ]);

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { lang } = params as { lang: string };

  // Читаем переводы из файлов JSON
  const translationsPath = path.join(process.cwd(), 'locales', `${lang}.json`);
  const translations = JSON.parse(fs.readFileSync(translationsPath, 'utf8'));

  return {
    props: {
      translations,
      lang,
    },
  };
};

export default Home;
