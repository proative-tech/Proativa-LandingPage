import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;

  .content__text {
    margin-top: 6.4rem;

    button {
      width: 57%;
    }

    .info__text {
      margin-top: 4rem;
      display: flex;

      div:nth-child(1) {
        width: 300px;
      }

      div:nth-child(2) {
        strong {
        }
      }

      strong {
        font-size: 1.125rem;
      }

      p {
        font-family: 'Source Sans Pro';
        margin-top: 0.3rem;
        line-height: 1.8;
        font-size: 16px;
      }
    }
  }

  @media (max-width: 430px) {
    .content__text {
      padding: 0;
      margin: 0;
      .info__text {
        flex-direction: column;
      }
    }
  }
`;
