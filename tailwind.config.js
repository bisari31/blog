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
        primary: '#3574b9',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            img: {
              margin: 'auto',
            },
            'pre code': {
              fontSize: '12px',
              lineHeight: '18px',
            },
            a: {
              color: 'theme(colors.primary)',
            },
            h2: {
              color: 'theme(colors.gray.700)',
            },
            h3: {
              color: 'theme(colors.gray.700)',
            },
            h4: {
              color: 'theme(colors.gray.700)',
            },
            figcaption: {
              textAlign: 'center',
            },
            maxWidth: null,
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
