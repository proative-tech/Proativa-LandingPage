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
    let heightEle = window.innerHeight;

    heightEle = isMobileOrTabled
      ? window.innerHeight - 600
      : window.innerHeight - 700;

    if (!isAnimated && window.pageYOffset >= heightEle) {
      setIsAnimated(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container visibled={isAnimated}>
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
