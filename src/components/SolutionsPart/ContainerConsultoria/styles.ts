import styled, { css } from 'styled-components';
import { animationFade, animationsObj } from '../../../utils/animations';
import { VisibledProp } from '../../LandingPart/Informations/styles';

export const ContainerImg = styled.div`
  max-width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    display: block;
    width: 330px;
    height: 208px;
  }

  @media (min-width: 1441px) {
    justify-content: flex-start;

    img {
      margin-left: 40px;
      img {
        display: block;
        width: 30px;
        height: 208px;
      }
    }
  }

  @media (max-width: 1441px) {
    justify-content: flex-start;

    img {
      margin-left: 100px;

      display: block;
      width: 330px;
      height: 207px;
    }
  }

  @media (max-width: 928px) {
    order: -1;

    padding-top: 50px;
  }

  @media (max-width: 490px) {
    justify-content: flex-start;

    img {
      margin-left: 100px;

      display: block;
      width: 110px;
      height: 70px;
    }
  }
`;

export const Content = styled.div`
  padding: 4.9rem 4rem 63px;
  width: 92%;

  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 1441px) {
    max-width: 680px;
    width: 100%;

    padding-right: 0;

    margin-left: auto;
  }

  @media (max-width: 1399px) {
    padding-top: 3.9rem;
    padding-bottom: 0.1rem;
    width: 90%;
    margin-left: 20%;
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
    padding-top: 3.9rem;
    padding-bottom: 0.1rem;

    width: 100%;
    margin-left: 0%;
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

    margin-top: 1rem;

    width: 90%;
  }

  @media (min-width: 1546px) {
    max-width: 80%; line-height: 1.8rem;
  }

  @media (min-width: 1441px) {
    max-width: 85%;

    p {
      font-size: 1rem;
      line-height: 1.875rem;

      width: 80%;
    }
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
    max-width: 80%; line-height: 1.8rem;
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
      font-size: 14px;
      line-height: 24px;
    }
  }

  @media (max-width: 390px) {
    max-width: 100%;
  }
`;

export const Footer = styled.div`
  margin-top: 12px;

  h3 {
    font-size: 1rem;
    line-height: 1.3125rem;

    color: #eb0029;
  }

  p {
    font-size: 0.875rem;
    line-height: 1.5625rem;
    color: #434343;
  }

  @media (min-width: 1772px) {
    max-width: 70%;
  }

  @media (min-width: 1518px) {
    max-width: 80%; line-height: 1.8rem;
  }

  @media (min-width: 1441px) {
    max-width: 83%;
  }

  @media (max-width: 928px) {
    max-width: 70%;
  }

  @media (max-width: 647px) {
    max-width: 80%; line-height: 1.8rem;
  }

  @media (max-width: 490px) {
    max-width: 100%;

    p {
      font-size: 14px;
      line-height: 24px;
    }
  }
`;

export const ContainerButton = styled.div`
  margin-top: 30px;

  @media (max-width: 920px) {
    width: 70%;
  }

  @media (max-width: 490px) {
    width: 95%;
  }

  @media (max-width: 360px) {
    width: 100%;
  }
`;

export const Container = styled.div<VisibledProp>`
  ${({ visibled }) => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    background: #fff;

    @media (min-width: 1441px) {
      grid-template-columns: 1fr 45%;
    }

    @media (max-width: 928px) {
      display: flex;
      flex-direction: column;
    }

    ${Content}, ${ContainerImg} {
      opacity: ${visibled ? 1 : 0};
    }

    ${visibled &&
    css`
      ${ContainerImg} {
        img {
          animation: ${animationFade} 1.2s;
        }
      }

      ${Content} {
        animation: ${animationsObj.toXAnimation(-650)} 1.2s;
      }
    `}
  `}
`;
