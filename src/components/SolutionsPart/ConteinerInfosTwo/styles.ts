import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;

  background: #f4f4f4;

  padding: 100px 0 80px;
`;

export const Content = styled.div`
  max-width: 1085px;
  width: 100%;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3.375rem;

  margin: 0 auto;
`;

export const Info = styled.div`
  h1 {
    color: #707070;
    font-size: 3.125rem;
    line-height: 4.375rem;
  }

  h3 {
    font-size: 1.5625rem;
    line-height: 1.875rem;

    margin: 8px 0;
  }

  p {
    font-size: 0.875rem;
    line-height: 1.5625rem;
  }
`;
