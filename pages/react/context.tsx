import { useContext, createContext, useState } from 'react';
import type { ReactNode } from 'react';
import Head from 'next/head';

import { Layout } from 'components';

const StateContext = createContext({});
const DispatchContext = createContext({});

function Provider({ children }: { children: ReactNode }) {
  const [value, setValue] = useState(0);
  return (
    <StateContext.Provider value={value}>
      <DispatchContext.Provider value={setValue}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

function useCtx() {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  return [state, dispatch];
}

function Context() {
  return (
    <Provider>
      <Layout>
        <Head>
          <title>React -&gt; context</title>
        </Head>

        <main>

        </main>
      </Layout>
    </Provider>
  );
}

export default Context;
