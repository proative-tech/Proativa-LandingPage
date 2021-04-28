import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  background: #f4f4f4;
`;

export const Content = styled.div`
  margin: 0 auto; 
  
  display: flex;
  justify-content: space-between;

  max-height: 725px;
  
  .first-section{
    max-width: 100%;

    > img {
      width: 100%;
    }
  }

  .second-section {
    max-width: 657px;
    width: 100%;

    padding: 72px 77px 77px 4rem;

    margin-right: auto;

    strong {
      color: var(--red);
      font-size: 1rem;
    }

    h2 {
      font-size: 2rem;
      margin: 1rem 0;
      font-weight: bold;
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
      font-size: 0.875rem ;
      line-height: 1.7;
    }
  }

  @media (min-width: 1441px) {
    max-width: 1440px;
  }

  @media (max-width:1360px) {
    .second-section {
      padding: 2rem 4rem;
    }
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

    .second-section {
      padding: 3rem 2rem;
    }
  }
 
  @media (min-width: 270px) and (max-width: 500px) {
    .first-section {
     
    }
    .second-section {
      h2 {
        font-size: 1.75rem;
      }
      .text {
        width: auto;
      }

    }
  }

`;