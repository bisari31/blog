import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

export interface LinkProps {
  children: React.ReactNode;
  keyword: string;
  className?: string;
  isActive?: boolean;
}

export const styles =
  'bg-bg rounded-lg px-2 py-2 text-xs font-medium text-gray-800 hover:bg-gray-800 hover:text-white';

export default function KeywordLinkButton({
  children,
  keyword,
  className,
  isActive,
}: LinkProps) {
  return (
    <Link
      href={{ query: { keyword } }}
      className={twMerge(
        styles,
        className,
        isActive && 'bg-gray-800 text-white',
      )}
    >
      {children}
    </Link>
  );
}
