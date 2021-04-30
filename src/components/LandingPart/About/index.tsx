import { Container, ContainerImg, Content, Header, Footer } from './styles';

export const About = () => {
  return (
    <Container>
        <ContainerImg>
          <img src="/images/about_1.svg" alt="proative"/>
        </ContainerImg>

        <Content>
          <Header>
            <span>Sobre a Proative</span>
            <h1>Somos uma empresa de tecnologia especializada em soluções inovadoras de gerenciamento de informações.</h1>
            <p>Oferecemos soluções de gerenciamento de TI que te possibilitam visualizar seus dados e dispositivos de forma fácil, impulsionando operações e serviços para conectar, integrar e analisar seus indicadores de performance com segurança, agilidade, eficiência e colaboração.</p>
          </Header>
          <Footer>
            <h3>História</h3>
            <p>Desde 2007, a nossa missão tem sido de tornar as operações dos nossos clientes mais simples e eficientes, facilitando as tomadas de decisões potencializando o crescimento do negócio.</p>
          </Footer>
        </Content>
    </Container>
  )
}
