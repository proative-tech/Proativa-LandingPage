import styled, { css } from 'styled-components';
import { AnimationImgProps } from '.';

const modifiers = {
  leftToRight: () => css`
    background-position: center left;
    @media (min-width: 929px) {
      &:hover {
        transform: translateX(-50px);
      }
    }
  `,
  rightToLeft: () => css`
    background-position: right;

    @media (min-width: 929px) {
      &:hover {
        transform: translateX(50px);
      }
    }
  `,
};

export const Wrapper = styled.div<AnimationImgProps>`
  ${({ animationDirection, url, height, heightUW }) => css`
    content: '';
    background: url(${url}) #fafafa;
    background-size: cover;

    width: 110%;
    max-height: ${height}px;
    height: 100%;
    position: relative;
    transition: transform 0.3s;

    ${modifiers[animationDirection]()}

    @media (min-width: 1441px) {
      max-height: ${heightUW}px;
    }

    @media (max-width: 928px) {
      height: 400px;
    }
  `}
`;
