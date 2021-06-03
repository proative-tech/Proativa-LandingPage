import styled, { css } from 'styled-components';
import { animationFade, animationsObj } from '../../../utils/animations';
import { VisibledProp } from '../../LandingPart/Informations/styles';

export const Content = styled.div`
  max-width: 1085px;
  width: 100%;

  max-height: 640px;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(2, 1fr);

  margin: 0 auto;

  @media (max-width: 920px) {
    display: flex;
    flex-direction: column;

    max-height: 100%;
  }
`;

export const ContainerImg = styled.div`
  width: 100%;

  img {
    width: 100%;
  }

  @media (max-width: 920px) {
    order: -1;
  }
`;

export const ContainerText = styled.div`
  padding: 2rem 0 4.8125rem;

  padding-right: calc(4.8125rem + 4.2rem);

  header.headerContent {
    h1 {
      font-size: 1.875rem;
      line-height: 2.8125rem;
    }

    p {
      font-size: 1.125rem;
      line-height: 1.875rem;
      color: #434343;

      margin-top: 18px;
    }
  }

  div.restContent {
    margin-top: 1.5rem;

    div + div {
      margin-top: 1.5rem;
    }

    div.containerText {
      h3 {
        color: #eb0029;
        font-size: 1rem;
        line-height: 1.1875rem;
      }

      p {
        font-size: 12px;
        line-height: 19px;
        color: #666666;

        margin-top: 6px;
      }
    }
  }

  @media (max-width: 1124px) {
    padding-right: calc(4.8125rem + 4.2rem - 36px);
    padding-left: 36px;
  }

  @media (max-width: 920px) {
    padding-left: 36px;
    padding-right: 36px;

    max-width: 80%;
  }

  @media (max-width: 580px) {
    max-width: 90%;
  }

  @media (max-width: 508px) {
    max-width: 100%;
  }

  @media (max-width: 485px) {
    header.headerContent {
      h1 {
        font-size: 22px;
        line-height: 35px;
      }

      p {
        font-size: 14px;
        line-height: 22px;

        margin-top: 12px;
      }
    }

    div.restContent {
      margin-top: 1rem;

      div + div {
        margin-top: 1rem;
      }

      div.containerText {
        h3 {
          font-size: 14px;
          line-height: 1.1875rem;
        }
      }
    }
  }
`;

export const Container = styled.div<VisibledProp>`
  ${({ visibled }) => css`
    width: 100vw;
    background: #fff;

    ${ContainerImg}, ${Content} {
      opacity: ${visibled ? 1 : 0};
    }

    ${visibled &&
    css`
      ${ContainerImg} {
        img {
          animation: ${animationsObj.toYAnimation(150)} 3s;
        }
      }

      ${ContainerText} {
        animation: ${animationsObj.toXAnimation(-650)} 3s;
      }
    `}
  `}
`;
