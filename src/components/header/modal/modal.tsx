'use client';

import { DocumentIcon, SearchIcon } from 'assets/icons';
import { useFocus, useKeyboardSelection, useOutsideClick } from 'hooks';
import { sortedPosts } from 'lib/contentlayer';
import { useRouter } from 'next/navigation';
import React, { useMemo, useState } from 'react';

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
  const modalRef = useOutsideClick(setIsSearchModalOpen);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);

  const filteredPosts = useMemo(
    () =>
      sortedPosts.filter(
        ({ title, keywords }) =>
          title.toLowerCase().includes(search.toLowerCase()) ||
          keywords?.some((tag) =>
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
    <div>
      <div ref={modalRef}>
        <div>
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
        <div ref={listRef}>
          {filteredPosts.map((post, index) => (
            <div
              onMouseOver={() => setSelectedIndex(index)}
              key={post._id}
              onClick={() => handleNavitation(post.url)}
            >
              <DocumentIcon width={20} height={20} />
              <p>{post.title}</p>
            </div>
          ))}
          {!filteredPosts.length && <div>No results for your search</div>}
        </div>
      </div>
    </div>
  );
}
