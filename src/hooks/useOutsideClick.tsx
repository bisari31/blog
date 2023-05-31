import { useEffect, useRef } from 'react';

export default function useOutsideClick(
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLDivElement;
      if (!ref.current?.contains(target)) setModalOpen(false);
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [setModalOpen]);

  return ref;
}
