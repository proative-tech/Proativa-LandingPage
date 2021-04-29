import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  background: #f4f4f4;
`;

export const Content = styled.div`
  margin: 0 auto; 
  
  display: flex;
  justify-content: space-between;

  min-height: 725px;
  width: 100%;
  
  
  .first-section{
    max-width: 100%;

    > img {
      width: 100%;
    }
  }

  .second-section {
    max-width: 41.0625rem;
    width: 100%;

    padding: 72px 77px 77px 4rem;

    margin-right: auto;

    span {
      color: var(--red);
      font-size: 1rem;
      font-weight: 300;
    }

    h2 {
      font-size: 2rem;
      margin: 1rem 0;
      line-height: 50px;
      font-weight: bold;

      width: 90%;
    }
    
    .text {
      width: 378px;
      padding: 1rem 1rem 1rem 0 ;
    }

    h4 {
      font-size: 1rem;
      color: var(--black);
      padding: 0.5rem 0;
    }

    p {
      color: var(--text);
      font-size: 0.875rem;
      line-height: 25px;
    }
  }

  @media (min-width: 1441px) {
    max-height: 724px;

    .first-section {
      width: 50%;
      overflow: hidden;
    }
  }

  @media (max-width: 1440px) {
    max-height: 724px;
  }


  @media (max-width: 1360px) {
    max-width: 100vw;
    width: 100%;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    min-height: 0;
    max-height: 100%;

    .first-section {

    }

    .second-section {
      padding-left: 2rem;
      padding-top: 2rem;
      padding-bottom: 0;
    }
  }

  @media (max-width: 1216px) {
    .second-section {
      h2 {
        line-height: 40px;
      }
    }
  }

  @media (max-width: 1189px) {
    .second-section {
        div.text{
          margin-right: 0;
          padding: 0px 1rem 0px 0;
        } 
      }
  }

  @media (max-width: 985px) {
    display: flex;
    flex-direction: column;

    section.first-section {
      
    }
    .second-section {
      padding-right: 2rem;

      padding-bottom: 1rem;

      div.text{
        padding: 1rem 1rem 1rem 0;
      }
    }
  }

  @media (max-width:490px) {
    .second-section {
      padding: 53px 2rem 59px;
      
      .text {
        width: 100%;
      }

      h2 {
        font-size: 28px;
        line-height: 35px;

        width: 100%;

        text-align: left;
      }

      p {
        font-size: 12px;
        line-height: 24px;
        font-family: 'Open Sans'
      }
    }
  }
`;