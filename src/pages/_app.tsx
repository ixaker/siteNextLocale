import '../styles/globals.scss'; // Подключение глобальных стилей
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { ThemeProvider, CssBaseline, useMediaQuery } from '@mui/material';
import { useState, useEffect, useMemo } from 'react';
import { lightTheme, darkTheme } from '../theme'; // Импорт тем

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
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Базовые стили MUI */}
      <Layout>
        <button
          onClick={toggleTheme}
          style={{
            position: 'fixed',
            top: '50px',
            right: '10px',
            padding: '10px 15px',
            background: theme.palette.primary.main,
            color: theme.palette.background.paper,
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Toggle Theme
        </button>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
