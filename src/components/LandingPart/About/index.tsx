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
    // const heightEle = ele?.getBoundingClientRect().bottom + window.scrollY - 400;
    const heightEle = ele?.getBoundingClientRect().top + window.scrollY + 100;

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
        const heightEle = ele?.getBoundingClientRect().top - 50;

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
        {/* <iframe 
            width="100%"
            height="100%"
            src="https://www.youtube-nocookie.com/embed/nyKP_hsj5WU?rel=0&amp;controls=0&amp;showinfo=0"
            title="Proative video promocional"
             frameborder="0"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
          {/* <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/nyKP_hsj5WU"
            title="Proative video promocional"
            frameBorder="0"
            allowFullScreen
          /> */}
          <iframe src="https://player.vimeo.com/video/593357178?h=a0cf868b9e" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        </div>
      </ContainerImg>
      <Content>
        <Header>
          <span>Sobre a Proative Technology</span>
          <h1>
            Somos uma empresa de tecnologia especializada em serviços
            gerenciados.
          </h1>
          <p>
          Provemos soluções customizadas de acordo com cada necessidade para Projetos de Serviços Gerenciados, Consultoria em Governança Corporativa e de TI, elevando o nível de maturidade, inserindo componentes de Observabilidade, IOT, Analítics, Big Data e Data Lake, extraindo insigths significativos para o negócio. Cuidamos e impulsionamos operações onde você precise, garantido disponibilidade e continuidade de gestão de Operações unindo pessoas, processos e tecnologia.
          </p>
        </Header>
      </Content>
    </Container>
  );
};
