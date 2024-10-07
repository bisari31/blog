import KeywordButton from 'components/keyword-button';

interface KeywordListProps {
  keywords: string[] | undefined;
}

export default function KeywordList({ keywords }: KeywordListProps) {
  return (
    <ul className="flex gap-[10px]">
      {keywords?.map((keyword) => (
        <li key={keyword}>
          <KeywordButton keyword={keyword}>{keyword}</KeywordButton>
        </li>
      ))}
    </ul>
  );
}
