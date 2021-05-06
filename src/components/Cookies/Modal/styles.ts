import styled from 'styled-components';

export const Container = styled.div`
  > h1 {
    font-size: 1rem;
    line-height: 1.75rem;
  }

  > p {
    font-size: 0.75rem;
    line-height: 1.125rem;

    color: #434343;

    margin: 9px 0;
  }

  div.containerBtns {
    margin-top: 36px;
    margin-bottom: 18px;

    > button {
      background: #ffffff 0% 0% no-repeat padding-box;
      border: 1px solid #595959;
      padding: 8px 28px;

      font-size: 0.75rem;

      & + button {
        margin-left: 22px;
      }

      &:disabled {
        background: #e2e2e2;
        border-color: #e2e2e2;
        color: #696969;
      }
    }
  }

  button.btnCancel {
    background: transparent;
    border: none;

    font-size: 0.75rem;
    color: #696969;
  }
`;
