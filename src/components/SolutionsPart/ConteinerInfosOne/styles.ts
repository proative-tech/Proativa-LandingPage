import styled, { css } from 'styled-components';
import { animationFade, animationsObj } from '../../../utils/animations';
import { VisibledProp } from '../../LandingPart/Informations/styles';

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 7rem;

  width: 55.2%;

  margin: 0 auto;

  @media (max-width: 1366px) {
    gap: 4rem;
  }

  @media (max-width: 1233px) {
    width: 70%;
  }

  @media (max-width: 921px) {
    width: 90%;
  }

  @media (max-width: 578px) {
    display: flex;
    flex-direction: column;

    width: 35%;
  }

  @media (max-width: 490px) {
    width: 55%;
  }
`;

export const Info = styled.div`
  > div {
    height: 80px;
    width: 80px;

    display: flex;
    align-items: center;

    margin-bottom: 12px;
  }

  p.title {
    font-size: 1rem;
    line-height: 1.1875rem;
    color: #eb0029;
    font-weight: bold;
  }

  p:nth-child(3) {
    font-size: 14px;
    line-height: 1.8375rem;
    color: #666666;

    margin-top: 11px;
  }
`;

export const Container = styled.div<VisibledProp>`
  ${({ visibled }) => css`
    width: 100vw;

    background: #fff;

    padding: 100px 0 80px;

    @media (max-width: 578px) {
      padding: 29px;     padding-top: 0px;
    }

    //animations

    ${Info} {
      opacity: ${visibled ? 1 : 0};
    }

    ${visibled &&
    css`
      ${Content} {
        > ${Info}:nth-child(1) {
          animation: ${animationsObj.toYAnimation(50)} 1.2s;
        }
        > ${Info}:nth-child(2) {
          animation: ${animationsObj.toYAnimation(70)} 1.2s;
        }
        > ${Info}:nth-child(3) {
          animation: ${animationsObj.toYAnimation(90)} 1.2s;
        }
      }
    `}
  `}
`;
