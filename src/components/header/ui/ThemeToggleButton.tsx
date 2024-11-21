import React from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import ModeNightIcon from '@mui/icons-material/NightsStay';
import { useTheme } from '@/context/theme-context/ThemeContext';
import CustomButton from '@/components/ui/button/CustomButton';

const ThemeToggleButton: React.FC = () => {
  const { themeMode, toggleTheme } = useTheme();

  return (
    <>
      <CustomButton
        variant="button-themes"
        className="absolute z-20 right-[100px] top-[30px]"
        onClick={toggleTheme}
      >
        {themeMode === 'light' ? <LightModeIcon /> : <ModeNightIcon />}
      </CustomButton>
    </>
  );
};

export default ThemeToggleButton;
