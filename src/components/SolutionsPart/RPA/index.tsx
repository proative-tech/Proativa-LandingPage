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

export const RPA = ({ children }: CybersecurityProps) => {
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
    // const heightEle =
    //   ele.getBoundingClientRect().bottom + window.scrollY + 1200;
    const heightEle: any =
      ele?.getBoundingClientRect().top + window.scrollY + 400;

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
          <AnimationImg url="/images/imagemrpa.jpeg" />
        </ContainerImg>
        <Content>
          {children ? (
            <Header>{children}</Header>
          ) : (
            <>
              <Header>
                <span>RPA - Robotic Process Automation</span>
                <h1>Procurando uma solução para automatizar processos?</h1>
                <p>
                  Podemos tornar seus processos mais inteligentes, rápidos e
                  eficientes, eliminando erros e aumentando a produtividade
                  automatizando e otimizando processos e aplicações corporativas
                  para diferentes tipos de indústrias.
                </p>
              </Header>
              <Footer>
                <h3>Automatização</h3>
                <p>
                Analisamos seu processo e buscamos automatizá-lo por intermédio de robotização ou workflows.
                </p>
              </Footer>
              <Footer>
                <h3>Integração</h3>
                <p>
                  Integramos sistemas que não possuem APIs ou interface de
                  dados.
                </p>
              </Footer>

              <ContainerButton>
                <ButtonText label="Saiba mais sobre RPA" href="/solucoes/rpa" />
              </ContainerButton>
            </>
          )}
        </Content>
      </Container>
    </Wrapper>
  );
};
