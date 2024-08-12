import 'styles/style.scss';
import './globals.css';

import { title } from 'app/metadata';
import Header from 'components/header/header';
import { Metadata } from 'next';
import localFont from 'next/font/local';
import React from 'react';
import { Providers } from 'redux/providers';

const pretendard = localFont({
  src: '../assets/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});
const description = '프론트엔드 개발자 이상원의 기술 블로그입니다.';
const url = process.env.SITE_URL;
export const metadata: Metadata = {
  title,
  description,
  verification: {
    google: 'e-TNPhd8w4G89P7qHvpbNUMOzmwlO8jX-6zAin2jbK8',
    other: {
      'naver-site-verification': 'bd622f8e509823744a83f140397290ee8c2d4c23',
    },
  },
  openGraph: {
    title,
    description,
    url,
    locale: 'ko_KR',
    type: 'website',
    images: [
      {
        url: '/imgs/og.jpg',
        width: 800,
        height: 600,
      },
      {
        url: '/imgs/og.jpg',
        width: 1800,
        height: 1600,
      },
    ],
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="ko">
        <body className={pretendard.variable}>
          <Header />
          <main>{children}</main>
          <div id="portal" />
        </body>
      </html>
    </Providers>
  );
}
