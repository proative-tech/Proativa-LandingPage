import styled from 'styled-components';


export const Container = styled.div`
  width: 100%;
  background: #FFF;

`;

export const Content = styled.div`
   max-width: 1146px;
    margin: 0 auto; 
  

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
  }

  @media (max-width: 840px) {
    margin: 0 30px;
  }

`;

export const Footer = styled.div`
  width: 100%;
  background: #F4F4F4;

  hr {
    background: #E5E3DF;
    margin: 2rem 0 0 0;
    height: 1px;
    border: none;

  }

  .text-footer {
    color: #C4C4C4;
    margin-bottom: 1rem;
  }

   

  .footer {
    max-width: 1140px;
    margin: 0 120px;
    margin-top: 10rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    div {
      padding: 4rem 0
    }

    .contact {  
      p {
        color: #434343;
        font-size: 0.87rem;
        padding-bottom: 0.5rem;
      } 

      span {
        display: flex;
        padding: 1rem 0;
      }

      span a {
        text-decoration: none;
        color: var(--black);
        font-size: 1rem;
      }

      span a:first-child {
        padding: 0 1rem 0 0;
      }

      span a:nth-child(2)::after {
        margin: 10px 12px 0 0;
        content: '';
        width: 6px;
        height: 6px;
        border-radius: 3px;
        left: 0.3rem;
        background: #434343;
        display: block; 
      }   
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
      margin: 5rem 30px;
    }
  }

`;