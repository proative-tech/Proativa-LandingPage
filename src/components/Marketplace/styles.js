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
    max-height: 431px;
    display: flex;


    .section01 {
      min-width: 50%;
      margin: 0;

      padding: 0px 2rem 0px 20%;
    }

    .section02  {
      width: 100%;
      overflow: hidden;
    }
  }

  @media (max-width:1360px) {
    max-width: 100vw;
    width: 100%;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    min-height: 0;
    
    .section01  {
      margin: 0 2rem;

      width: 100%;
    }

    .section02 {
      width: 100%;

      img {
        width: 100%;
      }
    }
  }

  @media (max-width: 1195px) {
    .section01 {
      max-width: 100%;
      min-width: 0;

      padding-top: 2rem;
      padding-bottom: 1.5rem;
      margin: 0;

      padding-right: 2rem;
      padding-left: 2rem;
    }
  }

  @media (max-width: 985px) {
    display: flex;
    flex-direction: column;

    .section01 {
      max-width: 41.0625rem;
      width: 100%;

      padding-top: 2rem;

      h1 {
        text-align: left;

        margin-top: 0px;
      }

      div.text-item {
        justify-content: flex-start;

        p {
          text-align: left;
        }
      }
    }

    .section02 {
      order: -1;
    }
  }

  @media (max-width: 490px) {
    .section01 {
      h1 {
        font-size: 28px;
        line-height: 35px;

        width: 80%;
      }

      div.text-item {
        p {
          font-family: 'Open Sans';
          font-size: 12px;
          line-height: 24px;
        }
      }
    }
  }
`;