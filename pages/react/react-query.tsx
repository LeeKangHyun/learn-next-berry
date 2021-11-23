import { useState } from 'react';
import { useQueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Head from 'next/head';

import { useReactQuery } from 'hooks';

import { Layout } from 'components';

function ReactQuery() {
  const queryClient = useQueryClient();

  const [page, setPage] = useState(0);

  const { data, isLoading, isFetching, isError, isPreviousData } = useReactQuery(page);

  /*
  // prefetching
  useEffect(() => {
    if (data?.hasMore) {
      queryClient.prefetchQuery(['item', page + 1], () => fetchItem(page + 1));
    }
  }, [data, page, queryClient]);
  */

  function decrease() {
    setPage(page => Math.max(page - 1, 0));
  }

  function increase() {
    if (!isPreviousData) {
      setPage(page => data?.hasMore ? page + 1 : page);
    }
  }

  return (
    <Layout>
      <Head>
        <title>React -&gt; react-query</title>
      </Head>

      <main>
        <pre>
          {JSON.stringify(data?.projects, null, 2)}
        </pre>

        <button onClick={decrease} disabled={page === 0 || isFetching}>-1</button>
        {page}
        <button onClick={increase} disabled={!data?.hasMore || isFetching}>+1</button>
        {isLoading && <div>isLoading...</div>}
      </main>
      <ReactQueryDevtools initialIsOpen />
    </Layout>
  );
}

export default ReactQuery;
