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
      <Container>
        <Header noPaddingBottom />
      </Container>
      <Wrapper>
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
