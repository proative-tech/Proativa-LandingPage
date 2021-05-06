import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;

  background: #fff;

  padding: 77px 0;
`;

export const Content = styled.div`
  max-width: 1085px;
  width: 100%;

  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 7rem;
`;

export const ContainerLeft = styled.div`
  > div.containerLeftText {
    h2 {
      font-size: 1.875rem;
      line-height: 5rem;
      color: #a7a7a7;
    }

    p {
      font-size: 1.125rem;
      line-height: 1.875rem;
      color: #6a6a6a;
    }
  }
`;

export const ContainerRight = styled.div`
  > div.containerRightContent {
    display: flex;
    align-items: center;

    img {
      margin-right: 3rem;
    }

    > div {
      p {
        color: #ea0a2a;
        font-size: 1.25rem;
        line-height: 1.875rem;
      }

      span {
        font-size: 1.125rem;
        line-height: 1.875rem;

        margin-top: 1.5rem;
      }
    }

    & + div.containerRightContent {
      margin-top: 3rem;
    }
  }
`;
