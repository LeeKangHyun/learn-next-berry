import Head from 'next/head';

import { Layout } from 'components';

function Home() {
  return (
    <Layout>
      <Head>
        <title>learn-next-berry</title>
        <meta name="description" content="learn-next-berry" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Hello Next World</h1>
      </main>
    </Layout>
  );
}

export default Home;
