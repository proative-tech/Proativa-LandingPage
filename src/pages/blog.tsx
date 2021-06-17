import Head from 'next/head';
import { Header } from '../components/Header';

import { Container, Wrapper, Content } from '../styles/pages/Blog';
import { Footer } from '../components/Footer';

export default function Index() {
  return (
    <>
      <Head>
        <title>Proative | Blog</title>
      </Head>
      <Wrapper>
        <Header noPaddingBottom noFixed bgColor="#fafafa" />
        <Content>
          <iframe
            src="https://blog-proative.intraversa.com/"
            title="Test blog"
          />
        </Content>
      </Wrapper>
      <Footer />
    </>
  );
}
