import Head from 'next/head';

import { Header } from '../components/Header';
import { Container, ContainerFormat } from '../styles/pages/Politics';
import { Footer } from '../components/Footer';

export default function Index() {
  return (
    <>
      <Head>
        <title>Proative | Politicas de Privacidade</title>
      </Head>
      <Container>
        <Header />
        <ContainerFormat>
          <main>
            <h1>Políticas de Privacidade</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor
              massa. Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Nulla at risus. Quisque purus
              magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis,
              felis ut adipiscing.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor
              massa. Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Nulla at risus. Quisque purus
              magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis,
              felis ut adipiscing.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor
              massa. Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Nulla at risus. Quisque purus
              magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis,
              felis ut adipiscing.
            </p>
          </main>
        </ContainerFormat>
      </Container>
      <Footer />
    </>
  );
}
