'use client';
import React, { useState, useMemo } from 'react';
import { allPosts } from 'contentlayer/generated';
import { useRouter } from 'next/navigation';

import styles from './modal.module.scss';
import { SearchIcon, DocumentIcon } from 'assets';
import { useFocus, useKeyboardSelection, useOutsideClick } from 'hooks';

type SetState = React.Dispatch<React.SetStateAction<boolean>>;

interface Props {
  setIsSearchModalOpen: SetState;
  setIsSideNavOpen: SetState;
}

export default function SearchModal({
  setIsSearchModalOpen,
  setIsSideNavOpen,
}: Props) {
  const router = useRouter();
  const inputRef = useFocus<HTMLInputElement>();
  const [search, setSearch] = useState('');
  const { modalRef } = useOutsideClick(setIsSearchModalOpen);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);

  const filteredPosts = useMemo(
    () =>
      allPosts.filter(
        (item) =>
          item.title.toLowerCase().includes(search.toLowerCase()) ||
          item.keywords?.some((tag) =>
            tag.toLowerCase().includes(search.toLowerCase()),
          ),
      ),
    [search],
  );

  const handleNavitation = (url: string) => {
    router.push(url);
    setIsSearchModalOpen(false);
    setIsSideNavOpen(false);
  };

  const { handleKeyDown, selectedIndex, setSelectedIndex, listRef } =
    useKeyboardSelection<Post>(
      filteredPosts,
      setIsSearchModalOpen,
      handleNavitation,
      'url',
    );

  return (
    <div className={styles.wrapper}>
      <div className={styles.modal} ref={modalRef}>
        <div className={styles.inputWrapper}>
          <SearchIcon width={20} height={20} />
          <input
            onKeyDown={handleKeyDown}
            ref={inputRef}
            type="text"
            placeholder="Search for a keyword"
            value={search}
            onChange={handleChange}
          />
          <button type="button" onClick={() => setIsSearchModalOpen(false)}>
            Esc
          </button>
        </div>
        <div className={styles.list} ref={listRef}>
          {filteredPosts.map((post, index) => (
            <div
              onMouseOver={() => setSelectedIndex(index)}
              className={selectedIndex === index ? styles.isActive : ''}
              key={post._id}
              onClick={() => handleNavitation(post.url)}
            >
              <DocumentIcon width={20} height={20} />
              {post.title}
            </div>
          ))}
          {!filteredPosts.length && (
            <div className={styles.noResults}>No results for your search</div>
          )}
        </div>
      </div>
    </div>
  );
}
