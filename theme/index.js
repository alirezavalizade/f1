import { css } from '@emotion/core';
import { theme as chakraTheme } from '@chakra-ui/core';

const shared = {
  fonts: {
    ...chakraTheme.fonts,
    heading: "'Alfa Slab One', cursive",
    body: "'Changa', sans-serif"
  },
  ...chakraTheme
};

export const theme = {
  ...shared,
  colors: {
    ...chakraTheme.colors,
    red: {
      ...chakraTheme.colors.red,
      f1: '#e20600'
    },
    gray: {
      ...chakraTheme.gray,
      light100: '#edf2f71f'
    },
    background: {
      main: '#111119',
      race: {
        main: '#1b191e',
        hover: '#2f2f2f',
        number: '#000000'
      }
    },
    defaultColor: '#FFF'
  }
};

export const globalStyles = p => {
  return css`
    body,
    html {
      width: 100%;
      height: 100%;
      background-color: ${p.colors.background.main};
      color: ${p.colors.defaultColor};
    }

    #__next {
      height: 100%;
    }

    body,
    input,
    button {
      font-size: 14px;
      letter-spacing: 0.015em;
      font-weight: 400;
      text-transform: none;
    }

    ul,
    li {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    svg {
      vertical-align: middle;
    }

    .ReactVirtualized__Masonry,
    .ReactVirtualized__Grid {
      outline: 0 !important;
    }
  `;
};
