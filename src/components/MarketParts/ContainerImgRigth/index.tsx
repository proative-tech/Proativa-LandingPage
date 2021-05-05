import { ReactNode } from 'react';
import { Container, Content, ContainerImg, ContainerText } from './styles';

interface ContainerImgLeftProps {
  children: ReactNode;
  src: string;
  name: string;
}

export const ContainerImgRight = ({
  children,
  src,
  name,
}: ContainerImgLeftProps) => {
  return (
    <Container>
      <Content>
        <ContainerText>{children}</ContainerText>
        <ContainerImg>
          <img src={src} alt={name} />
        </ContainerImg>
      </Content>
    </Container>
  );
};
