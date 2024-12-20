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

  const sendingAnalytics = (btnLabel: string) => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', `Клик на кнпоку: ${btnLabel}`, { event_category: 'Button', event_label: 'Send a Letter ' });
    }
  };

  return (
    <div className="flex flex-col gap-3 fixed bottom-12 right-4 z-[99]">
      <a href="mailto:info@qpart.com.ua">
        <CustomButton
          onClick={() => sendingAnalytics('Отправить письмо')}
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
      <a href="tel:+380989950760">
        <CustomButton
          onClick={() => sendingAnalytics('Позвонить')}
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
