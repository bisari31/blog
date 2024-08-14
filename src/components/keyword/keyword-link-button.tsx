import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

export interface LinkProps {
  children: React.ReactNode;
  keyword: string;
  isActive?: boolean;
}

export const styles =
  'rounded-xl p-2 text-xs font-medium bg-gray-200 text-gray-600 hover:bg-primary hover:text-white';

export default function KeywordLinkButton({
  children,
  keyword,
  isActive,
}: LinkProps) {
  return (
    <Link
      href={{ query: { keyword } }}
      className={twMerge(styles, isActive && 'bg-primary text-white')}
    >
      {children}
    </Link>
  );
}
