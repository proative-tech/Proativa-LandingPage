import { ReactNode, useState, useEffect } from 'react';
import { Container, Content, ContainerImg, ContainerText } from './styles';

interface ContainerImgLeftProps {
  children: ReactNode;
  name: string;
  img: string;
}

export const ContainerImgLeft = ({
  children,
  name,
  img,
}: ContainerImgLeftProps) => {
  const [isAnimated, setIsAnimated] = useState(false);

  const handleScroll = () => {
    const ele: Element | any = document.getElementById('containerImgLeft');

    const getWindowBottom = window.scrollY + window.innerHeight;
    const heightEle =
      ele?.getBoundingClientRect().bottom + window.scrollY - 300;

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
    <Container visibled={isAnimated} id="containerImgLeft">
      <Content>
        <ContainerImg>
          <img src={img} alt={name} />
        </ContainerImg>
        <ContainerText>{children}</ContainerText>
      </Content>
    </Container>
  );
};
