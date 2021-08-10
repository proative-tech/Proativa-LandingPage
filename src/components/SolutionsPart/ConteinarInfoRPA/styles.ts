import styled, { css } from 'styled-components';
import { animationsObj } from '../../../utils/animations';
import { VisibledProp } from '../../LandingPart/Informations/styles';

export const Content = styled.div`
  max-width: 558px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 60px 0;

  h2,
  h4,
  p {
    text-align: center;
    font-family: 'Source Sans Pro';
  }

  h2 {
    font-size: 2rem;
  }

  h4 {
    margin: 4px 0 30px;

    color: #eb0029;

    font-size: 20px;
  }

  p {
    font-size: 1rem;
    line-height: 1.875rem;
  }

  @media (max-width: 580px) {
    margin: 10px  0px 40px;
    
  }
`;

export const Wrapper = styled.div<VisibledProp>`
  ${({ visibled }) => css`
    max-width: 1058px;
    width: 100%;

    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    ${Content} {
      opacity: ${visibled ? 1 : 0};
    }

    ${visibled &&
    css`
      ${Content} {
        animation: ${animationsObj.toYAnimation(70)} 1.2s;
      }
    `}
  `}
`;
