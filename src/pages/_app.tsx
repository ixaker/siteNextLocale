import '../styles/globals.scss'; // Подключение глобальных стилей
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { ThemeProvider, CssBaseline, useMediaQuery } from '@mui/material';
import { useState, useEffect, useMemo } from 'react';
import { lightTheme, darkTheme } from '../theme'; // Импорт тем
import { LanguageProvider } from '../context/LanguageContext';
import LightModeIcon from '@mui/icons-material/LightMode';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import CustomButton from '@/components/ui/button/CustomButton';

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

  const theme = useMemo(
    () => (themeMode === 'dark' ? darkTheme : lightTheme),
    [themeMode]
  );

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
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default MyApp;
