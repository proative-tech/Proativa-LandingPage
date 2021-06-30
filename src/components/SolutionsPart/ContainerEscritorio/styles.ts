import styled, { css } from 'styled-components';
import { animationFade, animationsObj } from '../../../utils/animations';
import { VisibledProp } from '../../LandingPart/Informations/styles';

import * as StylesAnimationImg from '../AnimationImg/styles';

interface ContainerProps {
  modifier: boolean;
}

export const Wrapper = styled.div`
  width: 100vw;
  background: #fff;

  padding-top: 1.0rem;

  @media (max-width: 928px) {
    padding-top: 0;
  }
`;

export const ContainerImg = styled.div<ContainerProps>`
  max-width: 100%;
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    max-height: 522px;
    height: 100%;
  }

  ${({ modifier }) =>
    modifier &&
    css`
      order: -1;
    `}

  @media (min-width: 1441px) {
    img {
      max-height: 564px;
      height: 100%;
    }
  }

  @media (max-width: 928px) {
    order: -1;
  }
`;

export const Content = styled.div`
  padding-left: 65px;

  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 1441px) {
    max-width: 780px;
    width: 100%;
    margin-left: auto;
  }

  @media (max-width: 1399px) {
    padding-top: 3.9rem;
    padding-bottom: 0.1rem;

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
    max-width: 100%;
    width: 100%;
    margin-left: 0%;
  }
`;

export const Header = styled.div`
  margin-bottom: 25px;

  max-width: 445px;

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

  max-width: 414px;

  h3 {
    font-size: 1rem;
    line-height: 1.3125rem;

    color: #000;
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
  display: flex;
  justify-content: flex-start;
`;

export const Container = styled.div<VisibledProp | any>`
  ${({ visibled, modifier }) => css`
    max-width: 1084px;
    width: 100%;

    margin: 0 auto;

    display: grid;
    grid-template-columns: repeat(2, 1fr);

    background: #fff;

    @media (min-width: 1441px) {
      max-width: 1214px;
      grid-template-columns: 55% 45%;
    }

    @media (max-width: 928px) {
      display: flex;
      flex-direction: column;
    }
    @media (max-width: 490px) {
      max-width: 100%;
      margin-left: 0%;
    }

    //animations

    ${StylesAnimationImg.Wrapper}, ${Content} {
      opacity: ${visibled ? 1 : 0};
    }

    ${visibled &&
    css`
      ${StylesAnimationImg.Wrapper} {
        animation: ${animationsObj.toYAnimation(70)} 1.2s;
      }

      ${modifier &&
      css`
        ${Content} {
          animation: ${animationsObj.toXAnimation(650)} 1.2s;
        }
      `}

      ${!modifier &&
      css`
        ${Content} {
          animation: ${animationsObj.toXAnimation(650)} 1.2s;
        }
      `}
    `}
  `}
`;
