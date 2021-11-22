import { ChangeEvent, SyntheticEvent } from 'react';
import { atom, useRecoilState, selector, useRecoilValue } from 'recoil';
import Head from 'next/head';
import Layout from 'components/layout';

const textState = atom({
  key: 'textState',
  default: 'Hello World',
});

const charCountState = selector({
  key: 'charCountState',
  get: ({ get }) => {
    const text = get(textState);

    return text.length;
  },
});

function Recoil() {
  const [text, setText] = useRecoilState(textState);
  const count = useRecoilValue(charCountState);

  function onChange(evt: ChangeEvent<HTMLInputElement>) {
    const { value } = evt.currentTarget;
    setText(value);
  }

  function onSubmit(evt: SyntheticEvent<HTMLFormElement>) {
    evt.preventDefault();
  }

  return (
    <Layout>
      <Head>
        <title>React -&gt; recoil</title>
      </Head>

      <main>
        <form onSubmit={onSubmit}>
          <input type="text" value={text} onChange={onChange} />
        </form>
        <pre>
        {text}
      </pre>
        <p>{count}</p>
      </main>
    </Layout>
  );
}

export default Recoil;
