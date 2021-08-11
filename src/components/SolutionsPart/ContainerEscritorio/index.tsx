import { ReactNode, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMediaQuery } from 'react-responsive';
import { ButtonText } from '../ButtonText';
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

interface CybersecurityProps {
  // eslint-disable-next-line react/require-default-props
  children?: ReactNode;
}

export const ContainerEscritorio = ({ children }: CybersecurityProps) => {
  const router = useRouter();
  const is1920 = useMediaQuery({ minWidth: 1601 });
  const isMobileOrTabled = useMediaQuery({ maxWidth: 928 });
  const [isAnimated, setIsAnimated] = useState(false);
  const [modifier, setModifier] = useState(!!children);

  const handleScroll = () => {
    const ele: Element | any = document.getElementById(
      'containerCybersecurity',
    );

    const getWindowBottom = window.scrollY + window.innerHeight;
    // const heightEle = ele?.getBoundingClientRect().bottom + window.scrollY - 600;
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

  return (
    <Wrapper>
      <Container
        visibled={isAnimated}
        modifier={modifier}
        id="containerCybersecurity"
      >
        <ContainerImg modifier={!!children}>
          <AnimationImg
            url="/images/01-service.png"
            height={553}
            heightUW={626}
          />
        </ContainerImg>
        <Content>
          {children ? (
            <Header>{children}</Header>
          ) : (
            <>
              <Header>
                <h1>
                  Gerenciamento de App para trabalho remoto e saúde digital.
                </h1>
                <p>
                  Trabalho remoto e bem-estar digital. <br /> Apoiando o
                  bem-estar digital dos colaboradores.
                </p>
              </Header>
              <div>
                <Footer>
                  <h3>Analisar o comportamento do usuário.</h3>
                </Footer>
                <Footer>
                  <h3>Medir o bem-estar digital.</h3>
                </Footer>
                <Footer>
                  <h3>Informar e educar.</h3>
                </Footer>
              </div>
              <Header style={{ marginTop: 16 }}>
                <p>
                  Com a nossa solução você pode garantir um controle remoto
                  eficaz, trabalhar, aumentar a produtividade e manter o
                  bem-estar digital de seus colaboradores na era do novo normal.
                </p>
              </Header>
            </>
          )}
        </Content>
      </Container>
    </Wrapper>
  );
};
