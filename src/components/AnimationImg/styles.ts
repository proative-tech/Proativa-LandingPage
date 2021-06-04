import styled, { css, keyframes } from 'styled-components';
import media from 'styled-media-query';

type HoverProps = {
  isHover: boolean;
  visibled: boolean;
};

const animationHover = keyframes`
  0% {
    width: 66px;
  }
  25% {
    width: 132px;
  }
  50% {
    width: 198px;
  }
  75% {
    width: 264px;
  }
  100% {
    width: 310px;
  }
`;

const spanAnimation = keyframes`
  0% {
   opacity: 0;
  }
  }
  100% {
    opacity: 1;
  }
`;

const modifiers = {
  hover: () => css`
    width: 4.125rem;
    height: 3rem;

    span {
      display: none;
    }
  `,
  noHover: () => css`
    width: 310px;
    height: 3rem;

    justify-content: flex-start;
    padding-left: 2rem;

    animation: ${animationHover} 0.2s;

    span {
      color: #fff;
      margin-left: 2rem;

      animation: ${spanAnimation} 1.3s;
    }
  `,
};

export const Wrapper = styled.div<HoverProps>`
  ${({ isHover }) => css`
    position: absolute;
    bottom: 0;
    right: 0;

    background: #eb0029;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 22px;
      height: 22px;
      fill: #fff;
    }

    ${media.lessThan('medium')`
      width: 180px;
      height: 2.5rem;

      justify-content: flex-start;
      padding-left: 1rem;

      span {
        color: #fff;
        margin-left: 1rem;
      }

    `}

    ${media.greaterThan('medium')`
      ${!isHover && modifiers.hover}
      ${isHover && modifiers.noHover}
    `}
  `}
`;
