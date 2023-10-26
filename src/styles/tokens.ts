import { createStitches } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      white: '#E8EBF0',
      whiteLight: 'white-light',
      whiteDark: 'white-dark',
      black: '#0F141F',
      blackLight: '#151B26',
      blackDark: '#06090F',

      gray100: '#9EA0A3',
      gray200: '#888A8C',
      gray300: '#717274',
      gray400: '#595A5C',
      gray500: '#424344',
      gray600: '#2B2B2C',

      blue: '#1B69D2',
      blueLight: '#5390E3',
      blueDark: '#1357B3',

      gradientBlue: 'linear-gradient(225deg, #5390E3 8.12%, #1357B3 92.21%)',
      gradientBlueDark: 'linear-gradient(225deg, #1B69D2 0%, #07346F 100%)',

      red: '#F03D3D',
      green: '#0BB07B',
      yellow: '#FFCE52',
    },
    fontSizes: {
      xxs: '1.6rem',
      xs: '1.8rem',
      sm: '2rem',
      md: '2.4rem',
      lg: '3.6rem',
      xl: '4.8rem',
      '2xl': '6.4rem',
      '4xl': '9.6rem',
    },
    fontWeights: {
      regular: '400',
      medium: '500',
      bold: '700',
    },
    fonts: {
      default: 'Saira, sans-serif',
      code: 'monospace',
    },
    lineHeights: {
      shorter: '125%',
      short: '140%',
      base: '160%',
      tall: '180%',
    },
    radii: {
      px: '1px',
      xs: '0.2rem',
      sm: '0.4rem',
      md: '0.8rem',
      lg: '1.6rem',
      full: '99999px',
    },
    space: {
      1: '0.4rem',
      2: '0.8rem',
      3: '1.6rem',
      4: '2.4rem',
      5: '3.2rem',
      6: '4rem',
    },
  },
})
