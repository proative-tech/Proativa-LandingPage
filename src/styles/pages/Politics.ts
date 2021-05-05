import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
`;

export const ContainerFormat = styled.div`
  max-width: 1085px;
  width: 100%;

  margin: 0 auto;

  > main {
    max-width: 584px;
    width: 100%;

    margin-left: 5rem;
  }

  h1 {
    font-size: 1.875rem;
    line-height: 2.8125rem;

    margin-bottom: 3rem;
  }

  p + p {
    margin-top: 2rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.875rem;
    color: #434343;
  }

  @media (max-width: 920px) {
    > main {
      margin-left: 0px;

      padding-left: 36px;
      padding-right: 36px;
    }
  }
`;
