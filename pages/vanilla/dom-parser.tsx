/** @jsxRuntime classic */
/** @jsx jsx */
import type { NextApiResponse } from 'next';
import Head from 'next/head';

import { Layout } from 'components';

import { jsx, css } from '@emotion/react';

function DomParser() {
  return (
    <Layout>
      <Head>
        <title>Vanilla -&gt; dom-parser</title>
      </Head>
      
    </Layout>
  );
}

export default DomParser;
