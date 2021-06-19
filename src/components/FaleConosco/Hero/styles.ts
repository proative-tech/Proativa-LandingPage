import styled, { css, keyframes } from 'styled-components';
import { animationFade, animationsObj } from '../../../utils/animations';
import { VisibledProp } from '../../LandingPart/Informations/styles';

const animationH1 = keyframes`
  from {
    transform: translateY(50px);
    opacity: 0;
  }

  to {
    opacity: translateY(0);
    opacity: 1;
  }
`;
``;

export const ContainerTop = styled.div`
  display: grid;
  grid-template-columns: 1fr 45%;

  @media (max-width: 1264px) {
    grid-template-columns: 1fr 45%;
  }

  @media (max-width: 920px) {
    display: flex;
    flex-direction: column;

    justify-content: flex-start;

    padding: 0 36px;

    width: 60%;
  }

  @media (max-width: 778px) {
    width: 70%;
  }

  @media (max-width: 662px) {
    width: 80%;
  }

  @media (max-width: 584px) {
    width: 90%;
  }

  @media (max-width: 516px) {
    width: 100%;
  }
`;

export const Content = styled.section`
  width: 70%;

  justify-self: flex-end;
  align-self: center;

  > div.content__text {
    margin-bottom: 3.125rem;
    margin-left: 1rem;

    h1 {
      font-size: 2.35rem;
      font-family: 'Source Sans Pro';
      margin-bottom: 1rem;
      font-weight: bold;
    }

    p {
      font-size: 1.125rem;
      line-height: 1.75rem;
      line-height: 'Open Sans';
      color: #6a6a6a;
      margin-bottom: 2rem;
    }
  }

  @media (min-width: 1441px) {
    div.content__text {
      margin-bottom: 3.125rem;
      margin-left: 12rem;
    }
  }

  @media (max-width: 1378px) {
    width: 80%;
  }

  @media (max-width: 920px) {
    width: 100%;
  }

  @media (max-width: 464px) {
    div.content__text {
      h1 {
        font-size: 26px;
        line-height: 34px;
      }

      p {
        font-size: 12px;
        line-height: 24px;
      }
    }
  }
`;

export const ContainerImg = styled.section`
  position: relative;
  left: 0;

  justify-self: flex-end;

  width: 80%;

  @media (min-width: 1446px) {
    width: 100%;

    display: flex;
    justify-content: flex-end;
  }
`;

export const ContainerBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 50px;

  padding-bottom: 67px;
`;

export const Container = styled.div<VisibledProp>`
  ${({ visibled }) => css`
    margin: 0 auto;

    position: relative;

    animation: ${animationFade} 0.5s;
    ${Content} {
      > div.content__text {
        h1 {
          animation: ${animationH1} 0.8s;
        }

        > p {
          animation: ${animationH1} 1.2s;
        }
      }
    }

    ${ContainerImg} {
      img {
        animation: ${animationsObj.toXAnimation(50)} 2s;
      }
    }
  `}
`;
