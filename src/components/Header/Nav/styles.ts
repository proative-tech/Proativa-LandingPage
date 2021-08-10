import styled from 'styled-components';

export const Container = styled.div`
  padding-right: 1.625rem;

  > ul {
    margin-bottom: 10px;
    display: flex;
    align-items: center;

    list-style: none;

    > li + li {
      margin-left: 1.625rem;
    }

    > li {
      position: relative;

      a {
        font-size: 0.875rem;
        line-height: 1.5625rem;

        color: #000;

        text-decoration: none;

        font-family: 'Source Sans Pro';
      }

      &::after {
        content: '';
        display: block;
        width: 100%;
        height: 0.12rem;
        background: #adabac;
        transform: scale(0, 1);
        transform-origin: 0% 100%;
        transition: transform 0.3s ease;
      }

      &:hover::after {
        transform: scale(1, 1);
      }
    }
  }
`;
