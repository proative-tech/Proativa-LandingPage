/* eslint-disable react/require-default-props */
import { ReactNode, useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Container, Content, ContainerImg, ContainerText } from './styles';

interface ContainerImgLeftProps {
  children: ReactNode;
  src: string;
  name: string;
  id?: string;
  // eslint-disable-next-line react/no-unused-prop-types
  pixelOffset?: boolean;
}

export const ContainerImgLeft = ({
  children,
  src,
  name,
  id,
  pixelOffset = false,
}: ContainerImgLeftProps) => {
  const isMobileOrTabled = useMediaQuery({ maxWidth: 928 });
  const [isAnimated, setIsAnimated] = useState(false);

  const handleScroll = () => {
    let heightEle = window.innerHeight;

    if (pixelOffset) {
      heightEle = isMobileOrTabled
        ? window.innerHeight + 300
        : window.innerHeight + 1300;
    } else {
      heightEle = isMobileOrTabled
        ? window.innerHeight - 900
        : window.innerHeight - 300;
    }

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
    <Container id={id} visibled={isAnimated}>
      <Content>
        <ContainerImg>
          <img src={src} alt={name} />
        </ContainerImg>
        <ContainerText>{children}</ContainerText>
      </Content>
    </Container>
  );
};
