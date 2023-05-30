import React from 'react';

import styles from './keywordWrapper.module.scss';

export default function KeywordWrapper({
  isKeywordsPage,
  children,
}: {
  isKeywordsPage?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${styles.keywords} ${
        isKeywordsPage ? styles.isKeywordsPage : ''
      }`}
    >
      {children}
    </div>
  );
}
