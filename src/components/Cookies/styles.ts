import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  h3 {
    color: #434343;
    font-size: 1rem;
    line-height: 1.875rem;
  }

  p {
    color: #434343;
    font-size: 0.875rem;
    line-height: 1.125rem;

    a {
      color: #434343;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const ContainerButtons = styled.div`
  button:first-child {
    background: #fff;
    border: 1px solid #595959;
    padding: 7px 28px;
  }

  button:nth-child(2) {
    background: #fff;
    border: 1px solid #595959;
    padding: 7px 42px;
  }

  button + button {
    margin-left: 24px;
  }

  @media (max-width: 720px) {
    display: flex;
    width: 100%;

    button:first-child {
      width: 50%;
    }
    button:nth-child(2) {
      width: 50%;
      padding: 7px 20px;
    }
  }

  @media (max-width: 470px) {
    flex-direction: column;

    button:first-child {
      width: 100%;
    }

    button:nth-child(2) {
      width: 100%;
      padding: 7px 28px;
    }

    button + button {
      margin-top: 12px;
      margin-left: 0px;
    }
  }
`;
