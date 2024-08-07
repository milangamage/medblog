import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'silver-gradient': 'linear-gradient(92.77deg, #7a7975 14.91%, #d0cfcb 53.37%)',
      },
      colors: {
        blue: {
          30: '#E0E5F0',
          50: '#F7FBFF',
          100: '#25A5E8',
          150: '#0C89CA',
          200: '#EBF8FF',
          250: '#172B4D',
          500: '#0D1A3E',
          400: '#1C9BDD',
          390: '#112B53',
          240: '#345675',
          450: '#2E4465',
          900: '#0E1939',
          950: '#222222',
          600: '#0D1A3D',
          1000: '#07121E',
          1050: '#070C10',
          700: '#0A2F6A',
          800: '#070C10',
          850: '#0F141C',
        },
        gray: {
          150: '#D9D7D7DE',
          300: '#F8F8F8',
          400: '#999999',
          450: '#666666',
          600: '#5C5E64',
          700: '#575E72',
          800: '#191C24',
          900: '#515869',
          320: '#F4F4F4',
          340: '#FBFCFC',
          360: '#555965',
          80: '#F5F5F5',
          120: '#3E424D',
          420: '#EAEAEA',
          440: '#E9EFF4',
          480: '#535864',
          500: '#ADADAD',
          510: '#F6F6F6',
          520: '#8D8D8D',
          530: '#BEC2CA',
          540: '#F9F9F9',
          570: '#CBCCCE',
          580: '#F3F4F6',
          590: '#F0F0F0',
          610: '#EDF6FA',
          620: '#383F53',
        },
        yellow: {
          100: '#FFC327',
          200: '#EFBF04',
        },
        red: {
          100: '#FF5656',
          200: '#FF2D2D',
          300: '#FF6767',
          400: '#FFBEBE',
          500: '#FFBDBD',
        },
        pink: {
          100: '#ffffff'
        },
        green: {
          100: '#ced6e0',
        },
        purple: {
          100: '#2f3542',
        },
      },
      fontFamily: {
        sans: ['Arial', 'sans-serif'],
      },
      screens: {
        xs: '430px',
        '4xl': '1920px',
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
