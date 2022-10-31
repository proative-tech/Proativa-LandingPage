import styled, { css } from 'styled-components';

import { ButtonTextProps } from '.';

export const WrapperIcon = styled.div``;

export const WrapperButton = styled.p`
  color: #eb0029;
  font-weight: 600;
`;

const modifiers = {
  left: () => css`
    ${WrapperIcon} {
      transform: rotate(45deg);
    }

    ${WrapperButton} {
      margin-left: 1rem;
    }
  `,
  right: () => css`
    ${WrapperIcon} {
      transform: rotate(-45deg);
    }

    ${WrapperButton} {
      order: -1;
      margin-right: 1rem;
    }
  `,
  top: () => css`
    ${WrapperIcon} {
      transform: rotate(270deg);
    }

    ${WrapperButton} {
      margin-left: 1rem;
    }
  `,
  none: () => css`
    ${WrapperIcon} {
      transform: rotate(360deg);
    }

    ${WrapperButton} {
      order: -1;
      margin-right: 1rem;
    }
  `,
};

export const Wrapper = styled.div<Pick<ButtonTextProps, 'directionArrow'>>`
  ${({ directionArrow }) => css`
    display: flex;
    ${modifiers[directionArrow]()}

    position: relative;

    cursor: pointer;

    > a {
      display: flex;
      text-decoration: none;
    }

    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 0.12rem;
      background: #eb0029;
      transform: scale(0, 1);
      transform-origin: 0% 100%;
      transition: transform 0.3s ease;
      position: absolute;
      bottom: -2px;
    }

    &:hover::after {
      transform: scale(1, 1);
    }
  `}
`;
