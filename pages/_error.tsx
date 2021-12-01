import { NextPageContext } from 'next';
import Head from 'next/head';

function Error({ statusCode }: { statusCode: number }) {
  return (
    <div>
      <Head>
        <title>{statusCode}!!!!!!</title>
      </Head>
      <p>
        {statusCode}!!!!!!!!!!!!!!!!!!!!!!!
      </p>
    </div>
  );
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
