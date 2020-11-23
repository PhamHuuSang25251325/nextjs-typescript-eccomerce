import React from 'react';

import { AppProps } from 'next/app';
import { GlobalStyle } from '../styles/GlobalStyle';

const MyApp: React.FC<AppProps> = ({ pageProps, Component }) => {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
};

export default MyApp;
