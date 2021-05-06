import styled from 'styled-components';

export const Container = styled.ul`
  position: absolute;

  background: #fff;

  list-style: none;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  z-index: 20;

  padding: 16px 0;

  li {
    margin-left: 0;

    min-width: 170px;
    width: 100%;

    padding-left: 26px;

    height: 32px;

    a {
      font-size: 0.75rem;
      line-height: 1.5625rem;

      font-family: 'Source Sans Pro';

      &:hover {
        font-weight: 600;
      }
    }
  }

  &::before {
    content: '';
    width: 100%;
    height: 4px;
    background: #d3d3d3;

    position: absolute;
    top: 0;
  }
`;
