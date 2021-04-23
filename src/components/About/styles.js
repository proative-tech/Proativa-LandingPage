import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  /* height: 100vh; */
  background: #FFF;
`;

export const Content = styled.div`
  max-width: 1140px;
  margin: 42px 120px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  grid-auto-flow: row;
  
  .section-main {
    padding: 5rem 0;
    display: flex;
    justify-content: center;
    font-family: 'Source Sans Pro', sans-serif;

    p {
      color: var(--red); 
      font-size: 1.125rem;
      font-weight: 600;
    }

    h1 {
      font-size: 3.12rem;
      font-weight: lighter;
      color: var(--text);
    }

    strong {
      font-size: 3.12rem;
      font-weight: bold;
    }
  }

  .section-item {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(170px, 1fr)); //width 189 auto-fit , minmax(189px, 1fr)
    grid-auto-rows: 150px;
    gap: 8rem;

    p {
      color: var(--text);
    }

    p strong {
      color: var(--red);
    }
  }

  .section-line {
    display: flex;
    justify-content: center;
    hr {
      width: 115px;
      height: 0.125rem;
      background: #C4C4C4;
    }
  }

  @media (max-width:520px) {
    margin: 42px 30px;
  }
  
`;