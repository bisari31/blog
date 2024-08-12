'use client';
import { useAppDispatch, useAppSelector } from 'hooks';
import { keywordCounts } from 'lib/contentlayer';
import { useRouter } from 'next/navigation';
import { setKeyword } from 'redux/slices/keywordSlice';

interface Props {
  isKeywordsPage?: boolean;
  isDetailPage?: boolean;
  keywords: Post['keywords'];
}

export default function Keywords({
  keywords,
  isKeywordsPage = false,
  isDetailPage = false,
}: Props) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { selectedKeyword } = useAppSelector((state) => state.keyword);
  const handleNavigation = (e: React.MouseEvent, keyword: string) => {
    e.preventDefault();
    if (isDetailPage) router.push('/');
    dispatch(setKeyword(keyword));
  };
  return (
    <div
    // className={cx('keywords', {
    //   isKeywordsPage,
    //   isDetailPage,
    // })}
    >
      {keywords?.map((keyword) => (
        <button
          type="button"
          onClick={(e) => handleNavigation(e, keyword)}
          key={keyword}
          // className={cx(keyword === selectedKeyword && 'isActive')}
        >
          {keyword}{' '}
          {isKeywordsPage && <small>({keywordCounts[keyword]})</small>}
        </button>
      ))}
    </div>
  );
}
