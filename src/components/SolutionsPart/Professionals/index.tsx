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
  ListVant,
  ContainerButton,
} from './styles';

interface CybersecurityProps {
  // eslint-disable-next-line react/require-default-props
  children?: ReactNode;
}

export const Professionals = ({ children }: CybersecurityProps) => {
  const router = useRouter();
  const is1920 = useMediaQuery({ minWidth: 1601 });
  const isMobileOrTabled = useMediaQuery({ maxWidth: 928 });
  const [isAnimated, setIsAnimated] = useState(false);

  const handleScroll = () => {
    const ele: Element | any = document.getElementById(
      'containerProfessionals',
    );

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
    <Container visibled={isAnimated} id="containerProfessionals">
      <ContainerImg>
        <img
          src={
            is1920
              ? '/images/servicosProfissionais1920.png'
              : '/images/servico_profissional1440.png'
          }
          alt="proative"
        />
      </ContainerImg>
      <Content>
        {children ? (
          <Header>{children}</Header>
        ) : (
          <>
            <Header>
              <span>Serviços Profissionais</span>
              <h1>
                Possuímos profissionais capacitados e certificados para executar
                as atividades críticas do seu ambiente.
              </h1>
              <p>
                Além dos projetos, também provemos serviços residentes, por meio
                de um processo de recrutamento e seleção desenvolvido com
                agilidade e assertividade, com modelo de gestão por SLA e XLA
                (Service Level Agreement e Experience Level Agreement), aderente
                às melhores práticas de Governança de TI, para impulsionar seu
                negócio.
              </p>
            </Header>
            <ListVant>
              <li>
                <strong>1.</strong> Redução de custos com contratação de
                profissionais.
              </li>
              <li>
                <strong>2.</strong> Rapidez na alocação de profissionais.
              </li>
              <li>
                <strong>3.</strong> Gerenciamento dos serviços através de SLA e
                XLA
              </li>
              <li>
                <strong>4.</strong> Capacitação Técnica..
              </li>
            </ListVant>
            <ContainerButton>
              <Link scroll={false} href="/solucoes/professionals" passHref>
                <Button type="button">
                  Saiba mais sobre Serviços Profissionais
                </Button>
              </Link>
            </ContainerButton>
          </>
        )}
      </Content>
    </Container>
  );
};
