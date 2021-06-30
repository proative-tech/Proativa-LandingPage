import styled, { css } from 'styled-components';
import { animationFade, animationsObj } from '../../../utils/animations';
import { VisibledProp } from '../../LandingPart/Informations/styles';

export const Content = styled.div`
  max-width: 1085px;
  width: 100%;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3.315rem;

  margin: 0 auto;

  @media (max-width: 920px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0px;
    column-gap: 3rem;
    row-gap: 1rem;
  }

  @media (max-width: 490px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Info = styled.div`
  h1 {
    color: #707070;
    font-size: 3.125rem;
    line-height: 4.375rem;
  }

  h3 {
    font-size: 1.5625rem;
    line-height: 1.875rem;

    margin: 8px 0;
  }

  p {
    font-size: 0.8rem;
    line-height: 1.5625rem;
  }

  @media (max-width: 920px) {
    max-width: 280px;
    width: 100%;
  }

  @media (max-width: 490px) {
    margin: 0 auto;

    max-width: 180px;
    width: 100%;
  }
`;

export const Container = styled.div<VisibledProp>`
  ${({ visibled }) => css`
    width: 100vw;

    background: #f4f4f4;

    padding: 100px 0 80px;

    @media (max-width: 1140px) {
      padding-left: 26px;
      padding-right: 26px;
    }

    @media (max-width: 920px) {
      padding-top: 52px;
      padding-bottom: 50px;
    }

    ${Info} {
      opacity: ${visibled ? 1 : 0};
    }

    ${visibled &&
    css`
      ${Content} {
        > ${Info}:nth-child(1) {
          animation: ${animationsObj.toXAnimation(150)} 1.2s;
        }
        > ${Info}:nth-child(2) {
          animation: ${animationsObj.toXAnimation(50)} 1.2s;
        }
        > ${Info}:nth-child(3) {
          animation: ${animationsObj.toXAnimation(-50)} 1.2s;
        }
        > ${Info}:nth-child(4) {
          animation: ${animationsObj.toXAnimation(-150)} 1.2s;
        }
      }
    `}
  `}
`;
