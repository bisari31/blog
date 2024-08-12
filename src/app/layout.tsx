import { Noto_Sans_KR } from 'next/font/google';
import React from 'react';

import 'styles/style.scss';
import './globals.css';
import Header from 'components/header/header';
import { Providers } from 'redux/providers';
import { Metadata } from 'next';
import { title } from 'app/metadata';

const noto_sans_kr = Noto_Sans_KR({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
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
        <body className={noto_sans_kr.className}>
          <Header />
          <main>{children}</main>
          <div id="portal" />
        </body>
      </html>
    </Providers>
  );
}
