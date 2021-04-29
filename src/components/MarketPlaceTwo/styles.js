import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  background: #f4f4f4;
`;

export const Content = styled.div`
  margin: 0 auto; 

  display: flex;
  justify-content: space-between;

  height: 414px;

  .section03 {
    content: '';
    background: #E5E5E5;
    flex: 1;
  }

  .section04 {
    padding: 5rem 0 0 96px;
    background: #F4F4F4;

    width: 50.20%;
 
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

   @media (min-width: 1441px) {
    max-width: 1440px;

    .section04 {
      width: 50.60%;
    }
  }

  @media (max-width:1360px) {
    max-width: 100vw;
    width: 100%;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    min-height: 0;

  }


  @media (max-width: 1195px) {
    .section04 {
      padding-left: 2rem;
    }
  }

  @media (max-width: 985px) {
    display: flex;
    flex-direction: column;

    .section04 {
      padding-top: 2rem;
      padding-bottom: 50px;

      width: 80%;
    }
  }

  @media (max-width: 490px) {
    .section04 {
      strong {
        font-size: 12px;
        line-height: 24px;

        font-family: 'Open Sans';
      }

      .text-item {
        p {
          font-size: 12px;
          line-height: 24px;

          font-family: 'Open Sans';
        }
      }
    }
  }
`;