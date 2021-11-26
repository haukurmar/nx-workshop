import { ContactContext, ContactStore } from '@workshop/phonebook';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { createContext } from 'react';
import './styles.css';
import { css, Global } from '@emotion/react';
import { LayoutWrapper, meyerCssReset } from '@nordax/main-ui';

const baseStyles = css`
  html {
    height: 100%;
    min-height: 100%;
  }

  body {
    font-family: Helvetica, Arial, sans-serif;
    font-size: 1rem;
  }

  body,
  #__next {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

function CustomApp({ Component, pageProps }: AppProps) {
  const contactStore = new ContactStore();
  return (
    <>
      <Head>
        <title>My little black book!</title>
      </Head>
      <ContactContext.Provider value={contactStore}>
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
      <Global styles={[meyerCssReset, baseStyles]} />
      </ContactContext.Provider>
    </>
    
  );
}

export default CustomApp;
