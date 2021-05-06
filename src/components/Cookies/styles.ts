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
