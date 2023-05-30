import { useEffect, useState } from 'react';

export default function useTheme() {
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches,
  );

  const handleToggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    const isUserTheme = localStorage.getItem('color-theme');
    if (isUserTheme) {
      console.log(isUserTheme);
      setIsDarkMode(isUserTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      `${isDarkMode ? 'dark' : 'light'}`,
    );
    window.localStorage.setItem('color-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return { handleToggleTheme, isDarkMode };
}
