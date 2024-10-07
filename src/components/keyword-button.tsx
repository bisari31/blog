'use client';
import { useRouter } from 'next/navigation';
import { useKeywordActions } from 'stores/keyword-store';
import { twMerge } from 'tailwind-merge';

export interface KeywordLinkButtonProps {
  children: React.ReactNode;
  isActive?: boolean;
  keyword?: string;
}

export default function KeywordButton({
  children,
  isActive,
  keyword,
}: KeywordLinkButtonProps) {
  const { setKeyword } = useKeywordActions();
  const router = useRouter();
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (keyword) {
      setKeyword(keyword);
      router.push('/');
    }
  };
  return (
    <button
      onClick={handleClick}
      className={twMerge(
        'rounded-xl bg-gray-200 p-2 text-xs font-medium text-gray-600 hover:bg-primary hover:text-white',
        isActive && 'bg-primary text-white',
      )}
    >
      {children}
    </button>
  );
}
