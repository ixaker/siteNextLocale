import React from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import ModeNightIcon from '@mui/icons-material/NightsStay';
import { useTheme } from '@/context/theme-context/ThemeContext';
import CustomButton from '@/components/ui/button/CustomButton';

const ThemeToggleButton: React.FC = () => {
  const { themeMode, toggleTheme } = useTheme();

  const styleIconBtn = {
    fontSize: {
      xs: '30px',
      sm: '30px',
      md: '35px',
      lg: '40px',
    },
  };

  return (
    <>
      <CustomButton
        ariaLabel="Theme"
        variant="button-themes"
        className="flex items-center justify-center"
        onClick={toggleTheme}
      >
        {themeMode === 'light' ? (
          <LightModeIcon sx={styleIconBtn} style={{ color: 'white' }} />
        ) : (
          <ModeNightIcon sx={styleIconBtn} style={{ color: 'black' }} />
        )}
      </CustomButton>
    </>
  );
};

export default ThemeToggleButton;
