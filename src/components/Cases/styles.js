import styled from 'styled-components';


export const Container = styled.div`
  width: 100%;
  background: #FFF;

`;

export const Content = styled.div`
  max-width: 1140px;
  margin: 0 120px;

  .section-main {
    padding: 7rem 0 3rem 0;
    width: 100%;
    text-align: center;

    h3 {
      font-size: 2rem;
      font-weight: bold;
    }

    p {
      font-size: 0.93rem;
      color: var(--text);
    }
  }

  .section-item {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    justify-content: center;

    div {
      text-align: center;
  
      h1 {
        font-size: 4.5rem ;
      }

      p {
        font-size: 0.81rem;
        color: var(--red);
        text-transform: uppercase;
      }
    }
  }

  .section-line {
    padding: 7rem 0;
    width: 100%;
    display: flex;
    justify-content: center;

    hr {
      width: 115px;
      height: 2px;
      background: #C4C4C4;
    }
  }

  .section-client {
    width: 100%;
    text-align: center;
    padding: 0 0 4rem 0;
    
    h3 {
      font-size: 2rem;
    }

    p {
      color: var(--text);
    }
  }

  .section-comentario {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

    gap: 1.5rem;

    .item-comentario {
      display: flex;
      border: 1px solid #EDEDED;
      padding: 2rem 2rem;

      .profile {
        
        display: block;
        justify-content: center;
        width: 100%;

        .img {
          width: 100px;
          height: 100px;
          background: #EDEDED;
        }

        strong {
          font-size: 1rem;
          font-weight: Normal;
          color: red;
        }

        p {
          color: #C4C4C4;
        }
      }

      .note {
       
        width: 100%;
        font-size: 0.93rem;
        color: #434343;
      }
    }
  }

  @media (max-width: 840px) {
    margin: 0 30px;
  }

`;

export const Footer = styled.div`
   width: 100%;
   background: #F4F4F4;

  .footer {
    max-width: 1140px;
    margin: 0 120px;
    margin-top: 10rem;

    display: grid;
    grid-template-columns: repeat(4, 1fr);

    div {
      padding: 4rem 0
    }
  }

  @media (max-width: 840px) {
    .footer {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 600px) {
    .footer {
      grid-template-columns: 1fr;
      margin: 0 30px;
    }
  }

`;