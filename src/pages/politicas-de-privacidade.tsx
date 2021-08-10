import Head from 'next/head';
import { animateScroll } from 'react-scroll';
import { useEffect } from 'react';

import { Header } from '../components/Header';
import { Container } from '../styles/pages/Politics';
import { Footer } from '../components/Footer';
import { HeroSolutions } from '../components/Politcs/Hero';

export default function Index() {
  useEffect(() => {
    animateScroll.scrollToTop();
  }, []);

  return (
    <>
      <Head>
        <title>Proative | Politicas de Privacidade</title>
      </Head>
      <Container>
        <Header />
        <HeroSolutions idMoveScroll="containerCybersecurity" className="cyber">
          <div className="content__text">
            <h2>
              Política de Privacidade
              <br /> de dados Proative Technology
            </h2>
            <p>
              A Proative Technology reafirma seu compromisso com a Segurança e a
              Privacidade de seus dados pessoais de acordo com a Lei Geral de
              Proteção de Dados - Lei 13.709 aprovada em agosto de 2018,
              utilizamos em nosso website uma ferramenta que permite sua livre
              escolha com relação a utilização dos cookies. Os cookies permitem
              que nossa empresa tenha mais ou menos informações a respeito da
              navegação, conforme a sua permissão.
            </p>
            <p>
              Leia atentamente as opções disponíveis e selecione a que melhor se
              adequa ao seu perfil. Visamos garantir que você se sinta sempre
              Seguro e Confortável quanto a utilização de seus dados a partir da
              visita a nossa página. Nossa sugestão é que leia essa política de
              privacidade sempre que ocorrer um novo acesso, já que ela pode ser
              alterada.
            </p>
            <p>
              Ao visitar nosso site você poderá conhecer melhor as soluções da
              Proative Technology e, ao preencher formulários com seus dados
              pessoais fique ciente de que compartilhará suas informações
              conosco. Os dados pessoais serão armazenados, apenas se você os
              oferecer de maneira voluntária ou se vier a celebrar algum tipo de
              contrato com a Proative Technology no futuro e tenhamos que os
              manter em decorrência de uma execução contratual.
            </p>
            <p>
              As informações que nos forem enviadas serão coletadas e mantidas
              de acordo com os mais altos padrões de Segurança,
              Confidencialidade e Privacidade. A Proative Technology não
              compartilhará os seus dados com terceiros, a menos com sua
              autorização expressa. Nas hipóteses em que isso for uma
              possibilidade, você será avisado durante a navegação e poderá
              exercer sua opção por nos autorizar ou não.
            </p>
            <p>
              Nós sempre iremos verificar que esse terceiro se adeque aos nossos
              padrões de privacidade e proteção de dados. Seus dados serão
              sempre utilizados exclusivamente para a finalidade específica da
              coleta. O acesso às informações será restrito exclusivamente aos
              colaboradores autorizados para o uso adequado. Se você tiver
              alguma pergunta adicional sobre essa política, sobre proteção e
              privacidade de seus dados pessoais, entre em contato conosco pelo
              e-mail: <strong>dpo@proativetec.com.br.</strong>
            </p>
          </div>
        </HeroSolutions>
      </Container>
      <Footer />
    </>
  );
}
