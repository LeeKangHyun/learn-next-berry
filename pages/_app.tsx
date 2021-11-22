import '../styles/globals.css';
import { useRef } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import type { AppProps } from 'next/app';

import Nav from 'components/nav';

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = useRef(new QueryClient());

  return (
    <QueryClientProvider client={queryClient.current}>
      <Hydrate state={pageProps.dehydrateState}>
        <Nav />
        <Component {...pageProps} />
      </Hydrate>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;
