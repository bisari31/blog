import './globals.css';

import Header from 'components/header';
import { description, title } from 'constants/metadata';
import { pretendard } from 'lib/font';
import { Metadata } from 'next';
import React from 'react';

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
    url: process.env.SITE_URL,
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
    <html lang="ko">
      <body
        className={`${pretendard.variable} flex min-h-screen flex-col bg-bg font-pretendard text-gray-800`}
      >
        <Header />
        <main className="flex flex-1 px-4 pb-[100px] pt-10 sm:px-[37px] md:pt-14">
          <div className="mx-auto flex min-h-full w-full max-w-4xl flex-1">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
