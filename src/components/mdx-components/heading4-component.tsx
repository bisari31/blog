import styles from './heading4-component.module.scss';
import cn from 'classnames/bind';

const cx = cn.bind(styles);

export default function Heading4Component({
  children,
}: {
  children?: React.ReactNode;
}) {
  const isRefWrapper = children?.toString().startsWith('Reference');
  return <h4 className={cx('h4', isRefWrapper && 'ref')}>{children}</h4>;
}
