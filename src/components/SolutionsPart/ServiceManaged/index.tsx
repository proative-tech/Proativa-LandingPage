import { ReactNode, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useMediaQuery } from 'react-responsive';
import Link from 'next/link';
import { AnimationImg } from '../AnimationImg';
import {
  Wrapper,
  Container,
  ContainerImg,
  Content,
  Header,
  Footer,
  ContainerButton,
} from './styles';
import { ButtonText } from '../ButtonText';

interface ServiceManagedProps {
  // eslint-disable-next-line react/require-default-props
  children?: ReactNode;
}

export const ServiceManaged = ({ children }: ServiceManagedProps) => {
  const router = useRouter();
  const is1920 = useMediaQuery({ minWidth: 1601 });
  const isMobileOrTabled = useMediaQuery({ maxWidth: 928 });
  const [isAnimated, setIsAnimated] = useState(false);

  const handleScroll = () => {
    const ele: Element | any = document.getElementById('soluciton-service');

    const getWindowBottom = window.scrollY + window.innerHeight;
    const heightEle = ele.getBoundingClientRect().bottom + window.scrollY - 1000;

    if (!isAnimated && getWindowBottom >= heightEle) {
      setIsAnimated(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      <Container id="soluciton-service" visibled={isAnimated}>
        <ContainerImg>
          <AnimationImg
            height={629}
            heightUW={670}
            url="/images/servicesManaged1920.png"
          />
        </ContainerImg>

        <Content>
          {children ? (
            <Header>{children}</Header>
          ) : (
            <>
              <Header>
                <span>Managed Services</span>
                <h1>
                  Imagine sair do seu escritório todos os dias, sabendo que a
                  segurança e a continuidade do seu negócio estão em boas mãos?
                </h1>
                <p>
                  Os Serviços Gerenciados da Proative fazem exatamente isso - 24
                  horas por dia, 7/07. Unindo gestão, inteligência, segurança,
                  agilidade e inovação.
                </p>
              </Header>
              <Footer>
                <h3>Seja Proativo</h3>
                <p>Identifique os problemas antes que os seus usuários.</p>
              </Footer>
              <Footer>
                <h3>Diminua o Downtime</h3>
                <p>
                  Seja rápido e preciso na identificação e solução dos problemas
                  do seu ambiente.
                </p>
              </Footer>
              <Footer>
                <h3>Aumente a sua produtividade</h3>
                <p>
                  Automatize soluções e diminua a incidência de problemas
                  recorrentes.
                </p>
              </Footer>
              <Footer>
                <h3>Melhore a sua gestão</h3>
                <p>
                  Tenha informações precisas para medir e melhorar o desempenho
                  e a performance do seu negócio.
                </p>
              </Footer>
              <ContainerButton>
                <ButtonText
                  label="Saiba mais sobre Managed Services"
                  href="/solucoes/service-manager"
                />
              </ContainerButton>
            </>
          )}
        </Content>
      </Container>
    </Wrapper>
  );
};
