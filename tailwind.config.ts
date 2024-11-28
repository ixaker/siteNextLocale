import type { Config } from 'tailwindcss';

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
        bgImgHomeBottom: 'url(/assets/pipe.webp)',
      },
      height: {
        'fill-available': '-webkit-fill-available',
      },
    },
  },
  plugins: [],
};
export default config;
