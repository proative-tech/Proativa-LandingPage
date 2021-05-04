import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;

  background: #fff;
`;

export const Content = styled.div`
  max-width: calc(537px + 170px);
  width: 100%;

  margin: 0 auto;

  position: relative;
  padding-left: 170px;

  div.containerButton {
    width: 267px;
  }
`;

export const ContentTop = styled.div`
  &::before {
    content: '';
    position: absolute;
    left: 0;
    background: #c3c3c3;
    height: calc(100% - 99px);
    width: 5px;
  }

  h1 {
    font-size: 2.8125rem;
    line-height: 3.125rem;
    color: #707070;
  }

  p {
    font-size: 1.125rem;
    line-height: 2.1875rem;
    color: #707070;

    margin: 30px 0 50px;
  }
`;
