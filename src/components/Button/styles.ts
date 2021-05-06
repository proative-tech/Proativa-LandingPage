import styled, { css } from 'styled-components';

interface ContainerProps {
  buttonType: string;
}

export const Container = styled.button<ContainerProps>`
  font-size: 0.875rem;
  font-weight: bold;

  padding: 14px 2.375rem;

  border: 1px solid transparent;

  box-sizing: border-box;

  width: 100%;

  ${
    ({ buttonType }) => buttonType === 'primary' && css`
      color: #fff;
      background: linear-gradient(to right, #f4f4f4 50%, #EB0029 50%);
      background-position: right bottom;
      background-size: 200% 100%;

      transition: all 0.3s ease;


      &:hover {
        background-position: left bottom;
        color: #EB0029;
        border-color: #f4f4f4;
      }
    `
  }

  ${
    ({ buttonType }) => buttonType === 'secondary' && css`
      background: #f4f4f4;
      border-color: #000000;
      color: #000000;

      transition: all 0.3s ease;

      &:hover {
        border-color: #f4f4f4;
      }
    `
  }

  @media (max-width: 490px) {
    font-size: 12px;
    padding: 12px 18px;
  }
  @media (max-width: 321px) {
    font-size: 8px;
    padding: 12px 18px;
  }
`;
