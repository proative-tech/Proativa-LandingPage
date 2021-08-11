/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
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
  ListVant,
  ContainerButton,
} from './styles';

interface CybersecurityProps {
  // eslint-disable-next-line react/require-default-props
  children?: ReactNode;
  inverter?: boolean;
}

export const Professionals = ({
  children,
  inverter = false,
}: CybersecurityProps) => {
  const router = useRouter();
  const is1920 = useMediaQuery({ minWidth: 1601 });
  const isMobileOrTabled = useMediaQuery({ maxWidth: 928 });
  const [isAnimated, setIsAnimated] = useState(false);

  const handleScroll = () => {
    const ele: Element | any = document.getElementById(
      'containerProfessionals',
    );

    const getWindowBottom = window.scrollY + window.innerHeight;
    // const heightEle = ele?.getBoundingClientRect().bottom + window.scrollY - 600;
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
        id="containerProfessionals"
        inverter={inverter}
      >
        <Content>
          {children ? (
            <Header>{children}</Header>
          ) : (
            <>
              <Header>
                <span>Professional Services</span>
                <h1>
                  Nossos Serviços Profissionais abrangem uma ampla gama de
                  especializações que são prestados por nossa equipe e nossos
                  parceiros.
                </h1>
                <p>
                  Quando se trata de transformação digital, a tecnologia por si
                  só não é suficiente. Para realmente transformar uma
                  organização requer uma combinação de pessoas, processos e
                  tecnologia. Encontrar a combinação certa pode ser um desafio.
                  É por isso que oferecemos o Proative Professional Services.
                </p>
              </Header>
              <ListVant>
                <li>
                  <strong>1.</strong> IT Governance Consultant
                </li>
                <li>
                  <strong>2.</strong> Migração & PMO
                </li>
                <li>
                  <strong>3.</strong> Serviços Gerenciados - Profissional
                  Residente XLA
                </li>
                <li>
                  <strong>4.</strong> Serviços Expressos
                </li>
              </ListVant>
              <ContainerButton>
                <ButtonText
                  label="  Saiba mais sobre Professional Services"
                  directionArrow="right"
                  href="/solucoes/professionals"
                />
              </ContainerButton>
            </>
          )}
        </Content>
        <ContainerImg inverter={inverter}>
          <AnimationImg url="/images/servicosProfissionais1920.png" />
        </ContainerImg>
      </Container>
    </Wrapper>
  );
};
