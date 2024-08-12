import styles from './heading4-component.module.scss';

export default function Heading4Component({
  children,
}: {
  children?: React.ReactNode;
}) {
  const isRefWrapper = children?.toString().startsWith('Reference');
  return <h4>{children}</h4>;
  // return <h4 className={cx('h4'k, isRefWrapper && 'ref')}>{children}</h4>;
}
