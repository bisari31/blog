import 'styles/reset.scss';
import 'styles/global.scss';
import { Noto_Sans_KR, Fira_Code } from 'next/font/google';
import React from 'react';
import Header from 'components/header/Header';
import { ThemeContextProvider } from 'context/theme';

const notoSans = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500'],
});

const fira = Fira_Code({
  subsets: ['cyrillic'],
  weight: ['400'],
  variable: '--font-fira',
});

export const metadata = {
  title: '기술 블로그',
  description: '개발 관련 지식을 공유하는 블로그입니다.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={`${notoSans.className} ${fira.variable}`}>
        <ThemeContextProvider>
          <Header />
          <main>{children}</main>
          <div id="portal" />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
