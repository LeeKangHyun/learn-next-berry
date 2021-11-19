import Head from 'next/head';
import Layout from 'components/layout';
import Nav from 'components/nav';

function Home() {
  return (
    <Layout>
      <Head>
        <title>learn-next-berry</title>
        <meta name="description" content="learn-next-berry" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main>
        Hello World
      </main>
    </Layout>
  );
}

export default Home;
