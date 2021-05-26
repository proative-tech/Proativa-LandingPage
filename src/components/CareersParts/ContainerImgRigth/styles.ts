import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  background: #fff;
`;

export const Content = styled.div`
  max-width: 1085px;
  width: 100%;

  max-height: 640px;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(2, 41.5% 58.5%);

  margin: 0 auto;

  @media (max-width: 920px) {
    display: flex;
    flex-direction: column;

    max-height: 100%;
  }
`;

export const ContainerImg = styled.div`
  width: 100%;

  img {
    width: 100%;
    height: 429px;
  }

  @media (max-width: 920px) {
    order: -1;
  }

  @media (max-width: 550px) {
    img {
      height: 100%;
    }
  }
`;

export const ContainerText = styled.div`
  padding-right: 69px;

  header.headerContent {
    h1 {
      font-size: 1.875rem;
      line-height: 2.8125rem;
    }

    p {
      font-size: 1.125rem;
      line-height: 1.875rem;
      color: #434343;

      margin-top: 18px;
    }
  }

  @media (max-width: 1150px) {
    padding-left: 42px;
  }

  @media (max-width: 920px) {
    margin-top: 52px;
    padding-right: 42px;
    width: 60%;
  }

  @media (max-width: 650px) {
    width: 70%;
  }

  @media (max-width: 575px) {
    width: 80%;
  }

  @media (max-width: 485px) {
    width: 95%;

    header.headerContent {
      h1 {
        font-size: 24px;
        line-height: 34px;
      }

      p {
        font-size: 14px;
        line-height: 24px;

        margin-top: 12px;
      }
    }
  }
`;
