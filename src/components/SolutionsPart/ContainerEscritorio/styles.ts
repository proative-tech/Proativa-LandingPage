import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  background: #fff;
`;

export const ContainerContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  margin: 0 auto;

  width: 90%;

  padding-bottom: 126px;

  @media (max-width: 928px) {
    display: flex;
    flex-direction: column;

    width: 100%;
  }
`;

export const ContainerImg = styled.div`
  max-width: 100%;

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 928px) {
    order: -1;
  }
`;

export const Content = styled.div`
  padding: 2rem;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;

  width: 90%;

  span {
    font-size: 1rem;
    line-height: 1.1875rem;
    color: #eb0029;
    font-weight: 300;
    font-family: 'Source Sans Pro';
  }

  h1 {
    font-size: 1.875rem;
    line-height: 2.8125rem;
    font-family: 'Source Sans Pro';
  }

  p {
    font-size: 1rem;
    line-height: 1.875rem;
    color: #434343;

    margin-top: 2rem;

    width: 85%;

    align-self: flex-end;
  }

  @media (max-width: 994px) {
    h1 {
      font-size: 25px;
    }
  }

  @media (max-width: 928px) {
    max-width: 52%;

    p {
      width: 100%;
    }
  }

  @media (max-width: 827px) {
    max-width: 60%;
  }

  @media (max-width: 650px) {
    max-width: 70%;
  }

  @media (max-width: 580px) {
    max-width: 80%;
  }

  @media (max-width: 523px) {
    max-width: 90%;
  }

  @media (max-width: 490px) {
    max-width: 100%;

    span {
      font-size: 12px;
      line-height: 19px;
    }

    h1 {
      font-size: 20px;
      line-height: 30px;
    }
  }
`;
