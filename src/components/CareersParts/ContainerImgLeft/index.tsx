import { ReactNode } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Container, Content, ContainerImg, ContainerText } from './styles';

interface ContainerImgLeftProps {
  children: ReactNode;
  name: string;
}

export const ContainerImgLeft = ({ children, name }: ContainerImgLeftProps) => {
  const isMobile = useMediaQuery({ maxWidth: 490 });
  return (
    <Container>
      <Content>
        <ContainerImg>
          <img
            src={
              isMobile
                ? '/images/carreira-cont-2-m.png'
                : '/images/carreira-cont-2.png'
            }
            alt={name}
          />
        </ContainerImg>
        <ContainerText>{children}</ContainerText>
      </Content>
    </Container>
  );
};
