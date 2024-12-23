import localFont from 'next/font/local';

export const pretendard = localFont({
  src: [
    { path: '../assets/fonts/Pretendard-Black.subset.woff2', weight: '900' },
    { path: '../assets/fonts/Pretendard-Bold.subset.woff2', weight: '700' },
    { path: '../assets/fonts/Pretendard-SemiBold.subset.woff2', weight: '600' },
    { path: '../assets/fonts/Pretendard-Medium.subset.woff2', weight: '500' },
    { path: '../assets/fonts/Pretendard-Regular.subset.woff2', weight: '400' },
  ],
  display: 'swap',
});
