import styled, { css } from 'styled-components';
import { animationFade, animationsObj } from '../../../utils/animations';
import { VisibledProp } from '../../LandingPart/Informations/styles';

export const Content = styled.div`
  max-width: 1085px;
  width: 100%;

  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 7rem;

  @media (max-width: 1140px) {
    padding: 0 36px;
  }

  @media (max-width: 928px) {
    display: flex;
    flex-direction: column;

    max-width: 70%;

    margin: 0;
  }

  @media (max-width: 695px) {
    max-width: 80%; line-height: 1.8rem;
  }

  @media (max-width: 528px) {
    max-width: 90%;
  }

  @media (max-width: 473px) {
    max-width: 100%;
  }
`;

export const ContainerLeft = styled.div`
  > div.containerLeftText {
    h2 {
      font-size: 1.875rem;
      line-height: 5rem;
      color: #a7a7a7;
    }

    p {
      font-size: 1.125rem;
      line-height: 1.875rem;
      color: #6a6a6a;
    }
  }
`;

export const ContainerRight = styled.div`
  > div.containerRightContent {
    display: flex;
    align-items: center;

    img {
      margin-right: 3rem;
    }

    > div {
      p {
        color: #ea0a2a;
        font-size: 1.25rem;
        line-height: 1.875rem;
      }

      span {
        font-size: 1.125rem;
        line-height: 1.875rem;

        margin-top: 1.5rem;
      }
    }

    & + div.containerRightContent {
      margin-top: 3rem;
    }
  }

  @media (max-width: 928px) {
    order: -1;
  }
`;

export const Container = styled.div<VisibledProp>`
  ${({ visibled }) => css`
    width: 100vw;

    background: #fff;

    padding: 77px 0;

    ${Content} {
      opacity: ${visibled ? 1 : 0};
    }

    ${visibled &&
    css`
      ${ContainerLeft} {
        div.containerLeftText:nth-child(1) {
          animation: ${animationsObj.toXAnimation(-250)} 3s;
        }

        div.containerLeftText:nth-child(2) {
          animation: ${animationsObj.toXAnimation(-350)} 3s;
        }
      }

      ${ContainerRight} {
        div.containerRightContent:nth-child(1) {
          animation: ${animationsObj.toXAnimation(150)} 3s;
        }
        div.containerRightContent:nth-child(2) {
          animation: ${animationsObj.toXAnimation(250)} 3s;
        }
        div.containerRightContent:nth-child(3) {
          animation: ${animationsObj.toXAnimation(350)} 3s;
        }
      }
    `}
  `}
`;
