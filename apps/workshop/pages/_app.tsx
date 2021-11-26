import { ContactContext, ContactStore } from '@workshop/phonebook';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { createContext } from 'react';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  const contactStore = new ContactStore();
  return (
    <ContactContext.Provider value={contactStore}>
      <>
        <Head>
          <title>Welcome to workshop!</title>
        </Head>
        <div className="app">
          <header className="flex">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/nx-logo-white.svg"
              alt="Nx logo"
              width="75"
              height="50"
            />
            <h1>Welcome to workshop!</h1>
          </header>
          <main>
            <Component {...pageProps} />
          </main>
        </div>
      </>
    </ContactContext.Provider>
  );
}

export default CustomApp;
