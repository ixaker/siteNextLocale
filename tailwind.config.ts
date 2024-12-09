import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        activeColor: '#c43c1e',
      },
      boxShadowColor: {
        default: '[0_10px_30px_#000]',
      },
      backgroundImage: {
        bgImg: "url('/bgImg.webp')",
        bgTokarHome: 'url(/assets/tokarni-roboty-chpk.jpg)',
        bgImgHomeBottom: 'url(/assets/bgImgCalculationSection.webp)',
      },
      height: {
        'fill-available': '-webkit-fill-available',
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.hover-text-active': {
          transition: 'all 300ms ease-in-out',
          '&:hover': {
            color: '#c43c1e',
          },
        },
      });
    }),
  ],
};
export default config;
