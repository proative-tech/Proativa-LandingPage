import styled, { css } from 'styled-components';
import { animationFade, animationsObj } from '../../../utils/animations';
import { VisibledProp } from '../../LandingPart/Informations/styles';

export const Wrapper = styled.div`
  width: 100vw;
  background: #fff;

  padding-top: 3rem;
`;

export const ContainerImg = styled.div`
  max-width: 100%;

  img {
    display: block;
    width: 100%;
    max-height: 616px;
  }

  @media (min-width: 1441px) {
    img {
      max-height: 635px;
      height: 100%;
    }
  }

  @media (max-width: 928px) {
    order: -1;
  }
`;

export const Content = styled.div`
  padding-right: 75px;

  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

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
    max-width: 85%;
    margin-left: 0%;
  }
`;

export const Header = styled.div`
  margin-bottom: 25px;

  max-width: 28.6rem;

  span {
    font-size: 1rem;
    line-height: 1.1875rem;
    color: #eb0029;
    font-weight: 600;
    font-family: 'Source Sans Pro';
  }

  h1 {
    font-size: 1.875rem;
    line-height: 2.8125rem;
    font-family: 'Source Sans Pro';
  }

  p {
    font-size: 0.875rem;
    line-height: 1.5625rem;
    color: #434343;

    margin-top: 1rem;

    width: 90%;
  }

  @media (min-width: 1441px) {
    max-width: 474px;
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

  @media (max-width: 669px) {
    max-width: 80%;
  }

  @media (max-width: 593px) {
    max-width: 90%;
  }

  @media (max-width: 490px) {
    max-width: 100%;
    span {
      margin-bottom: 20px;
      font-size: 14px;
      line-height: 19px;
    }

    h1 {
      font-size: 20px;
      line-height: 28px;
    }

    p {
      width: 100%;
      font-size: 12px;
      line-height: 24px;
      margin-right: 0px;
    }
  }

  @media (max-width: 390px) {
    max-width: 100%;
    p {
      width: 100%;
    }
  }
`;

export const ListVant = styled.ul`
  list-style: none;

  margin-bottom: 40px;

  width: 100%;

  li {
    font-weight: bold;
    color: #000;
    font-size: 1rem;
    line-height: 1.1875rem;

    strong {
      color: #000;

      font-size: 1rem;

      margin-right: 8px;
      position: relative;
      bottom: -2px;

      font-family: 'Source Sans Pro';
    }
  }

  li + li {
    margin-top: 10px;
  }
`;

export const ContainerButton = styled.div`
  margin-top: 30px;

  @media (min-width: 1441px) {
    width: 60%;
  }

  @media (max-width: 1440px) {
    width: 90%;
  }

  @media (max-width: 920px) {
    width: 70%;
  }

  @media (max-width: 490px) {
    width: 120%;
  }

  @media (max-width: 360px) {
    p {
      font-size: 3px;
    }
    width: 100%;
  }
`;

export const Container = styled.div<VisibledProp>`
  ${({ visibled }) => css`
    max-width: 1084px;
    width: 100%;

    margin: 0 auto;

    display: grid;
    grid-template-columns: repeat(2, 1fr);

    background: #fff;

    @media (min-width: 1441px) {
      max-width: 1214px;
    }

    @media (max-width: 928px) {
      display: flex;
      flex-direction: column;
    }
    @media (max-width: 490px) {
      max-width: 100%;
      margin-left: 0%;
    }

    ${ContainerImg}, ${Content} {
      opacity: ${visibled ? 1 : 0};
    }

    ${visibled &&
    css`
      ${ContainerImg} {
        img {
          animation: ${animationsObj.toYAnimation(70)} 3s;
        }
      }
      ${Content} {
        animation: ${animationsObj.toXAnimation(-650)} 3s;
      }
    `}
  `}
`;
