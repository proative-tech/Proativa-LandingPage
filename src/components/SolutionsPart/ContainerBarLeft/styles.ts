import styled, { css } from 'styled-components';
import { animationFade, animationsObj } from '../../../utils/animations';
import { VisibledProp } from '../../LandingPart/Informations/styles';

export const Content = styled.div`
  max-width: 850px;
  width: 100%;

  margin: 0 auto;

  position: relative;
  padding-left: 150px;

  div.containerButton {
    display: flex;
    justify-content: flex-start;
  }

  @media (max-width: 820px) {
    padding-left: 0;

    max-width: 60%;

    margin: 0 auto;
    padding: 0 36px;

    display: flex;
    flex-direction: column;

    div.containerButton {
      align-self: center;
    }
  }

  @media (max-width: 718px) {
    max-width: 70%;
  }

  @media (max-width: 612px) {
    max-width: 80%; line-height: 1.8rem;
  }

  @media (max-width: 530px) {
    max-width: 100%;
    margin-top: -50px
  }
`;

export const ContentTop = styled.div`
  max-width: 562px;
  width: 100%;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    background: #c3c3c3;
    height: 110%;
    width: 5px;
  }

  h1 {
    font-size: 2.8125rem;
    line-height: 3.125rem;
    font-weight: 600;
    color: #36393b;
  }

  p {
    font-size: 1.125rem;
    line-height: 2.1875rem;
    color: #6a6a6a;

    margin: 30px 0 50px;
  }

  @media (max-width: 820px) {
    &::before {
      display: none;
    }

    h1 {
      color: #191919;
    }

    p {
      color: #191919;
    }
  }

  @media (max-width: 490px) {
    width: 90%;

    h1 {
      font-size: 20px;
      line-height: 30px;
    }

    p {
      font-size: 14px;
      line-height: 24px;
    }
  }

  @media (max-width: 382px) {
    width: 100%;
  }
`;

export const Container = styled.div<VisibledProp>`
  ${({ visibled }) => css`
    width: 100vw;

    background: #fff;

    margin-top: 5.75rem;

    margin-left: auto;
    margin-right: auto;

    ${Content} {
      opacity: ${visibled ? 1 : 0};
    }

    ${visibled &&
    css`
      ${Content} {
        div.containerButton {
          animation: ${animationsObj.toXAnimation(-650)} 1.2s;
        }
      }

      ${ContentTop} {
        h1 {
          animation: ${animationsObj.toYAnimation(150)} 1.2s;
        }
        p {
          animation: ${animationsObj.toYAnimation(100)} 1.2s;
        }
      }
    `}
  `}
`;
