import ButtonSubmitDrawing from '../button/ButtonSubmitDrawing';

interface CalculationSection {
  textBtn: string;
}

const CalculationSection: React.FC<CalculationSection> = ({ textBtn }) => {
  return (
    <div className="bg-bgImgHomeBottom min-h-[200px] bg-cover bg-center flex items-center justify-center mt-5">
      <ButtonSubmitDrawing text={textBtn} />
    </div>
  );
};

export default CalculationSection;
