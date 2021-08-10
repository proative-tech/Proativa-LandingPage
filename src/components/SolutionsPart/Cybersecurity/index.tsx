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

export const Cybersecurity = ({ children }: CybersecurityProps) => {
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
    // const heightEle = ele.getBoundingClientRect().bottom + window.scrollY - 600;
    const heightEle: any =
      ele?.getBoundingClientRect().top + window.scrollY + 100;

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
          <AnimationImg url="/images/teste2.png" />
        </ContainerImg>
        <Content>
          {children ? (
            <Header>{children}</Header>
          ) : (
            <>
              <Header>
                <span>Cyber Security Services</span>
                <h1>
                  Manter a segurança cibernética em um cenário de ameaças em
                  constante evolução é um desafio para todas as organizações.
                </h1>
                <p>
                  Sua organização devidamente segura. Buscamos reduzir o impacto
                  de ameaças para seu negócio, independentemente de onde estiver
                  os seus dados ou informações. Nossos serviços gerenciados de
                  segurança possibilitam que o seu empreendimento possa operar
                  com segurança mesmo que remotamente. E, com isso, permite o
                  funcionamento adequado do seu negócio.
                </p>
              </Header>
              <Footer>
                <h3>Descubra</h3>
                <p>
                  Onde os dados residem: nuvem, email, endpoints e
                  armazenamento.
                </p>
              </Footer>
              <Footer>
                <h3>Monitore</h3>
                <p>
                  Como os dados estão sendo usados dentro e fora da rede
                  corporativa.
                </p>
              </Footer>
              <Footer>
                <h3>Proteja</h3>
                <p>Os dados de serem expostos ou roubados, em tempo real.</p>
              </Footer>
              <ContainerButton>
                <ButtonText
                  label="Saiba mais sobre Cyber Security Services"
                  href="/solucoes/cybersecurity"
                />
              </ContainerButton>
            </>
          )}
        </Content>
      </Container>
    </Wrapper>
  );
};
