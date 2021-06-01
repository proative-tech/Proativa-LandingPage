import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
`;

export const Wrapper = styled.div`
  width: 100vw;
  height: calc(100vh - 120px);
`;

export const Content = styled.div`
  max-width: 1028px;
  width: 100%;
  height: 100%;
  margin: 0 auto;

  > iframe {
    width: 100%;
    height: 100%;
    border: none;
    background: none;
    outline: none;
  }
`;
