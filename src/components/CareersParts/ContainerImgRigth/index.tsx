import { ReactNode } from 'react';
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
  return (
    <Container>
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
