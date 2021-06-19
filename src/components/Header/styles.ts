import styled, { css } from 'styled-components';
import { HeaderProps } from '.';

export const Container = styled.div<HeaderProps>`
  ${({ bgColor, noFixed, bgChangeScroll }) => css`
    width: 100vw;
    background-color: ${bgColor};
    z-index: 50;

    transition: background-color 0.2s;

    ${bgChangeScroll &&
    css`
      background-color: #f4f4f4;
    `}

    ${!noFixed &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
    `}
  `}
`;

interface ContentProps {
  noPaddingBottom: boolean;
  blogAbsolute: boolean;
}

export const Content = styled.div<ContentProps>`
  max-width: 1084px;
  width: 100%;
  min-height: 67px;

  margin: 0 auto;

  padding: 1rem 0 0rem;

  ${props =>
    props.noPaddingBottom &&
    css`
      padding-bottom: 0 !important;
    `}

  ${({ blogAbsolute }) =>
    blogAbsolute &&
    css`
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    `}



  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Both = styled.div`
  height: 170px;
  padding: 44px 0;
`;
