import styled, { css } from 'styled-components';
import { animationFade, animationsObj } from '../../../utils/animations';
import { VisibledProp } from '../Informations/styles';

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
  padding: 4.9rem 4rem;
  width: 100%;

  @media (min-width: 1441px) {
    // max-width: 780px;
    // width: 100%;
    width: 95%;
    margin-right: 200px;
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

  @media (max-width: 490px) {
    max-width: 90%;
    margin-left: 0%;
    p {
      margin-left: 0px;
    }
  }
`;

export const Header = styled.div`
  span {
    font-size: 1rem;
    line-height: 1.1875rem;
    color: #eb0029;
    font-weight: 300;
    font-family: 'Source Sans Pro';
  }

  h1 {
    font-size: 2.25rem;
    // line-height: 3.125rem;
    font-family: 'Source Sans Pro';
    text-align: right;
  }

  p {
    font-size: 0.875rem;
    // line-height: 34px;
    color: #434343;
    text-align: right;
    margin-top: 2rem;
  }

  @media (min-width: 1441px) {
    max-width: 73%;
    margin-left: auto;
  }

  @media (min-width: 1518px) {
    max-width: 80%;
  }

  @media (min-width: 1772px) {
    max-width: 70%;
  }

  @media (max-width: 1440px) {
    max-width: 83%;
    margin-left: auto;
    h1 {
      margin-left: -100px;
    }
    p {
      margin-left: 80px;
      line-height: 24px;
    }
  }

  @media (max-width: 1260px) {
    p {
      margin-top: 17px;
      margin-left: 120px;
    }
  }

  @media (max-width: 928px) {
    max-width: 70%;

    margin-left: 0;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    h1,
    p {
      margin: 0;
      margin-top: 17px;
      text-align: left;
    }
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
      margin-left: 0px;
    }

    p {
      font-size: 12px;
      line-height: 24px;
      margin-left: 0px;
    }
  }
`;

export const Container = styled.div<VisibledProp>`
  ${({ visibled }) => css`
    opacity: ${visibled ? 1 : 0};
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    animation: ${animationFade} 2s;
    ${visibled &&
    css`
      ${ContainerImg} {
        img[data-img] {
          animation: ${animationsObj.toYAnimation(50)} 3s;
        }
      }

      ${Header} {
        animation: ${animationsObj.toXAnimation(-650)} 3s;
      }
    `}
  `}

  @media (max-width: 928px) {
    display: flex;
    flex-direction: column;
  }
`;
