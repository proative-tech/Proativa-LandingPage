import { useEffect } from 'react';
import { animateScroll } from 'react-scroll';

import Head from 'next/head';
import { Header } from '../components/Header';
import { Container, ButtonAsLink } from '../styles/pages/FaleConosco';
import { HeroFaleConosco } from '../components/FaleConosco/Hero';
import { Footer } from '../components/Footer';
import { Button } from '../components/Button';

export default function Index() {
  useEffect(() => {
    animateScroll.scrollToTop();
  }, []);

  return (
    <>
      <Head>
        <title>Proative | Fale Conosco</title>
        <script src="https://cdn.privacytools.com.br/public_api/banner/autoblock/v2/W2lz812131.js?t=1" />
        <link
          rel="preload"
          href="https://cdn.privacytools.com.br/public_api/banner/style/W2lz812131.css?t=1"
          as="style"
        />
        <link
          rel="stylesheet"
          href="https://cdn.privacytools.com.br/public_api/banner/style/W2lz812131.css?t=1"
        />
        <script
          type="text/javascript"
          src="https://cdn.privacytools.com.br/public_api/banner/script/bottom/W2lz812131.js?t=1"
        />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/images/favicon/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/images/favicon/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/images/favicon/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/images/favicon/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/images/favicon/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/images/favicon/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/images/favicon/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/images/favicon/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicon/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/images/favicon/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/images/favicon/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/images/favicon/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="/images/favicon/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Container>
        <Header bgColor="#fff" />
        <HeroFaleConosco>
          <div className="content__text">
            <h1>
              Deseja saber mais sobre <br /> as nossas soluções?
            </h1>
            <p>
              Nosso time de especialistas esta à disposição para ajudar. <br />{' '}
              Clique no botão abaixo para solicitar o contato de um deles.
            </p>

            <ButtonAsLink
              as="a"
              href="mailto:contato@proativetec.com.br?subject=Email para contato&body=Escreva aqui sua solicitação. Nossa equipe entrará em contato assim que puder"
            >
              Solicitar contato
            </ButtonAsLink>

            <div className="info__text">
              <div>
                <strong>Endereço:</strong>
                <p>
                  Alameda Araguaia, 2104 <br />
                  7º andar - Conj. 71A <br />
                  Alphaville | Barueri <br />
                  São Paulo, Brasil <br />
                  06455-000
                </p>
              </div>

              <div>
                <strong>Atendimento:</strong>

                <p>
                  De segunda à sexta-feira, <br />
                  das 9h às 18h. <br />
                  +55 11 4130-8800
                </p>

                <strong>Comercial:</strong>
                <p>contato@proativetec.com.br</p>
              </div>
            </div>
          </div>
        </HeroFaleConosco>
      </Container>
      <Footer />
    </>
  );
}
