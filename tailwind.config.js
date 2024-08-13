/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ['var(--font-pretendard)'],
      },
      colors: {
        bg: '#F2F4F7',
        gray200: '#E4E7EC',
        gray500: '#667085',
        gray600: '#475467',
        gray800: '#1D2939',
      },
    },
  },
  plugins: [],
};
