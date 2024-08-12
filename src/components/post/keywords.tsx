import { keywordCounts } from 'lib/contentlayer';
import Link from 'next/link';

interface Props {
  isMainPage?: boolean;
  keywords: Post['keywords'];
}

export default function Keywords({ keywords, isMainPage = false }: Props) {
  return (
    <div className="flex gap-2">
      {keywords?.map((keyword) => (
        <Link
          href={{ query: { keyword } }}
          key={keyword}
          className="bg-bg rounded-lg px-2 py-2 text-xs font-medium text-gray-600"
        >
          {keyword} {isMainPage && <small>({keywordCounts[keyword]})</small>}
        </Link>
      ))}
    </div>
  );
}
