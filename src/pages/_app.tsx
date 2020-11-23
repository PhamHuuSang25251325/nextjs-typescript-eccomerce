import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { GlobalStyle } from '../styles/GlobalStyle';
import NavBar from '../components/Navbar';

const MyApp: React.FC<AppProps> = ({ pageProps, Component }) => {
  return (
    <>
      <Head>
        <title>Shopping website</title>
      </Head>
      <NavBar />
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
};

export default MyApp;
