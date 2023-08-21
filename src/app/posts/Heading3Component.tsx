import styles from './heading3Component.module.scss';

export default function Heading3Component({
  children,
}: {
  children?: React.ReactNode;
}) {
  const isRefWrapper = children?.toString().startsWith('참고');
  return (
    <h3 className={`${isRefWrapper ? styles.ref : ''}  ${styles.h3}`}>
      {children}
    </h3>
  );
}
