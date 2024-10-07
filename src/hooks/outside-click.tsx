import { useEffect, useRef } from 'react';

import useScrollHidden from './scroll-hidden';

export default function useOutsideClick(
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
) {
  const ref = useRef<HTMLDivElement>(null);
  useScrollHidden();

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLDivElement;
      if (ref.current && !ref.current.contains(target)) setModalOpen(false);
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [setModalOpen]);

  return ref;
}
