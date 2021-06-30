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
                  De segunda à sexta- <br />
                  feira, das 9h às 18h. <br />
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
