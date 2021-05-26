import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100vw;
`;

interface ContentProps {
  noPaddingBottom: boolean;
}

export const Content = styled.div<ContentProps>`
  max-width: 1084px;
  width: 100%;
  min-height: 67px;

  margin: 0 auto;

  padding: 44px 0;

  ${props =>
    props.noPaddingBottom &&
    css`
      padding-bottom: 0 !important;
    `}

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
