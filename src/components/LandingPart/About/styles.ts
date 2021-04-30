import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 928px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ContainerImg = styled.div`
  max-width: 100%;

  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export const Content = styled.div`
  padding: 4.9rem 4rem;
  width: 100%;

  @media (max-width: 1399px) {
    padding-top: 3.9rem;
    padding-bottom: 3.4rem;

    width: 95%;
  }

  @media (max-width: 1343px) {
    padding-top: 3.4rem;
    padding-right: 2rem;
  }

  @media (max-width: 1260px) {
    width: 100%;
  }

  @media (max-width: 1260px) {
    padding-left: 30px;
  }
`;

export const Header = styled.div`
  span {
    font-size: 1rem;
    line-height: 1.1875rem;
    color: #EB0029;
    font-weight: 300;
    font-family: 'Source Sans Pro';
  }

  h1 {
    font-size: 2.25rem;
    line-height: 3.125rem;
    font-family: 'Source Sans Pro';
  }

  p {
    font-size: 0.875rem;
    line-height: 1.5625rem;
    color: #434343;

    margin-top: 2rem;
  }

  @media (min-width: 1772px) {
    max-width: 70%;
  }

  @media (min-width: 1518px) {
    max-width: 80%;
  }

  @media (min-width: 1441px) {
    max-width: 83%;
  }

  @media (max-width: 1260px) {
    p {
      margin-top: 17px;
    }
  }

  @media (max-width: 928px) {
    max-width: 70%;
  }

  @media (max-width: 647px) {
    max-width: 80%;
  }

  @media (max-width: 490px) {
    max-width: 100%;

    span {
      font-size: 14px;
      line-height: 19px;
    }

    h1 {
      font-size: 28px;
      line-height: 35px;
    }

    p {
      font-size: 12px;
      line-height: 24px;
    }
  }
`;

export const Footer = styled.div`
    margin-top: 2.5rem;

    h3 {
      font-size: 1rem;
      line-height: 1.3125rem;
    }

    p {
      font-size: 0.875rem;
      line-height: 1.5625rem;
      color: #434343;

      margin-top: 1.6875rem;
    }

    @media (min-width: 1772px) {
      max-width: 70%;
    }

    @media (min-width: 1518px) {
      max-width: 80%;
    }

    @media (min-width: 1441px) {
      max-width: 83%;
    }

    @media (max-width: 1260px) {
      margin-top: 18px;

      p {
        margin-top: 22px;
      }
    }

    @media (max-width: 928px) {
    max-width: 70%;
  }

  @media (max-width: 647px) {
    max-width: 80%;
  }

  @media (max-width: 490px) {
    max-width: 100%;

    p {
      font-size: 12px;
      line-height: 24px;
    }
  }
`;
