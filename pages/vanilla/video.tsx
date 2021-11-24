import Head from 'next/head';

import { useVideo } from 'hooks';

import { Layout } from 'components';

function Video() {
  const {
    videoRef,
    onClick,
  } = useVideo();

  return (
    <Layout>
      <Head>
        <title>Vanilla -&gt; video</title>
      </Head>
      <main>
        <video ref={videoRef} width="600px" controls />
        <button onClick={onClick}>record</button>
      </main>
    </Layout>
  );
}

export default Video;
