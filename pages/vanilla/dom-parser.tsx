import Head from 'next/head';
import { Layout, ErrorBoundary } from 'components';

function Cccc() {
  function onClickBomb() {
    throw new Error('!!!!!!!!!!!1');
  }

  return (
    <button onClick={onClickBomb}>
      BOMB
    </button>
  );
}

function DomParser() {
  return (
    <Layout>
      <Head>
        <title>Vanilla -&gt; dom-parser</title>
      </Head>
      <ErrorBoundary>
        <Cccc />
      </ErrorBoundary>
    </Layout>
  );
}

export default DomParser;
