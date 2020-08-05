import { Global } from '@emotion/core';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';

import { theme, globalStyles } from '@theme';

import { SWRConfig } from 'swr';
import { swrConfig } from '@client/index';

const Providers = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Global styles={globalStyles} />
      <SWRConfig value={swrConfig}>{children}</SWRConfig>
    </ThemeProvider>
  );
};

export default Providers;
