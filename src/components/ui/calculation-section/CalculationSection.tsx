import CustomButton from '../button/CustomButton';

interface CalculationSection {
  textBtn: string;
}

const CalculationSection: React.FC<CalculationSection> = ({ textBtn }) => {
  return (
    <div className="bg-bgImgHomeBottom min-h-[200px] bg-cover bg-center flex items-center justify-center mt-5">
      <CustomButton variant="send-btn">{textBtn}</CustomButton>
    </div>
  );
};

export default CalculationSection;
