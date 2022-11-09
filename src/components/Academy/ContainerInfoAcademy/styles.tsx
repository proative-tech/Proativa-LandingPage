import styled, { css } from 'styled-components';
import { animationFade, animationsObj } from '../../../utils/animations';
import { VisibledProp } from '../../LandingPart/Informations/styles';

export const Content = styled.div`
  max-width: 1085px;
  width: 100%;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3.315rem;

  margin: 0 auto;
  justify-items: center;

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
  max-width: 225px;
  width: 100%;

  position: relative;
  z-index: 1;
  background: #f4f4f4;

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
    font-size: 12px
    line-height: 1.5625rem;
  }

  @media (max-width: 920px) {
    max-width: 280px;
    width: 100%;
  }

  @media (max-width: 490px) {
    margin: 0 auto;

    max-width: 80%; line-height: 1.8rem;
    width: 100%;
  }
`;

export const ContentTop = styled.div`
  width: 100%;

  text-align: center;

  p {
    padding: 30px 0;
  }
`;

export const Container = styled.div<VisibledProp>`
  ${({ visibled }) => css`
    width: 100vw;

    background: #f4f4f4;

    padding: 50px 0 80px;

    @media (max-width: 1140px) {
      padding-left: 26px;
      padding-right: 26px;
    }

    @media (max-width: 920px) {
      padding-top: 52px;
      padding-bottom: 50px;
    }

    // position: absolute;
    // z-index: 1;

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
      }
    `}
  `}
`;

export const Background = styled.div`
  width: 100vw;

  position: absolute;
  z-indez: -1;

  img {
    width: 100%;
  }

  @media (min-width: 520px) and (max-width: 920px) {
    margin-top: 250px;
  }

  @media (max-width: 520px) {
    margin-top: 300px;
  }
`;
