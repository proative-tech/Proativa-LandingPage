import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
`;

export const Wrapper = styled.div`
  width: 100vw;
  height: 1300px;

  position: relative;

  bottom: 0;
  left: 0;
  right: 0;
`;

export const Content = styled.div`
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;

  > iframe {
    width: 100%;
    height: 100%;
    border: none;
    background: none;
    outline: none;
    overflow: hidden;
    margin: 0;
    padding: 0;
  }
`;
