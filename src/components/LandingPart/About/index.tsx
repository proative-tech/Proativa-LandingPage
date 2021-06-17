import { useEffect, useState, ReactNode } from 'react';
import { useRouter } from 'next/router';
import { animateScroll, Element } from 'react-scroll';

import { Container, ContainerImg, Content, Header, Footer } from './styles';

interface AboutProps {
  // eslint-disable-next-line react/require-default-props
  children?: ReactNode;
}

export const About = ({ children }: AboutProps) => {
  const [isAnimated, setIsAnimated] = useState(false);
  const router = useRouter();

  const handleScroll = () => {
    const ele: Element | any = document.getElementById('about-link');

    const getWindowBottom = window.scrollY + window.innerHeight;
    const heightEle = ele.getBoundingClientRect().bottom + window.scrollY - 400;

    if (!isAnimated && getWindowBottom >= heightEle) {
      setIsAnimated(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (router.asPath.indexOf('/') > -1) {
      const storeSetItem = localStorage.getItem('@CLICK_QUEM_SOMOS');

      if (storeSetItem) {
        const ele: Element | any = document.getElementById('about-link');
        const heightEle = ele.getBoundingClientRect().top;

        setTimeout(() => {
          animateScroll.scrollTo(heightEle, {
            duration: 700,
            smooth: true,
          });
          // refQuemSomos.current?.scrollTo('about-link', {
          //   duration: 1500,
          //   smooth: true,
          // });
          localStorage.removeItem('@CLICK_QUEM_SOMOS');
        }, 1000);
      }
    }
  }, [router.asPath]);

  return (
    <Container visibled={isAnimated} id="about-link">
      <ContainerImg>
        <div className="video" data-video="img">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/nyKP_hsj5WU"
            title="Proative video promocional"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </ContainerImg>
      <Content>
        <Header>
          <span>Sobre a Proative Technology</span>
          <h1>
            Somos uma empresa de tecnologia especializada em soluções inovadoras
            de serviços gerenciados.
          </h1>
          <p>
          Provemos soluções customizadas de acordo com cada necessidade para Projetos e Consultoria em Governança Corporativa e de TI, aceleramos operações que já estão rodando e maduras, inserindo componentes de IOT, Analítics, Big Data e data Lake, extraindo insigths significativos para o negócio. Cuidamos e impulsionamos operações Anywhere, garantido disponibilidade e continuidade sobre a disciplina do ITIL4 de gestão de Operações unindo pessoas, processos e tecnologia.
          </p>
        </Header>
        <Footer>
          <h3>História</h3>
          <p>
          Desde 2007, a nossa missão tem sido tornar as operações dos nossos clientes mais simples, eficientes e eficazes, facilitando as tomadas de decisões e potencializando o crescimento do negócio.
          </p>
        </Footer>
      </Content>
    </Container>
  );
};
