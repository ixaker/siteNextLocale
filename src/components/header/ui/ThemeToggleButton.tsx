import React from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import ModeNightIcon from '@mui/icons-material/NightsStay';
import { useTheme } from '@/context/theme-context/ThemeContext';
import CustomButton from '@/components/ui/button/CustomButton';

const ThemeToggleButton: React.FC = () => {
  const { themeMode, toggleTheme } = useTheme();

  const styleIconBtn = {
    width: '50px',
  };

  return (
    <>
      <CustomButton variant="button-themes" onClick={toggleTheme}>
        {themeMode === 'light' ? <LightModeIcon sx={styleIconBtn} /> : <ModeNightIcon />}
      </CustomButton>
    </>
  );
};

export default ThemeToggleButton;
