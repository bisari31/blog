'use client';
import { useThemeContext } from 'context/theme';
import styles from './utterances.module.scss';

export default function Utterances() {
  const { isDarkMode } = useThemeContext();
  console.log(isDarkMode);
  return (
    <section
      className={styles.wrapper}
      ref={(elem) => {
        if (!elem) {
          return;
        }
        const scriptElem = document.createElement('script');
        scriptElem.src = 'https://utteranc.es/client.js';
        scriptElem.async = true;
        scriptElem.setAttribute('repo', 'bisari31/blog');
        scriptElem.setAttribute('issue-term', 'title');
        scriptElem.setAttribute(
          'theme',
          isDarkMode ? 'github-dark' : 'github-light',
        );
        scriptElem.setAttribute('label', 'blog-comment');
        scriptElem.crossOrigin = 'anonymous';
        elem.appendChild(scriptElem);
      }}
    />
  );
}
