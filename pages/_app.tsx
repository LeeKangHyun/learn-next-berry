import '../styles/globals.css';
import { useRef } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';

import type { AppProps } from 'next/app';

import { Nav } from 'components';

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = useRef(new QueryClient());

  return (
    <QueryClientProvider client={queryClient.current}>
      <Hydrate state={pageProps.dehydrateState}>
        <RecoilRoot>
          <Nav />
          <Component {...pageProps} />
        </RecoilRoot>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
