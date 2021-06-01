import { Header } from '../components/Header';

import { Container, Wrapper, Content } from '../styles/pages/Blog';

export default function Index() {
  return (
    <>
      <Container>
        <Header noPaddingBottom />
      </Container>
      <Wrapper>
        <Content>
          <iframe
            src="https://google-webfonts-helper.herokuapp.com/fonts/poppins?subsets=latin"
            title="Test blog"
          />
        </Content>
      </Wrapper>
    </>
  );
}
