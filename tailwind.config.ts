import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/share/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      wite: '#FFFFFF',
      black: '#000000',
      error: '#FF3257',
      warning: '#EE706B',
      primary: '#2264DC',
      secondary: '#4FE6AF',
      gray: {
        '1': '#242424',
        '2': '#424242',
        '3': '#616161',
        '4': '#C7C7C7',
        '5': '#D1D1D1',
        '6': '#F5F5F5',
      },
      blue: {
        '0': '#E7F5FF',
        '1': '#D0EBFF',
        '2': '#A5D8FF',
        '3': '#74C0FC',
        '4': '#4DABF7',
        '5': '#339AF0',
        '6': '#228BE6',
        '7': '#1C7ED6',
        '8': '#1971C2',
        '9': '#1864AB',
      },
    },
  },
  plugins: [],
};
export default config;
