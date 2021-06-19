import styled, { css } from 'styled-components';
import { VisibledProp } from '../Informations/styles';
import { animationsObj } from '../../../utils/animations';

export const ContainerImg = styled.div`
  position: relative;

  max-width: 100%;

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  /* > div {
    content: '';
    background: #e5e5e5;
    width: 100%;
    height: 414px;
  } */
`;

export const Content = styled.div`
  padding: 4.9rem 4rem;
  width: 100%;

  @media (min-width: 1399px) {
    padding-top: 3.9rem;
    padding-bottom: 3.4rem;

    width: 95%;
    margin-left: 5%;
  }

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

export const Footer = styled.div`
  margin-top: 2.5rem;

  max-width: 70%;

  h3 {
    font-size: 2.25rem;
    line-height: 3.125rem;
  }

  p {
    font-size: 0.875rem;
    line-height: 1.5625rem;
    color: #434343;

    margin-top: 1.6875rem;
  }

  @media (min-width: 1441px) {
    max-width: 83%;
    p {
      font-size: 0.875rem;
      line-height: 34px;
      color: #434343;
      margin-right: 250px;
      margin-top: 2rem;
    }
  }

  @media (min-width: 1518px) {
    max-width: 80%;

    p {
      width: 80%;
    }
  }

  @media (min-width: 1772px) {
    max-width: 60%;

    p {
      width: 80%;
    }
  }

  @media (max-width: 1260px) {
    max-width: 83%;
    margin-top: 18px;

    p {
      margin-right: 100px;
      margin-top: 22px;
    }
  }

  @media (max-width: 928px) {
    max-width: 70%;
  }

  @media (max-width: 490px) {
    max-width: 100%;
    p {
      font-size: 12px;
      line-height: 24px;
      margin-right: 30px;
    }
  }
`;

export const Container = styled.div<VisibledProp>`
  ${({ visibled }) => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    margin-top: 92px;
    ${Content}, ${ContainerImg} {
      opacity: ${visibled ? 1 : 0};
    }
    ${visibled &&
    css`
      ${ContainerImg} {
        animation: ${animationsObj.toYAnimation(50)} 1.2s;
      }

      ${Footer} {
        animation: ${animationsObj.toXAnimation(650)} 1.2s;
      }
    `}
  `}
  @media (max-width: 928px) {
    display: flex;
    flex-direction: column;
    margin-top: 40px;
  }
`;
