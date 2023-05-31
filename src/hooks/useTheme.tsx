import { useEffect } from 'react';
import { useThemeContext } from 'context/theme';

export default function useTheme() {
  // <<<<<<< Updated upstream
  //   const [isDarkMode, setIsDarkMode] = useState(false);
  // =======
  const { isDarkMode, setIsDarkMode } = useThemeContext();

  const handleToggleTheme = () => {
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

  return { handleToggleTheme, isDarkMode };
}
