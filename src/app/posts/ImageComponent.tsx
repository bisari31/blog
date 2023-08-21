import Image from 'next/image';

export default function ImageComponent(props: any) {
  const substrings = props.alt?.split(' ');
  const alt = substrings[0] ?? '';
  const width = substrings[1] ?? 1000;
  return (
    <Image
      src={props.src}
      alt={alt}
      width={width}
      height={0}
      style={{
        maxWidth: '100%',
        height: 'auto',
        display: 'block',
        margin: '0 auto',
      }}
    />
  );
}
