import styled, { css } from 'styled-components';
import { animationFade, animationsObj } from '../../../utils/animations';
import { VisibledProp } from '../../LandingPart/Informations/styles';

export const ContainerTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 60px;
  margin-bottom: 116px;

  p.tag {
    color: #eb0029;
  }

  a {
    text-decoration: none;
  }

  > p {
    margin-bottom: 1.75rem;

    font-size: 2.375rem;
    line-height: 1.1875rem;
    font-family: 'Source Sans Pro';
    color: #eb0029;
    font-weight: bold;
  }

  @media (max-width: 920px) {
    margin-bottom: 38px;
  }

  @media (max-width: 490px) {
    > p {
      margin-bottom: 18px;

      font-size: 30px;
      line-height: 1.1875rem;
    }
  }
`;

export const ContainerBottom = styled.div`
  display: flex;
  width: 100vw;

  img {
    width: 100vw;
  }

  @media (min-width: 1920px) {
    img {
      max-height: 485px;
    }
  }
`;

export const ContainerInfo = styled.div`
  max-width: 1085px;
  width: 100%;
  margin: 0 auto;

  margin-top: 93px;

  > h1 {
    font-size: 3.25rem;
    line-height: 4.375rem;
    font-family: 'Source Sans Pro';
    color: #eb0029;
    font-weight: 300;

    strong {
      font-size: 3.75rem;
      line-height: 4.375rem;
      font-family: 'Source Sans Pro';
      color: #434343;
      font-weight: bold;
    }
  }

  div.containerMainInfo {
    margin-top: 40px;

    width: 80%;

    ul {
      list-style: none;
      li {
        p {
          font-size: 1.875rem;

          font-weight: bold;
          font-family: 'Source Sans Pro';
          color: #434343;
        }
      }

      li + li {
        margin-top: 28px;
      }
    }
  }

  @media (max-width: 1150px) {
    margin-left: 42px;
    margin-right: 42px;
  }

  @media (max-width: 490px) {
    margin-top: 52px;

    > h1 {
      font-size: 40px;
      line-height: 55px;
    }
  }

  p {
    font-size: 24px;
  }
`;

export const ContainerGoTop = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 80px;

  a {
    border: none;
    background: transparent;

    cursor: pointer;
  }

  @media (max-width: 490px) {
    margin-top: 52px;
  }
`;

export const Container = styled.div<VisibledProp | any>`
  ${({ visibled, visibledList }) => css`
    margin: 0 auto;

    position: relative;
    ${ContainerTop}, ${ContainerBottom},  ${ContainerInfo}, ${ContainerGoTop} {
      opacity: ${visibled ? 1 : 0};
    }

    ${ContainerInfo} {
      opacity: ${visibledList ? 1 : 0};
    }

    ${visibled &&
    css`
      ${ContainerTop} {
        animation: ${animationFade} 3s;
      }

      ${ContainerBottom} {
        animation: ${animationFade} 3s;
      }
    `}

    ${visibledList &&
    css`
      ${ContainerInfo} {
        h1 {
          animation: ${animationFade} 3s;
        }

        ul {
          li:nth-child(1) {
            animation: ${animationsObj.toXAnimation(-150)} 3s;
          }
          li:nth-child(2) {
            animation: ${animationsObj.toXAnimation(-250)} 3s;
          }
          li:nth-child(3) {
            animation: ${animationsObj.toXAnimation(-350)} 3s;
          }
          li:nth-child(4) {
            animation: ${animationsObj.toXAnimation(-450)} 3s;
          }
          li:nth-child(5) {
            animation: ${animationsObj.toXAnimation(-550)} 3s;
          }
          li:nth-child(6) {
            animation: ${animationsObj.toXAnimation(-650)} 3s;
          }
          li:nth-child(7) {
            animation: ${animationsObj.toXAnimation(-750)} 3s;
          }
          li:nth-child(8) {
            animation: ${animationsObj.toXAnimation(-850)} 3s;
          }
          li:nth-child(9) {
            animation: ${animationsObj.toXAnimation(-950)} 3s;
          }
          li:nth-child(10) {
            animation: ${animationsObj.toXAnimation(-1050)} 3s;
          }
        }
      }
    `}
  `}
`;
