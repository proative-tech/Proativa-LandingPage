import { ReactNode, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMediaQuery } from 'react-responsive';
import { ButtonText } from '../ButtonText';
import { AnimationImg } from '../AnimationImg';
import {
  Wrapper,
  WrapperFooters,
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

export const Consultancy = ({ children }: CybersecurityProps) => {
  const router = useRouter();
  const is1920 = useMediaQuery({ minWidth: 1601 });
  const isMobileOrTabled = useMediaQuery({ maxWidth: 928 });
  const [isAnimated, setIsAnimated] = useState(false);

  const handleScroll = () => {
    const ele: Element | any = document.getElementById('containerConsultancy');

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
      <Container visibled={isAnimated} id="containerConsultancy">
        <Content>
          {children ? (
            <Header>{children}</Header>
          ) : (
            <>
              <Header>
                <span>Consulting Services</span>
                <h1>
                  Identificamos suas necessidades e ajudamos a criar, estruturar
                  e manter os procedimentos adequados para sua empresa.
                </h1>
                <p>
                  Somos o parceiro estratégico ideal para suas necessidades de
                  governança de TI e Qualidade. Atendemos todos os portes e
                  segmentos.
                </p>
              </Header>
              <WrapperFooters>
                <Footer>
                  <h3>01. IT Governance Consultant</h3>
                </Footer>
                <Footer>
                  <h3>02. Quality Control</h3>
                </Footer>
                <Footer>
                  <h3>03. KPI & SLA Control</h3>
                </Footer>
                <Footer>
                  <h3>04. Service Intelligence</h3>
                </Footer>
              </WrapperFooters>
              <ContainerButton>
                <ButtonText
                  label="Saiba mais sobre Consultoria"
                  directionArrow="right"
                  href="/solucoes/consultancy"
                />
              </ContainerButton>
            </>
          )}
        </Content>

        <ContainerImg modifier={!!children}>
          <AnimationImg url="/images/consultoria1920.png" />
        </ContainerImg>
      </Container>
    </Wrapper>
  );
};
