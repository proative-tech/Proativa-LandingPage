import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  background: #fff;

  @media (max-width: 928px) {
    display: flex;
    flex-direction: column;
  }
`;

interface ContainerProps {
  modifier: boolean;
}

export const ContainerImg = styled.div<ContainerProps>`
  max-width: 100%;

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  ${({ modifier }) =>
    modifier &&
    css`
      order: -1;
    `}

  @media (max-width: 928px) {
    order: -1;
  }
`;

export const Content = styled.div`
  padding: 4.9rem 4rem 63px;
  width: 80%;

  height: 100%;

  display: flex;

  margin-left: auto;
  margin-right: 36px;

  @media (min-width: 1441px) {
    padding-right: 32px;

    display: flex;
    justify-content: flex-end;
  }

  @media (max-width: 1399px) {
    padding-top: 3.9rem;
    padding-bottom: 3.4rem;

    width: 90%;
  }

  @media (max-width: 1343px) {
    padding-top: 3.4rem;
    padding-right: 2rem;
    width: 85%;
  }

  @media (max-width: 1260px) {
    width: 85%;
  }

  @media (max-width: 1260px) {
    padding-left: 30px;
  }

  @media (max-width: 928px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

export const Header = styled.div`
  margin-bottom: 25px;

  span {
    font-size: 1rem;
    line-height: 1.1875rem;
    color: #eb0029;
    font-weight: 300;
    font-family: 'Source Sans Pro';
    font-weight: bold;

    margin-bottom: 30px;

    display: inline-block;
  }

  h1 {
    font-size: 3.4375rem;
    line-height: 3.625rem;
    font-family: 'Source Sans Pro';
  }

  p {
    font-size: 1.25rem;
    line-height: 1.875rem;
    color: #434343;

    margin-top: 1rem;
  }

  @media (min-width: 1441px) {
    max-width: 468px;
    width: 100%;
  }

  @media (max-width: 1260px) {
    p {
      margin-top: 17px;
    }
  }

  @media (max-width: 928px) {
    max-width: 70%;
  }

  @media (max-width: 669px) {
    max-width: 80%;
  }

  @media (max-width: 593px) {
    max-width: 90%;
  }

  @media (max-width: 490px) {
    max-width: 90%;

    span {
      font-size: 14px;
      line-height: 19px;
    }

    h1 {
      font-size: 20px;
      line-height: 28px;
    }

    p {
      font-size: 12px;
      line-height: 24px;
    }
  }

  @media (max-width: 390px) {
    max-width: 100%;
  }
`;
