import fs from 'fs';
import type { NextApiResponse} from 'next';
import Head from 'next/head';

import axios from 'axios';

import { useVideoRecording, useVideoStreaming } from 'hooks';

import { Layout } from 'components';

import { Nav } from 'components/nav';
import { useReactQuery } from 'hooks/useReactQuery';

import Query from '../react/react-query';

import Dom from'./dom-parser';
import styles from './video.module.scss';

function Video() {
  const {
    videoRef: streamingRef,
    onClick,
  } = useVideoStreaming();
  const {
    videoRef: recordRef, mediaRef,
    onClick: record, onClickStop: stop,
  } = useVideoRecording();

  return (
    <Layout>
      <Head>
        <title>Vanilla -&gt; video</title>
      </Head>
      <main>
        <article>
          <h2>Streaming</h2>
          <video className={styles.video} ref={streamingRef} width="600px" />
          <div>
            <button onClick={onClick}>촬영</button>
          </div>
        </article>

        <article>
          <h2>Recording</h2>
          <video className={styles.video} ref={recordRef} width="600px" controls />
          <div>
            <button onClick={record} disabled={mediaRef.current?.state === 'recording'}>녹화</button>
            <button onClick={stop}>중지</button>
          </div>
        </article>
      </main>
    </Layout>
  );
}

export default Video;
