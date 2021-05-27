/* eslint-disable react/require-default-props */
import { ReactNode, ReactElement } from 'react';
import { Container, Content, ContainerImg, ContainerText } from './styles';

interface ContainerImgLeftProps {
  children: ReactNode;
  src: string;
  name: string;
  id?: string;
}

export const ContainerImgLeft = ({
  children,
  src,
  name,
  id,
}: ContainerImgLeftProps) => {
  return (
    <Container id={id}>
      <Content>
        <ContainerImg>
          <img src={src} alt={name} />
        </ContainerImg>
        <ContainerText>{children}</ContainerText>
      </Content>
    </Container>
  );
};
