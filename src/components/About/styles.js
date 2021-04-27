import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: #FFF;
`;

export const Content = styled.div`
  max-width: 1440px;
  margin: 42px auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
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
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); 
    grid-auto-rows: 195px;
    gap: 4rem;
    /* margin: 0 auto; */
    padding: 2rem 0;

    p {
      color: var(--text);
    }

    p strong {
      color: var(--red);
    }

    .item {
      display: flex;
      flex-direction: column;
      align-items: baseline;
      justify-content: space-between;

    }
    img {
      padding: 1rem 0;
    }
  }

  .section-line {
    display: flex;
    justify-content: center;
   
    hr {
      margin: 2rem 0;
      width: 115px;
      height: 0.125rem;
      background: #C4C4C4;
    }
  }

  @media (max-width: 1150px) {
    .section-item {
      padding: 2rem;
    }
  }

  @media (max-width:960px) {
    .section-item {
      /* grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); */
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem; 
      margin: 0 auto;
    }
  }

  @media (max-width:520px) {
    margin: 42px auto;
    .section-main {
      padding: 5rem 2rem;
    }
    .section-item {
      padding-bottom: 7rem;
    }
  }
  
`;