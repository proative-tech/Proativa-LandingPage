import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
`;

export const Wrapper = styled.div`
  width: 100vw;
  height: calc(100vh - 120px);
`;

export const Content = styled.div`
  


  margin: 0; padding: 0; height: 100%; overflow: hidden;

  > iframe {
    
    width: 100%;
    height: 100%;
    border: none;
    background: none;
    outline: none;
  }
`;
