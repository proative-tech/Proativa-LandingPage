import styled, { css } from 'styled-components';
import { animationFade, animationsObj } from '../../../utils/animations';
import { VisibledProp } from '../../LandingPart/Informations/styles';

export const ContainerTop = styled.div`
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

export const ContainerBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100vw;
  max-width: 507px;
  margin: auto;

  margin-top: 60px;

  text-decoration: none;

  h1 {
    margin-bottom: 1.75rem;

    font-size: 2.375rem;
    line-height: 2.5rem;
    font-family: 'Source Sans Pro';
    color: #eb0029;
    font-weight: 600;
    text-align: center;
  }

  div.containerMain {
    h1 {
      font-size: 3.125rem;
      line-height: 3.125rem;
      font-family: 'Source Sans Pro';

      font-weight: 300;
      color: #434343;

      margin-top: 1rem;

      strong {
        font-size: 2.85rem;
        font-weight: 700;
      }
    }
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

    div.containerMain {
      h1 {
        font-size: 30px;
        line-height: 30px;

        strong {
          font-size: 28px;
          line-height: 30px;
          font-weight: 700;
        }
      }
    }
  }
`;

export const Container = styled.div<VisibledProp>`
  ${({ visibled }) => css`
    margin: 0 auto;

    position: relative;

    animation: ${animationFade} 2s;

    ${ContainerBottom} {
      animation: ${animationFade} 4s;
    }
  `}
`;
