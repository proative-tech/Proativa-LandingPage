import { ReactNode, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMediaQuery } from 'react-responsive';
import { Button } from '../../Button';
import {
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
    const heightEle = ele.getBoundingClientRect().bottom + window.scrollY - 600;

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
    <Container visibled={isAnimated} id="containerConsultancy">
      <Content>
        {children ? (
          <Header>{children}</Header>
        ) : (
          <>
            <Header>
              <span>Consultoria</span>
              <h1>
                Identificamos suas necessidades e ajudamos a criar, estruturar e
                manter os procedimentos adequados para sua empresa.
              </h1>
              <p>
                Somos o parceiro estratégico ideal para suas necessidades de
                governança de TI e Qualidade. Atendemos todos os portes e
                segmentos.
              </p>
            </Header>
            <Footer>
              <h3>Governança de TI</h3>
              <p>
                Lorem ipsum dolore. Lorem ipsum dolore.Lorem ipsum dolore. Lorem
                ipsum dolore. Lorem ipsum dolore.
              </p>
            </Footer>
            <Footer>
              <h3>Controle de Qualidade</h3>
              <p>
                Lorem ipsum dolore. Lorem ipsum dolore.Lorem ipsum dolore. Lorem
                ipsum dolore. Lorem ipsum dolore.
              </p>
            </Footer>
            {/* <Footer>
              <h3>Reports BI</h3>
              <p>
                Lorem ipsum dolore. Lorem ipsum dolore.Lorem ipsum dolore. Lorem
                ipsum dolore. Lorem ipsum dolore.
              </p>
            </Footer>
            <Footer>
              <h3>Reports SLAM</h3>
              <p>Os dados de serem expostos ou roubados, em tempo real.</p>
            </Footer> */}

            <ContainerButton>
              <Link scroll={false} href="/solucoes/consultancy" passHref>
                <Button type="button">Saiba mais sobre Consultoria</Button>
              </Link>
            </ContainerButton>
          </>
        )}
      </Content>
      <ContainerImg modifier={!!children}>
        <img
          src={
            is1920
              ? '/images/consultoria1920.png'
              : '/images/consultoria1440.png'
          }
          alt="proative"
        />
      </ContainerImg>
    </Container>
  );
};
