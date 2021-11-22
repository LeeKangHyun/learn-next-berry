import Head from 'next/head';

import useVideo from './useVideo';

import Layout from 'components/layout';

function Video() {
  const {
    videoRef,
    onClick,
  } = useVideo();
  return (
    <Layout>
      <Head>
        <title>vanilla -&gt; video</title>
      </Head>
      <main>
        <video ref={videoRef} width="600px" controls />
        <button onClick={onClick}>record</button>
      </main>
    </Layout>
  );
}

export default Video;
