import { HomeComponentProps, ProductComponentProps, ServicesComponentProps } from '@/context/withStaticPathsAndProps';
import ButtonSubmitDrawing from '../button/ButtonSubmitDrawing';

const CalculationSection: React.FC<ServicesComponentProps | ProductComponentProps | HomeComponentProps> = (componentProps) => {
  return (
    <div
      className={`min-h-[200px] bg-cover bg-center flex items-center justify-center mt-5`}
      style={{ backgroundImage: `url('/assets/bgImgCalculationSection.webp${componentProps.version}')` }}
    >
      <ButtonSubmitDrawing translations={componentProps.translations} lang={componentProps.lang} />
    </div>
  );
};

export default CalculationSection;
