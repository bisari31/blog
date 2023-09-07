import styles from './heading3Component.module.scss';
import cn from 'classnames/bind';

const cx = cn.bind(styles);

export default function Heading3Component({
  children,
}: {
  children?: React.ReactNode;
}) {
  const isRefWrapper = children?.toString().startsWith('Reference');
  return <h3 className={cx('h3', isRefWrapper && 'ref')}>{children}</h3>;
}
