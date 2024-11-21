import '../styles/globals.scss'; // Подключение глобальных стилей
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { ThemeProvider, CssBaseline, useMediaQuery } from '@mui/material';
import { useState, useEffect, useMemo } from 'react';
import { lightTheme, darkTheme } from '../theme'; // Импорт тем
import { LanguageProvider } from '../context/LanguageContext';
import CustomButton from '@/components/ui/button/CustomButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import ModeNightIcon from '@mui/icons-material/ModeNight';

function MyApp({ Component, pageProps }: AppProps) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)'); // Системная тема
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light');

  // Определение начальной темы
  useEffect(() => {
    const savedTheme = localStorage.getItem('themeMode');
    if (savedTheme) {
      setThemeMode(savedTheme as 'light' | 'dark');
    } else {
      setThemeMode(prefersDarkMode ? 'dark' : 'light');
    }
  }, [prefersDarkMode]);

  const theme = useMemo(() => (themeMode === 'dark' ? darkTheme : lightTheme), [themeMode]);

  const toggleTheme = () => {
    const newTheme = themeMode === 'light' ? 'dark' : 'light';
    setThemeMode(newTheme);
    localStorage.setItem('themeMode', newTheme);
  };
  return (
    <LanguageProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline /> {/* Базовые стили MUI */}
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <CustomButton
          variant="button-themes"
          className="absolute z-20 right-[100px] top-[30px]"
          onClick={toggleTheme}
        >
          {themeMode === 'light' ? <LightModeIcon /> : <ModeNightIcon />}
        </CustomButton>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default MyApp;
