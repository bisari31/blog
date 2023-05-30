import { useEffect, useState } from 'react';

export default function useTheme() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      `${isDarkMode ? 'dark' : 'light'}`,
    );
  }, [isDarkMode]);

  return { handleToggleTheme, isDarkMode };
}
