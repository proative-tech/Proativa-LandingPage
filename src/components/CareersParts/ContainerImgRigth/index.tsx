import { ReactNode, useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Container, Content, ContainerImg, ContainerText } from './styles';

interface ContainerImgLeftProps {
  children: ReactNode;
  name: string;
}

export const ContainerImgRight = ({
  children,
  name,
}: ContainerImgLeftProps) => {
  const isMobile = useMediaQuery({ maxWidth: 490 });
  const isMobileOrTabled = useMediaQuery({ maxWidth: 928 });
  const [isAnimated, setIsAnimated] = useState(false);

  const handleScroll = () => {
    const ele: Element | any = document.getElementById('containerImgRight');

    const getWindowBottom = window.scrollY + window.innerHeight;
    const heightEle =
      ele?.getBoundingClientRect().bottom + window.scrollY - 400;

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
    <Container visibled={isAnimated} id="containerImgRight">
      <Content>
        <ContainerText>{children}</ContainerText>
        <ContainerImg>
          <img
            src={
              isMobile
                ? '/images/carreira-cont-1-m.png'
                : '/images/carreira-cont-1.png'
            }
            alt={name}
          />
        </ContainerImg>
      </Content>
    </Container>
  );
};
