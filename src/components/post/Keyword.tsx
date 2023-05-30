'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

import styles from './keyword.module.scss';

interface Props {
  isKeywordsPage?: boolean;
  name: string;
  isActive?: boolean;
  onClick?: (name: string) => void;
}

export default function Keyword({
  name,
  onClick,
  isActive = false,
  isKeywordsPage = false,
}: Props) {
  const router = useRouter();
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isKeywordsPage && onClick) onClick(name);
    else router.push(`/keywords?path=${name}`);
  };

  return (
    <button
      className={`${styles.button} ${isActive ? styles.isActive : ''} ${
        isKeywordsPage ? styles.isKeywordsPage : ''
      }`}
      type="button"
      onClick={handleClick}
    >
      {name}
    </button>
  );
}
