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

  @media (max-width: 820px) {
    padding-left: 0;

    max-width: 60%;

    margin: 0 auto;
    padding: 0 36px;

    display: flex;
    flex-direction: column;

    div.containerButton {
      align-self: center;
    }
  }

  @media (max-width: 718px) {
    max-width: 70%;
  }

  @media (max-width: 612px) {
    max-width: 80%;
  }

  @media (max-width: 530px) {
    max-width: 100%;
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

  @media (max-width: 820px) {
    &::before {
      display: none;
    }

    h1 {
      color: #191919;
    }

    p {
      color: #191919;
    }
  }

  @media (max-width: 490px) {
    width: 90%;

    h1 {
      font-size: 20px;
      line-height: 30px;
    }

    p {
      font-size: 12px;
      line-height: 24px;
    }
  }

  @media (max-width: 382px) {
    width: 100%;
  }
`;
