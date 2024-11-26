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
    <div className="flex flex-col gap-3 fixed bottom-12 right-4">
      <CustomButton
        ariaLabel="Send Email"
        style={{
          background: primaryColor,
        }}
        variant="communication-button"
      >
        <EmailIcon
          className="hover:!text-activeColor  transition-all duration-300 ease-in-out"
          style={{ color: secondaryColor }}
          sx={iconSize}
        />
      </CustomButton>
      <CustomButton
        ariaLabel="Phone"
        style={{
          background: primaryColor,
        }}
        variant="communication-button"
      >
        <PhoneIcon
          className="hover:!text-activeColor  transition-all duration-300 ease-in-out"
          style={{ color: secondaryColor }}
          sx={iconSize}
        />
      </CustomButton>
    </div>
  );
};

export default CommunicationButton;
