import { useEffect, useState } from 'react';

export default function useTheme() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleThemeToggle = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    const isUserTheme = localStorage.getItem('color-theme');
    const isOsTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (isUserTheme) {
      setIsDarkMode(isUserTheme === 'dark');
    } else {
      setIsDarkMode(isOsTheme);
    }
  }, [setIsDarkMode]);

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      `${isDarkMode ? 'dark' : 'light'}`,
    );
    window.localStorage.setItem('color-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode, setIsDarkMode]);

  return { handleThemeToggle, isDarkMode };
}
