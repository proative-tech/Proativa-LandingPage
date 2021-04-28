import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  background: #f4f4f4;
`;

export const Content = styled.div`
  margin: 0 auto; 

  display: flex;
  justify-content: space-between;
  
  .section01 {
    padding: 5rem 0;
    background: #F4F4F4;

    max-width: 536px;
    width: 100%;

    margin: 0 87px;
    
    h1 {
      margin: 2rem 0 1.5rem 0;
      font-size: 2.25rem;
      text-align: right;
      font-weight: bold;
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
    flex: 1;
    
    img {
        width: 100%;
        height:100%;
    }
  }

  .section03 {
    background: #E5E5E5;
  }

  .section04 {
    padding: 5rem 3rem;
    background: #F4F4F4;
 
    .text-item {
      padding-top: 1rem;
      width: 100%;
      display: flex;
      justify-content: flex-start;
      
    }

    strong {
      font-size: 1rem;
      font-weight: bold;
    }

    p {
      
      color: #434343;
      line-height: 1.6;
      width: 335px;
      justify-content: center;
    }
  }

   @media (min-width: 1441px) {
    max-width: 1440px;
  }

  @media (max-width:1360px) {
    grid-template-columns: 710px auto;


  @media (max-width: 1160px) {
    grid-template-columns: 1fr;
  }

  @media (max-width:840px) { 
    .section01 { 
      padding: 3rem 2rem;
    }

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

  @media (max-width: 768px) {
    .section01,.section04 {
      padding: 5rem 2rem;

      h1 {
        font-size: 1.75rem;
      }
    }
  }

  @media (max-width:400px) {
    display: block;
  }

  @media (max-width: 360px) {
    .section01 {
      padding: 0 2rem;
    }
    .section01, .section04 {
      p {
        width: 200px;
        
      }
    } 
  }
  }
`;