export default function AnChorComponent({
  href,
  children,
}: {
  href?: string;
  children?: React.ReactNode;
}) {
  const childrenArray = children?.toString().split(' !!');
  const isRef = childrenArray && childrenArray.length > 1;
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-disabled={href === '#'}
    >
      {childrenArray?.[0]}
    </a>
  );
}
