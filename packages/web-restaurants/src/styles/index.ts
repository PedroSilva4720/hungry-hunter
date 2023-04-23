import { createStitches, globalCss } from '@stitches/react';
import { mauve } from '@radix-ui/colors';

export const { styled } = createStitches({
  theme: {
    colors: {
      white: '#fff',
      redStandard: '#c62828',
      orangeStandard: '#ff5722',
      yellowStandard: '#ffc107',
      brownStandard: '#795548',
      greenStandard: '#388e3c',
      ...mauve,
    },
    fontSizes: {
      xs: '1rem',
      sm: '1.25rem',
      md: '2rem',
      lg: '4rem',
      xl: '4.5rem',
    },
    radii: {
      sm: '4px',
      md: '8px',
    },
    space: {
      gapSm: '12px',
      gapMd: '15px',
      gapLg: '25px',
    },
  },
  media: {
    bp1: '(min-width: 640px)',
    bp2: '(min-width: 768px)',
    bp3: '(min-width: 1024px)',
  },
  utils: {
    mx: (value: string | number) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: string | number) => ({
      marginTop: value,
      marginBottom: value,
    }),
    px: (value: string | number) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: string | number) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
});

export const globalStyle = globalCss({
  '*': { margin: 0, padding: 0, border: 0, boxSizing: 'border-box' },

  'html, body, input, textarea': {
    fontFamily: `'Inter', sans-serif`,
  },
  html: {
    scrollBehavior: 'smooth',
  },
});
