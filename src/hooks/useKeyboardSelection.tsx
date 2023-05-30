import React, { useEffect, useRef, useState } from 'react';

export default function useKeyboardSelection<T>(
  list: T[],
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
  navigator: (url: T[keyof T]) => void,
  property: keyof T,
) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const listRef = useRef<HTMLDivElement>(null);

  const scrollToElement = (index: number) => {
    listRef.current?.children[index]?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    let index;
    switch (e.key) {
      case 'Escape':
        setModalOpen(false);
        break;
      case 'ArrowUp':
        index = selectedIndex <= 0 ? list.length - 1 : selectedIndex - 1;
        setSelectedIndex(index);
        scrollToElement(index);
        break;
      case 'ArrowDown':
        index = selectedIndex === list.length - 1 ? 0 : selectedIndex + 1;
        setSelectedIndex(index);
        scrollToElement(index);
        break;
      case 'Enter':
        navigator(list[selectedIndex][property]);
        break;
      default:
        break;
    }
  };

  return { handleKeyDown, selectedIndex, setSelectedIndex, listRef };
}
