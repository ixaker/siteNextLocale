import React from 'react';
import CustomButton from './CustomButton';
import { useTheme } from '@mui/material';
import { darkTheme, lightTheme } from '@/theme';

interface PropsCommunicationButton {
  email: React.ReactNode;
  phone: React.ReactNode;
}

const CommunicationButton: React.FC<PropsCommunicationButton> = ({ email, phone }) => {
  const theme = useTheme();

  const currentTheme = theme.palette.mode === 'dark' ? darkTheme : lightTheme;
  const primaryColor = currentTheme.palette.primary.main;
  const secondaryColor = currentTheme.palette.secondary.main;

  return (
    <div className="flex flex-col gap-3 fixed bottom-12 right-4">
      <a href="mailto:pavelgluskov264@gmail.com">
        <CustomButton
          ariaLabel="Send Email"
          style={{
            background: primaryColor,
            color: secondaryColor,
          }}
          variant="communication-button"
        >
          {email}
        </CustomButton>
      </a>
      <a href="tel:+380505917397">
        <CustomButton
          ariaLabel="Phone"
          style={{
            background: primaryColor,
            color: secondaryColor,
          }}
          variant="communication-button"
        >
          {phone}
        </CustomButton>
      </a>
    </div>
  );
};

export default CommunicationButton;
