import { useRouter } from 'next/router';
import Head from 'next/head';
import Layout from '../components/layout';

function PostsDetail() {
  const { query: { id } } = useRouter();

  return (
    <Layout>
      <Head>
        <title>{id}</title>
      </Head>
    </Layout>
  )
}

export default PostsDetail;
