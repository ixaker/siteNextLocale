import React from 'react';
import CustomButton from './CustomButton';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

interface PropsCommunicationButton {
  primaryColor: string;
  secondaryColor: string;
}

const iconSize = {
  fontSize: {
    xs: '20px',
    sm: '30',
    md: '40px',
    lg: '50px',
  },
};

const CommunicationButton: React.FC<PropsCommunicationButton> = ({ primaryColor, secondaryColor }) => {
  return (
    <div className="flex flex-col gap-3">
      <CustomButton
        style={{
          background: primaryColor,
        }}
        variant="communication-button"
      >
        <EmailIcon style={{ color: secondaryColor }} sx={iconSize} />
      </CustomButton>
      <CustomButton
        style={{
          background: primaryColor,
        }}
        variant="communication-button"
      >
        <PhoneIcon style={{ color: secondaryColor }} sx={iconSize} />
      </CustomButton>
    </div>
  );
};

export default CommunicationButton;
