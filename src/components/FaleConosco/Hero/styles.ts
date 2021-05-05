import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;

  position: relative;
`;

export const ContainerTop = styled.div`
  display: grid;
  grid-template-columns: 1fr 45%;

  @media (max-width: 1264px) {
    grid-template-columns: 1fr 45%;
  }

  @media (max-width: 920px) {
    display: flex;
    flex-direction: column;

    justify-content: flex-start;

    padding: 0 36px;

    width: 60%;
  }

  @media (max-width: 778px) {
    width: 70%;
  }

  @media (max-width: 662px) {
    width: 80%;
  }

  @media (max-width: 584px) {
    width: 90%;
  }

  @media (max-width: 516px) {
    width: 100%;
  }
`;

export const Content = styled.section`
  width: 70%;

  justify-self: flex-end;
  align-self: center;

  > div.content__text {
    margin-bottom: 3.125rem;
    margin-left: 1rem;

    h1 {
      font-size: 2.35rem;
      font-family: 'Source Sans Pro';
      margin-bottom: 1rem;
      font-weight: bold;
    }

    p {
      font-size: 1.125rem;
      line-height: 1.75rem;
      line-height: 'Open Sans';
      color: #6a6a6a;
      margin-bottom: 2rem;
    }
  }

  @media (max-width: 1378px) {
    width: 80%;
  }

  @media (max-width: 920px) {
    width: 100%;
  }

  @media (max-width: 464px) {
    div.content__text {
      h1 {
        font-size: 26px;
        line-height: 34px;
      }

      p {
        font-size: 12px;
        line-height: 24px;
      }
    }
  }
`;

export const ContainerImg = styled.section`
  position: relative;
  left: 0;

  justify-self: flex-end;

  width: 80%;
`;

export const ContainerBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 50px;

  padding-bottom: 67px;
`;
