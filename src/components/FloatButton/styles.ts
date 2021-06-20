import styled, { css } from 'styled-components';

type WrapperProps = {
  isAnimated: boolean;
  isCookieActived: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ isAnimated, isCookieActived }) => css`
    position: fixed;
    bottom: ${!isCookieActived ? '174px' : '40px'};
    right: 28px;

    opacity: 0;

    transition: opacity 0.6s ease;

    @media (max-width: 550px) {
      bottom: ${!isCookieActived ? '240px' : '40px'};
    }

    ${isAnimated &&
    css`
      opacity: 1;
    `};

    @media (max-width: 550px) {
      right: 16px;
    }
  `}
`;
