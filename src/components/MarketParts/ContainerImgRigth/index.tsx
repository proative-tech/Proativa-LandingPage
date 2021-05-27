/* eslint-disable react/require-default-props */
import { ReactNode } from 'react';
import { Container, Content, ContainerImg, ContainerText } from './styles';

interface ContainerImgLeftProps {
  children: ReactNode;
  src: string;
  name: string;
  id?: string;
}

export const ContainerImgRight = ({
  children,
  src,
  name,
  id,
}: ContainerImgLeftProps) => {
  return (
    <Container id={id}>
      <Content>
        <ContainerText>{children}</ContainerText>
        <ContainerImg>
          <img src={src} alt={name} />
        </ContainerImg>
      </Content>
    </Container>
  );
};
