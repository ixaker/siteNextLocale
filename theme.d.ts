// src/theme.d.ts
import '@mui/material/styles';

interface ExtendedTheme {
  buttonTheme: {
    color: string;
    backroundcolor: string;
    css: string;
  };
  defaultButton: {
    color: string;
    backroundcolor: string;
    css: string;
  };
}

declare module '@mui/material/styles' {
  // Расширяем интерфейс Theme, добавляем новый объект custom
  interface Theme {
    custom: ExtendedTheme;
  }

  // Дополнительно можно расширить интерфейс ThemeOptions,
  // чтобы добавить поддержку кастомных свойств при создании темы

  interface ThemeOptions {
    custom: ExtendedTheme;
  }
}
