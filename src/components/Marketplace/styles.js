import styled from 'styled-components';




export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  max-width: 1440px;
  margin: 0 auto;

  display: grid; 
  grid-template-columns: 710px 657px;
  grid-template-rows: 431px 414px;
  
  .section01 {
    padding: 5rem 3rem;

    h1 {
      margin: 2rem 0 1.5rem 0;
      font-size: 2.25rem;
      text-align: right;
    }

    .text-item {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      
    }

    p {
      text-align: right;
      color: var(--text);
      line-height: 1.6;
      width: 335px;
      justify-content: center;
    }
  }

  .section02 {
    img {
        width: 100%;
        height:100%;
        object-fit: cover;
        object-position: center;
    }
  }

  .section03 {
    background: #E5E5E5;
  }

  .section04 {
    padding: 5rem 3rem;
 
    .text-item {
      padding-top: 1rem;
      width: 100%;
      display: flex;
      justify-content: flex-start;
      
    }

    p {
      
      color: var(--text);
      line-height: 1.6;
      width: 335px;
      justify-content: center;
    }
  }

  @media (max-width: 1160px) {
    grid-template-columns: 1fr;
  }

  @media (max-width:840px) { 

    .section01,.section02 {
      h1,p {
        text-align: left;
      }
    }

    .section02 {
      img {
        width: 100%;
        height:100%;
        object-fit: cover;
        object-position: center;
      }
    }  

    .section01,.section04 {
      .text-item {
        justify-content: flex-start;
      }
    } 
  }

  @media (max-width: 600px) {

    .section01 {
     
      padding: 3rem 2rem;
    }
    .section01,.section04 {
      padding: 5rem 1rem;
    }
  }

  @media (max-width: 400px) {
    .section01 {
      p {
        width: 300px;
      }
    }
    .section04 {
      
      p {
        width: 300px;
      }

    } 
  }

`;