import styled, { css } from 'styled-components';

type ContainerProps = {
  disabled: boolean;
};

export const Label = styled.div`
  position: relative;
  display: inline-block;
  width: 45px;
  height: 21px;

  input {
    display: none;
  }

  span.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.4s;
    border-radius: 34px;

    &:before {
      content: '';
      position: absolute;
      height: 16px;
      width: 16px;
      left: 2px;
      bottom: 3px;
      background: #fff;
      transition: 0.4s;
      border-radius: 50%;
    }
  }

  input:checked + span.slider {
    background-color: #9cd1aa;
  }

  input:checked + span.slider:before {
    transform: translateX(24px);
  }
`;

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div.containerLabelText {
    display: flex;
    align-items: center;

    p {
      font-size: 0.75rem;
      line-height: 1.75rem;
      font-weight: bold;
    }

    div.containerTooltip {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: #e2e2e2;
      margin-left: 12px;

      display: flex;
      align-items: center;
      justify-content: center;

      span {
        font-size: 10px;
        font-weight: bold;
        padding-left: 1px;
      }
    }
  }

  // estilos label disabels
  ${({ disabled }) => css`
    ${disabled &&
    css`
      ${Label} {
        span.slider {
          cursor: not-allowed;
        }
      }
    `}
  `}
`;
