import styled from 'styled-components';

export const Content = styled.div`
  max-width: 1140px;
  margin: 0 120px;
  height: 100vh;
  display: grid;
  
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); //width 189 auto-fit , minmax(189px, 1fr)



  @media (max-width:520px) {
    margin: 42px 30px;
  }

`;