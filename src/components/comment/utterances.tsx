'use client';

import cn from 'classnames/bind';

import styles from './utterances.module.scss';

const THEME_LIST = [
  { theme: 'github-dark', name: 'dark' },
  { theme: 'github-light', name: 'light' },
];

const cx = cn.bind(styles);

export default function Utterances() {
  return (
    <>
      {THEME_LIST.map(({ theme, name }) => (
        <section
          key={theme}
          className={cx('wrapper', styles[name])}
          ref={(elem) => {
            if (!elem) {
              return;
            }
            const scriptElem = document.createElement('script');
            scriptElem.src = 'https://utteranc.es/client.js';
            scriptElem.async = true;
            scriptElem.setAttribute('repo', 'bisari31/blog');
            scriptElem.setAttribute('issue-term', 'title');
            scriptElem.setAttribute('theme', theme);
            scriptElem.setAttribute('label', 'blog-comment');
            scriptElem.crossOrigin = 'anonymous';
            elem.appendChild(scriptElem);
          }}
        />
      ))}
    </>
  );
}
