import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  /* height: 100vh; */
  display: grid;
  grid-template-columns: 710px 657px;
  
  .first-section {
    
  }

  .second-section {
    padding: 5rem 4rem;
  
    strong {
      color: var(--red);
      font-size: 1rem;
    }

    h2 {
      font-size: 2.25rem;
      margin: 1rem 0;
    }
    
    .text {
      width:378px;
      padding: 1rem 1rem 1rem 0 ;
    }

    h4 {
      font-size: 1rem;
      color: var(--black);
      padding: 0.5rem 0;
    }

    p {
      color: var(--text);
      font-size: 0.9rem ;
      line-height: 1.7;
    }
  }


  @media (max-width:1370px) {
    /* grid-template-columns: 710px 450px; */
  }

  @media (max-width:1160px) {

    grid-template-columns: 1fr;
    .first-section {
      img {
        
        width: 100%;
        height:100%;
        object-fit: cover;
        object-position: center;

      }
    }

  }

  @media (max-width:520px) {
    
  }

  @media (min-width: 350px) and (max-width: 500px) {
    
    
    .first-section {
      img {
        width: 100%;
        
      }
    }

    .second-section {
      width: 100%;
      padding: 1rem;
     
      .text {
        width:330px;
      }
    }
  }

`;