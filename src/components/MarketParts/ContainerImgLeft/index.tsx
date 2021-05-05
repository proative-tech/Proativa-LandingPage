import { ReactNode } from 'react';
import { Container, Content, ContainerImg, ContainerText } from './styles';

interface ContainerImgLeftProps {
  children: ReactNode;
  src: string;
  name: string;
}

export const ContainerImgLeft = ({
  children,
  src,
  name,
}: ContainerImgLeftProps) => {
  return (
    <Container>
      <Content>
        <ContainerImg>
          <img src={src} alt={name} />
        </ContainerImg>
        <ContainerText>{children}</ContainerText>
      </Content>
    </Container>
  );
};
