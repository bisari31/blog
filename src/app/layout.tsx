import { Noto_Sans_KR } from 'next/font/google';
import React from 'react';

import 'styles/reset.scss';
import 'styles/global.scss';
import Header from 'components/header/Header';

const notoSans = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500'],
});

export const metadata = {
  title: '이상원 기술 블로그',
  description: '프론트엔드 개발자 이상원입니다.',
  verification: {
    google: 'e-TNPhd8w4G89P7qHvpbNUMOzmwlO8jX-6zAin2jbK8',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={notoSans.className}>
        <Header />
        <main>{children}</main>
        <div id="portal" />
      </body>
    </html>
  );
}
