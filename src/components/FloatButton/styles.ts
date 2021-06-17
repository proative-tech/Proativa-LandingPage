import styled, { css } from 'styled-components';

type WrapperProps = {
  isAnimated: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ isAnimated }) => css`
    position: fixed;
    bottom: 40px;
    right: 28px;

    opacity: 0;

    transition: opacity 0.6s ease;

    ${isAnimated &&
    css`
      opacity: 1;
    `};
  `}
`;
