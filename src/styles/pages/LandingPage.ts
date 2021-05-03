import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
`;

export const Content = styled.div`
  max-width: 1085px;
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: center;

  > div.content__form {
    padding: 2rem 5rem;
    max-width: 690px;
    margin-left: 5rem;

    h1 {
      font-size: 2, 25rem;
      max-width: 373px;
      font-family: 'Source Sans Pro';
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 1.125rem;
      color: #6a6a6a;
      margin-bottom: 1.5rem;
    }

    form {
      max-width: 420px;
      > div + div {
        margin-bottom: 1rem;
      }
      .input_line {
        display: flex;
        justify-content: space-between;
        margin-top: 1rem;

        .input_item {
          width: 45%;
        }
      }

      label {
        font-size: 1.125rem;
        color: #6a6a6a;
      }

      textarea {
        width: 100%;
        height: 156px;
        border-radius: 15px;
      }

      .contentBtn {
        width: 100%;
        display: flex;
        justify-content: flex-end;

        Button {
          width: 50%;
        }
      }
    }
  }

  > div.content__text {
    padding: 2rem 5rem;

    strong {
      font-size: 1.25rem;
      font-family: 'Source Sans Pro';
      font-weight: bold;
    }

    p {
      font-family: 'Source Sans Pro';
      font-size: 1.125rem;
      line-height: 1.5;
      color: #6a6a6a;
      margin-bottom: 3rem;
      margin-top: 0.5rem;
    }

    p:nth-child(2) {
      max-width: 167px;
    }

    p:nth-child(6) {
      max-width: 267px;
    }

    p:nth-child(8) {
      max-width: 177px;
    }

    p:nth-child(9) {
      max-width: 167px;
      font-size: 0.875rem;
      font-weight: 600;
    }
  }

  @media (max-width: 860px) {
    > div.content__form {
      padding: 2rem 2rem;
    }

    > div.content__text {
      padding: 2rem 1rem;
    }
  }

  @media (max-width: 770px) {
    flex-direction: column;

    > div.content__form {
      margin: 0 auto;
      padding: 2rem 2rem;
    }

    > div.content__text {
      margin: 0 auto;
      width: 450px;
      padding: 2rem 2rem;
    }
  }

  @media (max-width: 430px) {
    > div.content__form {
      margin: 0;
    }
  }
`;
