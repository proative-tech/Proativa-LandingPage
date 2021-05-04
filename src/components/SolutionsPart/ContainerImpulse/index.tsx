import { Button } from '../../Button';
import { Container, Content, ContentTop } from './styles';

export const ContainerImpulse = () => {
  return (
    <Container>
      <Content>
        <ContentTop>
          <h1>
            Quer impulsionar o desempenho sua operação de TI e do seu negócio?
          </h1>
          <p>
            Nosso Next-Generation Command Center é altamente contextualizado com
            ferramentas e aplicativos que são conscientes do contexto de serviço
            e escaláveis, para lidar com volumes crescentes de dados.
          </p>
        </ContentTop>

        <div className="containerButton">
          <Button type="button">Fale Conosco</Button>
        </div>
      </Content>
    </Container>
  );
};
