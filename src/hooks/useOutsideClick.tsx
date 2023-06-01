import { useEffect, useRef } from 'react';
import useScrollHidden from './useScrollHidden';

export default function useOutsideClick(
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
) {
  const ref = useRef<HTMLDivElement>(null);
  useScrollHidden();

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLDivElement;
      console.log(ref.current);
      if (ref.current && !ref.current.contains(target)) setModalOpen(false);
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [setModalOpen]);

  return ref;
}
