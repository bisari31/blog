import styles from './anchor-component.module.scss';
import cn from 'classnames/bind';

const cx = cn.bind(styles);

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
      className={cx('a', isRef ? 'ref' : 'caption')}
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-disabled={href === '#'}
    >
      {childrenArray?.[0]}
    </a>
  );
}
