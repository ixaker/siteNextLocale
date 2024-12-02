import { PageProps } from '@/context/withStaticPathsAndProps';
import ButtonSubmitDrawing from '../button/ButtonSubmitDrawing';

interface CalculationSection {
  translations: PageProps['translations'];
  lang: PageProps['lang'];
}

const CalculationSection: React.FC<CalculationSection> = ({ translations, lang }) => {
  return (
    <div className="bg-bgImgHomeBottom min-h-[200px] bg-cover bg-center flex items-center justify-center mt-5">
      <ButtonSubmitDrawing translations={translations} lang={lang} />
    </div>
  );
};

export default CalculationSection;
