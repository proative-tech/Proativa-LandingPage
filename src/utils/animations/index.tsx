import styled, { css, keyframes } from 'styled-components';

export const animationFade = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const animationsObj = {
  toLeftFromRight: (value: number) => keyframes`
    from {
        opacity: 0;
        transform: translateX(${value}px)
      }
      to {
        opacity: 1;
        transform: translateX(0px);
      }
  `,
  toXAnimation: (value: number) => keyframes`
  from {
      opacity: 0;
      transform: translateX(${value}px)
    }
    to {
      opacity: 1;
      transform: translateX(0px);
    }
`,
  toYAnimation: (value: number) => keyframes`
  from {
      opacity: 0;
      transform: translateY(${value}px)
    }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`,
};

export const toBottomFromTopSmall = keyframes`
  from {
    transform: translateY(20px);
    opacity: 0;
  }

  to {
    opacity: translateY(0);
    opacity: 1;
  }
`;
