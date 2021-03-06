/* eslint-disable react/require-default-props */
import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { ButtonText } from '../ButtonText';
import { Container, Content, ContentTop } from './styles';

type Props = {
  children?: React.ReactNode;
  labelBtn?: string;
};

export const ContainerImpulse = ({ children, labelBtn }: Props) => {
  const isMobileOrTabled = useMediaQuery({ maxWidth: 928 });
  const [isAnimated, setIsAnimated] = useState(false);

  const handleScroll = () => {
    const ele: Element | any = document.getElementById('containerImpulse');

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

  return (
    <Container visibled={isAnimated} id="containerImpulse">
      <Content>
        {children ? (
          <>
            <ContentTop>{children}</ContentTop>

            <div className="containerButton">
              <ButtonText
                label={labelBtn}
                href="/fale-conosco"
                directionArrow="top"
              />
            </div>
          </>
        ) : (
          <>
            <ContentTop>
              <h1>
              Quer impulsionar o desempenho da sua operação de TI e do seu negócio?
              </h1>
              <p>
              Entre em contato com os nossos especialistas, estamos ansiosos para ajudá-lo com seus desafios.
              </p>
            </ContentTop>

            <div className="containerButton">
              <ButtonText
                label="Entre em contato sobre Managed Services"
                href="/fale-conosco"
                directionArrow="top"
              />
            </div>
          </>
        )}
      </Content>
    </Container>
  );
};
